import CardsList from "./cards";
import style from "./style.module.scss";

const SectionList = ({ valueList, removeValue }) => {
  return (
    <section>
      <h1 className={style.titleList}>Resumo Financeiro</h1>
      {valueList.length > 0 ? (
        <ul>
          {valueList.map((value) => (
            <CardsList
              key={value.id}
              description={value.description}
              type={value.type}
              value={value.value}
              id={value.id}
              removeValue={removeValue}
            />
          ))}
        </ul>
      ) : (
        <p>Você ainda não possui nenhum lançamento</p>
      )}
    </section>
  );
};

export default SectionList;
