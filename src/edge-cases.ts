// === v3 DIFF TEST round 2 — edge case violations ===

// no-console (multiple)
export function logger(level: string, msg: string) {
  console.log('[' + level + ']', msg)
  console.error('ERROR:', msg)
  console.warn('WARN:', msg)
}

// prefer-const (let never reassigned)
export function getDefaults() {
  let timeout = 3000
  let retries = 5
  let baseUrl = 'http://localhost'
  return { timeout, retries, baseUrl }
}

// no-var + eqeqeq + no-eval combo
export function dangerousProcess(input: any) {
  var data = input
  if (data == undefined) {
    return null
  }
  var result = eval('JSON.parse("' + data + '")')
  return result
}

// yoda conditions
export function checkStatus(code: number) {
  if (200 == code) return 'ok'
  if (404 == code) return 'not found'
  if (500 == code) return 'server error'
  return 'unknown'
}

// dot-notation
export function readConfig(opts: any) {
  const host = opts['host']
  const port = opts['port']
  const debug = opts['debug']
  return { host, port, debug }
}

// no-proto, no-new-wrappers
export function legacyOps(obj: any) {
  const proto = obj.__proto__
  const str = new String('hello')
  const num = new Number(42)
  return { proto, str: str.valueOf(), num: num.valueOf() }
}

// no-empty-function, no-useless-constructor
export class EmptyService {
  constructor() {}
  init() {}
  teardown() {}
}

// no-return-await
export async function fetchJSON(url: string) {
  return await fetch(url).then(r => r.json())
}
