import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {GetArticleResponseInterface} from 'src/app/shared/types/getArticleResponse.interface'

export const articleActions = createActionGroup({
  source: 'article',
  events: {
    // get feedByTitle
    'Get article': props<{titleKey: string}>(),
    'Get article Success': props<{article: ArticleInterface}>(),
    'Get article Failure': emptyProps,

    'Delete article': props<{titleKey: string}>(),
    'Delete article success': emptyProps(),
    'Delete article failure': emptyProps(),
  },
})
