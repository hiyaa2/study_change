import './about.css';

const About = () => {
  const handleonClick1 = () => {
    document.getElementById('aboutbutton1').style.backgroundColor='#444444';
    document.getElementById('aboutbutton1').style.color='white';
    document.getElementById('aboutbutton2').style.backgroundColor='white';
    document.getElementById('aboutbutton2').style.color='#444444';
    document.getElementById('aboutbutton3').style.backgroundColor='white';
    document.getElementById('aboutbutton3').style.color='#444444';
    window.location.href = 'Intro';
    
  };

  const handleonClick2 = () => {
    document.getElementById('aboutbutton1').style.backgroundColor='white';
    document.getElementById('aboutbutton1').style.color='#444444';
    document.getElementById('aboutbutton2').style.backgroundColor='#444444';
    document.getElementById('aboutbutton2').style.color='white';
    document.getElementById('aboutbutton3').style.backgroundColor='white';
    document.getElementById('aboutbutton3').style.color='#444444';
    window.location.href = 'Business';
  };

  const handleonClick3 = () => {
    document.getElementById('aboutbutton1').style.backgroundColor='white';
    document.getElementById('aboutbutton1').style.color='#444444';
    document.getElementById('aboutbutton2').style.backgroundColor='white';
    document.getElementById('aboutbutton2').style.color='#444444';
    document.getElementById('aboutbutton3').style.backgroundColor='#444444';
    document.getElementById('aboutbutton3').style.color='white';
    window.location.href = 'Value';
  };
  
  return(
  <div className="aboutpage-wrapper">
    <div className="about-wrapper">
      <div className="aboutvivasecond">About vivasecond</div>
      <div className="aboutbutton-wrapper">
        <div className="aboutbuttondiv1"><button id ="aboutbutton1" onClick={handleonClick1} className="aboutbutton1" ba>Intro</button></div>
        <div className="aboutbuttondiv2"><button id ="aboutbutton2" onClick={handleonClick2} className="aboutbutton2">Business</button></div>
        <div className="aboutbuttondiv3"><button id ="aboutbutton3" onClick={handleonClick3} className="aboutbutton3">Value</button></div>
        <div className="aboutbuttondiv4">Recommendation</div>
        <div className="aboutbuttondiv5">Laboratory</div>
      </div>
    </div>
  </div>
  )
};

export default About;