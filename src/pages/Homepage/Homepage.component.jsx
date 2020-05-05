import * as React from 'react';
import {Jumbotron, Button, Container, ButtonGroup, } from 'react-bootstrap';
import RestaurantList from '../../components/RestaurantList/RestaurantList.component';
import './Homepage.stylesheet.css'
import Yelp from '../../apis/yelp.json';

export default function Homepage(){
    const [results, setResults] = React.useState([]);
    const [displayResults, setDisplayResults] = React.useState([]);

    React.useEffect(() => {
        setResults(Yelp.businesses);
        setDisplayResults(Yelp.businesses);
    }, [])

    const orderByRating = () => {
        function compare(r1, r2){
            if(r1.rating > r2.rating)
                return -1;
            return 1;
        }
        setDisplayResults([...results].sort(compare));
    }

    const filterByPrice = price => {
        console.log(results);
        setDisplayResults([...results].filter(item => item.price === price));
    }
    
    return(
        <Jumbotron fluid>
            <Container className="topContainer">
                <Button onClick = {orderByRating}>
                    Ordenar por avaliação
                </Button>
                <Container className="filterContainer">
                    Filtrar por preço: 
                    <ButtonGroup>
                        <Button onClick = {() => {filterByPrice('$')}}>$</Button>
                        <Button onClick = {() => {filterByPrice('$$')}}>$$</Button>
                        <Button onClick = {() => {filterByPrice('$$$')}}>$$$</Button>
                    </ButtonGroup>
                </Container>
            </Container>
            <RestaurantList data={displayResults}/>
        </Jumbotron>
    )
}