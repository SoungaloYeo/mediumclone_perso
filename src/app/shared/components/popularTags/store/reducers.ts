import {createFeature, createReducer, on} from '@ngrx/store'
import {PopularTagsStateInterface} from '../types/popularTagsState.interface'
import {popularTagActions} from './actions'
import {routerNavigatedAction} from '@ngrx/router-store'

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: [],
}

const popularTagsFeature = createFeature({
  name: 'popularTags',
  reducer: createReducer(
    initialState,
    on(popularTagActions.getPopularTags, (state) => ({
      ...state,
      isLoadind: true,
    })),
    on(popularTagActions.getPopularTagsSuccess, (state, response) => ({
      ...state,
      isLoadind: false,
      data: response.popularTags,
    })),
    on(popularTagActions.getPopularTagsFailure, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
})

export const {
  name: popularTagFeatureKey,
  reducer: popularTagReducer,
  selectIsLoading,
  selectError,
  selectData: selectPopularTagsData,
} = popularTagsFeature
