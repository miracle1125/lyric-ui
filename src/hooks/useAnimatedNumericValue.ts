import { useEffect, useState } from 'react';

export function useAnimatedNumericValue(targetValue: number, delay = 10): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = window.setTimeout(() => {
      if (value !== targetValue) {
        setValue(value + 1);
      }
    }, delay);

    return () => {
      window.clearTimeout(interval);
    };
  }, [delay, targetValue ,value]);

  return value;
}
