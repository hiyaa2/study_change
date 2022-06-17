import './Body.css';

function Body() {
    return (
      <div className="body-wrapper">
        <div className="firstpage-wrapper">
           <div className="firstpage-logo">We Code We Deliver</div>
           <div className="firstpage-text">Twiscode specializes in developing<br/>high-performing mobile and<br/>web applications.</div>
        </div>
        <div className="rectangle-wrapper">
          <div className="overlay-wrapper">
            <div className="arrow-button">
              <div className="arrow-button1"></div>
              <div className="arrow-button2">
                <div className="arrow-button2-explain">Let's Have a Coffee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Body;


