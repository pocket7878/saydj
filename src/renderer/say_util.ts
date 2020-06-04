import { remote } from 'electron';
import { useRecoilValue } from 'recoil';
import { activeAudioDeviceId } from './store';
const process = remote.require('child_process');

export function say(text: string, deviceId: string | null) {
  if (deviceId == null) {
    return;
  }

  process.exec("say -a " + deviceId + " " + text.replace(/\n/,' '));
}
