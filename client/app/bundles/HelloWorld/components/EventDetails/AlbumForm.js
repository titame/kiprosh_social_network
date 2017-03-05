import React, {  Component } from 'react';
import { Form, Select, Input, Button, notification } from 'antd';

import PicturesWall from './PicturesWall';

import './PicturesWall.css';
import './antd.min.css';
import './AlbumForm.css';

const FormItem = Form.Item;

const openNotificationWithIcon = (type, title, description) => {
    notification[type]({
        message: title,
        description: description,
    });
};


class FormFields extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        title:'',
        description:'',
        previewVisible: false,
        previewImage: '',
        fileList: [],
      };

      this.changeTitle = false;
      this.changeDesc = false;
  }

  handleSubmit = (e) => {
      e.preventDefault();
    const { title, description } = this.state;
      if(title.length === 0 && description.length === 0) {
          openNotificationWithIcon("error" ,"Title & Description is Missing","Please input your album title and Description");
          return null;
      }
    if(title.length === 0){
       openNotificationWithIcon("error" ,"Title is Missing","Please input your album title!");
       return null;
    } else if(description.length === 0){
      openNotificationWithIcon("error" ,"Description is Missing","Please input your album Description!");
      return null;
    }

  };

  handleCancel = () => this.setState({
      previewVisible: false
  });

  handlePreview = (file) => {
     this.setState({
         previewImage: file.url || file.thumbUrl,
         previewVisible: true,
     });
  };

  handleChange = ({ fileList }) => {
     console.log(this.state.fileList);
     this.setState({ fileList })
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { title, description, previewVisible, previewImage, fileList } = this.state;
    return (
      <form style={{

      }} onSubmit={this.handleSubmit}>
        <div className="form-title"> Create your album </div>

              <section className="ant-row ant-form-item">
                  <div className="ant-col-4 ant-form-item-label">
                      <label htmlFor="title" className="ant-form-item-required" title="Title">
                          Title
                      </label>
                  </div>
                  <div className="ant-col-8 ant-form-item-control-wrapper">
                      <div className="ant-form-item-control ">
                          <input
                              type="text"
                              defaultValue=""
                              id="title"
                              onChange={(event) => {
                                  this.changeTitle = true;
                                  this.setState({
                                      title: event.target.value
                                  });
                              }}
                              className="ant-input ant-input-lg" />
                          <div className={this.changeTitle && !title.length ? 'ant-form-explain' : 'hide' }>Please input your album title!</div>
                      </div>
                  </div>
              </section>
              <section className="ant-row ant-form-item">
                  <div className="ant-col-4 ant-form-item-label">
                      <label htmlFor="title" className="ant-form-item-required" title="Title">
                          Description
                      </label>
                  </div>
                  <div className="ant-col-8 ant-form-item-control-wrapper">
                      <div className="ant-form-item-control ">
                          <input
                              type="text"
                              defaultValue=""
                              id="title"
                              onChange={(event) => {
                                  this.changeDesc = true;
                                  this.setState({
                                      description: event.target.value
                                  });
                              }}
                              className="ant-input ant-input-lg" />
                          <div className={this.changeDesc && !description.length ? 'ant-form-explain' : 'hide' }>
                              Please input your album Description!
                          </div>
                      </div>
                  </div>
              </section>

        <PicturesWall
            handleSubmit={this.handleSubmit}
            handlePreview={this.handlePreview}
            handleChange={this.handleChange}
            handleCancel={this.handleCancel}
            previewVisible={previewVisible}
            previewImage={previewImage}
            fileList={fileList}
         />
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
      </form>
    );
  }
}

const AlbumForm = Form.create()(FormFields);

export default AlbumForm
