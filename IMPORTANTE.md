# Passo a passo para a instalação do CLI

1. Instalar/verificar se o nodejs está instalado no seu computador.
=> https://nodejs.org/pt
=> Por conta do [npm], que é um gerenciador de pacotes que vem instalado junto com o nodejs.

2. Liberar a instalação do CLI pelo Power Shell
=> Você entra no Power Shell como administrador e irá inserir o seguinte script:
=> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
=> Após, digitar a opção A - Sim para todos.

3. Instalar no Power Shell o CLI do angular:
=> npm i -g @angular/cli 

4. Incluir o caminho do npm nas variáveis de ambiente:
=> C:\Users\jose.bezerra\AppData\Roaming\npm

# Comandos Principais do Angular CLI
ng v => Verifica se o Angular está instalado e em qual versão.
ng new NomeDoApp => Cria um novo App com o nome especificado.
ng serve => Inicializar o servidor.
ng g c NomeDoComponente => Cria um novo componente. 'Versão compactada'.
