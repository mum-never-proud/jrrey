export function assertFunction(input) {
  if (typeof input !== 'function') {
    throw TypeError('callback must be a function');
  }
}

export function assertString(input) {
  if (typeof input !== 'string') {
    throw TypeError('event must be a string');
  }
}

export function assertStringOrRegExp(input) {
  if (typeof input !== 'string' && !(input instanceof RegExp)) {
    throw TypeError('command must be either string or regex');
  }
}
