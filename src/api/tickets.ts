import httpClient from "./httpClient";

export const ticketStatuses = [
  "in_queue",
  "in_progress",
  "solved",
  "info_required",
  "rejected",
] as const;
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
    return httpClient.get<{ messages: Ticket[] | null; total: number }>(
      `/tickets?status=${status}&offset=${offset}&limit=${limit}`
    );
  }

  takeInWork(id: number) {
    return httpClient.put(`/ticket/${id}`, {
      status: "in_queue",
    });
  }

  solveTicket(id: number) {
    return httpClient.put(`/ticket/${id}`, { status: "solved" });
  }

  getTicketsBySpecialistId(id: number, offset: number, limit: number) {
    return httpClient.get<{ messages: Ticket[] | null; total: number }>(
      `/specialist/${id}/tickets?offset=${offset}&limit=${limit}`
    );
  }
}

const ticketApi = new TicketApi();
export default ticketApi;
