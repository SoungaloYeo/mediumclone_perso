import {createFeature, createReducer, on} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'
import {articleActions} from './actions'
import {ArticleStateInterface} from '../../shared/types/ArticleState.interface'

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}
const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    initialState,
    on(articleActions.getArticle, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(articleActions.getArticleSuccess, (state, response) => ({
      ...state,
      isLoading: false,
      data: response.article,
    })),
    on(articleActions.getArticleFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(routerNavigationAction, () => initialState)
  ),
})

export const {
  name: articleFeatureKey,
  reducer: articleReducer,
  selectIsLoading,
  selectError,
  selectData: selectArticleData,
} = articleFeature
