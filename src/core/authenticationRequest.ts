type AuthenticationRequest = {
    scope: string
    responseType: string
    clientId: string
    redirectUri: string
    state: string
    nonce: string
    display?: string
    prompt?: string
    maxAge: number
    idTokenHint?: string
    loginHint?: string
}

type AuthenticationResponse = {
	
}