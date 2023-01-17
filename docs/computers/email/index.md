---
description: |
  Email usage in productivity, and the various security features available
---

# Email

Email should be treated as a system for _collecting new inputs_ rather than a 
personal knowledge system, a [Zettelkasten](/writing/zettelkasten.md), or other
knowledgebase.

This can be used in conjunction with [Inbox Zero](/productivity/inbox-zero.md).

## DKIM

## DMARC

DMARC stands for _Domain-based Message Authentication, Reporting, and
Conformance_[^1]. It's used to collect usage and abuse reports for domains that
send email.

[^1]: [DMARC](https://en.wikipedia.org/wiki/DMARC), Wikipedia

Reports from DMARC come in two different formats:

1. Aggregate reports. This is a roll-up of statistics for emails received by an
   email server. This is the most common form of report to receive.
2. Forensic reports. Most big email providers such as Google and Microsoft do
   not send these.

### Implementing DMARC For Your Domain

Setting up DMARC for your own domain is relatively simple, done via DNS records.
The `_dmarc.` prefix is used on the domain that's sending emails. For
`example.com`, a TXT DNS record of `_dmarc.example.com` needs to be published,
such as the following:

```
v=DMARC1;p=none;sp=quarantine;pct=100;rua=mailto:dmarcreports@example.com;
```

Parameters are as follows:

- `v`: Version. Always set to `DMARC1`
- `p`: Domain Policy. See below for policy definitions.
- `sp`: Subdomain Policy. See below for policy definitions.
- `pct`: Apply these policies to this percent of bad emails (0-100 scale).
  Defaults to 100%.
- `rua`: Email address to send the aggregate reports to. Must begin with
  `mailto:` to be valid
- `ruf`: Email address to send the forensic reports to

Policies are one of the following

- `none`: treat invalid email as if it was legitimate. Still accept the email.
- `quarantine`: accept the incoming email, but put it in a Spam or Junk folder
- `reject`: do not accept the incoming email

### Reading Aggregate Reports

Since aggregate reports are typically sent as gzipped XML files, these aren't
easily readable by a human. There are tools that can be used to read aggregate
reports:

- [Dmarcian](https://dmarcian.com), a hosted offering for both receiving and
  viewing reports.
- [gutmensch/docker-dmarc-report](https://github.com/gutmensch/docker-dmarc-report),
  a [Docker](/devops/docker.md) container that receives reports, feeds them into
  a database, and visualizes them via a website.
- [debricked/dmarc-visualizer](https://github.com/debricked/dmarc-visualizer), a
  [Docker](/devops/docker.md) container that uses parsedmarc, Elasticsearch and
  Grafana to visualize the DMARC reports

## SPF

## References

- [How I Answer Email in 17 Minutes a Day - My
  System](https://www.youtube.com/watch?v=uXdEVeoGRRc) (Tiago Forte, YouTube)
