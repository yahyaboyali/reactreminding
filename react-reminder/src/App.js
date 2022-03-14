import './App.css';
import Dashbaoard from './layouts/Dashbaoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './layouts/Navi'
function App() {
  return (
    <div className="App">
      <Navi/>
      <Dashbaoard/>
    </div>
  );
}

export default App;
