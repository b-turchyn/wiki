# Running Streamer.Bot on MacOS

I tested this on Streamer.bot 0.2.3 on a M2 Macbook Pro on Sonoma 14.3.1.

1. Download and unzip [Streamer.bot](https://streamer.bot/).
2. Install [WineskinServer](https://github.com/Gcenx/WineskinServer):

```
   brew install --cask --no-quarantine gcenx/wine/wineskin
```

3. Launch Wineskin Winery. Install the `WS12WineCX64Bit23.7.1-1` engine, then
   create a New Blank Wrapper, named `Streamer.bot.app`.
4. Start `Streamer.bot.app`. Click `Winetricks`, and install `dotnet48`,
   `d3dcompiler_47`, `dxvk`, `corefonts`, and `sapi`.
5. Click `Install Software`, then select `Move a Folder inside`. Select the
   unzipped Streamer.bot folder

## Known Issues

- The chat window doesn't work. It requires a newer version of WebView2 to be available. I
  haven't figured out how to install that.
  - The newest version of WebView2 that seems to install properly is
    105.0.1343.53.
    [A standalone installer is available on The Wayback Machine.](https://web.archive.org/web/20210626091814/https://msedge.sf.dl.delivery.mp.microsoft.com/filestreamingservice/files/ee4e97c1-89a3-456f-b9f3-f29651316b7e/MicrosoftEdgeWebView2RuntimeInstallerX64.exe)
  - Installing this version doesn't seem to fix the issue.
  - Other people seem to have this issue, tracked under
    [Winetricks/winetricks#1986](https://github.com/Winetricks/winetricks/issues/1986).
  - I was able to use that installer by opening a command prompt within the
    Wineskin and running that installer directly.
