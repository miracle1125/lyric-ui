import { SongAnalyze } from './../model/SongAnalyze';
import { CatalogItem } from '../model/CatalogItem';
import { HttpClient } from './HttpClient';

export class CatalogApi {
  public static async fetchAll(): Promise<CatalogItem[]> {
    const { data } = await HttpClient.getInstance().get('/catalogs');

    return data;
  }

  public static async fetch(id: number): Promise<SongAnalyze> {
    const { data } = await HttpClient.getInstance().get(`/catalogs/${id}`);

    return data.data;
  }
}
