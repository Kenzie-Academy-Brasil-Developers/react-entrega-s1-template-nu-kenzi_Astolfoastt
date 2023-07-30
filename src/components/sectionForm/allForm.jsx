import { useState } from "react";
import Input from "./input";
import InputValue from "./inputValue";
import Select from "./select";
import styles from "./style.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const AllForms = ({ addValue }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const submit = (event) => {
    event.preventDefault();

    description.trim() === "" || value.trim() === "" || type.trim() === ""
      ? toast("Por favor, preencha todos os campos obrigatórios.")
      : (addValue({ description, value, type }),
        setDescription(""),
        setValue(""),
        setType("Entrada"));
  };

  return (
    <section className={styles.containerFlex}>
      <form className="containerFlex" onSubmit={submit}>
        <Input
          label="Descrição"
          placeholder="Digite aqui sua descrição"
          type="text"
          id="title"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <InputValue
          label="Valor (R$)"
          placeholder="1"
          type="number"
          id="title"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Select
          label="Tipo de valor"
          id="title"
          value={type}
          onChange={(event) => setType(event.target.value)}
        ></Select>
        <button type="submit">Inserir Valor</button>
      </form>
    </section>
  );
};

export default AllForms;
