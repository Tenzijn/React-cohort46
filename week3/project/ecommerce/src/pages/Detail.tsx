import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
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
      <div>
        <h1 className='product-title'>{product.title}</h1>
      </div>
      <div className='product-body'>
        <div className='product-desc'>
          <p>{product.description}</p>
        </div>
        <div className='product-icon'>
          <img
            src='../heart-regular.svg'
            alt='Favourite'
            className='icon'
            onClick={(e) => {
              e.preventDefault();
              console.log('Favourite icon clicked');
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
