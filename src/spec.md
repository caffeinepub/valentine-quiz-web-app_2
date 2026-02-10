# Specification

## Summary
**Goal:** Add local, toggle-controlled romantic background music and a “tiny romantic harp” sound effect to the Valentine proposal flow.

**Planned changes:**
- Add a local looping background music file at `frontend/public/assets/audio/romantic-bg.mp3` and ensure the existing audio controller starts/stops it when the audio toggle is enabled/disabled.
- Add a local “tiny romantic harp” SFX asset under `frontend/public/assets/audio` and play it on each “Yes! 💕” tap/click only when audio is enabled (off by default).
- Wire the Valentine proposal screen’s “Yes” action into the existing shared audio enabled/disabled state (single source of truth), avoiding duplicated audio state across components.

**User-visible outcome:** Users can enable audio with the existing toggle to hear looping romantic background music, and when enabled they hear a short harp sound each time they tap/click “Yes! 💕”; with audio off, no sounds play.
