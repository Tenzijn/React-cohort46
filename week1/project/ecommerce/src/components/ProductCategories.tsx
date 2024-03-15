import allCategories from '../fake-data/all-categories';
import { Button } from '@chakra-ui/react';

type ProductCategoriesProps = {
  currentCategory: string;
  setCategory: (category: string) => void;
  showAll: string;
};

export default function ProductCategories(props: ProductCategoriesProps) {
  return (
    <>
      {allCategories.map((category, index) => (
        <Button
          id={'catogory_' + index.toString()}
          onClick={() => {
            props.setCategory(category.split(': ')[1]);
          }}
          mr={3}
        >
          {category.split(': ').map((t) => t[0].toUpperCase() + t.slice(1))[1]}
        </Button>
      ))}
      <Button
        id={'category_' + allCategories.length.toString()}
        onClick={() => {
          props.setCategory(props.showAll);
        }}
        mr={3}
      >
        Show All
      </Button>
    </>
  );
}
