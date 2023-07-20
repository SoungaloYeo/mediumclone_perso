import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {environment} from 'src/environments/environment.development'
import {PopularTagType} from '../../../types/popularTag.type'
import {PopularTagsResponseInterface} from '../types/popularTagsResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class PopularTagService {
  constructor(private http: HttpClient) {}

  getPopularTag(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'
    return this.http
      .get<PopularTagsResponseInterface>(url)
      .pipe(map((response) => response.tags))
  }
}
