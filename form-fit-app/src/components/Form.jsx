import { useState } from "react"

const Form = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [telefone, setTelefone] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [alimentosPreferidos, setAlimentosPreferidos] = useState([]);

  const handleAlimentosPreferidosChange = (e) => {
    const { value, checked } = e.target;

    if (checked && !alimentosPreferidos.includes(value)) {
      setAlimentosPreferidos([...alimentosPreferidos, value]);
    } else {
      setAlimentosPreferidos(alimentosPreferidos.filter(alimento => alimento !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nome, email, senha, dataNascimento, sexo, telefone, peso, altura, alimentosPreferidos });

    setNome("");
    setEmail("");
    setSenha("");
    setDataNascimento("");
    setSexo("");
    setTelefone("");
    setPeso("");
    setAltura("");
    setAlimentosPreferidos([]);
  };

  return (
    <div>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input type="text" name="nome" placeholder="Digite o seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            </label>
            <label>
                <span>Email: </span>
                <input type="email" name="email" placeholder="Digite o seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                <span>Senha: </span>
                <input type="password" name="senha" placeholder="Digite a sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            </label>
            <label>
                <span>Data de nascimento: </span>
                <input type="date" name="data_nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
            </label>
            <label>
                <span>Sexo: </span>
                <select name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
            </label>
            <label>
                <span>Telefone: </span>
                <input type="tel" name="telefone" placeholder="Digite o seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
            </label>
            <label>
                <span>Peso: </span>
                <input type="number" name="peso" placeholder="Digite o seu peso" value={peso} onChange={(e) => setPeso(e.target.value)} required />
            </label>
            <label>
                <span>Altura: </span>
                <input type="number" name="altura" placeholder="Digite a sua altura em cm" value={altura} onChange={(e) => setAltura(e.target.value)} required />
            </label>
            <input type="submit"/> 
            <label>
                <span>Alimentos Preferidos: </span>
                <div>
                    <label htmlFor="alimento1">Ovo</label>
                    <input type="checkbox" name="alimento1" value="Ovo" checked={alimentosPreferidos.includes("Ovo")} onChange={handleAlimentosPreferidosChange}/>
                </div>
                <div>
                    <label htmlFor="alimento2">Suco</label>
                    <input type="checkbox" name="alimento2" value="Suco" checked={alimentosPreferidos.includes("Suco")} onChange={handleAlimentosPreferidosChange}/>
                </div>
                <div>
                    <label htmlFor="alimento3">Banana</label>
                    <input type="checkbox" name="alimento3" value="Banana" checked={alimentosPreferidos.includes("Banana")} onChange={handleAlimentosPreferidosChange}/>
                </div>
            </label>
        </form>
    </div>
  )
}

export default Form
