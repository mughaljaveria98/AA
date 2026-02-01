
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: string;
  date: string;
  imageUrl: string;
}

export enum Category {
  TECHNOLOGY = 'Technology',
  EDUCATION = 'Education',
  HEALTH = 'Health',
  NEWS = 'News',
  TUTORIALS = 'Tutorials'
}

export interface NavigationItem {
  label: string;
  path: string;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}
