import { Radio as BaseRadio } from 'antd';
import styled, { keyframes } from 'styled-components';
import { theme as themeConst } from 'utils/constants';

const fadeInAnimation = keyframes`
    to {
      background-color: ${themeConst.color.tosca};
      color: ${themeConst.color.white};
    }
`;
const Radio = styled(BaseRadio)`
  && {
    border: ${({ theme }) => `1px ${theme.color.tosca} solid`};
    padding: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};

    &.ant-radio-wrapper-checked {
      animation: ${fadeInAnimation} 1s forwards;
    }

    .ant-radio-inner {
      width: 18px;
      height: 18px;
      border-color: ${({ theme }) => theme.color.tosca};
    }
    .ant-radio-inner::after {
      background-color: ${({ theme }) => theme.color.tosca};
      top: 2px;
      left: 2px;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      color: ${({ theme }) => theme.color.white};
      font-size: 12px;
      text-align: center;
      line-height: 12px;
      content: '\\2714';
    }
  }
`;
export default Radio;
