import Client from "./utils/client"
import { RedirectUriValidator, ResponseTypeValidator, ScopeValidator } from "./utils/validator"

class Server {
    scopeValidator: ScopeValidator
    responseTypeValidator: ResponseTypeValidator
    redirectUriValidator: RedirectUriValidator
    clientStorage: StorageAdapter<Client>

    constructor(validScopes: string[], validResponseTypes: string[], clientStorage: StorageAdapter<Client>) {
        this.scopeValidator = new ScopeValidator(validScopes)
        this.responseTypeValidator = new ResponseTypeValidator(validResponseTypes)
        this.redirectUriValidator = new RedirectUriValidator()
        this.clientStorage = clientStorage
    }

    async processAuthenticationRequest(request: AuthenticationRequest) {
        this.scopeValidator.validate(request.scope);
        this.responseTypeValidator.validate(request.responseType);
        const client = await this.clientStorage.get(request.clientId)
        if (!client) {
            throw new Error("Client not found")
        }

        this.redirectUriValidator.validate({client, uri: request.redirectUri})
        
    }
}