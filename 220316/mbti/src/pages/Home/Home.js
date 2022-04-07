import { Link  } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Home () {
    return (
        <div>
            <Link to="/question">
              <Button variant="outline-danger">
                  START
              </Button>
            </Link>  
        </div>
    )
}

export default Home;