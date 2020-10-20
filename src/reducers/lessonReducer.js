import {
    FIND_LESSONS_FOR_MODULE,
    DELETE_LESSON,
    UPDATE_LESSON,
    CREATE_LESSON
} from "../actions/lessonActions";

const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons
            }
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lesson._id)
            }
        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map(lesson => lesson._id === action.lesson._id ? action.lesson : lesson)
            }
        default:
            return state
    }
}

export default lessonReducer
