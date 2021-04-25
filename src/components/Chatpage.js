import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import MessageList from "./Messages/MessageList";
import OnlineUsers from "./OnlineUsers/OnlineUsers";
let socket;

function ChatPage() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socketId, setSocketId] = useState("");
  const [users, setUsers] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    socket = io(ENDPOINT);
    socket.on("connect", () => {
      setSocketId(socket.id);
    });
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room });
  }, []);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages([...messages, data]);
    });

    socket.on("users", (res) => {
      setUsers([...users, res]);
    });
  }, [messages, users]);

  const emitMessage = () => {
    socket.emit("emitMessage", { name, room, message });
  };

  return (
    <div
      className="container mx-auto py-14 min-h-screen w-full grid gap-10 "
      style={{
        gridTemplateColumns: "1fr 50% 1fr",
      }}
    >
      {/* List of Oneline Users */}
      <div className="border border-opacity-25 border-darkGray txt-black">
          {users.map((user, i) => {
              <p key={i}>{user.name}</p>
          })}
        <OnlineUsers users={users} />
      </div>

      {/* CHAT SECTION */}
      <div className="bg-whitish rounded-lg h-full relative">
        <div
          className="grid grid-rows-2 h-full align-end"
          style={{
            gridTemplateRows: "1fr auto",
          }}
        >
          {/* Messages */}
          <div className="relative flex flex-col">
            <MessageList messages={messages} name={name} socketId={socketId} />
          </div>

          {/* Chat Input */}
          <div
            className="flex flex-row m-5 bg-white rounded-lg h-16"
            style={{
              gridTemplateCols: "1fr auto",
            }}
          >
            <input
              type="textarea"
              className="pl-3 w-full m-2 border border-opacity-25 border-darkGray focus:border-darkGray rounded-lg"
              placeholder="メッセージを入力してください"
              onChange={(event) => setMessage(event.target.value)}
            ></input>

            <button
              type="Submit"
              className="px-5 py-3 m-2 bg-red text-white rounded-lg"
              onClick={() => emitMessage()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="border border-opacity-25 border-darkGray">3</div>
    </div>
  );
}

export default ChatPage;
