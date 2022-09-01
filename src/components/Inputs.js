import React, { useState } from "react";
import "./Inputs.css";
import Table from "./Table";
function Inputs() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    Client: "",
    Montant_Global: "",
    Nombre_des_tranches: "",
  });
  //state to add amounts
  const [amount, setAmount] = useState([]);

  //handleChange function to enter data
  const handleChange = (e) => {
    const newInput = (data) => ({ ...data, [e.target.name]: e.target.value });
    setformInputData(newInput);
  };
  //handleSubmit function to show data in table
  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyInput = {
      Client: "",
      Montant_Global: "",
      Nombre_des_tranches: "",
    };
    setformInputData(emptyInput);
  };

  const addReglement = (e) => {
    e.preventDefault();

    const newData = (data) => [...data, formInputData];
    setTableData(newData);

    let randomAmount = [];
    let total = 0;
    var x = 0;
    var min = 0.001;
    var max = formInputData.Montant_Global - 200;
    for (let i = 0; i < formInputData.Nombre_des_tranches - 1; i++) {
      x = Math.floor(Math.random() * (max - total) - min + 1) + min;
      randomAmount.push(x);
      total += randomAmount[i];
      min += 0.005;
    }
    randomAmount[formInputData.Nombre_des_tranches] =
      formInputData.Montant_Global - total;
    // const newAmount = (data) => [...data, randomAmount];
    // setAmount(newAmount);
    setAmount([...amount, randomAmount]);
  };

  return (
    <div className="Reglement">
      <fieldset>
        <legend>Inscription</legend>
        <p>Entrer les informations du client :</p>
        <form>
          <div className="data_input">
            <label for="">Client:</label>
            <input
              name="Client"
              type="text"
              placeholder="Entrer le nom du client"
              onChange={handleChange}
              value={formInputData.Client}
            ></input>
          </div>
          <div className="data_input">
            <label for="">Montant Global:</label>
            <input
              name="Montant_Global"
              type="number"
              placeholder="Entrer le montant global"
              onChange={handleChange}
              value={formInputData.Montant_Global}
            ></input>
          </div>
          <div className="data_input">
            <label for="">Nombre des tranches:</label>
            <input
              name="Nombre_des_tranches"
              type="number"
              placeholder="Entrer le nombre des tranches"
              onChange={handleChange}
              value={formInputData.Nombre_des_tranches}
            ></input>
          </div>

          <div className="buttons">
            <button type="submit" id="client-btn" onClick={handleSubmit}>
              Ajouter Client
            </button>
            <button type="submit" id="reglement-btn" onClick={addReglement}>
              Ajouter reglement
            </button>
          </div>
        </form>
      </fieldset>
      <Table tableData={tableData} amount={amount} />
    </div>
  );
}

export default Inputs;
