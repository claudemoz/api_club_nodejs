export interface User {
  user_id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface AuthContextValue {
  user: User | null;
  login: (data: UserLogin) => Promise<void>;
  logout: () => Promise<void>;
}
