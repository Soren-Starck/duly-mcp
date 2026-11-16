---
description: Read and add to the user's Apple Calendar and Reminders on their Mac through the Duly app's tools. Use when the user asks about their schedule, free time, events or reminders. Needs the Duly app installed and allowed.
---

# Apple Calendar and Reminders through Duly

These tools come from Duly, a Mac app the user installs from https://starck.studio/apps/duly. If the tools are missing or a call fails with "Duly is not running" or a permission message, tell the user plainly: install Duly, open it from the menu bar, and click Allow next to Calendar (and Reminders). Do not guess at their calendar without the tools.

- Call `get_today` first, so "today" and "tomorrow" use the Mac's date and time zone.
- Call `list_calendars` once to learn the exact names, and which calendars and lists are read only (subscribed calendars, or anything the user switched off in Duly's Settings).
- Read with `get_events` and `get_reminders`; write with `create_event`, `update_event`, `create_reminder` and `complete_reminder`. For a repeating event, `update_event` changes one occurrence.
- There is no delete tool. If the user turned off Allow changes in Duly, every write fails on purpose: say so instead of retrying.
- Before adding or moving anything, say what you are about to write (title, calendar, time) unless the user already gave all of it.
