import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PeopleList from './components/PeopleList/PeopleList';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [peopleData, setPeopleData] = useState([]);
const [axiosCall, setAxiosCall] = useState('https://swapi.co/api/people');
const [data, setData] = useState([]);


useEffect(() => {
  axios.get(axiosCall)
  .then(response => {
    console.log(response);
    setPeopleData(response.data.results);
    setData(response.data);
  })
  .catch(error => {
    console.log('Uh oh...', error);
  })

},[axiosCall])


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleList setAxiosCall={setAxiosCall} data={data} peopleData={peopleData} />
    </div>
  );
}

export default App;
