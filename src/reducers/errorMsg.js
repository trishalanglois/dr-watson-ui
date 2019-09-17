export const errorMsg = (state='', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.errorMsg
    default:
      return state;
  }
}