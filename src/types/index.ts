export interface SingleDialog {
  role: string;
  content: string;
  imageUrl?: string;
  select?: {
    content: string;
    to: number;
  }[]
}

export interface SingleDairyPage {
  title: string;
  paragraph: string[];
}