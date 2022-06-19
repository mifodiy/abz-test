import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Banner = () => (
    <section id={'banner'} className="banner">
        <Container>
            <Row>
                <Col md={'8'} lg={'7'} className={'banner__inner'}>
                    <h1 className="banner__title">
                        Test assignment for front-end developer
                    </h1>
                    <p className="banner__text">
                        What defines a good front-end developer is one that has skilled knowledge of HTML,
                        CSS, JS with a vast understanding of User design thinking as they'll
                        be building web interfaces with accessibility in mind.
                        They should also be excited to learn, as the world of
                        Front-End Development keeps evolving.
                    </p>
                    <a className="banner__button button" href="#register">
                        Sign up
                    </a>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Banner;
