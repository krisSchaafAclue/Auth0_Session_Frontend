const apiUri = 'http://localhost:8080/';

export const environment = {
  production: false,

  backendBasePath: apiUri,
  auth: {
    domain: "kristoffer-schaaf-aclue.us.auth0.com",
    clientId: "TL59OmwzR2oBBShaRBDtvF0TJjgtPU1J",
    audience: "https://auth0-aclue-api.com",
    redirectUri: "http://localhost:4200/",
    errorPath: "/error",
  },
  httpInterceptor: {
    allowedList: [`${apiUri}*`],
  },
};
