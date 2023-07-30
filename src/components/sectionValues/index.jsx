import style from "./style.module.scss";

const SumValues = ({ resultValue, paragraph, strong }) => {
  return (
    <section className={`${style.containerValue}`}>
      <div className={style.value}>
        <strong>{strong}</strong>
        <span>{resultValue}</span>
      </div>
      <div className={style.paragraph}>
        <p>{paragraph}</p>
      </div>
    </section>
  );
};
export default SumValues;
