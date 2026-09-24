#!/usr/bin/env python3
"""Reject wiped or stub homepage files before they can be deployed."""

from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]

CHECKS = (
    {
        "path": "index.html",
        "min_bytes": 20_000,
        "must_contain": ("<!DOCTYPE html", "VL M&C", "css/styles.css"),
    },
    {
        "path": "js/main.js",
        "min_bytes": 10_000,
        "must_contain": ("querySelector",),
    },
)


def fail(message: str) -> None:
    print(f"::error::{message}", file=sys.stderr)
    print(message, file=sys.stderr)
    sys.exit(1)


def check(spec: dict) -> None:
    rel = spec["path"]
    path = ROOT / rel
    if not path.is_file():
        fail(f"{rel} is missing.")

    data = path.read_bytes()
    text = data.decode("utf-8", errors="replace")
    stripped = text.lstrip()

    if stripped.startswith("FILE:"):
        fail(f"{rel} is a path stub, not real site content.")
    if len(data) < spec["min_bytes"]:
        fail(f"{rel} is too small ({len(data)} bytes). Refusing a wiped homepage.")
    for needle in spec["must_contain"]:
        if needle not in text:
            fail(f"{rel} is missing expected content: {needle}")


for spec in CHECKS:
    check(spec)

print("Homepage files look intact.")
