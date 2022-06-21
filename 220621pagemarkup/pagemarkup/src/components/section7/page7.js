import './page7.css';

const Section7 = () => {
 return (
  <div className="page7-wrapper">
    <div className="page7location-wrapper">
      <div className="page7locationname">Location</div>
      <div className="page7locationbackgroundimg">
        <div className="page7locationinfo">
        <div className="page7locationfirst">Twiscode</div>
        <div className="page7locationsecond">JI.Kayoon,Surabaya</div>
        </div>
      </div>
    </div>
    <div className="page7company-wrapper">
      <div className="page7companyname">Company</div>
      <div className="page7companyinfo">
        <div>-Work</div>
        <div>-Service</div>
        <div>-Team</div>
        <div>-Contact</div>
      </div>
    </div>
    <div className="page7contactus-wrapper">
      <div className="page7contactname">Contact Us</div>
      <div className="page7contactinfo">
        <div className="page7contactlogo">
          <img src="/img/facebooklogo.png" width ="20px" height ="20px" alt = "facebook"/>
          <img src="/img/instalogo.png" width ="20px" height ="20px" alt = "insta" />
          <img src="img/maillogo.png" width ="20px" height ="20px" alt = "mail" />
        </div>
        <div className="page7contactlogoinfo">
           <div>Twiscode</div>
           <div>Twiscode</div>
           <div>andree@twiscode.com</div>
        </div>    
      </div>  
    </div>
  </div>
  )
}

export default Section7;