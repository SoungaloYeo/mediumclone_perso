import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {environment} from 'src/environments/environment.development'
import {Observable, map} from 'rxjs'
import {GetArticleResponseInterface} from '../types/getArticleResponse.interface'
import {ArticleInterface} from '../types/article.interface'

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(titleKey: string): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles/' + titleKey
    console.log('------> fullUrl :' + fullUrl)
    return this.http
      .get<GetArticleResponseInterface>(fullUrl)
      .pipe(map((response) => response.article))
  }
}
