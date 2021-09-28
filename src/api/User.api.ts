import { User } from '../model/User';
import { HttpClient } from './HttpClient';

export class UserApi {
  public static async fetchById(id: number): Promise<User> {
    const { data } = await HttpClient.getInstance().get<User>(`/users/${id}`);

    return data;
  }

  public static async update(user: User): Promise<User> {
    const { data } = await HttpClient.getInstance().put<User>(`/admin/users/${user.id}`, user);

    return data;
  }
}
