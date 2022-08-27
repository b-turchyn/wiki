# Ad Blockers

## Tools

- I have a [Pi-hole](https://pi-hole.net) for my whole network; all DNS runs
  through it and blocks ads at a DNS-level.
- For browsers, I use [uBlock Origin](https://github.com/gorhill/uBlock) with
  some extra [blocklists I maintain](https://github.com/b-turchyn/blocklists).
  - Related: [Blocklists](devops/blocklists.md)
  - Google's
    [Manifest v3](https://developer.chrome.com/docs/extensions/mv3/intro/) will
    render pretty much ad blocker useless. As such, Chrome should be avoided.
    Use [Firefox](https://www.mozilla.org/firefox/) instead;
    [Mozilla has committed to maintaining the old API](https://blog.mozilla.org/addons/2021/05/27/manifest-v3-update/)
    that Chrome will deprecate
    - [Google Nukes Ad-Blockers --- Manifest V3 is Coming](https://securityboulevard.com/2021/12/google-nukes-ad-blockers-manifest-v3-is-coming/)
- For YouTube on smart TVs, I use
  [SmartTubeNext](https://github.com/yuliskov/SmartTubeNext).
- For YouTube on Android devices, [Vanced](https://vancedapp.com/) was the gold
  standard, but got Cease-And-Desist'ed. [ReVanced](http://revanced.app/) is
  working to create an alternative, but is not released as of yet.
- I use
  [DuckDuckGo's App Tracking Protection](https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android)
  for my Android device
  - Download and install the app, go to `Settings --> App Tracking Protection`
    to enable.
