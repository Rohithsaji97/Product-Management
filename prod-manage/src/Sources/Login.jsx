import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import {
  LockOutlined,
  MailOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { toast } from "react-toastify";

function Login() {
  const [load, setLoad] = useState(false);
  const [inValid, setInValid] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoad(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success("Login Success");
      console.log("User logged In successfully");
      window.location.href = "/home";
    } catch (error) {
      console.log(error.message);
      setInValid(true);
    } finally {
      setLoad(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-box">
      <Avatar
        className="avatar"
        shape="square"
        size={84}
        icon={<UserOutlined />}
      />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          style={{ color: "white" }}
          name="email"
          label="Email"
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your Email ID!",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="xyz@domain.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
          <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          id="submit"
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
          <Button
            style={{ width: "65%", fontSize: "20px", borderRadius: "15px" }}
            type="default"
            htmlType="submit"
            icon={load ? <PoweroffOutlined /> : null}
            loading={load}
          >
            Login
          </Button>
        </Form.Item>
        <Form.Item
          id="forgot"
          wrapperCol={{
            offset: 11,
            span: 16,
          }}
        >
          <Link to="/register">
            <Button type="link" danger>
              {inValid
                ? "You have Invalid Credentials. Register Now !!!"
                : "New User? Join Now"}
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
