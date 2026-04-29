export interface Blog {

  slug: string;

  title: string;

  description: string;

  date: string;

  image?: string;

  category?: string;

  content: string;

  readingTime?: string; // 👈 yahan add kiya hai

}