interface Token {
}

class IdToken implements Token {
	private readonly iss: URL
	private readonly sub: string
	private readonly aud: string
	private readonly exp: Date
	private readonly iat: Date
	private readonly authTime: Date
	private readonly nonce: string

	constructor(iss: URL, sub: string, aud: string, exp: Date, iat: Date, authTime: Date, nonce: string) {
		this.iss = iss
		this.sub = sub
		this.aud = aud
		this.exp = exp
		this.iat = iat
		this.authTime = authTime
		this.nonce = nonce
	}
}