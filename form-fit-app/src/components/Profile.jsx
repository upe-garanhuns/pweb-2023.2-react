import "../styles/Profile.css";

const ProfilePage = ({ dadosAluno }) => {
  return (
    <div className="profile-page-container">
      <h1 className="profile-page-title">DADOS DO ALUNO</h1>
        <div className="profile-data">
          <div className="side">  
            <p>
              <span>Nome: </span>
              {dadosAluno.nome}
            </p>
            <p>
              <span>Telefone: </span>
              {dadosAluno.telefone}
            </p>
            <p>
              <span>E-mail: </span>
              {dadosAluno.email}
            </p>
          </div>
          <div className="side">
            <p>
              <span>Data de Nascimento: </span>
              {dadosAluno.dataNascimento}
            </p>
            <p>
              <span>Sexo: </span>
              {dadosAluno.sexo}
            </p>
            <p>
              <span>Senha: </span>
              {dadosAluno.senha}
            </p>
          </div>
          <div className="side">
            <p>
              <span>Peso: </span>
              {dadosAluno.peso} kgs
            </p>
            <p>
              <span>Altura: </span>
              {dadosAluno.altura} m
            </p>
          </div>
        </div>


      
    </div>
  );
};

export default ProfilePage;
