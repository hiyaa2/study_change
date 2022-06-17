import './Header.css';

function Header() {
  return (
    <div className="header">
       <div className="header-wrapper">
         <div className="logo-wrapper">
          <div className="logo"></div>
         </div>
         <div className="category-wrapper">
           <div>Home</div>
           <div>Work</div>
           <div>Service</div>
           <div>Our Customer</div>
           <div>Team</div>
           <div>Career</div>
           <div>Contact</div>
           <div className="headerlogoimg"></div>
         </div>
       </div>
    </div>
  )
};

export default Header;
