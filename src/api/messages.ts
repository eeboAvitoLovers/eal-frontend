import httpClient from "./httpClient";

class MessageApi {
  sendMessage(message: string) {
    return httpClient.post("/messages", { message, createdAt: Date.now() });
  }
}

const messageApi = new MessageApi();
export default messageApi;
