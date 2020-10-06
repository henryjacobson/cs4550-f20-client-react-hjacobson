const url = "https://wbdv-generic-server.herokuapp.com/api/hjacobson/courses"

export const createCourse = (course) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(course),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

export const findAllCourses = () =>
  fetch(url)
    .then(response => response.json())

export const findCourseById = (id) =>
  fetch(`${url}/${id}`)
    .then(response => response.json())

export const updateCourse = (courseId, newCourse) =>
  fetch(`${url}/${courseId}`, {
    method: 'PUT',
    body: JSON.stringify(newCourse),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

export const deleteCourse = (courseId) =>
  fetch(`${url}/${courseId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())

export default {
  createCourse, findAllCourses, findCourseById, updateCourse, deleteCourse
}
