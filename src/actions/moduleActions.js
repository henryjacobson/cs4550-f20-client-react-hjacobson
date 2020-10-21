import moduleService from "../services/ModuleService"
export const CREATE_MODULE = "CREATE_MODULE"
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const SELECT_MODULE = "SELECT_MODULE"

export const createModule = (dispatch, course, module) =>
    moduleService.createModule(course._id, module)
        .then(actualModule => dispatch({
            type: CREATE_MODULE,
            module: actualModule
        }))

export const findModulesForCourse = (dispatch, courseId) =>
    moduleService.findAllModulesForCourse(courseId)
        .then(actualModules => dispatch({
                type: FIND_MODULES_FOR_COURSE,
                modules: actualModules
            })
        )

export const updateModule = (dispatch, module) =>
    moduleService.updateModule(module._id, module)
        .then(status => dispatch({
                type: UPDATE_MODULE,
                module
            })
        )

export const deleteModule = (dispatch, module) =>
    moduleService.deleteModule(module._id)
        .then(status =>   dispatch({
                type: DELETE_MODULE,
                module
            })
        )

export const selectModule = (dispatch, moduleId) =>
    dispatch({
        type: SELECT_MODULE,
        moduleId
    })