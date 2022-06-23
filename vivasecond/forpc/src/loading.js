import { useEffect, useState } from "react";
import Animation0 from "./Components/Animation/Animation0/animation0";
import Animation1 from "./Components/Animation/Animation1/animation1";
import Animation2 from "./Components/Animation/Animation2/animation2";
import Animation3 from "./Components/Animation/Animation3/animation3";
import Animation4 from "./Components/Animation/Animation4/animation4";
import Animation5 from "./Components/Animation/Animation5/animation5";
import Animation6 from "./Components/Animation/Animation6/animation6";
import Animation7 from "./Components/Animation/Animation7/animation7";
import Animation8 from "./Components/Animation/Animation8/animation8";
import Animation9 from "./Components/Animation/Animation9/animation9";
import Animation10 from "./Components/Animation/Animation10/animation10";
import Animation11 from "./Components/Animation/Animation11/animation11";
import Animation12 from "./Components/Animation/Animation12/animation12";

const LoadingPage = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 13) {
        setCount(count + 1);
      } 
    }, 300);

    return () => clearInterval(timer);
  }, [count]);

  
  
  // if (count == 1) return <LoadingPage1 />
  // else if (count == 2) retunr <L

  return (
    <div className="loading-wrapper">
      {count === 1 ? <Animation0 /> : null}
      {count === 2 ? <Animation1 /> : null}
      {count === 3 ? <Animation2 /> : null}
      {count === 4 ? <Animation3 /> : null}
      {count === 5 ? <Animation4 /> : null}
      {count === 6 ? <Animation5 /> : null}
      {count === 7 ? <Animation6 /> : null}
      {count === 8 ? <Animation7 /> : null}
      {count === 9 ? <Animation8 /> : null}
      {count === 10 ? <Animation9 /> : null}
      {count === 11 ? <Animation10 /> : null}
      {count === 12 ? <Animation11 /> : null}
      {count === 12 ? <Animation12 /> : null}
      
    </div>
  )
};

export default LoadingPage;
