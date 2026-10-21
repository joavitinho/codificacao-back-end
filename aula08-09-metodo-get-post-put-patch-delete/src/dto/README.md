## 🧪 Como Executar os Testes da API

Para garantir que tudo está funcionando perfeitamente, você pode rodar a nossa suite de testes automatizados utilizando o **Postman** ou o **Newman**.

### Pré-requisitos
1. Baixar e instalar o [Postman](https://postman.com).
2. Certificar-se de que a API está rodando localmente (ex: `http://localhost:3000`).

---

### Opção 1: Pela Interface do Postman (Manual)

1. **Importar a Collection:**
   * Baixe o arquivo da collection localizado em `docs/postman/collection.json` (ou substitua pelo seu caminho).
   * Abra o Postman, clique em **Import** no canto superior esquerdo e selecione o arquivo.
2. **Importar o Environment (Se houver):**
   * Importe o arquivo de ambiente localizado em `docs/postman/environment.json`.
   * Certifique-se de selecionar o ambiente ativo no canto superior direito do Postman.
3. **Executar a Suite:**
   * Clique com o botão direito em cima da Collection importada.
   * Selecione **Run Collection**.
   * Clique no botão **Run [Nome da Collection]** para iniciar os testes automatizados.

---

### Opção 2: Pela Linha de Comando (Newman - Recomendado para CI/CD)

O [Newman](https://postman.com) é o executor de collections do Postman para o terminal.

1. **Instalar o Newman globalmente:**
   ```bash
   npm install -g newman
   ```

2. **Executar os testes:**
   Se a sua collection não precisar de variáveis de ambiente externas:
   ```bash
   newman run docs/postman/collection.json
   ```

   Caso utilize variáveis de ambiente (Environment):
   ```bash
   newman run docs/postman/collection.json -e docs/postman/environment.json
   ```

3. **Verificar os Resultados:**
   O terminal exibirá uma tabela detalhada mostrando quais requisições passaram (✔) e quais falharam (✖).
