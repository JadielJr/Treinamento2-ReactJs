import * as React from 'react';
import {Container, CardColumns} from 'react-bootstrap';
import RestaurantItem from '../RestaurantItem/RestaurantItem.component';

export default function RestaurantList({data}){
    return(
        <Container>
            <CardColumns>
                {data.map(restaurant => (
                    <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
                ))}
            </CardColumns>
        </Container>
    )
}