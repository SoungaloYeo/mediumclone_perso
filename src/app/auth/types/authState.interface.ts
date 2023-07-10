import { BackendErrorsInterface } from "src/app/shared/types/backendErrorsInterface"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"

export interface AuthStateInterface {
    isSubmitting: boolean
    currentUser: CurrentUserInterface | null | undefined
    isLoading: boolean
    validationErrors: BackendErrorsInterface | null
}