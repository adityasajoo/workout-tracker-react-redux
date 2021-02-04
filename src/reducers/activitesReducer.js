import {v4} from "uuid";

const initialState = [];
const activitiesReducer = (state=initialState,action) =>{
    const {type, payload} = action;
    // eslint-disable-next-line default-case
    switch(type){
        case "CREATE_ACTIVITY":
            return [...state,{
                id: v4(),
                name: payload.name,
                duration:payload.duration,
            }]
        case "DELETE_ACTIVITY":
            const copyState = [...state];
            const i = copyState.findIndex(x=>x.id===payload.id);
            copyState.splice(i,1);
            return copyState;

        default: return state;
    }
};

export default activitiesReducer;