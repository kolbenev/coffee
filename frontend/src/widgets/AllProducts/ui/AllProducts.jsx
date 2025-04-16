import Container from "@/shared/ui/Container/Container";
import Title from "@/shared/ui/Title/Title";
import { ProductsTable, Search, Filter } from "@/features/ProductsTable";

import cls from "./AllProducts.module.css";

const AllProducts = () => {

  return (
    <section className={cls.products}>
      <Container>
        <div className={cls.top}>
          <Title title="КАТАЛОГ" italic="ПРОДУКЦИИ" center={false} />
          <div className={cls.wrapper}>
            <Filter />
            <Search />
          </div>
        </div>
        <ProductsTable />
      </Container>
    </section>
  );
};

export default AllProducts;
