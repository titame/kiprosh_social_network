/**
 * Created by shoaibbhimani on 3/5/17.
 */
import React from 'react';


class TitleDescriptForm extends React.Component {
    constructor(props){
        super(props);
        this.changeTitle = false;
    }
    render(){
        const { title, description, updateTitle, updateDesc }  = this.props;
        return (
            <section>
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
                                value={title}
                                id="title"
                                onChange={(event) => {
                                    this.changeTitle = true;
                                    updateTitle(event.target.value);
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
                                value={description}
                                id="title"
                                onChange={(event) => {
                                    this.changeDesc = true;
                                    updateDesc(event.target.value)
                                }}
                                className="ant-input ant-input-lg" />
                            <div className={this.changeDesc && !description.length ? 'ant-form-explain' : 'hide' }>
                                Please input your album Description!
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default TitleDescriptForm;