import style from "./style.module.scss";

const Select = ({ id, label, value, onChange }) => {
  return (
    <div className={style.select}>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} value={value} onChange={onChange}>
        <option className={style.option} value="Entrada">
          Entrada
        </option>
        <option className={style.option} value="Saída">
          Sáida
        </option>
      </select>
    </div>
  );
};

export default Select;
