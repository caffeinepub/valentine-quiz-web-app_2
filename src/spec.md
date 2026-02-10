# Specification

## Summary
**Goal:** Add a visible Share button to the Valentine proposal and success screens that copies the current page URL and shows accurate toast messaging.

**Planned changes:**
- Add a tap-friendly “Share” button on the “Will You Be My Valentine?” view that copies `window.location.href` to the clipboard and shows a confirmation toast.
- Add the same “Share” button and behavior on the “Good Choice” success view.
- Update Share-related toast copy to reference sharing the Valentine page (not a quiz), including a clear English error message on copy failure.

**User-visible outcome:** Users can tap “Share” on both the proposal and “Good Choice” screens to copy the current Valentine page link and see a toast confirming success (or an English error prompt if copying fails).
