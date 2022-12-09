---
description: |
  Cross-Origin Resource Sharing allows a server to indicate who should be allowed
  to access those resources.
tags:
  - HTTP
---
# CORS

Cross-Origin Resource Sharing allows a server to indicate who should be allowed
to access those resources.

This is reliant on the _client_ performing a pre-flight check and enforcing the
CORS headers. If a client decides to not enforce the CORS policy, then this
isn't really preventable by the server.

## Bypassing CORS

There are online services that can be used to proxy API calls through to bypass
CORS policies. Worth noting is that these should not be trusted, since they
effectively act as a man-in-the-middle proxy and can see the entire contents of
the request going through, including usernames and passwords. The API calls are
not being made to the intended destination; they are being made to the CORS
proxy, which then issues the API call on the client's behalf.

Example services of these include:

- [pierce403/cors.io](https://github.com/pierce403/cors.io); an instance of this
  is hosted at https://cors.io, but seems to be offline more than online.
- [Rob--W/cors-anywhere](https://github.com/Rob--W/cors-anywhere), which can be
  used for development purposes but has some protections against a client having
  their API calls unknowingly proxied without their consent.

There are some libraries that leverage online services of these to give the
impression that the CORS policy is being ignored, however again this should
never be used for anything remotely sensitive. These services also don't do any
URL rewriting, which means that the additional resources required for displaying
a webpage (Javascript, CSS, images, etc) won't go through the CORS proxy. The
intention is to use it for API calls, however browser pages can just as well be
loaded.

- [niutech/x-frame-bypass](https://github.com/niutech/x-frame-bypass)
