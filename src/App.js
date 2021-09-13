import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

function Header() {
  return (
        <header className="App-header">
            <User/>
            <Select/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  );
}

function User({name = "unknown"}) {
    return (
        <div className="App-user">
            <p>I am <span id="user-status">{name}</span></p>
        </div>
    );
}
function Select() {
    return (
        <ul className="App-select">
            <li>
                <label htmlFor="student">Student</label>
                <input type="radio" name="who" id="student"/>
            </li>
            <li>
                <label htmlFor="teacher">Teacher</label>
                <input type="radio" name="who" id="teacher"/>
            </li>
            <li>
                <label htmlFor="person">Just a person</label>
                <input type="radio" name="who" id="person"/>
            </li>
        </ul>
    );
}

export default App;
