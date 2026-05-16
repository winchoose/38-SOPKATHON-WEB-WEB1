import { ENDPOINTS } from '../../../shared/apis/endpoints';
import { http } from '../../../shared/apis/http';
import type {
  SendReplyRequest,
  SendReplyResponse,
} from '../../../shared/types/types';

export const sendReply = (messageId: number, body: SendReplyRequest) =>
  http.post<SendReplyResponse, SendReplyRequest>(
    ENDPOINTS.MESSAGES.REPLY(messageId),
    body,
  );
