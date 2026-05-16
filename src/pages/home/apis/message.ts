import { ENDPOINTS } from '../../../shared/apis/endpoints';
import { http } from '../../../shared/apis/http';
import type {
  CreateMessageRequest,
  CreateMessageResponse,
} from '../../../shared/types/types';

export const createMessage = (body: CreateMessageRequest) => {
  return http.post<CreateMessageResponse, CreateMessageRequest>(
    ENDPOINTS.MESSAGES.CREATE,
    body,
  );
};
