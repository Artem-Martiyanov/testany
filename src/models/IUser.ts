export interface IUser {
  name: string,
  email: string,
  password?: string,
  token?: string,
  role?: Role
}

export type Role = 'root' | 'common' | ''