import { RedirectRequest } from "@azure/msal-browser";

export const B2CPolicies = {
    B2C_1_SignupSignIn: "https://RVTenant.b2clogin.com/RVTenant.onmicrosoft.com/B2C_1_SignupSignIn",
    B2C_1_ResetPassword: "https://RVTenant.b2clogin.com/RVTenant.onmicrosoft.com/B2C_1_ResetPassword",
};

export const B2C_Logout = `https://RVTenant.b2clogin.com/RVTenant.onmicrosoft.com/B2C_1_SignupSignIn/oauth2/v2.0/logout`;

export const msalConfig = {
    auth: {
        clientId: "b825850a-a2ae-41ae-98bb-dff201f7393c",
        authority: B2CPolicies.B2C_1_SignupSignIn,
        knownAuthorities: ["RVTenant.b2clogin.com"]
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const MSAL_LoginRequest = () => {
    let redirectRequest: RedirectRequest = {
        scopes: ["openid"]
    };
    return(redirectRequest);
}

export const resetPasswordRequest = {
    scopes: ["openid"],
    authority: B2CPolicies.B2C_1_ResetPassword
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};