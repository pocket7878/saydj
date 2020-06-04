import React from 'react';
import { useRecoilValue } from 'recoil';
import './MessageList.scss';
import { Message, messagesState } from './store';
import { MessageListItem } from './MessageListItem';

export function MessageList() {
  const messages: Array<Message> = useRecoilValue(messagesState);

  const messageListItems = [];
  for(const m of messages) {
    messageListItems.push(
      <MessageListItem key={m.id} message={m}/>
    );
  }

  return (
    <div className="message-list">
      {messageListItems}
    </div>
  );
};
