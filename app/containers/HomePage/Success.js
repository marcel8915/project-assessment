import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { Row, Col } from 'components/Grid';
import { theme as themeConst } from 'utils/constants';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.lightGreen};
  border-radius: 10px;
  padding: 20px;

  @media (min-width: 768px) {
    margin: 50px 30px;
  }
`;
const CheckIcon = styled(Icon)`
  color: ${themeConst.color.green};
  font-size: 65px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.lightGray};
  margin: 10px 0px;
`;
const FAIcon = styled(FontAwesomeIcon)`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: 36px;
`;
const TextLink = styled.label`
  cursor: pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.color.orange};
  text-decoration: underline;
`;

const Success = () => (
  <Container>
    <Row type="flex" justify="center">
      <Col>
        <CheckIcon type="check-circle" theme="filled" />
      </Col>
    </Row>
    &nbsp;
    <Row>
      <Col>
        <Title>Got it!</Title>
        <h2 style={{ textAlign: 'center' }}>
          Thank you for submitting your entry. The winner will be notified via email on 1 Mar 2019. Stay Tuned!
        </h2>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col>
        <h2 style={{ textAlign: 'center' }}>Share this on</h2>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle" gutter={8}>
      <Col xs={10} sm={5} md={10} lg={8} xl={6} xxl={4} style={{ display: 'flex', alignItems: 'center' }}>
        <FAIcon icon={faWhatsapp} color="green" />
        &nbsp;
        <span>Whatsapp</span>
      </Col>
      <Col xs={10} sm={5} md={10} lg={8} xl={6} xxl={4} style={{ display: 'flex', alignItems: 'center' }}>
        <FAIcon icon={faFacebook} color="blue" />
        &nbsp;
        <span>Facebook</span>
      </Col>
    </Row>
    &nbsp;
    <Row type="flex" justify="center">
      <Col>
        <TextLink>Back to Green Apples Advisory website</TextLink>
      </Col>
    </Row>
  </Container>
);
export default Success;
