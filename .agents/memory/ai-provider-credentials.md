---
name: AI provider credentials
description: External provider credentials can authenticate successfully while still lacking permission or balance for inference.
---

Treat provider authentication and provider usage access as separate checks. An accepted token does not guarantee that inference is available; handle explicit permission or credit-balance failures as user-actionable configuration states rather than generic outages.

**Why:** A valid replacement key authenticated successfully, but the first real request failed because the provider account had no remaining credits. A later Hugging Face token authenticated but lacked Inference Providers permission.

**How to apply:** When an AI request returns a provider code such as `credit_balance_exhausted` or a permission-denied response, show a clear configuration message and avoid retry loops.