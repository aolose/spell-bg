export const genSpells = () => {
  return {
    SpellBase: {
      SpellID: 'Base_Spell',
      Icon: 'BaseIcon',
      DisplayName: 'base spell',
      Description: 'this is base spell',
      mod: 'Shared'
    },
    SpellDev: {
      SpellID: 'Dev_Spell',
      Using: 'Base_Spell',
      Icon: 'DevIcon',
      mod: 'SharedDev'
    },
    SpellDev1: {
      SpellID: 'Dev_Spell_1',
      Using: 'Dev_Spell',
      Icon: 'DevIcon',
      mod: 'SharedDev'
    },
    SpellHonour: {
      SpellID: 'Dev_Spell',
      Using: 'Dev_Spell',
      Icon: 'BaseIcon',
      mod: 'Honour'
    },
    SpellHonour_1: {
      SpellID: 'Dev_Spell_1',
      Using: 'Dev_Spell_1',
      Icon: 'BaseIcon',
      mod: 'Honour'
    }
  };
};