import style from "./style.module.scss";

const CardsList = ({ description, value, type, id, removeValue }) => {
  const borderClass = type === "Entrada" ? "borderGreen" : "borderGrey";

  return (
    <li className={`${style.containerList} ${borderClass}`}>
      <div className={style.descriptionValue}>
        <h2>{description}</h2>
        <span>{type}</span>
      </div>
      <div className={style.value}>
        <span>
          {parseFloat(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => removeValue(id)}>Excluir</button>
      </div>
    </li>
  );
};

export default CardsList;
