import './App.css';

import Slice2 from "./components/slice2/slice2";
import Slice4 from "./components/slice4/slice4";
import Slice8 from "./components/slice8/slice8";
import Slice16 from "./components/slice16/slice16";
import Plustwo from "./components/plustwo/plustwo";
import Plusthree from './components/plusthree/plusthree';

function App() {
  return (
    <div>
      <Slice2 />
      <Slice4 />
      <Slice8 />
      <Slice16 />
      <Plustwo />
      <Plusthree />
    </div>
  );
}

export default App;
