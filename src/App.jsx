import './App.css';
import { useState } from 'react';
import axios from 'axios';
import useTimer from 'react-timer-hook';

const SearchDirectoryComponent = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState();
  const handleClick = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Search Directory</h1>
      <input type="number" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Get Data</button>
      <div>
        {data && (
          <>
            <p>Name: {data.username}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Gender: {data.gender}</p>
            <p>
              Address: {data.address.suite}, {data.address.street},{' '}
              {data.address.city}
            </p>
          </>
        )}
      </div>
    </>
  );
};

const TimerComponent = () => {
  let [counter, setCounter] = useState(0);
  let [intervelId, setIntervelId] = useState(null);

  const countdown = () => {
    setCounter(counter++);
  };

  const handleStartClick = () => {
    setIntervelId(setInterval(countdown, 1000));
  };

  const handleStopClick = () => {
    clearInterval(intervelId);
    setIntervelId(null);
  };
  const handleResetClick = () => {
    setCounter(0);
  };
  return (
    <>
      <h2>Timer</h2>
      <button onClick={handleStartClick}>Start</button>{' '}
      <button onClick={handleStopClick}>Stop</button>{' '}
      <button onClick={handleResetClick}>Reset</button>
      <p>{counter}</p>
    </>
  );
};

function App() {
  return (
    <>
      <SearchDirectoryComponent />
      <hr />
      <TimerComponent />
    </>
  );
}

export default App;
