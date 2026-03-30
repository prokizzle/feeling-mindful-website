---
name: add-dns
description: Add DNS records to feelingmindful.com on Vercel. Accepts BIND-format zone entries or individual record specs.
disable-model-invocation: true
---

# Add DNS Records

Add DNS records to feelingmindful.com via Vercel CLI.

## Usage
Provide records in any format — BIND zone file entries, plain text, or structured specs.

## Commands

```bash
# CNAME
vercel dns add feelingmindful.com <name> CNAME <value> --scope feeling-mindful

# A record
vercel dns add feelingmindful.com <name> A <ip> --scope feeling-mindful

# TXT
vercel dns add feelingmindful.com <name> TXT '<value>' --scope feeling-mindful

# MX (note: priority is positional AFTER value)
vercel dns add feelingmindful.com '@' MX <mailserver> <priority> --scope feeling-mindful

# List all records
vercel dns ls feelingmindful.com --scope feeling-mindful

# Remove a record
vercel dns rm <record-id> --scope feeling-mindful
```

## Notes
- Always use `--scope feeling-mindful` (the Vercel org)
- MX syntax is quirky: `vercel dns add domain '@' MX server priority`
- Use `@` for root domain records
- Verify with `vercel dns ls` after adding
