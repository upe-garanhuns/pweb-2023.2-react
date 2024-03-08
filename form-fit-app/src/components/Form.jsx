import { useState } from "react"
import { useFetch } from "../hooks/useFetch";
import "../styles/Form.css";

const url = "http://localhost:3000/pessoas"

const Form = () => {

  const {data: items, httpConfig} = useFetch(url);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log({ nome, email, senha, dataNascimento, sexo, telefone, peso, altura, alimentosPreferidos });

    const pessoa = {
        nome, email, senha, dataNascimento, sexo, telefone, peso, altura, alimentosPreferidos
    }

    httpConfig(pessoa, "POST");

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
    <div className="forms">
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
                <span>Altura: </span>
                <input type="number" name="altura" placeholder="Digite a sua altura em cm" value={altura} onChange={(e) => setAltura(e.target.value)} required />
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
                <span>Sexo: </span>
                <select name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
            </label>
            <label>
                <span>Alimentos Preferidos: </span>
                <div className="checkboxs">
                <div>
                    <input type="checkbox" name="alimento1" value="Ovo" checked={alimentosPreferidos.includes("Ovo")} onChange={handleAlimentosPreferidosChange}/>
                    <label htmlFor="alimento1">Ovo</label>
                </div>
                <div>
                    <input type="checkbox" name="alimento2" value="Suco" checked={alimentosPreferidos.includes("Suco")} onChange={handleAlimentosPreferidosChange}/>
                    <label htmlFor="alimento2">Suco</label>
                </div>
                <div>
                    <input type="checkbox" name="alimento3" value="Banana" checked={alimentosPreferidos.includes("Banana")} onChange={handleAlimentosPreferidosChange}/>
                    <label htmlFor="alimento3">Banana</label>
                </div>
                </div>
            </label>
            <input className="input-enviar" type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Form
