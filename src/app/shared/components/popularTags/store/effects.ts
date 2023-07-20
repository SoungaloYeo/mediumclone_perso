import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {popularTagActions} from './actions'
import {catchError, map, of, switchMap} from 'rxjs'
import {PopularTagService} from 'src/app/shared/components/popularTags/services/popularTag.service'
import {PopularTagType} from 'src/app/shared/types/popularTag.type'

export const getPopularTagsEffect = createEffect(
  (actions$ = inject(Actions), tagListService = inject(PopularTagService)) => {
    return actions$.pipe(
      ofType(popularTagActions.getPopularTags),
      switchMap(() => {
        return tagListService.getPopularTag().pipe(
          map((popularTags: PopularTagType[]) => {
            return popularTagActions.getPopularTagsSuccess({popularTags})
          }),
          catchError(() => {
            return of(popularTagActions.getPopularTagsFailure())
          })
        )
      })
    )
  },
  {functional: true}
)
