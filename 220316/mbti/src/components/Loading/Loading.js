import ReactLoading from 'react-loading'
import "./Loading.css"

function LoadingPage({
  text,
}) {
    return (
      <div className='loading-wrapper'>
        <div className='loading-text'>{text}</div>
        <ReactLoading type="spin" />
      </div>
    );
  }
  
  export default LoadingPage;