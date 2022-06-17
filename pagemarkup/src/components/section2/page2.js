import './page2.css';

const Section2 = () => {
  return(
    <div className="secondpage-wrapper">
      <div className="box-wrapper">
        <div className="item">
          <div className="item-box bg1"><img className="line-wrapper" src="/img/Line.png" width = "100px" alt = "line" /></div>
          <div className="item-box bg2">
            <div className="category-name">planning</div>
            <div className="category-number">02</div>
          </div>
        </div>
        <div className="item">
          <div className="item-box bg3">
            <div className="category-name">Discuss</div>
            <div className="category-number">01</div>
          </div>
          <div className="item-box bg4">
            <div className="category-name">Coding</div>
            <div className="category-number">03</div>
          </div>
        </div>
      </div>
      <div className="page2thum-wrapper">
          <div className="page2thumnail-wrapper">How<br/>We Work?</div>
          <div className="page2subnamil-wrapper">Let`s discuss what projects<br/>you have in mind</div>
          <div><button className="page2button-wrapper">More</button></div>
      </div>
    </div>
  )
  };
  
  export default Section2;
  
