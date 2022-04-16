import { v4 as uuidv4 } from 'uuid'

export enum ClientType {
    Confidential,
    Public,
}

class Client {
    private clientType: ClientType
    private clientId: string
    private redirectUris: URL[]
    private clientAuthentication?: ClientAuthenticationScheme

    constructor(clientType: ClientType, redirectUris: URL[], clientAuthentication?: ClientAuthenticationScheme) {
        this.clientType = clientType
        this.clientId = uuidv4()
        this.redirectUris = redirectUris

        if (clientType == ClientType.Confidential) {
            this.clientAuthentication = clientAuthentication
        }
    }
}