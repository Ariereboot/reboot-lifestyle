import { describe, it, expect, beforeEach, vi } from 'vitest';
import { checkRateLimit, _resetForTests } from '../lib/rateLimit.js';

describe('checkRateLimit', () => {
  beforeEach(() => {
    _resetForTests();
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-04-17T12:00:00Z'));
  });

  it('allows first request from a new IP', () => {
    const result = checkRateLimit('1.2.3.4');
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(4);
  });

  it('blocks the 6th request from same IP within the window', () => {
    for (let i = 0; i < 5; i++) checkRateLimit('1.2.3.4');
    const sixth = checkRateLimit('1.2.3.4');
    expect(sixth.allowed).toBe(false);
    expect(sixth.remaining).toBe(0);
  });

  it('resets after 1 hour', () => {
    for (let i = 0; i < 5; i++) checkRateLimit('1.2.3.4');
    vi.setSystemTime(new Date('2026-04-17T13:00:01Z'));
    const result = checkRateLimit('1.2.3.4');
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(4);
  });

  it('tracks each IP independently', () => {
    for (let i = 0; i < 5; i++) checkRateLimit('1.2.3.4');
    const other = checkRateLimit('9.9.9.9');
    expect(other.allowed).toBe(true);
  });
});
