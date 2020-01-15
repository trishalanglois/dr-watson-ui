import React from 'react';
import './Message.css';

const Message = ({ message, isUser }) => {
  return (
    <section className={isUser ? 'message' : 'message watson'}>
      <p>{message.message}</p>
    </section>
  )
}

export default Message
