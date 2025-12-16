import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(res.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map((user) => (
          <div key={user.id}>
            
            <p> {user.id}</p>

            <h3>{user.name} <br /> {user.username}</h3>

            <p>{user.email}</p>

            <p>
              {user.address.city} <br />
              {user.address.street} <br />
              {user.address.suite} <br />
              {user.address.city} <br />
              {user.address.zipcode} <br />
              {user.address.geo.lat} <br />
              {user.address.geo.lng}
            </p>

            <p>
              {user.phone} <br />
              {user.website}
            </p>

            <p>
              {user.company.name} <br />
              {user.company.catchPhrase} <br />
              {user.company.bs}
            </p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
