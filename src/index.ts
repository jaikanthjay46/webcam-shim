function mediaDeviceWrapper(constraints: MediaStreamConstraints, cb: any, err: any) {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((e: any) => cb(e))
    .catch((e: any) => err(e));
}

export function getUserMedia(constraints: MediaStreamConstraints, cb: any, err: any) {
  navigator.getUserMedia =
    (navigator as any).getUserMedia || (navigator as any).webkitGetUserMedia || (navigator as any).mozGetUserMedia;

  if (typeof navigator.mediaDevices.getUserMedia === 'function') {
    navigator.getUserMedia = navigator.getUserMedia || mediaDeviceWrapper;
  }
  if (navigator.getUserMedia) {
    navigator.getUserMedia(
      constraints,
      (stream) => {
        cb(stream);
      },
      (e) => {
        err(e);
      },
    );
  } else {
    err('Device not supports');
  }
}
