export const ADD_PAGE = 'ADD_PAGE';

export function addPage (results, notFound) {
    return {
        type: ADD_PAGE,
        results,
        notFound
    }
}