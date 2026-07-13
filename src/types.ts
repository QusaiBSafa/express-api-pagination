export interface User {
  id: number;
  name: string;
  email: string;
}

export interface PaginatedResponse<T> {
  page: number;
  size: number;
  total: number;
  users: T[];
}