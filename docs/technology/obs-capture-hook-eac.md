# OBS Capture Errors with Easy Anti Cheat Games

When using the OBS Enhanced beta, games with Easy Anti Cheat sometimes won't
allow you to do game capture.

Based on conversations had in the Twitch Enhanced Broadcast Discord server, EAC
needs to allow the signature for the latest version of the capture DLL. The
version provided with OBS Enhanced hasn't been whitelisted by EAC yet, and so
can't properly capture the screen.

The current solution at this point seems to be:

1. Delete the directory at `C:\ProgramData\obs-studio-hook`
2. Start up the current stable, production version of OBS Studio. Confirm that
   this version of OBS Studio can capture the game properly.
3. Set `C:\ProgramData\obs-studio-hook` and its contents to Read Only to prevent
   updates to it
4. Set yourself a reminder to disable this at some point. Because you almost
   certainly will forget and it'll cause you headaches in the future.
