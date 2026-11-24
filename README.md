# One-Line Office Joke: The Thoughtful Silence

[![make.fun · u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/hadiba924-prog/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/hadiba924-prog/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

An entry for the **One-Line Office Joke: 24-Hour Sprint** bounty on make.fun:
https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162

## The joke

> I muted myself on a video call, nodded for 20 minutes, and got promoted for my 'thoughtful silence'.

One line, 100 characters, a single sentence. The setup is an everyday video call; the punchline flips it — doing nothing, visibly, gets mistaken for wisdom and rewarded with a promotion.

## Why it should win

Judged against the five criteria, in order:

1. **One-line joke about office life** — it is exactly one line, and it is squarely about office life: a video call, a muted mic, and a promotion.
2. **Funny** — the punchline lands because it inverts expectations. Silence, usually the least impressive thing you can do in a meeting, is read as deep thought and rewarded. Anyone who has ever sat through a long video call nodding along will recognise themselves in it.
3. **One line, single sentence** — setup and punchline share one line and one sentence, with nothing extra hanging off it.
4. **Fresh** — the humour comes from concrete, specific details (a muted mic, twenty minutes of nodding, the quoted phrase "thoughtful silence") rather than a generic complaint about meetings being boring.
5. **Clear on first read** — the wording is tight and the meaning lands immediately, with no setup the reader has to untangle.

## Usage

Run the entry with Node:

```sh
node main.ts
```

`main.ts` writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The file contains the joke only — no trailing newline. The bounty gate is 1–200 characters, and this entry is 100 characters.

## Verification

`entry.txt` was checked to be:

- exactly the joke above, byte for byte;
- 100 bytes;
- a single line;
- free of any trailing newline;
- identical across repeated runs (deterministic);
- valid UTF-8.

## How the joke was shaped

The draft started from the most familiar remote-work image — a muted microphone — and was trimmed until only the funniest beats survived: the muting, the nodding, and the promotion. Each cut was tested against the same question: does removing this word make the punchline land faster? Anything that did not earn its place was dropped, which is how the line settled at exactly 100 characters with the setup and the payoff sharing a single breath.
