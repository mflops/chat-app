import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  size?: number;
};

const LoadingLogo = ({ size = 100 }: Props) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Image
        src={effectiveTheme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
        alt='Logo'
        width={size}
        height={size}
        className='animate-pulse duration-1000'
      ></Image>
    </div>
  );
};

export default LoadingLogo;
