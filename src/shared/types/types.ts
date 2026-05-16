export interface CreateMessageRequest {
  senderInitial: string;
  receiverInitial: string;
  content: string;
}

export interface CreateMessageResponse {
  messageId: number;
  viewUrl: string;
}

export interface GetMessageResponse {
  senderInitial: string;
  receiverInitial: string;
  content: string;
  createdAt: string;
}

export interface SendReplyRequest {
  senderInitial: string;
  receiverInitial: string;
  content: string;
}

export interface SendReplyResponse {
  messageId: number;
  viewUrl: string;
}

export interface ArchiveMessageRequest {
  messageId: number;
  password: string;
}

export interface ArchiveMessageResponse {
  savedMessageId: number;
}

export interface ArchiveItem {
  savedMessageId: number;
  content: string;
  senderInitial: string;
  receiverInitial: string;
  createdAt: string;
}

export interface GetArchivesResponse {
  archives: ArchiveItem[];
}

export interface GetSavedMessageResponse {
  senderInitial: string;
  receiverInitial: string;
  content: string;
  createdAt: string;
}

export interface DeleteSavedMessageRequest {
  password: string;
}