import { SongAnalyze } from './../model/SongAnalyze';
import { HttpClient } from './HttpClient';

export class SongsApi {
  public static async upload(request: FormData): Promise<SongAnalyze> {
    const { data } = await HttpClient.getInstance().post<SongAnalyze>('/songs/analysis', request, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  }
}
