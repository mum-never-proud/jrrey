import speechEventHandler from '../src/utils/speech-event-handlers';

describe('speech event handler', () => {
  it('should call dictate callback in spk mode', () => {
    const context = Object.assign({}, global.jerryContext);
    context.events.dictate = jest.fn();
    context.mode = 'spk';

    speechEventHandler.call(context, global.speechResult);

    expect(context.events.dictate).toHaveBeenCalled();
  });

  it('should call fallback when no command found in cmd mode', () => {
    const context = Object.assign({}, global.jerryContext);
    context.events.fallback = jest.fn();

    speechEventHandler.call(context, global.speechResult);

    expect(context.events.fallback).toHaveBeenCalled();
  });

  it('should call command callback when the speech recognition result is matched', () => {
    const context = Object.assign({}, global.jerryContext);

    context.commands.push({ phrase: 'hello', callback: jest.fn() });
    speechEventHandler.call(context, global.speechResult);

    expect(context.commands[0].callback).toHaveBeenCalled();
  });

  it('should call the respective event callback for speech recognition event', () => {
    const context = Object.assign({}, global.jerryContext);
    context.events.start = jest.fn();
    const speechResult = global.speechResult;
    speechResult.type = 'start';

    speechEventHandler.call(context, speechResult);

    expect(context.events.start).toHaveBeenCalled();
  });

  it('should restart speech recognition on end event when keepAlive is true', () => {
    const context = Object.assign({}, global.jerryContext);
    context.keepAlive = true;
    context.start = jest.fn();
    const speechResult = global.speechResult;
    speechResult.type = 'end';

    speechEventHandler.call(context, speechResult);

    expect(context.start).toHaveBeenCalled();
  });
});
