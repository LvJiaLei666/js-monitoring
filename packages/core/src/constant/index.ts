import { EventBus } from '../lib/eventBus'

/**
 * 事件类型
 */
export enum EVENTTYPES {
  ERROR = 'error',
  CONSOLEERROR = 'consoleError',
  UNHANDLEDREJECTION = 'unhandledrejection',
  CLICK = 'click',
  LOAD = 'load',
  BEFOREUNLOAD = 'beforeunload',
  FETCH = 'fetch',
  XHROPEN = 'xhr-open',
  XHRSEND = 'xhr-send',
  HASHCHANGE = 'hashchange',
  HISTORYPUSHSTATE = 'history-pushState',
  HISTORYREPLACESTATE = 'history-replaceState',
  POPSTATE = 'popstate',
  READYSTATECHANGE = 'readystatechange',
  ONLINE = 'online',
  OFFLINE = 'offline',
}

export type JsMonitor = {
  eventBus: EventBus
}
