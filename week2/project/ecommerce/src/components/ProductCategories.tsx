import { useRef, useEffect } from 'react';
import allCategories from '../fake-data/all-categories';
import { Button } from '@chakra-ui/react';

type ProductCategoriesProps = {
  currentCategory: string;
  setCategory: (category: string) => void;
  showAll: string;
};

export default function ProductCategories(props: ProductCategoriesProps) {
  const activeCategory = useRef<HTMLButtonElement>();
  const previousActiveCategory = useRef<HTMLButtonElement>();

  useEffect(() => {
    activeCategory.current?.style.setProperty(
      'background-color',
      'rgb(193 193 193)'
    );
    previousActiveCategory.current?.style.setProperty(
      'background-color',
      '#edf2f7'
    );
  }, [props.currentCategory]);

  return (
    <>
      <Button
        className='category-button'
        style={{
          backgroundColor:
            props.currentCategory === props.showAll
              ? 'rgb(193 193 193)'
              : '#edf2f7',
        }}
        onClick={() => {
          previousActiveCategory.current = activeCategory.current;
          props.setCategory(props.showAll);
        }}
        mr={3}
      >
        Show All
      </Button>

      {allCategories.map((category, index) => (
        <Button
          id={`category_${index}`}
          className='category-button'
          key={index}
          onClick={() => {
            previousActiveCategory.current = activeCategory.current;
            props.setCategory(category.split(': ')[1]);
            activeCategory.current = document.querySelector(
              `#category_${index}`
            ) as HTMLButtonElement;
          }}
          my={3}
          mr={3}
        >
          {category.split(': ').map((t) => t[0].toUpperCase() + t.slice(1))[1]}
        </Button>
      ))}
    </>
  );
}
