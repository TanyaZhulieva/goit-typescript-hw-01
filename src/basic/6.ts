type User = {
  name: string;
  age: number;
  email: string;
  address?: {};
};

let userMango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

let userPoly: User = {
  name: "Poly",
  age: 25,
  email: "poly@example.com",
};

export{userMango, userPoly}
