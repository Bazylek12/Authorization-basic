export interface CredentialModel {
    readonly email: string;
    readonly password: string;
}

export interface CredentialsResponse {
  readonly data: CredentialsResponseData;
}

export interface CredentialsResponseData {
  readonly accessToken: string;
  readonly emailVerified: string;
  readonly refreshToken: string;
  readonly id: string;
}
