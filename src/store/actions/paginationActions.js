export const CHANGE_PAGE="CHANGE_PAGE"
export const CHANGE_TOTEL_PAGE="CHANGE_TOTEL_PAGE"


export function changePage(pageNumber){
    return {
        type:CHANGE_PAGE,
        payload:pageNumber
    }
}

export function changeTotelPage(pageNumber){
    return {
        type:CHANGE_TOTEL_PAGE,
        payload:pageNumber
    }
}
