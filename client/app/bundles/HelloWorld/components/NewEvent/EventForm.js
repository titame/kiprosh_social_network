import React from 'react';
import TitleDescriptForm from '../EventDetails/TitleDescriptForm';
import DateRange from './NewEventCalender'
import bindFunctions from '../UtilityMethod';
import { Form, Button, Select } from 'antd';

import moment from 'moment'

const FormItem = Form.Item;
const Option = Select.Option;

class EventFormFields extends React.Component {
 constructor(props){
   super(props);
     this.state = {
       event_type_id:'',
       name:'',
       description:'',
       startDate:'',
       endDate:''
     };
     bindFunctions.call(this, ['onStartPanelChange', 'onEndPanelChange', 'updateTitle', 'updateDesc','onSubmit','setEventType', 'createEvent']);
 }

createEvent() {
  let data = {
    event: this.state
  };

  $.ajax({
    url: APP_URL + '/api/v1/events',
    type: "POST",
    data: data,
    success:(data) => {
      this.onSubmit();
    },
    error:() => {
      console.log("Error in creating Event Details")
    }
  });
}

 onStartPanelChange(value){
   this.setState({
      startDate:moment(value).format('LLLL')
   });
 }

 onEndPanelChange(value){
   this.setState({
      endDate:moment(value).format('LLLL')
   });
 }

 setEventType(eventTypeId) {
  console.log("id" + eventTypeId);
  this.setState({
     event_type_id: eventTypeId
  });
 }

 updateTitle(newTitle){
   this.setState({
      name:newTitle
   });
 }

 updateDesc(newDescription){
   this.setState({
      description:newDescription
   });
 }

 onSubmit(){
   const { updateSubComponentRender } = this.props;
   updateSubComponentRender();
 }
 render(){
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
   const { name, description } = this.state;
   const { updateSubComponentRender } = this.props;
   return (
     <form>
       <div className="titledesc" style={{
         width:'41%',
         margin:'1.3rem auto 0'
       }}>
       <FormItem
          {...formItemLayout}
          label="Select"
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: 'Please select event type!' },
            ],
          })(
            <Select placeholder="Please select a event type" onChange={(eventTypeId) => { this.setEventType(eventTypeId); }}>
              {
                this.props.event_types.map((type, index) => {
                  return(
                    <Option key={index} value={type.id + ""}>{type.name}</Option>
                  )
                })
              }
            </Select>
          )}
        </FormItem>
       <TitleDescriptForm
         title={name}
         description={description}
         updateTitle={this.updateTitle}
         updateDesc={this.updateDesc}
        />
        </div>
        <DateRange
            onEndPanelChange={this.onEndPanelChange}
            onStartPanelChange={this.onStartPanelChange}
        />
        <div className="btn__wrapper">
          <Button type="submit" onClick={this.createEvent}>Submit</Button>
          <Button onClick={updateSubComponentRender}>Cancel</Button>
        </div>
     </form>
     )
 }
}

const EventForm = Form.create()(EventFormFields)
export default EventForm;
