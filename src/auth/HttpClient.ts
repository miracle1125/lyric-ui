import axios, { AxiosInstance } from 'axios';

export class HttpClient {
  private static readonly BASE_URL = 'https://api.lyricai.co/';
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!HttpClient.instance) {
      HttpClient.instance = axios.create({
        baseURL: HttpClient.BASE_URL,
      });
    }

    return HttpClient.instance;
  }

  public static setToken(token: string): void {
    HttpClient.instance = axios.create({
      baseURL: HttpClient.BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
