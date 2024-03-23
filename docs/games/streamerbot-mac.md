# Running Streamer.Bot on MacOS

I tested this on Streamer.bot 0.2.3 on a M2 Macbook Pro on Sonoma 14.3.1. 

1. Download and unzip [Streamer.bot](https://streamer.bot/).
2. Install [WineskinServer](https://github.com/Gcenx/WineskinServer):
```
   brew install --cask --no-quarantine gcenx/wine/wineskin
```

3. Launch Wineskin Winery. Install the `WS12WineCX64Bit23.7.1-1` engine, then create a New Blank Wrapper, named `Streamer.bot.app`.
4. Start `Streamer.bot.app`. Click `Winetricks`, and install `dotnet48`, `d3dcompiler_47`, `dxvk`, `corefonts`, and `sapi`.
5. Click `Install Software`, then select `Move a Folder inside`. Select the unzipped Streamer.bot folder
