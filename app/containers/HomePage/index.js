/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Collapse, Icon } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { Row, Col } from 'components/Grid';
import { theme } from 'utils/constants';
import { useInjectSaga } from 'utils/injectSaga';

import banner from 'images/banner.png';
import man1 from 'images/man1.png';
import man2 from 'images/man2.png';
import man3 from 'images/man3.png';

import Form from './Form';
import Success from './Success';
import saga from './saga';

import { submitForm } from '../App/actions';
import { makeSelectRequest } from '../App/selectors';

const StyledIcon = styled(Icon)`
  &&&&& {
    font-size: 28px;
    color: ${theme.color.orange};
  }
`;
const HeaderTitle = styled.span`
  font-size: 20px;
  margin-left: 15px;
`;
const StyledPanel = styled(Collapse.Panel)`
  border-top: 1px solid #d9d9d9;
`;
const BannerImg = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 767px) {
    display: none;
  }
`;

const HomePage = ({ submitFormAction, request }) => {
  useInjectSaga({ key: 'home', saga });

  const onSubmit = formValues => {
    submitFormAction(formValues);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React.js Boilerplate application homepage" />
      </Helmet>
      <BannerImg src={banner} />
      <br />
      <Row type="flex" justify="center">
        <Col xs={0} sm={0} md={5} lg={6} xxl={8}>
          <img alt="" src={man2} style={{ position: 'absolute', right: 0, top: 110, width: '100px' }} />
        </Col>
        <Col xs={22} sm={22} md={14} lg={12} xxl={8}>
          {request && request.success ? <Success /> : <Form onSubmit={onSubmit} />}
        </Col>
        <Col xs={0} sm={0} md={5} lg={6} xxl={8}>
          <img alt="" src={man1} style={{ position: 'absolute', left: 0, top: -20, width: '100px' }} />
          <img alt="" src={man3} style={{ position: 'absolute', left: 25, bottom: 130, width: '190px' }} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={22} sm={22} md={16} xxl={10}>
          <Collapse
            bordered={false}
            expandIcon={({ isActive }) =>
              isActive ? (
                <StyledIcon type="minus-circle" theme="filled" />
              ) : (
                <StyledIcon type="plus-circle" theme="filled" />
              )
            }
          >
            <StyledPanel header={<HeaderTitle>Terms & Conditions</HeaderTitle>}>
              <p>
                By participating in the #GoForIt! 2019 Contest (the &quot;Contest&quot;), I understand and agree to the
                following:
              </p>
              <ol>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ol>
            </StyledPanel>
          </Collapse>
        </Col>
      </Row>
      <br />
    </React.Fragment>
  );
};

HomePage.propTypes = {
  submitFormAction: PropTypes.func.isRequired,
  request: PropTypes.shape({
    loading: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    message: PropTypes.string,
  }),
};
HomePage.defaultProps = {
  request: {},
};

const mapStateToProps = createStructuredSelector({
  request: makeSelectRequest(),
});

const mapDispatchToProps = dispatch => ({
  submitFormAction: form => dispatch(submitForm(form)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
