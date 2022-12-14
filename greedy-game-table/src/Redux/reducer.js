import { handle_Hide } from "./actionType";
import { Columns } from "../components/Column";

const initState={
    Columns
}

const reducer = (state=initState,action) => {
    switch(action.type){

        case (handle_Hide):{
           const objIndex = Columns.findIndex((obj => obj.Header ===action.payload.Header ));
           const newArr=Columns;
           newArr[objIndex]=action.payload;
            return {
                ...state,
                Columns:[...newArr]
            }
        }
        
        default:
            return state
    }
}
export default reducer;