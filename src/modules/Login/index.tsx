import React from "react";
import { Card, Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';

import "./login.scss";
import { mainProtectedRoute } from "../Routes/routes";
import { useAuth } from "../../shared/authContext";
const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const {login}=useAuth();
  const onFinish = () => {
   login();
    navigate(mainProtectedRoute.home.path);
  };
  type FieldType = {
    username?: string;
    password?: string;
  };
  return (
    <>
      <div className="login-wrapper">
        <h1>Welcome Back</h1>
        <Card className="card-container">
          <div className="login-form-label">
            <h3>Login to Admin Portal</h3>
          </div>
          <Form
            layout="vertical"
            form={form}
            name="login-form"
            onFinish={onFinish}
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item shouldUpdate className="button-position">
              {({ getFieldsValue }) => {
                return (
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={
                      form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length > 0
                    }
                  >
                    Login
                  </Button>
                );
              }}
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
