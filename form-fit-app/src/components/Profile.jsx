import "../styles/Profile.css";

const ProfilePage = ({ dadosAluno }) => {
  return (
    <div className="profile-page-container">
      <h1 className="profile-page-title">DADOS DO ALUNO</h1>
      <div className="personal-data-section">
        {/* <img
          src={dadosAluno.photoPath}
          alt="Foto do Perfil"
          className="profile-photo"
        /> */}
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
        </div>
      </div>

      <div className="fit-data-section">
        <div className="measures-section">
          <p>
            <span>Peso: </span>
            {dadosAluno.peso} kgs
          </p>
          <p>
            <span>Altura: </span>
            {dadosAluno.altura} m
          </p>
        </div>

        {/* <div className="favorites-section">
          <span>Alimentos Preferidos</span>
          <ul>
            {dadosAluno.preferidos.map((elemento, indice) => (
              <li key={indice}>{elemento.comida}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ProfilePage;
