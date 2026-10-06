import './App.css';
import Labelnama from './componen/labelnama';
import Labelalamat from './componen/labelalamat';
import Button1 from './componen/button1';

function App() {
  return (
    <div className="App">
      <h1>profile</h1>
      <Labelnama nama="Yupau" />
      <Labelalamat alamat="jalan kebonsir"/>
      <Button1/>
    </div>
  );
}

export default App;
