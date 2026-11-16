# Duly for Claude, Codex and Cursor

Duly is a Mac menu bar app that lets AI assistants read and add to Apple Calendar and Reminders through a local MCP server. This repository holds only the small files that connect an assistant to Duly: a Claude plugin, an MCP Registry entry and its launcher. The app itself is not here and is not open source.

**You need the Duly app installed on your Mac** (macOS 14 Sonoma or later): https://starck.studio/apps/duly. Without it, none of this does anything. Duly runs on your Mac, with no account and no server; it checks its licence and looks for updates, and sends your calendar to no one but the assistant you ask.

## Claude Code

```
/plugin marketplace add Soren-Starck/duly-mcp
/plugin install duly@duly-mcp
```

## Claude Desktop, Codex, Cursor

Open Duly from the menu bar and click Set up next to the assistant. Duly writes the entry for you and keeps a backup of the file it changes.

## What the assistant can do

`get_today`, `list_calendars`, `get_events`, `create_event`, `update_event`, `get_reminders`, `create_reminder`, `complete_reminder`. There is no delete tool. In Duly's Settings you choose which calendars and lists each assistant sees, and one switch makes everything read only.

Support: apps@soren-starck.com
