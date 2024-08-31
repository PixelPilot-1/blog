import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Himanchal . All rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="Tech daily"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="Tech daily"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="Tech daily"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="Tech daily"
          width={20}
          height={20}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
