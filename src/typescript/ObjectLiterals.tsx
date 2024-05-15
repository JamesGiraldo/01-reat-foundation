interface Person {
  fullName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    fullName: "James Andres Giraldo Escorcia",
    age: 25,
    address: {
      country: "Colombia",
      houseNo: 244,
    },
  };

  return (
    <>
      <h2>Object Literals 2</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
