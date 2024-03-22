import { useEffect, useState } from 'react';
import Person from './Person';
import Loading from './Loading';

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
    (async function getPerson() {
      await fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => setPerson(data.results[0]));
    })();
  }, []);
  console.log('person:', person);

  return !person ? (
    <Loading />
  ) : (
    <Person
      first_name={person.name.first}
      last_name={person.name.last}
      email={person.email}
    />
  );
}
