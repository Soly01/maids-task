export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
export interface UserState {
  usersResponse: UsersResponse;

  userDetails: User | null;
}

export const initialState: UserState = {
  usersResponse: { page: 0, per_page: 0, total: 0, total_pages: 0, data: [] },
  userDetails: null,
};
