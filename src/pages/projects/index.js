import './style.css';

import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import {
  Helmet,
  HelmetProvider,
} from 'react-helmet-async';

import { Project } from '../../components/project';
import {
  dataprojects,
  meta,
} from '../../content_option';

export const Projects = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataprojects.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <b
                    style={{
                      margin: "20px",
                    }}
                  >
                    {data.title}
                  </b>
                  <Project data={data} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
