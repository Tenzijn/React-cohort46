type PersonProps = {
  first_name: string;
  last_name: string;
  email: string;
};

export default function Person({ first_name, last_name, email }: PersonProps) {
  return (
    <>
      <ul>
        <li>First Name: {first_name}</li>
        <li>Last Name: {last_name}</li>
        <li>Email: {email}</li>
      </ul>
    </>
  );
}
