# SSL Certificates

## Creating a self-signed certificate

Outputted certificate prefix: `testcert`

This creates a self-signed certificate, valid for 365 days. Swap out the two
instances of `365` for another time as required. 

```bash
# Create certificate signing request (CSR)
openssl req -newkey rsa:2048 -nodes -keyout testcert.key -out testcert.csr -days 365
# Create the self-signed certificate
openssl x509 -req -days 365 -in testcert.csr -signkey testcert.key -sha256 -out testcert.crt
# Convert to PEM format
openssl x509 -in testcert.crt -out testcert.crt -outform PEM
```
