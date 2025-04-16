import React, { useEffect, useState } from "react";

import cls from "./ProgressBar.module.css";

const ProgressBar = ({ onFinish, progress, setProgress }) => {
  const [domReady, setDomReady] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    const minTimer = setTimeout(() => setMinTimePassed(true), 5000);

    const handleDomReady = () => setDomReady(true);
    if (document.readyState === "complete") {
      handleDomReady();
    } else {
      window.addEventListener("load", handleDomReady);
    }
    document.querySelector(".app").classList.add("overflow-loader");

    return () => {
      clearTimeout(minTimer);
      document.querySelector(".app").classList.remove("overflow-loader");
      window.removeEventListener("load", handleDomReady);
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const tick = () => {
      if (isCancelled) return;

      setProgress((prev) => {
        if (prev >= 90) return prev;
        const next = prev + Math.random() * 15;
        return Math.min(next, 90);
      });

      const delay = 100 + Math.random() * 400;
      setTimeout(tick, delay);
    };

    tick();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (domReady && minTimePassed) {
      const finish = () => {
        setProgress(100);
        setTimeout(() => {
          onFinish?.();
        }, 500);
      };

      finish();
    }
  }, [domReady, minTimePassed, onFinish]);

  return (
    <div className={cls.progress}>
      <div className={cls.line} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
