import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://raw.githubusercontent.com/Embloy/Embloy-Examples/main/config/assets/logo_black_white.svg" className="App-logo" alt="logo" />
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
