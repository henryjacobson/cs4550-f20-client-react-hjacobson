import React from "react";
import $ from 'jquery'
import "../../css/styles.css"
import LessonComponent from "./LessonComponent";

class CourseEditorComponent extends React.Component {
    state = {
        modules: [
            "Module 1 - jQuery",
            "Module 2 - React",
            "Module 3 - Redux",
            "Module 4 - Native",
            "Module 5 - Angular",
            "Module 6 - Node",
            "Module 7 - Mongo",
        ],
        lessons: [
            "Build",
            "Pages",
            "Theme",
            "Store",
            "Apps",
            "Setting",
        ],
        topics: [
            "Topic 1",
            "Topic 2",
            "Topic 3",
            "Topic 4",
        ]
    }

    render() {
        return(
            <div className={"container-float"}>
                <div className="row">
                    <div className="col-4">
                        <h1>
                            <i className="fas fa-times wbdv-source-editor wbdv-close"/>
                            <span className="wbdv-course-title">Knitting</span>
                        </h1>
                    </div>

                    <div className="col-8">
                        <ul className="nav nav-tabs wbdv-lesson-tabs">
                            {
                                this.state.lessons.map(lesson =>
                                    <LessonComponent
                                        lesson={lesson}/>
                                )
                            }
                        </ul>
                        <i className="fas fa-plus col-xs-6 wbdv-lesson-add-btn"/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-4">
                        <div className="container">
                            <div className="row">
                                <ul className="list-group wbdv-module-list">
                                    <li className="list-group-item wbdv-module-item-title">Module 1 <i
                                        className="fas fa-times float-right wbdv-module-item-delete-btn"/></li>
                                    <li className="list-group-item wbdv-module-item-title">Module 2 <i
                                        className="fas fa-times float-right wbdv-module-item-delete-btn"/></li>
                                    <li className="list-group-item wbdv-module-item-title active">Module 3 <i
                                        className="fas fa-times float-right wbdv-module-item-delete-btn"/></li>
                                    <li className="list-group-item wbdv-module-item-title">Module 4 <i
                                        className="fas fa-times float-right wbdv-module-item-delete-btn"/></li>
                                    <li className="list-group-item wbdv-module-item-title">Module 5 <i
                                        className="fas fa-times float-right wbdv-module-item-delete-btn"/></li>
                                    <li className="list-group-item wbdv-module-item-title">Module 6 <i
                                        className="fas fa-times float-right wbdv-module-item-delete-btn"/></li>
                                    <li className="list-group-item wbdv-module-item-title wbdv-module-item-add-btn">+<i
                                        className="fas fa-plus col-xs-6 float-right wbdv-module-item-delete-btn"/></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-8">
                        <div className="container">
                            <div className="row">
                                <ul className="nav nav-pills wbdv-topic-pill-list">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link wbdv-topic-pill">Topic 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link wbdv-topic-pill active">Topic 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link wbdv-topic-pill">Topic 3</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link wbdv-topic-pill">Topic 4</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link wbdv-topic-pill">Topic 5</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link wbdv-topic-pill">Topic 6</a>
                                    </li>
                                </ul>
                            </div>

                            <br/>

                            <div className="row">
                <span className="float-right">
                <a className="btn btn-success" id="save">
                    Save
                </a>
                <label htmlFor="preview">
                    Preview
                </label>
                <input type="checkbox" id="preview" className="wbdv-preview"/>

                </span>
                            </div>

                            <br/>

                            <div className="row">
                                <div className="border">
                                    <div className="container">
                                        <h3>
                                            Heading Widget
                                            <span className="float-right">
                        <a className="btn btn-warning wbdv-nudge-3px-up">
                            <i className="fas fa-arrow-up"/>
                        </a>
                        <a className="btn btn-warning wbdv-nudge-3px-up">
                            <i className="fas fa-arrow-down"/>
                        </a>
                        <select>
                            <option>Heading</option>
                            <option>YouTube</option>
                            <option>Image</option>
                            <option>Document</option>
                            <option>Slides</option>
                        </select>
                        <a className="btn btn-danger wbdv-nudge-3px-up">Delete</a>
                            </span>
                                        </h3>

                                        <input className="form-control"/>
                                        <select className="form-control">
                                            <option>Heading 1</option>
                                            <option>Heading 2</option>
                                            <option>Heading 3</option>
                                            <option>Heading 4</option>
                                            <option>Heading 5</option>
                                        </select>

                                        <br/>

                                        <input className="form-control"
                                               title="Name your widget" placeholder="Widget Name"/>

                                        <h3>
                                            Preview
                                        </h3>
                                        <h1>
                                            Heading text
                                        </h1>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <i className="fas fa-plus col-xs-6 float-right"/>
                            </div>
                        </div>


                        <br/>


                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditorComponent