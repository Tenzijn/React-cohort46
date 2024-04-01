import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { FavoritesContext } from '../context/context';
import Navbar from '../components/Navbar';
import '../styles/detail.css';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Detail() {
  const [product, setProduct] = useState({} as Product);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const { favorites, action } = useContext(FavoritesContext);

  useEffect(() => {
    (async () => {
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setIsLoading(false);
        })
        .catch(() => {
          setError(true);
          setIsLoading(false);
        });
    })();
  }, [id]);

  if (error) {
    return <PageNotFound />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 className='product-title'>{product.title}</h1>
      </div>
      <div className='product-body'>
        <div className='product-desc'>
          <p>{product.description}</p>
        </div>
        <div className='product-icon'>
          <img
            src={
              favorites.includes(product.id)
                ? '../heart-solid.svg'
                : '../heart-regular.svg'
            }
            alt='Favourite'
            className='icon'
            onClick={(e) => {
              e.preventDefault();
              console.log('Favourite icon clicked');
              if (favorites.includes(product.id)) {
                action(favorites.filter((item) => item !== product.id));
              } else {
                action([...favorites, product.id]);
              }
            }}
          />
        </div>
        <div className='product-image'>
          <img src={product.image} alt={product.description} />
        </div>
      </div>
    </>
  );
}
