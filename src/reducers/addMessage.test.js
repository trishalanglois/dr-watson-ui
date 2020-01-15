import { addMessage } from '../reducers/addMessage';

describe.only('addMessage reducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = addMessage(undefined, []);

    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action is ADD_MESSAGE', () => {
    const initialState = [];
    const action = {
      type: 'ADD_MESSAGE',
      message: "Amy is my favorite teacher."
    };
    const result = addMessage(initialState, action);
    const expected = [...initialState, action.message];

    expect(result).toEqual(expected)
  })

  it('should return the correct state is the action is CLEAR_MESSAGES', () => {
    const initialState = ['Robbie still loves pugs.'];
    const action = {
      type: 'CLEAR_MESSAGES',
      messages: []
    }
    const result = addMessage(initialState, action);
    const expected = [];

    expect(result).toEqual(expected);
  })
})
