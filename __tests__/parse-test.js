import { parseCommands, parseTranscripts } from '../src/utils/parser';

describe('parser', () => {
  it('should parse commands', () => {
    const commands = [
      [ 'hello', jest.fn() ],
      [ /search for (.*)/, jest.fn() ]
    ],
      parsedCommands = parseCommands(commands);

    expect(parsedCommands.length).toEqual(2);

    parsedCommands.forEach((command, idx) => expect(command.phrase).toEqual(commands[idx][0]));
  });

  it('should show throw TypeError when one of the commands is not a string or regex', () => {
    expect(() => parseCommands([
      [ {}, jest.fn() ]
    ])).toThrowError(TypeError);
  });

  it('should show throw TypeError error when one of the commands callback is not a function', () => {
    expect(() => parseCommands([
      [ 'hello', [] ]
    ])).toThrowError(TypeError);
  });

  it('should show thow Error command list is not in zipped format', () => {
    expect(() => parseCommands([ {} ])).toThrowError(Error);
  });

  it('should return empty commands when invalid', () => {
    expect(parseCommands({}).length).toEqual(0);
  });

  it('should parse transcripts', () => {
    const parsedTranscripts = parseTranscripts(global.speechResult);

    expect(parsedTranscripts.length).toEqual(2);
    expect(parsedTranscripts.toString()).toEqual('hello,world');
  });
});
