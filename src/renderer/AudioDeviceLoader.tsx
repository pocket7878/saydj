import { remote } from 'electron';
const audioDevices = remote.require('macos-audio-devices');
import React, { useCallback, useEffect } from 'react';
import { audioDevicesState } from './store';
import { useRecoilState } from 'recoil';
import { AudioDeviceSelector } from './AudioDeviceSelector';

export function AudioDeviceLoader() {
  const [audioDeviceList, setAudioDeviceList] = useRecoilState(audioDevicesState);

  useEffect(() => {
    const outputDevices = audioDevices.getOutputDevices.sync();
    const acc = []
    for(const d of outputDevices) {
      acc.push({ id: d.id, name: d.name });
    }
    setAudioDeviceList(acc);
  }, []);

  return (
    <div className="audio-device-loader">
      <AudioDeviceSelector/>
    </div>
  );
};
