import { assertStringOrRegExp, assertFunction } from './assert';

export function parseTranscripts(speech) {
  return Array.from(speech.results[speech.resultIndex]).map((result) => result.transcript);
}

export function parseCommands(zippedCommands) {
  const commands = [];

  if (Array.isArray(zippedCommands)) {
    zippedCommands.forEach((zippedCommand) => {
      if (Array.isArray(zippedCommand)) {
        const [phrase, callback] = zippedCommand;

        assertStringOrRegExp(phrase);
        assertFunction(callback);

        commands.push({ phrase, callback });
      } else {
        throw Error('commands should be a zipped array e.g [ [command, callback] ]');
      }
    });

    return commands;
  }

  return commands;
}
