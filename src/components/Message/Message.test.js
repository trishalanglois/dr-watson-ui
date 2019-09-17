import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
  it('should match the snapshot if the message is made by the user', () => {
    const mockMessage = 'I have been having a terrific week!';
    const wrapper = shallow(<Message message={mockMessage} isUser={true} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a class if the message was made by the Watson API', () => {
    const mockMessage = 'My name is Dr. Watson.  I am excited to hear that your week has been going well.'
    const wrapper = shallow(<Message message={mockMessage} isUser={false} />);

    expect(wrapper).toMatchSnapshot();
  })
})