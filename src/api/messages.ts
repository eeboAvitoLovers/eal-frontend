import httpClient from "./httpClient";

class MessageApi {
  sendMessage(message: string) {
    return httpClient.post("/messages", { message, createdAt: Date.now() });
  }

  checkStatus(messageId: string) {
    return httpClient.get<string>(`/messages/${messageId}`);
  }
}

const messageApi = new MessageApi();
export default messageApi;
