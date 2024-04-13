# Garmin Unofficial API

## General Notes

- The `DI-Backend` header seems to be required for some of the endpoints (the `UPLOAD` endpoint in particular). Without that you get a 404 Not Found.
- The JWT access token on its own isn't enough for bearer token authentication. You seem to also need to specify the `JWT_FGP` cookie as well, which is provided when you first get your tokens as the 

## Refresh Tokens

Send a POST request to `https://connect.garmin.com/services/auth/token/refresh`

- Provide the `JWT_FGP` cookie, i.e. `Cookie: JWT_FGP=b83ff82f-32a9-4f8f-8192-14ce8cac386e`
- Provide a JSON body with the refresh token:
  ```json
  {refresh_token: "refresh-token"}
  ```

This should give you a new access and refresh token, as well as a new `JWT_FGP` cookie. You'll need all of these to be able to refresh the token next time.

## Hydration

### Log Water

`PUT https://connect.garmin.com/usersummary-service/usersummary/hydration/log`

Header values:

- `Authorization: Bearer <access-token>`
- `Cookie: JWT_FGP=<fgp-token>`
- `DI-Backend: connectapi.garmin.com`

Body is JSON with the following values:

- `userProfileId` (number, optional): unknown use. Can be retrieved from the UPLOAD endpoint. I'm not sure why you'd need to ever provide this.
- `valueInML` (number, required): amount of water consumed in ML
- `calendarDate` (date in YYYY-MM-DD format, required): date that the water was consumed
- `timestampLocal` (timestamp in ISO8601 format, required): seems like the same as above

Response contains a result like this:

```json
{
  "userId": 1337,
  "calendarDate":"2024-04-13",
  "valueInML":1700.0,
  "goalInML":2988.0,
  "dailyAverageinML":null,
  "lastEntryTimestampLocal":"2024-04-13T12:37:25.679",
  "sweatLossInML":188.0,
  "activityIntakeInML":0.0
}
```