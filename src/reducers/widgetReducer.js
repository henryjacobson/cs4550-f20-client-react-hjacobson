import {
    FIND_WIDGETS_FOR_TOPIC,
    DELETE_WIDGET,
    UPDATE_WIDGET,
    CREATE_WIDGET,
    SELECT_WIDGET, TOGGLE_PREVIEW, REORDER_WIDGET
} from "../actions/widgetActions";

const initialState = {
    widgets: [],
    preview: false
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets.sort((w1, w2) => w1.widgetOrder - w2.widgetOrder),
                preview: state.preview
            }
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ],
                preview: state.preview
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widget.id),
                preview: state.preview
            }
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget),
                preview: state.preview
            }
        case TOGGLE_PREVIEW:
            return {
                widgets: state.widgets,
                preview: action.preview
            }
        case REORDER_WIDGET:
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget),
                preview: state.preview
            }
        default:
            return state
    }
}

export default widgetReducer
