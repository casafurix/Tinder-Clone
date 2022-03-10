import React from "react";

function ChatHeader() {
  return (
    <div className='chat-container-header'>
      <div className='profile'>
        <div className='image-container'>
          <img src='' alt='' />
        </div>
        <h3>Username</h3>
      </div>
      <i className='log-out-icon'>←</i>
    </div>
  );
}

export default ChatHeader;
