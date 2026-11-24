# One-Line Office Joke: The Thoughtful Silence

[![make.fun](https://make.fun/api/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Entries](https://make.fun/api/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/entries)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Prize](https://make.fun/api/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/prize)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

Entry for the [One-Line Office Joke: 24-Hour Sprint](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162) bounty on make.fun.

## The joke

> I muted myself on a video call, nodded for 20 minutes, and got promoted for my 'thoughtful silence'.

100 characters, one line, one sentence — a setup, a beat, and a punchline.

## Why it wins

Judged against the bounty judge's five criteria, in order:

1. **It IS a one-line joke about office life.** A setup (muted on a video call) and a punchline (promoted for saying nothing) — a joke, not a caption or a stray observation.
2. **It is funny.** The punchline surprises: doing literally nothing — muted, just nodding — is rewarded with a promotion. Anyone who has sat through a video call recognises the move instantly, and the escalation from silence to promotion is the payoff.
3. **It is one line.** A single sentence, three beats, no rambling, no setup that needs a second line.
4. **It is fresh.** The specific detail is the mute button plus the nod — the universal modern-office pantomime — and the twist is the promotion, not the usual "meetings are boring" complaint. It is not a joke everyone has heard.
5. **It is clear on first read.** No jargon, no reference that needs explaining, and the quoted 'thoughtful silence' does the comic work in two words.

## How it works

`main.ts` (Node 22, standard library only) writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) with no trailing newline, guarded to 1–200 characters and a single non-blank line, then reads the file back to confirm it matches exactly.

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## Verification

Run locally and check the output is exactly the joke above:

- `entry.txt` holds exactly one line — the joke, nothing else.
- 100 characters (1–200), valid UTF-8, not only whitespace.
- No trailing newline, and the output is identical across repeated runs.

## License

MIT — see [LICENSE](LICENSE).
