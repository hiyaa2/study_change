import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const dummy = ['E','I','S','N','F','T','J','P'];

function Answer ({
    answer,
    setAnswer,
}) {

}
return (
    <div>
        
    </div>
)


function Choice({
    number,
    setNumber,
}) {
    const handleClick = (value) => () => {
        alert('내 선택은 ' + value);
        setNumber(number + 1)
    }
    return (
        <div>
            <div>question {number + 1}</div>
        <Button variant="outline-primary" onClick={handleClick(dummy.slice(number * 2, number * 2 + 2)[0])}>
            {dummy.slice(number * 2, number * 2 + 2)[0]}
        </Button>
        <Button variant="outline-secondary" onClick={handleClick(dummy.slice(number * 2, number * 2 + 2)[1])}>
            {dummy.slice(number * 2, number * 2 + 2)[1]}  
        </Button>
        </div>
    )
}

function Question() {
    const [number, setNumber] = useState(0);
    const [answer, setAnswer] = useState();
    return (
        <div>
            <Link to='/result'>
              <Button variant="outline-warning">결과보기</Button>
            </Link>
            <Choice number={number} setNumber={setNumber} />
            <Answer answer={answer} setAnswer={setAnswer} />
        </div>
    )
}

export default Question;