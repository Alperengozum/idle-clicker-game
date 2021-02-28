const initialState = {start: null}

export const startReducer = (state = initialState, action) => {
  switch (action.type) {
    case "start":
      return {start: action.start}
    default:
      return null
  }

}