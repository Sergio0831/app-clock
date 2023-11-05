import styles from './styles.module.css';

type BgImageProps = {
  mobileBg: string;
  tabletBg: string;
  desktopBg: string;
  alt: string;
};

// const wideScreenMediaQuery = '(min-width: 1440px)';
const desktopMediaQuery = '(min-width: 769px)';
const tabletMediaQuery = '(min-width: 420px)';

const BgImage = ({ mobileBg, tabletBg, desktopBg, alt }: BgImageProps) => {
  return (
    <>
      <picture>
        <source media={desktopMediaQuery} srcSet={desktopBg} />
        <source media={tabletMediaQuery} srcSet={tabletBg} />
        <img className={styles.image} src={mobileBg} alt={alt} />
      </picture>
    </>
  );
};

export default BgImage;
