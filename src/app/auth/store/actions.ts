import {createAction, props} from '@ngrx/store'
import { RegisterRequestInterface } from '../type/registerRequest.interface'

export const register = createAction(
    '[Auth] Register', 
    props<{request: RegisterRequestInterface}>()
)

