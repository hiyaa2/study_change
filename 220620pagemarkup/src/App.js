import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Section2 from './components/section2/page2';
import Section3 from './components/section3/page3';
import Section4 from './components/section4/page4';
import Section5 from './components/section5/page5';
import Section6 from './components/section6/page6';
import Section7 from './components/section7/page7';
import Foot from './components/foot/foot';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Body />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Foot />
    </div>
  )
}

export default App;