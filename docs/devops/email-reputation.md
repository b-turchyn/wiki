# Email Reputation

Managing an email server's reputation is a constant struggle.
[Blocklists](devops/blocklists.md) and ISPs can cause havoc for sending emails.

## Sender Reputation

Reputation is built up over time based on how much of a "good actor" your email
server is.

Sender Score is an option for checking sender reputation. The original site
appears to request contact information, but the report seems to be able to be
accessed just by going to a known URL:

```
https://senderscore.org/report/?lookup=<ip-address>&authenticated=true
```

Microsoft's Smart Network Data Service (SNDS) can be used to monitor IP
reputation with Microsoft receivers.
[[link]](https://sendersupport.olc.protection.outlook.com/snds/index.aspx)

## Testing Email Sending

- [Mail Tester](https://www.mail-tester.com)

## Block Lists

- [DNSBL Database Lookup](https://www.dnsbl.info/dnsbl-database-check.php)
- [Proofpoint IP Blocklist Check](https://ipcheck.proofpoint.com/)

## Resources

- [Falsehoods programmers believe about email](https://beesbuzz.biz/code/439-Falsehoods-programmers-believe-about-email)
