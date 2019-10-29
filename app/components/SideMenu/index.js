import React from 'react';
import { Button, Icon } from 'antd';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 70px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.darkBlue};
  // display: flex;
  // flex: 1;
`;
const StyledButton = styled(Button)`
  && {
    width: 70px;
    height: 70px;
    padding: 0;
    color: ${({ theme }) => theme.color.white};
    border-radius: 0;
    border-color: ${({ theme, active }) => (active === 'true' ? theme.color.green : theme.color.black)};
    background-color: ${({ theme, active }) => (active === 'true' ? theme.color.green : theme.color.darkBlue)};

    :hover,
    :active {
      color: ${({ theme }) => theme.color.white};
      border-color: ${({ theme }) => theme.color.green};
      background-color: ${({ theme }) => theme.color.green};
    }
  }
`;
const StyledIcon = styled(Icon)`
  font-size: 24px;
`;
const Label = styled.p`
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  font-size: 11px;
`;
const StyledFAIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const SideMenu = () => (
  <Container>
    <StyledButton active="true">
      <StyledIcon type="home" />
    </StyledButton>
    <StyledButton>
      <StyledIcon type="plus-square" />
      <Label>Services</Label>
    </StyledButton>
    <StyledButton>
      <StyledFAIcon icon={faLocationArrow} />
      <Label>Direction</Label>
    </StyledButton>
    <StyledButton>
      <StyledIcon type="info-circle" />
      <Label>About</Label>
    </StyledButton>
    <StyledButton>
      <StyledIcon type="star" />
      <Label>Review</Label>
    </StyledButton>
    <StyledButton>
      <StyledIcon type="phone" />
      <Label>Contact</Label>
    </StyledButton>
  </Container>
);
export default SideMenu;
