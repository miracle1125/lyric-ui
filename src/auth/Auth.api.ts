import { HttpClient } from './HttpClient';

export interface LoginRespons {
  last_seen_time: string;
  login_time: string;
  session_key: string;
  user_id: number;
}

/**
 * {
    "email": "marcciosilva@email.com",
    "password": "marccio1234"
}
 */
export class AuthApi {
  public static async login(email: string, password: string): Promise<LoginRespons> {
    const { data } = await HttpClient.getInstance().post<LoginRespons>('/login', {
      email,
      password,
    });

    return data;
  }
}
