export interface soloProject {
  name: string;
  description: string;
  preview: string;
  frontendLink: string;
  backendLink: string;
  hostedLink: string;
  lastUpdated: string;
}
export interface teamProject {
  name: string;
  description: string;
  preview: string;
  participants: string[];
  frontendLink: string;
  backendLink: string;
  hostedLink: string;
  timeLimitDays: number;
  lastUpdated: string;
}
