import style from "./style.module.scss";

const InputValue = ({ label, id, type, value, onChange, placeholder }) => {
  return (
    <div className={style.input}>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputValue;
