import React from "react";
import {connect} from "react-redux";
import {
    updateLesson,
    createLesson,
    deleteLesson
} from "../../actions/lessonActions";
import {Link} from "react-router-dom";

const LessonList = (
    { course,
        module,
        lessons=[],
        selectedLesson,
        deleteLesson,
        createLesson,
        updateLesson}) =>
    <div>
        <ul className="nav nav-tabs wbdv-lesson-tabs">
            {
                lessons.map(lesson =>
                    <span key={lesson._id}>
                        {
                            lesson.editing &&
                            <li className="nav-item active wbdv-lesson-item-title">
                                <input
                                    onChange={(event) =>
                                        updateLesson({...lesson, title: event.target.value})
                                    }
                                    value={lesson.title}/>

                                <i className={"fa fa-check wbdv-button wbdv-ok"}
                                   onClick={() => updateLesson({...lesson, editing: false})}/>
                                <i className="fa fa-times float-right wbdv-lesson-item-delete-btn"
                                   onClick={() => deleteLesson(lesson)}/>
                            </li>
                        }
                        {
                            !lesson.editing &&
                            lesson._id === selectedLesson &&
                            <li className="nav-item active wbdv-lesson-item-title">
                                {lesson.title}
                            </li>
                        }
                        {
                            !lesson.editing &&
                            lesson._id !== selectedLesson &&
                            <li className="nav-item wbdv-lesson-item-title">
                                <Link to={`/editor/${course._id}/modules/${module}/lessons/${lesson._id}`}>
                                    {lesson.title}
                                </Link>
                                <i className={"fa fa-gear float-right wbdv-button wbdv-edit"}
                                   onClick={() => updateLesson({...lesson, editing: true})}/>
                            </li>
                        }
                    </span>)
            }
        </ul>
        <button onClick={() => createLesson(module, {title: "New Lesson"})}>
            Create Lesson
        </button>
    </div>

// export default LessonList

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    selectedLesson: state.lessonReducer.lessonId,
    course: state.courseReducer.course,
    module: state.moduleReducer.moduleId
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    createLesson: (module, lesson) => createLesson(dispatch, module, lesson),
    updateLesson: (lesson) => updateLesson(dispatch, lesson)
})

export default connect
(stateToPropertyMapper,
    propertyToDispatchMapper)
(LessonList)
