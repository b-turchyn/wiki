---
title: Aqara FP2 Binding Issues
---

I ran into issues connecting my Aqara FP2 to my network. I would get the error
"Failed to send the network configuration information (Error 10004)".

Using
[this Reddit comment](https://www.reddit.com/r/Aqara/comments/12yz16v/comment/jka4nt2/),
I followed the following instructions to get it to connect.

1. Ensure the FP2 is factory reset with the light quickly flashing yellow
2. Put your phone into Airplane mode
3. Connect to the 2.4Ghz network you'll be connecting the FP2 to
4. Attempt to add the FP2 in the Aqara app

This worked immediately for me with a Samsung Galaxy S22

## HomeKit Support

The FP2 _does_ have HomeKit support, but in my experience it doesn't always advertise itself. This can be tested using [dns-sd](https://www.dns-sd.org/):

```bash
dns-sd -B _hap._tcp local
```

Look for `Presence-Sensor-FP2-XXXX`, where the `XXXX` is the last four characters of the device's serial number. 

If it doesn't show up, then unplug the device, wait a few seconds, and plug it in. It should announce itself then. After that, you can add it to [Home Assistant](../devops/home-assistant.md). 