import { useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import LoadingPage from "../../components/Loading/Loading";


function Result() {
    const [loading, setLoading] = useState(true);
        useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1500);
    }, []);
    if(loading){
        return(
            <LoadingPage text="결과 생성중..." />
        );
    }
    return (
        <Button variant="outline-warning">결과보기</Button>
    );
}

export default Result;