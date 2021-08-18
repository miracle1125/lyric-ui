import { LoginRequest, LoginResponse, RegisterRequest } from './Auth.dto';
import { signIn } from '../redux/auth.slice';
import { HttpClient } from './HttpClient';

/**
 * {
    "email": "marcciosilva@email.com",
    "password": "marccio1234"
}
 */
export class AuthApi {
  public static async signIn(request: LoginRequest): Promise<LoginResponse> {
    const { data } = await HttpClient.getInstance().post<LoginResponse>('/login', request);

    return data;
  }

  public static async signUp(request: RegisterRequest): Promise<LoginResponse> {
    const { data } = await HttpClient.getInstance().post<LoginResponse>('/signup', request);

    return data;
  }
}
