import topicService from "../services/TopicService"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"

export const createTopic = (dispatch, lesson, topic) =>
    topicService.createTopic(lesson._id, topic)
        .then(actualTopic => dispatch({
            type: CREATE_TOPIC,
            topic: actualTopic
        }))

export const findTopicsForLesson = (dispatch, lesson) =>
    topicService.findAllTopicsForLesson(lesson._id)
        .then(actualTopics => dispatch({
                type: FIND_TOPICS_FOR_LESSON,
                topics: actualTopics
            })
        )

export const updateTopic = (dispatch, topic) =>
    topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
                type: UPDATE_TOPIC,
                topic
            })
        )

export const deleteTopic = (dispatch, topic) =>
    topicService.deleteTopic(topic._id)
        .then(status =>   dispatch({
                type: DELETE_TOPIC,
                topic
            })
        )