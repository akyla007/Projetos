import { useState } from "react";

function App() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    maritalStatus: "",
    genre: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const calculateProgress = () => {
    let value = 0;
    let amountToAdd = 100 / Object.keys(data).length;

    if (data.fullName) {
      const separateString = data.fullName.split(" ");
      if (separateString[1]) {
        value += amountToAdd;
      }
    }
    if (data.email) {
      let pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (pattern.test(data.email)) {
        value += amountToAdd;
      }
    }
    if (data.maritalStatus) {
      value += amountToAdd;
    }
    if (data.genre) {
      value += amountToAdd;
    }

    return value;
  };

  const handleClick = () => {
    alert("Formulário realizado com sucesso!");
    setData({
      fullName: "",
      email: "",
      maritalStatus: "",
      genre: "",
    });
  };

  return (
    <div className="App">
      <h1>progresso do formulário</h1>

      <main>
        <div className="bar-container">
          <div
            style={{ width: `${calculateProgress()}%` }}
            className="bar"
          ></div>
        </div>
        <div className="form-group">
          <label htmlFor="">Nome Completo</label>
          <input
            className="bar-container"
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input
            className="bar-container"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Estado Civil</label>
          <select
            name="maritalStatus"
            value={data.maritalStatus}
            onChange={handleChange}
            style={{ backgroundColor: "#FFF" }}
          >
            <option value="">- selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Gênero</label>
          <div className="radios-container">
            <span>
              <input
                type="radio"
                name="genre"
                value="masculino"
                onChange={handleChange}
                checked={data.genre === "masculino"}
              />{" "}
              Masculino
            </span>
            <span>
              <input
                type="radio"
                name="genre"
                value="feminino"
                onChange={handleChange}
                checked={data.genre === "feminino"}
              />{" "}
              Feminino
            </span>
          </div>
        </div>
        <button
          onClick={handleClick}
          disabled={calculateProgress() !== 100}
          style={{ color: "#000000" }}
        >
          Enviar Formulário
        </button>
      </main>
    </div>
  );
}

export default App;
