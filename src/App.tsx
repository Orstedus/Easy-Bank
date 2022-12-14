import { useState } from 'react';
import Body from './components/Body';
import { Footer } from './components/Footer';
import HeadBody from './components/HeadBody';
import { Header } from './components/Header';
import NavBlock from './components/NavBlock';

function App() {

  const [nav, setNav] = useState(0)

  return (
    <div className="App">
        <Header nav={nav} func={setNav}/>
        <NavBlock nav={nav}/>
        <HeadBody/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
