export const dashboardRoute = () => `/dashboard`;
export const onboardingRoute = () => `/onboarding`;

//Onboardin Routes
export const loginRoute = () => `${onboardingRoute()}/login`;
export const registerRoute = () => `${onboardingRoute()}/register`;

//Dashboard Routes Admin Routes
export const createProjectRoute = () => `${dashboardRoute()}/projects/create`;
export const allUsersRoute = () => `${dashboardRoute()}/users`;

//Dashboard Routes All Roles
export const homepageRoute = () => `${dashboardRoute()}/home`;
export const myProjectsRoute = () => `${dashboardRoute()}/projects`;
export const singleProjectRoute = () => `${dashboardRoute()}/projects/:id`;
export const goToSignleProjectRoute = (id) =>
  `${dashboardRoute()}/projects/${id} `;
