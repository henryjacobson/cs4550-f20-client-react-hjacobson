import widgetService from "../services/WidgetService"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const TOGGLE_PREVIEW = "TOGGLE_PREVIEW"
export const REORDER_WIDGET = "REORDER_WIDGET"

export const createWidget = (dispatch, topicId, widget) =>
    widgetService.createWidget(topicId, widget)
        .then(actualWidget => dispatch({
            type: CREATE_WIDGET,
            widget: actualWidget
        }))

export const findWidgetsForTopic = (dispatch, topicId) =>
    widgetService.findAllWidgetsForTopic(topicId)
        .then(actualWidgets => dispatch({
                type: FIND_WIDGETS_FOR_TOPIC,
                widgets: actualWidgets
            })
        )

export const updateWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget.id, widget)
        .then(status => dispatch({
                type: UPDATE_WIDGET,
                widget
            })
        )

export const deleteWidget = (dispatch, widget) =>
    widgetService.deleteWidget(widget.id)
        .then(status =>   dispatch({
                type: DELETE_WIDGET,
                widget
            })
        )

export const togglePreview = (dispatch, preview) =>
    dispatch({
        type: TOGGLE_PREVIEW,
        preview
    })

export const reorderWidget = (dispatch, tid, order, widget) =>
    widgetService.reorderWidget(tid, order, widget)
        .then(status => dispatch({
            type: REORDER_WIDGET,
            widget
        }))

export const saveAll = (dispatch, widgets) =>
    widgets.map(widget => updateWidget(dispatch, widget))