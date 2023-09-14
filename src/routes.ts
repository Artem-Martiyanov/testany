interface routes {
  MAIN: string,
  CATALOG: string,
  PERSONAL: string,
  '404': string
}

export const AppRoute: routes = {
  MAIN: '/',
  CATALOG: '/catalog',
  PERSONAL: '/personal',
  '404': '*',
};
