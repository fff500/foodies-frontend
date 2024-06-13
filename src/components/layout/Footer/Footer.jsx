import { Link } from "react-router-dom";
import { Container } from "../Container/";
import { Icon, Logo } from "../../shared/";
import { socialLinks } from "./data";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footerTop}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className={styles.socialLinksContainer}>
            {socialLinks.map(({ id, link }) => (
              <li className={styles.socialLinkItem} key={id}>
                <a
                  href={link}
                  className={styles.socialLink}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Icon
                    id={id}
                    className={styles.socialLinkIcon}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className={styles.footerBottom}>
        <span className={styles.footerCopyright}>
          @2024, Foodies. All rights reserved
        </span>
      </div>
    </footer>
  );
};
