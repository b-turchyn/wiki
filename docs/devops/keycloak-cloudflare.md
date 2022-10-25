---
tags:
  - Keycloak
---
# Keycloak and Cloudflare Zero Trust Setup

_Tested with Keycloak 16.1.1. This has not been tested with the Quarkus
versions!_

This covers how to use Keycloak as a generic <abbr title="OpenID
Connect">OIDC</abbr> provider with Cloudflare Zero Trust to authenticate
connections.

## Required Information and Access

- Access to the Keycloak admin console
- Access to Cloudflare Zero Trust for your team
- A Realm created in Keycloak already
- The name of your Cloudflare team

Fake data used in this example:
- Keycloak URL: `https://keycloak-instance`
- Keycloak Client ID: `cloudflare`
- Keycloak Realm: `test-realm`
- Cloudflare team name: `test-team`

## Configure Keycloak

1. Select the realm you want to use
2. Navigate to _Clients_, then click _Create_
  - Enter a unique client ID (such as `cloudflare`).
  - Ensure _Client Protocol_ is set to `openid-connect`
  - Leave Root URL blank
  - Click _Save_
3. Enter the settings of the newly-created client.
  - Change _Access Type_ to `confidential`
  - Add a valid redirect URI. This is based on your Cloudflare team name and is
    provided when setting up an OIDC authentication provider. At the time of
    writing, it follows the format of
    `https://<team-name>.cloudflareaccess.com/cdn-cgi/access/callback`
  - Click _Save_
4. Click the _Credentials_ tab
  - Ensure the client authenticator is set to `Client Id and Secret`
  - Copy the client secret

## Configure Cloudflare Zero Trust

This section requires information about your current OIDC configuration.
Keycloak provides a .well-known link with all of the information located at
`https://keycloak-instance/auth/realms/test-realm/.well-known/openid-configuration`.

You will need three URLs from here. The below list defines them based on their
name in Cloudflare; the `coded` values are the identifiers in the .well-known
URL.
- The Auth URL (`authorization_endpoint`)
- The Token URL (`token_endpoint`)
- The Certificate URL (`jwks_uri`)

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com). Click
   [_Zero Trust_](https://dash.teams.cloudflare.com/).
2. Navigate to _Settings_, then _Authentication_. Click _Add New_, then click
   _OpenID Connect_.
3. Enter the following information:
  - Name: whatever you want
  - App ID: your Keycloak client ID, i.e. `cloudflare`
  - Client secret: the above copied client secret from Keycloak
  - The Auth URL, Token URL, and Certificate URLs from the .well-known
    configuration above
4. Add whatever optional claims you want Cloudflare to pass along to
   authenticated applications.
