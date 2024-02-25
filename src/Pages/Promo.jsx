import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap'; 
import { getShoes } from '../features/Sneaker/sneakerSlice';
import CardShop from '../components/Card';
import Layout from '../Layout';
import Slider from '../components/Slider';

export default function Promo() {
    const { status, shoes } = useSelector((state) => state.shoes);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getShoes());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Failed to load shoes data.</div>; // Menampilkan pesan kesalahan jika gagal mengambil data
    }

    console.log(shoes); 

    return (
        <Layout>
        <Container>
            <Slider/>
            <h1 className='display-2 text-center m-5 rounded promo-title'>Promo Sale!!</h1>
            <Row>
                {
                    shoes.map((item, i) => (
                        <Col key={i} xs="6" md="4" lg="3">
                            <CardShop item={item} />
                        </Col>
                    ))
                }
            </Row>
           
        </Container>
        </Layout>
    );
}
