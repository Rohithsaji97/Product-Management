import React, { useState } from "react";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Register() {
  const [load, setLoad] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoad(true);
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          Email: values.email,
          PhoneNumber: values.mNumber,
          Name: values.name,
          Password: values.password,
        });
      }
      window.location.href = "/login";
      console.log("User Registered Successfully!!");
    } catch (error) {
      console.log(error.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-box">
      <Link to={"/login"}>
        <MdOutlineKeyboardBackspace className="back" />
      </Link>
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
          name="name"
          label="Name"
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
          rules={[
            {
              required: true,
              message: "Please input your Full Name",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="John M Paul" />
        </Form.Item>

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
          label="Mobile Number"
          name="mNumber"
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
          rules={[
            {
              type: "number",
              required: true,
              message: "Please enter your number!",
            },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            prefix={<PhoneOutlined />}
            placeholder="Number"
          />
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
