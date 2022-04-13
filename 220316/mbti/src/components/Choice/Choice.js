import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import generateQuestion from "../GenerateQuestion/GenerateQuestion";

function Choice({
    number,
    setNumber,
    answer,
    setAnswer,
}) {
    const handleClick = (value) => () => {
        if( setAnswer > 4 ){
            <Link to='/result'></Link>
        }
    alert('내 선택은 ' + value);
    setAnswer([...answer,value]);
    setNumber(number + 1);
    }
    
    return (
        <div>
            <div>question {number + 1}</div>
        <Button variant="outline-primary" onClick={handleClick(generateQuestion()[number][0])}>
            {generateQuestion()[number][0]}
        </Button>
        <Button variant="outline-secondary" onClick={handleClick(generateQuestion()[number][1])}>
            {generateQuestion()[number][1]}  
        </Button>
        </div>
    )
}

export default Choice;