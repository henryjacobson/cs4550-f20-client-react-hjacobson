import React from "react";
import {
    createWidget,
    deleteWidget, findWidgetsForTopic,
    reorderWidget,
    saveAll,
    togglePreview,
    updateWidget
} from "../../actions/widgetActions";
import {connect} from "react-redux";

const WidgetList = ({
                        topic,
                        widgets=[],
                        preview,
                        deleteWidget,
                        createWidget,
                        togglePreview,
                        reorderWidget,
                        findWidgetsForTopic,
                        saveAll,
                        updateWidget}) =>
    <div>
        <div className="row">
            <div className="float-right">
                <a className="btn btn-success" id="save"
                   onClick={() => saveAll(widgets)}>
                    Save
                </a>
                <label htmlFor="preview">
                    Preview
                </label>
                <input type="checkbox" id="preview" className="wbdv-preview"
                       onChange={event => togglePreview(event.target.checked)}/>

            </div>
        </div>

        <br/>

        <div className="row">
            <ul className={"wbdv-widgets"}>
                {
                    !preview &&
                    widgets.map(widget =>
                        <li key={widget.id}>
                            <div className="border">
                                <div className="container">
                                    <h3>
                                        {
                                            widget.type === 'header' &&
                                            <span>Heading Widget</span>
                                        }
                                        {
                                            widget.type === 'paragraph' &&
                                            <span>Paragraph Widget</span>
                                        }
                                        <div className="float-right">
                                            {
                                                widget.widgetOrder !== 0 &&
                                                <a className="btn btn-warning wbdv-nudge-3px-up"
                                                   onClick={() => reorderWidget(
                                                       topic,
                                                       widget.widgetOrder,
                                                       {...widget, widgetOrder: widget.widgetOrder - 1})}>
                                                    <i className="fa fa-arrow-up"/>
                                                </a>
                                            }
                                            {
                                                widget.widgetOrder !== widgets.length - 1 &&
                                                <a className="btn btn-warning wbdv-nudge-3px-up"
                                                   onClick={() => {
                                                       reorderWidget(
                                                           topic,
                                                           widget.widgetOrder,
                                                           {...widget, widgetOrder: widget.widgetOrder + 1})
                                                       findWidgetsForTopic(topic)
                                                   }}>
                                                    <i className="fa fa-arrow-down"/>
                                                </a>
                                            }

                                            <select className="form-control"
                                                onChange={event =>
                                                    updateWidget({...widget, type: event.target.value})
                                                }
                                                value={widget.type}>
                                                <option value={"header"}>Header</option>
                                                <option value={"paragraph"}>Paragraph</option>
                                                <option value={"list"}>List</option>
                                                <option value={"image"}>Image</option>
                                            </select>
                                            <a className="btn btn-danger wbdv-nudge-3px-up"
                                            onClick={() => deleteWidget(widget)}>Delete</a>
                                        </div>
                                    </h3>

                                    <textarea className="wbdv-widget-text"
                                           onChange={event =>
                                               updateWidget({...widget, text: event.target.value})
                                           }
                                           value={widget.text}
                                           placeholder={"Widget Text"}/>

                                    {
                                        widget.type === "header" &&
                                        <select className="form-control"
                                                onChange={event =>
                                                    updateWidget({...widget, size: event.target.value})
                                                }
                                                value={widget.size}>
                                            <option value={1}>Heading 1</option>
                                            <option value={2}>Heading 2</option>
                                            <option value={3}>Heading 3</option>
                                            <option value={4}>Heading 4</option>
                                            <option value={5}>Heading 5</option>
                                            <option value={6}>Heading 6</option>
                                        </select>
                                    }

                                    {
                                        widget.type === "list" &&
                                        <select className="form-control"
                                                onChange={event =>
                                                    updateWidget({...widget, style: event.target.value})
                                                }
                                                value={widget.style}>
                                            <option value={"unordered"}>Unordered</option>
                                            <option value={"ordered"}>Ordered</option>
                                        </select>
                                    }


                                    <br/>

                                    <input className="form-control"
                                           onChange={event =>
                                               updateWidget({...widget, name: event.target.value})
                                           }
                                           value={widget.name}
                                           placeholder="Widget Name"/>

                                    {widget.widgetOrder}
                                </div>

                            </div>
                        </li>
                    )
                }
                {
                    preview &&
                    widgets.map(widget =>
                        <li key={widget.id}>
                            <div className="border">
                                {
                                    widget.type === "header" &&
                                    <div className="container">
                                        {
                                            widget.size === 1 &&
                                            <h1>{widget.text}</h1>
                                        }
                                        {
                                            widget.size === 2 &&
                                            <h2>{widget.text}</h2>
                                        }
                                        {
                                            widget.size === 3 &&
                                            <h3>{widget.text}</h3>
                                        }
                                        {
                                            widget.size === 4 &&
                                            <h4>{widget.text}</h4>
                                        }
                                        {
                                            widget.size === 5 &&
                                            <h5>{widget.text}</h5>
                                        }
                                        {
                                            widget.size === 6 &&
                                            <h6>{widget.text}</h6>
                                        }
                                    </div>
                                }
                                {
                                    widget.type === "paragraph" &&
                                    <div className="container">
                                        <p>{widget.text}</p>
                                    </div>
                                }
                                {
                                    widget.type === "list" &&
                                    widget.style === "unordered" &&
                                    <ul>
                                        {
                                            widget.text.split('\n').map(str =>
                                                <li id={str}>
                                                    {str}
                                                </li>)
                                        }
                                    </ul>
                                }
                                {
                                    widget.type === "list" &&
                                    widget.style === "ordered" &&
                                    <ol>
                                        {
                                            widget.text.split('\n').map(str =>
                                                <li id={str}>
                                                    {str}
                                                </li>)
                                        }
                                    </ol>
                                }
                                {
                                    widget.type === "image" &&
                                    <img src={widget.text} alt={"Widget Image"}/>
                                }
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>

        <div className="row">
            <i className="fa fa-plus col-xs-6 float-right"
                onClick={() => createWidget(topic,
                    {
                        type: "header",
                        size: 1,
                        widgetOrder: widgets.length,
                        style: "unordered"
                    }
                    )}/>
        </div>
    </div>


const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    course: state.courseReducer.course,
    topic: state.topicReducer.topicId,
    lesson: state.lessonReducer.lessonId,
    preview: state.widgetReducer.preview
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: (topic, widget) => createWidget(dispatch, topic, widget),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    togglePreview: preview => togglePreview(dispatch, preview),
    findWidgetsForTopic: topic => findWidgetsForTopic(dispatch, topic),
    saveAll: widgets => saveAll(dispatch, widgets),
    reorderWidget: (topic, order, widget) => reorderWidget(dispatch, topic, order, widget)
})

export default connect
(stateToPropertyMapper,
    propertyToDispatchMapper)
(WidgetList)