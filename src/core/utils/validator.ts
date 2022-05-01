import Client from "./client";

export interface Validator<T> {
    validate(value: T): boolean
}

export class ScopeValidator implements Validator<string> {
    validScopes: Set<string>

    constructor(validScopes: string[]) {
        this.validScopes = new Set(validScopes);
    }
    
    validate(value: string): boolean {
        return value.split(" ").some(scope => this.validScopes.has(scope))
    }
}

export class ResponseTypeValidator implements Validator<string> {
    validResponseTypes: Set<string>

    constructor(validResponseTypes: string[]) {
        this.validResponseTypes = new Set(validResponseTypes);
    }
    
    validate(value: string): boolean {
        return this.validResponseTypes.has(value)
    }
}

export class RedirectUriValidator implements Validator<{client: Client, uri: string}> {
    validate(value: { client: Client; uri: string; }): boolean {
		const parsedUri = new URL(value.uri)
		const exists = value.client.redirectUris.includes(parsedUri)
		if (!exists) {
			return false
		}

		const hasFragment = parsedUri.hash.replace('#', '')
		if (hasFragment) {
			return false
		}
		        
        return true
    }
}