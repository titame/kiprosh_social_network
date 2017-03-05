import React, { Component, PropTypes } from 'react';
import { Upload, Icon, Modal } from 'antd';

class PicturesWall extends React.Component {
  render() {
    const { previewVisible, previewImage, fileList, handlePreview, handleChange, handleCancel } = this.props;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div style={{
          textAlign:'center'
      }} className="clearfix">
        <Upload
          action="/api/v1/photos/upload"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 5 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;
