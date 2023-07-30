import imgLogo from "../../assets/logo.svg";
import style from "./style.module.scss";

const HeaderPage = () => {
  return (
    <header className={style.header}>
      <img src={imgLogo} alt="image logo" />
    </header>
  );
};

export default HeaderPage;
