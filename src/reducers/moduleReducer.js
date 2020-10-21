import {
    FIND_MODULES_FOR_COURSE,
    DELETE_MODULE,
    UPDATE_MODULE,
    CREATE_MODULE, SELECT_MODULE
} from "../actions/moduleActions";

const initialState = {
    modules: [],
    moduleId: null
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules,
                moduleId: state.moduleId
            }
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.module
                ],
                moduleId: state.moduleId
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.module._id),
                moduleId: state.moduleId
            }
        case UPDATE_MODULE:
            return {
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module),
                moduleId: state.moduleId
            }
        case SELECT_MODULE:
            return {
                modules: state.modules,
                moduleId: action.moduleId
            }
        default:
            return state
    }
}

export default moduleReducer
