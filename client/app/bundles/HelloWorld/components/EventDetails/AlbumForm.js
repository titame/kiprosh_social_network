import React, {  Component } from 'react';
import { Form, Select, Input, Button } from 'antd';
import PicturesWall from './PicturesWall';

import './PicturesWall.css';
import './antd.min.css';
import './AlbumForm.css';

const FormItem = Form.Item;

class FormFields extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="form-title"> Create your album </div>
        <FormItem
          label="Title"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your album title!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Description"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please input your album description!' }],
          })(
            <Input />
          )}
        </FormItem>
        <PicturesWall/>
        <div className="form_buttons">
          <FormItem wrapperCol={{ span: 8, offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
          <FormItem wrapperCol={{ span: 8, offset: 4 }}>
            <Button type="primary" onClick={this.props.closeForm}>
              Cancel
            </Button>
          </FormItem>
        </div>
      </Form>
    );
  }
}

const AlbumForm = Form.create()(FormFields);

export default AlbumForm
