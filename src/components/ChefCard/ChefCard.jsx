import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';
import { Container, Row } from 'react-bootstrap';


const ChefCard = () => {
    const [chef, setChef] = useState([])
    useEffect(() => {
        fetch('https://great-recipe-great-chef-server-rabiulislam13579.vercel.app/allchef')
            .then(res => res.json())
            .then(data => setChef(data))

    }, [])


    return (
        <Container>
            <h1 className='text-center text-success'>Our Best Chef Are Here</h1>
            <Row className='c-card container mb-3 p-3  '>
                {
                    chef.map(singleChef => <SingleChef
                        key={singleChef.id}
                        singleChef={singleChef}
                    ></SingleChef>)
                }
            </Row>
        </Container>
    );
};

export default ChefCard;