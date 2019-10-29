import { Select as BaseSelect } from 'antd';
import styled from 'styled-components';

const Select = styled(BaseSelect)`
  && {
    width: 100%;
    color: ${({ theme }) => theme.color.black};
  }
`;
export default Select;
