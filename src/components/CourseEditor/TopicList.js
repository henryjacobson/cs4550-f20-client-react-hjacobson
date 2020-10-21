import React from "react";
import {connect} from "react-redux";
import {
    updateTopic,
    createTopic,
    deleteTopic
} from "../../actions/topicActions";
import {Link} from "react-router-dom";

const TopicList = (
    { course,
        module,
        lesson,
        topics=[],
        selectedTopic,
        deleteTopic,
        createTopic,
        updateTopic}) =>
    <div>
        <ul className="nav nav-tabs wbdv-topic-tabs">
            {
                topics.map(topic =>
                    <span key={topic._id}>
                        {
                            topic.editing &&
                            <li className="nav-item active wbdv-topic-item-title">
                                <input
                                    onChange={(event) =>
                                        updateTopic({...topic, title: event.target.value})
                                    }
                                    value={topic.title}/>

                                <i className={"fa fa-check wbdv-button wbdv-ok"}
                                   onClick={() => updateTopic({...topic, editing: false})}/>
                                <i className="fa fa-times float-right wbdv-topic-item-delete-btn"
                                   onClick={() => deleteTopic(topic)}/>
                            </li>
                        }
                        {
                            !topic.editing &&
                            topic._id === selectedTopic &&
                            <li className="nav-item active wbdv-topic-item-title">
                                {topic.title}
                            </li>
                        }
                        {
                            !topic.editing &&
                            topic._id !== selectedTopic &&
                            <li className="nav-item wbdv-topic-item-title">
                                <Link to={`/editor/${course._id}/modules/${module}/lessons/${lesson}/topics/${topic._id}`}>
                                    {topic.title}
                                </Link>
                                <i className={"fa fa-gear float-right wbdv-button wbdv-edit"}
                                   onClick={() => updateTopic({...topic, editing: true})}/>
                            </li>
                        }
                    </span>)
            }
        </ul>
        <button onClick={() => createTopic(lesson, {title: "New Topic"})}>
            Create Topic
        </button>
    </div>

// export default TopicList

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    selectedTopic: state.topicReducer.topicId,
    course: state.courseReducer.course,
    module: state.moduleReducer.moduleId,
    lesson: state.lessonReducer.lessonId
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteTopic: (topic) => deleteTopic(dispatch, topic),
    createTopic: (module, topic) => createTopic(dispatch, module, topic),
    updateTopic: (topic) => updateTopic(dispatch, topic)
})

export default connect
(stateToPropertyMapper,
    propertyToDispatchMapper)
(TopicList)
