import { http } from '../../../shared/apis/http';
import { ENDPOINTS } from '../../../shared/apis/endpoints';
import type {
  ArchiveItem,
  GetSavedMessageResponse,
  DeleteSavedMessageRequest,
} from './../../../shared/types/types';

export const getArchives = async (): Promise<ArchiveItem[]> => {
  const res = await http.get<ArchiveItem[]>(ENDPOINTS.ARCHIVES.GET_ALL);
  return res ?? [];
};

export const getSavedMessage = (savedMessageId: number) =>
  http.post<GetSavedMessageResponse>(
    ENDPOINTS.ARCHIVES.GET_ONE(savedMessageId),
    { password: '1234' },
  );

export const deleteSavedMessage = (
  savedMessageId: number,
  body: DeleteSavedMessageRequest,
) => http.post<void>(ENDPOINTS.ARCHIVES.DELETE(savedMessageId), body);
