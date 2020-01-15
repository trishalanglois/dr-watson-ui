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

// After successfully implementing your messages into Redux, write the tests for your new actions and messages reducer. We have not created test files for actions and reducers yet, so please add them in. Any changes you have made to containers, specifically with mapStateToProps and mapDispatchToProps, should also have updated tests. (some tests might already exist but need an update, others you might need to create)
