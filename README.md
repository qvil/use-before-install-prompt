# use-before-install-prompt

React hook for beforeinstallprompt event

## Install

```
npm i use-before-install-prompt
```

## Usage

<!-- [Live Demo(Code Sandbox)](https://codesandbox.io/s/react-daily-hooksuse-axios-example-kur53) -->

```js
import React from 'react';
import useBeforeInstallPrompt from 'use-before-install-prompt';

const App = () => {
  const { addToHomeScreen } = useBeforeInstallPrompt();

  return <button onClick={addToHomeScreen}>Add to home screen</button>;
};
```

## Options

| options              | Type     | Description                                                              | Required | Default Value |
| -------------------- | -------- | ------------------------------------------------------------------------ | -------- | ------------- |
| acceptedFn           | Function | API URL                                                                  | no       | console.log() |
| dismissedFn          | Function | Fetch trigger, If you want to not fetch automatically set value to false | no       | console.log() |
| afterInstallPromptFn | Function | Fetch trigger, If you want to not fetch automatically set value to false | no       | console.log() |

## Return value

| value           | Type                                                 | Description                 |
| --------------- | ---------------------------------------------------- | --------------------------- |
| deferredPrompt  | MutableRefObject<BeforeInstallPromptEvent,undefined> | deferredPrompt Ref          |
| addToHomeScreen | Function                                             | Add to home screen function |

## Browser compatibility

https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent#browser_compatibility
