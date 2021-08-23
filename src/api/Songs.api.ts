import { HttpClient } from './HttpClient';

export class SongsApi {
  public static async upload(request: FormData): Promise<unknown> {
    const { data } = await HttpClient.getInstance().post<unknown>('/songs/analysis', request, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  }
}
