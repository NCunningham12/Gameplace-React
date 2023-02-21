import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
import gamesArray from '../app/shared/GAMES';

const FeaturedRender = () => {
const featGames = gamesArray.filter(g => g.featured === true)
console.log(featGames)

    return (
        <div>
            <ul>
                {featGames
                    .map((g) => (
                        <li>{g.goty}</li>
                    ))}
            </ul>
        </div>

        // <ul>
        //     <li>example 1</li>
        //     <li>example 2</li>
        //     <li>example 3</li>
        // </ul>
    );
};

export default FeaturedRender;
