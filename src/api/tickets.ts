import httpClient from "./httpClient";

export const ticketStatuses = ["accepted", "solved"] as const;
export type TicketStatus = (typeof ticketStatuses)[number];

export type Ticket = {
  id: number;
  message: string;
  user_id: number;
  create_at: number;
  update_at: number;
  solved: TicketStatus;
};

class TicketApi {
  createTicket(message: string) {
    return httpClient.post<{ id: number }>("/ticket/", { message });
  }

  getTicketById(id: number) {
    return httpClient.get<Ticket>(`/ticket/${id}`);
  }

  getTicketsByStatus(status: TicketStatus, offset: number, limit: number) {
    return httpClient.get<{ messages: Ticket[]; total: number }>(
      `/ticket/?status=${status}&offset=${offset}&limit=${limit}`
    );
  }

  takeInWork(id: number, user_id: number) {
    return httpClient.put(`/ticket/${id}`, {
      status: "accepted",
      specialist_id: user_id,
    });
  }
}

const ticketApi = new TicketApi();
export default ticketApi;
