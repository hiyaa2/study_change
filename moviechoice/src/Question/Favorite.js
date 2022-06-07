import './Favorite.css';

function Favorite () {
    return (
    <div className="favoritemovie-wrapper">
        <div className="items">
        <div className="question1-wrapper"><button className="item-button">question1</button></div>
        <div className="question2-wrapper"><button className="item-button">question2</button></div>
        </div>
        <div className="items">
        <div className="question3-wrapper"><button className="item-button">question3</button></div>
        <div className="question4-wrapper"><button className="item-button">question4</button></div>
        </div>
    </div>
    )
};

export default Favorite;