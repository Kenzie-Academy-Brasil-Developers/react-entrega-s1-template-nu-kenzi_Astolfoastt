import React, { useState, useEffect } from "react";
import HeaderPage from "../header";
import AllForms from "../sectionForm/allForm";
import SectionList from "../sectionList";
import SumValues from "../sectionValues";
import { ToastContainer } from "react-toastify";

const AllSections = () => {
  const [valueList, setValueList] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const addValue = (formData) => {
    const newValue = { ...formData, id: crypto.randomUUID() };
    setValueList([...valueList, newValue]);
  };

  const removeValue = (removeId) => {
    const newValueList = valueList.filter((value) => value.id !== removeId);
    setValueList(newValueList);
  };

  const calculateSum = () => {
    const totalSum = valueList.reduce((prevValue, valueItem) => {
      const value = parseFloat(valueItem.value);
      return valueItem.type === "Entrada"
        ? prevValue + value
        : prevValue - value;
    }, 0);

    setTotalSum(totalSum);
  };

  useEffect(() => {
    calculateSum();
  }, [valueList]);

  return (
    <>
      <HeaderPage />
      <main className="container">
        <section>
          <AllForms addValue={addValue} />
          {valueList.length > 0 &&(
            <SumValues
              resultValue={totalSum.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              paragraph="O valor se refere ao saldo"
              strong="Valor total:"
              />
          )}
              </section>
              <section>
                <SectionList valueList={valueList} removeValue={removeValue} />
              </section>
        <ToastContainer />
      </main>
    </>
  );
};

export default AllSections;
