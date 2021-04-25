import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Homepage() {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
    <div className="grid w-full h-screen" style={{
      gridTemplateRows: "1fr auto 1fr",
    }}>
      <div className="flex"></div>

      <div className="w-400 flex flex-col m-auto bg-primary-800 p-6 gap-10 ">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold">ようこそ！</span>
            <p className="text-primary-100 flex-wrap">リアルタイムのチャット。<br/> <a href="/" className="text-red font-bold">ユーザ名 </a> 
            と <a href="/" className="text-red font-bold">ルーム名を入力してください。</a></p>
          </div>
          <div className="flex flex-col gap-4">
            <input className="p-3 border border-opacity-25 border-darkGray focus:outline-none rounded-md" type="text" placeholder="User Name"
                onChange={(event) => setName(event.target.value)}></input>

            <input className="p-3 border border-opacity-25 border-darkGray focus:outline-none rounded-md" type="text" placeholder="Room Name"
                onChange={(event) => setRoom(event.target.value)}></input>

            <Link to={`/chat?name=${name}&room=${room}`}>
                <button className="px-10 py-3 border border-opacity-25 bg-red focus:outline-none rounded-md w-min ml-auto text-white" type="button">Enter</button>
            </Link>
          </div>
      </div>
      <div className="flex flex-row justify-between absolute bottom-0 w-full bg-darkGray py-5 px-10 items-center text-white">
      <div className="text-white text-xl">👻 Prince Cyrelle</div>
      <div className="flex flex-row gap-6 text-primary-300">
        <a href="/">Privacy Policy</a>
        <a target="_blank" href="https://www.google.com/search?q=%E3%81%AA%E3%81%AB%E3%82%82%E3%81%AA%E3%81%84">About Me</a>
      </div>
    </div>
    </div>
    )
}

export default Homepage
