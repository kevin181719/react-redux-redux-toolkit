import React from 'react'

const App = () => {

  // localStorage.setItem('name', 'John Doe');
  // localStorage.setItem('age', '30');
  // const name = localStorage.getItem('name');
  // const age = localStorage.getItem('age');
  // localStorage.removeItem('age');
  // localStorage.removeItem('token');
  // localStorage.removeItem('name');
  // console.log(name);
  // console.log(age);

  const user = {
    name: 'Jane Doe',
    age: 25,
    email: 'John@gmail.com'
  };

  localStorage.setItem('user', JSON.stringify(user));
  const storedUser = localStorage.getItem('user');
  const parsedUser = JSON.parse(storedUser);
  console.log(parsedUser);

  
  return (
    <div>
      app
    </div>
  )
}

export default App
