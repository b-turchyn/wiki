---
aliases:
  - AMQ
  - Artemis
---

# ActiveMQ

ActiveMQ is a message broker owned by the Apache Foundation, written in
[Java](programming/languages/java/index.md).

ActiveMQ has two variants: ActiveMQ Classic and ActiveMQ Artemis (AMQ). Red Hat
also has a proprietary, supported version of AMQ Artemis.

## Useful Information

- AMQ periodically monitors the disk utilization of the system (based on the
  `disk-scan-period` configuration option). If the threshold defined in
  [`max-disk-usage`](https://activemq.apache.org/components/artemis/documentation/1.4.0/paging.html#max-disk-usage)
  is exceeded, AMQ blocks all incoming messages until the disk utilization falls
  below `max-disk-usage`. For this reason, it's a good idea to not keep your
  data on the same partition as other dynamic data, such as log files.
