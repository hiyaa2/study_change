import './App.css';
import Head from './Components/Head/head';
import Intro from './Components/Intro/intro';
import Body from './Components/Body/body';
import About from './Components/About/about';

function App() {
  return (
    <div className="allpage">
      <Head />
      <Intro />
      <Body />
      <About />
    </div>
  );
}

export default App;
