import './Header.css';

function Header() {
  return (
    <div className="header">
       <div className="header-wrapper">
         <div className="logo-wrapper">
          <div className="logo"></div>
         </div>
         <div className="category-wrapper">
           <div className="catregoryname-wrapper">Home</div>
           <div className="catregoryname-wrapper">Work</div>
           <div className="catregoryname-wrapper">Service</div>
           <div className="catregoryname-wrapper">Our Customer</div>
           <div className="catregoryname-wrapper">Team</div>
           <div className="catregoryname-wrapper">Career</div>
           <div className="catregoryname-wrapper">Contact</div>
           <div className="headerlogoimg"></div>
         </div>
       </div>
    </div>
  )
};

export default Header;
