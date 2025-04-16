import React, { useState } from "react";
import Container from "@/shared/ui/Container/Container";
import ProgressBar from "../ProgressBar/ProgressBar";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./AppInit.module.css";

import logo from "@/shared/assets/logo-white.png";

const AppInit = ({setLoadedWeb}) => {
  const [progress, setProgress] = useState(0);

  return (
    <section
      className={classNames(cls.section, [], {
        [cls.finish]: progress === 100,
      })}
    >
      <Container>
        <img className={cls.logo} src={logo} alt="logo" />
      </Container>
      <ProgressBar progress={progress} setProgress={setProgress} onFinish={() => setLoadedWeb(false)}/>
    </section>
  );
};

export default AppInit;
