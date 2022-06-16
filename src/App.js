import Intro  from './components/Intro/Intro.jsx';
import Lore   from './components/Lore/Lore.jsx';
import Meet   from './components/Meet/Meet.jsx';

import './App.css'

function App() {
  return (
    <div className='App'>
      <Intro />
      <Lore />
      <Meet />
    </div>
  );
}

export default App;
