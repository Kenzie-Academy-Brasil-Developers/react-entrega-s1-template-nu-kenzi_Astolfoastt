import imgLogo from "../../assets/logo.svg";
import style from "./style.module.scss";

const HeaderPage = () => {
  return (
    <header className={style.header}>
      <div className={style.containerLogo}>
      <img src={imgLogo} alt="image logo" />
      </div>
    </header>
  );
};

export default HeaderPage;
