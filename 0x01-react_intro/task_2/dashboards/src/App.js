
import './App.css';
import { getFooterCopy, getFullYear } from './utils.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20250816%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250816T185658Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=17ac5d002d1b02b36347c5a2dab26f697bc76862f4dfec597aeba5d9f479ce99' className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr class="solid"></hr>
      <body className='App-body mt-4'>
        <p>Login to access the full dashboard</p>
        <label for="email">Email: </label>
        <input type="email"></input>

        <label for="password">Passwrod: </label>
        <input type="password"></input>

        <button>Okie</button>
      </body>
      <footer className='App-footer'>
      <hr class="solid"></hr>
        <p>Copyright {getFooterCopy()} - {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
