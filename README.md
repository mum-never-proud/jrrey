# jrrey

A JS SpeechRecognition library

# Demo

Check out <a href="https://mum-never-proud.github.io/jrrey/">jrrey</a>!

## Methods

> init

Initialize jrrey with the optional config.

```javascript
  $j.init({ ...config });
```

> start

Starts SpeechRecognition.

```javascript
  jrreyInstance.start();
```

> stop

Stops SpeechRecognition.

```javascript
  jrreyInstance.stop();
```

> onEvent

Add callback for supported events.

```javascript
  jrreyInstance.onEvent('dictate', callback);
```

> offEvent

Remove callback for supported events.

```javascript
  jrreyInstance.offEvent('dictate');
```

> onCommand

Add callback for the given command. Command can either be a string or a RegExp.

```javascript
  jrreyInstance.onCommand('show me cats', callback);
    jrreyInstance.onCommand(/show me (.*)/, callback);
```

> offCommand

Remove callback for the given command.

```javascript
  jrreyInstance.offCommand('show me cat');
    jrreyInstance.offCommand(); // removes all the commands callback
```

## Config options

> supported config options

- events
- commands
- mode
- keepAlive

> supported events

- start
- end
- audiostart
- audioend
- speechstart
- speechend
- result
- error
- nomatch

> commands

Commands can either be String or RegExp.

```javascript
  const commands = {
    'command 1': callback,
    /command (\d)/: callback,
  };
```

> supported modes

- **cmd** - will execute the callback of the matching command.
- **dictate** - the output will be streamed to **dictate** callback if provided in commands.

> keepAlive

By default, SpeechRecognition will sleep after a few moments of inactivity. Setting this value to true will keep the SpeechRecognition on throughout the session unless turned off manually.
