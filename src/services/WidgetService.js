const url = "https://rocky-sierra-12080.herokuapp.com/api" // "http://localhost:8080/api"

export const createWidget = (topicId, widget) =>
    fetch(`${url}/widgets`, {
        method: 'POST',
        body: JSON.stringify({...widget, topicId}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllWidgetsForTopic = (topicId) =>
    fetch(`${url}/topics/${topicId}/widgets`)
        .then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`${url}/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${url}/widgets/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response)

export const reorderWidget = (tid, order, widget) =>
    fetch(`${url}/topics/${tid}/${order}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createWidget, findAllWidgetsForTopic, updateWidget, deleteWidget, reorderWidget
}
