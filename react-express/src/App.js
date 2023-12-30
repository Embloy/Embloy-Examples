import logo from 'https://raw.githubusercontent.com/Embloy/Embloy-Genius-Client/master/public/icons/logo_black_white.svg?token=GHSAT0AAAAAACIK6LT4P3TJPMU5V42U4XBCZMQD4JA';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Make sure to fetch a <code>client_token</code> first.
        </p>
        <a
          className="App-link"
          href="http://localhost:5000/api/make_request"
        >
          Apply with EMBLOY
        </a>
      </header>
    </div>
  );
}

export default App;
