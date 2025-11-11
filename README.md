# Toggle Sidebar Plugin for Obsidian

A simple Obsidian plugin that allows you to quickly toggle the left and right sidebars by clicking the edges of the window or using ribbon icons.

## Features

- **Edge Clicking**: Click on the very left or right edge of the Obsidian window to toggle the corresponding sidebar
- **Ribbon Icons**: Alternative toggle buttons in the ribbon for quick access
- **Lightweight**: Minimal overhead with simple, efficient code
- **No Configuration**: Works out of the box with sensible defaults

## How It Works

The plugin creates invisible 10px-wide clickable zones at the left and right edges of your Obsidian window. Simply move your mouse to the extreme left or right edge and click to toggle the sidebar. The plugin also adds icon buttons to the left ribbon as an alternative method to toggle the sidebars.

## Important Notes

### Full Screen Mode

This plugin is **particularly designed for full screen users**. The edge-clicking functionality works best when Obsidian is in full screen mode, as the clickable zones are positioned at the very edges of the window.

- In full screen mode, the edge zones are easily accessible and provide a smooth user experience
- In windowed mode (non-full screen), the edge zones may be less responsive depending on your operating system and window manager, as the window edges might have different click detection behavior

### Operating System Compatibility

This plugin has been **tested only on macOS**. While it should work on other operating systems (Windows, Linux), it has not been verified:
- Different window managers may handle edge clicking differently
- If you encounter any issues on Windows or Linux, please report them or use the ribbon icons as a fallback

## Configuration

No configuration is required! 

## Troubleshooting

**Q: Edge clicking doesn't work in windowed mode**
A: This is expected behavior. The plugin is optimized for full screen mode. Either switch to full screen or use the ribbon icons as an alternative.

**Q: The clickable zones are too narrow**
A: The 10px width is intentional to avoid interfering with normal text selection. Consider modifying the code yourself for personal preference.
