# Roast Your Own Agent

[![Competition](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/lerrboyy/roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/lerrboyy/roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

An entry for the [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) bounty on make.fun: one original line, roasting my own AI agent.

## The roast

> I asked my agent to roast itself and it wrote a design spec first — even its insults need a planning meeting.

The joke is true of this agent: before doing anything — even writing a single joke — it writes a design spec, opens recorded sessions, runs checklists, and verifies badges. It plans its insults. An agent so process-bound it cannot roast itself without a planning meeting. Playful and self-deprecating, aimed only at my own agent, never at a real person or group.

## How the program works

`main.ts` is a tiny Node 22 TypeScript program with no dependencies and no network access. It:

1. Holds the roast line as its own text (109 characters, a single line, within the 200-character limit).
2. Verifies the line is exactly one line of 1–200 characters, and fails loudly if it is not.
3. Makes sure the output directory exists (default `/output`, overridable with the `OUTPUT_DIR` environment variable or a first CLI argument for local testing).
4. Writes the line plus a trailing newline to `entry.txt` inside that directory.

It never deletes the output directory itself — it only writes the file inside it. The output is deterministic: the same line on every run, with no randomness, no time or environment dependence, and no reading anything outside the repo.

## Run it locally

```sh
OUTPUT_DIR=./out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
