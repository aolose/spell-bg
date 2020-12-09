const data = {
 "spells": {
  "Projectile_HAG_HagGrenade_Fire": {
   "Key": "Projectile_HAG_HagGrenade_Fire",
   "SpellType": "Projectile",
   "TargetRadius": 18,
   "ExplodeRadius": 1,
   "ProjectileCount": 1,
   "Template": "f71831cc-7102-407a-90a3-83f136e14e42",
   "Icon": "unknown",
   "DisplayName": "Projectile_HAG_HagGrenade_Fire_DisplayName",
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Damage_Fire_Root_01:Dummy_Root::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Damage_Fire_Hands_01:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Damage_Fire_Hands_01:Dummy_L_HandFX::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Spells_Cast_Fire_FireBolt_Cast_Dummy_01:Dummy_CastFX:Cast:0:None::None::0:0::::",
    "VFX_Spells_Cast_Fire_FireBolt_Cast_Root_01:Dummy_Root::0:None::None::0:0::::"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationNoneMagic": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare)",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic)",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack)",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover)"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasHighGroundRangeExtension"
   ]
  },
  "Projectile_HAG_HagGrenade_PoisonCloud": {
   "Key": "Projectile_HAG_HagGrenade_PoisonCloud",
   "SpellType": "Projectile",
   "Parent": "Projectile_HAG_HagGrenade_Fire",
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "Template": "0838c94c-12fb-4ca5-b4e3-a61f10e8ecd3",
   "DisplayName": "Projectile_HAG_HagGrenade_PoisonCloud_DisplayName"
  },
  "Projectile_HAG_Jump_Frog": {
   "Key": "Projectile_HAG_Jump_Frog",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Frog",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "AI_ONLY:CreateExplosion(Projectile_AiHelper_DefensiveJump)"
   ],
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "AddFallDamageOnLand",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ]
  },
  "Projectile_Hag_RayOfSickness": {
   "Key": "Projectile_Hag_RayOfSickness",
   "SpellType": "Projectile",
   "Parent": "Projectile_RayOfSickness",
   "Level": 0,
   "TargetRadius": 26,
   "SpellSuccess": [
    "IF(not SavingThrow(Ability.Constitution, SourceSpellDC())):ApplyStatus(POISONED,100,2)",
    "DealDamage(3d8,Poison)"
   ],
   "TargetConditions": "Character() and not Dead() and Enemy()",
   "DescriptionParams": [
    "DealDamage(3d8,Poison)"
   ],
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_Hag_RayOfSickness_Cast_HandFX_Textkey_01,KeepRot:Dummy_R_HandFX:VFX_Somatic_01:0:None::None::0:0::::",
    "VFX_Spells_Cast_Damage_Poison_ProjectileBeam_CastFX_Textkey_02:Dummy_R_HandFX:VFX_Somatic_02:0:None::None::0:0::::",
    "VFX_Spells_Cast_Damage_Poison_ProjectileBeam_Root_Textkey_01:Dummy_Root:VFX_Somatic_02:0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "b462e11d-10b7-4524-ac84-0a1e801c0503(SPL_RayofSickness_01_Prepare)",
    "4aece32c-deb3-45c0-9c4a-22587c9efc43(SPL_RayofSickness_01_Cast)",
    "3711399b-1e4b-483f-8a6f-22f7716a3b12(SPL_RayofSickness_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "b462e11d-10b7-4524-ac84-0a1e801c0503(SPL_RayofSickness_01_Prepare)",
    "4aece32c-deb3-45c0-9c4a-22587c9efc43(SPL_RayofSickness_01_Cast)",
    "3711399b-1e4b-483f-8a6f-22f7716a3b12(SPL_RayofSickness_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "b462e11d-10b7-4524-ac84-0a1e801c0503(SPL_RayofSickness_01_Prepare)",
    "4aece32c-deb3-45c0-9c4a-22587c9efc43(SPL_RayofSickness_01_Cast)",
    "3711399b-1e4b-483f-8a6f-22f7716a3b12(SPL_RayofSickness_01_Recover)"
   ],
   "MemoryCost": 0
  },
  "Projectile_Hag_Double_RayOfSickness": {
   "Key": "Projectile_Hag_Double_RayOfSickness",
   "SpellType": "Projectile",
   "Parent": "Projectile_Hag_RayOfSickness",
   "UseCosts": "BonusActionPoint:1"
  },
  "Projectile_PLA_HailOfThorns_ZhentCave_Gloves": {
   "Key": "Projectile_PLA_HailOfThorns_ZhentCave_Gloves",
   "SpellType": "Projectile",
   "Parent": "Projectile_HailOfThorns",
   "Cooldown": "OncePerShortRest",
   "UseCosts": "ActionPoint:1"
  },
  "Projectile_SCL_SpikeTrap": {
   "Key": "Projectile_SCL_SpikeTrap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "ExplodeRadius": 1,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC())"
  },
  "Projectile_DEN_KanonJump": {
   "Key": "Projectile_DEN_KanonJump",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "TargetRadius": 36,
   "DisplayName": "Projectile_DEN_KanonJump_DisplayName",
   "UseCosts": "ActionPoint:0",
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold"
   ],
   "SpellActionType": "None"
  },
  "Projectile_GuidingBolt_Free": {
   "Key": "Projectile_GuidingBolt_Free",
   "SpellType": "Projectile",
   "Parent": "Projectile_GuidingBolt",
   "Cooldown": "OncePerCombat",
   "UseCosts": "ActionPoint:1"
  },
  "Projectile_GOB_CageTrap": {
   "Key": "Projectile_GOB_CageTrap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap"
  },
  "Projectile_CHA_OutpostCrevice_Bite": {
   "Key": "Projectile_CHA_OutpostCrevice_Bite",
   "SpellType": "Projectile",
   "Parent": "Projectile_PoisonSpray",
   "SpellProperties": [
    "DealDamage(1,Piercing)"
   ],
   "SpellRoll": "not SavingThrow(Ability.Constitution, 10)",
   "SpellSuccess": [
    "DealDamage(2d4,Poison)"
   ],
   "SpellFlags": [
    "IsHarmful",
    "IsTrap"
   ]
  },
  "Projectile_PLA_FakeAlchemistFire": {
   "Key": "Projectile_PLA_FakeAlchemistFire",
   "SpellType": "Projectile",
   "Parent": "Projectile_HAG_HagGrenade_Fire",
   "SpellProperties": [
    "GROUND:CreateSurface(2,0,Fire)",
    "ApplyStatus(BURNING, 100, 1)"
   ],
   "TargetRadius": 30,
   "AreaRadius": 2,
   "ExplodeRadius": 2,
   "ProjectileCount": 1,
   "Template": "f71831cc-7102-407a-90a3-83f136e14e42",
   "Icon": "unknown",
   "DisplayName": "Projectile_PLA_FakeAlchemistFire_DisplayName",
   "Description": "Projectile_PLA_FakeAlchemistFire_Description",
   "DescriptionParams": [
    "DealDamage(1d4,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d4,Fire)"
   ],
   "SpellAnimationNoneMagic": [
    "b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4(CMBT_Skill_Throw_Far_01_Prepare)",
    "f2803838-31cf-471b-85d1-92fa2d0eb7c2(CMBT_Skill_Throw_Far_01_Antic)",
    "4be0751c-9fca-4c35-9337-6bf8a321c516(CMBT_Skill_Throw_Far_01_Attack)",
    "86b52093-596c-4054-bb1d-2dbdfcdc4347(CMBT_Skill_Throw_Far_01_Recover)"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold"
   ],
   "MemoryCost": 0
  },
  "Projectile_UND_BuletteSpawnExplode": {
   "Key": "Projectile_UND_BuletteSpawnExplode",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "Force(4)"
   ],
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 10)",
   "SpellSuccess": [
    "DealDamage(3d6,Bludgeoning)",
    "ApplyStatus(PRONE, 100, 1)"
   ],
   "SpellFail": [
    "DealDamage(1d6,Bludgeoning)"
   ],
   "Template": "594f7a25-2a0c-474c-843e-f5168c848534",
   "DisplayName": "Projectile_UND_BuletteSpawnExplode_DisplayName",
   "Description": "Projectile_UND_BuletteSpawnExplode_Description",
   "DescriptionParams": [
    "DealDamage(3d6,Bludgeoning)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d6,Bludgeoning)"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "IsSpell",
    "RangeIgnoreVerticalThreshold",
    "AddFallDamageOnLand",
    "IsHarmful"
   ]
  },
  "Projectile_FOR_GnomeGoblin_ThrowRock": {
   "Key": "Projectile_FOR_GnomeGoblin_ThrowRock",
   "SpellType": "Projectile",
   "AIFlags": "CanNotUse",
   "TargetRadius": 18,
   "AreaRadius": 0,
   "ExplodeRadius": 0,
   "ProjectileCount": 1,
   "Template": "d8717ced-7980-43dd-ad91-2107c37c8122",
   "Icon": "unknown",
   "DisplayName": "Projectile_FOR_GnomeGoblin_ThrowRock_DisplayName",
   "CastEffect": [
    "VFX_Enemies_Goblin_ThrowRock_Cast_R_HandFX_01:Dummy_R_HandFX::0:None::None::0:0::::"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "SpellAnimationNoneMagic": [
    "e8cb6221-778b-4fce-bf0b-44ea56a60ca9(CUST_ThrowingPebbles_03)"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasHighGroundRangeExtension"
   ]
  },
  "Projectile_FOR_Ogre_AcidArrow": {
   "Key": "Projectile_FOR_Ogre_AcidArrow",
   "SpellType": "Projectile",
   "Parent": "Projectile_AcidArrow",
   "CastTextEvent": "Cast",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "RechargeValues": "5-6"
  },
  "Projectile_FOR_Ogre_FireBolt": {
   "Key": "Projectile_FOR_Ogre_FireBolt",
   "SpellType": "Projectile",
   "Parent": "Projectile_FireBolt",
   "CastTextEvent": "Cast",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ]
  },
  "Projectile_GOB_GoblinPriestess_StatueDebris": {
   "Key": "Projectile_GOB_GoblinPriestess_StatueDebris",
   "SpellType": "Projectile",
   "Parent": "Projectile_GuidingBolt",
   "Level": 3,
   "Cooldown": "None",
   "AIFlags": "CanNotUse",
   "SpellProperties": [
    "Force(2)"
   ],
   "TargetRadius": 6,
   "AreaRadius": 3,
   "DeathType": "KnockedDown",
   "ExplodeRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 15)",
   "SpellFail": [
    "DealDamage(2d6,Bludgeoning)"
   ],
   "ProjectileCount": 1,
   "Template": "348013df-7958-4ca9-ac9f-80337e054bee",
   "Icon": "unknown",
   "DisplayName": "Projectile_GOB_GoblinPriestess_StatueDebris_DisplayName",
   "SpellAnimationNoneMagic": [
    "03101cea-dee7-475d-9616-b6957122bda2(CMBT_Skill_Warcry_01_Prepare)",
    "f3a26975-5aab-4fd6-989a-2b2515b57139(CMBT_Skill_Invisibility_01_Antic)",
    "5073b979-0088-45d5-819e-6535474005e5(CMBT_Skill_FuriousBite_01_Prepare)"
   ],
   "VerbalIntent": "Damage",
   "WeaponTypes": "None",
   "SpellFlags": [
    "IsHarmful",
    "AddFallDamageOnLand"
   ]
  },
  "Projectile_GOB_GoblinKing_Javelin": {
   "Key": "Projectile_GOB_GoblinKing_Javelin",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin_Bugbear",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 14,
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "SpellFlags": [
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "AddFallDamageOnLand"
   ]
  },
  "Projectile_GOB_Ogre_Javelin": {
   "Key": "Projectile_GOB_Ogre_Javelin",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin_Ogre_NoRecharge",
   "SpellFlags": [
    "IsEnemySpell",
    "CannotTargetTerrain",
    "IgnoreSilence",
    "IsHarmful",
    "AddFallDamageOnLand",
    "RangeIgnoreVerticalThreshold"
   ]
  },
  "Projectile_DEN_TunnelTurret_Trap": {
   "Key": "Projectile_DEN_TunnelTurret_Trap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "AreaRadius": 2,
   "ExplodeRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 12)",
   "SpellSuccess": [
    "DealDamage(2d6,Fire)",
    " ApplyStatus(BURNING,100,2)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "Template": "792ba497-a6ea-46bc-81cb-deb78e4dd9d3"
  },
  "Projectile_GOB_PainPriest_Mace": {
   "Key": "Projectile_GOB_PainPriest_Mace",
   "SpellType": "Projectile",
   "SpellProperties": [
    "DealDamage(1d6,Necrotic)"
   ],
   "AreaRadius": 2,
   "Template": "70bf8644-f3f0-4441-b795-d737cadd413e",
   "TargetEffect": [
    "VFX_Spells_Cast_Damage_Necrotic_PainPriestMace_01:::0:None::None::0:0::::"
   ],
   "SpellAnimationArcaneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "DualWieldingSpellAnimationArcaneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "DualWieldingSpellAnimationDivineMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "DualWieldingSpellAnimationNoneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ]
  },
  "Projectile_UNI_MassHealRing_Spell": {
   "Key": "Projectile_UNI_MassHealRing_Spell",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "RegainHitPoints(1d6)"
   ],
   "AreaRadius": 6
  },
  "Projectile_SHA_Nightsong_EldritchBlast": {
   "Key": "Projectile_SHA_Nightsong_EldritchBlast",
   "SpellType": "Projectile",
   "Parent": "Projectile_EldritchBlast"
  },
  "Projectile_SHA_Nightsong_WitchBolt": {
   "Key": "Projectile_SHA_Nightsong_WitchBolt",
   "SpellType": "Projectile",
   "Parent": "Projectile_WitchBolt"
  },
  "Projectile_SHA_Nightsong_RayOfFrost": {
   "Key": "Projectile_SHA_Nightsong_RayOfFrost",
   "SpellType": "Projectile",
   "Parent": "Projectile_RayOfFrost"
  },
  "Projectile_PLA_DesireJump": {
   "Key": "Projectile_PLA_DesireJump",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "SpellFlags": [
    "IsJump",
    "CannotTargetItems",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "CannotTargetCharacter",
    "Stealth"
   ]
  },
  "Projectile_FOR_Goblin_Jump": {
   "Key": "Projectile_FOR_Goblin_Jump",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "Cooldown": "OncePerCombat"
  },
  "Projectile_DEN_Jump_Spider": {
   "Key": "Projectile_DEN_Jump_Spider",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Spider",
   "TargetRadius": 20,
   "UseCosts": "BonusActionPoint:1"
  },
  "Projectile_BEH_DeathRay": {
   "Key": "Projectile_BEH_DeathRay",
   "SpellType": "Projectile",
   "Parent": "Projectile_GuidingBolt",
   "Cooldown": "None",
   "SpellProperties": [
    "DealDamage(2,Necrotic)"
   ],
   "TargetRadius": 30,
   "DeathType": "None",
   "Icon": "unknown",
   "DisplayName": "Projectile_BEH_DeathRay_DisplayName",
   "Description": "Projectile_BEH_DeathRay_Description",
   "PrepareEffect": [
    "VFX_Script_Stub_Beam_01:::0:None::None::0:0::::"
   ],
   "UseCosts": "ActionPoint:1",
   "VerbalIntent": "None",
   "WeaponTypes": "None",
   "SpellFlags": [
    "IsSpell",
    "CannotRotate"
   ],
   "SourceLimbIndex": 5
  },
  "Projectile_FOR_MasterworkChest_Trap": {
   "Key": "Projectile_FOR_MasterworkChest_Trap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "Force(2)"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand",
    "IsTrap"
   ]
  },
  "Projectile_UND_ZhentChest_Trap": {
   "Key": "Projectile_UND_ZhentChest_Trap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "Force(1)"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand",
    "IsTrap"
   ]
  },
  "Projectile_GOB_TripwireTrap": {
   "Key": "Projectile_GOB_TripwireTrap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "Force(1)"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand",
    "IsTrap"
   ]
  },
  "Projectile_UND_Wand_Fireball_Crooked_Spell": {
   "Key": "Projectile_UND_Wand_Fireball_Crooked_Spell",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "Cooldown": "OncePerShortRest",
   "TargetRadius": "1.5"
  },
  "Projectile_UND_DarkLake_RaftCaptainJump": {
   "Key": "Projectile_UND_DarkLake_RaftCaptainJump",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump"
  },
  "Projectile_FOR_SeluneStash_ChestTrap": {
   "Key": "Projectile_FOR_SeluneStash_ChestTrap",
   "SpellType": "Projectile",
   "Parent": "Projectile_GuidingBolt",
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 14)",
   "SpellSuccess": [
    "DealDamage(4d6,Radiant)"
   ],
   "DisplayName": "Projectile_FOR_SeluneStash_ChestTrap_DisplayName",
   "Description": "Projectile_FOR_SeluneStash_ChestTrap_Description",
   "DescriptionParams": [
    "DealDamage(4d6,Radiant)"
   ],
   "TooltipDamageList": [
    "DealDamage(4d6,Radiant)"
   ]
  },
  "Projectile_HAG_PsychicMine": {
   "Key": "Projectile_HAG_PsychicMine",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 10)",
   "SpellSuccess": [
    "DealDamage(2d6,Psychic)",
    "ApplyStatus(SLOW, 100, 3)"
   ],
   "TargetConditions": "Character() and not Self() and not Dead()",
   "DisplayName": "Projectile_HAG_PsychicMine_DisplayName",
   "Description": "Projectile_HAG_PsychicMine_Description",
   "DescriptionParams": [
    "DealDamage(2d6,Psychic)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d6,Psychic)"
   ],
   "SpellFlags": [
    "IsTrap",
    "IsHarmful"
   ],
   "SpellHitAnimationType": "MagicalDamage"
  },
  "Projectile_HAG_RayOfSickness_Staff": {
   "Key": "Projectile_HAG_RayOfSickness_Staff",
   "SpellType": "Projectile",
   "Parent": "Projectile_RayOfSickness",
   "UseCosts": "ActionPoint:1"
  },
  "Projectile_TUT_BrineExplode": {
   "Key": "Projectile_TUT_BrineExplode",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "Force(8)"
   ],
   "TargetRadius": 6,
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "unknown",
   "SpellFlags": [
    "AddFallDamageOnLand",
    "IsTrap"
   ]
  },
  "Projectile_CAMP_Javelin_Ogre": {
   "Key": "Projectile_CAMP_Javelin_Ogre",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin_Ogre",
   "Cooldown": "OncePerTurn"
  },
  "Projectile_UND_SharFort_Turret": {
   "Key": "Projectile_UND_SharFort_Turret",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "DisplayName": "Projectile_UND_SharFort_Turret_DisplayName",
   "SpellFlags": [
    "IsTrap",
    "IsHarmful"
   ]
  },
  "Projectile_UND_MagicMissile_SocietyOfBrilliance_Amulet": {
   "Key": "Projectile_UND_MagicMissile_SocietyOfBrilliance_Amulet",
   "SpellType": "Projectile",
   "Parent": "Projectile_MagicMissile",
   "Cooldown": "OncePerRest",
   "UseCosts": "ActionPoint:1"
  },
  "Projectile_HAG_RedcapSpikes": {
   "Key": "Projectile_HAG_RedcapSpikes",
   "SpellType": "Projectile",
   "Parent": "Projectile_SpikedBulb",
   "SpellProperties": [
    "IF(Character()):ApplyStatus(BLEEDING,100,3)",
    "IF(Character()):ApplyStatus(HAG_SMALLCUT,100,10)"
   ],
   "TargetRadius": "0.5",
   "AreaRadius": 1
  },
  "Projectile_UND_DuergarRaft_Hammer_Explosion": {
   "Key": "Projectile_UND_DuergarRaft_Hammer_Explosion",
   "SpellType": "Projectile",
   "SpellProperties": [
    "Force(3)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "Template": "2f137707-3e08-43cb-9362-ffc23c3e069e",
   "TargetEffect": [
    "VFX_Actions_Cast_WeaponAttack_Impact_DuergarRaftHammerExplosion_01:Dummy_CastFX:Textkey:0:None::None::0:0::::"
   ],
   "SpellAnimationArcaneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare)",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic)",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack)",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover)"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "AddFallDamageOnLand",
    "IsSpell",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ]
  },
  "Projectile_DEN_Halsin_PoisonSpray": {
   "Key": "Projectile_DEN_Halsin_PoisonSpray",
   "SpellType": "Projectile",
   "Parent": "Projectile_PoisonSpray",
   "RechargeValues": "2-6"
  },
  "Projectile_UND_ThayanCellar_OrbExplosion": {
   "Key": "Projectile_UND_ThayanCellar_OrbExplosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "Template": "2afe003c-1c33-4aa6-957f-90003c7d164c"
  },
  "Projectile_DEN_GoblinShot": {
   "Key": "Projectile_DEN_GoblinShot",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "ProjectileStrike_MOO_DesireDream_FlamingFistArtillery": {
   "Key": "ProjectileStrike_MOO_DesireDream_FlamingFistArtillery",
   "SpellType": "ProjectileStrike",
   "Level": 3,
   "SpellProperties": [
    "GROUND:SurfaceChange(Ignite)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 6,
   "ExplodeRadius": 6,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC())",
   "SpellSuccess": [
    "DealDamage(8d6,Fire)"
   ],
   "ProjectileCount": 1,
   "Template": "348013df-7958-4ca9-ac9f-80337e054bee",
   "Icon": "unknown",
   "DisplayName": "ProjectileStrike_MOO_DesireDream_FlamingFistArtillery_DisplayName",
   "SpellAnimationArcaneMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_Combat_01_Prepare)"
   ],
   "SpellAnimationDivineMagic": [
    "26810cdb-342f-4e93-96ea-927ed6f0de65(SPL_Divine_Damage_Combat_01_Prepare)"
   ],
   "SpellAnimationNoneMagic": [
    "26810cdb-342f-4e93-96ea-927ed6f0de65(SPL_Divine_Damage_Combat_01_Prepare)",
    "519955c5-4001-4104-8dc4-e5ac4c70857e(SPL_Divine_Utility_Combat_01_Cast)",
    "37c21db3-cf01-45ed-a8de-da391e9e3a0a(SPL_Divine_Utility_Combat_01_Recover)"
   ],
   "VerbalIntent": "Damage"
  },
  "ProjectileStrike_TUT_UpperDeck_Bombardment": {
   "Key": "ProjectileStrike_TUT_UpperDeck_Bombardment",
   "SpellType": "ProjectileStrike",
   "Level": 1,
   "SpellProperties": [
    "GROUND:SurfaceChange(Ignite)",
    "GROUND:SurfaceChange(Vaporize)",
    "GROUND:CreateSurface(2.5,0.5,Fire)"
   ],
   "TargetRadius": 6,
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "SpellSuccess": [
    "DealDamage(1d6,Fire)",
    " Force(8)"
   ],
   "ProjectileCount": 1,
   "Angle": 25,
   "Height": 30,
   "Template": "3fbaebe6-801f-4be8-9b7f-20fa87e97aad",
   "Icon": "unknown",
   "DisplayName": "ProjectileStrike_TUT_UpperDeck_Bombardment_DisplayName",
   "SpellAnimationArcaneMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_Combat_01_Prepare)"
   ],
   "SpellAnimationDivineMagic": [
    "26810cdb-342f-4e93-96ea-927ed6f0de65(SPL_Divine_Damage_Combat_01_Prepare)"
   ],
   "SpellAnimationNoneMagic": [
    "26810cdb-342f-4e93-96ea-927ed6f0de65(SPL_Divine_Damage_Combat_01_Prepare)",
    "519955c5-4001-4104-8dc4-e5ac4c70857e(SPL_Divine_Utility_Combat_01_Cast)"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand"
   ],
   "VerbalIntent": "Damage"
  },
  "Shout_GOB_DetonateSelf": {
   "Key": "Shout_GOB_DetonateSelf",
   "SpellType": "Shout",
   "Parent": "Shout_RadianceOfTheDawn",
   "Cooldown": "None",
   "SpellProperties": [
    "GROUND:CreateSurface(3,-1,Blackpowder)",
    "AI_ONLY:AOE:IF(Item()):DealDamage(100,Fire)",
    "AI_IGNORE:CAST:DealDamage(SELF,100,Fire)",
    "AI_IGNORE:AOE:IF(Item()):ApplyStatus(BURNING,100,1)"
   ],
   "AreaRadius": 2,
   "DeathType": "Incinerate",
   "AoEConditions": "Item()",
   "Icon": "unknown",
   "DisplayName": "Shout_GOB_DetonateSelf_DisplayName",
   "Description": "Shout_GOB_DetonateSelf_Description",
   "DescriptionParams": [
    "DealDamage(100,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(100,Fire)"
   ],
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_Detonate",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "cdbe6890-bd26-4b4e-ab87-a4553f18677d(CMBT_Skill_Detonate_01_Antic)",
    "023a1d55-e50a-43d7-ad5d-fbc3f3b73291(CMBT_Skill_Detonate_01_Cast)",
    "ae14b436-0170-4fe6-8341-94bf6e42714b(CMBT_Skill_Detonate_01_Dash)"
   ],
   "SpellAnimationDivineMagic": [
    "cdbe6890-bd26-4b4e-ab87-a4553f18677d(CMBT_Skill_Detonate_01_Antic)",
    "023a1d55-e50a-43d7-ad5d-fbc3f3b73291(CMBT_Skill_Detonate_01_Cast)",
    "ae14b436-0170-4fe6-8341-94bf6e42714b(CMBT_Skill_Detonate_01_Dash)"
   ],
   "SpellAnimationNoneMagic": [
    "cdbe6890-bd26-4b4e-ab87-a4553f18677d(CMBT_Skill_Detonate_01_Antic)",
    "023a1d55-e50a-43d7-ad5d-fbc3f3b73291(CMBT_Skill_Detonate_01_Cast)",
    "ae14b436-0170-4fe6-8341-94bf6e42714b(CMBT_Skill_Detonate_01_Dash)"
   ],
   "SpellFlags": [
    "HasSomaticComponent"
   ]
  },
  "Shout_HAG_SpawnDoubles_Phase1": {
   "Key": "Shout_HAG_SpawnDoubles_Phase1",
   "SpellType": "Shout",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF, AI_HELPER_BUFF,100,5)",
    "AI_ONLY:CAST:ApplyStatus(SELF, INVISIBLE,100,-1)",
    "AI_IGNORE:CAST:ApplyStatus(SELF,AI_HELPER_BLOCKRESOURCES,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shout_HAG_SpawnDoubles_Phase1_DisplayName",
   "Description": "Shout_HAG_SpawnDoubles_Phase1_Description",
   "CastEffect": [
    "VFX_Enemies_Hag_SpawnDoubles_Cast_BodyFX_Textkey_01,Detach:Dummy_BodyFX:VFX_Attack_01:0:None::None::0:0::::",
    "VFX_Enemies_Hag_SpawnDoubles_Cast_BodyFX_Overlay_Textkey_01:Dummy_BodyFX:VFX_Attack_01:0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_SpawnDoubles",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "ca19e1f6-c9fe-42b5-a2d0-7a6538314f5e(SPL_SpawnDoubles_01_Prepare)",
    "1349209b-b66c-441c-a8af-3eb9f1d01b4d(SPL_SpawnDoubles_01_Cast)",
    "1ab8596c-1287-46e7-baad-0ef9dab899a3(SPL_SpawnDoubles_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "ca19e1f6-c9fe-42b5-a2d0-7a6538314f5e(SPL_SpawnDoubles_01_Prepare)",
    "1349209b-b66c-441c-a8af-3eb9f1d01b4d(SPL_SpawnDoubles_01_Cast)",
    "1ab8596c-1287-46e7-baad-0ef9dab899a3(SPL_SpawnDoubles_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "ca19e1f6-c9fe-42b5-a2d0-7a6538314f5e(SPL_SpawnDoubles_01_Prepare)",
    "1349209b-b66c-441c-a8af-3eb9f1d01b4d(SPL_SpawnDoubles_01_Cast)",
    "1ab8596c-1287-46e7-baad-0ef9dab899a3(SPL_SpawnDoubles_01_Recover)"
   ],
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent",
    "HasVerbalComponent"
   ]
  },
  "Shout_HAG_SpawnDoubles_Phase2": {
   "Key": "Shout_HAG_SpawnDoubles_Phase2",
   "SpellType": "Shout",
   "Parent": "Shout_HAG_SpawnDoubles_Phase1",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "ApplyStatus(SELF, INVISIBLE, 100, 2)",
    "AI_ONLY:CAST:ApplyStatus(SELF, AI_HELPER_BUFF,100,5)",
    "AI_IGNORE:CAST:ApplyStatus(SELF,AI_HELPER_BLOCKRESOURCES,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shout_HAG_SpawnDoubles_Phase2_DisplayName",
   "Description": "Shout_HAG_SpawnDoubles_Phase2_Description",
   "CastEffect": [
    "VFX_Enemies_Hag_GreaterSpawnDoubles_Cast_BodyFX_Textkey_01,Detach:Dummy_BodyFX:VFX_Attack_01:0:None::None::0:0::::",
    "VFX_Enemies_Hag_SpawnDoubles_Cast_BodyFX_Overlay_Textkey_01:Dummy_BodyFX:VFX_Attack_01:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_SpawnGreaterDoubles",
   "UseCosts": "ActionPoint:1"
  },
  "Shout_HAG_SpawnDoubles_MayrinaIllusion": {
   "Key": "Shout_HAG_SpawnDoubles_MayrinaIllusion",
   "SpellType": "Shout",
   "Parent": "Shout_HAG_SpawnDoubles_Phase1",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF, AI_HELPER_BUFF,100)",
    "AI_IGNORE:CAST:ApplyStatus(SELF,AI_HELPER_BLOCKRESOURCES,100,1)"
   ],
   "TargetConditions": "Self()",
   "DisplayName": "Shout_HAG_SpawnDoubles_MayrinaIllusion_DisplayName",
   "Description": "Shout_HAG_SpawnDoubles_MayrinaIllusion_Description",
   "CastEffect": [
    "VFX_Enemies_Hag_Trickery_Cast_BodyFX_Textkey_01,Detach:Dummy_BodyFX:VFX_Attack_01:0:None::None::0:0::::",
    "VFX_Enemies_Hag_Trickery_Cast_BodyFX_Overlay_Textkey_01:Dummy_BodyFX:VFX_Attack_01:0:None::None::0:0::::"
   ],
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "f02ed06c-bd44-4abb-9e8e-c2973708ca64(SPL_Trickery_01_Prepare)",
    "cc5fa3f5-27c4-49aa-a31d-03018a86529b(SPL_Trickery_01_Cast)",
    "f3f52ddf-fe80-4373-bd3f-9b30795f1c3f(SPL_Trickery_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "f02ed06c-bd44-4abb-9e8e-c2973708ca64(SPL_Trickery_01_Prepare)",
    "cc5fa3f5-27c4-49aa-a31d-03018a86529b(SPL_Trickery_01_Cast)",
    "f3f52ddf-fe80-4373-bd3f-9b30795f1c3f(SPL_Trickery_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "f02ed06c-bd44-4abb-9e8e-c2973708ca64(SPL_Trickery_01_Prepare)",
    "cc5fa3f5-27c4-49aa-a31d-03018a86529b(SPL_Trickery_01_Cast)",
    "f3f52ddf-fe80-4373-bd3f-9b30795f1c3f(SPL_Trickery_01_Recover)"
   ],
   "RechargeValues": 6
  },
  "Shout_HAG_Frog_ReflectiveMucus": {
   "Key": "Shout_HAG_Frog_ReflectiveMucus",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(FROG_REFLECTIVEMUCUS,100,-1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shout_HAG_Frog_ReflectiveMucus_DisplayName",
   "Description": "Shout_HAG_Frog_ReflectiveMucus_Description",
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_Frog_ReflectiveMucus_Cast_Root_Textkey_01,Detach:Dummy_Root:VFX_Attack_01:0:None::None::0:0::::"
   ],
   "CastTextEvent": "VFX_Attack_02",
   "CastSound": "CrSpell_Cast_ReflectiveMucus",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop)"
   ],
   "SpellAnimationDivineMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop)"
   ],
   "SpellAnimationNoneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop)"
   ]
  },
  "Shout_DEN_KanonPush": {
   "Key": "Shout_DEN_KanonPush",
   "SpellType": "Shout",
   "SpellProperties": [
    "Force(8)",
    "DealDamage(100,Piercing)"
   ],
   "TargetConditions": "Self()",
   "DisplayName": "Shout_DEN_KanonPush_DisplayName",
   "CastTextEvent": "Cast",
   "SpellAnimationArcaneMagic": [
    "b1d7f747-1ce7-4cf0-9cb3-0b6c9b2529a2(SCENE_KanonKilledArrow)",
    "438dc0d6-e232-4a16-9f89-ca6cb7c87e50(SCENE_KanonKilledFall)",
    "d6865bb0-ec3d-4ca6-aec8-6860526e290b(SCENE_KanonKilledLand)"
   ],
   "SpellAnimationDivineMagic": [
    "b1d7f747-1ce7-4cf0-9cb3-0b6c9b2529a2(SCENE_KanonKilledArrow)",
    "438dc0d6-e232-4a16-9f89-ca6cb7c87e50(SCENE_KanonKilledFall)",
    "d6865bb0-ec3d-4ca6-aec8-6860526e290b(SCENE_KanonKilledLand)"
   ],
   "SpellAnimationNoneMagic": [
    "b1d7f747-1ce7-4cf0-9cb3-0b6c9b2529a2(SCENE_KanonKilledArrow)",
    "438dc0d6-e232-4a16-9f89-ca6cb7c87e50(SCENE_KanonKilledFall)",
    "d6865bb0-ec3d-4ca6-aec8-6860526e290b(SCENE_KanonKilledLand)"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand"
   ]
  },
  "Shout_GLO_Wyll_CambionTalk": {
   "Key": "Shout_GLO_Wyll_CambionTalk",
   "SpellType": "Shout",
   "AIFlags": "CanNotUse",
   "Autocast": "Yes",
   "Icon": "Action_ContactMizora",
   "DisplayName": "Shout_GLO_Wyll_CambionTalk_DisplayName",
   "Description": "Shout_GLO_Wyll_CambionTalk_Description",
   "CastTextEvent": "Cast",
   "SpellAnimationArcaneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)"
   ],
   "SpellAnimationDivineMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)"
   ],
   "SpellAnimationNoneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)"
   ],
   "SpellFlags": [
    "ImmediateCast",
    "DontForceSheathOrUnsheath"
   ]
  },
  "Shout_GOB_GoblinKing_ForceShout": {
   "Key": "Shout_GOB_GoblinKing_ForceShout",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerTurn",
   "AreaRadius": 8,
   "SpellRoll": "not SavingThrow(Ability.Strength, 16)",
   "SpellSuccess": [
    "Force(6)",
    "DealDamage(1d6,Force)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "unknown",
   "DisplayName": "Shout_GOB_GoblinKing_ForceShout_DisplayName",
   "Description": "Shout_GOB_GoblinKing_ForceShout_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Force)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d6,Force)"
   ],
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_Hobgoblin_ForceShout_Cast_Root_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Hobgoblin_ForceShout_Cast_BodyFX_PostProcess_Textkey_01:Dummy_BodyFX:Cast:0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_Hobgoblin_ForceShout_Impact_BodyFX_Textkey_01:Dummy_BodyFX:Cast:0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_WillOfTheAbsolute",
   "SpellAnimationArcaneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand",
    "CannotTargetItems"
   ],
   "RechargeValues": "4-6"
  },
  "Shout_FOR_Ogre_MirrorImage": {
   "Key": "Shout_FOR_Ogre_MirrorImage",
   "SpellType": "Shout",
   "Parent": "Shout_MirrorImage",
   "Cooldown": "OncePerCombat",
   "CastTextEvent": "Cast",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ]
  },
  "Shout_UND_SocietyOfBrilliance_Teleportation": {
   "Key": "Shout_UND_SocietyOfBrilliance_Teleportation",
   "SpellType": "Shout",
   "Level": 5,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "AI_ONLY:TARGET:ApplyStatus(AI_STATUS_FAKE,100)"
   ],
   "AreaRadius": 100,
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shout_UND_SocietyOfBrilliance_Teleportation_DisplayName",
   "Description": "Shout_UND_SocietyOfBrilliance_Teleportation_Description",
   "CastTextEvent": "Cast",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell"
   ]
  },
  "Shout_SHA_Nightsong_StartKissCombat": {
   "Key": "Shout_SHA_Nightsong_StartKissCombat",
   "SpellType": "Shout",
   "SpellProperties": [
    "AI_ONLY:TARGET:ApplyStatus(AI_STATUS_FAKE,100)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shout_SHA_Nightsong_StartKissCombat_DisplayName",
   "CastTextEvent": "Cast",
   "UseCosts": "ActionPoint:0",
   "SpellFlags": [
    "ImmediateCast"
   ]
  },
  "Shout_GOB_PainPriest_DaggerSpell": {
   "Key": "Shout_GOB_PainPriest_DaggerSpell",
   "SpellType": "Shout",
   "Parent": "Shout_Rage",
   "SpellProperties": [
    "GROUND:CreateSurface(1,-1,Blood)",
    "DealDamage(1d4,Slashing)",
    "ApplyStatus(SELF,BLESS,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shout_GOB_PainPriest_DaggerSpell_DisplayName",
   "Description": "Shout_GOB_PainPriest_DaggerSpell_Description",
   "DescriptionParams": [
    "DealDamage(1d4,Slashing)"
   ],
   "CastEffect": [
    "VFX_Spells_Cast_Intent_Buff_ShoutSelf_PainPriestDaggerSpell_Root_01:Dummy_BodyFX::0:None::None::0:0::::"
   ],
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Intent_Buff_PainPriestDaggerSpell_Dummy_L_HandFX_01:Dummy_L_HandFX::0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_BloodSacrifice",
   "UseCosts": "BonusActionPoint:1"
  },
  "Shout_GOB_Priestess_MirrorImage": {
   "Key": "Shout_GOB_Priestess_MirrorImage",
   "SpellType": "Shout",
   "Parent": "Shout_MirrorImage",
   "Cooldown": "OncePerCombat",
   "MemoryCost": 0
  },
  "Shout_DEN_ARM_LuckyBoots_Spell": {
   "Key": "Shout_DEN_ARM_LuckyBoots_Spell",
   "SpellType": "Shout",
   "Parent": "Shout_Rage",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(SELF,DEN_UNFORTUNATEGNOME_LUCKYBOOTS_STATUS,100,3)",
    "ApplyStatus(SELF,BLESS,100,1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shout_DEN_ARM_LuckyBoots_Spell_DisplayName",
   "Description": "Shout_DEN_ARM_LuckyBoots_Spell_Description",
   "UseCosts": "BonusActionPoint:1"
  },
  "Shout_CHA_ShellKid_Stone_Spell": {
   "Key": "Shout_CHA_ShellKid_Stone_Spell",
   "SpellType": "Shout",
   "Parent": "Shout_MirrorImage",
   "SpellSchool": "Enchantment",
   "AreaRadius": 15,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 14)",
   "SpellSuccess": [
    "ApplyStatus(CHARMED,100,10)"
   ],
   "TargetConditions": "Character() and not Self() and not Ally()",
   "AoEConditions": "Character() and not Self() and not Ally()",
   "Icon": "unknown",
   "DisplayName": "Shout_CHA_ShellKid_Stone_Spell_DisplayName",
   "Description": "Shout_CHA_ShellKid_Stone_Spell_Description",
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Intent_Control_Charm_ShellKidStone_01:Dummy_ChestFX :VFX_Prepare_01:0:None::None::0:0::::",
    "VFX_Sound_Spell_Prepare_QueensCharm_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Spells_Cast_Intent_Control_TargetAoE_Charm_ShellKidStone_01,Detach:Dummy_Root:VFX_Cast_01:0:None::None::0:0::::"
   ],
   "CastTextEvent": "VFX_Cast_01",
   "CastSound": "CrSpell_Cast_ShellKidStone",
   "SpellAnimationArcaneMagic": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare)",
    "895ce382-397d-4b9a-9e8f-6ee3b1ff3a13(UTIL_Drink_01)",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop)"
   ],
   "SpellAnimationDivineMagic": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare)",
    "895ce382-397d-4b9a-9e8f-6ee3b1ff3a13(UTIL_Drink_01)",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop)"
   ],
   "SpellAnimationNoneMagic": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare)",
    "895ce382-397d-4b9a-9e8f-6ee3b1ff3a13(UTIL_Drink_01)",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop)"
   ]
  },
  "Shout_SHA_Nightsong_Nightfall": {
   "Key": "Shout_SHA_Nightsong_Nightfall",
   "SpellType": "Shout",
   "Parent": "Shout_RadianceOfTheDawn",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "IF(Item()):RemoveStatus(BURNING)"
   ],
   "DeathType": "Necrotic",
   "SpellRoll": "SavingThrow(Ability.Constitution,14)",
   "SpellSuccess": [
    "IF(Character()):DealDamage(3d8,Necrotic)"
   ],
   "TargetConditions": "not Self() and not Ally()",
   "AoEConditions": "not Self() and not Ally()",
   "Icon": "unknown",
   "DisplayName": "Shout_SHA_Nightsong_Nightfall_DisplayName",
   "Description": "Shout_SHA_Nightsong_Nightfall_Description",
   "UseCosts": "ActionPoint:1",
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "RechargeValues": "3-6"
  },
  "Shout_UND_Invisibility_ShadowOfMenzoberranzan": {
   "Key": "Shout_UND_Invisibility_ShadowOfMenzoberranzan",
   "SpellType": "Shout",
   "Parent": "Shout_Invisibility_Imp",
   "Cooldown": "OncePerRest",
   "DisplayName": "Shout_UND_Invisibility_ShadowOfMenzoberranzan_DisplayName",
   "SpellAnimationArcaneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover)"
   ]
  },
  "Shout_GOB_WolfPens_Disengage_GoblinKid": {
   "Key": "Shout_GOB_WolfPens_Disengage_GoblinKid",
   "SpellType": "Shout",
   "Parent": "Shout_Disengage_Goblin",
   "TargetConditions": "Self() and not Immobilized()"
  },
  "Shout_GOB_WolfPens_Dash_GoblinKid": {
   "Key": "Shout_GOB_WolfPens_Dash_GoblinKid",
   "SpellType": "Shout",
   "Parent": "Shout_Dash"
  },
  "Shout_GOB_WolfPens_Dash_GoblinAdult": {
   "Key": "Shout_GOB_WolfPens_Dash_GoblinAdult",
   "SpellType": "Shout",
   "Parent": "Shout_Dash"
  },
  "Shout_FOR_SpiderQueen_Enrage": {
   "Key": "Shout_FOR_SpiderQueen_Enrage",
   "SpellType": "Shout",
   "Parent": "Shout_Rage",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "ApplyStatus(FOR_SPIDERQUEEN_ENRAGE,100,-1)",
    "AI_ONLY:ApplyStatus(AI_HELPER_BUFF,100)"
   ],
   "DisplayName": "Shout_FOR_SpiderQueen_Enrage_DisplayName",
   "Description": "Shout_FOR_SpiderQueen_Enrage_Description",
   "CastEffect": [
    "VFX_Enemies_Spider_Shout_Enrage_CastFX_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Spider_Shout_Enrage_CastFX_PostProcess_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_SpiderQueenEnrage"
  },
  "Shout_FOR_Owlbear_Enrage": {
   "Key": "Shout_FOR_Owlbear_Enrage",
   "SpellType": "Shout",
   "Parent": "Shout_Rage",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "ApplyStatus(FOR_OWLBEAR_ENRAGE,100,-1)",
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_BUFF,100)"
   ],
   "DisplayName": "Shout_FOR_Owlbear_Enrage_DisplayName",
   "Description": "Shout_FOR_Owlbear_Enrage_Description",
   "CastEffect": [
    "VFX_Enemies_Owlbear_Enrage_Root_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_OwlbearEnrage"
  },
  "Shout_GOB_Ogre_Enrage": {
   "Key": "Shout_GOB_Ogre_Enrage",
   "SpellType": "Shout",
   "Parent": "Shout_Rage",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(GOB_OGRE_ENRAGE,100,-1)",
    "AI_ONLY:CAST:ApplyStatus(AI_STATUS_FAKE,100)"
   ],
   "DisplayName": "Shout_GOB_Ogre_Enrage_DisplayName",
   "Description": "Shout_GOB_Ogre_Enrage_Description",
   "CastEffect": [
    "VFX_Enemies_Ogre_Enraged_Cast_Root_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_OgreEnrage"
  },
  "Shout_FOR_Ogre_Enrage": {
   "Key": "Shout_FOR_Ogre_Enrage",
   "SpellType": "Shout",
   "Parent": "Shout_GOB_Ogre_Enrage",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(FOR_OGRE_ENRAGE,100,-1)",
    "AI_ONLY:ApplyStatus(AI_STATUS_FAKE,100,5)"
   ],
   "CastSound": "CrSpell_Cast_OgreEnrage",
   "UseCosts": "BonusActionPoint:1"
  },
  "Shout_UND_DetectThoughts_Tower_Amulet": {
   "Key": "Shout_UND_DetectThoughts_Tower_Amulet",
   "SpellType": "Shout",
   "Parent": "Shout_DetectThoughts",
   "Cooldown": "OncePerRest",
   "UseCosts": "ActionPoint:1"
  },
  "Shout_UND_FeatherFall_Tower_Boots": {
   "Key": "Shout_UND_FeatherFall_Tower_Boots",
   "SpellType": "Shout",
   "Parent": "Shout_FeatherFall",
   "UseCosts": "BonusActionPoint:1"
  },
  "Shout_DEN_Halsin_WildShape_Bear": {
   "Key": "Shout_DEN_Halsin_WildShape_Bear",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_NPC",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,3)",
    "AI_IGNORE:CAST:ApplyStatus(GOB_WolfPens_WILDSHAPE_BEAR,100,-1)"
   ]
  },
  "Shout_DEN_Halsin_Blur": {
   "Key": "Shout_DEN_Halsin_Blur",
   "SpellType": "Shout",
   "Parent": "Shout_Blur",
   "Cooldown": "OncePerCombat"
  },
  "Shout_GOB_GoblinPriest_CallForHelp": {
   "Key": "Shout_GOB_GoblinPriest_CallForHelp",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,3)"
   ],
   "TargetConditions": "Self()",
   "DisplayName": "Shout_GOB_GoblinPriest_CallForHelp_DisplayName",
   "Description": "Shout_GOB_GoblinPriest_CallForHelp_Description"
  },
  "Target_MOO_Dominate_Mindflayer": {
   "Key": "Target_MOO_Dominate_Mindflayer",
   "SpellType": "Target",
   "Parent": "Target_Rally",
   "SpellProperties": [
    "ApplyStatus(CHARMED,100,2)"
   ],
   "Icon": "unknown",
   "DisplayName": "Target_MOO_Dominate_Mindflayer_DisplayName",
   "Description": "Target_MOO_Dominate_Mindflayer_Description"
  },
  "Target_MOO_Enthrall_MindFlayer": {
   "Key": "Target_MOO_Enthrall_MindFlayer",
   "SpellType": "Target",
   "Parent": "Target_CharmPerson",
   "SpellProperties": [
    "RemoveStatus(KNOCKED_DOWN)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 3,
   "TargetConditions": "Character()",
   "DisplayName": "Target_MOO_Enthrall_MindFlayer_DisplayName",
   "TargetEffect": [
    "VFX_Spells_Cast_Damage_Control_Piercing_Cast_EnsnaringStrike_Dummy_BodyFX_01,FaceSource:Dummy_BodyFX::0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "CannotTargetItems",
    "CannotTargetTerrain"
   ]
  },
  "Target_GLO_CursedIronFlask_CaptureCreature": {
   "Key": "Target_GLO_CursedIronFlask_CaptureCreature",
   "SpellType": "Target",
   "Level": 1,
   "SpellProperties": [
    "ApplyStatus(GLO_CAPTUREDINFLASK,100,2)"
   ],
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 17)",
   "SpellSuccess": [
    "ApplyStatus(GLO_CAPTUREDINFLASK,100,10)"
   ],
   "Icon": "Spell_Enchantment_CharmPerson",
   "DisplayName": "Target_GLO_CursedIronFlask_CaptureCreature_DisplayName",
   "Description": "Target_GLO_CursedIronFlask_CaptureCreature_Description",
   "CastEffect": [
    "VFX_Spells_Cast_Arcane_Intent_Control_CharmPerson_L_Hand_01:Dummy_L_HandFX:VFX_Somatic_01:0:None::None::0:0::::",
    "VFX_Spells_Cast_Arcane_Intent_Control_CharmPerson_tmp_Root_01:Dummy_Root:VFX_Somatic_02:0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Spells_Cast_Arcane_Intent_Control_CharmPerson_Impact_Body_01:Dummy_BodyFX:Cast_VFX_03:0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare)",
    "bfbdf9fb-d793-48fd-827d-b23995c4f24a(SPL_Somatic_MimeCharm_01)"
   ],
   "SpellAnimationDivineMagic": [
    "8bb8bb70-003d-4c1d-a401-6a7479c679bf(SPL_Divine_Control_01_Prepare)",
    "bfbdf9fb-d793-48fd-827d-b23995c4f24a(SPL_Somatic_MimeCharm_01)"
   ],
   "SpellAnimationNoneMagic": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare)",
    "bfbdf9fb-d793-48fd-827d-b23995c4f24a(SPL_Somatic_MimeCharm_01)"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "CannotTargetItems",
    "CannotTargetTerrain",
    "HasHighGroundRangeExtension"
   ]
  },
  "Target_GLO_DangerousBook_SpeakWithDead": {
   "Key": "Target_GLO_DangerousBook_SpeakWithDead",
   "SpellType": "Target",
   "Parent": "Target_SpeakWithDead",
   "Cooldown": "OncePerRest",
   "UseCosts": "ActionPoint:1"
  },
  "Target_Guidance_TalismanOfSelune": {
   "Key": "Target_Guidance_TalismanOfSelune",
   "SpellType": "Target",
   "Parent": "Target_Guidance",
   "CastSelfAnimation": "efbf3ee5-7340-4b29-8ab5-113b004a8e7b(SPL_Somatic_Self_Touch_01_Cast)"
  },
  "Target_VampireBite_Astarion": {
   "Key": "Target_VampireBite_Astarion",
   "SpellType": "Target",
   "Cooldown": "OncePerShortRest",
   "TargetRadius": "1.5",
   "DeathType": "DoT",
   "Icon": "Action_VampireBite",
   "DisplayName": "Target_VampireBite_Astarion_DisplayName",
   "Description": "Target_VampireBite_Astarion_Description",
   "DescriptionParams": [
    "RegainHitPoints(2d4)",
    "DealDamage(2d4,Piercing)"
   ],
   "TooltipDamageList": [
    "RegainHitPoints(2d4)",
    "DealDamage(2d4,Piercing)"
   ],
   "PrepareEffect": [
    "VFX_Actions_Prepare_Origin_VampireBite_HandFX_01:Dummy_R_HandFX,Dummy_L_HandFX::0:None::None::0:0::::",
    "VFX_Sound_Spell_Prepare_VampireBite_Astarion_01:Dummy_Root::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Actions_Cast_Origin_VampireBite_Cast_HandFX_01:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Actions_Cast_Origin_VampireBite_Cast_BodyFX_Textkey_01:Dummy_BodyFX:VFX_Attack_01:0:None::None::0:0::::",
    "VFX_Actions_Cast_Origin_VampireBite_Cast_Root_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Actions_Cast_Origin_VampireBite_Impact_BodyFX_Textkey_01:Dummy_BodyFX:Cast:0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_VampireBite",
   "TargetSound": "Action_Impact_VampireBite",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationNoneMagic": [
    "f13da615-33ae-412e-8314-4ac4fc560dbf(CMBT_Skill_VampireBite_01_Prepare)",
    "01fe9641-f630-4ed2-8035-1186dc7a5803(CMBT_Skill_VampireBite_01_Attack)",
    "e6643712-8521-4c83-b518-1a10d61da4ef(CMBT_Skill_VampireBite_01_Recover)",
    "f28943e2-f5e6-4133-80ef-8c7c4f628920(CMBT_Skill_VampireBite_01_Loop)"
   ],
   "SpellFlags": [
    "IsMelee",
    "CannotTargetItems",
    "CannotTargetTerrain",
    "Stealth",
    "IsHarmful"
   ]
  },
  "Target_Bite_MothersLoathing": {
   "Key": "Target_Bite_MothersLoathing",
   "SpellType": "Target",
   "Parent": "Target_VampireBite_Astarion",
   "Cooldown": "OncePerTurn",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "SpellSuccess": [
    "DealDamage(2d4, Piercing)"
   ],
   "DisplayName": "Target_Bite_MothersLoathing_DisplayName",
   "Description": "Target_Bite_MothersLoathing_Description",
   "DescriptionParams": [
    "DealDamage(2d4, Piercing)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d4, Piercing)"
   ],
   "TooltipAttackSave": "MeleeUnarmedAttack",
   "UseCosts": "ActionPoint:1"
  },
  "Target__CHA": {
   "Key": "Target__CHA",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_CHA_TrueStrike_CompassSpear": {
   "Key": "Target_CHA_TrueStrike_CompassSpear",
   "SpellType": "Target",
   "Parent": "Target_TrueStrike",
   "Cooldown": "OncePerTurn"
  },
  "Target_SpeakWithDead_Amulet_CHA": {
   "Key": "Target_SpeakWithDead_Amulet_CHA",
   "SpellType": "Target",
   "Parent": "Target_SpeakWithDead",
   "Cooldown": "OncePerRest"
  },
  "Target__DEN": {
   "Key": "Target__DEN",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_DEN_DancingLights_Arabella_Locket": {
   "Key": "Target_DEN_DancingLights_Arabella_Locket",
   "SpellType": "Target",
   "Parent": "Target_DancingLights",
   "Cooldown": "OncePerTurn"
  },
  "Target_DEN_BearReward_LesserRestoration": {
   "Key": "Target_DEN_BearReward_LesserRestoration",
   "SpellType": "Target",
   "Parent": "Target_LesserRestoration",
   "Cooldown": "OncePerShortRest",
   "UseCosts": "ActionPoint:1"
  },
  "Target_DEN_Apprentice_DaggerOfShar_Spell": {
   "Key": "Target_DEN_Apprentice_DaggerOfShar_Spell",
   "SpellType": "Target",
   "Parent": "Target_Slash",
   "Cooldown": "OncePerShortRest",
   "SpellProperties": [
    "GROUND:ExecuteWeaponFunctors(MainHand)",
    " GROUND:CreateSurface(5,10,DarknessCloud)"
   ],
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "Icon": "unknown",
   "DisplayName": "Target_DEN_Apprentice_DaggerOfShar_Spell_DisplayName",
   "Description": "Target_DEN_Apprentice_DaggerOfShar_Spell_Description",
   "ExtraDescription": "Target_DEN_Apprentice_DaggerOfShar_Spell_ExtraDescription"
  },
  "Target_DEN_TheRiteOfThorns": {
   "Key": "Target_DEN_TheRiteOfThorns",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Evocation",
   "TargetRadius": 20,
   "DisplayName": "Target_DEN_TheRiteOfThorns_DisplayName",
   "Description": "Target_DEN_TheRiteOfThorns_Description",
   "TooltipStatusApply": "ApplyStatus(LIGHT,100,20)",
   "CastEffect": [
    "VFX_Spells_Cast_Intent_Utility_ShoutAoE_Impact_Root_Textkey_01:::0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_TheRiteOfThorns_L1to3",
   "SpellAnimationArcaneMagic": [
    "fa47feb5-294f-4dcd-88be-b7254b743fd6(CUST_TheRiteOfThorns_01_Cast)",
    "3adf0f0a-467c-4992-b1db-76ab5e076f2f(CUST_TheRiteOfThorns_01_Recover)",
    "bf6be5eb-5bf8-428b-a855-b054f476ef20(CUST_TheRiteOfThornsStill_01_Loop)"
   ],
   "SpellAnimationDivineMagic": [
    "fa47feb5-294f-4dcd-88be-b7254b743fd6(CUST_TheRiteOfThorns_01_Cast)",
    "3adf0f0a-467c-4992-b1db-76ab5e076f2f(CUST_TheRiteOfThorns_01_Recover)",
    "bf6be5eb-5bf8-428b-a855-b054f476ef20(CUST_TheRiteOfThornsStill_01_Loop)"
   ],
   "SpellAnimationNoneMagic": [
    "fa47feb5-294f-4dcd-88be-b7254b743fd6(CUST_TheRiteOfThorns_01_Cast)",
    "3adf0f0a-467c-4992-b1db-76ab5e076f2f(CUST_TheRiteOfThorns_01_Recover)",
    "bf6be5eb-5bf8-428b-a855-b054f476ef20(CUST_TheRiteOfThornsStill_01_Loop)"
   ],
   "MaximumTargets": 1
  },
  "Target_DEN_EnsnaringStrike_HalsinBlade": {
   "Key": "Target_DEN_EnsnaringStrike_HalsinBlade",
   "SpellType": "Target",
   "Parent": "Target_EnsnaringStrike",
   "Cooldown": "OncePerShortRest",
   "UseCosts": "ActionPoint:1"
  },
  "Target_DEN_Halsin_WildShape_Bear_Multiattack": {
   "Key": "Target_DEN_Halsin_WildShape_Bear_Multiattack",
   "SpellType": "Target",
   "Parent": "Target_Multiattack_Bear"
  },
  "Target_DEN_Halsin_CharmPerson": {
   "Key": "Target_DEN_Halsin_CharmPerson",
   "SpellType": "Target",
   "Parent": "Target_CharmPerson"
  },
  "Target_DEN_Halsin_HealingWord": {
   "Key": "Target_DEN_Halsin_HealingWord",
   "SpellType": "Target",
   "Parent": "Target_HealingWord"
  },
  "Target_DEN_Halsin_MistyStep": {
   "Key": "Target_DEN_Halsin_MistyStep",
   "SpellType": "Target",
   "Parent": "Target_MistyStep"
  },
  "Target_DEN_Halsin_RangersCompanion_Wolf": {
   "Key": "Target_DEN_Halsin_RangersCompanion_Wolf",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion_Wolf_NPC",
   "Cooldown": "OncePerCombat"
  },
  "Target_DEN_Nettie_HealingWord": {
   "Key": "Target_DEN_Nettie_HealingWord",
   "SpellType": "Target",
   "Parent": "Target_HealingWord",
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Intent_Healing_HandFX_NettieHealingWord_01,KeepRot:Dummy_L_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Healing_CastFX_01:Dummy_CastFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Healing_NettieHealingWord_CastFX_Textkey_01:Dummy_CastFX:VFX_Prepare_01:0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Healing_Root_Textkey_01:Dummy_Root:VFX_Prepare_01:0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Spells_Cast_Intent_Healing_TargetSingle_R_NettieHealingWord_HandFX_01,KeepRot:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Healing_TargetSingle_R_NettieHealingWord_HandFX_Textkey_01:Dummy_R_HandFX:Cast:0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Spells_Cast_Intent_Healing_TargetSingle_Impact_NettieHealingWord_Root_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::"
   ],
   "SpellAnimationArcaneMagic": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare)",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast)",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare)",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast)",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare)",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast)",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover)"
   ]
  },
  "Target__FOR": {
   "Key": "Target__FOR",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_FOR_Smite_Searing_DeathOfATrueSoul": {
   "Key": "Target_FOR_Smite_Searing_DeathOfATrueSoul",
   "SpellType": "Target",
   "Parent": "Target_Smite_Searing",
   "Cooldown": "OncePerShortRest",
   "UseCosts": "ActionPoint:1"
  },
  "Target_FOR_ThayanCellar_SummonQuasit": {
   "Key": "Target_FOR_ThayanCellar_SummonQuasit",
   "SpellType": "Target",
   "Parent": "Target_Summon_Quasit"
  },
  "Target_FOR_SpiderQueen_HatchEggs": {
   "Key": "Target_FOR_SpiderQueen_HatchEggs",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "AI_ONLY:TARGET:DealDamage(50,Bludgeoning)",
    "AI_IGNORE:TARGET:ApplyStatus(FOR_SPIDEREGGHATCH,100,1)",
    "AI_IGNORE:CAST:ApplyStatus(SELF, FOR_SPIDEREGGHATCH_COOLDOWN,100,2)"
   ],
   "TargetRadius": 3,
   "AreaRadius": 5,
   "Icon": "unknown",
   "DisplayName": "Target_FOR_SpiderQueen_HatchEggs_DisplayName",
   "Description": "Target_FOR_SpiderQueen_HatchEggs_Description",
   "CastEffect": [
    "VFX_Enemies_Spider_Shout_HatchEggs_CastFX_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Spider_Shout_HatchEggs_CastFX_PostProcess_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_BroodmotherCall",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare)",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic)",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack)",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover)"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "CannotTargetCharacter",
    "CannotTargetTerrain",
    "IgnoreVisionBlock"
   ],
   "MemoryCost": 0
  },
  "Target__GOB": {
   "Key": "Target__GOB",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_UNI_MistyStep_DrowCommander_Amulet": {
   "Key": "Target_UNI_MistyStep_DrowCommander_Amulet",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "SpellSchool": "Conjuration",
   "Cooldown": "OncePerShortRest",
   "SpellProperties": [
    "GROUND:TeleportSource()"
   ],
   "TargetRadius": 18,
   "Icon": "Spell_Conjuration_MistyStep",
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Intent_Utility_MistyStep_Root_01,KeepRot:Dummy_Root::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_CastFX_01:Dummy_CastFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_OverlayHands_01:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_OverlayHands_02:Dummy_L_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_EyeFX_01:Dummy_EyeFX_01::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_EyeFX_02:Dummy_EyeFX_02::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Spells_Cast_Intent_Utility_TargetJump_BodyFX_01:Dummy_Root::0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Utility_TargetJump_BodyFX_02:Dummy_BodyFX::0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Utility_Stealth_MistyStep_Root_02:Dummy_Root:VFX_Somatic_03:0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Utility_Stealth_MistyStep_Root_01:Dummy_Root:VFX_Somatic_01:0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_MistyStep_L1to3",
   "VocalComponentSound": "Vocal_Component_Teleport",
   "TargetSound": "Spell_Impact_Utility_MistyStep_L1to3",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast)",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast)",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast)",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover)"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "CannotTargetItems",
    "CannotTargetCharacter",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold"
   ],
   "MemoryCost": 1,
   "LineOfSightFlags": "AddSourceHeight"
  },
  "Target_GOB_CureWounds_SeluneAmulet": {
   "Key": "Target_GOB_CureWounds_SeluneAmulet",
   "SpellType": "Target",
   "Parent": "Target_CureWounds",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(SLEEP,100,2,,,,not SavingThrow(Ability.Constitution,10))",
    " RegainHitPoints(1d8)"
   ],
   "Icon": "unknown",
   "DisplayName": "Target_GOB_CureWounds_SeluneAmulet_DisplayName",
   "Description": "Target_GOB_CureWounds_SeluneAmulet_Description",
   "UseCosts": "ActionPoint:1"
  },
  "Target_GOB_ChickenChase_CommentatorShove": {
   "Key": "Target_GOB_ChickenChase_CommentatorShove",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellProperties": [
    "Force(5)"
   ],
   "SpellSuccess": [
    "Force(4)"
   ]
  },
  "Target_GOB_DrowCommander_Buff": {
   "Key": "Target_GOB_DrowCommander_Buff",
   "SpellType": "Target",
   "Parent": "Target_SacredFlame",
   "SpellSchool": "None",
   "TargetRadius": 12,
   "DeathType": "None",
   "Icon": "statIcons_SoulBranding",
   "DisplayName": "Target_GOB_DrowCommander_Buff_DisplayName",
   "Description": "Target_GOB_DrowCommander_Buff_Description",
   "ExtraDescription": "Target_GOB_DrowCommander_Buff_ExtraDescription",
   "TargetEffect": [
    "VFX_Enemies_Goblin_DrowCommander_Impact_RootFX_Textkey_01::VFX_Somatic_01:0:None::None::0:0::::",
    "VFX_Enemies_Goblin_DrowCommander_Impact_RootFX_Textkey_02::Cast:0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_Goblin_DrowCommander_Cast_CastFX_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Goblin_DrowCommander_Cast_CastFX_Textkey_02:Dummy_R_HandFX:VFX_Somatic_01:0:None::None::0:0::::"
   ],
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_BrandOfTheAbsolute",
   "TargetSound": "CrSpell_Impact_BrandOfTheAbsolute",
   "UseCosts": "BonusActionPoint:1",
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "CannotTargetItems",
    "CannotTargetTerrain"
   ]
  },
  "Target_GOB_DrowCommander_Bless": {
   "Key": "Target_GOB_DrowCommander_Bless",
   "SpellType": "Target",
   "Parent": "Target_Bless",
   "TargetConditions": "Character() and Ally() and not Dead() and not (not Player(context.Source) and IsConcentrating(context.Source))",
   "MaximumTargets": 4
  },
  "Target_GOB_Priestess_Telekinesis": {
   "Key": "Target_GOB_Priestess_Telekinesis",
   "SpellType": "Target",
   "Parent": "Target_HoldPerson",
   "Level": 0,
   "SpellSchool": "None",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "AI_IGNORE:TARGET:ApplyStatus(GOB_PRIESTESS_STATUE_DESTROY,100,1)",
    "AI_ONLY:CAST:ApplyStatus(SELF, AI_STATUS_FAKE,100)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 5,
   "DeathType": "None",
   "Icon": "unknown",
   "DisplayName": "Target_GOB_Priestess_Telekinesis_DisplayName",
   "Description": "Target_GOB_Priestess_Telekinesis_Description",
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_Goblin_Telekinesis_Cast_HandFX_Textkey_01:Dummy_R_HandFX:Cast:0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_Goblin_Telekinesis_Impact_Dummy_Textkey_01,FaceSource:Dummy_FX_01:VFX_Somatic_01:0:None::None::0:0::::"
   ],
   "BeamEffect": "VFX_Enemies_Goblin_Telekinesis_Beam_01:Dummy_CastFX:Dummy_FX_01:Cast::",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_GoblinTelekinesis",
   "TargetSound": "CrSpell_Impact_GoblinTelekinesis",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast)",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast)",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast)",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover)"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsEnemySpell",
    "CannotTargetTerrain",
    "IsHarmful"
   ],
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_Telekinesis_Pull": {
   "Key": "Target_GOB_Priestess_Telekinesis_Pull",
   "SpellType": "Target",
   "Parent": "Target_PsionicPull",
   "Cooldown": "None",
   "TargetConditions": "Character()",
   "Icon": "unknown",
   "DisplayName": "Target_GOB_Priestess_Telekinesis_Pull_DisplayName",
   "Description": "Target_GOB_Priestess_Telekinesis_Pull_Description",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast)",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast)",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast)",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover)"
   ],
   "VerbalIntent": "Utility"
  },
  "Target_GOB_Priestess_HealingWord": {
   "Key": "Target_GOB_Priestess_HealingWord",
   "SpellType": "Target",
   "Parent": "Target_HealingWord",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "RangeIgnoreVerticalThreshold"
   ],
   "RechargeValues": "4-6",
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_HoldPerson": {
   "Key": "Target_GOB_Priestess_HoldPerson",
   "SpellType": "Target",
   "Parent": "Target_HoldPerson",
   "Cooldown": "None",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "CannotTargetItems",
    "CannotTargetTerrain",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "RangeIgnoreVerticalThreshold"
   ],
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_ShieldOfFaith": {
   "Key": "Target_GOB_Priestess_ShieldOfFaith",
   "SpellType": "Target",
   "Parent": "Target_ShieldOfFaith",
   "TargetConditions": "Character() and not IsConcentrating(context.Source)",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "RechargeValues": "4-6",
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_Grease": {
   "Key": "Target_GOB_Priestess_Grease",
   "SpellType": "Target",
   "Parent": "Target_Grease",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "RechargeValues": "4-6",
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_ShockingGrasp": {
   "Key": "Target_GOB_Priestess_ShockingGrasp",
   "SpellType": "Target",
   "Parent": "Target_ShockingGrasp",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "RechargeValues": "3-6",
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_Shield_ShieldOfFaith": {
   "Key": "Target_GOB_Priestess_Shield_ShieldOfFaith",
   "SpellType": "Target",
   "Parent": "Target_ShieldOfFaith",
   "Cooldown": "OncePerShortRest",
   "DisplayName": "Target_GOB_Priestess_Shield_ShieldOfFaith_DisplayName",
   "Description": "Target_GOB_Priestess_Shield_ShieldOfFaith_Description",
   "UseCosts": "BonusActionPoint:1"
  },
  "Target_GOB_GoblinKing_ForceAttack": {
   "Key": "Target_GOB_GoblinKing_ForceAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "DeathType": "Physical",
   "Icon": "Action_AbsolutePower",
   "DisplayName": "Target_GOB_GoblinKing_ForceAttack_DisplayName",
   "Description": "Target_GOB_GoblinKing_ForceAttack_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Force)",
    "Distance(5)"
   ],
   "CastEffect": [
    "VFX_Enemies_Hobgoblin_ForceAttack_Cast_Weapon_Dummy_01,KeepRot:Dummy_FX_01::0:None::None::0:0::::",
    "VFX_Enemies_Hobgoblin_ForceAttack_Cast_Swoosh_CastFX_Textkey_01:Dummy_CastFX:CastSlash:0:None::None::0:0::::",
    "VFX_Enemies_Hobgoblin_ForceAttack_Cast_CastFX_Textkey_01,Detach:Dummy_CastFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Hobgoblin_ForceAttack_Cast_Root_Textkey_01,Detach:Dummy_Root:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Hobgoblin_ForceAttack_Cast_CastFX_PostProcess_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_Hobgoblin_ForceAttack_Impact_BodyFX_Textkey_01:Dummy_BodyFX:Cast:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_BlindFury",
   "TargetSound": "CrSpell_Impact_BlindFury",
   "SpellAnimationArcaneMagic": [
    "d11b68a0-5c5c-430f-a033-90ab91e04525(CMBT_Skill_Trip_01_Prepare)",
    "8c5b6452-a6eb-44f3-8830-f8e1a06678ba(CMBT_Skill_Trip_01_Antic)",
    "412f122d-0773-4a08-bf1c-65749e543fb6(CMBT_Skill_Trip_01_Attack)",
    "87c14b90-fb0a-4cd3-8364-b38c3204dae4(CMBT_Skill_Trip_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "d11b68a0-5c5c-430f-a033-90ab91e04525(CMBT_Skill_Trip_01_Prepare)",
    "8c5b6452-a6eb-44f3-8830-f8e1a06678ba(CMBT_Skill_Trip_01_Antic)",
    "412f122d-0773-4a08-bf1c-65749e543fb6(CMBT_Skill_Trip_01_Attack)",
    "87c14b90-fb0a-4cd3-8364-b38c3204dae4(CMBT_Skill_Trip_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "d11b68a0-5c5c-430f-a033-90ab91e04525(CMBT_Skill_Trip_01_Prepare)",
    "8c5b6452-a6eb-44f3-8830-f8e1a06678ba(CMBT_Skill_Trip_01_Antic)",
    "412f122d-0773-4a08-bf1c-65749e543fb6(CMBT_Skill_Trip_01_Attack)",
    "87c14b90-fb0a-4cd3-8364-b38c3204dae4(CMBT_Skill_Trip_01_Recover)"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsAttack",
    "IsEnemySpell",
    "AddFallDamageOnLand"
   ]
  },
  "Target_GOB_GoblinKing_ForceAttack_WeaponAttack": {
   "Key": "Target_GOB_GoblinKing_ForceAttack_WeaponAttack",
   "SpellType": "Target",
   "Parent": "Target_GOB_GoblinKing_ForceAttack",
   "Cooldown": "OncePerShortRest",
   "AIFlags": "CanNotUse",
   "CastSound": "CrSpell_Cast_BlindFury",
   "TargetSound": "CrSpell_Impact_BlindFury",
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsHarmful",
    "CanDualWield",
    "IsDefaultWeaponAction"
   ]
  },
  "Target_GOB_SpiderNest_ShortShove": {
   "Key": "Target_GOB_SpiderNest_ShortShove",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellProperties": [
    "Force(3)"
   ],
   "Icon": "unknown",
   "UseCosts": "ActionPoint:1"
  },
  "Target_GOB_WolfPens_HalsinCureWounds": {
   "Key": "Target_GOB_WolfPens_HalsinCureWounds",
   "SpellType": "Target",
   "Parent": "Target_CureWounds"
  },
  "Target_GOB_PainPriest_WeaponAttack": {
   "Key": "Target_GOB_PainPriest_WeaponAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "SpellProperties": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType, Nonmagical, Nonlethal)"
   ],
   "DisplayName": "Target_GOB_PainPriest_WeaponAttack_DisplayName"
  },
  "Target_GOB_PainPriest_ChillTouch": {
   "Key": "Target_GOB_PainPriest_ChillTouch",
   "SpellType": "Target",
   "Parent": "Target_ChillTouch",
   "SpellProperties": [
    "ApplyStatus(CHILL_TOUCH,100,1)",
    " DealDamage(1d6, Necrotic, Magical, Nonlethal)"
   ]
  },
  "Target_GOB_VoloGuard_Shove": {
   "Key": "Target_GOB_VoloGuard_Shove",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellProperties": [
    "Force(2)"
   ]
  },
  "Target_GOB_AnimalFriendship_Pens_BeastmasterAmulet": {
   "Key": "Target_GOB_AnimalFriendship_Pens_BeastmasterAmulet",
   "SpellType": "Target",
   "Parent": "Target_AnimalFriendship",
   "Cooldown": "OncePerRest",
   "UseCosts": "ActionPoint:1"
  },
  "Target__HAG": {
   "Key": "Target__HAG",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_HAG_ClearIllusion": {
   "Key": "Target_HAG_ClearIllusion",
   "SpellType": "Target",
   "Parent": "Target_Mending",
   "SpellProperties": [
    "ApplyStatus(HAG_MASK_ILLUSION,100,-1)"
   ],
   "TargetRadius": 10,
   "AreaRadius": 0,
   "DisplayName": "Target_HAG_ClearIllusion_DisplayName",
   "TargetEffect": [
    "VFX_Spells_Cast_Damage_Control_Piercing_Cast_EnsnaringStrike_Dummy_BodyFX_01,FaceSource:Dummy_BodyFX::0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "AiCalculationSpellOverride": "Quest_HAG_ClearIllusion_Override",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "a4da186a-0872-461e-ae5e-93d5b32b9bef(SPL_Somatic_Circle_1HandCW_01_Cast)"
   ],
   "SpellAnimationDivineMagic": [
    "a4da186a-0872-461e-ae5e-93d5b32b9bef(SPL_Somatic_Circle_1HandCW_01_Cast)"
   ],
   "SpellAnimationNoneMagic": [
    "a4da186a-0872-461e-ae5e-93d5b32b9bef(SPL_Somatic_Circle_1HandCW_01_Cast)"
   ],
   "SpellFlags": [
    "CannotTargetCharacter",
    "CannotTargetTerrain"
   ]
  },
  "Target_HAG_SinisterStrike": {
   "Key": "Target_HAG_SinisterStrike",
   "SpellType": "Target",
   "Parent": "Target_Claws_GreenHag",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "DisplayName": "Target_HAG_SinisterStrike_DisplayName",
   "Description": "Target_HAG_SinisterStrike_Description",
   "CastEffect": [
    "VFX_Enemies_Hag_SinisterStrike_Cast_CastFX_01,Detach:Dummy_CastFX:CastSlash:0:None::None::0:0::::",
    "VFX_Enemies_Hag_SinisterStrike_Cast_HandFX_01:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Enemies_Hag_SinisterStrike_Cast_HandFX_PostProcess_01:Dummy_R_HandFX::0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_Hag_SinisterStrike_Impact_BodyFX_01,FaceSource,Detach:Dummy_BodyFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Hag_SinisterStrike_Impact_BodyFX_PostProcess_01,FaceSource,Detach:Dummy_BodyFX:Cast:0:None::None::0:0::::"
   ],
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ]
  },
  "Target_HAG_Hagspawn_SummonHusband": {
   "Key": "Target_HAG_Hagspawn_SummonHusband",
   "SpellType": "Target",
   "TargetRadius": 18,
   "Icon": "unknown",
   "DisplayName": "Target_HAG_Hagspawn_SummonHusband_DisplayName",
   "Description": "Target_HAG_Hagspawn_SummonHusband_Description",
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare)",
    "60f073b7-1e43-47a5-96c7-53376057e59a(SPL_Arcane_Summon_01_Cast)",
    "f2137644-4bb4-4ed3-ab1d-d149719fbb53(SPL_Arcane_Summon_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "8f63aefe-2849-4633-b20e-e35563312d9c(SPL_Divine_Summon_01_Prepare)",
    "84591a79-c83d-4d47-bbec-c4fe46e96566(SPL_Divine_Summon_01_Cast)",
    "27b21551-6403-4f80-9871-25772ae6dd6a(SPL_Divine_Summon_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "9745d2e5-2519-411a-947f-7545e0095d85(SPL_Wand_01_Prepare)",
    "82842aef-9961-4566-b854-113470749e4e(SPL_Wand_01_Cast)",
    "2f4e48ee-3349-42ff-bcd2-6b32df5915ab(SPL_Wand_01_Recover)"
   ],
   "VerbalIntent": "Summon",
   "SpellFlags": [
    "CannotTargetItems",
    "CannotTargetCharacter"
   ]
  },
  "Target_HAG_ViciousMockery": {
   "Key": "Target_HAG_ViciousMockery",
   "SpellType": "Target",
   "Parent": "Target_ViciousMockery",
   "TargetRadius": 26,
   "SpellSuccess": [
    "DealDamage(2d4,Psychic)",
    "ApplyStatus(VICIOUSMOCKERY,100,2)"
   ],
   "TargetConditions": "Character() and not Dead() and Enemy()",
   "DescriptionParams": [
    "DealDamage(2d4,Psychic)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d4,Psychic)"
   ],
   "CastEffect": [
    "VFX_Enemies_Hag_ViciousMockery_Cast_HandFX_Textkey_01,Detach:Dummy_CastFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Hag_ViciousMockery_Cast_HandFX_01:Dummy_R_HandFX:VFX_Attack_01:0:None::None::0:0::::",
    "VFX_Enemies_Hag_ViciousMockery_Cast_HandFX_PostProcess_01:Dummy_R_HandFX:VFX_Attack_01:0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_Hag_ViciousMockery_Impact_HeadFX_Textkey_01:Dummy_HeadFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Hag_ViciousMockery_Impact_PostProcess_HeadFX_Textkey_01:Dummy_HeadFX:Cast:0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_ViciousMockery",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_ViciousMockery",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "41050809-ab26-46eb-9e15-ece46ade7937(SPL_ViciousMockery_01_Prepare)",
    "6d2407bd-68ca-429f-8867-02ee5f3a1127(SPL_ViciousMockery_01_Cast)",
    "182c45eb-3716-457c-9aa2-3f36271253ba(SPL_ViciousMockery_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "41050809-ab26-46eb-9e15-ece46ade7937(SPL_ViciousMockery_01_Prepare)",
    "6d2407bd-68ca-429f-8867-02ee5f3a1127(SPL_ViciousMockery_01_Cast)",
    "182c45eb-3716-457c-9aa2-3f36271253ba(SPL_ViciousMockery_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "41050809-ab26-46eb-9e15-ece46ade7937(SPL_ViciousMockery_01_Prepare)",
    "6d2407bd-68ca-429f-8867-02ee5f3a1127(SPL_ViciousMockery_01_Cast)",
    "182c45eb-3716-457c-9aa2-3f36271253ba(SPL_ViciousMockery_01_Recover)"
   ],
   "MemoryCost": 0
  },
  "Target_HAG_HoldPerson": {
   "Key": "Target_HAG_HoldPerson",
   "SpellType": "Target",
   "Parent": "Target_HoldPerson",
   "Level": 0,
   "TargetRadius": 26,
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_Hag_HoldPerson_Cast_HandFX_01,KeepRot:Dummy_R_HandFX,Dummy_L_HandFX::0:None::None::0:0::::",
    "VFX_Enemies_Hag_HoldPerson_Cast_CastFX_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Hag_HoldPerson_Cast_CastFX_PostProcess_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_Hag_HoldPerson_Impact_Root_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Hag_HoldPerson_Impact_BodyFX_Textkey_01,Detach:Dummy_BodyFX:Cast:0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Control_TargetSingle_Impact_EyeFX_Textkey_01:Dummy_EyeFX_01,Dummy_EyeFX_02:Cast:0:None::None::0:0::::",
    "VFX_Enemies_Hag_HoldPerson_Impact_BodyFX_PostProcess_Textkey_01,Detach:Dummy_BodyFX:Cast:0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "3c809c4e-24da-4fa6-b912-6ff108bfe5d7(SPL_HoldPerson_01_Prepare)",
    "496cec90-1c0c-49ae-9f68-32870b7e1dbe(SPL_HoldPerson_01_Cast)",
    "812a2026-61c7-4d46-b607-b5b71d34062c(SPL_HoldPerson_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "3c809c4e-24da-4fa6-b912-6ff108bfe5d7(SPL_HoldPerson_01_Prepare)",
    "496cec90-1c0c-49ae-9f68-32870b7e1dbe(SPL_HoldPerson_01_Cast)",
    "812a2026-61c7-4d46-b607-b5b71d34062c(SPL_HoldPerson_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "3c809c4e-24da-4fa6-b912-6ff108bfe5d7(SPL_HoldPerson_01_Prepare)",
    "496cec90-1c0c-49ae-9f68-32870b7e1dbe(SPL_HoldPerson_01_Cast)",
    "812a2026-61c7-4d46-b607-b5b71d34062c(SPL_HoldPerson_01_Recover)"
   ],
   "RechargeValues": "5-6",
   "MemoryCost": 0
  },
  "Target_HAG_MaskOfTerror": {
   "Key": "Target_HAG_MaskOfTerror",
   "SpellType": "Target",
   "Parent": "Target_ViciousMockery",
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 16)",
   "SpellFail": [
    "DealDamage(1d4,Psychic)"
   ],
   "DisplayName": "Target_HAG_MaskOfTerror_DisplayName",
   "Description": "Target_HAG_MaskOfTerror_Description",
   "ExtraDescription": "Target_HAG_MaskOfTerror_ExtraDescription",
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_MaskedServant_Terror_Target_Cast_CastFX_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Terror_Target_Cast_MouthFX_01:Dummy_MouthFX::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Terror_Target_Cast_EyeFX_01:Dummy_EyeFX_01::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Terror_Target_Cast_EyeFX_02:Dummy_EyeFX_02::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Terror_Target_Cast_HeadFX_01:Socket_HeadFX::0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_MaskedServant_Terror_Target_Impact_Head_Textkey_01:Socket_HeadFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Terror_Target_Impact_HeadFX_PostProcess_Textkey_01:Socket_HeadFX:Cast:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_MaskOfTerror",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_MaskOfTerror",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare)",
    "4148823a-6dbc-4692-a8ff-71520315a10f(SPL_Somatic_Target_Mute_01_Cast)",
    "1b8cdb9d-6f8e-4161-901c-1fd7a7787c7c(SPL_Somatic_Target_Mute_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare)",
    "4148823a-6dbc-4692-a8ff-71520315a10f(SPL_Somatic_Target_Mute_01_Cast)",
    "1b8cdb9d-6f8e-4161-901c-1fd7a7787c7c(SPL_Somatic_Target_Mute_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare)",
    "4148823a-6dbc-4692-a8ff-71520315a10f(SPL_Somatic_Target_Mute_01_Cast)",
    "1b8cdb9d-6f8e-4161-901c-1fd7a7787c7c(SPL_Somatic_Target_Mute_01_Recover)"
   ]
  },
  "Target_HAG_MaskOfRegret": {
   "Key": "Target_HAG_MaskOfRegret",
   "SpellType": "Target",
   "Parent": "Target_Bane",
   "TargetRadius": 16,
   "AreaRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Charisma, 14)",
   "DisplayName": "Target_HAG_MaskOfRegret_DisplayName",
   "Description": "Target_HAG_MaskOfRegret_Description",
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Damage_Psychic_R_HandFX_01:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Damage_Psychic_R_HandFX_Textkey_01:Dummy_R_HandFX:VFX_Prepare_01:0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_MaskedServant_Regret_TargetAoE_Cast_HandFX_01:Dummy_L_HandFX,Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Regret_Target_Cast_EyeFX_01:Dummy_EyeFX_01::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Regret_Target_Cast_EyeFX_02:Dummy_EyeFX_02::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Regret_Target_Cast_MouthFX_01:Dummy_MouthFX::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Regret_Target_Cast_HeadFX_01:Socket_HeadFX::0:None::None::0:0::::"
   ],
   "PositionEffect": [
    "VFX_Enemies_MaskedServant_Regret_TargetAoE_Cast_Position_01:::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Regret_TargetAoE_Cast_Position_Textkey_01::Cast:0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_MaskedServant_Regret_TargetAoE_Impact_HeadFX_Textkey_01:Socket_HeadFX:Cast:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_MaskOfRegret",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_MaskOfRegret",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare)",
    "9d86c202-31a5-4ba3-ae60-ec4fbb425665(SPL_Somatic_Aoe_Widen_01_Cast)",
    "a4112e22-e36f-44ff-828f-81252360da53(SPL_Somatic_Aoe_Widen_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare)",
    "9d86c202-31a5-4ba3-ae60-ec4fbb425665(SPL_Somatic_Aoe_Widen_01_Cast)",
    "a4112e22-e36f-44ff-828f-81252360da53(SPL_Somatic_Aoe_Widen_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare)",
    "9d86c202-31a5-4ba3-ae60-ec4fbb425665(SPL_Somatic_Aoe_Widen_01_Cast)",
    "a4112e22-e36f-44ff-828f-81252360da53(SPL_Somatic_Aoe_Widen_01_Recover)"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "HasVerbalComponent",
    "IsSpell",
    "IsHarmful"
   ],
   "MaximumTargets": 3
  },
  "Target_HAG_MaskOfVengeance": {
   "Key": "Target_HAG_MaskOfVengeance",
   "SpellType": "Target",
   "Parent": "Target_Smash",
   "DisplayName": "Target_HAG_MaskOfVengeance_DisplayName",
   "Description": "Target_HAG_MaskOfVengeance_Description",
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_MaskedServant_Vengeance_Target_Cast_Root_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Vengeance_Target_Cast_Weapon_01:Dummy_FX_01::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Vengeance_Target_Cast_MouthFX_01:Dummy_MouthFX::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Vengeance_Target_Cast_EyeFX_01:Dummy_EyeFX_01::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Vengeance_Target_Cast_EyeFX_02:Dummy_EyeFX_02::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Vengeance_Target_Cast_HeadFX_01:Socket_HeadFX::0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_MaskedServant_Vengeance_Target_Impact_Head_Textkey_01:Socket_HeadFX:Cast:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_MaskOfVengence",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_MaskOfVengence",
   "UseCosts": "ActionPoint:1"
  },
  "Target_HAG_MaskOfServitude": {
   "Key": "Target_HAG_MaskOfServitude",
   "SpellType": "Target",
   "Parent": "Target_CureWounds",
   "SpellProperties": [
    "ApplyStatus(HAG_MASKOFSERVITUDE,100,2)"
   ],
   "TargetRadius": 18,
   "DisplayName": "Target_HAG_MaskOfServitude_DisplayName",
   "Description": "Target_HAG_MaskOfServitude_Description",
   "PrepareEffect": [
    "VFX_Debug_EmptyEffect_01:::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Enemies_MaskedServant_Servitude_Target_Cast_HandFX_01,KeepRot:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Servitude_Target_Cast_HandFX_Textkey_01,Detach:Dummy_R_HandFX:Cast:0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Servitude_Target_Cast_EyeFX_01:Dummy_EyeFX_01::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Servitude_Target_Cast_EyeFX_02:Dummy_EyeFX_02::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Servitude_Target_Cast_MouthFX_01:Dummy_MouthFX::0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Servitude_Target_Cast_HeadFX_01:Socket_HeadFX::0:None::None::0:0::::"
   ],
   "TargetEffect": [
    "VFX_Enemies_MaskedServant_Servitude_Target_Impact_Root_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::",
    "VFX_Enemies_MaskedServant_Servitude_Target_Impact_BodyFX_Textkey_01:Dummy_BodyFX:Cast:0:None::None::0:0::::"
   ],
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_MaskOfServitude",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_MaskOfServitude",
   "UseCosts": "ActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare)",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast)",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare)",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast)",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare)",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast)",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover)"
   ]
  },
  "Target_HAG_MudMephit_Summon": {
   "Key": "Target_HAG_MudMephit_Summon",
   "SpellType": "Target",
   "Parent": "Target_Summon_MudMephit",
   "SpellProperties": [
    "AI_IGNORE:GROUND:Spawn(16144541-3049-48f0-b80f-fd978bf1134a, -1,,)",
    "AI_IGNORE:GROUND:CreateSurface(1, -1, None)",
    "AI_ONLY:GROUND:CreateExplosion(Projectile_AiHelper_Summon_Weak)"
   ]
  },
  "Target_HAG_ProtectionFromEvilAndGood_Amulet": {
   "Key": "Target_HAG_ProtectionFromEvilAndGood_Amulet",
   "SpellType": "Target",
   "Parent": "Target_ProtectionFromEvilAndGood",
   "Cooldown": "OncePerShortRest",
   "ExtraDescription": "Target_HAG_ProtectionFromEvilAndGood_Amulet_ExtraDescription",
   "UseCosts": "ActionPoint:1"
  },
  "Target__PLA": {
   "Key": "Target__PLA",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_PLA_ZhentDungeon_Punch": {
   "Key": "Target_PLA_ZhentDungeon_Punch",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "SpellProperties": [
    "DealDamage(1, Bludgeoning, Nonmagical, Nonlethal)"
   ]
  },
  "Target_PLA_ShieldOfFaith_SwordOfJustice": {
   "Key": "Target_PLA_ShieldOfFaith_SwordOfJustice",
   "SpellType": "Target",
   "Parent": "Target_ShieldOfFaith",
   "Cooldown": "OncePerCombat",
   "DisplayName": "Target_PLA_ShieldOfFaith_SwordOfJustice_DisplayName",
   "UseCosts": "BonusActionPoint:1"
  },
  "Target__UND": {
   "Key": "Target__UND",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_UNI_MistyStep_NightWalkers": {
   "Key": "Target_UNI_MistyStep_NightWalkers",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "SpellSchool": "Conjuration",
   "Cooldown": "OncePerShortRest",
   "SpellProperties": [
    "GROUND:TeleportSource()"
   ],
   "TargetRadius": 18,
   "Icon": "Spell_Conjuration_MistyStep",
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Intent_Utility_MistyStep_Root_01,KeepRot:Dummy_Root::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_CastFX_01:Dummy_CastFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_OverlayHands_01:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_OverlayHands_02:Dummy_L_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_EyeFX_01:Dummy_EyeFX_01::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Utility_EyeFX_02:Dummy_EyeFX_02::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Spells_Cast_Intent_Utility_TargetJump_BodyFX_01:Dummy_Root::0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Utility_TargetJump_BodyFX_02:Dummy_BodyFX::0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Utility_Stealth_MistyStep_Root_02:Dummy_Root:VFX_Somatic_03:0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Utility_Stealth_MistyStep_Root_01:Dummy_Root:VFX_Somatic_01:0:None::None::0:0::::"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_MistyStep_L1to3",
   "VocalComponentSound": "Vocal_Component_Teleport",
   "TargetSound": "Spell_Impact_Utility_MistyStep_L1to3",
   "UseCosts": "BonusActionPoint:1",
   "SpellAnimationArcaneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast)",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast)",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare)",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast)",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover)"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "CannotTargetItems",
    "CannotTargetCharacter",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold"
   ],
   "MemoryCost": 1,
   "LineOfSightFlags": "AddSourceHeight"
  },
  "Target_UND_LoneDuergar_InflictWounds": {
   "Key": "Target_UND_LoneDuergar_InflictWounds",
   "SpellType": "Target",
   "Parent": "Target_InflictWounds",
   "RechargeValues": "3-6"
  },
  "Target_UND_LoneDuergar_AnimateDead": {
   "Key": "Target_UND_LoneDuergar_AnimateDead",
   "SpellType": "Target",
   "Parent": "Target_AnimateDead_NPC",
   "Cooldown": "OncePerCombat",
   "TargetRadius": 22,
   "AreaRadius": 8,
   "TargetConditions": "not Character() and not Item()",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "CannotTargetItems"
   ],
   "MaximumTargets": 5
  },
  "Target_UND_MushroomHunter_MistyStep": {
   "Key": "Target_UND_MushroomHunter_MistyStep",
   "SpellType": "Target",
   "Parent": "Target_MistyStep"
  },
  "Target_UND_Spectator_UnpetrifyingRay": {
   "Key": "Target_UND_Spectator_UnpetrifyingRay",
   "SpellType": "Target",
   "Parent": "Target_ParalyzingRay_Spectator",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(AI_STATUS_FAKE,100)",
    "RemoveStatus(UND_SPECTATOR_PETRIFIED_001)",
    "RemoveStatus(UND_SPECTATOR_PETRIFIED_002)",
    "RemoveStatus(UND_SPECTATOR_PETRIFIED_003)",
    "RemoveStatus(UND_SPECTATOR_PETRIFIED_004)",
    "RemoveStatus(UND_SPECTATOR_PETRIFIED_005)",
    "RemoveStatus(PETRIFIED)",
    "ApplyStatus(UND_SPECTATOR_CHARMED,100,-1)"
   ],
   "TargetRadius": 18,
   "DisplayName": "Target_UND_Spectator_UnpetrifyingRay_DisplayName",
   "Description": "Target_UND_Spectator_UnpetrifyingRay_Description",
   "BeamEffect": "VFX_Beams_Control_Spectator_UnpetrifyingRay_Beam_01,Detach:Eye_M:Dummy_BodyFX:Cast:BEH_L04:",
   "CastEffect": [
    "VFX_Beams_Control_Spectator_UnpetrifyingRay_Prepare_01:Eye_M::0:None::None::0:0::::BEH_L04"
   ],
   "HitEffect": "VFX_Beams_Control_Spectator_UnpetrifyingRay_Impact_01,FaceSource,Detach:Dummy_BodyFX::0:None::None::0:0::::",
   "CastSound": "CrSpell_Cast_RayUnpetrifying",
   "TargetSound": "CrSpell_Impact_RayUnpetrifying",
   "VerbalIntent": "Healing"
  },
  "Target_UND_Spectator_Bite": {
   "Key": "Target_UND_Spectator_Bite",
   "SpellType": "Target",
   "Parent": "Target_Bite_Spectator"
  },
  "Target_UND_Spectator_Ray_Paralyzing": {
   "Key": "Target_UND_Spectator_Ray_Paralyzing",
   "SpellType": "Target",
   "Parent": "Target_ParalyzingRay_Spectator"
  },
  "Target_UND_Spectator_Ray_Wounding": {
   "Key": "Target_UND_Spectator_Ray_Wounding",
   "SpellType": "Target",
   "Parent": "Target_WoundingRay_Spectator"
  },
  "Target_UND_Spectator_Ray_Fear": {
   "Key": "Target_UND_Spectator_Ray_Fear",
   "SpellType": "Target",
   "Parent": "Target_FearRay_Spectator"
  },
  "Target_UND_PetrifiedDrow_HealingWord": {
   "Key": "Target_UND_PetrifiedDrow_HealingWord",
   "SpellType": "Target",
   "Parent": "Target_HealingWord"
  },
  "Target_UND_Myconid_UseBarrelStalk": {
   "Key": "Target_UND_Myconid_UseBarrelStalk",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_HELPER_BUFF,100,3)"
   ],
   "TargetRadius": "1.5",
   "DisplayName": "Target_UND_Myconid_UseBarrelStalk_DisplayName",
   "Description": "Target_UND_Myconid_UseBarrelStalk_Description",
   "DescriptionParams": [
    "DealDamage(3d4,Poison)"
   ],
   "UseCosts": "BonusActionPoint:1"
  },
  "Target_UND_DeadInTheWater_Shove": {
   "Key": "Target_UND_DeadInTheWater_Shove",
   "SpellType": "Target",
   "Parent": "Target_Shove"
  },
  "Target_UND_MyconidSovereign_FakeAnimatingSpores": {
   "Key": "Target_UND_MyconidSovereign_FakeAnimatingSpores",
   "SpellType": "Target",
   "Parent": "Target_AnimatingSpores"
  },
  "Target_UND_Light_Tower_Ring": {
   "Key": "Target_UND_Light_Tower_Ring",
   "SpellType": "Target",
   "Parent": "Target_Light",
   "Cooldown": "OncePerTurn"
  },
  "Target_UND_Bless_StaffBlessMystra": {
   "Key": "Target_UND_Bless_StaffBlessMystra",
   "SpellType": "Target",
   "Parent": "Target_Bless",
   "Cooldown": "OncePerRest",
   "UseCosts": "ActionPoint:1"
  },
  "Target_UND_Smite_Searing_DuergarBlacksmithHammer": {
   "Key": "Target_UND_Smite_Searing_DuergarBlacksmithHammer",
   "SpellType": "Target",
   "Parent": "Target_Smite_Searing",
   "Cooldown": "OncePerRest",
   "UseCosts": "ActionPoint:1"
  },
  "Target__SHA": {
   "Key": "Target__SHA",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_SHA_Nightsong_Shadowgrasp": {
   "Key": "Target_SHA_Nightsong_Shadowgrasp",
   "SpellType": "Target",
   "Parent": "Target_HoldPerson",
   "SpellRoll": "not SavingThrow(Ability.Constitution, 16)",
   "SpellSuccess": [
    "ApplyStatus(SHA_NIGHTSONG_SHADOWGRASP,100,10)"
   ],
   "Icon": "unknown",
   "DisplayName": "Target_SHA_Nightsong_Shadowgrasp_DisplayName",
   "Description": "Target_SHA_Nightsong_Shadowgrasp_Description",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "MemoryCost": 0
  },
  "Target_SHA_Nightsong_EmergePush": {
   "Key": "Target_SHA_Nightsong_EmergePush",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellProperties": [
    "Force(1)"
   ],
   "SpellFlags": [
    "IsMelee",
    "CannotTargetItems",
    "CannotTargetTerrain"
   ]
  },
  "Target_SHA_Nightsong_LoomingDespair": {
   "Key": "Target_SHA_Nightsong_LoomingDespair",
   "SpellType": "Target",
   "Parent": "Target_CreateWater",
   "Icon": "unknown",
   "Description": "Target_SHA_Nightsong_LoomingDespair_Description",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "MemoryCost": 0
  },
  "Target_SHA_Nightsong_DarkWhispers": {
   "Key": "Target_SHA_Nightsong_DarkWhispers",
   "SpellType": "Target",
   "Parent": "Target_Summon_MudMephit",
   "SpellProperties": [
    "AI_IGNORE:GROUND:Summon(122ce989-2603-4bf4-a3ee-8b2513c39d5e, -1,,,)",
    "AI_ONLY:CAST:ApplyStatus(AI_STATUS_FAKE,100)"
   ],
   "TargetConditions": "not Character() and not Item()",
   "Icon": "unknown",
   "DisplayName": "Target_SHA_Nightsong_DarkWhispers_DisplayName",
   "Description": "Target_SHA_Nightsong_DarkWhispers_Description",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "MemoryCost": 0
  },
  "Target_SHA_Nightsong_Darkness": {
   "Key": "Target_SHA_Nightsong_Darkness",
   "SpellType": "Target",
   "Parent": "Target_Darkness",
   "Icon": "unknown",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "MemoryCost": 0
  },
  "Target_SHA_Nightsong_ShadowStep": {
   "Key": "Target_SHA_Nightsong_ShadowStep",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "SpellProperties": [
    "GROUND:ApplyStatus(SELF,SHA_NIGHTSONG_SHADOWSTEP_ADVANTAGE,100,1)",
    "GROUND:TeleportSource()"
   ],
   "Icon": "unknown",
   "DisplayName": "Target_SHA_Nightsong_ShadowStep_DisplayName",
   "Description": "Target_SHA_Nightsong_ShadowStep_Description",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "MemoryCost": 0
  },
  "Target_SHA_Nightsong_ChillTouch": {
   "Key": "Target_SHA_Nightsong_ChillTouch",
   "SpellType": "Target",
   "Parent": "Target_ChillTouch",
   "Icon": "unknown",
   "UseCosts": "ActionPoint:1",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "MemoryCost": 0
  },
  "Target__OUT": {
   "Key": "Target__OUT",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_OUT_PlagueHouse_LesserRestoration": {
   "Key": "Target_OUT_PlagueHouse_LesserRestoration",
   "SpellType": "Target",
   "Parent": "Target_LesserRestoration"
  },
  "Teleportation_HAG_HusbandResurrection": {
   "Key": "Teleportation_HAG_HusbandResurrection",
   "SpellType": "Teleportation",
   "Parent": "Teleportation_Resurrection",
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Intent_Healing_HusbandResurrection_Dummy_R_Hand_01:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Healing_HusbandResurrection_Dummy_R_Hand_Textkey_01:Dummy_R_HandFX:VFX_Prepare_01:0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Intent_Healing_HusbandResurrection_Wand_Dummy_R_Hand_01:Dummy_R_HandFX::0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Spells_Cast_Intent_Healing_TargetSingle_HusbandResurrection_R_HandFX_Textkey_01:Dummy_R_HandFX:Cast:0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Healing_TargetSingle_HusbandResurrection_Wand_R_HandFX_01:Dummy_R_HandFX:Cast:0:None::None::0:0::::",
    "VFX_Spells_Cast_Intent_Healing_TargetSingle_HusbandResurrection_Wand_R_HandFX_01:Dummy_R_HandFX::0:None::None::0:0::::"
   ],
   "DisappearEffect": "VFX_Spells_Cast_Intent_Healing_TargetSingle_HusbandResurrection_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::",
   "SpellAnimationArcaneMagic": [
    "9745d2e5-2519-411a-947f-7545e0095d85(SPL_Wand_01_Prepare)",
    "82842aef-9961-4566-b854-113470749e4e(SPL_Wand_01_Cast)",
    "2f4e48ee-3349-42ff-bcd2-6b32df5915ab(SPL_Wand_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "9745d2e5-2519-411a-947f-7545e0095d85(SPL_Wand_01_Prepare)",
    "82842aef-9961-4566-b854-113470749e4e(SPL_Wand_01_Cast)",
    "2f4e48ee-3349-42ff-bcd2-6b32df5915ab(SPL_Wand_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "9745d2e5-2519-411a-947f-7545e0095d85(SPL_Wand_01_Prepare)",
    "82842aef-9961-4566-b854-113470749e4e(SPL_Wand_01_Cast)",
    "2f4e48ee-3349-42ff-bcd2-6b32df5915ab(SPL_Wand_01_Recover)"
   ]
  },
  "Throw_GOB_Ogre_Throw": {
   "Key": "Throw_GOB_Ogre_Throw",
   "SpellType": "Throw",
   "Parent": "Throw_Throw",
   "SpellProperties": [
    "GROUND:DealDamage(Throw)",
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_HELPER_BUFF,100,4)",
    "AI_IGNORE:CAST:ApplyStatus(SELF,AI_HELPER_BLOCKRESOURCES,100,1)"
   ],
   "TargetRadius": 29,
   "AreaRadius": 2,
   "Template": "0e31507d-ba54-4301-80f9-92cace5c9820",
   "SpellFlags": [
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "HasHighGroundRangeExtension",
    "IgnoreSilence",
    "CannotTargetTerrain"
   ],
   "ThrowableTargetConditions": "Item()"
  },
  "Throw_GOB_Ogre_Throw_TargetA": {
   "Key": "Throw_GOB_Ogre_Throw_TargetA",
   "SpellType": "Throw",
   "Parent": "Throw_GOB_Ogre_Throw",
   "SpellProperties": [
    "GROUND:DealDamage(Throw)",
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_HELPER_BUFF,100,5)"
   ],
   "ThrowableTargetConditions": "Item()"
  },
  "Throw_GOB_Ogre_Throw_TargetB": {
   "Key": "Throw_GOB_Ogre_Throw_TargetB",
   "SpellType": "Throw",
   "Parent": "Throw_GOB_Ogre_Throw",
   "SpellProperties": [
    "GROUND:DealDamage(Throw)",
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_HELPER_BUFF,100,4)",
    "AI_IGNORE:CAST:ApplyStatus(SELF,AI_HELPER_BLOCKRESOURCES,100,1)"
   ],
   "UseCosts": "BonusActionPoint:1",
   "ThrowableTargetConditions": "Item()"
  },
  "Zone_DEN_Prodigy_Thunderwave": {
   "Key": "Zone_DEN_Prodigy_Thunderwave",
   "SpellType": "Zone",
   "Parent": "Zone_Thunderwave"
  },
  "Zone_DEN_ColorSpray_HarpyMeal_NestRing": {
   "Key": "Zone_DEN_ColorSpray_HarpyMeal_NestRing",
   "SpellType": "Zone",
   "Parent": "Zone_ColorSpray",
   "Cooldown": "OncePerCombat",
   "UseCosts": "ActionPoint:1"
  },
  "Zone_PLA_Chokepoint_DragonBreath": {
   "Key": "Zone_PLA_Chokepoint_DragonBreath",
   "SpellType": "Zone",
   "Parent": "Zone_Thunderwave",
   "SpellProperties": [
    "DealDamage(12d6,Fire)",
    "ApplyStatus(BURNING,100,2)"
   ],
   "DeathType": "Lifetime",
   "SurfaceType": "Fire",
   "Range": 20
  },
  "Zone_UNI_SuperheavyWeapon_Spell": {
   "Key": "Zone_UNI_SuperheavyWeapon_Spell",
   "SpellType": "Zone",
   "Parent": "Zone_Cleave",
   "SpellProperties": [
    "GROUND:ExecuteWeaponFunctors(MainHand)",
    "DealDamage(1d6,Slashing)",
    "ApplyStatus(SELF,GOB_LOSTBALANCE,100,1)"
   ],
   "DisplayName": "Zone_UNI_SuperheavyWeapon_Spell_DisplayName",
   "Description": "Zone_UNI_SuperheavyWeapon_Spell_Description",
   "ExtraDescription": "Zone_UNI_SuperheavyWeapon_Spell_ExtraDescription",
   "Angle": 75
  },
  "Zone_CHA_ShellKid_Cup_Spell": {
   "Key": "Zone_CHA_ShellKid_Cup_Spell",
   "SpellType": "Zone",
   "Parent": "Zone_BurningHands",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "ApplyStatus(WET,100, 3)"
   ],
   "SurfaceType": "Water",
   "SurfaceLifetime": 0,
   "SurfaceGrowStep": 10,
   "SurfaceGrowInterval": 10,
   "DisplayName": "Zone_CHA_ShellKid_Cup_Spell_DisplayName",
   "Description": "Zone_CHA_ShellKid_Cup_Spell_Description",
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Intent_Utility_ZoneCone_SplashWater_ShellKidCup_Hand_01:Dummy_R_HandFX:VFX_Prepare_01:0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Spells_Cast_Intent_Utility_ZoneCone_SplashWater_ShellKidCup_01:Dummy_CastFX:Cast:0:None::None::0:0::::"
   ],
   "CastSound": "CrSpell_Cast_ShellKidCup"
  },
  "Zone_SHA_Shadow_Manifestation_Fear": {
   "Key": "Zone_SHA_Shadow_Manifestation_Fear",
   "SpellType": "Zone",
   "Parent": "Zone_Fear",
   "Cooldown": "OncePerTurn",
   "AddRangeFromAbility": "SHA_SHADOW_FEAR",
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 16)",
   "SpellSuccess": [
    "ApplyStatus(SHA_SHADOW_FEAR,100, 10)"
   ],
   "Icon": "unknown",
   "DisplayName": "Zone_SHA_Shadow_Manifestation_Fear_DisplayName",
   "Description": "Zone_SHA_Shadow_Manifestation_Fear_Description",
   "RechargeValues": "3-6"
  },
  "Zone_PLA_StuckHalfElf_Backdraft": {
   "Key": "Zone_PLA_StuckHalfElf_Backdraft",
   "SpellType": "Zone",
   "SurfaceType": "SporeBlackCloud",
   "SpellRoll": "not SavingThrow(Ability.Strength, 18)",
   "SpellSuccess": [
    "DealDamage(1d6,Thunder)",
    "DealDamage(2d6,Fire)",
    "Force(12, OriginToTarget)"
   ],
   "Icon": "Spell_Evocation_Thunderwave",
   "DisplayName": "Zone_PLA_StuckHalfElf_Backdraft_DisplayName",
   "Description": "Zone_PLA_StuckHalfElf_Backdraft_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Thunder)",
    "DealDamage(2d6,Fire)"
   ],
   "ExtraDescription": "Zone_PLA_StuckHalfElf_Backdraft_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(1d6,Thunder)",
    "DealDamage(2d6,Fire)"
   ],
   "PrepareEffect": [
    "VFX_Spells_Prepare_Arcane_Damage_Thunder_R_HandFX_01:Dummy_R_HandFX::0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Damage_Thunder_R_HandFX_Textkey_01:Dummy_R_HandFX:VFX_Prepare_01:0:None::None::0:0::::",
    "VFX_Spells_Prepare_Arcane_Damage_Thunder_Root_Textkey_01:Dummy_Root:VFX_Prepare_01:0:None::None::0:0::::"
   ],
   "CastEffect": [
    "VFX_Spells_Cast_Damage_Thunder_ZoneSquare_CastFX_01:Dummy_CastFX::0:None::None::0:0::::",
    "VFX_Spells_Cast_Damage_Thunder_ZoneSquare_CastFX_Textkey_01:Dummy_CastFX:Cast:0:None::None::0:0::::",
    "VFX_Spells_Cast_Damage_Thunder_ZoneSquare_Root_Textkey_01:Dummy_Root:Cast:0:None::None::0:0::::"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Thunder_Thunderwave_L1to3_01",
   "Shape": "Square",
   "Range": 5,
   "Base": 3,
   "SpellAnimationArcaneMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare)",
    "5e7e63e1-0e69-46e7-ade7-fe3dadcc9184(SPL_Somatic_Cone_01_Cast)",
    "e9ad50df-e7f1-43a0-b782-4c08f92b0f5a(SPL_Somatic_Cone_01_Recover)"
   ],
   "SpellAnimationDivineMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare)",
    "5e7e63e1-0e69-46e7-ade7-fe3dadcc9184(SPL_Somatic_Cone_01_Cast)",
    "e9ad50df-e7f1-43a0-b782-4c08f92b0f5a(SPL_Somatic_Cone_01_Recover)"
   ],
   "SpellAnimationNoneMagic": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare)",
    "5e7e63e1-0e69-46e7-ade7-fe3dadcc9184(SPL_Somatic_Cone_01_Cast)",
    "e9ad50df-e7f1-43a0-b782-4c08f92b0f5a(SPL_Somatic_Cone_01_Recover)"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "AddFallDamageOnLand",
    "IsHarmful"
   ]
  },
  "Zone_GOB_Priestess_Thunderwave": {
   "Key": "Zone_GOB_Priestess_Thunderwave",
   "SpellType": "Zone",
   "Parent": "Zone_Thunderwave",
   "RechargeValues": "3-6",
   "MemoryCost": 0
  },
  "Zone_TUT_MindBlast_MindFlayer": {
   "Key": "Zone_TUT_MindBlast_MindFlayer",
   "SpellType": "Zone",
   "Parent": "Zone_MindBlast_MindFlayer",
   "RechargeValues": 6
  },
  "Zone_DEN_Halsin_Thunderwave": {
   "Key": "Zone_DEN_Halsin_Thunderwave",
   "SpellType": "Zone",
   "Parent": "Zone_Thunderwave",
   "RechargeValues": "2-6"
  }
 },
 "types": {
  "Projectile": [
   "Projectile_HAG_HagGrenade_Fire",
   "Projectile_HAG_HagGrenade_PoisonCloud",
   "Projectile_HAG_Jump_Frog",
   "Projectile_Hag_RayOfSickness",
   "Projectile_Hag_Double_RayOfSickness",
   "Projectile_PLA_HailOfThorns_ZhentCave_Gloves",
   "Projectile_SCL_SpikeTrap",
   "Projectile_DEN_KanonJump",
   "Projectile_GuidingBolt_Free",
   "Projectile_GOB_CageTrap",
   "Projectile_CHA_OutpostCrevice_Bite",
   "Projectile_PLA_FakeAlchemistFire",
   "Projectile_UND_BuletteSpawnExplode",
   "Projectile_FOR_GnomeGoblin_ThrowRock",
   "Projectile_FOR_Ogre_AcidArrow",
   "Projectile_FOR_Ogre_FireBolt",
   "Projectile_GOB_GoblinPriestess_StatueDebris",
   "Projectile_GOB_GoblinKing_Javelin",
   "Projectile_GOB_Ogre_Javelin",
   "Projectile_DEN_TunnelTurret_Trap",
   "Projectile_GOB_PainPriest_Mace",
   "Projectile_UNI_MassHealRing_Spell",
   "Projectile_SHA_Nightsong_EldritchBlast",
   "Projectile_SHA_Nightsong_WitchBolt",
   "Projectile_SHA_Nightsong_RayOfFrost",
   "Projectile_PLA_DesireJump",
   "Projectile_FOR_Goblin_Jump",
   "Projectile_DEN_Jump_Spider",
   "Projectile_BEH_DeathRay",
   "Projectile_FOR_MasterworkChest_Trap",
   "Projectile_UND_ZhentChest_Trap",
   "Projectile_GOB_TripwireTrap",
   "Projectile_UND_Wand_Fireball_Crooked_Spell",
   "Projectile_UND_DarkLake_RaftCaptainJump",
   "Projectile_FOR_SeluneStash_ChestTrap",
   "Projectile_HAG_PsychicMine",
   "Projectile_HAG_RayOfSickness_Staff",
   "Projectile_TUT_BrineExplode",
   "Projectile_CAMP_Javelin_Ogre",
   "Projectile_UND_SharFort_Turret",
   "Projectile_UND_MagicMissile_SocietyOfBrilliance_Amulet",
   "Projectile_HAG_RedcapSpikes",
   "Projectile_UND_DuergarRaft_Hammer_Explosion",
   "Projectile_DEN_Halsin_PoisonSpray",
   "Projectile_UND_ThayanCellar_OrbExplosion",
   "Projectile_DEN_GoblinShot"
  ],
  "ProjectileStrike": [
   "ProjectileStrike_MOO_DesireDream_FlamingFistArtillery",
   "ProjectileStrike_TUT_UpperDeck_Bombardment"
  ],
  "Shout": [
   "Shout_GOB_DetonateSelf",
   "Shout_HAG_SpawnDoubles_Phase1",
   "Shout_HAG_SpawnDoubles_Phase2",
   "Shout_HAG_SpawnDoubles_MayrinaIllusion",
   "Shout_HAG_Frog_ReflectiveMucus",
   "Shout_DEN_KanonPush",
   "Shout_GLO_Wyll_CambionTalk",
   "Shout_GOB_GoblinKing_ForceShout",
   "Shout_FOR_Ogre_MirrorImage",
   "Shout_UND_SocietyOfBrilliance_Teleportation",
   "Shout_SHA_Nightsong_StartKissCombat",
   "Shout_GOB_PainPriest_DaggerSpell",
   "Shout_GOB_Priestess_MirrorImage",
   "Shout_DEN_ARM_LuckyBoots_Spell",
   "Shout_CHA_ShellKid_Stone_Spell",
   "Shout_SHA_Nightsong_Nightfall",
   "Shout_UND_Invisibility_ShadowOfMenzoberranzan",
   "Shout_GOB_WolfPens_Disengage_GoblinKid",
   "Shout_GOB_WolfPens_Dash_GoblinKid",
   "Shout_GOB_WolfPens_Dash_GoblinAdult",
   "Shout_FOR_SpiderQueen_Enrage",
   "Shout_FOR_Owlbear_Enrage",
   "Shout_GOB_Ogre_Enrage",
   "Shout_FOR_Ogre_Enrage",
   "Shout_UND_DetectThoughts_Tower_Amulet",
   "Shout_UND_FeatherFall_Tower_Boots",
   "Shout_DEN_Halsin_WildShape_Bear",
   "Shout_DEN_Halsin_Blur",
   "Shout_GOB_GoblinPriest_CallForHelp"
  ],
  "Target": [
   "Target_MOO_Dominate_Mindflayer",
   "Target_MOO_Enthrall_MindFlayer",
   "Target_GLO_CursedIronFlask_CaptureCreature",
   "Target_GLO_DangerousBook_SpeakWithDead",
   "Target_Guidance_TalismanOfSelune",
   "Target_VampireBite_Astarion",
   "Target_Bite_MothersLoathing",
   "Target__CHA",
   "Target_CHA_TrueStrike_CompassSpear",
   "Target_SpeakWithDead_Amulet_CHA",
   "Target__DEN",
   "Target_DEN_DancingLights_Arabella_Locket",
   "Target_DEN_BearReward_LesserRestoration",
   "Target_DEN_Apprentice_DaggerOfShar_Spell",
   "Target_DEN_TheRiteOfThorns",
   "Target_DEN_EnsnaringStrike_HalsinBlade",
   "Target_DEN_Halsin_WildShape_Bear_Multiattack",
   "Target_DEN_Halsin_CharmPerson",
   "Target_DEN_Halsin_HealingWord",
   "Target_DEN_Halsin_MistyStep",
   "Target_DEN_Halsin_RangersCompanion_Wolf",
   "Target_DEN_Nettie_HealingWord",
   "Target__FOR",
   "Target_FOR_Smite_Searing_DeathOfATrueSoul",
   "Target_FOR_ThayanCellar_SummonQuasit",
   "Target_FOR_SpiderQueen_HatchEggs",
   "Target__GOB",
   "Target_UNI_MistyStep_DrowCommander_Amulet",
   "Target_GOB_CureWounds_SeluneAmulet",
   "Target_GOB_ChickenChase_CommentatorShove",
   "Target_GOB_DrowCommander_Buff",
   "Target_GOB_DrowCommander_Bless",
   "Target_GOB_Priestess_Telekinesis",
   "Target_GOB_Priestess_Telekinesis_Pull",
   "Target_GOB_Priestess_HealingWord",
   "Target_GOB_Priestess_HoldPerson",
   "Target_GOB_Priestess_ShieldOfFaith",
   "Target_GOB_Priestess_Grease",
   "Target_GOB_Priestess_ShockingGrasp",
   "Target_GOB_Priestess_Shield_ShieldOfFaith",
   "Target_GOB_GoblinKing_ForceAttack",
   "Target_GOB_GoblinKing_ForceAttack_WeaponAttack",
   "Target_GOB_SpiderNest_ShortShove",
   "Target_GOB_WolfPens_HalsinCureWounds",
   "Target_GOB_PainPriest_WeaponAttack",
   "Target_GOB_PainPriest_ChillTouch",
   "Target_GOB_VoloGuard_Shove",
   "Target_GOB_AnimalFriendship_Pens_BeastmasterAmulet",
   "Target__HAG",
   "Target_HAG_ClearIllusion",
   "Target_HAG_SinisterStrike",
   "Target_HAG_Hagspawn_SummonHusband",
   "Target_HAG_ViciousMockery",
   "Target_HAG_HoldPerson",
   "Target_HAG_MaskOfTerror",
   "Target_HAG_MaskOfRegret",
   "Target_HAG_MaskOfVengeance",
   "Target_HAG_MaskOfServitude",
   "Target_HAG_MudMephit_Summon",
   "Target_HAG_ProtectionFromEvilAndGood_Amulet",
   "Target__PLA",
   "Target_PLA_ZhentDungeon_Punch",
   "Target_PLA_ShieldOfFaith_SwordOfJustice",
   "Target__UND",
   "Target_UNI_MistyStep_NightWalkers",
   "Target_UND_LoneDuergar_InflictWounds",
   "Target_UND_LoneDuergar_AnimateDead",
   "Target_UND_MushroomHunter_MistyStep",
   "Target_UND_Spectator_UnpetrifyingRay",
   "Target_UND_Spectator_Bite",
   "Target_UND_Spectator_Ray_Paralyzing",
   "Target_UND_Spectator_Ray_Wounding",
   "Target_UND_Spectator_Ray_Fear",
   "Target_UND_PetrifiedDrow_HealingWord",
   "Target_UND_Myconid_UseBarrelStalk",
   "Target_UND_DeadInTheWater_Shove",
   "Target_UND_MyconidSovereign_FakeAnimatingSpores",
   "Target_UND_Light_Tower_Ring",
   "Target_UND_Bless_StaffBlessMystra",
   "Target_UND_Smite_Searing_DuergarBlacksmithHammer",
   "Target__SHA",
   "Target_SHA_Nightsong_Shadowgrasp",
   "Target_SHA_Nightsong_EmergePush",
   "Target_SHA_Nightsong_LoomingDespair",
   "Target_SHA_Nightsong_DarkWhispers",
   "Target_SHA_Nightsong_Darkness",
   "Target_SHA_Nightsong_ShadowStep",
   "Target_SHA_Nightsong_ChillTouch",
   "Target__OUT",
   "Target_OUT_PlagueHouse_LesserRestoration"
  ],
  "Teleportation": [
   "Teleportation_HAG_HusbandResurrection"
  ],
  "Throw": [
   "Throw_GOB_Ogre_Throw",
   "Throw_GOB_Ogre_Throw_TargetA",
   "Throw_GOB_Ogre_Throw_TargetB"
  ],
  "Zone": [
   "Zone_DEN_Prodigy_Thunderwave",
   "Zone_DEN_ColorSpray_HarpyMeal_NestRing",
   "Zone_PLA_Chokepoint_DragonBreath",
   "Zone_UNI_SuperheavyWeapon_Spell",
   "Zone_CHA_ShellKid_Cup_Spell",
   "Zone_SHA_Shadow_Manifestation_Fear",
   "Zone_PLA_StuckHalfElf_Backdraft",
   "Zone_GOB_Priestess_Thunderwave",
   "Zone_TUT_MindBlast_MindFlayer",
   "Zone_DEN_Halsin_Thunderwave"
  ]
 }
};
const parse = o=>{
const {Parent} = o;
const p = data.spells[Parent];
if(p) {
 delete o.Parent;
 const pp = parse(p);
 Object.keys(pp).forEach(k=>{
    if(!o.hasOwnProperty(k)){
       o[k]=pp[k]
    }
 })
} 
return o;
}
Object.values(data.spells).forEach(parse);
    