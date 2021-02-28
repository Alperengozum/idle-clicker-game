const initialState = {username:null }

export const loginReducer =  ( state= initialState,action) =>{
  switch (action.type) {
    case "username":
      return {username:action.username}
    default:
      return null

  }
}