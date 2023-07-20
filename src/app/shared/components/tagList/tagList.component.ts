import {Component, Input, OnInit} from '@angular/core'
import {UtilsService} from '../../services/utils.service'
import {CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'
import {PopularTagType} from '../../types/popularTag.type'

@Component({
  selector: 'mcp-tag-list',
  templateUrl: './tagList.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TagListComponent {
  @Input() tags: PopularTagType[] = []
}
