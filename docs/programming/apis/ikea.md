# IKEA

An API key is required to access any IKEA APIs. This is sent in the
`X-Client-ID` HTTP Header.

As of writing, the API key for the IKEA Canada website is
`b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631`.

## Product Availability

One API call retrieves product availabilities from the IKEA API. Parameters in
this API are:

- Country code, identical to the country code in the IKEA URL when you visit a
  page (i.e. `ca`, `us`)
- Article number. This can be found either in the product URL or the article
  number listed on the product page. For example, the SONGESAND nightstand has
  an article number of `703.674.44`, which is represented without the periods
  (`70367444`).

Example:

```
https://api.ingka.ikea.com/cia/availabilities/ru/ca?itemNos=70367444&expand=StoresList,Restocks,SalesLocations
```

cURL Example:

```bash
curl
'https://api.ingka.ikea.com/cia/availabilities/ru/us?itemNos=70367444&expand=StoresList,Restocks,SalesLocations' \
    -H 'Accept: application/json;version=2' \
    -H 'X-Client-ID: b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631' \
    --output -
```
