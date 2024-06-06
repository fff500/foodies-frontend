import React from 'react';

import Container from '../Container/Container';
import sprite from '../../../images/icons/sprite.svg';

import { socialLinks } from './data';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footerTop}>
          <div className={styles.logoContainer}>Logo</div>
          <ul className={styles.socialLinksContainer}>
            {socialLinks.map(({ id, link }) => (
              <li className={styles.socialLinkItem} key={id}>
                <a href={link}>
                  <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#${id}`} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <span>@2024, Foodies. All rights reserved</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
