import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {articleActions} from './actions'
import {ArticleService as SharedArticleService} from '../../shared/services/article.service'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {ArticleService} from '../services/article.service'
import {Router} from '@angular/router'

export const getArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    articleService = inject(SharedArticleService)
  ) => {
    return actions$.pipe(
      ofType(articleActions.getArticle),
      switchMap(({titleKey}) => {
        return articleService.getArticle(titleKey).pipe(
          map((article: ArticleInterface) => {
            return articleActions.getArticleSuccess({article})
          }),
          catchError(() => {
            return of(articleActions.getArticleFailure())
          })
        )
      })
    )
  },
  {functional: true}
)

export const deleteArticleEffect = createEffect(
  (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(articleActions.deleteArticle),
      switchMap(({titleKey}) => {
        return articleService.deleteArticle(titleKey).pipe(
          map(() => {
            return articleActions.deleteArticleSuccess()
          }),
          catchError(() => {
            return of(articleActions.deleteArticleFailure())
          })
        )
      })
    )
  },
  {functional: true}
)

export const redirectAfterDeleteEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(articleActions.deleteArticleSuccess),
      tap(() => {
        router.navigateByUrl('/')
      })
    )
  },
  {functional: true, dispatch: false}
)
