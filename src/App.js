import './App.scss';
import { MainHeader } from './components/mainHeader/mainHeader';
import { Podcast } from './components/podcast/podcast';
import { dataMock } from './mocks/datamock'

function App() {
  return (
    <div className="App" id='main'>
      {MainHeader()}
      {Podcast(dataMock)}
    </div>
  );
}

export default App;
