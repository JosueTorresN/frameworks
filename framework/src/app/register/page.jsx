import UserInfoComponent from "../components/userInfoComponent/userInfoComponent";
import PasswordComponent from "../components/passwordComponent/passwordComponent";
import styles from "./page.module.css";

export default function Register() {
  return (
    //Poner Foto
    <div className={styles.container}>
      <UserInfoComponent placeholder={"Nombre"}></UserInfoComponent>
      <UserInfoComponent placeholder={"Apellido"}></UserInfoComponent>
      <UserInfoComponent placeholder={"Usuario"}></UserInfoComponent>
      <PasswordComponent placeholder={"Contraseña"}></PasswordComponent>
      <div class="contenedorBotones">
        <a href="/login">←</a>
        <a href="/">✓</a>
      </div>
    </div>
  );
}