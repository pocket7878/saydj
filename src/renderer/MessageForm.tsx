import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "./MessageForm.scss";
import { messagesState, buildMessage, activeAudioDeviceId } from "./store";
import { say } from "./say_util";

export function MessageForm() {
  const deviceId = useRecoilValue(activeAudioDeviceId);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useRecoilState(messagesState);

  const onMessageSubmit = () => {
    if (newMessage == "") {
      return;
    }

    setMessages([...messages, buildMessage(newMessage)]);
    setNewMessage("");
  };

  const onSayButtonClicked = () => {
    if (newMessage == "") {
      return;
    }

    say(newMessage, deviceId);
    setNewMessage("");
  };

  return (
    <div className="message-form">
      <textarea
        className="message-form__field"
        rows={newMessage.split("\n").length}
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)}
      />
      <div className="message-form__buttons">
        <div
          className="message-form__button message-form__add-message-button"
          onClick={onMessageSubmit}
        >
          追加
        </div>
        <div
          className="message-form__button message-form__say-button"
          onClick={onSayButtonClicked}
        >
          読みあげる
        </div>
      </div>
    </div>
  );
}
