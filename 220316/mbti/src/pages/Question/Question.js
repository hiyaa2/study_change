import { useEffect, useState } from 'react';
import LoadingPage from '../../components/Loading/Loading';
import Choice from '../../components/Choice/Choice';
import "./Question.css";

function Question() {
    const [number, setNumber] = useState(0);
    const [answer, setAnswer] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);
    if (loading){
        return (
            <LoadingPage text="문제 생성중..." />
        )
    }
    return (
        <div className='question-wrapper'>
            <Choice number={number} setNumber={setNumber} answer={answer} setAnswer={setAnswer}/>
            <div>{answer}</div>
        </div>
    )
}

export default Question;