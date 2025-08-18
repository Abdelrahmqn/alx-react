
import './Login.css';



function App() {
  return (
      <body className='App-body mt-4'>
        <p>Login to access the full dashboard</p>
        <label for="email">Email: </label>
        <input type="email"></input>

        <label for="password">Passwrod: </label>
        <input type="password"></input>

        <button>Okie</button>
      </body>
  );
}

export default App;
