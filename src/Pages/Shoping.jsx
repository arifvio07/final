import React, { useState, useEffect } from 'react';
import fetchData from '../features/Shop Data/shopData'; // Sesuaikan path sesuai dengan struktur folder Anda
import { Col, Container, Row } from 'reactstrap';
import Layout from '../Layout';
import CardShop2 from '../components/Card2';
import Slider2 from '../components/Slider2';

const Shoping = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData();
        if (data) {
          setProducts(data.products); // Akses properti products dari respons API
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
    <Container>
    <Slider2/>
    <h1 className='display-2 text-center m-5 rounded promo-title'>Happy Shoping!</h1>
      <Row>
        {products.length > 0 ? (
          products.map((item, i) => (
            <Col key={i} xs="6" md="4" lg="3">
              <CardShop2 item={item} />
            </Col>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Row>
    </Container>
    </Layout>
  );
};

export default Shoping;
