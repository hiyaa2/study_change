import './page5.css';


function Section5() {
  // const page5active = document.getElementsByClassName("profile-img")
  // const arr = [document.getElementById("profile0"),document.getElementById("profile1"),document.getElementById("profile2"),document.getElementById("profile3"),document.getElementById("profile4"),document.getElementById("profile5")];
  const handleClickImage1 = () => {
    document.getElementById("slideshow-profile").style.left = '240px';
    document.getElementById("profilesize1").style.width = '170px';
    document.getElementById("profilesize1").style.height = '170px';
    document.getElementById("profilesize2").style.width = '170px';
    document.getElementById("profilesize2").style.height = '170px';
    document.getElementById("profilesize3").style.width = '170px';
    document.getElementById("profilesize3").style.height = '170px';
    };
  const handleClickImage2 = () => {
    document.getElementById("slideshow-profile").style.left = 0;
    document.getElementById("profilesize1").style.width = '280px';
    document.getElementById("profilesize1").style.height = '280px';
    document.getElementById("profilesize2").style.width = '170px';
    document.getElementById("profilesize2").style.height = '170px';
    document.getElementById("profilesize3").style.width = '170px';
    document.getElementById("profilesize3").style.height = '170px';
  };
  const handleClickImage3 = () => {
    document.getElementById("slideshow-profile").style.left = '-240px';
    document.getElementById("profilesize2").style.width = '280px';
    document.getElementById("profilesize2").style.height = '280px';
    document.getElementById("profilesize1").style.width = '170px';
    document.getElementById("profilesize1").style.height = '170px';
    document.getElementById("profilesize3").style.width = '170px';
    document.getElementById("profilesize3").style.height = '170px';
  };
  const handleClickImage4 = () => {
    document.getElementById("slideshow-profile").style.left = '-480px';
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
    <div className="slideshow-profile">
        <div id="slideshow-profile" className="profile-wrapper">
          <div id ="profile0" className="page5active">
            <div className="page5image1"></div>
          </div>
          <div id ="profile1" className="page5active">
            <div id = "profilesize1"className="page5image2"></div>
            <div>
              <div className="namecolor">Elisabeth Be</div>
              <div className="jobcolor">COO</div>
            </div>
          </div>
          <div id ="profile2" className="page5active">
            <div id = "profilesize2" className="page5image3"></div>
            <div>
              <div className="namecolor">Andree Wijaya</div>
              <div className="jobcolor">CEO/CTO</div>
            </div>
          </div>
          <div id ="profile3" className="page5active">
            <div id = "profilesize3" className="page5image4"></div>
            <div>
              <div className="namecolor">Sanjaya Wahuiu</div>
              <div className="jobcolor">CFO</div>
            </div>
          </div>
          <div id ="profile4" className="page5active">
            <div className="page5image5"></div>
          </div>
        </div> 
    </div>
    <div className="profile-button">
      <button classNmae="dot1-button" onClick={handleClickImage1}></button>
      <button classNmae="dot-button" onClick={handleClickImage2}></button>
      <button classNmae="dot-button" onClick={handleClickImage3}></button>
      <button classNmae="dot-button" onClick={handleClickImage4}></button>
    </div>
  </div>
  )
};

export default Section5;