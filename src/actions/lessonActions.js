import lessonService from "../services/LessonService"
export const CREATE_LESSON = "CREATE_LESSON"
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"

export const createLesson = (dispatch, module, lesson) =>
    lessonService.createLesson(module._id, lesson)
        .then(actualLesson => dispatch({
            type: CREATE_LESSON,
            lesson: actualLesson
        }))

export const findLessonsForModule = (dispatch, moduleId) =>
    lessonService.findAllLessonsForModule(moduleId)
        .then(actualLessons => dispatch({
                type: FIND_LESSONS_FOR_MODULE,
                lessons: actualLessons
            })
        )

export const updateLesson = (dispatch, lesson) =>
    lessonService.updateLesson(lesson._id, lesson)
        .then(status => dispatch({
                type: UPDATE_LESSON,
                lesson
            })
        )

export const deleteLesson = (dispatch, lesson) =>
    lessonService.deleteLesson(lesson._id)
        .then(status =>   dispatch({
                type: DELETE_LESSON,
                lesson
            })
        )