import Intro    from './components/Intro/Intro.jsx';
import Lore     from './components/Lore/Lore.jsx';
import Meet     from './components/Meet/Meet.jsx';
import Roadmap  from './components/Roadmap/Roadmap.jsx';
import Footer   from './components/Footer/Footer.jsx';
import FAQ      from './components/FAQ/FAQ.jsx';

import './App.css'

function App() {
  return (
    <div className='App'>
      <Intro />
      <Lore />
      <Meet />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
