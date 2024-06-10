import { useState, useEffect } from 'react';

import { SpriteSVG } from '../../../../assets/icons/SpriteSVG';
import styles from './ResponsiveSVG.module.scss';

const ResponsiveSVG = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const svgBySize = {
    large: () => <SpriteSVG name="1440" />,
    medium: () => <SpriteSVG name="768" />,
    small: () => <SpriteSVG name="375" />,
  };
  const selectedSVG =
    svgBySize[
      screenWidth >= 1440 ? 'large' : screenWidth >= 768 ? 'medium' : 'small'
    ];

  return <div className={styles.bottomRightImg}>{selectedSVG()}</div>;
};

export default ResponsiveSVG;
