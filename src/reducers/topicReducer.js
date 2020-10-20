import {
    FIND_TOPICS_FOR_LESSON,
    DELETE_TOPIC,
    UPDATE_TOPIC,
    CREATE_TOPIC
} from "../actions/topicActions";

const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            }
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== action.topic._id)
            }
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic => topic._id === action.topic._id ? action.topic : topic)
            }
        default:
            return state
    }
}

export default topicReducer
