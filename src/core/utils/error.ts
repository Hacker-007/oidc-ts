enum OIDCErrorType {
	InvalidRequest
}

enum OIDCErrorDescription {
	ClientNotFound
}

class OIDCError {
	errorType: OIDCErrorType
	errorMessage: string

	constructor(errorType: OIDCErrorType, errorDescription: OIDCErrorDescription) {
		this.errorType = errorType
		this.errorMessage = OIDCError.generateErrorMessage(errorDescription)
	}

	private static generateErrorMessage(errorDescription: OIDCErrorDescription): string {
		switch(errorDescription) {
			case OIDCErrorDescription.ClientNotFound:
				return 'The client with the given id was not found.'
		}
	}
}