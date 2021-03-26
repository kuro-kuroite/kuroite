import React, { useEffect, useState, VFC } from 'react';

import styles from './ProgressBar.module.css';

export const PureProgressBar: VFC<PureProps> = ({ progress }) => (
  <div className={progress > 0 ? styles.Background : ''}>
    <div
      className={styles.ProgressBar}
      style={{ width: `${progress > 100 ? 100 : progress}%` }}
    />
  </div>
);

const useProgress = (): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bodyHeight = document.body.offsetHeight - window.innerHeight;
      const footerHeight = document.getElementById('footer')?.offsetHeight || 0;
      const progress = (scrollY / (bodyHeight - footerHeight)) * 100;
      // FYI: 0 <= boundaryProgress <= 100
      const boundaryProgress = Math.min(Math.max(0, progress), 100);

      // FYI: 小数点第二位四捨五入
      setProgress(Math.round(boundaryProgress * 10) / 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return progress;
};

export const ProgressBar: VFC<Props> = () => {
  const progress = useProgress();

  return <PureProgressBar progress={progress} />;
};

export type PureProps = {
  progress: number;
};

export type Props = Record<string, unknown>;
