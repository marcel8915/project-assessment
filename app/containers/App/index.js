/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Layout, Row, Col, Icon, Button, Drawer } from 'antd';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import SideMenu from 'components/SideMenu';
import logo from 'images/manulife_logo.png';

import GlobalStyle from '../../global-styles';

const StyledLayout = styled(Layout)`
  @media (min-width: 768px) {
    margin-left: 70px;
  }
  @media (max-width: 767px) {
    margin-top: 64px;
  }
`;
const StyledLayoutSider = styled(Layout.Sider)`
  position: fixed;
  height: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`;
const StyledLayoutHeader = styled(Layout.Header)`
  background-color: #424459;
  padding: 0;
  line-height: 0;
  position: fixed;
  width: 100%;
  margin-top: -64px;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledLayoutContent = styled(Layout.Content)`
  background-color: ${({ theme }) => theme.color.white};
`;
const StyledLayoutFooter = styled(Layout.Footer)`
  background-color: ${({ theme }) => theme.color.black};

  @media (max-width: 767px) {
    padding: 10px;
  }
`;
const StyledButton = styled(Button)`
  &&& {
    width: 64px;
    height: 64px;
    padding: 0;
    color: ${({ theme }) => theme.color.white};
    border-radius: 0;
    border-color: ${({ theme }) => theme.color.green};
    background-color: ${({ theme }) => theme.color.green};
  }
`;
const StyledIcon = styled(Icon)`
  font-size: 24px;
`;
const Image = styled.img`
  height: 64px;
  padding: 10px 20px;
`;
const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
  .ant-drawer-content {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }
`;

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <React.Fragment>
      <Layout>
        <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <StyledLayoutSider width={70}>
          <SideMenu />
        </StyledLayoutSider>
        <StyledLayout>
          <StyledLayoutHeader>
            <Row>
              <Col span={4}>
                <StyledButton onClick={() => setDrawerOpen(true)}>
                  <StyledIcon type="menu" />
                </StyledButton>
              </Col>
              <Col span={20}>
                <Image src={logo} />
              </Col>
            </Row>
          </StyledLayoutHeader>
          <StyledLayoutContent>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </StyledLayoutContent>
          <StyledLayoutFooter>
            <Footer />
          </StyledLayoutFooter>
        </StyledLayout>
        <StyledDrawer
          width={70}
          placement="left"
          closable={false}
          visible={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <SideMenu />
        </StyledDrawer>
      </Layout>
      <GlobalStyle />
    </React.Fragment>
  );
};
export default App;
