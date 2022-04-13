import { Link  } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./Home.css";

function Home () {
    return (
        <div className='home-wrapper'>
            <Link to="/question">
              <Button variant="outline-danger">
                  START
              </Button>
            </Link>  
        </div>
    )
}

export default Home;