import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {

  const [id, setid] = useState('');
  const [name, setname] = useState('');
  const [franchise, setfranchise] = useState('');
  const [age, setage] = useState('');
  const [DOB, setDOB] = useState('');
  const [list, setlist] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response)=> {
      setlist(response.data);  
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Character List</h1>

      <table>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Franchise</td>
          <td>Age</td>
          <td>DOB</td>
        </tr>

        {
          list.map((val) => 
            <tr>
              <td>{val.id}</td>
              <td>{val.characterName}</td>
              <td>{val.franchise}</td>
              <td>{val.age}</td>
              <td>{val.DOB}</td>
            </tr>
            
          )
        }

      </table>

    </div>
  );
}

export default App;
