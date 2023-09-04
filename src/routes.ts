interface routes {
  MAIN: string,
  CATALOG: string,
  '404': string
}

export const AppRoute: routes = {
  MAIN: '/',
  CATALOG: '/catalog',
  '404': '*'
}
