import React from 'react';
import { Steps as BaseSteps, Form as AntForm } from 'antd';
import styled from 'styled-components';
import range from 'lodash/range';
import PropTypes from 'prop-types';

import { Row, Col } from 'components/Grid';
import { Input, Select, Radio } from 'components/Form';
import Button from 'components/Button';

const Steps = styled(BaseSteps)`
  &&& {
    @media (max-width: 480px) {
      display: flex;
    }
  }
`;
const StyledStep = styled(Steps.Step)`
  & > .ant-steps-item-container > .ant-steps-item-icon {
    background: ${({ theme }) => theme.color.green};
    border-color: ${({ theme }) => theme.color.green};
  }

  &&&&& div.ant-steps-item-title::after {
    position: absolute;
    top: 16px;
    left: 100%;
    display: block;
    width: 9999px;
    height: 1px;
    background: #e8e8e8;
    content: '';
  }
`;
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  line-height: 1.2;
`;
const LabelRadio = styled.p`
  font-size: 14px;
  margin-bottom: 0;
`;
const TNC = styled(LabelRadio)`
  text-align: center;
`;
const FormItem = styled(AntForm.Item)`
  && {
    margin-bottom: 0;

    .ant-form-item-label {
      text-align: left;
    }
  }
`;

const Form = ({ form, onSubmit }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };

  const ageOptions = range(21, 61).map(value => (
    <Select.Option key={value} value={value}>
      {value}
    </Select.Option>
  ));
  return (
    <AntForm onSubmit={handleSubmit} hideRequiredMark>
      <Row type="flex" justify="center">
        <Col span={24}>
          <Title>
            Share your life goals with us and stand to
            <br />
            win S$10,000* worth of Manulife Singapore
            <br />
            Solutions* to help you take on the first step!
          </Title>
          <TNC>*T&C apply</TNC>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={16} lg={12}>
          <Steps direction="horizontal">
            <StyledStep status="process" />
            <StyledStep status="process" />
            <StyledStep status="process" />
          </Steps>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={18} lg={12}>
          <h2 style={{ textAlign: 'center' }}>Enter your personal particulars</h2>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={8}>
        <Col xs={24} sm={24} md={18} lg={16}>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: 'Please input your Name',
                },
                {
                  max: 50,
                  message: 'Maximum 50 characters',
                },
              ],
            })(<Input size="large" placeholder="Name" maxLength={50} />)}
          </FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={8}>
        <Col xs={24} sm={24} md={9} lg={8}>
          <FormItem>
            {getFieldDecorator('gender', {
              rules: [
                {
                  required: true,
                  message: 'Please select your gender',
                },
              ],
            })(
              <Select size="large" placeholder="Gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>,
            )}
          </FormItem>
        </Col>
        <Col xs={24} sm={24} md={9} lg={8}>
          <FormItem>
            {getFieldDecorator('age', {
              rules: [
                {
                  required: true,
                  message: 'Please select your age',
                },
              ],
            })(
              <Select size="large" placeholder="Age">
                {ageOptions}
              </Select>,
            )}
          </FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={8}>
        <Col xs={24} sm={24} md={18} lg={16}>
          <FormItem>
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: 'Please input your phone number',
                },
                {
                  pattern: /^[6|8|9]\d{7}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}$/i,
                  message: 'Invalid phone number',
                },
              ],
            })(<Input size="large" placeholder="Phone number" maxLength={8} />)}
          </FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={8}>
        <Col xs={24} sm={24} md={18} lg={16}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: 'Please input your email',
                },
                {
                  type: 'email',
                  message: 'Invalid email address',
                },
              ],
            })(<Input size="large" placeholder="Email address" />)}
          </FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={8}>
        <Col xs={24} sm={24} md={18} lg={16}>
          <FormItem
            label="Preferred contact method"
            labelCol={{ xs: { span: 24 }, sm: { span: 24 }, xl: { span: 10 } }}
            wrapperCol={{ xs: { span: 24 }, sm: { span: 24 }, xl: { span: 14 } }}
            colon={false}
          >
            {getFieldDecorator('contactMethod', {
              rules: [
                {
                  required: true,
                  message: 'Please select your preference',
                },
              ],
            })(
              <Radio.Group>
                <Radio value="phone">Phone</Radio>
                <Radio value="email">Email</Radio>
              </Radio.Group>,
            )}
          </FormItem>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={8}>
        <Col xs={24} sm={24} md={18} lg={16} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={e => e.preventDefault()} secondary>
            Back
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button htmlType="submit">Submit</Button>
        </Col>
      </Row>
    </AntForm>
  );
};

Form.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AntForm.create({ name: 'personal-particulars' })(Form);
