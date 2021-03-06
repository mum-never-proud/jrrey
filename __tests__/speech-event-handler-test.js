import speechEventHandler from '../src/utils/speech-event-handlers';

describe('speech event handler', () => {
  it('should call dictate callback in spk mode', () => {
    const context = { ...global.jrreyContext };
    context.events.dictate = jest.fn();
    context.mode = 'spk';

    speechEventHandler.call(context, global.speechResult);

    expect(context.events.dictate).toHaveBeenCalled();
  });

  it('should call fallback when no command found in cmd mode', () => {
    const context = { ...global.jrreyContext };
    context.events.fallback = jest.fn();

    speechEventHandler.call(context, global.speechResult);

    expect(context.events.fallback).toHaveBeenCalled();
  });

  it('should call command callback when the speech recognition result is matched', () => {
    const context = { ...global.jrreyContext };

    context.commands.push({ phrase: 'hello', callback: jest.fn() });
    speechEventHandler.call(context, global.speechResult);

    expect(context.commands[0].callback).toHaveBeenCalled();
  });

  it('should call the respective event callback for speech recognition event', () => {
    const context = { ...global.jrreyContext };
    context.events.start = jest.fn();
    const { speechResult } = global;
    speechResult.type = 'start';

    speechEventHandler.call(context, speechResult);

    expect(context.events.start).toHaveBeenCalled();
  });

  it('should restart speech recognition on end event when keepAlive is true', () => {
    const context = { ...global.jrreyContext };
    context.keepAlive = true;
    context.listeningSince = Date.now() - 1001; // substracting a sec
    context.start = jest.fn();
    const { speechResult } = global;
    speechResult.type = 'end';

    speechEventHandler.call(context, speechResult);

    expect(context.start).toHaveBeenCalled();
  });
});
