# Transcript

Raw record of how this project was produced.

## Tools and models

- **Tool:** GitHub Copilot CLI (`copilot`) — used for the full build.
- **Model:** `gpt-5.6-luna` (Copilot "Auto" mode).
- **Note on model choice:** a paid Copilot tier for a wider model picker was not
  available during this work, so the session ran on the Auto-selected model.

## Session inventory

Raw session data lives under `copilot-sessions/<session-id>/`. The conversation
record is `events.jsonl`; `workspace.yaml` holds session metadata.

| Session ID | Started (HK) | events.jsonl size | Role |
|---|---|---|---|
| `ff047a25-8f41-4cb3-98b4-e31152bc9ad5` | 22 Sep 01:48 | ~1.0 MB | Setup session: brief intake; created `.github/copilot-instructions.md` and `AGENTS.md` |
| `82eaf796-d5b4-46fd-aea4-cface9c1798d` | 22 Sep 01:47 | ~1.2 KB | Session opened but no messages exchanged |
| `43d12969-d6b9-419b-b51f-688c5ebb1e11` | 22 Sep 16:24 | ~1.7 MB | Main session: rules engine, exhaustive proof, docs, refactors |

Every session recorded for this workspace is included; each `events.jsonl`
shows its prompts and phases in full.

## Configuration files that shaped behaviour

Copied here as evidence:

- `copilot-instructions.md` — repository-wide custom instructions
  (the `.github/copilot-instructions.md` that Copilot CLI reads).

The following were not captured / not used:

- No `AGENTS.md`, `CLAUDE.md`, or `GEMINI.md` were used.
- No custom slash commands, hooks, or MCP servers were configured.
- `~/.copilot/settings.json` and `~/.copilot/config.json` were left at defaults
  (no custom model or tool settings).

## What did not get captured

- The very first exploratory session(s) before the repository existed are not
  recoverable; only sessions with this workspace as `cwd` are included.
- Debug logs under `~/.copilot/logs/` are **not** included — they are process
  logs, not the conversation record. The raw `events.jsonl` files are the
  transcript.
- Tool call payloads that the CLI writes only in summarized form are as the
  tool wrote them; nothing was hand-edited.

## Honesty notes

- Early work was committed in fewer, larger commits than ideal (the first commit
  lumps the initial config, docs, and scripts). Later work is more granular.
  The commit history is left as it happened rather than rewritten, so it stays
  consistent with the transcript.
- Copilot generated initial drafts of `docs/RULES.md` and `docs/DESIGN.md`
  unprompted. Those drafts were reviewed; the variant decision and the
  no-draw/termination argument were verified against the exhaustive proof
  (`node script/proof.js`) and the proof output was added to `docs/DESIGN.md`.
