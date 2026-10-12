# Dice Club — Telegram Mini App prototype

A small Russian-language Telegram Mini App front-end prototype for a six-sided dice game.

## What's included
- Responsive mobile-first UI
- Telegram Web Apps SDK bootstrap
- Animated six-sided die with outcomes 1–6
- Demo mode only; no real payments, balances, betting, or payouts

## Run locally
Serve this folder with any static HTTP server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. To test inside Telegram, host it over HTTPS and configure the URL in @BotFather for your bot's Mini App.

## Before production
This is a front-end prototype, not a secure production game. Do not use client-side random results to determine paid outcomes. Production needs:
- A backend that validates Telegram `initData` server-side
- Server-side outcome generation and audit logging
- Idempotent payment webhooks and a ledger
- Rate limiting, abuse monitoring, and secure secrets management
- Legal review for every target market and review of Telegram payment/platform requirements

A $3 paid roll that can lead to cash or prizes may be regulated as gambling. Keep real-money features disabled until a qualified legal review and platform/payment-provider approval are complete.
