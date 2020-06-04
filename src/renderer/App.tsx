import React from "react";
import "./App.scss";
import { RecoilRoot } from "recoil";
import { MessageList } from "./MessageList";
import { MessageForm } from "./MessageForm";
import { AudioDeviceLoader } from "./AudioDeviceLoader";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <AudioDeviceLoader />
        <MessageList />
        <MessageForm />
      </div>
    </RecoilRoot>
  );
}

export default App;
