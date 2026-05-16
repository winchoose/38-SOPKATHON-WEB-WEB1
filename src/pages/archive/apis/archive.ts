import { http } from '../../../shared/apis/http';
import { ENDPOINTS } from '../../../shared/apis/endpoints';
import type {
  GetArchivesResponse,
  GetSavedMessageResponse,
  DeleteSavedMessageRequest,
} from './../../../shared/types/types';

export const getArchives = () =>
  http.get<GetArchivesResponse>(ENDPOINTS.ARCHIVES.GET_ALL);

export const getSavedMessage = (savedMessageId: number) =>
  http.post<GetSavedMessageResponse>(
    ENDPOINTS.ARCHIVES.GET_ONE(savedMessageId),
  );

export const deleteSavedMessage = (
  savedMessageId: number,
  body: DeleteSavedMessageRequest,
) => http.post<void>(ENDPOINTS.ARCHIVES.DELETE(savedMessageId), body);
