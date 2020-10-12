export const dashboardRoute = () => `/dashboard`;
export const onboardingRoute = () => `/onboarding`;

//Onboardin Routes
export const loginRoute = () => `${onboardingRoute()}/login`;
export const registerRoute = () => `${onboardingRoute()}/register`;

//Dashboard Routes
export const homepageRoute = () => `${dashboardRoute()}/home`;
export const myProjectsRoute = () => `${dashboardRoute()}/projects`;
export const createProjectRoute = () => `${dashboardRoute()}/projects/create`;
export const singleProjectRoute = (id) => `${dashboardRoute()}/projects/${id}`;
