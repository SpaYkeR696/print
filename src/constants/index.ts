export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  ABOUT: "/about",
  CONTACTS: "/contacts",
  PRODUCT: "/product/:id",
} as const;
