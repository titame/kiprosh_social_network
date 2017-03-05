import React from 'react';
import TitleDescriptForm from '../EventDetails/TitleDescriptForm';
import DateRange from './NewEventCalender'
import bindFunctions from '../UtilityMethod';
import { Button } from 'antd';
class Form extends React.Component {
 constructor(props){
   super(props);
     this.state = {
       title:'',
       description:'',
       startDate:'',
       endDate:''
     };
     bindFunctions.call(this, ['onStartPanelChange', 'onEndPanelChange', 'updateTitle', 'updateDesc','onSubmit']);
 }

 onStartPanelChange(value, mode){
   console.log(value, mode);
   this.setState({
      startDate:value
   });
 }

 onEndPanelChange(value, mode){
   console.log(value, mode);
   this.setState({
      endDate:value
   });
 }

 updateTitle(newTitle){
   this.setState({
      title:newTitle
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
   const { title, description } = this.state;
   const { updateSubComponentRender } = this.props;
   return (
     <form onSubmit={this.onSubmit}>
       <div className="titledesc" style={{
         width:'41%',
         margin:'1.3rem auto 0'
       }}>
       <TitleDescriptForm
         title={title}
         description={description}
         updateTitle={this.updateTitle}
         updateDesc={this.updateDesc}
        />
        </div>
        <DateRange />
        <div className="btn__wrapper">
          <Button type="submit">Submit</Button>
          <Button onClick={updateSubComponentRender}>Cancel</Button>
        </div>
     </form>
     )
 }
}


export default Form;
