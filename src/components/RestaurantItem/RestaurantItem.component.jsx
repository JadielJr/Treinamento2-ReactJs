import * as React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function RestaurantItem({restaurant}){

    

    return(
        <Link to={{pathname: `/restaurants/${restaurant.alias}`, state: {restaurant}}} >
            <Card>
            <Card.Img height={300} variant="top" 
                        src={restaurant.image_url!=='' ? `${restaurant.image_url}` : 'https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/b5/dc/restaurante-los-galenos.jpg'}/>
            <Card.Body>
                <Card.Title className="text-center">{restaurant.name}</Card.Title>
                <Card.Subtitle className="text-left">{restaurant.display_phone}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>
                <h3>{restaurant.rating} Estrelas</h3>
            </Card.Footer>
            </Card>
        </Link>
    )
}