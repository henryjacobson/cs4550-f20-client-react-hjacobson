const url = "https://wbdv-generic-server.herokuapp.com/api/hjacobson"

export const createService = (courseId, service) =>
    fetch(`${url}/courses/${courseId}/services`, {
        method: 'POST',
        body: JSON.stringify(service),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllServicesForCourse = (courseId) =>
    fetch(`${url}/courses/${courseId}/services`)
        .then(response => response.json())

export const updateService = (serviceId, service) =>
    fetch(`${url}/services/${serviceId}`, {
        method: 'PUT',
        body: JSON.stringify(service),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteService = (serviceId) =>
    fetch(`${url}/services/${serviceId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    createService, findAllServicesForCourse, updateService, deleteService
}
