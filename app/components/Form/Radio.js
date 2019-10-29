import { Radio as BaseRadio } from 'antd';
import styled from 'styled-components';

const Radio = styled(BaseRadio)`
  && {
    border: ${({ theme }) => `1px ${theme.color.tosca} solid`};
    padding: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};

    &.ant-radio-wrapper-checked {
      background-color: ${({ theme }) => theme.color.tosca};
      color: ${({ theme }) => theme.color.white};
    }

    .ant-radio-inner {
      border-color: ${({ theme }) => theme.color.tosca};
    }
    .ant-radio-checked .ant-radio-inner::after {
      background-color: ${({ theme }) => theme.color.tosca};
    }
  }
`;
export default Radio;
