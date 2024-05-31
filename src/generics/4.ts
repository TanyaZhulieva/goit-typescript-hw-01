type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }

  const originalUser: User = {
    name: "Tania",
    surname: "Zhulieva",
    email: "tania@gmail.com",
    password: "qwerty"
  }
  
  function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
    return {...initialValues, ...updates}
  }
  
  createOrUpdateUser(originalUser, { 
    email: 'user@mail.com', 
    password: 'password123' 
  });

  export{}