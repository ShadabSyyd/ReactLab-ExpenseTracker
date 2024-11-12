import logo from './logo.svg';
import './App.css';
import {ExpTracHome} from "./component/ExpTracHome";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      {
        <ExpTracHome></ExpTracHome>
      }
    </div>

  );
}

export default App;
