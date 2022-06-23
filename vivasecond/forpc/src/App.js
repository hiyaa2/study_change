import './App.css';
import IntroPage from './introPage';

import LoadingPage from './loading';
function App() {
  return (
  <div className="allpage">
    <div>  
    <LoadingPage />    
    <IntroPage />
    </div>
  </div>
  );
}

export default App;
