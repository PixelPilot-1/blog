import Image from 'next/image';
import styles from './page.module.css';
import hero from 'public/hero.png';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button className="" url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="hero_image " className={styles.img} />
      </div>
    </div>
  );
}
