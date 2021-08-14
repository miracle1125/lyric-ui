import axios, { AxiosInstance } from 'axios';

export class HttpClient {
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!HttpClient.instance) {
      HttpClient.instance = axios.create({
        baseURL: 'https://api.lyricai.co/',
      });
    }

    return HttpClient.instance;
  }
}
