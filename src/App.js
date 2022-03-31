import './App.css';
import Button from './components/Button';
import List from './components/List';
import About from './components/About';


const buttonTextColor = {
  color: 'aqua'
}

function App() {
  return (
    <div className="App">
      <h1>Styles!</h1>
      <Button buttonTextColor={buttonTextColor}/>
      <br/>
      <List/>
      <br/>
      <About/>
    </div>
  );
}

export default App;