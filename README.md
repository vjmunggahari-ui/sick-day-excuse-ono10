# The Funniest Sick-Day Excuse

[![bounty](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/competitions/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/vjmunggahari-ui/sick-day-excuse-ono10/rank.svg)](https://make.fun/competitions/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/vjmunggahari-ui/sick-day-excuse-ono10/reward.svg)](https://make.fun/competitions/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

A program that writes one line — the funniest sick-day excuse that still gets the day off — to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

## The entry

> Can't come in — I got locked out of my own house wearing a towel and the neighbours have questions I am not ready to answer.

124 characters, one line. Locked out in a towel, neighbours asking questions: half believable, fresh, and the laugh lands before the last word.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` throws if `MAKEFUN_OUTPUT_DIR` is unset. It writes only `entry.txt`, then reads it back and verifies the exact text, the 1–200 character gate, the single line, and the pinned sha256.

## Competition

[The Funniest Sick-Day Excuse](https://make.fun/competitions/u-zeroxfive-the-funniest-sick-day-excuse-37423a36) — $2 top 3. One line under 200 characters that someone could send to call in sick.
