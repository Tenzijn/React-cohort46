import { useEffect, useState } from 'react';
import Person from './Person';

type PersonDetails = {
  name: {
    first: string;
    last: string;
  };
  email: string;
};

export default function PersonController() {
  const [person, setPerson] = useState<PersonDetails | null>(null);

  useEffect(() => {
    const getPerson = async () => {
      await fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => setPerson(data.results[0]));
    };
    getPerson();
  }, []);

  if (!person) return <p>Loading...</p>;
  return (
    <Person
      first_name={person.name.first}
      last_name={person.name.last}
      email={person.email}
    />
  );
}
