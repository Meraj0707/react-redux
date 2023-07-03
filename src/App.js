import logo from './logo.svg';
import './App.css';
import HomeContainer from './Containers/HomeContainers'
import HeaderContainers from './Containers/HeaderContainers';

function App() {
  return (
    <div className="App">
      <HeaderContainers />
      <HomeContainer />
    </div>
  );
}

export default App;
