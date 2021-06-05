import {initialState} from "./context";

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type){
        case "SET_TEACHERS":
            return{
                ...state,
                teachers: payload
            }
        case "SET_PRACTICES":
            return{
                ...state,
                practices: payload
            }
        case "SET_MEDITATIONS":
            return{
                ...state,
                meditations: payload
            }
        default:
            return state
    }
}

export const setTeachers = (teachers) => ({type: "SET_TEACHERS", payload: teachers})
export const setPractices = (practices) => ({type: "SET_PRACTICES", payload: practices})
export const setMeditations = (teachers) => ({type: "SET_MEDITATIONS", payload: teachers})