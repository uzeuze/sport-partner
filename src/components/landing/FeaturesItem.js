import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles/FeaturesItem.css';

const FeaturesItem = props => {
  return (
    <div
      className={
        props.reverse ? 'FeaturesItem FeaturesItem--reverse' : 'FeaturesItem'
      }
    >
      <Grid>
        <Row>
          <Col className="FeaturesItem__image_container" xs={12} sm={12} md={6}>
            <img
              src={props.image}
              className="FeaturesItem__image"
              alt={props.alt}
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="FeaturesItem__textContent">
              <h3 className="FeaturesItem__title">
                {props.title}
              </h3>
              <p className="FeaturesItem__text">
                {props.text}
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default FeaturesItem;
