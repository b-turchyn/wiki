# CyberChef

CyberChef is a webpage to perform a series of operations on an input. For
example, one could Base64 decode an XML string, parse the XML, beautify it,
parse out one of the XML fields, then continue to perform operations on that
value.

# Useful Recipes

## Authentication and Authorization

- [Decode
  JWT](https://gchq.github.io/CyberChef/#recipe=Find_/_Replace(%7B'option':'Regex','string':'%5EBearer%20'%7D,'',false,false,false,false)JWT_Decode()JWT_Verify(''/disabled))
  (removes "Bearer " prefix if present)
- [Parse X.509 Certificate from
  SAMLResponse](https://gchq.github.io/CyberChef/#recipe=From_HTML_Entity()From_Base64('A-Za-z0-9%2B/%3D',true,false)XML_Beautify('%5C%5Ct')XPath_expression('//*%5Blocal-name()%3D%5C'X509Certificate%5C'%5D/text()','%5C%5Cn')Parse_X.509_certificate('Base64'))
