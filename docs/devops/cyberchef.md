# CyberChef

CyberChef is a webpage to perform a series of operations on an input. For
example, one could Base64 decode an XML string, parse the XML, beautify it,
parse out one of the XML fields, then continue to perform operations on that
value.

# Useful Recipes

## Authentication and Authorization

- [Decode JWT](<https://gchq.github.io/CyberChef/#recipe=Find_/_Replace(%7B'option':'Regex','string':'%5EBearer%20'%7D,'',false,false,false,false)JWT_Decode()JWT_Verify(''/disabled)>)
  (removes "Bearer " prefix if present)
- [Parse X.509 Certificate from SAMLResponse](<https://gchq.github.io/CyberChef/#recipe=From_HTML_Entity()From_Base64('A-Za-z0-9%2B/%3D',true,false)XML_Beautify('%5C%5Ct')XPath_expression('//*%5Blocal-name()%3D%5C'X509Certificate%5C'%5D/text()','%5C%5Cn')Parse_X.509_certificate('Base64')>)

## ADFS

- [Parse X.509 Certificate from ADFS Metadata](<https://gchq.github.io/CyberChef/#recipe=Comment('Enable%20one%20of%20the%20two%20XPath%20expressions%20depending%20on%20whether%20you%20want%20signing%20or%20encryption%20certificates.')XPath_expression('//KeyDescriptor%5B@use%3D%22signing%22%5D//*%5Blocal-name()%3D%5C'X509Certificate%5C'%5D/text()','%5C%5Cn'/disabled)XPath_expression('//KeyDescriptor%5B@use%3D%22encryption%22%5D//*%5Blocal-name()%3D%5C'X509Certificate%5C'%5D/text()','%5C%5Cn'/disabled)Parse_X.509_certificate('Base64')>)
