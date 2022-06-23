import './body.css';

const Body = () => {
  return(
    <div className="body-wrapper">
      <div className="bodyviva">viva</div>
      <div className="bodycenter-wrapper">
        <div className="bodycenter-group1">
          <div>IT</div>
          <div className="half-highlight">Experts</div>
          <div>Group,</div>
          </div>
        <div className="bodycenter-group2">viva<br/>second</div>
        <div className="bodycenter-group3">
          <div className="bodycenter-group3first">IT 서비스 전문 비바세컨드</div>
          <div className="bodycenter-group4second">
            IT 서비스 기획,디자인,개발,마케팅 및 운영<br/>전반에 관하여 파트너사들과 협업하며 꾸준히<br/>상호간의 성장을 이뤄내고 있습니다.
          </div>
        </div>
      </div>
      <div className="bodysecond">second</div>
    </div>
  )
};

export default Body;