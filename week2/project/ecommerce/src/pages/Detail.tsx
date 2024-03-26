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
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch(() => {
          setError(true);
        });
    })();
  }, [id]);

  if (error) {
    return <PageNotFound />;
  }

  return (
    <>
      <div>
        <h1>{product.title}</h1>
      </div>
      <div className='body'>
        <div>
          <p>{product.description}</p>
        </div>
        <div>
          <img src={product.image} alt={product.description} />
        </div>
      </div>
    </>
  );
}
