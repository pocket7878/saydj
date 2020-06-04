import React, { useCallback } from "react";
import { audioDevicesState, activeAudioDeviceId } from "./store";
import { useRecoilValue, useRecoilState } from "recoil";
import "./AudioDeviceSelector.scss";

export function AudioDeviceSelector() {
  const [activeDeviceId, setActiveDeviceId] = useRecoilState(
    activeAudioDeviceId
  );
  const audioDeviceList = useRecoilValue(audioDevicesState);

  const audioOptions = [];
  for (const a of audioDeviceList) {
    audioOptions.push(
      <option key={a.id} value={a.id}>
        {a.name}
      </option>
    );
  }

  const onChange = (deviceId: string) => {
    setActiveDeviceId(deviceId);
  };

  return (
    <div className="audio-device-selector">
      <select
        className="audio-device-selector__selector"
        onChange={(event) => onChange(event.target.value)}
      >
        {audioOptions}
      </select>
    </div>
  );
}
