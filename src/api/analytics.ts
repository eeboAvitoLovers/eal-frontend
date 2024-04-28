import httpClient from "./httpClient";

export type AnalyticsData = {
  avg_time: {
    accepted_in_progress: number;
    accepted_solved: number;
  };
  closed_tickets: {
    total: number;
    this_month: number;
    prev_month: number;
  };
  metrics: {
    date: string[];
    percent: number[];
  };
};

class AnalyticsApi {
  getAnalytics() {
    return httpClient.get<AnalyticsData>("/tickets/analytics/");
  }
}

const analyticsApi = new AnalyticsApi();
export default analyticsApi;
