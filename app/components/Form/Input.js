import { Input as BaseInput } from 'antd';
import styled from 'styled-components';

const Input = styled(BaseInput)`
  && {
    color: ${({ theme }) => theme.color.black};
  }
`;
export default Input;
