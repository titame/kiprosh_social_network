import React from 'react';
import { FormItem, Button, notification } from 'antd';


import TitleDescriptForm from './TitleDescriptForm';

class PostForm extends React.Component {
 constructor(props){
    super(props) ;
    this.submitForm = this.submitForm.bind(this);
    this.state = {
        title:'',
        description:''
    }
 }
  updateTitle = (title) => {
     this.setState({
       title
     })
  };

  updateDesc = (description) => {
    this.setState({
        description
    })
  };

  submitForm = () => {
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

 render(){
    const { createPostOrAlbum } = this.props;
    const { title, description } = this.state;
    return(
      <form style={{
          display: createPostOrAlbum === 'post' ? 'block' : 'none'
      }} onSubmit={this.submitForm}>
         <TitleDescriptForm
             updateTitle={this.updateTitle}
             title={title}
             updateDesc={this.updateDesc}
             description={description}
         />
            <div className="btn__wrapper">
               <Button type="primary">
                   Submit
               </Button>

              <Button type="primary" onClick={this.props.closeForm}>
                Cancel
              </Button>
            </div>

      </form>
    )
 }
}

export default PostForm;