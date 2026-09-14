import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatLog } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.delimiter(__filename);

async function salvarLogSystem(mensagemLog) {
    try{
const pastaLog = path.join(__dirname,'logs');
const arquivoLog = path.join(pastaLog,'system.log');

await fs.mkdir(pastaLog,{recursive:true});
const registroLog = formatLog(mensagemLog);
await fs.appendFile(arquivoLog, registroLog, 'utf-8');

console.log('Log Registrado com sucesso!')
} catch(error){
console.error('Error ao Registrar Log: ', erro);

}
    
}
 salvarLogSystem('Inicializaçao do servidor concluida!\n');
 salvarLogSystem('Conexao com o banco de dados estabelecido!\n');