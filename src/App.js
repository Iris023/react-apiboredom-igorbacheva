import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activity, setActivity] = useState("");

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setActivity(data.activity);
  };

  return (
    <div className="container">
      <h2>Are you bored?</h2>
      <h1>{activity}</h1>
      <button onClick={getActivity}>Another activity</button>
    </div>
  );
}

export default App;
