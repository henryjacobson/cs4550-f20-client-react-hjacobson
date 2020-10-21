import {
    FIND_LESSONS_FOR_MODULE,
    DELETE_LESSON,
    UPDATE_LESSON,
    CREATE_LESSON,
    SELECT_LESSON
} from "../actions/lessonActions";

const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons,
                lessonId: state.lessonId
            }
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ],
                lessonId: state.lessonId
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lesson._id),
                lessonId: state.lessonId
            }
        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map(lesson => lesson._id === action.lesson._id ? action.lesson : lesson),
                lessonId: state.lessonId
            }
        case SELECT_LESSON:
            return {
                lessons: state.lessons,
                lessonId: action.lessonId
            }
        default:
            return state
    }
}

export default lessonReducer
