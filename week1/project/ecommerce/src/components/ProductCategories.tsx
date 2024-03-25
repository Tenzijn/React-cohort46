import allCategories from '../fake-data/all-categories';
import { Button } from '@chakra-ui/react';
import '../styles/productCategories.css';

type ProductCategoriesProps = {
  currentCategory: string;
  setCategory: (category: string) => void;
  showAll: string;
};

export default function ProductCategories(props: ProductCategoriesProps) {
  const toggleActive = (element: string, id: string) => {
    const e = document.querySelectorAll(
      `.${element}`
    ) as NodeListOf<HTMLElement>;
    e.forEach((el) => {
      if (el.id === id) {
        el.classList.add('active-btn');
      } else {
        el.classList.remove('active-btn');
      }
    });
  };

  return (
    <>
      <Button
        className='category-button active-btn'
        onClick={(e) => {
          const target = e.target as HTMLButtonElement;
          props.setCategory(props.showAll);
          toggleActive('category-button', target.id);
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
          onClick={(e) => {
            const target = e.target as HTMLButtonElement;
            props.setCategory(category.split(': ')[1]);
            toggleActive('category-button', target.id);
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
