# Basic Auth Middleware with Traefik Ingress

The main source for this info was from
[bztes](https://stackoverflow.com/users/2641966/bztes) on StackOverflow via
[this answer they provided](https://stackoverflow.com/a/69915469).

Three changes need to occur:

1. A new secret needs to be defined with the username and password
2. A new Middleware needs to be defined
3. The middleware needs to be referenced in the Ingress definition

## Creat the new secret

In [Rancher](https://www.rancher.com/), this can be done via the GUI, by going
to _Storage_, _Secrets_, _Create_, _HTTP Basic Auth_. Alternatively, the below
YAML can be used.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: basic-auth # Required; this is how you will reference the credentials
  namespace: default # Optional
type: kubernetes.io/basic-auth
data:
  username: <username in base64>
  password: <password in base64>
```

## Create The Middleware

Use the below YAML to define a new Traefik-based middleware that performs basic
authentication:

```yaml
apiVersion: traefik.containo.us/v1alpha1
kind: Middleware
metadata:
  name: basic-auth-middleware # Required; this is how you will reference the middleware
  namespace: default # Optional
spec:
  basicAuth:
    removeHeader: true # Recommended so that downstream services don't see the authentication credentials
    secret: basic-auth # `metadata.name` from the secret
```

## Reference The Middleware

Apply the following annotation to the ingress you want to protect. This example
assumes a namespace of `default` and a middleware name of
`basic-auth-middleware`.

```yaml
traefik.ingress.kubernetes.io/router.middlewares: default-basic-auth-middleware@kubernetescrd
```

_What does this mean?_ The middleware in use is in the `default` namespace,
named `basic-auth-middleware`, and it can be found via a Kubernetes Custom
Resource Definition (i.e. the middleware)
