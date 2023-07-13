import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from '../../types/backendErrorsInterface';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'mcp-backend-error-messages',
    templateUrl: './backendErrorMessages.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class BackendErrorMessages implements OnInit {
    @Input() backendErrors: BackendErrorsInterface = {}

    errorMessages: string[] = []
        
    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
            const massages = this.backendErrors[name].join(' ')
            return `${name} ${massages}`
        })
    }
}