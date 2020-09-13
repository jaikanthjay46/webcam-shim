<h1 align="center">webcam-shim 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/webcam-shim" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/webcam-shim.svg">
  </a>
  <a href="https://github.com/jaikanthjay46/webcam-shim/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jaikanthjay46/webcam-shim/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/jaikanthjay46/webcam-shim" />
  </a>
</p>

> This is for the smooth interim transition of getUserMedia being moved it to mediaDevices. Also gives the old callback style API. This package can be used as standalone and in frameworks such as Angular

### [Homepage](https://github.com/jaikanthjay46/webcam-shim#readme)

## Usage

```sh
npm i webcam-shim
```

```ts
import { getUserMedia } from 'webcam-shim/lib';

...


const constraints: MediaStreamConstraints = { audio: false, video: {  facingMode: 'user' }}
getUserMedia(constraints, 
  (stream) => {
    document.querySelector('#video').video.srcObject = stream;
  },
  (err) => {
      console.log("The following error occurred: " + err);
  }
)
```

## Author

👤 **Jaikanth J**

* Github: [@jaikanthjay46](https://github.com/jaikanthjay46)


## 📝 License

Copyright © 2020 [Jaikanth J](https://github.com/jaikanthjay46).<br />
This project is [ISC](https://github.com/jaikanthjay46/webcam-shim/blob/master/LICENSE) licensed.



_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
