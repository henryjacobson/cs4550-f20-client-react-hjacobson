const url = "https://wbdv-generic-server.herokuapp.com/api/hjacobson"

export const createTopic = (courseId, topic) =>
    fetch(`${url}/courses/${courseId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllTopicsForCourse = (courseId) =>
    fetch(`${url}/courses/${courseId}/topics`)
        .then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`${url}/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${url}/topics/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    createTopic, findAllTopicsForCourse, updateTopic, deleteTopic
}
