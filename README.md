 <h1>Bate Papo Web</h1>

  <p>Este é um projeto de sala de bate-papo web onde os alunos podem enviar mensagens, fazer login, cadastrar outros
    usuários, e visualizar uma lista de mensagens.</p>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li>Node.js</li>
    <li>ORM Prisma</li>
    <li>Express</li>
    <li>Bcrypt</li>
    <li>Cors</li>
    <li>Dotenv</li>
    <li>Jsonwebtoken</li>
  </ul>

  <h2>Instalação</h2>

  <pre>
    <code>
      git clone https://github.com/seu-usuario/bate-papo-web.git
      cd bate-papo-web
      npm install
    </code>
  </pre>

  <h3>Configurações do Banco de Dados:</h3>
  <p>Crie um arquivo <code>.env</code> na raiz do projeto e configure as variáveis de ambiente necessárias, incluindo as
    informações de conexão do banco de dados.</p>

  <pre>
    <code>
      npm start
    </code>
  </pre>

  <h2>Funcionalidades</h2>
  <ul>
    <li><strong>Login:</strong> Os usuários podem fazer login na plataforma.</li>
    <li><strong>Cadastro:</strong> Os usuários podem se cadastrar na plataforma.</li>
    <li><strong>Envio de Mensagens:</strong> Os alunos podem enviar mensagens na sala de bate-papo.</li>
    <li><strong>Listagem de Mensagens:</strong> Existe uma funcionalidade que permite visualizar a lista de mensagens
      enviadas.</li>
  </ul>

  <h2>Configuração do Banco de Dados</h2>
  <p>Certifique-se de ter configurado corretamente as variáveis de ambiente no arquivo <code>.env</code> para se conectar
    ao banco de dados usando o Prisma.</p>

  <h3>Exemplo de configuração no arquivo <code>.env</code>:</h3>
  <pre>
    <code>
      DATABASE_URL="mysql://usuario:senha@localhost:3306/nome-do-banco"
    </code>
  </pre>

  <h2>Licença</h2>
  <p>Este projeto é licenciado sob a <a href="LICENSE">Licença MIT</a>.</p>


