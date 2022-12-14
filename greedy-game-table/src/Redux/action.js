import { handle_Hide } from "./actionType";


const handlehide = (payload) =>{
   return {
    type: handle_Hide,
    payload,
   }
}
export {handlehide}
