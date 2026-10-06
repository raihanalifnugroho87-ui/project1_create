import './App.css';
import Labelnama from './componen/labelnama';
import Labelalamat from './componen/labelalamat';

function App() {
  return (
    <div className="App">
      <h1>profile</h1>
      <Labelnama nama="Yupau" />
      <Labelalamat alamat="jalan kebonsir"/>
    </div>
  );
}

export default App;
