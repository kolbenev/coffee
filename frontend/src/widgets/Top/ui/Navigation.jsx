import Box from "./Box";

import cls from "./Top.module.css";

const Navigation = () => {
  return (
    <div className={cls.navigation}>
      <Box className={cls.opacity} to='/catalog'>Каталог продукции</Box>
      <Box to='/prices'>Калькулятор цен</Box>
    </div>
  );
};

export default Navigation;
