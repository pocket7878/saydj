import { atom, RecoilState } from "recoil";
import { v4 as uuidv4 } from 'uuid';

export type Message = {
  msg: string;
  id: string;
};

export function buildMessage(msg: string): Message {
  return { msg: msg, id: uuidv4() };
}

export const messagesState: RecoilState<Array<Message>> = atom({
  key: 'messages',
  default: new Array<Message>(),
});

export type AudioDevice = {
  id: string;
  name: string;
}

export const audioDevicesState: RecoilState<Array<AudioDevice>> = atom({
  key: 'audiodevices',
  default: new Array<AudioDevice>(),
});

export const activeAudioDeviceId: RecoilState<string | null> = atom({
  key: 'activeAudioDeviceId',
  default: null,
});
