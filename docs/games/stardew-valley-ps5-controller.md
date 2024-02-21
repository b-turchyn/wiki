---
description:
  "Playstation 5 controllers and Playstation Edge controllers don't work on
  MacOS for Stardew Valley. These instructions cover how to fix it quickly."
---

# PlayStation 5 Controller Support for Stardew Valley on MacOS

This covers both the PlayStation 5 DualSense controller as well as the
PlayStation Edge DualSense Controller.

As of Feb 12 2024, the current stable version of Stardew Valley will not
recognize PS5 controllers in Steam. The problem is that the SDL library (Simple
DirectMedia Layer) is out-of-date.

The solution is to replace Stardew Valley's copy of libSDL with a newer version.

Note that the library we're replacing will likely get overwritten every time
Stardew Valley updates; you may need to run these steps with every update.

:::info

While I've tested this with a PlayStation DualSense Edge controller, chances are
that this should work with any modern controller that doesn't work for you like
the XBox Series X or Nintendo Joycons. If either of these fixes work for you,
please let me know and I'll update this!

:::

## Option 1: Download A Pre-Built Version

If you do not have XCode installed (and do not want to install it), then your
only option is to download a pre-built binary from somewhere else.

I have compiled 2.28.5 (the last version of libSDL2) and provided it here.

1. Download [libSDL2-2.0.0.dylib](/files/games/libSDL2-2.0.0.dylib.zip) and
   unzip it.
2. Replace the original version with the version we just downloaded:
   ```bash
   cp ~/Downloads/libSDL2-2.0.0.dylib ~/Library/Application\ Support/Steam/steamapps/common/Stardew\ Valley/Contents/MacOS/
   ```
3. Run the file once to allow your computer to start it.
   1. Open Finder, press `Command + Shift + G`. Paste in
      `~/Library/Application\ Support/Steam/steamapps/common/Stardew\ Valley/Contents/MacOS/`,
      then hit `Enter`.
   2. Find `libSDL2-2.0.0.dylib`, right-click and select `Open`. You will be
      told that the file isn't from a trustworthy source. click `Open`.
   3. A terminal window will open. As soon as it says `[Process completed]`, you
      can quit the terminal with `Command + Q`.

## Option 2: Compile libSDL2 Yourself

1. Download XCode from the App Store
2. Close the libSDL repository:

```bash
git clone https://github.com/libsdl-org/SDL
cd SDL
```

3. Switch to the 2.28.5 tag:

```bash
git checkout release-2.28.5
```

4. Compile using the terminal:

```bash
mkdir -p build
cd build
cmake .. "-DCMAKE_OSX_ARCHITECTURES=arm64;x86_64"
cmake --build .
```

5. Because you compiled libSDL2 yourself, it's already trusted by your computer.
   You just need to move it into place:

```bash
cp libSDL2-2.0.0.dylib ~/Library/Application\ Support/Steam/steamapps/common/Stardew\ Valley/Contents/MacOS/
```

6. Verify compatibility version 2801.0.0 and current version 2801.5.0 are
   present:

```bash
otool -L ~/Library/Application\ Support/Steam/steamapps/common/Stardew\ Valley/Contents/MacOS/libSDL2-2.0.0.dylib  | grep libSDL2
```

```
 /Users/user/Library/Application Support/Steam/steamapps/common/Stardew Valley/Contents/MacOS/libSDL2-2.0.0.dylib (architecture x86_64):
	  @rpath/libSDL2-2.0.0.dylib (compatibility version 2801.0.0, current version 2801.5.0)
 /Users/user/Library/Application Support/Steam/steamapps/common/Stardew Valley/Contents/MacOS/libSDL2-2.0.0.dylib (architecture arm64):
	  @rpath/libSDL2-2.0.0.dylib (compatibility version 2801.0.0, current version 2801.5.0)
```
