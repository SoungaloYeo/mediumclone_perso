import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'mcp-register',
    templateUrl: './register.component.html',
    standalone: true,
    imports: [ ReactiveFormsModule ]
})
export class RegisterComponent {
    form = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    })

    constructor(private fb: FormBuilder) {}

    onSubmit(){
        console.log('form', this.form.getRawValue())
    }
}