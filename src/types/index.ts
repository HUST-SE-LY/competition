export interface SingleDialog {
  role: string;
  content: string;
  imageUrl?: string;
  select?: {
    content: string;
    to: number;
  }[]
}