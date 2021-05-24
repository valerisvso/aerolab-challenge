import React from "react";
import {Grid as ChakraGrid} from "@chakra-ui/react";

import {Product} from "~/product/types";
import ProductCard from "../ProductCard";

interface Props {
  products: Product[];
}

const Grid: React.FC<Props> = ({products}) => {
  const [selected, setSelected] = React.useState<Product["id"] | null>(null);

  return (
    <ChakraGrid gap={6} templateColumns="repeat(auto-fill, minmax(256px, 1fr))" width="100%">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          isSelected={selected === product.id}
          product={product}
          onClick={() => setSelected(product.id)}
        />
      ))}
    </ChakraGrid>
  );
};

export default Grid;
