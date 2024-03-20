// useAOS.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({
      disable: window.innerWidth < 768,
      once: false,
      ...options,
    });

    return () => {
      AOS.refresh();
    };
  }, [options]);
};

export default useAOS;
