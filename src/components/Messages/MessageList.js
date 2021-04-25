import React from "react";
import Message from "../Messages/Message";
import ScrollableFeed from "react-scrollable-feed";

function MessageList({ messages, name, socketId }) {

  return (
    <div className="absolute h-full w-full">
      <ScrollableFeed>
        {messages.map((message, i) => (
          <Message
            message={message.text}
            key={i}
            socketId={socketId}
            senderId={message.senderId}
          />
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default MessageList;
