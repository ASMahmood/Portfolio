export interface reduxStore {
  error: {
    message: string;
    code: number;
    severity: string;
  };
  loading: boolean;
  activeTab: number;
}
