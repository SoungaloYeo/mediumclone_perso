import {Component, Input, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PopularTagType} from '../../types/popularTag.type'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import {
  selectError,
  selectIsLoading,
  selectPopularTagsData,
} from './store/reducers'
import {popularTagActions} from './store/actions'
import {LoadingComponent} from '../loading/loading.component'
import {ErrorMessageComponent} from '../errorMessage/errorMessage.component'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'mcp-popular-tags',
  templateUrl: './popularTags.component.html',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ErrorMessageComponent, RouterLink],
})
export class PopularTagsComponent implements OnInit {
  @Input() tags: PopularTagType[] = []

  constructor(private store: Store) {}

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    popularTags: this.store.select(selectPopularTagsData),
  })

  ngOnInit(): void {
    this.store.dispatch(popularTagActions.getPopularTags())
  }
}
