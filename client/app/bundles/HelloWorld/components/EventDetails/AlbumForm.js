import React, {  Component } from 'react';
import { Form, Select, Input, Button, notification } from 'antd';

import PicturesWall from './PicturesWall';

import TitleDescriptForm from './TitleDescriptForm';

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

    console.log(this.props.event);

    var images = this.state.fileList.map((file) => {
      return {url: file.response.url, name: file.name}
    });

    $.ajax({
      url: APP_URL + "/api/v1/albums",
      headers: { 'token': localStorage.getItem("token") },
      data: {
        name: title,
        description: description,
        event_id: this.props.event.event_id,
        images: images
      },
      type: 'POST',
      error:(result) => {
        openNotificationWithIcon("error" ,"Something went wrong",result.responseMessage);
      },
      success:(data) => {
        openNotificationWithIcon("success" ,"Album created", data.message);
        this.props.closeForm();
      }
    });
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

  updateTitle = (title) => {
    this.setState({
        title
    })
  };

  updateDesc = (description) => {
    this.setState({
       description
   })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { createPostOrAlbum } = this.props;
    const { title, description, previewVisible, previewImage, fileList } = this.state;
    return (
      <form style={{
        display: createPostOrAlbum === 'album' ? 'block' : 'none'
      }} onSubmit={this.handleSubmit}>

        <TitleDescriptForm
            updateTitle={this.updateTitle}
            title={title}
            updateDesc={this.updateDesc}
            description={description}
         />
        <PicturesWall
            handleSubmit={this.handleSubmit}
            handlePreview={this.handlePreview}
            handleChange={this.handleChange}
            handleCancel={this.handleCancel}
            previewVisible={previewVisible}
            previewImage={previewImage}
            fileList={fileList}
         />
        <div className="btn__wrapper">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary" onClick={this.props.closeForm}>
              Cancel
            </Button>
         </div>
      </form>
    );
  }
}

const AlbumForm = Form.create()(FormFields);

export default AlbumForm
