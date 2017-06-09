export const ADD_PAGE = 'ADD_PAGE';
export const CHANGE_PAGE = 'CHANGE_PAGE'

export function addPage (from, results) {
    return {
        type: ADD_PAGE,
        from,
        results
    }
}

export function changePage (path) {
    return {
        type: CHANGE_PAGE,
        path
    }
}