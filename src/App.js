import { useEffect, useState } from 'react';
import './App.css';
import Students from './components/Students';
import WelcomeScreen from './components/WelcomeScreen';

function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((error) => alert("API requisition error"))
  }, [])

  const [welcomeScreenOn, setWelcomeScreenOn] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        {welcomeScreenOn ? <WelcomeScreen setWelcomeScreenOn={setWelcomeScreenOn} /> : <Students students={students} welcomeScreenOn={welcomeScreenOn} />}
      </header>
    </div>
  );
}

export default App;
