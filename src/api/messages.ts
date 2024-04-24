import httpClient from "./httpClient";

export type ComplianceInfo = {
  id: number;
  message: string;
  solved: boolean;
  user_id: number;
  create_at: number;
  update_at: number;
};

class MessageApi {
  sendMessage(message: string) {
    return httpClient.post<ComplianceInfo>("/specialist", { message });
  }

  getInfo(messageId: string) {
    return httpClient.get<ComplianceInfo>(`/specialist/${messageId}`);
  }

  getUnsolved() {
    return httpClient.get<ComplianceInfo[]>("/engineer/");
  }
}

const messageApi = new MessageApi();
export default messageApi;
