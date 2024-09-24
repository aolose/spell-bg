import { expect, it } from 'vitest';
import { n2s, s2n } from '../plugin/utils.js';


it('should equal', () => {
  for (let i = 0; i < 12000; i++) {
    const s = n2s(i);
    const a = s2n(s);
    expect([i, i]).toEqual([i, a]);
  }
});