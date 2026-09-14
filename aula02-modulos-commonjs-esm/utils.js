export function formatLog(mensagem){
const dataAtual = new Dete().toISOString().split('T')[0];
const horaAtual = new Dete().toLocaleTimeString();
return `[${dataAtual} ${horaAtual}] - ${mensagem}`;

}