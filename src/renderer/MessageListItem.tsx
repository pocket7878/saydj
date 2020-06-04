import React, { useCallback } from "react";
import { Message, messagesState, activeAudioDeviceId } from "./store";
import { say } from "./say_util";
import { useRecoilState, useRecoilValue } from "recoil";

type Props = {
  message: Message;
};

export function MessageListItem(props: Props) {
  const deviceId = useRecoilValue(activeAudioDeviceId);
  const [messages, setMessages] = useRecoilState(messagesState);

  const onDeleteClicked = useCallback(() => {
    setMessages(messages.filter((m) => m.id != props.message.id));
  }, [props.message.id, messages]);

  const onMessageClicked = useCallback(() => {
    say(props.message.msg, deviceId);
  }, [props.message.id, messages, deviceId]);

  return (
    <div className="message-list__item">
      <span
        className="message-list__item__delete-button"
        onClick={onDeleteClicked}
      >
        X
      </span>
      <span
        className="message-list__item__message-text"
        onClick={onMessageClicked}
      >
        {props.message.msg}
      </span>
    </div>
  );
}
