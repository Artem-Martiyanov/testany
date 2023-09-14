interface routes {
  MAIN: string,
  EDITOR: string,
  CATALOG: string,
  PERSONAL: string,
  '404': string
}

export const AppRoute: routes = {
  MAIN: '/',
  CATALOG: '/catalog',
  PERSONAL: '/personal',
  EDITOR: '/editor',
  '404': '*',
};
