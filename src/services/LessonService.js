const url = "https://wbdv-generic-server.herokuapp.com/api/hjacobson"

export const createLesson = (moduleId, lesson) =>
    fetch(`${url}/modules/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllLessonsForModule = (moduleId) =>
    fetch(`${url}/modules/${moduleId}/lessons`)
        .then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${url}/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${url}/lessons/${lessonId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    createLesson, findAllLessonsForModule, updateLesson, deleteLesson
}
