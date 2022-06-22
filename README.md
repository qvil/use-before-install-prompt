# use-before-install-prompt

React hook for beforeinstallprompt event

## Install

```
npm i use-before-install-prompt
```

## Usage

<!-- [Demo]() -->

```js
import React from 'react';
import useBeforeInstallPrompt from 'use-before-install-prompt';

const App = () => {
  const { isInstalled, addToHomeScreen } = useBeforeInstallPrompt();

  return (
    <>
      {!isInstalled && (
        <button onClick={addToHomeScreen}>Add to home screen</button>
      )}
    </>
  );
};
```

## Options

| options     | Type     | Description                                 | Required | Default Value |
| ----------- | -------- | ------------------------------------------- | -------- | ------------- |
| acceptedFn  | Function | Callback function to execute when accepted  | no       | console.log() |
| dismissedFn | Function | Callback function to execute when dismissed | no       | console.log() |
| installedFn | Function | Callback function to execute when installed | no       | console.log() |

## Return value

| value           | Type     | Description                 |
| --------------- | -------- | --------------------------- |
| isInstalled     | boolean  | Install state               |
| addToHomeScreen | Function | Add to home screen function |

## Browser compatibility

https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent#browser_compatibility
