export const ENDPOINTS = {
  MESSAGES: {
    CREATE: '/api/v1/messages',
    GET: (messageId: number) => `/api/v1/messages/${messageId}`,
    REPLY: (messageId: number) => `/api/v1/messages/${messageId}/reply`,
  },
  ARCHIVES: {
    CREATE: '/api/v1/archives',
    GET_ALL: '/api/v1/archives',
    GET: (savedMessageId: number) => `/api/v1/archives/${savedMessageId}`,
    DELETE: (savedMessageId: number) => `/api/v1/archives/${savedMessageId}`,
  },
} as const;
