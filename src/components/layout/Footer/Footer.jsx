import { Container } from "../Container/";
import { Logo } from "../../shared/";
import { NetworkLinks } from "./NetworkLinks/NetworkLinks";
import { Copyright } from "./Copyright/Copyright";
import styles from "./Footer.module.css";

export const Footer = () => (
  <footer>
    <Container>
      <div className={styles.footerTop}>
        <Logo />
        <NetworkLinks />
      </div>
    </Container>
    <div className={styles.footerBottom}>
      <Copyright />
    </div>
  </footer>
);
