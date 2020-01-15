import * as actions from '../actions';

describe('action', () => {
  it('should add a message', () => {
    const message = 'Robbie loves pugs.';
    const result = actions.addMessage(message);
    const mockExpectedAction = {
      type: 'ADD_MESSAGE',
      message
    }

    expect(result).toEqual(mockExpectedAction);
  })

  it('should clear messages', () => {
    const result = actions.clearMessages();
    const mockExpectedAction = {
      type: 'CLEAR_MESSAGES',
      messages: []
    }

    expect(result).toEqual(mockExpectedAction);
  })
})
