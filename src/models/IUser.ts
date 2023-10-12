export interface IUser {
  name: string,
  email: string,
  avatar?: {
    image: string,
    settings: ImageSettings
  },
  password?: string,
  token?: string,
  role?: Role
}

export type Role = 'root' | 'common' | ''

export type ImageSettings = {
  scale: number,
  offset: {
    x: number,
    y: number
  }
}

export const defaultImageSettings: ImageSettings = {
  scale: 1,
  offset: {
    x: 0,
    y: 0,
  }
}

export const defaultUser: IUser = {
  name: '',
  email: '',
  avatar: {
    image: '',
    settings: defaultImageSettings,
  },
  password: '',
  token: '',
  role: 'common',
}