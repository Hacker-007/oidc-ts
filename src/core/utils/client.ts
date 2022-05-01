export default class Client {
    id: string
	redirectUris: Array<URL>

    constructor(id: string, redirectUris: Array<URL>) {
        this.id = id
		this.redirectUris = redirectUris
    }
}