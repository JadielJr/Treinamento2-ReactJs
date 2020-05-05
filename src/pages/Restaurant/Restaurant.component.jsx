import * as React from 'react';
import {Jumbotron, Image} from 'react-bootstrap';

export default function Restaurant({restaurant, location}){
    const [restaurantInfo, setRestaurantInfo] = React.useState(location.state.restaurant);
    return(
        <Jumbotron>
            <h1>{restaurantInfo.name}</h1>
            <Image height={500}src={restaurantInfo.image_url}/>
            {restaurantInfo.location.display_address.map(address => <h3>{address}</h3>)}
            <p>Contato: {restaurantInfo.phone}</p>
        </Jumbotron>
        //<RestaurantItem restaurant={restaurant}/>
    )
}