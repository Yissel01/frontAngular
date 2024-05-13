
export interface User{
  username: string;
  pass: string;
}

export interface VerifyUser{
  valid: string;
  token?: string;
}

export interface Results{
  results: string;
}
