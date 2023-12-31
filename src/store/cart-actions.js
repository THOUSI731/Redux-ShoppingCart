import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchData = () => {
     return async (dispatch) => {
          const fetchHandler = async () => {
               const res = await fetch("https://redux-shopping-ebdc2-default-rtdb.firebaseio.com/cartitems.json")
               const data = await res.json();
               return data;
          }
          try{
               const cartData = await fetchHandler();
               dispatch(cartActions.replaceData(cartData))
          } catch (err) {
               dispatch(uiActions.showNotification({
                    open: true,
                    message: "Sending Request Failed",
                    type: 'error'
               }))
          }
     }
}

export const sendCartData = cart => {
     return async (dispatch) => {
          dispatch(uiActions.showNotification({
               open: true,
               message: "Sending Request",
               type: 'warning'
             })
          );
          const sendRequest = async () => {
               // Send state as Sending Request
               const res = await fetch(
                 'https://redux-shopping-ebdc2-default-rtdb.firebaseio.com/cartitems.json',
                 {
                   method:'PUT',
                   body:JSON.stringify(cart)
                 }
               );
               const data = await res.json();
               console.log(data);
               // Send state as Request is Successful
               dispatch(uiActions.showNotification({
                 open: true,
                 message: "Sending Request to Database Successfully",
                 type: 'success'
               }))
          };
          try{
               await sendRequest();
          } catch (err) {
               dispatch(uiActions.showNotification({
                    open: true,
                    message: "Sending Request Failed",
                    type: 'error'
               }))
          }
     }
}