import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {GetFeedResponseInterface} from '../types/getFeedResponse.interface'

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    // get feed
    'Get Feed': props<{url: string}>(),
    'Get feed Success': props<{feed: GetFeedResponseInterface}>(),
    'Get feed Failure': emptyProps,
  },
})
