import httpClient from "./httpClient";

export const ticketStatuses = ["accepted", "solved"] as const;
export type TicketStatus = (typeof ticketStatuses)[number];

export type Ticket = {
  id: number;
  message: string;
  user_id: TicketStatus;
  create_at: number;
  update_at: number;
  solved: number;
};

class TicketApi {
  createTicket(message: string) {
    return httpClient.post<{ id: number }>("/ticket/", { message });
  }

  getTicketById(id: number) {
    return httpClient.get<Ticket>(`/ticket/${id}`);
  }

  getTicketsByStatus(status: TicketStatus, offset: number, limit: number) {
    return httpClient.get<{ Messages: Ticket[]; Total: number }>(
      `/ticket/?status=${status}&offset=${offset}&limit=${limit}`
    );
  }
}

const ticketApi = new TicketApi();
export default ticketApi;
