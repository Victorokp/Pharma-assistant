---
name: AI provider credentials
description: External provider credentials can authenticate successfully while still being unable to serve requests because the account has no usage balance.
---

Treat provider authentication and provider usage access as separate checks. An accepted API key does not guarantee that inference is available; handle explicit credit-balance exhaustion as a user-actionable configuration state rather than a generic outage.

**Why:** A valid replacement key authenticated successfully, but the first real request failed because the provider account had no remaining credits.

**How to apply:** When an AI request returns a provider code such as `credit_balance_exhausted`, show a clear configuration message and avoid retry loops.