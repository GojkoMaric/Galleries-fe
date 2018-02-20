export class User
{
  public firstName = '';
  public lastName = '';
  public email = '';
  public password = '';
  public confirmPassword = '';

  constructor( data ?: {
    firstName ?: string,
    lastName ?: string,
    email ?: string,
    password ?: string,
    confirmPassword ?: string,
  }) {
    Object.assign(this, data || {});
  }
}
