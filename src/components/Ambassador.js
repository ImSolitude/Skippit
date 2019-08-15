import React, { useState, useEffect } from "react";
import { Form, DatePicker, Input, Checkbox, Button } from "antd";
import Header from "./Header/Header";
import Under from "./Under/Under";
import "./Pages.sass";
import "./antd.css";

const Ambassador = props => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tos, setTos] = useState(false);

  const formItemLayout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 }
  };
  const handleName = e => {
    setName(e.currentTarget.value);
  };
  const handleDOB = (date, dateString) => {
    setDob(dateString);
  };
  const handleEmail = e => {
    setEmail(e.currentTarget.value);
  };
  const handlePhone = e => {
    setPhone(e.currentTarget.value);
  };
  const handleSchool = e => {
    setSchool(e.currentTarget.value);
  };
  const handleAffiliation = e => {
    setAffiliation(e.currentTarget.value);
  };
  const handleInstagram = e => {
    setInstagram(e.currentTarget.value);
  };
  const handleTos = e => {
    setTos(e.target.checked);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <Header inPage />
      <div className="content-wrapper press brand-form">
        <Form
          layout="horizontal"
          className="form"
          labelAlign="left"
          onSubmit={handleSubmit}
        >
          <Form.Item label="First Name" {...formItemLayout}>
            <Input size="large" placeholder="Jane Doe" onChange={handleName} />
          </Form.Item>

          <Form.Item label="Date of Birth" {...formItemLayout}>
            <DatePicker onChange={handleDOB} size="large" />
          </Form.Item>

          <Form.Item label="Email" {...formItemLayout}>
            <Input
              size="large"
              placeholder="jone.doe@example.com"
              onChange={handleEmail}
              type="email"
            />
          </Form.Item>

          <Form.Item label="Phone Number" {...formItemLayout}>
            <Input size="large" onChange={handlePhone} />
          </Form.Item>

          <Form.Item label="School" {...formItemLayout}>
            <Input size="large" onChange={handleSchool} />
          </Form.Item>

          <Form.Item
            label="Greek life affiliation (if any)"
            {...formItemLayout}
          >
            <Input size="large" onChange={handleAffiliation} />
          </Form.Item>

          <Form.Item label="Instagram Handle" {...formItemLayout}>
            <Input size="large" onChange={handleInstagram} addonBefore="@" />
          </Form.Item>

          <Checkbox onChange={handleTos}>
            You must agree to our <a href="/terms">Terms of Service</a>
          </Checkbox>

          <Button
            type="primary"
            htmlType="submit"
            block
            className="submit-button"
          >
            Submit
          </Button>
        </Form>
      </div>
      <Under inPage />
    </>
  );
};

export default Ambassador;
