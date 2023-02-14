# Signal Automation

[Signal](https://signal.org) is an encrypted messaging platform similar to
iMessage or [Whatsapp](https://whatsapp.com).

A [Matrix bridge](/devops/matrix.md) exists for Signal which uses
[signald](https://signald.org/) for communication. Not as secure as the true
client.

Through the Matrix bridge, you can automate the sending of messages via the
Matrix API. An `access_token` is required (available from the Element client).
