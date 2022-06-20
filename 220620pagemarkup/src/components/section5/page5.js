import './page5.css';


function Section5() {
  const handleClickImage2 = () => {
    document.getElementById("slidebutton1").style.backgroundColor = 'blue';
    document.getElementById("slidebutton2").style.backgroundColor = '#e5e5e5';
    document.getElementById("slidebutton3").style.backgroundColor = '#e5e5e5';
    document.getElementById("slideshow-profile").style.left = '210px';
    document.getElementById("slideshow").style.height = '394px';
    document.getElementById("profilesize1").style.width = '280px';
    document.getElementById("profilesize1").style.height = '280px';
    document.getElementById("profilesize2").style.width = '170px';
    document.getElementById("profilesize2").style.height = '170px';
    document.getElementById("profilesize3").style.width = '170px';
    document.getElementById("profilesize3").style.height = '170px';

  };
  const handleClickImage3 = () => {
    document.getElementById("slidebutton1").style.backgroundColor = '#e5e5e5';
    document.getElementById("slidebutton2").style.backgroundColor = 'blue';
    document.getElementById("slidebutton3").style.backgroundColor = '#e5e5e5';
    document.getElementById("slideshow-profile").style.left = '-40px';
    document.getElementById("slideshow").style.height = '394px';
    document.getElementById("profilesize2").style.width = '280px';
    document.getElementById("profilesize2").style.height = '280px';
    document.getElementById("profilesize1").style.width = '170px';
    document.getElementById("profilesize1").style.height = '170px';
    document.getElementById("profilesize3").style.width = '170px';
    document.getElementById("profilesize3").style.height = '170px';
  };
  const handleClickImage4 = () => {
    document.getElementById("slidebutton1").style.backgroundColor = '#e5e5e5';
    document.getElementById("slidebutton2").style.backgroundColor = '#e5e5e5';
    document.getElementById("slidebutton3").style.backgroundColor = 'blue';
    document.getElementById("slideshow-profile").style.left = '-290px';
    document.getElementById("slideshow").style.height = '394px';
    document.getElementById("profilesize3").style.width = '280px';
    document.getElementById("profilesize3").style.height = '280px';
    document.getElementById("profilesize1").style.width = '170px';
    document.getElementById("profilesize1").style.height = '170px';
    document.getElementById("profilesize2").style.width = '170px';
    document.getElementById("profilesize2").style.height = '170px';
  }; 
  return(
  <div className="page5-wrapper">
    <div className="page5teamname-wrapper">Our Team</div>
    <div id = "slideshow" className="slideshow-profile">
        <div id="slideshow-profile" className="profile-wrapper">
          <div id ="profile1" className="page5active">
            <div id = "profilesize1"className="page5image2"></div>
            <div className="ourteambox">
              <div className="namecolor">Elisabeth Be</div>
              <div className="jobcolor">COO</div>
            </div>
          </div>
          <div id ="profile2" className="page5active">
            <div id = "profilesize2" className="page5image3"></div>
            <div className="ourteambox">
              <div className="namecolor">Andree Wijaya</div>
              <div className="jobcolor">CEO/CTO</div>
            </div>
          </div>
          <div id ="profile3" className="page5active">
            <div id = "profilesize3" className="page5image4"></div>
            <div className="ourteambox">
              <div className="namecolor">Sanjaya Wahuiu</div>
              <div className="jobcolor">CFO</div>
            </div>
          </div>
        </div> 
    </div>
    <div className="profile-button">
      <button id="slidebutton1" onClick={handleClickImage2}></button>
      <button id="slidebutton2" onClick={handleClickImage3}></button>
      <button id="slidebutton3" onClick={handleClickImage4}></button>
    </div>
  </div>
  )
};

export default Section5;