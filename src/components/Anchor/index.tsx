import { useState, useEffect } from 'react';

type Props = {
  url: string;
  name?: string;
  children: React.ReactNode;
};

const TouchableAnchor = ({ url, name, children }: Props) => {
  const [isTouching, setIsTouching] = useState(false);

  const handleTouchStart = () => {
    setIsTouching(true);
  };

  const handleTouchMove = () => {
    setIsTouching(false);
  };

  const handleTouchEnd = () => {
    if (isTouching) {
      window.open(url, '_blank');
    }
  };

  useEffect(() => {
    document.addEventListener('touchmove', handleTouchMove);
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <a
      href={url}
      title={name}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      target='_blank'
    >
      {children}
    </a>
  );
};
export {TouchableAnchor};
