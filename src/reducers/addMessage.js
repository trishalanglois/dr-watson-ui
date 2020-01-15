export const addMessage = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.message]
    case 'CLEAR_MESSAGES':
      return action.messages
    default:
      return state;
  }
}
