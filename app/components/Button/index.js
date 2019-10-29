import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${({ theme, secondary }) => (secondary ? theme.color.lightGray : theme.color.orange)};
  border: 0;
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;
export default Button;
