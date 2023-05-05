import { useLoaderData, useParams } from 'react-router-dom';
import './Details.css'
import FoodCard from '../FoodCard/FoodCard';
import { Container, Row } from 'react-bootstrap';

const Details = () => {
    const { id } = useParams()
    const details = useLoaderData()
    const card=details.recipes;
    
    return (
        <Container>
            <div className='text-center container'>
                <img className='d-img rounded' src={details.image} alt="" />
                <h2>{details.food}</h2>
                <h2 className='text-success'>{details.name}</h2>
                <p className='w-50 mx-auto text-secondary'>{details.bio}</p>
                <p className='w-50 mx-auto text-success'>{details.likes} people like this</p>
                <p className='w-50 mx-auto text-success'>{details.number} recipes</p>
                <h3 className='text-success fw-bold my-3'>Recipe</h3>
            </div>
            <Row className='s-card container  '>
                {
                    card.map(s=><FoodCard
                    key={s.name}
                    s={s}
                    ></FoodCard>)
                }
            </Row>
        </Container>
    );
};

export default Details;