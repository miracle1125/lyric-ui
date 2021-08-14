import { HttpClient } from './HttpClient';
export class AuthApi {
  public static async login(email: string, password: string): Promise<void> {
    const { data } = await HttpClient.getInstance().post('/login', {
      email,
      password,
    });

    console.log('debug: data ', data);
  }
}
