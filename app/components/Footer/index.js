import React from 'react';
import styled from 'styled-components';

import { Col, Row } from 'components/Grid';

const Container = styled.div`
  // background-color: ${({ theme }) => theme.color.black};
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.color.green};
`;
const TextLink = styled.label`
  color: ${({ theme, secondary }) => (secondary ? theme.color.gray : theme.color.white)};
  font-size: ${({ secondary }) => (secondary ? '12px' : '14px')};
  ${({ copyright }) => (copyright ? 'float: right;' : 'cursor: pointer;')}
`;

const Footer = () => (
  <Container>
    <Row>
      <Col>
        <Title>Green Apples Advisory</Title>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} lg={4}>
        <TextLink>Home</TextLink>
      </Col>
      <Col xs={12} sm={12} lg={4}>
        <TextLink>Services</TextLink>
      </Col>
      <Col xs={12} sm={12} lg={4}>
        <TextLink>Discovery</TextLink>
      </Col>
      <Col xs={12} sm={12} lg={4}>
        <TextLink>About</TextLink>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} lg={4}>
        <TextLink>Review</TextLink>
      </Col>
      <Col xs={12} sm={12} lg={4}>
        <TextLink>Contact Us</TextLink>
      </Col>
    </Row>
    &nbsp;
    <Row type="flex" justify="space-between">
      <Col xs={24} sm={24} lg={3}>
        <TextLink secondary>Terms & conditions</TextLink>
      </Col>
      <Col xs={24} sm={24} lg={3}>
        <TextLink secondary>Fair dealing policy</TextLink>
      </Col>
      <Col xs={24} sm={24} lg={4}>
        <TextLink secondary>Insurance guides & useful links</TextLink>
      </Col>
      <Col xs={24} sm={24} lg={5}>
        <TextLink secondary>Statement of personal data protection</TextLink>
      </Col>
      <Col xs={24} sm={24} lg={{ span: 5, offset: 4 }}>
        <TextLink secondary copyright>
          &copy;2018 Manulife (Singapore) Pte Ltd
        </TextLink>
      </Col>
    </Row>
  </Container>
);
export default Footer;
