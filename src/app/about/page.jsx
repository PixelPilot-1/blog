import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Tellers</h1>
          <h2 className={styles.imgDesc}>
            Hand crafting award winning digital experiences.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We ?</h1>
          <p className={styles.desc}>
            The Tech Daily is a cutting-edge digital agency specializing in
            innovative digital works. Our expert team crafts captivating
            websites, interactive mobile apps, and engaging digital marketing
            campaigns, empowering businesses to thrive in the digital era. We
            bring visions to life, pixel by pixel.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do ? </h1>
          <p className={styles.desc}>
            At Tech Daily, we are a leading tech company that excels in
            providing comprehensive digital solutions. Our services include:
            <br />
            <br />
            &mdash; &nbsp;Web Development <br /> &mdash; &nbsp;Digital Marketing
            <br />
            &mdash; &nbsp;UI/UX Design <br /> &mdash; &nbsp; E-commerce
            Solutions
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
