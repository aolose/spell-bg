import { genSpells } from './data.js';
import { spells, merge } from '../spells.js';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('merge spell test', () => {
  let SpellBase, SpellDev, SpellDev1, SpellHonour, SpellHonour1;

  beforeEach(() => {
    Object.keys(spells).forEach((a) => delete spells[a]);
    const data = genSpells();
    SpellBase = data.SpellBase;
    SpellDev = data.SpellDev;
    SpellDev1 = data.SpellDev1;
    SpellHonour = data.SpellHonour;
    SpellHonour1 = data.SpellHonour_1;
  });

  it('list_base_to_honor', () => {
    merge(SpellBase);
    expect(spells['Base_Spell']).toBeDefined();
    expect(SpellBase.__proto__).toBe({}.__proto__);

    merge(SpellDev);
    expect(spells['Dev_Spell']).toBeDefined();
    expect(SpellDev.__proto__).toBe(SpellBase);

    merge(SpellDev1);
    expect(spells['Dev_Spell_1']).toBeDefined();
    expect(SpellDev1.__proto__).toBe(SpellDev);

    merge(SpellHonour);
    expect(SpellHonour.__proto__).toBe(SpellDev);

    merge(SpellHonour1);
    expect(SpellHonour1.__proto__).toBe(SpellDev1);
  });

  it('list_honor_to_base', () => {
    merge(SpellHonour1);
    expect(spells['Dev_Spell_1']).toBeDefined();
    expect(SpellHonour1.__proto__).toBe({}.__proto__);

    merge(SpellHonour);
    expect(spells['Dev_Spell']).toBeDefined();
    expect(SpellHonour.__proto__).toBe({}.__proto__);
    expect(SpellHonour1.__proto__).toBe({}.__proto__);

    merge(SpellDev1);
    expect(SpellDev1.__proto__).toBe(SpellHonour);
    expect(SpellHonour1.__proto__).toBe(SpellDev1);

    merge(SpellDev);
    expect(SpellDev.__proto__).toBe({}.__proto__);
    expect(SpellHonour.__proto__).toBe(SpellDev);

    merge(SpellBase);
    expect(SpellBase.__proto__).toBe({}.__proto__);
    expect(SpellDev.__proto__).toBe(SpellBase);
  });

  it('list_leaf_first_0', () => {
    merge(SpellHonour1);

    merge(SpellDev1);
    expect(spells['Dev_Spell_1']).toBeDefined();
    expect(SpellDev1.__proto__).toBe({}.__proto__);
    expect(SpellHonour1.__proto__).toBe(SpellDev1);

    merge(SpellDev);
    expect(SpellDev.__proto__).toBe({}.__proto__);

    merge(SpellHonour);
    expect(SpellHonour.__proto__).toBe(SpellDev);

    merge(SpellBase);
    expect(SpellBase.__proto__).toBe({}.__proto__);
    expect(SpellDev.__proto__).toBe(SpellBase);
  });
  it('list_leaf_first_1', () => {
    merge(SpellHonour1);
    merge(SpellDev1);
    merge(SpellDev);
    merge(SpellBase);
    expect(SpellDev.__proto__).toBe(SpellBase);
    merge(SpellHonour);
    expect(SpellHonour.__proto__).toBe(SpellDev);
  });
});
