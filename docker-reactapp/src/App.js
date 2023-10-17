import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import './App.css';

function App() {
  // Define the URL based on the environment
  let url = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/api';

  // State to store the fetched data
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define an async function for the fetch call
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the fetch function when the component mounts
    fetchData();
  }, [url]);

  return (
    <div className="App">
      <h2>Bootstrap Table</h2>
      {data && data.length > 0 ? ( // Check if the list is populated
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
                <td>{person.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default App;
