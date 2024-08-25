const path = (root: string) => (sublink: string) => `${root}/${sublink}`;

export const ROOTS_AUTH = "/auth";
export const ROOTS_DASHBOARD = "/dashboard";

const getAuthPath = path(ROOTS_AUTH);

export const paths = {
  auth: {
    login: getAuthPath("login")
  },

  dashboard: {
    index: ROOTS_DASHBOARD
  }
};
