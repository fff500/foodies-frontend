import { Link } from "react-router-dom";
import HeaderNav from "../../HeaderNav";
import User from "../../../pages/User";
import Logo from "../../Logo";
import styles from "./Header.module.css";
import AuthButtons from "../../AuthButtons";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <AuthButtons />
      {/* <HeaderNav />
      <User userImage={"data.serImage"} userName={"data.userName"} /> */}
    </header>
  );
};

export default Header;
