
export interface User{
  username: string;
  pass: string;
}

export interface VerifyUser{
  results: string;
  token?: string;
}

export interface Results{
  results: string;
}
