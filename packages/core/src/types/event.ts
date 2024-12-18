export enum EVENTTYPES {
  ERROR = 'error',
  PERFORMANCE = 'performance',
  BEHAVIOR = 'behavior',
}

export enum ERROR_TYPES {
  JS_ERROR = 'js_error',
  PROMISE_ERROR = 'promise_error',
  RESOURCE_ERROR = 'resource_error',
  HTTP_ERROR = 'http_error',
  UNKNOWN_ERROR = 'unknown_error',
}

export enum BEHAVIOR_TYPES {
  CLICK = 'click',
  HASHCHANGE = 'hashchange',
  POPSTATE = 'popstate',
  ONLINE = 'online',
  OFFLINE = 'offline',
  HTTP_REQUEST = 'http_request',
  BEFOREUNLOAD = 'beforeunload',
}

export enum PERFORMANCE_TYPES {
  TIMING = 'timing',
  PAINT = 'paint',
  LCP = 'lcp',
  FID = 'fid',
  RESOURCE = 'resource',
}

export interface EventBase {
  type: string
  timestamp: number
  pageUrl: string
  pageTitle: string
}

export interface ErrorEventData extends EventBase {
  type: ERROR_TYPES
  message?: string
  stack?: string
  filename?: string
  lineno?: number
  colno?: number
  tagName?: string
  url?: string
  status?: number
  response?: string
  method?: string
  path?: string
}

export interface BehaviorEventData extends EventBase {
  type: BEHAVIOR_TYPES
  path?: string
  from?: string
  to?: string
  method?: string
  url?: string
  // 状态
  status?: number
  // 时长
  duration?: number
  // 大小
  requestSize?: number
  responseSize?: number
  // 标签名称
  tagName?: string
  // 坐标
  clientX?: number
  clientY?: number
  // 总计停留时长
  stayDuration?: number
}

export interface PerformanceEventData extends EventBase {
  type: PERFORMANCE_TYPES
  metrics?: {
    dns: number
    tcp: number
    ttfb: number
    domParse: number
    domReady: number
    load: number
  }
  name?: string
  startTime?: number
  value?: number
}

export type MonitorEventData =
  | { eventType?: EVENTTYPES }
  | ErrorEventData
  | BehaviorEventData
  | PerformanceEventData
