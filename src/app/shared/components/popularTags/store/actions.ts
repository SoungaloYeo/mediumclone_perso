import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {PopularTagType} from 'src/app/shared/types/popularTag.type'

export const popularTagActions = createActionGroup({
  source: 'popular tags',
  events: {
    // get tags
    'Get Popular Tags': emptyProps,
    'Get Popular Tags Success': props<{popularTags: PopularTagType[]}>(),
    'Get popular Tags Failure': emptyProps,
  },
})
