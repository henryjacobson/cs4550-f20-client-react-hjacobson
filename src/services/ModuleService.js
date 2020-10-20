const url = "https://wbdv-generic-server.herokuapp.com/api/hjacobson"

export const createModule = (courseId, module) =>
    fetch(`${url}/courses/${courseId}/modules`, {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllModulesForCourse = (courseId) =>
    fetch(`${url}/courses/${courseId}/modules`)
        .then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${url}/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${url}/modules/${moduleId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    createModule, findAllModulesForCourse, updateModule, deleteModule
}
