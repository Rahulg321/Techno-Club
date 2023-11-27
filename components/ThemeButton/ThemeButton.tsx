'use client';

import { FC } from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitchButton: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
    }

    if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (
    <>
      <button
        onClick={handleThemeSwitch}
        className="bg-primary text-background rounded-md py-3 px-2 my-12 w-[10rem] font-semibold"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default ThemeSwitchButton;
