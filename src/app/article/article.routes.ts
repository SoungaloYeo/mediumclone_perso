import {Route} from '@angular/router'
import {ArticleComponent} from './article.component'
import {provideEffects} from '@ngrx/effects'
import {provideState} from '@ngrx/store'
import {articleFeatureKey, articleReducer} from './store/reducers'
import * as articleEffects from './store/effects'

export const routes: Route[] = [
  {
    path: '',
    component: ArticleComponent,
    providers: [
      provideState(articleFeatureKey, articleReducer),
      provideEffects(articleEffects),
    ],
  },
]
