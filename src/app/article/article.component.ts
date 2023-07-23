import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {selectError, selectArticleData, selectIsLoading} from './store/reducers'
import {combineLatest, filter, map} from 'rxjs'
import {ActivatedRoute, Params, RouterLink} from '@angular/router'
import {articleActions} from './store/actions'
import {CommonModule} from '@angular/common'
import {LoadingComponent} from '../shared/components/loading/loading.component'
import {ErrorMessageComponent} from '../shared/components/errorMessage/errorMessage.component'
import {selectCurrentUser} from '../auth/store/reducer'
import {CurrentUserInterface} from '../shared/types/currentUser.interface'
import {TagListComponent} from '../shared/components/tagList/tagList.component'

@Component({
  selector: 'mcp-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TagListComponent,
    LoadingComponent,
    ErrorMessageComponent,
  ],
})
export class ArticleComponent implements OnInit {
  slug = this.route.snapshot.paramMap.get('slug') ?? ''

  constructor(private store: Store, private route: ActivatedRoute) {}

  isAuthor$ = combineLatest({
    article: this.store.select(selectArticleData),
    currentUser: this.store
      .select(selectCurrentUser)
      .pipe(
        filter(
          (currentUser): currentUser is CurrentUserInterface | null =>
            currentUser !== undefined
        )
      ),
  }).pipe(
    map(({article, currentUser}) => {
      if (!article || !currentUser) {
        return false
      }
      return article.author.username === currentUser.username
    })
  )

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    article: this.store.select(selectArticleData),
    isAuthor: this.isAuthor$,
  })

  ngOnInit() {
    this.store.dispatch(articleActions.getArticle({titleKey: this.slug}))
  }

  deleteArticle(): void {
    this.store.dispatch(articleActions.deleteArticle({titleKey: this.slug}))
  }
}
