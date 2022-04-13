import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

import LoadingPage from '../../components/Loading/Loading';
import Choice from '../../components/Choice/Choice';
import "./Question.css";

function Question() {
    const [number, setNumber] = useState(0);
    const [answer, setAnswer] = useState([]);

    return (
        <div className='question-wrapper'>
            <Choice number={number} setNumber={setNumber} answer={answer} setAnswer={setAnswer}/>
            <div>{answer}</div>
        </div>
    )
}

export default Question;