const data = {
 "spells": {
  "Projectile_MainHandAttack": {
   "Name": "Projectile_MainHandAttack",
   "SpellType": "Projectile",
   "TargetFloor": "-1",
   "TargetRadius": "RangedMainWeaponRange",
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "ff93ba9c-124c-454e-ac8c-436c136bcef2",
   "Icon": "Projectile_MainHandAttack",
   "DisplayName": "Shared_Projectile_MainHandAttack_DisplayName",
   "Description": "Shared_Projectile_MainHandAttack_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "PreviewCursor": "Bow",
   "CastTextEvent": "Cast",
   "AlternativeCastTextEvents": [
    "CastOffhand"
   ],
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "DualWieldingUseCosts": "BonusActionPoint:1",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "7e67bfd0-2fc2-4d10-bed5-cfda9e660de5(CMBT_Range_RHand_01_Antic),,",
    "eb054308-7fce-4b85-bf4c-7a0031fda7ac(CMBT_Range_RHand_01_Attack),,",
    "0b0dc35b-4953-45c0-a9eb-8d3fef5e798a(CMBT_Range_RHand_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    "b2e9c771-3497-444c-b360-23b4441985a1(CMBT_Range_RHand_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "7e67bfd0-2fc2-4d10-bed5-cfda9e660de5(CMBT_Range_RHand_01_Antic),,",
    "eb054308-7fce-4b85-bf4c-7a0031fda7ac(CMBT_Range_RHand_01_Attack),,:4a789a60-04b8-4a26-b476-65cf26ca558b(CMBT_Range_LHand_01_Attack),,",
    "0b0dc35b-4953-45c0-a9eb-8d3fef5e798a(CMBT_Range_RHand_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    "b2e9c771-3497-444c-b360-23b4441985a1(CMBT_Range_RHand_01_Dash),,"
   ],
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "IsAttack",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "CanDualWield"
   ],
   "HitAnimationType": "PhysicalDamage",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_WEAPON ATTACK": {
   "Name": "Projectile_WEAPON ATTACK",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_OffhandAttack": {
   "Name": "Projectile_OffhandAttack",
   "SpellType": "Projectile",
   "SpellProperties": [
    "GROUND:DealDamage(OffhandRangedWeapon, OffhandRangedWeaponDamageType)",
    "GROUND:ExecuteWeaponFunctors(OffHand)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedOffHandWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(OffhandRangedWeapon, OffhandRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(OffHand)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "8570bb4f-eade-41a5-8f00-23b4d612fbf1",
   "Icon": "Projectile_OffHandAttack",
   "DisplayName": "Shared_Projectile_OffhandAttack_DisplayName",
   "Description": "Shared_Projectile_OffhandAttack_Description",
   "DescriptionParams": [
    "DealDamage(OffhandRangedWeapon, OffhandRangedWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(OffhandRangedWeapon, OffhandRangedWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "PreviewCursor": "Bow",
   "CastTextEvent": "CastOffhand",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "661cae72-6bc9-4e6d-98e2-89db9e03d6b5(CMBT_Range_LHand_01_Prepare),,",
    "bf6ea370-a917-45b3-908d-35729c98db10(CMBT_Range_LHand_01_Antic),,",
    "4a789a60-04b8-4a26-b476-65cf26ca558b(CMBT_Range_LHand_01_Attack),,",
    "a11b8bcb-ba24-417a-aa86-4e4379c41ee2(CMBT_Range_LHand_01_Recover),,",
    "5eb39acc-ecbd-4940-84c8-a1e13668b865(CMBT_Range_LHand_01_Loop),,",
    ",,"
   ],
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "PhysicalDamage",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_Dipped_Fire": {
   "Name": "Projectile_Dipped_Fire",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ApplyStatus(BURNING,100,1)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "ProjectileCount": 1,
   "Template": "a987eb34-3d51-42fb-ba62-d2ebfbdc58c0",
   "Icon": "Action_DippedFire_Ranged",
   "DisplayName": "Shared_Projectile_Dipped_Fire_DisplayName",
   "Description": "Shared_Projectile_Dipped_Fire_Description",
   "PreviewCursor": "Bow",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "PrepareEffect": "7df4cf23-22c1-4439-b06d-efa710912019",
   "CastEffect": "b6b634be-2636-432e-ab2e-a173700780ea"
  },
  "Projectile_Dipped_Poison": {
   "Name": "Projectile_Dipped_Poison",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " DealDamage(1d6, Poison)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "ProjectileCount": 1,
   "Template": "aee0e1e8-d834-4a53-af80-4d941bc4bca9",
   "Icon": "Action_DippedPoison_Ranged",
   "DisplayName": "Shared_Projectile_Dipped_Poison_DisplayName",
   "Description": "Shared_Projectile_Dipped_Poison_Description",
   "PreviewCursor": "Bow",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Internal",
   "PrepareEffect": "2bd24880-72d2-4e98-9678-747cc80cf34b",
   "CastEffect": "821ab6e1-2e1e-4f28-b893-23fbc0909d60"
  },
  "Projectile_SneakAttack": {
   "Name": "Projectile_SneakAttack",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "IF(SneakAttackDices(1)):DealDamage(1d6,MainRangedWeaponDamageType)",
    "IF(SneakAttackDices(2)):DealDamage(2d6,MainRangedWeaponDamageType)",
    "ExecuteWeaponFunctors(MainHand)"
   ],
   "ProjectileCount": 1,
   "Template": "52f94ae8-7b9d-4410-9290-91a8a909b612",
   "Icon": "Action_SneakAttack_Ranged",
   "DisplayName": "Shared_Projectile_SneakAttack_DisplayName",
   "Description": "Shared_Projectile_SneakAttack_Description",
   "ExtraDescription": "Shared_Projectile_SneakAttack_ExtraDescription",
   "ExtraDescriptionParams": [
    "Distance(1.5)"
   ],
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_SneakAttackProjectile",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "CannotTargetItems",
    "CannotTargetTerrain"
   ],
   "PrepareEffect": "62fa9d2f-ec0b-4900-a455-ec9b5e6e3eb4",
   "CastEffect": "bf5fa9ef-7d14-4061-b393-10852789ff1b"
  },
  "Projectile_HordeBreaker": {
   "Name": "Projectile_HordeBreaker",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "TARGET:ApplyStatus(HORDE_BREAKER_TECHNICAL,100,1)",
    "ApplyStatus(SELF,HORDE_BREAKER,100,1)",
    "ApplyStatus(SELF,HORDE_BREAKER_TECHNICAL,100,1)",
    "GROUND:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "GROUND:ExecuteWeaponFunctors(MainHand)",
    "CreateExplosion(Projectile_HordeBreaker_Explosion)"
   ],
   "ExplodeRadius": 2,
   "SpellSuccess": [
    "TARGET:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "TargetConditions": "Character() and not Self()",
   "Template": "d3819702-d861-405c-8b5f-328155cf1a46",
   "Icon": "Action_HordeBreaker_Ranged",
   "DisplayName": "Shared_Projectile_HordeBreaker_DisplayName",
   "Description": "Shared_Projectile_HordeBreaker_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(HORDE_BREAKER_TARGET,100,1)"
   ],
   "CastSound": "Action_Cast_Hordebreaker_Ranged",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "PrepareEffect": "3e0e6a8a-6719-44b2-a259-5ec9b5ad8d94",
   "CastEffect": "86d932a4-ff1b-410d-8f73-c5f5a2529862",
   "PositionEffect": "e73e5a51-eb33-4db2-ade9-26f55e8a7b42"
  },
  "Projectile_HordeBreaker_Free": {
   "Name": "Projectile_HordeBreaker_Free",
   "SpellType": "Projectile",
   "Parent": "Projectile_HordeBreaker",
   "SpellProperties": [
    "RemoveStatus(SELF,HORDE_BREAKER)",
    "RemoveStatus(HORDE_BREAKER_TARGET)",
    "GROUND:ExecuteWeaponFunctors(MainHand)"
   ],
   "Icon": "Action_HordeBreaker_Ranged",
   "DisplayName": "Shared_Projectile_HordeBreaker_Free_DisplayName",
   "Description": "Shared_Projectile_HordeBreaker_Free_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "ExtraDescription": "Shared_Projectile_HordeBreaker_Free_ExtraDescription",
   "ExtraDescriptionParams": [
    "Distance(1.5)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "CannotTargetItems",
    "CannotTargetTerrain"
   ]
  },
  "Projectile_ArchersEye": {
   "Name": "Projectile_ArchersEye",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " DealDamage(1d10,Piercing)"
   ],
   "TargetConditions": "Character() and not Self()",
   "ProjectileCount": 1,
   "DisplayName": "Shared_Projectile_ArchersEye_DisplayName",
   "Description": "Shared_Projectile_ArchersEye_Description",
   "RechargeValues": "4-6"
  },
  "Projectile_Ricochet": {
   "Name": "Projectile_Ricochet",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "Cooldown": "OncePerRest",
   "TargetRadius": "RangedMainWeaponRange",
   "AreaRadius": 9,
   "Template": "3350e26c-5db3-4ec0-bd96-83e232441d04",
   "Icon": "Skill_Ranger_Ricochet",
   "DisplayName": "Shared_Projectile_Ricochet_DisplayName",
   "Description": "Shared_Projectile_Ricochet_Description",
   "DescriptionParams": [
    "Distance(9)"
   ],
   "PreviewCursor": "Bow",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "ForkChance": 100,
   "MaxForkCount": 1,
   "ForkLevels": 2,
   "ForkingConditions": "Enemy()"
  },
  "Projectile_DisarmingAttack": {
   "Name": "Projectile_DisarmingAttack",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "TargetConditions": "Character() and not Self()",
   "ProjectileCount": 1,
   "Template": "26ac5564-f0e7-4f5e-9f94-d535ce5c8a94",
   "Icon": "Action_DisarmingAttack_Ranged",
   "DisplayName": "Shared_Projectile_DisarmingAttack_DisplayName",
   "Description": "Shared_Projectile_DisarmingAttack_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_DisarmingAttack_Ranged",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "PrepareEffect": "e3faa4ab-3c09-456d-997a-23a48eac2b09",
   "CastEffect": "3215d6f8-e151-4105-8a78-22947a676247"
  },
  "Projectile_DistractingStrike": {
   "Name": "Projectile_DistractingStrike",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "TargetConditions": "Character() and not Self()",
   "ProjectileCount": 1,
   "Template": "4a73ede0-6afb-46fb-a095-cb42ccd7cbb7",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_DistractingStrike_DisplayName",
   "Description": "Shared_Projectile_DistractingStrike_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ]
  },
  "Projectile_MenacingAttack": {
   "Name": "Projectile_MenacingAttack",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "TargetConditions": "Character() and not Self()",
   "ProjectileCount": 1,
   "Template": "a136f4df-7a32-4215-94c2-036f0d8c497b",
   "Icon": "Action_MenacingAttack_Ranged",
   "DisplayName": "Shared_Projectile_MenacingAttack_DisplayName",
   "Description": "Shared_Projectile_MenacingAttack_Description",
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_MenacingAttackProjectile",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "PrepareEffect": "7e480d45-7a63-4948-899e-304af281dd77",
   "CastEffect": "fc7aeec2-ad41-4338-9205-3f543030a4a0"
  },
  "Projectile_PushingAttack": {
   "Name": "Projectile_PushingAttack",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "ProjectileCount": 1,
   "Template": "1214887b-92d2-4e7a-9528-11efef82a6c5",
   "Icon": "Action_PushingAttack_Ranged",
   "DisplayName": "Shared_Projectile_PushingAttack_DisplayName",
   "Description": "Shared_Projectile_PushingAttack_Description",
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_PushingAttackProjectile",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "AddFallDamageOnLand"
   ],
   "PrepareEffect": "e3faa4ab-3c09-456d-997a-23a48eac2b09",
   "CastEffect": "79e441ed-a174-4526-aab8-3aeb74beda2c"
  },
  "Projectile_TripAttack": {
   "Name": "Projectile_TripAttack",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "TargetConditions": "Character() and not Self()",
   "ProjectileCount": 1,
   "Template": "8a9041e6-d841-44c1-ac02-3725123815bc",
   "Icon": "Action_TripAttack_Ranged",
   "DisplayName": "Shared_Projectile_TripAttack_DisplayName",
   "Description": "Shared_Projectile_TripAttack_Description",
   "ExtraDescription": "Shared_Projectile_TripAttack_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_TripAttack_Ranged",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "PrepareEffect": "e3faa4ab-3c09-456d-997a-23a48eac2b09",
   "CastEffect": "de3b7b66-3184-42db-a70b-aba2885b17b7"
  },
  "Projectile_EnsnaringStrike": {
   "Name": "Projectile_EnsnaringStrike",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "Level": 1,
   "SpellSchool": "Conjuration",
   "SpellContainerID": "Projectile_EnsnaringStrike_Container",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "SpellSuccess": [
    "IF(not SavingThrow(Ability.Strength, SourceSpellDC(),AdvantageOnRestrained(),DisadvantageOnRestrained())):ApplyStatus(ENSNARING_STRIKE,100,10)",
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "TargetConditions": "Character() and not Self()",
   "ProjectileCount": 1,
   "Template": "4a73ede0-6afb-46fb-a095-cb42ccd7cbb7",
   "Icon": "Spell_Conjuration_EnsnaringStrikeRanged",
   "DisplayName": "Shared_Projectile_EnsnaringStrike_DisplayName",
   "Description": "Shared_Projectile_EnsnaringStrike_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "ExtraDescription": "Shared_Projectile_EnsnaringStrike_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d6,Piercing)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "Strength"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(ENSNARING_STRIKE,100,10)"
   ],
   "PreviewCursor": "Bow",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_ProjectileEnsnaringStrike_L1to3",
   "UseCosts": [
    "ActionPointGroup:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "f5e89641-dcfb-4629-b430-557cc89c9df6",
   "CastEffect": "de9dd954-e2e9-44bc-9155-584d1dac61b0",
   "PositionEffect": "68d75196-cbda-4650-9634-491d150847d8"
  },
  "Projectile_EnsnaringStrike_2": {
   "Name": "Projectile_EnsnaringStrike_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_EnsnaringStrike",
   "SpellSuccess": [
    "IF(not SavingThrow(Ability.Strength, SourceSpellDC(),AdvantageOnRestrained(),DisadvantageOnRestrained())):ApplyStatus(ENSNARING_STRIKE_2,100,10)",
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "Icon": "Spell_Conjuration_EnsnaringStrikeRanged_2",
   "ExtraDescriptionParams": [
    "DealDamage(2d6,Piercing)"
   ],
   "UseCosts": [
    "ActionPointGroup:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_EnsnaringStrike",
   "PowerLevel": 2
  },
  "Projectile_EnsnaringStrike_Container": {
   "Name": "Projectile_EnsnaringStrike_Container",
   "SpellType": "Projectile",
   "Parent": "Projectile_EnsnaringStrike",
   "ContainerSpells": [
    "Projectile_EnsnaringStrike",
    "Target_EnsnaringStrike"
   ]
  },
  "Projectile_PinDown": {
   "Name": "Projectile_PinDown",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "Cooldown": "OncePerShortRest",
   "TargetRadius": "RangedMainWeaponRange",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " ApplyStatus(PIN_DOWN,100,2)"
   ],
   "TargetConditions": "not Self()",
   "ProjectileCount": 1,
   "Template": "61cecd47-317e-406e-ad3c-1eb5ecfbc317",
   "Icon": "Action_PinDown",
   "DisplayName": "Shared_Projectile_PinDown_DisplayName",
   "Description": "Shared_Projectile_PinDown_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "Distance(3)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(PIN_DOWN,100,2)"
   ],
   "PreviewCursor": "Bow",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_PinDown",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "IsDefaultWeaponAction"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "8cba373e-ec0a-4d15-8b47-5e7e15f59353"
  },
  "Projectile_WEAPON_ACTION_PROJECTILE": {
   "Name": "Projectile_WEAPON_ACTION_PROJECTILE",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_AdvancedProjectileWeaponAction": {
   "Name": "Projectile_AdvancedProjectileWeaponAction",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "Cooldown": "OncePerShortRest",
   "TargetConditions": "(Character() or Item()) and not Self() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ]
  },
  "Projectile_HamstringShot": {
   "Name": "Projectile_HamstringShot",
   "SpellType": "Projectile",
   "Parent": "Projectile_AdvancedProjectileWeaponAction",
   "Cooldown": "OncePerShortRest",
   "ProjectileCount": 1,
   "Template": "cd8dcbec-359a-4593-aca9-6164b3d4995d",
   "Icon": "Action_HamstringShot",
   "DisplayName": "Shared_Projectile_HamstringShot_DisplayName",
   "Description": "Shared_Projectile_HamstringShot_Description",
   "TooltipAttackSave": [
    "RangedWeaponAttack",
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(HAMSTRING,100,2)"
   ],
   "CastSound": "Action_Cast_HamstringShot",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "44076e08-5ecc-41d1-93f2-90d9663774cb"
  },
  "Projectile_PiercingShot": {
   "Name": "Projectile_PiercingShot",
   "SpellType": "Projectile",
   "Parent": "Projectile_AdvancedProjectileWeaponAction",
   "Cooldown": "OncePerShortRest",
   "Template": "4a7e163c-176b-4d6e-af2b-22a1d95f6556",
   "Icon": "Action_PiercingShot",
   "DisplayName": "Shared_Projectile_PiercingShot_DisplayName",
   "Description": "Shared_Projectile_PiercingShot_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "ExtraDescription": "Shared_Projectile_PiercingShot_ExtraDescription",
   "TooltipAttackSave": [
    "RangedWeaponAttack",
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(GAPING_WOUND,100,2)"
   ],
   "CastSound": "Action_Cast_PiercingShot",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "732c29ee-1083-44b1-8974-4e8973a1b51c"
  },
  "Projectile_MobileShooting": {
   "Name": "Projectile_MobileShooting",
   "SpellType": "Projectile",
   "Parent": "Projectile_AdvancedProjectileWeaponAction",
   "Cooldown": "OncePerShortRest",
   "Template": "75a4f377-5de3-4d01-8fe2-d67567c83c84",
   "Icon": "Action_MobileShooting",
   "DisplayName": "Shared_Projectile_MobileShooting_DisplayName",
   "Description": "Shared_Projectile_MobileShooting_Description",
   "ExtraDescription": "Shared_Projectile_MobileShooting_ExtraDescription",
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "CastSound": "Action_Cast_MobileShooting",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "7e67bfd0-2fc2-4d10-bed5-cfda9e660de5(CMBT_Range_RHand_01_Antic),,",
    "eb054308-7fce-4b85-bf4c-7a0031fda7ac(CMBT_Range_RHand_01_Attack),,",
    "0b0dc35b-4953-45c0-a9eb-8d3fef5e798a(CMBT_Range_RHand_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    "b2e9c771-3497-444c-b360-23b4441985a1(CMBT_Range_RHand_01_Dash),,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "cf56fd6b-7ff8-43fd-90f6-7677e396a7da"
  },
  "Projectile_Headcrack": {
   "Name": "Projectile_Headcrack",
   "SpellType": "Projectile",
   "Parent": "Projectile_AdvancedProjectileWeaponAction",
   "Cooldown": "OncePerShortRest",
   "SpellSuccess": [
    "IF(Character() and not SavingThrow(Ability.Constitution, ManeuverSaveDC())):ApplyStatus(DAZED,100,2)",
    "DealDamage(MainRangedWeapon, Bludgeoning, Nonmagical, Nonlethal)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_Headcrack_DisplayName",
   "Description": "Shared_Projectile_Headcrack_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "ExtraDescription": "Shared_Projectile_Headcrack_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(DAZED, 100, 2)"
   ],
   "CastSound": "Action_Cast_PinDown",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ]
  },
  "Projectile_SINGLE": {
   "Name": "Projectile_SINGLE",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_AcidArrow": {
   "Name": "Projectile_AcidArrow",
   "SpellType": "Projectile",
   "Level": 2,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:CreateSurface(2,0,Acid)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "ApplyStatus(ACID_ARROW,100,1)",
    "DealDamage(4d4,Acid)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "45e6cc9f-7ec9-4e1b-aa2f-95568173ed40",
   "Icon": "Spell_Evocation_MelfsAcidArrow",
   "DisplayName": "Shared_Projectile_AcidArrow_DisplayName",
   "Description": "Shared_Projectile_AcidArrow_Description",
   "DescriptionParams": [
    "DealDamage(4d4,Acid)",
    "DealDamage(2d4,Acid)"
   ],
   "ExtraDescription": "Shared_Projectile_AcidArrow_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(4d4,Acid)",
    "DealDamage(2d4,Acid)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Acid_MelfsAcidArrow_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "MemoryCost": 1,
   "PrepareEffect": "6d2b60de-6b9d-42d7-881a-24298838d684",
   "CastEffect": "53ceb907-6389-4e52-a459-7536665f7e2b"
  },
  "Projectile_ChromaticOrb": {
   "Name": "Projectile_ChromaticOrb",
   "SpellType": "Projectile",
   "Level": 1,
   "SpellSchool": "Evocation",
   "ContainerSpells": [
    "Projectile_ChromaticOrb_Acid",
    "Projectile_ChromaticOrb_Cold",
    "Projectile_ChromaticOrb_Fire",
    "Projectile_ChromaticOrb_Lightning",
    "Projectile_ChromaticOrb_Poison",
    "Projectile_ChromaticOrb_Thunder"
   ],
   "SpellProperties": [
    "GROUND:CreateSurface(2,2,Acid)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Icon": "Spell_Evocation_ChromaticOrb",
   "DisplayName": "Shared_Projectile_ChromaticOrb_DisplayName",
   "Description": "Shared_Projectile_ChromaticOrb_Description",
   "CastTextEvent": "Cast",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "IsLinkedSpellContainer"
   ],
   "MemoryCost": 1
  },
  "Projectile_ChromaticOrb_Acid": {
   "Name": "Projectile_ChromaticOrb_Acid",
   "SpellType": "Projectile",
   "Level": 1,
   "SpellSchool": "Evocation",
   "SpellContainerID": "Projectile_ChromaticOrb",
   "SpellProperties": [
    "GROUND:CreateSurface(2,2,Acid)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "DealDamage(2d8,Acid)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "f77c14be-cc25-40d6-a7dd-99b2e0a2df1c",
   "Icon": "Spell_Evocation_ChromaticOrb_Acid",
   "DisplayName": "Shared_Projectile_ChromaticOrb_Acid_DisplayName",
   "Description": "Shared_Projectile_ChromaticOrb_Acid_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Acid)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d8,Acid)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Acid_ChromaticOrbAcid_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "17173dd6-e330-4769-b6bd-d757689e7f9a",
   "CastEffect": "eb96a8c6-37b4-4a13-a622-034a1dcbee60"
  },
  "Projectile_ChromaticOrb_Cold": {
   "Name": "Projectile_ChromaticOrb_Cold",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Acid",
   "SpellProperties": [
    "GROUND:SurfaceChange(Freeze)",
    "GROUND:CreateSurface(2,2,WaterFrozen)"
   ],
   "SpellSuccess": [
    "DealDamage(2d8,Cold)"
   ],
   "Template": "32fab210-8c88-4fe2-a33c-ade6a9c880b7",
   "Icon": "Spell_Evocation_ChromaticOrb_Cold",
   "DisplayName": "Shared_Projectile_ChromaticOrb_Cold_DisplayName",
   "Description": "Shared_Projectile_ChromaticOrb_Cold_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Cold)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d8,Cold)"
   ],
   "CastSound": "Spell_Cast_Damage_Ice_ChromaticOrbIce_L1to3",
   "PrepareEffect": "cc7c02e9-b4f2-4c4d-bb4a-7526d7bef885",
   "CastEffect": "31fdeb9c-f917-4fc5-a0ac-93993a17cab4"
  },
  "Projectile_ChromaticOrb_Fire": {
   "Name": "Projectile_ChromaticOrb_Fire",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Acid",
   "SpellProperties": [
    "GROUND:SurfaceChange(Ignite)",
    "GROUND:SurfaceChange(Vaporize)",
    "GROUND:CreateSurface(2,2,Fire)"
   ],
   "SpellSuccess": [
    "DealDamage(2d8,Fire)"
   ],
   "Template": "02038395-3092-4580-a119-0e5fd1a650ee",
   "Icon": "Spell_Evocation_ChromaticOrb_Fire",
   "DisplayName": "Shared_Projectile_ChromaticOrb_Fire_DisplayName",
   "Description": "Shared_Projectile_ChromaticOrb_Fire_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d8,Fire)"
   ],
   "CastSound": "Spell_Cast_Damage_Fire_ChromaticOrbFire_L1to3",
   "PrepareEffect": "25fc6c31-fc26-497a-af6d-ef816a82be3c",
   "CastEffect": "3911e604-b850-43da-baa6-816ca49aa823"
  },
  "Projectile_ChromaticOrb_Lightning": {
   "Name": "Projectile_ChromaticOrb_Lightning",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Acid",
   "SpellProperties": [
    "GROUND:SurfaceChange(Electrify)",
    "GROUND:CreateSurface(2,2,WaterElectrified)"
   ],
   "SpellSuccess": [
    "DealDamage(2d8,Lightning)"
   ],
   "Template": "7a2eea92-5a51-408d-ac76-c45098c87d93",
   "Icon": "Spell_Evocation_ChromaticOrb_Lightning",
   "DisplayName": "Shared_Projectile_ChromaticOrb_Lightning_DisplayName",
   "Description": "Shared_Projectile_ChromaticOrb_Lightning_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Lightning)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d8,Lightning)"
   ],
   "CastSound": "Spell_Cast_Damage_Lightning_ChromaticOrbLightning_L1to3",
   "PrepareEffect": "a0aead53-5047-4b0f-a31f-ecc89e5599c0",
   "CastEffect": "fa7b3b8f-3187-45c2-9895-f1ce4c432679"
  },
  "Projectile_ChromaticOrb_Poison": {
   "Name": "Projectile_ChromaticOrb_Poison",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Acid",
   "SpellProperties": [
    "GROUND:CreateSurface(2,2,Poison)"
   ],
   "SpellSuccess": [
    "DealDamage(2d8,Poison)"
   ],
   "Template": "8c7bb016-4706-45b0-bcf4-5b59011ced12",
   "Icon": "Spell_Evocation_ChromaticOrb_Poison",
   "DisplayName": "Shared_Projectile_ChromaticOrb_Poison_DisplayName",
   "Description": "Shared_Projectile_ChromaticOrb_Poison_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Poison)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d8,Poison)"
   ],
   "CastSound": "Spell_Cast_Damage_Poison_ChromaticOrbPoison_L1to3",
   "PrepareEffect": "92a96bf8-28c7-4565-8ceb-7cd02978b1ee",
   "CastEffect": "ecd2a765-5888-42bc-bc88-7bb2303e82b7"
  },
  "Projectile_ChromaticOrb_Thunder": {
   "Name": "Projectile_ChromaticOrb_Thunder",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Acid",
   "SpellSuccess": [
    "DealDamage(3d8,Thunder)"
   ],
   "Template": "c7cd4b0a-2b2e-47ae-a4e8-849ad5d448f8",
   "Icon": "Spell_Evocation_ChromaticOrb_Thunder",
   "DisplayName": "Shared_Projectile_ChromaticOrb_Thunder_DisplayName",
   "Description": "Shared_Projectile_ChromaticOrb_Thunder_Description",
   "DescriptionParams": [
    "DealDamage(3d8,Thunder)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d8,Thunder)"
   ],
   "CastSound": "Spell_Cast_Damage_Thunder_ChromaticOrbThunder_L1to3",
   "PrepareEffect": "db5705a1-824d-42a3-8d09-2352b9cd4af9",
   "CastEffect": "2b284468-04a1-4730-a5c0-8ce54afbd937"
  },
  "Projectile_ChromaticOrb_Acid_2": {
   "Name": "Projectile_ChromaticOrb_Acid_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Acid",
   "SpellSuccess": [
    "DealDamage(3d8,Acid)"
   ],
   "DescriptionParams": [
    "DealDamage(3d8,Acid)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d8,Acid)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_ChromaticOrb_Acid",
   "PowerLevel": 2
  },
  "Projectile_ChromaticOrb_Cold_2": {
   "Name": "Projectile_ChromaticOrb_Cold_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Cold",
   "SpellSuccess": [
    "DealDamage(3d8,Cold)"
   ],
   "DescriptionParams": [
    "DealDamage(3d8,Cold)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d8,Cold)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_ChromaticOrb_Cold",
   "PowerLevel": 2
  },
  "Projectile_ChromaticOrb_Fire_2": {
   "Name": "Projectile_ChromaticOrb_Fire_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Fire",
   "SpellSuccess": [
    "DealDamage(3d8,Fire)"
   ],
   "DescriptionParams": [
    "DealDamage(3d8,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d8,Fire)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_ChromaticOrb_Fire",
   "PowerLevel": 2
  },
  "Projectile_ChromaticOrb_Lightning_2": {
   "Name": "Projectile_ChromaticOrb_Lightning_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Lightning",
   "SpellSuccess": [
    "DealDamage(3d8,Lightning)"
   ],
   "DescriptionParams": [
    "DealDamage(3d8,Lightning)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d8,Lightning)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_ChromaticOrb_Lightning",
   "PowerLevel": 2
  },
  "Projectile_ChromaticOrb_Poison_2": {
   "Name": "Projectile_ChromaticOrb_Poison_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Poison",
   "SpellSuccess": [
    "DealDamage(3d8,Poison)"
   ],
   "DescriptionParams": [
    "DealDamage(3d8,Poison)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d8,Poison)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_ChromaticOrb_Poison",
   "PowerLevel": 2
  },
  "Projectile_ChromaticOrb_Thunder_2": {
   "Name": "Projectile_ChromaticOrb_Thunder_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_ChromaticOrb_Thunder",
   "SpellSuccess": [
    "DealDamage(4d8,Thunder)"
   ],
   "DescriptionParams": [
    "DealDamage(4d8,Thunder)"
   ],
   "TooltipDamageList": [
    "DealDamage(4d8,Thunder)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_ChromaticOrb_Thunder",
   "PowerLevel": 2
  },
  "Projectile_EldritchBlast": {
   "Name": "Projectile_EldritchBlast",
   "SpellType": "Projectile",
   "Level": 0,
   "SpellSchool": "Evocation",
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "DealDamage(1d10,Force)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "3eaf2c46-46a9-4b52-8e05-fae7dc4e548b",
   "Icon": "Spell_Evocation_EldritchBlast",
   "DisplayName": "Shared_Projectile_EldritchBlast_DisplayName",
   "Description": "Shared_Projectile_EldritchBlast_Description",
   "DescriptionParams": [
    "DealDamage(1d10,Force)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d10,Force)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Force_EldritchBlast_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "AddFallDamageOnLand"
   ],
   "PrepareEffect": "cb1c210a-6674-4184-a61c-fcc172b3667e",
   "CastEffect": "8c57a806-472f-4d78-8226-0bba510103bd"
  },
  "Projectile_FireBolt": {
   "Name": "Projectile_FireBolt",
   "SpellType": "Projectile",
   "Level": 0,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:SurfaceChange(Ignite)",
    "GROUND:SurfaceChange(Vaporize)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "DealDamage(1d10,Fire)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "792ba497-a6ea-46bc-81cb-deb78e4dd9d3",
   "Icon": "Spell_Evocation_FireBolt",
   "DisplayName": "Shared_Projectile_FireBolt_DisplayName",
   "Description": "Shared_Projectile_FireBolt_Description",
   "DescriptionParams": [
    "DealDamage(1d10,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d10,Fire)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Fire_FireBolt_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "PrepareEffect": "c88e9cfa-df92-477a-ae75-cbfb932350b4",
   "CastEffect": "e235ca47-1bf5-4587-9475-cf191b6005f9"
  },
  "Projectile_FireBolt_NoRecharge": {
   "Name": "Projectile_FireBolt_NoRecharge",
   "SpellType": "Projectile",
   "Parent": "Projectile_FireBolt",
   "HitAnimationType": "MagicalDamage_External"
  },
  "Projectile_FireBolt_Goblin": {
   "Name": "Projectile_FireBolt_Goblin",
   "SpellType": "Projectile",
   "Parent": "Projectile_FireBolt",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "e7450b96-7921-4d05-bb38-76b36e4291a1(SPL_Arcane_01_Loop),,",
    ",,"
   ]
  },
  "Projectile_GuidingBolt": {
   "Name": "Projectile_GuidingBolt",
   "SpellType": "Projectile",
   "Level": 1,
   "SpellSchool": "Evocation",
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "DealDamage(4d6,Radiant)",
    " ApplyStatus(GUIDING_BOLT, 100, 2)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "c63c4527-1bdf-4635-ad59-7d7e2f666fa3",
   "Icon": "Spell_Evocation_GuidingBolt",
   "DisplayName": "Shared_Projectile_GuidingBolt_DisplayName",
   "Description": "Shared_Projectile_GuidingBolt_Description",
   "DescriptionParams": [
    "DealDamage(4d6,Radiant)"
   ],
   "TooltipDamageList": [
    "DealDamage(4d6,Radiant)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(GUIDING_BOLT, 100, 2)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Radiant_GuidingBolt_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasSomaticComponent",
    "HasVerbalComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "MemoryCost": 1,
   "PrepareEffect": "51422dfb-bc78-42aa-8c63-67e17535d77e",
   "CastEffect": "79a465b8-6054-47f8-92e4-9c340f96dd77"
  },
  "Projectile_GuildingBolt_2": {
   "Name": "Projectile_GuildingBolt_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_GuidingBolt",
   "SpellSuccess": [
    "DealDamage(5d6,Radiant)",
    " ApplyStatus(GUIDING_BOLT, 100, 2)"
   ],
   "Icon": "Spell_Evocation_GuidingBolt_2",
   "DescriptionParams": [
    "DealDamage(5d6,Radiant)"
   ],
   "TooltipDamageList": [
    "DealDamage(5d6,Radiant)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_GuidingBolt",
   "PowerLevel": 2
  },
  "Projectile_HailOfThorns": {
   "Name": "Projectile_HailOfThorns",
   "SpellType": "Projectile",
   "Level": 1,
   "SpellSchool": "Conjuration",
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "ExplodeRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC())",
   "TargetConditions": "Character()",
   "ProjectileCount": 1,
   "Template": "f78a99dd-80a7-4427-a950-239dc0041490",
   "Icon": "Spell_Conjuration_HailOfThorns",
   "DisplayName": "Shared_Projectile_HailOfThorns_DisplayName",
   "Description": "Shared_Projectile_HailOfThorns_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "DealDamage(1d10,Piercing)"
   ],
   "ExtraDescription": "Shared_Projectile_HailOfThorns_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "DealDamage(1d10,Piercing)"
   ],
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Physical_HailOfThorns_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "HitCosts": "BonusActionPoint:1",
   "SpellAnimation": [
    "661cae72-6bc9-4e6d-98e2-89db9e03d6b5(CMBT_Range_LHand_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Ammunition"
   ],
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasVerbalComponent",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "67770f05-890a-4b11-8a80-d60079041ab7",
   "CastEffect": "17fb1fe6-7dd9-4ce9-a7a3-d46453d26398"
  },
  "Projectile_HailOfThorns_2": {
   "Name": "Projectile_HailOfThorns_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_HailOfThorns",
   "Icon": "Spell_Conjuration_HailOfThorns_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_HailOfThorns",
   "PowerLevel": 2
  },
  "Projectile_PoisonSpray": {
   "Name": "Projectile_PoisonSpray",
   "SpellType": "Projectile",
   "Level": 0,
   "SpellSchool": "Conjuration",
   "TargetFloor": "-1",
   "TargetRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Constitution, SourceSpellDC(),AdvantageOnPoisoned())",
   "SpellSuccess": [
    "DealDamage(1d12,Poison)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "2b5bc94d-d60b-402e-92a3-76e6f2ba5fce",
   "Icon": "Spell_Conjuration_PoisonSpray",
   "DisplayName": "Shared_Projectile_PoisonSpray_DisplayName",
   "Description": "Shared_Projectile_PoisonSpray_Description",
   "DescriptionParams": [
    "DealDamage(1d12,Poison)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d12,Poison)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Poison_PoisonSpray_L0",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "d30d2b40-c45a-45bd-94d7-9b2baaf0f77b(SPL_Somatic_Beam_2HandCone_01_Cast),,",
    "a601b33c-5320-455d-b4d4-74d6dc35b757(SPL_Somatic_Beam_2HandCone_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Internal",
   "PrepareEffect": "61249cfa-bb68-4fd4-9517-b527fe7dbdce",
   "CastEffect": "11f94ff7-9c1b-431a-a26b-99e157026dee"
  },
  "Projectile_ProduceFlame_Hurl": {
   "Name": "Projectile_ProduceFlame_Hurl",
   "SpellType": "Projectile",
   "Level": 0,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "GROUND:RemoveStatus(SELF,PRODUCE_FLAME)",
    "GROUND:RemoveStatus(SELF,PRODUCE_FLAME_HURL)",
    "GROUND:RemoveStatus(SELF,PRODUCE_FLAME_HURL_FREE)",
    "GROUND:SurfaceChange(Ignite)",
    "GROUND:SurfaceChange(Vaporize)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": 9,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "DealDamage(1d8,Fire)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "6a2ef1c3-cdd3-4dd3-a023-16a26f5c1a99",
   "Icon": "Spell_Conjuration_ProduceFlame_Hurl",
   "DisplayName": "Shared_Projectile_ProduceFlame_Hurl_DisplayName",
   "Description": "Shared_Projectile_ProduceFlame_Hurl_Description",
   "DescriptionParams": [
    "DealDamage(1d8,Fire)"
   ],
   "ExtraDescriptionParams": [
    "Throwing the flame immediately after you conjure it does not cost an action. Extinguishing or throwing it on subsequent turns costs an action."
   ],
   "TooltipDamageList": [
    "DealDamage(1d8,Fire)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_ProduceFlameHurl_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "54d977c9-c17a-4ba2-a727-5c51f97ee91a(SPL_Druid_Damage_01_Prepare),,",
    "0a3d0870-c69c-449e-aa6d-fc7b61a37556(CMBT_Skill_Throw_High_01_Antic),,",
    "3ad7bf24-805f-458e-803b-8ee070d1597f(CMBT_Skill_Throw_High_01_Attack),,",
    "28b56ad3-33c4-4153-bbac-a1bf2fc5bc98(CMBT_Skill_Throw_High_01_Recover),,",
    "3fd6fd64-9a68-46c9-a7da-29a85e53ef7f(SPL_Druid_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "PrepareEffect": "61382e69-8e1a-4235-afed-8681082f3c42",
   "CastEffect": "f395c8b1-41a2-4cc6-9f56-2b0bcf86e761"
  },
  "Projectile_ProduceFlame_Hurl_Free": {
   "Name": "Projectile_ProduceFlame_Hurl_Free",
   "SpellType": "Projectile",
   "Parent": "Projectile_ProduceFlame_Hurl"
  },
  "Projectile_ThrowMissile": {
   "Name": "Projectile_ThrowMissile",
   "SpellType": "Projectile",
   "TargetFloor": "-1",
   "TargetRadius": 6,
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(1d4,Bludgeoning)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "ff93ba9c-124c-454e-ac8c-436c136bcef2",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_ThrowMissile_DisplayName",
   "Description": "Shared_Projectile_ThrowMissile_Description",
   "CastTextEvent": "Cast",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare),,",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic),,",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack),,",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ]
  },
  "Projectile_WitchBolt": {
   "Name": "Projectile_WitchBolt",
   "SpellType": "Projectile",
   "Level": 1,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:DealDamage(1d12,Lightning)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "ApplyStatus(WITCH_BOLT,100,10)",
    "DealDamage(1d12,Lightning)",
    "ApplyStatus(AI_HELPER_WITCHBOLT,100,2)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "f3e80d36-e158-4e4a-b79b-07e5d794ae32",
   "Icon": "Spell_Evocation_WitchBolt",
   "DisplayName": "Shared_Projectile_WitchBolt_DisplayName",
   "Description": "Shared_Projectile_WitchBolt_Description",
   "DescriptionParams": [
    "DealDamage(1d12,Lightning)"
   ],
   "ExtraDescription": "Shared_Projectile_WitchBolt_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d12,Lightning)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d12,Lightning)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(WITCH_BOLT,100,10)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Lightning_WitchBolt_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Electric",
   "RechargeValues": "3-6",
   "MemoryCost": 1,
   "PrepareEffect": "77241e8c-ae8d-4402-92d8-a871ce64d86f",
   "CastEffect": "6f4ad0bd-c5ce-4350-9865-c0ef858fd444"
  },
  "Projectile_WitchBolt_2": {
   "Name": "Projectile_WitchBolt_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_WitchBolt",
   "SpellSuccess": [
    "ApplyStatus(WITCH_BOLT,100,10)",
    "DealDamage(2d12,Lightning)",
    "ApplyStatus(AI_HELPER_WITCHBOLT,100,2)"
   ],
   "Icon": "Spell_Evocation_WitchBolt_2",
   "DescriptionParams": [
    "DealDamage(2d12,Lightning)",
    "DealDamage(1d12,Lightning)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d12,Lightning)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Projectile_WitchBolt",
   "PowerLevel": 2
  },
  "Projectile_MULTIPLE": {
   "Name": "Projectile_MULTIPLE",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_MagicMissile": {
   "Name": "Projectile_MagicMissile",
   "SpellType": "Projectile",
   "Level": 1,
   "SpellSchool": "Evocation",
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "AmountOfTargets": 3,
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Angle": 120,
   "Template": "348013df-7958-4ca9-ac9f-80337e054bee",
   "Icon": "Spell_Evocation_MagicMissile",
   "DisplayName": "Shared_Projectile_MagicMissile_DisplayName",
   "Description": "Shared_Projectile_MagicMissile_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Force_MagicMissile_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "RechargeValues": "4-6",
   "MemoryCost": 1,
   "PrepareEffect": "f9785481-e126-4499-b00e-f36fa02cd196",
   "CastEffect": "655f8b6b-f392-4c5d-8d74-d2a9df5f8f9d"
  },
  "Projectile_MagicMissile_2": {
   "Name": "Projectile_MagicMissile_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_MagicMissile",
   "AmountOfTargets": 4,
   "Icon": "Spell_Evocation_MagicMissile_2",
   "Description": "Shared_Projectile_MagicMissile_2_Description",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Projectile_MagicMissile",
   "PowerLevel": 2
  },
  "Projectile_MagicMissile_3": {
   "Name": "Projectile_MagicMissile_3",
   "SpellType": "Projectile",
   "Parent": "Projectile_MagicMissile",
   "AmountOfTargets": 5,
   "Description": "Shared_Projectile_MagicMissile_3_Description",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "RootSpellID": "Projectile_MagicMissile",
   "PowerLevel": 3
  },
  "Projectile_JUMP": {
   "Name": "Projectile_JUMP",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_Jump": {
   "Name": "Projectile_Jump",
   "SpellType": "Projectile",
   "TargetCeiling": "0.8",
   "TargetFloor": "-1",
   "TargetRadius": "4.5",
   "AddRangeFromAbility": "Strength,1",
   "ProjectileCount": 1,
   "Template": "9d893642-654d-41a4-aaad-81f9dc588941",
   "Icon": "Action_Jump",
   "DisplayName": "Shared_Projectile_Jump_DisplayName",
   "Description": "Shared_Projectile_Jump_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Jump",
   "ProjectileTerrainOffset": "Yes",
   "UseCosts": [
    "BonusActionPoint:1",
    "Movement:3"
   ],
   "SpellAnimation": [
    "b6bebde2-ecff-4df6-9d24-cd9fabb9fe79(CMBT_Skill_JumpFlight_01_Prepare),,",
    ",,",
    "f49c1788-7819-481f-9b83-2344d708e682(CMBT_Skill_JumpFlight_01_Cast),,",
    ",,",
    "f8fe2e89-2313-48f7-963c-0907b6306fd1(CMBT_Skill_JumpFlight_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsJump",
    "AddFallDamageOnLand",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "Stealth",
    "Invisible",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ],
   "SpellActionType": "Jump",
   "SpellAnimationIntentType": "Peaceful",
   "SpellJumpType": "Locomotion",
   "PrepareEffect": "095b53a6-b1f1-4f4f-84ab-88c2f90d85b0",
   "CastEffect": "e20c5e32-203b-4dae-9049-f0289a60c31d"
  },
  "Projectile_Jump_NPC": {
   "Name": "Projectile_Jump_NPC",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "Cooldown": "OncePerTurn",
   "TargetRadius": "4.5"
  },
  "Projectile_Jump_NoFallDamage": {
   "Name": "Projectile_Jump_NoFallDamage",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ]
  },
  "Projectile_Jump_Laezel": {
   "Name": "Projectile_Jump_Laezel",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "SpellSchool": "Transmutation",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "GROUND:ApplyStatus(SELF, LONG_JUMP,100,10)"
   ],
   "TargetRadius": "13.5",
   "AddRangeFromAbility": "Strength,3",
   "Template": "7f8920ef-81bb-4032-9201-28f06426da9b",
   "Icon": "Spell_Transmutation_LongJump",
   "DisplayName": "Shared_Projectile_Jump_Laezel_DisplayName",
   "Description": "Shared_Projectile_Jump_Laezel_Description",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellFlags": [
    "IsJump",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasSomaticComponent",
    "Stealth",
    "Invisible",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ],
   "SpellActionType": "None",
   "PrepareEffect": "0c04b248-6cc5-4642-9bd8-66fece7d2562",
   "CastEffect": "efbb5ab7-1df9-4d00-8208-5ff6f1984619"
  },
  "Projectile_Jump_FlamingSphere": {
   "Name": "Projectile_Jump_FlamingSphere",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "Cooldown": "OncePerTurnNoRealtime",
   "TargetRadius": 3,
   "Template": "e9b3a827-705e-4576-8710-80cbc384f63a",
   "DisplayName": "Shared_Projectile_Jump_FlamingSphere_DisplayName",
   "Description": "Shared_Projectile_Jump_FlamingSphere_Description",
   "DescriptionParams": [
    "Distance(3)"
   ],
   "UseCosts": [
    "Movement:3"
   ],
   "PrepareEffect": "6dfbb6c1-4461-46bb-adb6-89c72b87b302",
   "CastEffect": "ab8f6819-f2f2-44fd-80d2-308aac5e9edb"
  },
  "Projectile_Fly": {
   "Name": "Projectile_Fly",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "TargetRadius": 18,
   "Template": "64046453-9e1f-4f1d-a86d-f4dc4acff457",
   "DisplayName": "Shared_Projectile_Fly_DisplayName",
   "Description": "Shared_Projectile_Fly_Description",
   "UseCosts": [
    "Movement:3"
   ],
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "RangeIgnoreVerticalThreshold",
    "Stealth",
    "Invisible"
   ],
   "PrepareEffect": "e10fa2ab-984e-4ab7-b756-4982dfca4018",
   "CastEffect": "8b2df096-373b-4323-b5bc-6cf2c3db8281"
  },
  "Projectile_BEAM": {
   "Name": "Projectile_BEAM",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_RayOfEnfeeblement": {
   "Name": "Projectile_RayOfEnfeeblement",
   "SpellType": "Projectile",
   "Level": 2,
   "SpellSchool": "Necromancy",
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "ApplyStatus(RAY_OF_ENFEEBLEMENT,100,10)"
   ],
   "TargetConditions": "Character() and not Self()",
   "ProjectileCount": 1,
   "Template": "ada4b2b0-5e65-4257-9fea-b7376bd92d5f",
   "Icon": "Spell_Necromancy_RayOfInfeeblement",
   "DisplayName": "Shared_Projectile_RayOfEnfeeblement_DisplayName",
   "Description": "Shared_Projectile_RayOfEnfeeblement_Description",
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(RAY_OF_ENFEEBLEMENT,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_RayOfEnfeeblement_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "556fd141-698d-4c08-9322-ad155821260a",
   "CastEffect": "ccc5dbad-ad6d-4439-821a-844d4c9df9b9"
  },
  "Projectile_RayOfFrost": {
   "Name": "Projectile_RayOfFrost",
   "SpellType": "Projectile",
   "Level": 0,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:SurfaceChange(Freeze)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "DealDamage(1d8,Cold)",
    "ApplyStatus(RAY_OF_FROST,100,1)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "47ac1e9a-3b62-4010-bde9-0dc602edd114",
   "Icon": "Spell_Evocation_RayOfFrost",
   "DisplayName": "Shared_Projectile_RayOfFrost_DisplayName",
   "Description": "Shared_Projectile_RayOfFrost_Description",
   "DescriptionParams": [
    "DealDamage(1d8,Cold)",
    "Distance(3)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d8,Cold)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(RAY_OF_FROST,100,1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Ice_RayOfFrost_L0",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "PrepareEffect": "6258b57a-f7c5-4654-b54a-6c908479a6fd",
   "CastEffect": "f3d3763c-1cbb-4d7a-94da-d9f703b7d67a"
  },
  "Projectile_RayOfSickness": {
   "Name": "Projectile_RayOfSickness",
   "SpellType": "Projectile",
   "Level": 1,
   "SpellSchool": "Necromancy",
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "IF(not SavingThrow(Ability.Constitution, SourceSpellDC(),AdvantageOnPoisoned())):ApplyStatus(POISONED,100,2)",
    "DealDamage(2d8,Poison)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "781dbc16-4d57-4296-95f5-d07410c8a51b",
   "Icon": "Spell_Necromancy_RayOfSickness",
   "DisplayName": "Shared_Projectile_RayOfSickness_DisplayName",
   "Description": "Shared_Projectile_RayOfSickness_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Poison)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d8,Poison)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(POISONED,100,2)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Poison_RayOfSickness_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasSomaticComponent",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Internal",
   "MemoryCost": 1,
   "PrepareEffect": "8693b3af-a054-451e-8b16-97e9f8577c96",
   "CastEffect": "27d54d30-6c5a-485e-bef8-b7be656ec00c"
  },
  "Projectile_RayOfSickness_2": {
   "Name": "Projectile_RayOfSickness_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_RayOfSickness",
   "SpellSuccess": [
    "IF(not SavingThrow(Ability.Constitution, SourceSpellDC(),AdvantageOnPoisoned())):ApplyStatus(POISONED,100,2)",
    "DealDamage(3d8,Poison)"
   ],
   "Icon": "Spell_Necromancy_RayOfSickness_2",
   "DescriptionParams": [
    "DealDamage(3d8,Poison)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d8,Poison)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Projectile_RayOfSickness",
   "PowerLevel": 2
  },
  "Projectile_ScorchingRay": {
   "Name": "Projectile_ScorchingRay",
   "SpellType": "Projectile",
   "Level": 2,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:SurfaceChange(Ignite)",
    "GROUND:SurfaceChange(Vaporize)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "AmountOfTargets": 3,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "DealDamage(2d6,Fire)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "76dc68a0-5bc5-4ffc-be02-547f690af36b",
   "Icon": "Spell_Evocation_ScorchingRay",
   "DisplayName": "Shared_Projectile_ScorchingRay_DisplayName",
   "Description": "Shared_Projectile_ScorchingRay_Description",
   "DescriptionParams": [
    "DealDamage(2d6,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d6,Fire)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Fire_ScorchingRay_L0",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasSomaticComponent",
    "HasVerbalComponent",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "RechargeValues": "5-6",
   "MemoryCost": 1,
   "PrepareEffect": "36303314-5666-47eb-a0cf-e92684b9049d",
   "CastEffect": "4481fb37-77c2-4b70-8675-01638932c01b"
  },
  "Projectile_ScorchingRay_LightCleric": {
   "Name": "Projectile_ScorchingRay_LightCleric",
   "SpellType": "Projectile",
   "Parent": "Projectile_ScorchingRay",
   "ExtraDescription": "Shared_Projectile_ScorchingRay_LightCleric_ExtraDescription"
  },
  "Projectile_ScorchingRay_CircletOfBlasting": {
   "Name": "Projectile_ScorchingRay_CircletOfBlasting",
   "SpellType": "Projectile",
   "Parent": "Projectile_ScorchingRay",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Projectile_AOE": {
   "Name": "Projectile_AOE",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_AcidSplash": {
   "Name": "Projectile_AcidSplash",
   "SpellType": "Projectile",
   "Level": 0,
   "SpellSchool": "Conjuration",
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "AreaRadius": 2,
   "ExplodeRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC())",
   "SpellSuccess": [
    "DealDamage(1d6,Acid)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "2e9faa4c-79d7-4dc2-ba5f-5c7c4c203496",
   "Icon": "Spell_Conjuration_AcidSplash",
   "DisplayName": "Shared_Projectile_AcidSplash_DisplayName",
   "Description": "Shared_Projectile_AcidSplash_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Acid)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d6,Acid)"
   ],
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Acid_AcidSplash_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "PrepareEffect": "41193b01-e0c2-4945-ba40-7c3464b71bc0",
   "CastEffect": "3d48b43d-1f17-4947-aa43-c142288d3f29"
  },
  "Projectile_AcidSplash_Goblin": {
   "Name": "Projectile_AcidSplash_Goblin",
   "SpellType": "Projectile",
   "Parent": "Projectile_AcidSplash",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ]
  },
  "Projectile_Fireball": {
   "Name": "Projectile_Fireball",
   "SpellType": "Projectile",
   "Level": 3,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:SurfaceChange(Ignite)",
    "GROUND:SurfaceChange(Vaporize)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "AreaRadius": 6,
   "ExplodeRadius": 6,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC()) ",
   "SpellSuccess": [
    "DealDamage(8d6,Fire)"
   ],
   "ProjectileCount": 1,
   "Template": "348013df-7958-4ca9-ac9f-80337e054bee",
   "Icon": "Spell_Evocation_Fireball",
   "DisplayName": "Shared_Projectile_Fireball_DisplayName",
   "Description": "Shared_Projectile_Fireball_Description",
   "DescriptionParams": [
    "Distance(6)",
    "DealDamage(8d6,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(8d6,Fire)"
   ],
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "MemoryCost": 1
  },
  "Projectile_Fireball_FromWand": {
   "Name": "Projectile_Fireball_FromWand",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball"
  },
  "Projectile_Fireball_FromWeapon": {
   "Name": "Projectile_Fireball_FromWeapon",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball"
  },
  "Projectile_Fireball_FromItem": {
   "Name": "Projectile_Fireball_FromItem",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball"
  },
  "Projectile_Fireball_FromScroll": {
   "Name": "Projectile_Fireball_FromScroll",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball"
  },
  "Projectile_HordeBreaker_Explosion": {
   "Name": "Projectile_HordeBreaker_Explosion",
   "SpellType": "Projectile",
   "SpellProperties": [
    "AOE:ApplyStatus(HORDE_BREAKER_TARGET,100,1)"
   ],
   "ExplodeRadius": 2,
   "Template": "ff93ba9c-124c-454e-ac8c-436c136bcef2",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "38cdb41c-2eec-4e03-bb31-83cff0346c35(SPL_Somatic_Projectile_01_Cast),,",
    "85414f5f-b448-4dda-9370-1b6c4b38b561(SPL_Somatic_Projectile_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ]
  },
  "Projectile_WildMagic_Heal": {
   "Name": "Projectile_WildMagic_Heal",
   "SpellType": "Projectile",
   "SpellProperties": [
    "RegainHitPoints(1d4)"
   ],
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "TargetConditions": "Character()",
   "Template": "e7904756-aa17-4c7d-aa93-1e71f8465f7b",
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "9d86c202-31a5-4ba3-ae60-ec4fbb425665(SPL_Somatic_Aoe_Widen_01_Cast),,",
    "a4112e22-e36f-44ff-828f-81252360da53(SPL_Somatic_Aoe_Widen_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "TargetEffect": "fd5dfd79-b4db-43aa-a66b-926bfa1ef963"
  },
  "Projectile_WildMagic_Heal_2": {
   "Name": "Projectile_WildMagic_Heal_2",
   "SpellType": "Projectile",
   "Parent": "Projectile_WildMagic_Heal",
   "SpellProperties": [
    "RegainHitPoints(2d4)"
   ],
   "HitAnimationType": "MagicalNonDamage"
  },
  "Projectile_WildMagic_Heal_3": {
   "Name": "Projectile_WildMagic_Heal_3",
   "SpellType": "Projectile",
   "Parent": "Projectile_WildMagic_Heal",
   "SpellProperties": [
    "RegainHitPoints(3d4)"
   ],
   "HitAnimationType": "MagicalNonDamage"
  },
  "Projectile_WildMagic_Heal_4": {
   "Name": "Projectile_WildMagic_Heal_4",
   "SpellType": "Projectile",
   "Parent": "Projectile_WildMagic_Heal",
   "SpellProperties": [
    "RegainHitPoints(4d4)"
   ],
   "HitAnimationType": "MagicalNonDamage"
  },
  "Projectile_ITEMS": {
   "Name": "Projectile_ITEMS",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_ArrowOfDetonation": {
   "Name": "Projectile_ArrowOfDetonation",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "IF(not SavingThrow(Ability.Strength,12)):Force(5, TargetToEntity)"
   ],
   "ExplodeRadius": 2,
   "SpellSuccess": [
    "TARGET:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " TARGET:ExecuteWeaponFunctors(MainHand)"
   ],
   "Template": "46de315c-71f5-4848-818a-dbec9c93583b",
   "Icon": "Item_ARR_Arrow_Of_Detonation",
   "DisplayName": "Shared_Projectile_ArrowOfDetonation_DisplayName",
   "Description": "Shared_Projectile_ArrowOfDetonation_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "Distance(5)"
   ],
   "CastSound": "Proj_Arr_Cast_ArrowOfDetonation",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "AddFallDamageOnLand"
   ],
   "PrepareEffect": "b7096c7b-7d2a-405a-907c-ea2a50edb660",
   "CastEffect": "c1a2c14e-e131-405c-b140-513c53e45117"
  },
  "Projectile_ArrowOfFire": {
   "Name": "Projectile_ArrowOfFire",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "IF(not SavingThrow(Ability.Dexterity,10)):DealDamage(1d4,Fire)",
    " GROUND:SurfaceChange(Ignite)",
    " GROUND:SurfaceChange(Vaporize)",
    "GROUND:CreateSurface(2,,Fire)",
    "GROUND:ApplyStatus(BURNING,100,1)"
   ],
   "ExplodeRadius": 2,
   "SpellSuccess": [
    "TARGET:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " TARGET:ExecuteWeaponFunctors(MainHand)"
   ],
   "Template": "a987eb34-3d51-42fb-ba62-d2ebfbdc58c0",
   "Icon": "Item_ARR_Arrow_Of_Fire",
   "DisplayName": "Shared_Projectile_ArrowOfFire_DisplayName",
   "Description": "Shared_Projectile_ArrowOfFire_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "DealDamage(1d4,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "DealDamage(1d4,Fire)"
   ],
   "CastSound": "Proj_Arr_Cast_Arrow_Of_Fire",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "PrepareEffect": "058553a4-1630-44ff-b08a-4c9dea9a6b32",
   "CastEffect": "b26abd87-14b7-4ed0-93d1-f424bc4fa236"
  },
  "Projectile_ArrowOfDarkness": {
   "Name": "Projectile_ArrowOfDarkness",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "GROUND:CreateSurface(3,3,DarknessCloud)"
   ],
   "SpellSuccess": [
    "TARGET:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " TARGET:ExecuteWeaponFunctors(MainHand)"
   ],
   "Template": "560870a2-56db-47c9-839c-04156607b479",
   "Icon": "Item_ARR_Arrow_Of_Darkness",
   "DisplayName": "Shared_Projectile_ArrowOfDarkness_DisplayName",
   "Description": "Shared_Projectile_ArrowOfDarkness_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " "
   ],
   "ExtraDescription": "Shared_Projectile_ArrowOfDarkness_ExtraDescription",
   "CastSound": "Proj_Arr_Cast_Arrow_Darkness",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "Stealth",
    "Invisible"
   ],
   "PrepareEffect": "eb0b8644-0a3a-4bef-938c-46f82e770657",
   "CastEffect": "e81aae12-0757-43c3-bc92-575796978ee2"
  },
  "Projectile_ArrowOfIce": {
   "Name": "Projectile_ArrowOfIce",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "IF(not SavingThrow(Ability.Dexterity,10)):DealDamage(1d4,Cold)",
    " GROUND:SurfaceChange(Freeze)",
    " GROUND:CreateSurface(2,,WaterFrozen)"
   ],
   "ExplodeRadius": 2,
   "SpellSuccess": [
    "TARGET:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " TARGET:ExecuteWeaponFunctors(MainHand)"
   ],
   "Template": "b8b95321-ab56-4613-8160-ef7153d315aa",
   "Icon": "Item_ARR_Arrow_Of_Ice",
   "DisplayName": "Shared_Projectile_ArrowOfIce_DisplayName",
   "Description": "Shared_Projectile_ArrowOfIce_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " DealDamage(1d4,Cold)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " DealDamage(1d4,Cold)"
   ],
   "CastSound": "Proj_Arr_Cast_Arrow_Ice",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "PrepareEffect": "62bfb923-6000-4022-931f-f9c0fac3b6a0",
   "CastEffect": "4ab28ec5-1118-4c4b-9376-ba03e8aed6ea"
  },
  "Projectile_ArrowOfAcid": {
   "Name": "Projectile_ArrowOfAcid",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "IF(not SavingThrow(Ability.Dexterity,10)): DealDamage(1d4,Acid)",
    " GROUND:CreateSurface(2,,Acid)"
   ],
   "ExplodeRadius": 2,
   "SpellSuccess": [
    "TARGET:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " TARGET:ExecuteWeaponFunctors(MainHand)"
   ],
   "Template": "1cee65a9-20fa-4b5f-9e38-c31035bdec76",
   "Icon": "Item_ARR_Arrow_Of_Acid",
   "DisplayName": "Shared_Projectile_ArrowOfAcid_DisplayName",
   "Description": "Shared_Projectile_ArrowOfAcid_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " DealDamage(1d4,Acid)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " DealDamage(1d4,Acid)"
   ],
   "CastSound": "Proj_Arr_Cast_ArrowOfAcid",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "PrepareEffect": "17d73412-9f44-4080-975f-f79b7a2921bc",
   "CastEffect": "85559b54-6970-4d3a-8c68-0f661d25c60c"
  },
  "Projectile_ArrowOfLightning": {
   "Name": "Projectile_ArrowOfLightning",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "IF(not SavingThrow(Ability.Dexterity,10)):DealDamage(1d4,Lightning)",
    " GROUND:SurfaceChange(Electrify)"
   ],
   "ExplodeRadius": 2,
   "SpellSuccess": [
    "TARGET:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " TARGET:ExecuteWeaponFunctors(MainHand)"
   ],
   "Template": "e11d8ca4-6880-4876-88af-220851075f80",
   "Icon": "Item_ARR_Arrow_Of_Lightning",
   "DisplayName": "Shared_Projectile_ArrowOfLightning_DisplayName",
   "Description": "Shared_Projectile_ArrowOfLightning_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " DealDamage(1d4,Lightning)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " DealDamage(1d4,Lightning)"
   ],
   "CastSound": "Proj_Arr_Cast_Arrow_Of_Lightning",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Electric",
   "PrepareEffect": "80b941f4-9dc6-4236-a3a2-51d470582411",
   "CastEffect": "733aaa75-f2eb-49fd-be6c-0f283de55b6f"
  },
  "Projectile_ArrowOfPiercing": {
   "Name": "Projectile_ArrowOfPiercing",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "Template": "834f77fd-a61a-4282-9635-be98a4396ae1",
   "Icon": "Item_ARR_Arrow_Of_Piercing",
   "DisplayName": "Shared_Projectile_ArrowOfPiercing_DisplayName",
   "CastSound": "Proj_Arr_Cast_Arrow_Piercing",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ]
  },
  "Projectile_Barbed_Arrow": {
   "Name": "Projectile_Barbed_Arrow",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "IF(not SavingThrow(Ability.Dexterity,10)):ApplyStatus(BARBED_ARROW, 100, 3)"
   ],
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "Template": "834f77fd-a61a-4282-9635-be98a4396ae1",
   "Icon": "Item_ARR_Arrow_Of_Piercing",
   "DisplayName": "Shared_Projectile_Barbed_Arrow_DisplayName",
   "CastSound": "Proj_Arr_Cast_Arrow_Piercing",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ]
  },
  "Projectile_ArrowOfRicochet": {
   "Name": "Projectile_ArrowOfRicochet",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "AreaRadius": 6,
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "Template": "a50cd248-2f39-43e5-8435-940bf7f790f7",
   "Icon": "Item_ARR_Arrow_Of_Ricochet",
   "DisplayName": "Shared_Projectile_ArrowOfRicochet_DisplayName",
   "CastSound": "Proj_Arr_Cast_Arrow_Ricochet",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "ForkChance": 100,
   "MaxForkCount": 1,
   "ForkLevels": 2,
   "ForkingConditions": "not Ally()"
  },
  "Projectile_ArrowOfDispelling": {
   "Name": "Projectile_ArrowOfDispelling",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "DisplayName": "Shared_Projectile_ArrowOfDispelling_DisplayName"
  },
  "Projectile_ArrowOfAntimagic": {
   "Name": "Projectile_ArrowOfAntimagic",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "DisplayName": "Shared_Projectile_ArrowOfAntimagic_DisplayName"
  },
  "Projectile_ArrowOfTeleportation": {
   "Name": "Projectile_ArrowOfTeleportation",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "GROUND:TeleportSource()"
   ],
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "DisplayName": "Shared_Projectile_ArrowOfTeleportation_DisplayName"
  },
  "Projectile_ArrowOfWraithsEmbrace": {
   "Name": "Projectile_ArrowOfWraithsEmbrace",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " DealDamage(1d4, Necrotic)",
    " ApplyStatus(WRAITHS_EMBRACE,100,1)"
   ],
   "Template": "0ec803e3-b962-4e96-bfcf-d2221fdddba3",
   "DisplayName": "Shared_Projectile_ArrowOfWraithsEmbrace_DisplayName",
   "CastSound": "Proj_Arr_Cast_ArrowOfWrathsEmbrace",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "PrepareEffect": "c0f8e443-7c4f-464e-b39d-76f0a8d1a4e3",
   "CastEffect": "eb0be77f-6358-4d72-b42b-856045f9631a"
  },
  "Projectile__ArrowOfXSlaying": {
   "Name": "Projectile__ArrowOfXSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellSuccess": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ]
  },
  "Projectile_ArrowOfAberrationSlaying": {
   "Name": "Projectile_ArrowOfAberrationSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfAberrationSlaying_DisplayName"
  },
  "Projectile_ArrowOfBeastSlaying": {
   "Name": "Projectile_ArrowOfBeastSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfBeastSlaying_DisplayName"
  },
  "Projectile_ArrowOfCelestialSlaying": {
   "Name": "Projectile_ArrowOfCelestialSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfCelestialSlaying_DisplayName"
  },
  "Projectile_ArrowOfConstructSlaying": {
   "Name": "Projectile_ArrowOfConstructSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfConstructSlaying_DisplayName"
  },
  "Projectile_ArrowOfDragonSlaying": {
   "Name": "Projectile_ArrowOfDragonSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfDragonSlaying_DisplayName"
  },
  "Projectile_ArrowOfElementalSlaying": {
   "Name": "Projectile_ArrowOfElementalSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfElementalSlaying_DisplayName"
  },
  "Projectile_ArrowOfFeySlaying": {
   "Name": "Projectile_ArrowOfFeySlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfFeySlaying_DisplayName"
  },
  "Projectile_ArrowOfFiendSlaying": {
   "Name": "Projectile_ArrowOfFiendSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfFiendSlaying_DisplayName"
  },
  "Projectile_ArrowOfGiantSlaying": {
   "Name": "Projectile_ArrowOfGiantSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfGiantSlaying_DisplayName"
  },
  "Projectile_ArrowOfHumanoidSlaying": {
   "Name": "Projectile_ArrowOfHumanoidSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfHumanoidSlaying_DisplayName"
  },
  "Projectile_ArrowOfMonstrositySlaying": {
   "Name": "Projectile_ArrowOfMonstrositySlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfMonstrositySlaying_DisplayName"
  },
  "Projectile_ArrowOfOozeSlaying": {
   "Name": "Projectile_ArrowOfOozeSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfOozeSlaying_DisplayName"
  },
  "Projectile_ArrowOfPlantSlaying": {
   "Name": "Projectile_ArrowOfPlantSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfPlantSlaying_DisplayName"
  },
  "Projectile_ArrowOfUndeadSlaying": {
   "Name": "Projectile_ArrowOfUndeadSlaying",
   "SpellType": "Projectile",
   "Parent": "Projectile__ArrowOfXSlaying",
   "DisplayName": "Shared_Projectile_ArrowOfUndeadSlaying_DisplayName"
  },
  "Projectile_Bomb": {
   "Name": "Projectile_Bomb",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "AreaRadius": 4,
   "ExplodeRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 12)",
   "TargetConditions": "Character() or Item()",
   "Template": "820c9654-3d56-405e-bdba-81ca7f3f5953",
   "CycleConditions": "Enemy() and not Dead()"
  },
  "Projectile_HolyWater": {
   "Name": "Projectile_HolyWater",
   "SpellType": "Projectile",
   "Parent": "Projectile_Bomb",
   "SpellProperties": [
    "GROUND:CreateSurface(2,,Water)"
   ],
   "ExplodeRadius": 2,
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "Template": "884deade-2472-45c0-a6ef-f8df5f267743",
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_Barrel_Explosion": {
   "Name": "Projectile_Barrel_Explosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,Fire)",
    "Force(3, TargetToEntity)"
   ],
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 12)",
   "SpellSuccess": [
    "DealDamage(6d6,Fire)"
   ],
   "TargetConditions": "Character() or Item()",
   "Template": "c6d0a6db-72f0-4c53-8381-177c32dec188",
   "DisplayName": "Shared_Projectile_Barrel_Explosion_DisplayName",
   "Description": "Shared_Projectile_Barrel_Explosion_Description",
   "DescriptionParams": [
    "DealDamage(6d6,Fire)",
    "Distance(6)"
   ],
   "TooltipDamageList": [
    "DealDamage(6d6,Fire)"
   ],
   "CycleConditions": "Enemy() and not Dead()",
   "SpellFlags": [
    "AddFallDamageOnLand",
    "IsHarmful",
    "RangeIgnoreVerticalThreshold"
   ]
  },
  "Projectile_Barrel_Explosion_Smokepowder": {
   "Name": "Projectile_Barrel_Explosion_Smokepowder",
   "SpellType": "Projectile",
   "Parent": "Projectile_Barrel_Explosion",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,Fire)",
    "Force(6, TargetToEntity)"
   ],
   "Template": "d2ada6a9-ec90-4cc5-9c8b-87160585c359",
   "Description": "Shared_Projectile_Barrel_Explosion_Smokepowder_Description"
  },
  "Projectile_Bag_Smokepowder": {
   "Name": "Projectile_Bag_Smokepowder",
   "SpellType": "Projectile",
   "Parent": "Projectile_Barrel_Explosion_Smokepowder",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,Fire)",
    "Force(3, TargetToEntity)"
   ],
   "AreaRadius": 3,
   "Template": "8d505716-09c4-4c8e-abd7-2529e3c63d4d"
  },
  "Projectile_CoalBasket_Explosion": {
   "Name": "Projectile_CoalBasket_Explosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,Fire)",
    "Force(1, TargetToEntity)"
   ],
   "SpellSuccess": [
    "DealDamage(1d6,Fire)",
    "DealDamage(1d4,Force)"
   ],
   "SpellFail": [
    "DealDamage(1d6,Fire)"
   ],
   "TargetConditions": "Character() or Item()",
   "TooltipDamageList": [
    "DealDamage(1d6,Fire)",
    "DealDamage(1d4,Force)"
   ]
  },
  "Projectile_Stalactite_Explosion": {
   "Name": "Projectile_Stalactite_Explosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_Barrel_Explosion",
   "AreaRadius": 1,
   "DeathType": "KnockedDown",
   "ExplodeRadius": 1,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 14)",
   "TargetConditions": "Character() or Item()",
   "Template": "9d893642-654d-41a4-aaad-81f9dc588941",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_Stalactite_Explosion_DisplayName",
   "Description": "Shared_Projectile_Stalactite_Explosion_Description",
   "CycleConditions": "Enemy() and not Dead()",
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_ThrowNet": {
   "Name": "Projectile_ThrowNet",
   "SpellType": "Projectile",
   "TargetFloor": "-1",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "SpellSuccess": [
    "ApplyStatus(NET, 100, 2)"
   ],
   "TargetConditions": "Character() and not Self()",
   "ProjectileCount": 1,
   "Template": "ff93ba9c-124c-454e-ac8c-436c136bcef2",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_ThrowNet_DisplayName",
   "Description": "Shared_Projectile_ThrowNet_Description",
   "ExtraDescription": "Shared_Projectile_ThrowNet_ExtraDescription",
   "CastTextEvent": "Cast",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "86e734fe-873a-4dc0-a83d-d549cb152aae(CMBT_Skill_Throw_Heavy_01_Prepare),,",
    "b777df54-dcfb-4485-90dc-040a0a45a690(CMBT_Skill_Throw_Heavy_01_Antic),,",
    "b3f94255-adc0-4cea-b9a5-91e4f838345b(CMBT_Skill_Throw_Heavy_01_Attack),,",
    "33fddb58-fd8b-4b13-9555-4fb5df8183aa(CMBT_Skill_Throw_Heavy_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Control"
  },
  "Projectile_RottenFoodExplosion": {
   "Name": "Projectile_RottenFoodExplosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "ApplyStatus(STENCH,100,10)"
   ],
   "TargetRadius": 0,
   "AreaRadius": 3,
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_SplinterExplosion": {
   "Name": "Projectile_SplinterExplosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_FireBolt",
   "AreaRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 10)",
   "SpellSuccess": [
    "DealDamage(1d6,Piercing)"
   ],
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_BoilingWater": {
   "Name": "Projectile_BoilingWater",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "Level": 3,
   "SpellSchool": "Evocation",
   "TargetRadius": 18,
   "AreaRadius": 2,
   "ExplodeRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 10)",
   "SpellSuccess": [
    "DealDamage(1d6,Fire)"
   ],
   "ProjectileCount": 1,
   "Template": "30834f85-9a5d-4f03-ac72-886facc864fe",
   "Description": "Shared_Projectile_BoilingWater_Description",
   "DescriptionParams": [
    "DealDamage(8d6,Fire)"
   ],
   "CastTextEvent": "Cast",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsTrap"
   ],
   "HitAnimationType": "MagicalDamage_External"
  },
  "Projectile_SpiderlingSpawning": {
   "Name": "Projectile_SpiderlingSpawning",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "GROUND:Summon(3c88c158-eebe-4e8a-bc20-e0c4ae336163, -1, Projectile_AiHelper_SpiderlingSpawning)",
    " GROUND:Summon(3c88c158-eebe-4e8a-bc20-e0c4ae336163, -1, Projectile_AiHelper_SpiderlingSpawning)",
    " GROUND:Summon(3c88c158-eebe-4e8a-bc20-e0c4ae336163, -1, Projectile_AiHelper_SpiderlingSpawning)",
    " GROUND:Summon(3c88c158-eebe-4e8a-bc20-e0c4ae336163, -1, Projectile_AiHelper_SpiderlingSpawning)",
    " GROUND:Summon(3c88c158-eebe-4e8a-bc20-e0c4ae336163, -1, Projectile_AiHelper_SpiderlingSpawning)"
   ],
   "TargetRadius": 0,
   "AreaRadius": 0,
   "ExplodeRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 10,AdvantageOnFrightened())",
   "SpellSuccess": [
    "ApplyStatus(FRIGHTENED, 100, 2)"
   ],
   "Template": "8d43d8a4-6402-4a52-ae83-5d8542a2be91"
  },
  "Projectile_ApplyPoisonStatusAoE": {
   "Name": "Projectile_ApplyPoisonStatusAoE",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "AreaRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Constitution, 10,AdvantageOnPoisoned())",
   "SpellSuccess": [
    "ApplyStatus(POISONED, 100, 2)"
   ],
   "HitAnimationType": "MagicalDamage_Internal"
  },
  "Projectile_CausticBulb": {
   "Name": "Projectile_CausticBulb",
   "SpellType": "Projectile",
   "SpellProperties": [
    "GROUND:CreateSurface(3,,CausticBrine)"
   ],
   "TargetFloor": "-1",
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "TargetConditions": "Character() or Item()",
   "Template": "2d009d7c-9d4f-48ae-a12e-12b455f01f18",
   "CycleConditions": "Enemy() and not Dead()",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "7e67bfd0-2fc2-4d10-bed5-cfda9e660de5(CMBT_Range_RHand_01_Antic),,",
    "eb054308-7fce-4b85-bf4c-7a0031fda7ac(CMBT_Range_RHand_01_Attack),,",
    "0b0dc35b-4953-45c0-a9eb-8d3fef5e798a(CMBT_Range_RHand_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    "b2e9c771-3497-444c-b360-23b4441985a1(CMBT_Range_RHand_01_Dash),,"
   ],
   "HitAnimationType": "MagicalDamage_External"
  },
  "Projectile_SpikedBulb": {
   "Name": "Projectile_SpikedBulb",
   "SpellType": "Projectile",
   "SpellProperties": [
    "DealDamage(1,Piercing)",
    "IF(Character()):ApplyStatus(BLEEDING,100,1)"
   ],
   "TargetFloor": "-1",
   "AreaRadius": 4,
   "ExplodeRadius": 4,
   "TargetConditions": "Character() or Item()",
   "Template": "d06d81eb-b358-4936-9b97-6983af5b205d",
   "CycleConditions": "Enemy() and not Dead()",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "7e67bfd0-2fc2-4d10-bed5-cfda9e660de5(CMBT_Range_RHand_01_Antic),,",
    "eb054308-7fce-4b85-bf4c-7a0031fda7ac(CMBT_Range_RHand_01_Attack),,",
    "0b0dc35b-4953-45c0-a9eb-8d3fef5e798a(CMBT_Range_RHand_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    "b2e9c771-3497-444c-b360-23b4441985a1(CMBT_Range_RHand_01_Dash),,"
   ]
  },
  "Projectile_VacuumBulb": {
   "Name": "Projectile_VacuumBulb",
   "SpellType": "Projectile",
   "SpellProperties": [
    "DealDamage(1,Force)",
    "Force(-5, TargetToEntity)"
   ],
   "TargetFloor": "-1",
   "AreaRadius": 6,
   "ExplodeRadius": 6,
   "TargetConditions": "not Self() and not Grounded() and IsMovable()",
   "Template": "a312633d-f207-4e0d-953c-76bfdc06342c",
   "CycleConditions": "Enemy() and not Dead()",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "7e67bfd0-2fc2-4d10-bed5-cfda9e660de5(CMBT_Range_RHand_01_Antic),,",
    "eb054308-7fce-4b85-bf4c-7a0031fda7ac(CMBT_Range_RHand_01_Attack),,",
    "0b0dc35b-4953-45c0-a9eb-8d3fef5e798a(CMBT_Range_RHand_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    "b2e9c771-3497-444c-b360-23b4441985a1(CMBT_Range_RHand_01_Dash),,"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand"
   ]
  },
  "Projectile_WaterSplash": {
   "Name": "Projectile_WaterSplash",
   "SpellType": "Projectile",
   "SpellProperties": [
    "ApplyStatus(WET,100, 3)"
   ],
   "TargetFloor": "-1",
   "AreaRadius": 2,
   "ExplodeRadius": 2,
   "Template": "f346b284-854e-4dd9-b87c-3938f5178265",
   "SpellAnimation": [
    ",,",
    ",,",
    "eb054308-7fce-4b85-bf4c-7a0031fda7ac(CMBT_Range_RHand_01_Attack),,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_WaterSplash_Large": {
   "Name": "Projectile_WaterSplash_Large",
   "SpellType": "Projectile",
   "Parent": "Projectile_WaterSplash",
   "AreaRadius": 3,
   "ExplodeRadius": 3
  },
  "Projectile_POTIONS": {
   "Name": "Projectile_POTIONS",
   "SpellType": "Projectile",
   "TargetRadius": 1,
   "AreaRadius": 1,
   "ExplodeRadius": 1,
   "TargetConditions": "Character()",
   "Template": "26c20c57-bdf8-4bc1-99ec-e8582a04daef",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_POTIONS_DisplayName",
   "SpellAnimation": [
    ",,",
    ",,",
    "b3f94255-adc0-4cea-b9a5-91e4f838345b(CMBT_Skill_Throw_Heavy_01_Attack),,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_Poison_Basic": {
   "Name": "Projectile_Poison_Basic",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "ApplyStatus(POISONED, 100, 2)",
    "GROUND:CreateSurface(1,,Poison)"
   ],
   "ExplodeRadius": 1,
   "TargetConditions": "Character() or Item()",
   "Template": "26c20c57-bdf8-4bc1-99ec-e8582a04daef"
  },
  "Projectile_Potion_Destroy_Antitoxin": {
   "Name": "Projectile_Potion_Destroy_Antitoxin",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionAntitoxinCloud)"
   ],
   "Template": "cf8656de-63ef-4ef5-b25c-fc6df8d1d577"
  },
  "Projectile_Potion_Destroy_Healing": {
   "Name": "Projectile_Potion_Destroy_Healing",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionHealingCloud)"
   ],
   "Template": "78da6c6e-5192-45c1-a711-f721f507c82f"
  },
  "Projectile_Potion_Destroy_Healing_Greater": {
   "Name": "Projectile_Potion_Destroy_Healing_Greater",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionHealingGreaterCloud)"
   ],
   "Template": "f458bfb1-6856-42bd-b4dd-ab4bf25353c0"
  },
  "Projectile_Potion_Destroy_Healing_Superior": {
   "Name": "Projectile_Potion_Destroy_Healing_Superior",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionHealingSuperiorCloud)"
   ],
   "Template": "a2759172-d1e5-4c9f-b254-625845ad1a8d"
  },
  "Projectile_Potion_Destroy_Healing_Supreme": {
   "Name": "Projectile_Potion_Destroy_Healing_Supreme",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionHealingSupremeCloud)"
   ],
   "Template": "32a2d636-a423-434f-95a7-d8c7c1c4aab3"
  },
  "Projectile_Potion_Destroy_AnimalSpeaking": {
   "Name": "Projectile_Potion_Destroy_AnimalSpeaking",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionAnimalSpeakingCloud)"
   ],
   "Template": "faca860a-1182-4170-a8fb-574fdba80b9b"
  },
  "Projectile_Potion_Destroy_Strength_HillGiant": {
   "Name": "Projectile_Potion_Destroy_Strength_HillGiant",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionHillGiantStrengthCloud)"
   ],
   "Template": "5b49c195-3ea7-455a-b5d1-7a936c6b8035"
  },
  "Projectile_Potion_Destroy_Strength_CloudGiant": {
   "Name": "Projectile_Potion_Destroy_Strength_CloudGiant",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "ApplyStatus(POTION_OF_STRENGTH_CLOUD_GIANT,100,10)"
   ],
   "Template": "40c7bb4a-72bf-4b6e-8620-2efa58080e20"
  },
  "Projectile_Potion_Destroy_Invisibility": {
   "Name": "Projectile_Potion_Destroy_Invisibility",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionInvisibilityCloud)"
   ],
   "Template": "0834c947-eb27-4922-9cab-ebce6c33bc67"
  },
  "Projectile_Potion_Destroy_Poison": {
   "Name": "Projectile_Potion_Destroy_Poison",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "ApplyStatus(POTION_OF_POISON_DRINK,100,3)"
   ],
   "Template": "ae100299-908b-4e9e-b3bd-7795bcec06a4"
  },
  "Projectile_Potion_Destroy_Resistance_Acid": {
   "Name": "Projectile_Potion_Destroy_Resistance_Acid",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionResistanceAcidCloud)"
   ],
   "Template": "e9ab74db-9a41-42e8-9ca9-f5c2d2afb0c4"
  },
  "Projectile_Potion_Destroy_Resistance_Poison": {
   "Name": "Projectile_Potion_Destroy_Resistance_Poison",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionResistancePoisonCloud)"
   ],
   "Template": "298d3ee7-1468-4639-b7b6-a2297d1dd701"
  },
  "Projectile_Potion_Destroy_Resistance_Fire": {
   "Name": "Projectile_Potion_Destroy_Resistance_Fire",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionResistanceFireCloud)"
   ],
   "Template": "e5357fb0-9fba-48ce-9099-7c26a6afe93b"
  },
  "Projectile_Potion_Destroy_Resistance_Cold": {
   "Name": "Projectile_Potion_Destroy_Resistance_Cold",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionResistanceColdCloud)"
   ],
   "Template": "443973f3-f487-41f9-acdf-27bebaa0aa07"
  },
  "Projectile_Potion_Destroy_Resistance_Lightning": {
   "Name": "Projectile_Potion_Destroy_Resistance_Lightning",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionResistanceLightningCloud)"
   ],
   "Template": "c892e51e-e4c8-42ba-8c23-185b09d5bcbd"
  },
  "Projectile_Potion_Destroy_Resistance_Thunder": {
   "Name": "Projectile_Potion_Destroy_Resistance_Thunder",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "ApplyStatus(POTION_OF_RESISTANCE_THUNDER,100,-1)"
   ],
   "Template": "fabbc0d4-3546-4c09-b126-5f8fbfbb0b75"
  },
  "Projectile_Potion_Destroy_Resistance_Force": {
   "Name": "Projectile_Potion_Destroy_Resistance_Force",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionResistanceForceCloud)"
   ],
   "Template": "e055838b-4717-44fe-af00-979f69363864"
  },
  "Projectile_Potion_Destroy_Resistance_Psychic": {
   "Name": "Projectile_Potion_Destroy_Resistance_Psychic",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "ApplyStatus(POTION_OF_RESISTANCE_PSYCHIC,100,-1)"
   ],
   "Template": "8e999d0b-72dc-4491-85a7-3c8c02aac3a8"
  },
  "Projectile_Potion_Destroy_Resistance_Necrotic": {
   "Name": "Projectile_Potion_Destroy_Resistance_Necrotic",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "ApplyStatus(POTION_OF_RESISTANCE_NECROTIC,100,-1)"
   ],
   "Template": "60d3832c-26c3-444e-bf96-b910b404d085"
  },
  "Projectile_Potion_Destroy_Resistance_Radiant": {
   "Name": "Projectile_Potion_Destroy_Resistance_Radiant",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "ApplyStatus(POTION_OF_RESISTANCE_RADIANT,100,-1)"
   ],
   "Template": "8a9539ae-1bf7-4d75-912c-a692c8aa32be"
  },
  "Projectile_Potion_Destroy_Shrinking": {
   "Name": "Projectile_Potion_Destroy_Shrinking",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "ApplyStatus(REDUCE,100,10)"
   ],
   "Template": "ec2305cf-708c-4c49-a95f-e3cef4438887"
  },
  "Projectile_Potion_Destroy_Sleep": {
   "Name": "Projectile_Potion_Destroy_Sleep",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "ApplyStatus(SLEEP,100,3)"
   ],
   "Template": "3cacb1fb-3163-4176-8f74-4e0c7d4865a2"
  },
  "Projectile_Potion_Destroy_Speed": {
   "Name": "Projectile_Potion_Destroy_Speed",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionSpeedCloud)"
   ],
   "Template": "40fa79e3-c66c-46b4-8aee-53a1eb8966c4"
  },
  "Projectile_Potion_Destroy_Vitality": {
   "Name": "Projectile_Potion_Destroy_Vitality",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,PotionVitalityCloud)"
   ],
   "Template": "36dccfb0-4c1c-4f93-8342-fd926a4b810a"
  },
  "Projectile_Potion_Destroy_Oil_Of_The_Basilisk": {
   "Name": "Projectile_Potion_Destroy_Oil_Of_The_Basilisk",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "RemoveStatus(SG_Petrified, 100)"
   ],
   "Template": "86491bd1-8aa5-4a69-ad61-984922b390f3"
  },
  "Projectile_Drink_Alcohol": {
   "Name": "Projectile_Drink_Alcohol",
   "SpellType": "Projectile",
   "Parent": "Projectile_POTIONS",
   "SpellProperties": [
    "GROUND:CreateSurface(1,,Alcohol)",
    "ApplyStatus(DRINK_ALCOHOL,100,2)"
   ],
   "Template": "55551a81-0149-4db7-beea-2e3bc6bafa77"
  },
  "Projectile_MONSTERS": {
   "Name": "Projectile_MONSTERS",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_ArmCrossbow_Merregon": {
   "Name": "Projectile_ArmCrossbow_Merregon",
   "SpellType": "Projectile",
   "Parent": "Projectile_ThrowMissile",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 14,
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "Template": "a456f6ca-ff1b-4182-94c0-40b73b1ad0cb",
   "DisplayName": "Shared_Projectile_ArmCrossbow_Merregon_DisplayName",
   "Description": "Shared_Projectile_ArmCrossbow_Merregon_Description",
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "SpellAnimation": [
    "661cae72-6bc9-4e6d-98e2-89db9e03d6b5(CMBT_Range_LHand_01_Prepare),,",
    "bf6ea370-a917-45b3-908d-35729c98db10(CMBT_Range_LHand_01_Antic),,",
    "4a789a60-04b8-4a26-b476-65cf26ca558b(CMBT_Range_LHand_01_Attack),,",
    "a11b8bcb-ba24-417a-aa86-4e4379c41ee2(CMBT_Range_LHand_01_Recover),,",
    "5eb39acc-ecbd-4940-84c8-a1e13668b865(CMBT_Range_LHand_01_Loop),,",
    ",,"
   ],
   "WeaponTypes": [
    "None"
   ]
  },
  "Projectile_ArmCrossbow_Merregon_Detonation": {
   "Name": "Projectile_ArmCrossbow_Merregon_Detonation",
   "SpellType": "Projectile",
   "Parent": "Projectile_ArrowOfDetonation",
   "TargetRadius": 14,
   "SpellAnimation": [
    "661cae72-6bc9-4e6d-98e2-89db9e03d6b5(CMBT_Range_LHand_01_Prepare),,",
    "bf6ea370-a917-45b3-908d-35729c98db10(CMBT_Range_LHand_01_Antic),,",
    "4a789a60-04b8-4a26-b476-65cf26ca558b(CMBT_Range_LHand_01_Attack),,",
    "a11b8bcb-ba24-417a-aa86-4e4379c41ee2(CMBT_Range_LHand_01_Recover),,",
    "5eb39acc-ecbd-4940-84c8-a1e13668b865(CMBT_Range_LHand_01_Loop),,",
    ",,"
   ],
   "WeaponTypes": [
    "None"
   ],
   "RechargeValues": "4-6"
  },
  "Projectile_Fireball_Trap": {
   "Name": "Projectile_Fireball_Trap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "AreaRadius": 4,
   "ExplodeRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 12)",
   "SpellSuccess": [
    "DealDamage(2d6,Fire)"
   ],
   "Template": "5eaf6a8e-42aa-46b3-89d2-d787e0a5f3a3",
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_DeathBurst_MagmaMephit": {
   "Name": "Projectile_DeathBurst_MagmaMephit",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "GROUND:CreateSurface(1,3,Fire)"
   ],
   "AreaRadius": 2,
   "ExplodeRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 11)",
   "SpellSuccess": [
    "DealDamage(2d6,Fire)"
   ],
   "Template": "bc0105a8-da99-4e47-b6d9-a9948fd61990",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_DeathBurst_MagmaMephit_DisplayName",
   "Description": "Shared_Projectile_DeathBurst_MagmaMephit_Description",
   "DescriptionParams": [
    "DealDamage(2d6,Fire)",
    "Distance(2)"
   ],
   "ExtraDescription": "Shared_Projectile_DeathBurst_MagmaMephit_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d6,Fire)"
   ],
   "TooltipAttackSave": [
    "Dexterity"
   ]
  },
  "Projectile_ExtraAttack": {
   "Name": "Projectile_ExtraAttack",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "GROUND:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "GROUND:ExecuteWeaponFunctors(MainHand)"
   ],
   "DisplayName": "Shared_Projectile_ExtraAttack_DisplayName",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_Generic_Gnoll": {
   "Name": "Projectile_Generic_Gnoll",
   "SpellType": "Projectile",
   "Parent": "Projectile_MagicMissile"
  },
  "Projectile_Generic_Goblin": {
   "Name": "Projectile_Generic_Goblin",
   "SpellType": "Projectile",
   "Parent": "Projectile_MagicMissile"
  },
  "Projectile_Generic_Hobgoblin": {
   "Name": "Projectile_Generic_Hobgoblin",
   "SpellType": "Projectile",
   "Parent": "Projectile_MagicMissile"
  },
  "Projectile_Generic_Myconid": {
   "Name": "Projectile_Generic_Myconid",
   "SpellType": "Projectile",
   "Parent": "Projectile_MagicMissile"
  },
  "Projectile_Generic_Imp": {
   "Name": "Projectile_Generic_Imp",
   "SpellType": "Projectile",
   "Parent": "Projectile_FireBolt",
   "TargetRadius": 8,
   "SpellSuccess": [
    "DealDamage(1d4,Fire)"
   ],
   "TargetConditions": "not Self() and not Dead() and not Item()",
   "DisplayName": "Shared_Projectile_Generic_Imp_DisplayName",
   "DescriptionParams": [
    "DealDamage(1d4,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d4,Fire)"
   ],
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ]
  },
  "Projectile_Javelin": {
   "Name": "Projectile_Javelin",
   "SpellType": "Projectile",
   "Parent": "Projectile_ThrowMissile",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "Template": "b64b516c-1afd-4f8d-b624-4c9caf06f1c2",
   "DisplayName": "Shared_Projectile_Javelin_DisplayName",
   "Description": "Shared_Projectile_Javelin_Description",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellFlags": [
    "IsEnemySpell",
    "IgnoreSilence",
    "IsHarmful",
    "AddFallDamageOnLand"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_Javelin_Duergar": {
   "Name": "Projectile_Javelin_Duergar",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin",
   "Template": "3e983959-7884-4637-b8cb-73efd7490c0d",
   "SpellAnimation": [
    "b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4(CMBT_Skill_Throw_Far_01_Prepare),,",
    "f2803838-31cf-471b-85d1-92fa2d0eb7c2(CMBT_Skill_Throw_Far_01_Antic),,",
    "4be0751c-9fca-4c35-9337-6bf8a321c516(CMBT_Skill_Throw_Far_01_Attack),,",
    "86b52093-596c-4054-bb1d-2dbdfcdc4347(CMBT_Skill_Throw_Far_01_Recover),,",
    "e1726462-6f35-4551-af40-5247a314f38d(CMBT_Skill_Throw_Far_01_Loop),,",
    ",,"
   ]
  },
  "Projectile_Javelin_Ogre": {
   "Name": "Projectile_Javelin_Ogre",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin",
   "Template": "36f25f9b-60e6-4922-afd9-12cc7eef5fb0",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_OgreThrowJavelin",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "f4e0e958-23e0-4c3e-927b-f07bf0235b93"
  },
  "Projectile_Javelin_Ogre_NoRecharge": {
   "Name": "Projectile_Javelin_Ogre_NoRecharge",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin_Ogre",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_Javelin_Bugbear": {
   "Name": "Projectile_Javelin_Bugbear",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin",
   "Template": "3e983959-7884-4637-b8cb-73efd7490c0d",
   "Description": "Shared_Projectile_Javelin_Bugbear_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_BugbearThrowJavelin",
   "SpellAnimation": [
    "b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4(CMBT_Skill_Throw_Far_01_Prepare),,",
    "f2803838-31cf-471b-85d1-92fa2d0eb7c2(CMBT_Skill_Throw_Far_01_Antic),,",
    "4be0751c-9fca-4c35-9337-6bf8a321c516(CMBT_Skill_Throw_Far_01_Attack),,",
    "86b52093-596c-4054-bb1d-2dbdfcdc4347(CMBT_Skill_Throw_Far_01_Recover),,",
    "e1726462-6f35-4551-af40-5247a314f38d(CMBT_Skill_Throw_Far_01_Loop),,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": "4-6",
   "CastEffect": "b839523e-df6d-48aa-97b9-260ad00c2f7b"
  },
  "Projectile_Jump_HookHorror": {
   "Name": "Projectile_Jump_HookHorror",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "GROUND:CreateExplosion(Projectile_Jump_Knockdown_AOE)"
   ],
   "TargetRadius": 14,
   "Template": "4505c63a-cb98-42bb-942b-3a739feecef8",
   "Icon": "Action_Jump",
   "DisplayName": "Shared_Projectile_Jump_HookHorror_DisplayName",
   "Description": "Shared_Projectile_Jump_HookHorror_Description",
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IgnoreVisionBlock",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ],
   "SpellActionType": "Jump",
   "SpellJumpType": "Pounce",
   "PrepareEffect": "be6c1930-3cfc-41d4-8e46-b6a91ed48267",
   "CastEffect": "d2a8a9aa-6451-411c-90fb-a01236388280"
  },
  "Projectile_Jump_Bulette": {
   "Name": "Projectile_Jump_Bulette",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_HookHorror",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "GROUND:CreateExplosion(Projectile_Jump_Bulette_Spawn)"
   ],
   "Template": "a6154eff-e34d-4f7b-b115-ada400496e97",
   "Icon": "Action_Jump",
   "DisplayName": "Shared_Projectile_Jump_Bulette_DisplayName",
   "Description": "Shared_Projectile_Jump_Bulette_Description",
   "ExtraDescription": "Shared_Projectile_Jump_Bulette_ExtraDescription",
   "CastSound": "CrSpell_Cast_DeadlyLeap",
   "UseCosts": [
    "Movement:6"
   ],
   "SpellAnimation": [
    "958dd4d6-3ad3-4f58-a4ae-9499743a6dab(CMBT_Skill_Pounce_01_Prepare),,",
    ",,",
    "d7741bd3-2ec9-41aa-803b-39d2be52aac5(CMBT_Skill_Pounce_01_Cast),,",
    "78da379c-5535-4a07-b650-b695831bab9a(CMBT_Skill_Pounce_01_Recover),,",
    "1accbc00-728f-44d4-8926-268944ce5f03(CMBT_Skill_Pounce_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IgnoreVisionBlock",
    "CannotTargetItems",
    "CannotTargetCharacter"
   ],
   "CastEffect": "fb36e39f-1bc9-4421-96ef-0acdd663a0c6"
  },
  "Projectile_Jump_Bulette_Spawn": {
   "Name": "Projectile_Jump_Bulette_Spawn",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Bulette",
   "AreaRadius": 4,
   "ExplodeRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Strength, 16)",
   "TargetConditions": "not Self() and Enemy() ",
   "SpellAnimation": [
    ",,",
    ",,",
    "6c816a60-d5e5-45c4-9b4c-27bf3f1cca4e(CMBT_Skill_Pounce_01_SpawnCast),,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsJump",
    "IgnoreVisionBlock",
    "RangeIgnoreVerticalThreshold",
    "CannotTargetItems"
   ]
  },
  "Projectile_Jump_Frog": {
   "Name": "Projectile_Jump_Frog",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "TargetRadius": 18,
   "DisplayName": "Shared_Projectile_Jump_Frog_DisplayName",
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "RangeIgnoreVerticalThreshold",
    "Invisible",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ]
  },
  "Projectile_Jump_Spider": {
   "Name": "Projectile_Jump_Spider",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 18,
   "Template": "8daba69c-347d-419e-a9de-efacd82d7e51",
   "DisplayName": "Shared_Projectile_Jump_Spider_DisplayName",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "b6bebde2-ecff-4df6-9d24-cd9fabb9fe79(CMBT_Skill_JumpFlight_01_Prepare),,",
    ",,",
    "f49c1788-7819-481f-9b83-2344d708e682(CMBT_Skill_JumpFlight_01_Cast),,",
    ",,",
    "f8fe2e89-2313-48f7-963c-0907b6306fd1(CMBT_Skill_JumpFlight_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IgnoreVisionBlock",
    "Invisible",
    "AddFallDamageOnLand",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ],
   "CastEffect": "a398baac-4b66-4410-82fd-45b2007ff510"
  },
  "Projectile_Jump_Spider_WildShape": {
   "Name": "Projectile_Jump_Spider_WildShape",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Spider",
   "TargetRadius": 9
  },
  "Projectile_Jump_Spider_Queen": {
   "Name": "Projectile_Jump_Spider_Queen",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Spider",
   "Template": "5ac723b1-fbed-4905-bf6c-cd0838d1eaa3"
  },
  "Projectile_Jump_Spider_Summon": {
   "Name": "Projectile_Jump_Spider_Summon",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Spider",
   "TargetRadius": "4.5",
   "Template": "36c7f460-5d81-45ac-bde1-24352dd1761d"
  },
  "Projectile_Jump_Spider_Tiny": {
   "Name": "Projectile_Jump_Spider_Tiny",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Spider",
   "TargetRadius": "4.5",
   "Template": "52c2a22b-72e9-4d19-9a15-afe66c049256"
  },
  "Projectile_Jump_TollCollector_Face": {
   "Name": "Projectile_Jump_TollCollector_Face",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump"
  },
  "Projectile_Jump_Harpy": {
   "Name": "Projectile_Jump_Harpy",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fly",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 18,
   "ProjectileCount": 1,
   "Template": "c5ebd5ba-2e38-45cf-99d5-46980a57e47d",
   "Icon": "Action_Jump",
   "DisplayName": "Shared_Projectile_Jump_Harpy_DisplayName",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_HarpyFlight",
   "ProjectileTerrainOffset": "Yes",
   "UseCosts": [
    "Movement:3"
   ],
   "SpellAnimation": [
    "b6bebde2-ecff-4df6-9d24-cd9fabb9fe79(CMBT_Skill_JumpFlight_01_Prepare),,",
    ",,",
    "f49c1788-7819-481f-9b83-2344d708e682(CMBT_Skill_JumpFlight_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "RangeIgnoreVerticalThreshold",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ],
   "SpellActionType": "Jump",
   "CastEffect": "947e7bdc-77b6-42f9-9c6c-69f4608099d2"
  },
  "Projectile_Jump_Gnoll": {
   "Name": "Projectile_Jump_Gnoll",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "TargetRadius": 8,
   "Template": "2ac66dc8-5c3a-4464-86bb-d88224a4400b",
   "DisplayName": "Shared_Projectile_Jump_Gnoll_DisplayName",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "VerbalIntent": "Utility",
   "CastEffect": "5752eb11-7244-4704-9fa1-c6cf7f514a63"
  },
  "Projectile_Jump_Knockdown_AOE": {
   "Name": "Projectile_Jump_Knockdown_AOE",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "TargetRadius": 3,
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Strength, 12)",
   "SpellSuccess": [
    "ApplyStatus(PRONE,100,2)"
   ],
   "TargetConditions": "not Self() and Enemy()",
   "SpellFlags": [
    "None"
   ]
  },
  "Projectile_Jump_Minotaur": {
   "Name": "Projectile_Jump_Minotaur",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "GROUND:CreateExplosion(Projectile_Jump_Knockdown_AOE)"
   ],
   "TargetRadius": 9,
   "Template": "e9d5c328-66e8-49f9-8d72-fe3efc118269",
   "DisplayName": "Shared_Projectile_Jump_Minotaur_DisplayName",
   "Description": "Shared_Projectile_Jump_Minotaur_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "Movement:3",
    "BonusActionPoint:1"
   ],
   "VerbalIntent": "Damage",
   "SpellActionType": "Jump",
   "SpellJumpType": "Pounce",
   "CastEffect": "5f99cc1c-a104-418d-ab48-b71d634da2f3"
  },
  "Projectile_Jump_Owlbear": {
   "Name": "Projectile_Jump_Owlbear",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_NoFallDamage",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "GROUND:CreateExplosion(Projectile_Jump_Knockdown_AOE)"
   ],
   "TargetRadius": 16,
   "Template": "5d8aae7b-e5ce-4ccd-9784-3a02a5ed2373",
   "DisplayName": "Shared_Projectile_Jump_Owlbear_DisplayName",
   "Description": "Shared_Projectile_Jump_Owlbear_Description",
   "ExtraDescription": "Shared_Projectile_Jump_Owlbear_ExtraDescription",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "Movement:9",
    "BonusActionPoint:1"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "RangeIgnoreVerticalThreshold",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "IsJump",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ],
   "SpellJumpType": "Pounce",
   "CastEffect": "00858a38-e1eb-416a-99ee-0aa3f5f47d41"
  },
  "Projectile_Jump_Owlbear_Cub": {
   "Name": "Projectile_Jump_Owlbear_Cub",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Owlbear",
   "TargetRadius": "4.5",
   "Template": "f87c3ea9-967e-42d6-83be-fe3e68991ebb",
   "DisplayName": "Shared_Projectile_Jump_Owlbear_Cub_DisplayName",
   "Description": "Shared_Projectile_Jump_Owlbear_Cub_Description",
   "VerbalIntent": "Utility",
   "SpellJumpType": "Locomotion",
   "PrepareEffect": "bab02cc8-492d-42c4-81d9-73ce2e3a11be",
   "CastEffect": "ebdacef5-3224-480d-82f6-e8782ff0f7cd"
  },
  "Projectile_Jump_Mephit": {
   "Name": "Projectile_Jump_Mephit",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_NoFallDamage",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 15,
   "DisplayName": "Shared_Projectile_Jump_Mephit_DisplayName",
   "Description": "Shared_Projectile_Jump_Mephit_Description",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "CannotTargetCharacter",
    "CannotTargetItems",
    "RangeIgnoreVerticalThreshold"
   ]
  },
  "Projectile_Jump_Spectator": {
   "Name": "Projectile_Jump_Spectator",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fly",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 18,
   "DisplayName": "Shared_Projectile_Jump_Spectator_DisplayName",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Impact_SpectatorFlight",
   "UseCosts": [
    "Movement:3"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ],
   "SpellActionType": "Jump",
   "SpellJumpType": "Locomotion"
  },
  "Projectile_Jump_Tiny": {
   "Name": "Projectile_Jump_Tiny",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "DisplayName": "Shared_Projectile_Jump_Tiny_DisplayName",
   "Description": "Shared_Projectile_Jump_Tiny_Description",
   "VerbalIntent": "Utility"
  },
  "Projectile_Levitate_Mindflayer": {
   "Name": "Projectile_Levitate_Mindflayer",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_NoFallDamage",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 15,
   "Template": "305906c1-b685-492b-a442-87934e24922e",
   "DisplayName": "Shared_Projectile_Levitate_Mindflayer_DisplayName",
   "Description": "Shared_Projectile_Levitate_Mindflayer_Description",
   "CastSound": "CrSpell_Cast_Levitate",
   "UseCosts": [
    "ActionPoint:0"
   ],
   "PrepareEffect": "67709a42-d0ca-4c57-ab12-de411670b32d",
   "CastEffect": "629d264b-5a78-46f6-b305-172372f21d8f"
  },
  "Projectile_Levitate_Beholder": {
   "Name": "Projectile_Levitate_Beholder",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_NoFallDamage",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 15,
   "Template": "621d24ad-87e1-4de0-9ba3-ce861ced0af2",
   "DisplayName": "Shared_Projectile_Levitate_Beholder_DisplayName",
   "Description": "Shared_Projectile_Levitate_Beholder_Description",
   "UseCosts": [
    "ActionPoint:0"
   ],
   "PrepareEffect": "addd0151-3e75-44ad-b9f2-570a509e066f",
   "CastEffect": "29145c03-15d1-4abb-9089-cb806fbffee7"
  },
  "Projectile_MephitExplosion_Mud": {
   "Name": "Projectile_MephitExplosion_Mud",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "GROUND:CreateSurface(1.5,,Mud)"
   ],
   "AreaRadius": 6,
   "ExplodeRadius": 5,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 13,AdvantageOnRestrained(),DisadvantageOnRestrained())",
   "SpellSuccess": [
    "ApplyStatus(MEPHIT_MUD_RESTRAINED, 100, 2)"
   ],
   "TargetConditions": "Character() and not Self()",
   "ProjectileCount": 1,
   "Template": "c712c5ae-c873-41fd-9503-77154bc19b22",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_MephitExplosion_Mud_DisplayName",
   "Description": "Shared_Projectile_MephitExplosion_Mud_Description",
   "ExtraDescription": "Shared_Projectile_MephitExplosion_Mud_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_DeathBurst",
   "UseCosts": [
    "ActionPoint:0"
   ],
   "SpellAnimation": [
    ",,",
    "de0a782c-14ea-42b2-bdf6-93be5e9387f3(CMBT_Skill_DeathBurst_01_Antic),,",
    "20e628a8-8043-453c-8fb0-7021c45e8250(CMBT_Skill_DeathBurst_01_Attack),,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsEnemySpell",
    "IgnoreSilence"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "2712075d-7c51-418f-b117-1398b806a887"
  },
  "Projectile_MenacingAttack_NPC": {
   "Name": "Projectile_MenacingAttack_NPC",
   "SpellType": "Projectile",
   "Parent": "Projectile_MenacingAttack",
   "Cooldown": "OncePerCombat",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_Multiattack": {
   "Name": "Projectile_Multiattack",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "TargetRadius": "RangedMainWeaponRange",
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_Multiattack_DisplayName",
   "Description": "Shared_Projectile_Multiattack_Description",
   "DescriptionParams": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "CastTextEvent": "Cast",
   "AlternativeCastTextEvents": [
    "Cast2"
   ],
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    "caa0d92c-5cd1-4248-9a4a-f2a8e404dac3(CMBT_Skill_MultiAttack_01_Loop),,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_PushingAttack_NPC": {
   "Name": "Projectile_PushingAttack_NPC",
   "SpellType": "Projectile",
   "Parent": "Projectile_PushingAttack",
   "Cooldown": "OncePerCombat",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_Multiattack_Gnoll_Flind_Ranged": {
   "Name": "Projectile_Multiattack_Gnoll_Flind_Ranged",
   "SpellType": "Projectile",
   "Parent": "Projectile_Multiattack",
   "TargetConditions": "not Self() and not Dead() and Enemy() and Character()",
   "Description": "Shared_Projectile_Multiattack_Gnoll_Flind_Ranged_Description",
   "TooltipDamageList": [
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    "DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)",
    " DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"
   ],
   "AlternativeCastTextEvents": [
    "Cast2",
    "Cast3"
   ],
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    "caa0d92c-5cd1-4248-9a4a-f2a8e404dac3(CMBT_Skill_MultiAttack_01_Loop),,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "b646de4d-1a84-4fd8-820c-0dd46dea66db"
  },
  "Projectile_Net_Kuotoa": {
   "Name": "Projectile_Net_Kuotoa",
   "SpellType": "Projectile",
   "Parent": "Projectile_ThrowNet",
   "Cooldown": "OncePerCombat",
   "TargetRadius": 8,
   "SpellSuccess": [
    "ApplyStatus(NET, 100, 2)"
   ],
   "Template": "1fcb5fe8-7200-4901-9bb7-7336d45e2f09",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_Net_Kuotoa_DisplayName",
   "CastSound": "CrSpell_Cast_Net",
   "SpellAnimation": [
    "b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4(CMBT_Skill_Throw_Far_01_Prepare),,",
    ",,",
    "4be0751c-9fca-4c35-9337-6bf8a321c516(CMBT_Skill_Throw_Far_01_Attack),,",
    "86b52093-596c-4054-bb1d-2dbdfcdc4347(CMBT_Skill_Throw_Far_01_Recover),,",
    "e1726462-6f35-4551-af40-5247a314f38d(CMBT_Skill_Throw_Far_01_Loop),,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "d105d9f9-83c8-4a2e-a505-fd5c52f4d90c"
  },
  "Projectile_Pounce_Wolf_Summon": {
   "Name": "Projectile_Pounce_Wolf_Summon",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "Cooldown": "OncePerTurn",
   "AreaRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Strength, SourceSpellDC())",
   "TargetConditions": "Character()",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_Pounce_Wolf_Summon_DisplayName",
   "Description": "Shared_Projectile_Pounce_Wolf_Summon_Description",
   "UseCosts": [
    "Movement:Distance",
    " ActionPoint:1"
   ],
   "SpellAnimation": [
    "b6bebde2-ecff-4df6-9d24-cd9fabb9fe79(CMBT_Skill_JumpFlight_01_Prepare),,",
    ",,",
    "f49c1788-7819-481f-9b83-2344d708e682(CMBT_Skill_JumpFlight_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsJump",
    "IgnoreVisionBlock"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_Spike_Trap": {
   "Name": "Projectile_Spike_Trap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "Level": 3,
   "TargetRadius": 18,
   "AreaRadius": 6,
   "ExplodeRadius": 1,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC())",
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "2e9faa4c-79d7-4dc2-ba5f-5c7c4c203496",
   "Icon": "Unknown",
   "DisplayName": "Shared_Projectile_Spike_Trap_DisplayName",
   "Description": "Shared_Projectile_Spike_Trap_Description",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "1d832b0a-ccfe-4ca7-8426-10200306921c(CMBT_Melee_LHand_01_Prepare),,",
    ",,",
    ",,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsTrap"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "MemoryCost": 1
  },
  "Projectile_GreenSporeCloud": {
   "Name": "Projectile_GreenSporeCloud",
   "SpellType": "Projectile",
   "SpellProperties": [
    "GROUND:CreateSurface(2,3,SporeGreenCloud)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 2,
   "ExplodeRadius": 2,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "ProjectileCount": 1,
   "Template": "81a545c2-f61d-4626-b066-237db154dc13",
   "Icon": "Action_Glut_GreenSporeCloud",
   "DisplayName": "Shared_Projectile_GreenSporeCloud_DisplayName",
   "Description": "Shared_Projectile_GreenSporeCloud_Description",
   "ExtraDescription": "Shared_Projectile_GreenSporeCloud_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(3d4,Poison)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_SporeCloud",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "f029cc32-9718-4e88-9426-d960265b9aa5(CMBT_Skill_SporeCloud_01_Prepare),,",
    "71602dce-e7a9-4785-98cb-c4d0f68c626d(CMBT_Skill_SporeCloud_01_Antic),,",
    "a67886cc-8458-48bf-bd98-3d1541232fe7(CMBT_Skill_SporeCloud_01_Attack),,",
    "ce9e9d06-8e08-48dc-8ead-644d6da197e8(CMBT_Skill_SporeCloud_01_Recover),,",
    "e53fb7fd-d5cc-4bc7-8956-89af694604b5(CMBT_Skill_SporeCloud_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": "3-6",
   "CastEffect": "b92610ed-83e1-4343-911c-e2e164e338b1"
  },
  "Projectile_BlackSporeCloud": {
   "Name": "Projectile_BlackSporeCloud",
   "SpellType": "Projectile",
   "Parent": "Projectile_GreenSporeCloud",
   "SpellProperties": [
    "GROUND:CreateSurface(2,2,SporeBlackCloud)"
   ],
   "Template": "2c7962ef-b502-4af7-ba34-db34c77b822a",
   "Icon": "Action_Glut_BlackSporeCloud",
   "DisplayName": "Shared_Projectile_BlackSporeCloud_DisplayName",
   "Description": "Shared_Projectile_BlackSporeCloud_Description",
   "ExtraDescription": "Shared_Projectile_BlackSporeCloud_ExtraDescription",
   "CastSound": "CrSpell_Cast_SporeCloud",
   "VerbalIntent": "Control",
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": 6,
   "CastEffect": "e90a6cf3-174d-40ab-918c-1e2df5baf6c6"
  },
  "Projectile_WhiteSporeCloud": {
   "Name": "Projectile_WhiteSporeCloud",
   "SpellType": "Projectile",
   "Parent": "Projectile_GreenSporeCloud",
   "SpellProperties": [
    "GROUND:CreateSurface(2,3,SporeWhiteCloud)",
    "ApplyStatus(HASTE_SURFACE,100,1)"
   ],
   "Template": "12026f65-39c5-40d8-9f05-37b5f276e471",
   "Icon": "Action_Glut_WhiteSporeCloud",
   "DisplayName": "Shared_Projectile_WhiteSporeCloud_DisplayName",
   "Description": "Shared_Projectile_WhiteSporeCloud_Description",
   "ExtraDescription": "Shared_Projectile_WhiteSporeCloud_ExtraDescription",
   "CastSound": "CrSpell_Cast_SporeCloud",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "VerbalIntent": "Buff",
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": 6,
   "CastEffect": "f79f88c8-0f66-4972-b9fb-76296f55a6fa"
  },
  "Projectile_UrticatingHair_Spider": {
   "Name": "Projectile_UrticatingHair_Spider",
   "SpellType": "Projectile",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "800fd3ea-ebe7-49be-9dc3-dba4bcbbd6db",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_UrticatingHair_Spider_DisplayName",
   "Description": "Shared_Projectile_UrticatingHair_Spider_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_UrticatingHair",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "16dc1646-dc5b-45b4-af62-416800a32303(CMBT_Skill_UrticatingHairs_01_Prepare),,",
    "d2eb80ce-59ea-4a91-9e9e-7ea71f323e8b(CMBT_Skill_UrticatingHairs_01_Antic),,",
    "6f973496-a22b-4d78-86ba-b45472af8a77(CMBT_Skill_UrticatingHairs_01_Attack),,",
    "555ebc91-74ee-4f2d-a5f5-484e328fea14(CMBT_Skill_UrticatingHairs_01_Recover),,",
    "9c8899ee-8b12-4889-81ef-0d305aba3d2b(CMBT_Skill_UrticatingHairs_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "HasHighGroundRangeExtension"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "cb203185-5c0e-44d2-9cae-9cce52f0000e",
   "CastEffect": "62fb6115-4eb9-494b-8747-f54e55a850a3"
  },
  "Projectile_SpiderInfestation": {
   "Name": "Projectile_SpiderInfestation",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "TargetRadius": 3,
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 13)",
   "SpellSuccess": [
    "ApplyStatus(SPIDER_INFESTATION,100,4)"
   ],
   "TargetConditions": "Character() and not Self() and not Dead()",
   "Template": "6febfa58-3230-4779-b52e-3df2518c0f85",
   "DisplayName": "Shared_Projectile_SpiderInfestation_DisplayName",
   "Description": "Shared_Projectile_SpiderInfestation_Description",
   "ExtraDescription": "Shared_Projectile_SpiderInfestation_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d4,Piercing)",
    "DealDamage(1d4,Poison)"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_StoneThrow": {
   "Name": "Projectile_StoneThrow",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin",
   "SpellSchool": "None",
   "TargetRadius": 9,
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "b3d955f2-33d7-4146-98e8-8b953cbc060d",
   "DisplayName": "Shared_Projectile_StoneThrow_DisplayName",
   "Description": "Shared_Projectile_StoneThrow_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellFlags": [
    "IsEnemySpell",
    "IgnoreSilence",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": "3-6",
   "CastEffect": "6f646e52-83c4-4166-bd19-b571445ec891"
  },
  "Projectile_StoneThrow_Harpy": {
   "Name": "Projectile_StoneThrow_Harpy",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin",
   "SpellSchool": "None",
   "SpellRoll": "Attack(AttackType.RangedWeaponAttack)",
   "ProjectileCount": 1,
   "Template": "b3d955f2-33d7-4146-98e8-8b953cbc060d",
   "DisplayName": "Shared_Projectile_StoneThrow_Harpy_DisplayName",
   "Description": "Shared_Projectile_StoneThrow_Harpy_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsEnemySpell",
    "IgnoreSilence",
    "HasSomaticComponent",
    "IsAttack"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "4b80b537-3a3b-4079-bd60-398fefff8019"
  },
  "Projectile_StoneThrow_Duergar": {
   "Name": "Projectile_StoneThrow_Duergar",
   "SpellType": "Projectile",
   "Parent": "Projectile_StoneThrow",
   "SpellAnimation": [
    "b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4(CMBT_Skill_Throw_Far_01_Prepare),,",
    "f2803838-31cf-471b-85d1-92fa2d0eb7c2(CMBT_Skill_Throw_Far_01_Antic),,",
    "4be0751c-9fca-4c35-9337-6bf8a321c516(CMBT_Skill_Throw_Far_01_Attack),,",
    "86b52093-596c-4054-bb1d-2dbdfcdc4347(CMBT_Skill_Throw_Far_01_Recover),,",
    "e1726462-6f35-4551-af40-5247a314f38d(CMBT_Skill_Throw_Far_01_Loop),,",
    ",,"
   ]
  },
  "Projectile_ToxicSpit": {
   "Name": "Projectile_ToxicSpit",
   "SpellType": "Projectile",
   "Parent": "Projectile_UrticatingHair_Spider",
   "SpellProperties": [
    "GROUND:CreateSurface(2,10,Poison)"
   ],
   "TargetRadius": 12,
   "AreaRadius": 1,
   "ExplodeRadius": 1,
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "Template": "02fad746-8981-4bd0-a001-428ccd806e5c",
   "DisplayName": "Shared_Projectile_ToxicSpit_DisplayName",
   "Description": "Shared_Projectile_ToxicSpit_Description",
   "ExtraDescription": "Shared_Projectile_ToxicSpit_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_VenomousDischarge",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4(CMBT_Skill_Throw_Far_01_Prepare),,",
    "f2803838-31cf-471b-85d1-92fa2d0eb7c2(CMBT_Skill_Throw_Far_01_Antic),,",
    "4be0751c-9fca-4c35-9337-6bf8a321c516(CMBT_Skill_Throw_Far_01_Attack),,",
    "86b52093-596c-4054-bb1d-2dbdfcdc4347(CMBT_Skill_Throw_Far_01_Recover),,",
    "e1726462-6f35-4551-af40-5247a314f38d(CMBT_Skill_Throw_Far_01_Loop),,",
    ",,"
   ],
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "bd9dbeb6-549a-46d2-ac74-7e3a3e67ae88"
  },
  "Projectile_ToxicSpit_Frog": {
   "Name": "Projectile_ToxicSpit_Frog",
   "SpellType": "Projectile",
   "Parent": "Projectile_ToxicSpit",
   "SpellProperties": [
    "GROUND:CreateSurface(2,10,PoisonCloud)"
   ],
   "AreaRadius": 2,
   "ExplodeRadius": 2,
   "Template": "1f3b3206-2c95-4d31-9c22-81040b76f01f",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "3d332947-4437-44d0-8b95-0a2529a0040e",
   "CastEffect": "088ac86f-64d4-40c2-abd2-578fe602e9d1"
  },
  "Projectile_ToxicSpit_PhaseSpider": {
   "Name": "Projectile_ToxicSpit_PhaseSpider",
   "SpellType": "Projectile",
   "Parent": "Projectile_ToxicSpit",
   "SpellProperties": [
    "GROUND:CreateSurface(1,3,Poison)"
   ],
   "TargetRadius": 12,
   "TargetConditions": "Character() and not Dead() and Enemy()",
   "HitAnimationType": "MagicalDamage_External",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_ToxicSpit_PhaseSpiderQueen": {
   "Name": "Projectile_ToxicSpit_PhaseSpiderQueen",
   "SpellType": "Projectile",
   "Parent": "Projectile_ToxicSpit_PhaseSpider",
   "SpellProperties": [
    "AI_IGNORE:GROUND:CreateSurface(1,3,Poison)"
   ],
   "TargetRadius": 20,
   "AreaRadius": 2,
   "ExplodeRadius": 2,
   "Template": "fb58165e-389b-4197-ba32-6896fbaccd9c",
   "HitAnimationType": "MagicalDamage_External",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_ToxicSpit_Ooze": {
   "Name": "Projectile_ToxicSpit_Ooze",
   "SpellType": "Projectile",
   "Parent": "Projectile_ToxicSpit",
   "SpellProperties": [
    "GROUND:CreateSurface(1,3,Acid)"
   ],
   "SpellSuccess": [
    "DealDamage(2d6,Acid)"
   ],
   "Template": "463eb279-8884-446b-b385-cffead58efd4",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_ToxicSpit_Ooze_DisplayName",
   "SpellAnimation": [
    "accc80a3-002d-4236-9343-2e29b7bee5fd(CMBT_Skill_AcidicPhlegm_01_Prepare),,",
    "5ed9b242-79de-4eca-a884-319b3c139edf(CMBT_Skill_AcidicPhlegm_01_Antic),,",
    "eb088193-13f6-44ec-889d-2f1966587697(CMBT_Skill_AcidicPhlegm_01_Attack),,",
    "72ee5db6-869d-4a43-9add-8056ab7159e3(CMBT_Skill_AcidicPhlegm_01_Recover),,",
    "ea6e0c45-db66-4034-a4eb-4e890d91168e(CMBT_Skill_AcidicPhlegm_01_Loop),,",
    "d21075df-3648-4626-b211-84cd99a21cb4(CMBT_Skill_AcidicPhlegm_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "accc80a3-002d-4236-9343-2e29b7bee5fd(CMBT_Skill_AcidicPhlegm_01_Prepare),,",
    "5ed9b242-79de-4eca-a884-319b3c139edf(CMBT_Skill_AcidicPhlegm_01_Antic),,",
    "eb088193-13f6-44ec-889d-2f1966587697(CMBT_Skill_AcidicPhlegm_01_Attack),,",
    "72ee5db6-869d-4a43-9add-8056ab7159e3(CMBT_Skill_AcidicPhlegm_01_Recover),,",
    "ea6e0c45-db66-4034-a4eb-4e890d91168e(CMBT_Skill_AcidicPhlegm_01_Loop),,",
    "d21075df-3648-4626-b211-84cd99a21cb4(CMBT_Skill_AcidicPhlegm_01_Dash),,"
   ],
   "CastEffect": "180ed15d-28b7-45b3-b336-8dd32677a27b"
  },
  "Projectile_ToxicSpit_Bulette": {
   "Name": "Projectile_ToxicSpit_Bulette",
   "SpellType": "Projectile",
   "Parent": "Projectile_AcidSplash",
   "SpellSchool": "None",
   "SpellProperties": [
    "GROUND:CreateSurface(3,3,Acid)",
    "ApplyStatus(ACID,100,2)"
   ],
   "TargetRadius": 14,
   "AreaRadius": 3,
   "DeathType": "Acid",
   "ExplodeRadius": 3,
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "Template": "f1512ea3-8d5d-4320-87ac-6674309bac49",
   "DisplayName": "Shared_Projectile_ToxicSpit_Bulette_DisplayName",
   "Description": "Shared_Projectile_ToxicSpit_Bulette_Description",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "accc80a3-002d-4236-9343-2e29b7bee5fd(CMBT_Skill_AcidicPhlegm_01_Prepare),,",
    "5ed9b242-79de-4eca-a884-319b3c139edf(CMBT_Skill_AcidicPhlegm_01_Antic),,",
    "eb088193-13f6-44ec-889d-2f1966587697(CMBT_Skill_AcidicPhlegm_01_Attack),,",
    "72ee5db6-869d-4a43-9add-8056ab7159e3(CMBT_Skill_AcidicPhlegm_01_Recover),,",
    "ea6e0c45-db66-4034-a4eb-4e890d91168e(CMBT_Skill_AcidicPhlegm_01_Loop),,",
    "d21075df-3648-4626-b211-84cd99a21cb4(CMBT_Skill_AcidicPhlegm_01_Dash),,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "cc98935b-6ddf-4386-9f10-bd324fc1bd8d",
   "CastEffect": "91f536d1-be47-4c7b-812e-4ade8041b77c"
  },
  "Projectile_TripAttack_NPC": {
   "Name": "Projectile_TripAttack_NPC",
   "SpellType": "Projectile",
   "Parent": "Projectile_TripAttack",
   "Cooldown": "OncePerCombat",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Projectile_SynapticDischarge_IntDev": {
   "Name": "Projectile_SynapticDischarge_IntDev",
   "SpellType": "Projectile",
   "Parent": "Projectile_ThrowMissile",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 18,
   "DeathType": "Electrocution",
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "TargetConditions": "Character() and not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "c0cd820b-c32c-4ffa-b4b0-5cde60ecc2ae",
   "Icon": "Spell_IntellectDevourer_SynapticDischarge",
   "DisplayName": "Shared_Projectile_SynapticDischarge_IntDev_DisplayName",
   "Description": "Shared_Projectile_SynapticDischarge_IntDev_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_SypnaticDischarge",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "7e67bfd0-2fc2-4d10-bed5-cfda9e660de5(CMBT_Range_RHand_01_Antic),,",
    "eb054308-7fce-4b85-bf4c-7a0031fda7ac(CMBT_Range_RHand_01_Attack),,",
    "0b0dc35b-4953-45c0-a9eb-8d3fef5e798a(CMBT_Range_RHand_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsEnemySpell",
    "IgnoreSilence"
   ],
   "HitAnimationType": "MagicalDamage_Psychic",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "4d8b4ab5-04d2-47ee-bcd8-bb3e2c4c8847",
   "CastEffect": "58acaf6d-7002-4fa5-8671-d290a7103155"
  },
  "Projectile_MudFling_MudMephit": {
   "Name": "Projectile_MudFling_MudMephit",
   "SpellType": "Projectile",
   "Parent": "Projectile_ThrowMissile",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 14,
   "DeathType": "Physical",
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "13abcccc-6a32-4c4c-9e84-da2550be3b9c",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_MudFling_MudMephit_DisplayName",
   "Description": "Shared_Projectile_MudFling_MudMephit_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_MudFling",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "38b07239-904d-4494-8a19-f32ac04df589(CMBT_Skill_MudFling_01_Prepare),,",
    "1c448125-b801-4ef8-8ebb-e21ebece26dc(CMBT_Skill_MudFling_01_Antic),,",
    "3ca74081-2f86-4c11-bb5b-a6c26b9cbafb(CMBT_Skill_MudFling_01_Attack),,",
    "2ad09ff0-8b24-4da4-acc2-9bb5606f8ebe(CMBT_Skill_MudFling_01_Recover),,",
    "a5165a2a-3992-4a46-91fd-182a54fd2aff(CMBT_Skill_MudFling_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsEnemySpell",
    "IgnoreSilence"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "e3f14922-4855-4287-9a09-0b4e95cc76a7"
  },
  "Projectile_TRAPS": {
   "Name": "Projectile_TRAPS",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball"
  },
  "Projectile_Fireball_Trap_Easy": {
   "Name": "Projectile_Fireball_Trap_Easy",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "AreaRadius": 4,
   "ExplodeRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 10)",
   "SpellSuccess": [
    "DealDamage(1d6,Fire)"
   ],
   "Template": "5eaf6a8e-42aa-46b3-89d2-d787e0a5f3a3",
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_Fireball_Trap_Hard": {
   "Name": "Projectile_Fireball_Trap_Hard",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "AreaRadius": 4,
   "ExplodeRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 14)",
   "SpellSuccess": [
    "DealDamage(4d6,Fire)"
   ],
   "Template": "5eaf6a8e-42aa-46b3-89d2-d787e0a5f3a3",
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_Force_Trap": {
   "Name": "Projectile_Force_Trap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "AreaRadius": 4,
   "ExplodeRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 14)",
   "SpellSuccess": [
    "Force(3, TargetToEntity)"
   ],
   "Template": "f346b284-854e-4dd9-b87c-3938f5178265",
   "SpellFlags": [
    "IsTrap"
   ]
  },
  "Projectile_AlcoholBarrel": {
   "Name": "Projectile_AlcoholBarrel",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "Force(3, TargetToEntity)"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "AddFallDamageOnLand",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ]
  },
  "Projectile_Torchstalk_Explosion": {
   "Name": "Projectile_Torchstalk_Explosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "Force(3)"
   ],
   "AreaRadius": 6,
   "ExplodeRadius": 6,
   "Template": "6f0bfdf0-9568-4ef4-9c37-e4d96f529d57",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "AddFallDamageOnLand",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External"
  },
  "Projectile_Torchstalk_Explosion_Small": {
   "Name": "Projectile_Torchstalk_Explosion_Small",
   "SpellType": "Projectile",
   "Parent": "Projectile_Torchstalk_Explosion",
   "SpellProperties": [
    "Force(3)"
   ],
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "SpellSuccess": [
    "DealDamage(1d4,Fire)"
   ],
   "SpellFail": [
    "DealDamage(0)"
   ]
  },
  "Projectile_RollingBoulder": {
   "Name": "Projectile_RollingBoulder",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "Force(4, TargetToEntity)"
   ],
   "ExplodeRadius": 1,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 13)",
   "SpellSuccess": [
    "DealDamage(6d6,Bludgeoning)",
    "ApplyStatus(PRONE,100,1)"
   ],
   "SpellFail": [
    "DealDamage(3d6,Bludgeoning)"
   ],
   "Template": "b64b516c-1afd-4f8d-b624-4c9caf06f1c2",
   "DisplayName": "Shared_Projectile_RollingBoulder_DisplayName",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "AddFallDamageOnLand",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ]
  },
  "Projectile_FallingRocks": {
   "Name": "Projectile_FallingRocks",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "SpellSuccess": [
    "Force(4, TargetToEntity)",
    "ApplyStatus(PRONE,100,1)",
    "DealDamage(6d6,Bludgeoning)"
   ],
   "Template": "b64b516c-1afd-4f8d-b624-4c9caf06f1c2",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "AddFallDamageOnLand",
    "IsHarmful"
   ]
  },
  "Projectile_PoisonCloud_Trap": {
   "Name": "Projectile_PoisonCloud_Trap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "GROUND:CreateSurface(2,3,PoisonCloud)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 3,
   "ExplodeRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Constitution, 12)",
   "SpellSuccess": [
    "DealDamage(2d6,Poison)"
   ],
   "Template": "5eaf6a8e-42aa-46b3-89d2-d787e0a5f3a3",
   "SpellFlags": [
    "IsTrap"
   ],
   "HitAnimationType": "MagicalDamage_Internal"
  },
  "Projectile_Turret_Arcane": {
   "Name": "Projectile_Turret_Arcane",
   "SpellType": "Projectile",
   "Parent": "Projectile_MagicMissile",
   "Template": "f7c78257-c482-4196-afa1-4d5e1304797c",
   "CastSound": "CrSpell_Cast_ArcaneTurret",
   "CastEffect": "0574f23e-a4d8-4fc5-b0eb-1ffd11b562f1"
  },
  "Projectile_TEST": {
   "Name": "Projectile_TEST",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_CodeTest_Cooldown_Turn": {
   "Name": "Projectile_CodeTest_Cooldown_Turn",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "Cooldown": "OncePerTurn"
  },
  "Projectile_CodeTest_Cooldown_Combat": {
   "Name": "Projectile_CodeTest_Cooldown_Combat",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "Cooldown": "OncePerCombat"
  },
  "Projectile_CodeTest_Cooldown_Rest": {
   "Name": "Projectile_CodeTest_Cooldown_Rest",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "Cooldown": "OncePerRest"
  },
  "Projectile_THROWABLES": {
   "Name": "Projectile_THROWABLES",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_AlchemistFire": {
   "Name": "Projectile_AlchemistFire",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "GROUND:CreateSurface(3,,Fire)",
    "ApplyStatus(BURNING,100,1)"
   ],
   "Template": "f71831cc-7102-407a-90a3-83f136e14e42",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "HitAnimationType": "MagicalDamage_External"
  },
  "Projectile_Grenade_Bomb": {
   "Name": "Projectile_Grenade_Bomb",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "AreaRadius": 4,
   "ExplodeRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 12) ",
   "SpellSuccess": [
    "DealDamage(3d6,Fire)"
   ],
   "Template": "820c9654-3d56-405e-bdba-81ca7f3f5953",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "HitAnimationType": "MagicalDamage_External"
  },
  "Projectile_Grenade_PoisonVial": {
   "Name": "Projectile_Grenade_PoisonVial",
   "SpellType": "Projectile",
   "Parent": "Projectile_AcidSplash",
   "SpellProperties": [
    "GROUND:CreateSurface(3,0,Poison)"
   ],
   "Template": "a9a7bc05-fc02-47fe-be53-324b7302deb5",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "HitAnimationType": "MagicalDamage_Internal"
  },
  "Projectile_Grenade_Fire": {
   "Name": "Projectile_Grenade_Fire",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "GROUND:CreateSurface(3,,Fire)"
   ],
   "Template": "f71831cc-7102-407a-90a3-83f136e14e42",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "HitAnimationType": "MagicalDamage_External"
  },
  "Projectile_Grenade_AcidBottle": {
   "Name": "Projectile_Grenade_AcidBottle",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "GROUND:CreateSurface(2,0,Acid)"
   ],
   "AreaRadius": 2,
   "ExplodeRadius": 2,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 13)",
   "SpellSuccess": [
    "DealDamage(2d6,Acid)"
   ],
   "Template": "0838c94c-12fb-4ca5-b4e3-a61f10e8ecd3",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "HitAnimationType": "MagicalDamage_External"
  },
  "Projectile_AI_HELPERS": {
   "Name": "Projectile_AI_HELPERS",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellFlags": [
    "IsEnemySpell"
   ]
  },
  "Projectile_AiHelper_Summon_Weak": {
   "Name": "Projectile_AiHelper_Summon_Weak",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "ApplyStatus(SELF,AI_HELPER_BUFF_SMALL,100,1)",
    "IF(Enemy()):DealDamage(1,Bludgeoning)"
   ],
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "AmountOfTargets": 1,
   "TargetConditions": "not Self() and not Dead()",
   "SpellFlags": [
    "IsEnemySpell"
   ]
  },
  "Projectile_AiHelper_SpiderlingSpawning": {
   "Name": "Projectile_AiHelper_SpiderlingSpawning",
   "SpellType": "Projectile",
   "Parent": "Projectile_AiHelper_Summon_Weak",
   "SpellProperties": [
    "ApplyStatus(SELF,AI_HELPER_BUFF_SMALL,100,1)",
    "IF(Enemy()):DealDamage(2,Piercing)",
    "IF(Enemy()):DealDamage(2,Poison)"
   ]
  },
  "Projectile_AiHelper_Summon_Ranged_Weak": {
   "Name": "Projectile_AiHelper_Summon_Ranged_Weak",
   "SpellType": "Projectile",
   "Parent": "Projectile_AiHelper_Summon_Weak",
   "SpellProperties": [
    "ApplyStatus(SELF,AI_HELPER_BUFF_SMALL,100,1)",
    "IF(Enemy()):RegainHitPoints(1d8)"
   ],
   "AreaRadius": 6,
   "ExplodeRadius": 6,
   "TargetConditions": "Self()"
  },
  "Projectile_AiHelper_Silence": {
   "Name": "Projectile_AiHelper_Silence",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "ApplyStatus(AI_HELPER_BLOCKSPELLCAST_VERBAL,100,3)"
   ],
   "AreaRadius": 6,
   "ExplodeRadius": 6,
   "TargetConditions": "Character()"
  },
  "Projectile_AiHelper_MoonBeam": {
   "Name": "Projectile_AiHelper_MoonBeam",
   "SpellType": "Projectile",
   "Parent": "Projectile_AI_HELPERS",
   "SpellProperties": [
    "ApplyStatus(MOONBEAM,100,1)"
   ],
   "AreaRadius": 1,
   "ExplodeRadius": 1
  },
  "Projectile_AiHelper_BuffSelfNearEnemies": {
   "Name": "Projectile_AiHelper_BuffSelfNearEnemies",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "ApplyStatus(SELF,AI_HELPER_BUFF,100,1)"
   ],
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "TargetConditions": "not Self() and not Ally() and Character()"
  },
  "Projectile_GENERICS": {
   "Name": "Projectile_GENERICS",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellFlags": [
    "IsEnemySpell"
   ]
  },
  "Projectile_GEB_GoblinKid_ThrowRocks": {
   "Name": "Projectile_GEB_GoblinKid_ThrowRocks",
   "SpellType": "Projectile",
   "AIFlags": [
    "CanNotUse"
   ],
   "TargetRadius": 18,
   "AreaRadius": 0,
   "ExplodeRadius": 0,
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "SpellSuccess": [
    "DealDamage(1d4, Bludgeoning)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "ProjectileCount": 1,
   "Template": "d8717ced-7980-43dd-ad91-2107c37c8122",
   "Icon": "unknown",
   "DisplayName": "Shared_Projectile_GEB_GoblinKid_ThrowRocks_DisplayName",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    ",,",
    ",,",
    "e8cb6221-778b-4fce-bf0b-44ea56a60ca9(CUST_ThrowingPebbles_03),,",
    ",,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasHighGroundRangeExtension"
   ],
   "CastEffect": "3f77810d-a9f1-4fdb-a167-eb8e1e4be39b"
  },
  "Projectile_HAG_HagGrenade_Fire": {
   "Name": "Projectile_HAG_HagGrenade_Fire",
   "SpellType": "Projectile",
   "TargetRadius": 18,
   "ExplodeRadius": 1,
   "ProjectileCount": 1,
   "Template": "f71831cc-7102-407a-90a3-83f136e14e42",
   "Icon": "unknown",
   "DisplayName": "Gustav_Projectile_HAG_HagGrenade_Fire_DisplayName",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasHighGroundRangeExtension"
   ]
  },
  "Projectile_HAG_HagGrenade_PoisonCloud": {
   "Name": "Projectile_HAG_HagGrenade_PoisonCloud",
   "SpellType": "Projectile",
   "Parent": "Projectile_HAG_HagGrenade_Fire",
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "Template": "0838c94c-12fb-4ca5-b4e3-a61f10e8ecd3",
   "DisplayName": "Gustav_Projectile_HAG_HagGrenade_PoisonCloud_DisplayName"
  },
  "Projectile_HAG_Jump_Frog": {
   "Name": "Projectile_HAG_Jump_Frog",
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
    "CannotTargetItems",
    "CannotTargetCharacter"
   ]
  },
  "Projectile_Hag_RayOfSickness": {
   "Name": "Projectile_Hag_RayOfSickness",
   "SpellType": "Projectile",
   "Parent": "Projectile_RayOfSickness",
   "Level": 0,
   "TargetRadius": 26,
   "SpellSuccess": [
    "IF(not SavingThrow(Ability.Constitution, SourceSpellDC(),AdvantageOnPoisoned())):ApplyStatus(POISONED,100,2)",
    "DealDamage(3d8,Poison)"
   ],
   "TargetConditions": "Character() and not Dead() and Enemy()",
   "DescriptionParams": [
    "DealDamage(3d8,Poison)"
   ],
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "b462e11d-10b7-4524-ac84-0a1e801c0503(SPL_RayofSickness_01_Prepare),,",
    ",,",
    "4aece32c-deb3-45c0-9c4a-22587c9efc43(SPL_RayofSickness_01_Cast),,",
    "3711399b-1e4b-483f-8a6f-22f7716a3b12(SPL_RayofSickness_01_Recover),,",
    ",,",
    ",,"
   ],
   "MemoryCost": 0,
   "PrepareEffect": "ebde7e97-247a-45c5-9208-00a85ad725ac",
   "CastEffect": "b1e56be3-c58d-4472-b65f-a16f1a3edc45"
  },
  "Projectile_Hag_Double_RayOfSickness": {
   "Name": "Projectile_Hag_Double_RayOfSickness",
   "SpellType": "Projectile",
   "Parent": "Projectile_Hag_RayOfSickness",
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Projectile_PLA_HailOfThorns_ZhentCave_Gloves": {
   "Name": "Projectile_PLA_HailOfThorns_ZhentCave_Gloves",
   "SpellType": "Projectile",
   "Parent": "Projectile_HailOfThorns",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Projectile_DEN_KanonJump": {
   "Name": "Projectile_DEN_KanonJump",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "TargetRadius": 36,
   "DisplayName": "Gustav_Projectile_DEN_KanonJump_DisplayName",
   "UseCosts": [
    "ActionPoint:0"
   ],
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ],
   "SpellActionType": "None"
  },
  "Projectile_GuidingBolt_Free": {
   "Name": "Projectile_GuidingBolt_Free",
   "SpellType": "Projectile",
   "Parent": "Projectile_GuidingBolt",
   "Cooldown": "OncePerCombat",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Projectile_GOB_CageTrap": {
   "Name": "Projectile_GOB_CageTrap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap"
  },
  "Projectile_CHA_OutpostCrevice_Bite": {
   "Name": "Projectile_CHA_OutpostCrevice_Bite",
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
   "Name": "Projectile_PLA_FakeAlchemistFire",
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
   "DisplayName": "Gustav_Projectile_PLA_FakeAlchemistFire_DisplayName",
   "Description": "Gustav_Projectile_PLA_FakeAlchemistFire_Description",
   "DescriptionParams": [
    "DealDamage(1d4,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d4,Fire)"
   ],
   "SpellAnimation": [
    "b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4(CMBT_Skill_Throw_Far_01_Prepare),,",
    "f2803838-31cf-471b-85d1-92fa2d0eb7c2(CMBT_Skill_Throw_Far_01_Antic),,",
    "4be0751c-9fca-4c35-9337-6bf8a321c516(CMBT_Skill_Throw_Far_01_Attack),,",
    "86b52093-596c-4054-bb1d-2dbdfcdc4347(CMBT_Skill_Throw_Far_01_Recover),,",
    "e1726462-6f35-4551-af40-5247a314f38d(CMBT_Skill_Throw_Far_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold"
   ],
   "MemoryCost": 0
  },
  "Projectile_UND_BuletteSpawnExplode": {
   "Name": "Projectile_UND_BuletteSpawnExplode",
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
   "DisplayName": "Gustav_Projectile_UND_BuletteSpawnExplode_DisplayName",
   "Description": "Gustav_Projectile_UND_BuletteSpawnExplode_Description",
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
   "Name": "Projectile_FOR_GnomeGoblin_ThrowRock",
   "SpellType": "Projectile",
   "AIFlags": [
    "CanNotUse"
   ],
   "TargetRadius": 18,
   "AreaRadius": 0,
   "ExplodeRadius": 0,
   "ProjectileCount": 1,
   "Template": "d8717ced-7980-43dd-ad91-2107c37c8122",
   "Icon": "unknown",
   "DisplayName": "Gustav_Projectile_FOR_GnomeGoblin_ThrowRock_DisplayName",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    ",,",
    ",,",
    "e8cb6221-778b-4fce-bf0b-44ea56a60ca9(CUST_ThrowingPebbles_03),,",
    ",,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasHighGroundRangeExtension"
   ],
   "CastEffect": "c013e9de-0922-407e-9db8-82d4afa8c94a"
  },
  "Projectile_FOR_Ogre_AcidArrow": {
   "Name": "Projectile_FOR_Ogre_AcidArrow",
   "SpellType": "Projectile",
   "Parent": "Projectile_AcidArrow",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare),,",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic),,",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack),,",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover),,",
    ",,",
    ",,"
   ]
  },
  "Projectile_FOR_Ogre_FireBolt": {
   "Name": "Projectile_FOR_Ogre_FireBolt",
   "SpellType": "Projectile",
   "Parent": "Projectile_FireBolt",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare),,",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic),,",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack),,",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover),,",
    ",,",
    ",,"
   ]
  },
  "Projectile_GOB_GoblinPriestess_StatueDebris": {
   "Name": "Projectile_GOB_GoblinPriestess_StatueDebris",
   "SpellType": "Projectile",
   "Parent": "Projectile_GuidingBolt",
   "Level": 3,
   "Cooldown": "None",
   "AIFlags": [
    "CanNotUse"
   ],
   "TargetRadius": 6,
   "AreaRadius": 4,
   "DeathType": "KnockedDown",
   "ExplodeRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 15)",
   "SpellFail": [
    "DealDamage(2d6,Bludgeoning)"
   ],
   "ProjectileCount": 1,
   "Template": "4603448d-c3ee-401c-a152-1ac7b23cce38",
   "Icon": "unknown",
   "DisplayName": "Gustav_Projectile_GOB_GoblinPriestess_StatueDebris_DisplayName",
   "SpellAnimation": [
    "03101cea-dee7-475d-9616-b6957122bda2(CMBT_Skill_Warcry_01_Prepare),,",
    "f3a26975-5aab-4fd6-989a-2b2515b57139(CMBT_Skill_Invisibility_01_Antic),,",
    "5073b979-0088-45d5-819e-6535474005e5(CMBT_Skill_FuriousBite_01_Prepare),,",
    ",,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "WeaponTypes": [
    "None"
   ],
   "SpellFlags": [
    "IsHarmful"
   ]
  },
  "Projectile_GOB_GoblinKing_Javelin": {
   "Name": "Projectile_GOB_GoblinKing_Javelin",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin_Bugbear",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 14,
   "SpellFlags": [
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "AddFallDamageOnLand"
   ]
  },
  "Projectile_GOB_Ogre_Javelin": {
   "Name": "Projectile_GOB_Ogre_Javelin",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin_Ogre_NoRecharge",
   "SpellFlags": [
    "IsEnemySpell",
    "IgnoreSilence",
    "IsHarmful",
    "AddFallDamageOnLand",
    "RangeIgnoreVerticalThreshold"
   ]
  },
  "Projectile_DEN_TunnelTurret_Trap": {
   "Name": "Projectile_DEN_TunnelTurret_Trap",
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
   "Name": "Projectile_GOB_PainPriest_Mace",
   "SpellType": "Projectile",
   "SpellProperties": [
    "DealDamage(1d6,Necrotic)"
   ],
   "AreaRadius": 2,
   "Template": "70bf8644-f3f0-4441-b795-d737cadd413e",
   "SpellAnimation": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare),,",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic),,",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack),,",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover),,",
    ",,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare),,",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic),,",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack),,",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover),,",
    ",,",
    ",,"
   ],
   "TargetEffect": "b460b24b-23e4-4f8f-a533-4d82512bedeb"
  },
  "Projectile_UNI_MassHealRing_Spell": {
   "Name": "Projectile_UNI_MassHealRing_Spell",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "SpellProperties": [
    "RegainHitPoints(1d6)"
   ],
   "AreaRadius": 6
  },
  "Projectile_PLA_DesireJump": {
   "Name": "Projectile_PLA_DesireJump",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "SpellFlags": [
    "IsJump",
    "HasHighGroundRangeExtension",
    "IgnoreVisionBlock",
    "Stealth",
    "Invisible",
    "CannotTargetCharacter",
    "CannotTargetItems"
   ]
  },
  "Projectile_FOR_Goblin_Jump": {
   "Name": "Projectile_FOR_Goblin_Jump",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump",
   "Cooldown": "OncePerCombat"
  },
  "Projectile_DEN_Jump_Spider": {
   "Name": "Projectile_DEN_Jump_Spider",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Spider",
   "TargetRadius": 20,
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Projectile_BEH_DeathRay": {
   "Name": "Projectile_BEH_DeathRay",
   "SpellType": "Projectile",
   "Parent": "Projectile_GuidingBolt",
   "Cooldown": "None",
   "SpellProperties": [
    "DealDamage(2,Necrotic)"
   ],
   "TargetRadius": 30,
   "DeathType": "None",
   "Icon": "unknown",
   "DisplayName": "Gustav_Projectile_BEH_DeathRay_DisplayName",
   "Description": "Gustav_Projectile_BEH_DeathRay_Description",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "VerbalIntent": "None",
   "WeaponTypes": [
    "None"
   ],
   "SpellFlags": [
    "IsSpell",
    "CannotRotate"
   ],
   "SourceLimbIndex": 5,
   "PrepareEffect": "2265a3b7-eb7f-4e4b-8c32-f9c874c5d69d"
  },
  "Projectile_FOR_MasterworkChest_Trap": {
   "Name": "Projectile_FOR_MasterworkChest_Trap",
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
   "Name": "Projectile_UND_ZhentChest_Trap",
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
   "Name": "Projectile_GOB_TripwireTrap",
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
   "Name": "Projectile_UND_Wand_Fireball_Crooked_Spell",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "Cooldown": "OncePerShortRest",
   "TargetRadius": "1.5"
  },
  "Projectile_UND_DarkLake_RaftCaptainJump": {
   "Name": "Projectile_UND_DarkLake_RaftCaptainJump",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump"
  },
  "Projectile_FOR_SeluneStash_ChestTrap": {
   "Name": "Projectile_FOR_SeluneStash_ChestTrap",
   "SpellType": "Projectile",
   "Parent": "Projectile_GuidingBolt",
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 14)",
   "SpellSuccess": [
    "DealDamage(4d6,Radiant)"
   ],
   "DisplayName": "Gustav_Projectile_FOR_SeluneStash_ChestTrap_DisplayName",
   "Description": "Gustav_Projectile_FOR_SeluneStash_ChestTrap_Description",
   "DescriptionParams": [
    "DealDamage(4d6,Radiant)"
   ],
   "TooltipDamageList": [
    "DealDamage(4d6,Radiant)"
   ]
  },
  "Projectile_HAG_PsychicMine": {
   "Name": "Projectile_HAG_PsychicMine",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 10)",
   "SpellSuccess": [
    "DealDamage(2d6,Psychic)",
    "ApplyStatus(SLOW, 100, 3)"
   ],
   "TargetConditions": "Character() and not Self() and not Dead()",
   "DisplayName": "Gustav_Projectile_HAG_PsychicMine_DisplayName",
   "Description": "Gustav_Projectile_HAG_PsychicMine_Description",
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
   "HitAnimationType": "MagicalDamage_Electric"
  },
  "Projectile_HAG_RayOfSickness_Staff": {
   "Name": "Projectile_HAG_RayOfSickness_Staff",
   "SpellType": "Projectile",
   "Parent": "Projectile_RayOfSickness",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Projectile_TUT_BrineExplode": {
   "Name": "Projectile_TUT_BrineExplode",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "Force(8)",
    "DealDamage(1d4,Force)"
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
   "Name": "Projectile_CAMP_Javelin_Ogre",
   "SpellType": "Projectile",
   "Parent": "Projectile_Javelin_Ogre",
   "Cooldown": "OncePerTurn"
  },
  "Projectile_UND_SharFort_Turret": {
   "Name": "Projectile_UND_SharFort_Turret",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "AreaRadius": 4,
   "ExplodeRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 12)",
   "SpellSuccess": [
    "DealDamage(2d6,Radiant)"
   ],
   "Template": "d030acb7-e3c5-4816-8e68-bd7089b65f32",
   "DisplayName": "Gustav_Projectile_UND_SharFort_Turret_DisplayName",
   "SpellFlags": [
    "IsTrap",
    "IsHarmful"
   ]
  },
  "Projectile_UND_MagicMissile_SocietyOfBrilliance_Amulet": {
   "Name": "Projectile_UND_MagicMissile_SocietyOfBrilliance_Amulet",
   "SpellType": "Projectile",
   "Parent": "Projectile_MagicMissile",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Projectile_HAG_RedcapSpikes_Trap": {
   "Name": "Projectile_HAG_RedcapSpikes_Trap",
   "SpellType": "Projectile",
   "Parent": "Projectile_SpikedBulb",
   "SpellProperties": [
    "IF(Character()):ApplyStatus(BLEEDING,100,3)",
    "IF(Character()):ApplyStatus(HAG_SMALLCUT,100,10)"
   ],
   "TargetRadius": 0,
   "AreaRadius": 0,
   "SpellFlags": [
    "IsTrap",
    "IsHarmful"
   ]
  },
  "Projectile_UND_DuergarRaft_Hammer_Explosion": {
   "Name": "Projectile_UND_DuergarRaft_Hammer_Explosion",
   "SpellType": "Projectile",
   "SpellProperties": [
    "Force(3)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 3,
   "ExplodeRadius": 3,
   "Template": "2f137707-3e08-43cb-9362-ffc23c3e069e",
   "SpellAnimation": [
    "303ebd17-5b4e-46c6-ac4a-315c2aa29c6d(CMBT_Skill_Throw_Short_01_Prepare),,",
    "97e3b980-9905-428b-b682-68462777d628(CMBT_Skill_Throw_Short_01_Antic),,",
    "f43888ef-1069-40d8-9159-ca0bc413fd5f(CMBT_Skill_Throw_Short_01_Attack),,",
    "29574072-3390-485e-8257-5a65d6703e5f(CMBT_Skill_Throw_Short_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "AddFallDamageOnLand",
    "IsSpell",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "TargetEffect": "2a9586ab-5569-49cb-a182-d08d4eddb491"
  },
  "Projectile_UND_ThayanCellar_OrbExplosion": {
   "Name": "Projectile_UND_ThayanCellar_OrbExplosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "Template": "2afe003c-1c33-4aa6-957f-90003c7d164c"
  },
  "Projectile_DEN_GoblinShot": {
   "Name": "Projectile_DEN_GoblinShot",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack"
  },
  "Projectile_UND_HarperStash_Trap": {
   "Name": "Projectile_UND_HarperStash_Trap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball",
   "TargetRadius": 18,
   "AreaRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Constitution, SourceSpellDC(),false,IsInorganic())",
   "SpellSuccess": [
    "DealDamage(3d8,Thunder)"
   ],
   "Template": "348013df-7958-4ca9-ac9f-80337e054bee",
   "DisplayName": "Gustav_Projectile_UND_HarperStash_Trap_DisplayName",
   "Description": "Gustav_Projectile_UND_HarperStash_Trap_Description",
   "DescriptionParams": [
    "DealDamage(3d8,Thunder)"
   ],
   "ExtraDescription": "Gustav_Projectile_UND_HarperStash_Trap_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(3d8,Thunder)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "CastSound": "Spell_Cast_Damage_Thunder_Shatter_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsTrap",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Psychic",
   "PrepareEffect": "87abac34-a803-4eda-a5dc-4c40775721f4",
   "CastEffect": "909ad4d4-6b01-46c3-b9aa-4d3af06bfb84",
   "PositionEffect": "4f7e882e-7236-4c77-a25a-5340575f63b6"
  },
  "Projectile_TUT_Jump_Laezel": {
   "Name": "Projectile_TUT_Jump_Laezel",
   "SpellType": "Projectile",
   "Parent": "Projectile_Jump_Laezel",
   "TargetRadius": "13.5",
   "AddRangeFromAbility": "Strength,3",
   "Template": "9d893642-654d-41a4-aaad-81f9dc588941",
   "PrepareEffect": "896c1460-9e28-466f-ac3d-407451c62491",
   "CastEffect": "ac721560-ca8c-4db6-ba56-8a44e33ccefe"
  },
  "Projectile_UND_AdamantineForge_HammerImpact": {
   "Name": "Projectile_UND_AdamantineForge_HammerImpact",
   "SpellType": "Projectile",
   "Parent": "Projectile_MainHandAttack",
   "SpellProperties": [
    "DealDamage(12d8,Bludgeoning)",
    "ApplyStatus(PRONE,100,2)",
    " GROUND:CreateSurface(3,0,None)",
    "ApplyStatus(UND_ADAMANTINEFORGE_HAMMERHELPER, 100, 1)",
    "RemoveStatus(UND_ADAMANTINEGOLEM_SUPERHEATED)",
    "ApplyStatus(AI_HELPER_SCRIPTEVENT,100,1)"
   ],
   "AreaRadius": 3,
   "DeathType": "KnockedDown",
   "ExplodeRadius": 3,
   "Template": "191b8fee-9a50-485f-bac3-ae59f6d06674",
   "DisplayName": "Gustav_Projectile_UND_AdamantineForge_HammerImpact_DisplayName",
   "SpellFlags": [
    "IsTrap",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External"
  },
  "Projectile_DEN_DruidTrap": {
   "Name": "Projectile_DEN_DruidTrap",
   "SpellType": "Projectile",
   "Parent": "Projectile_Force_Trap",
   "SpellProperties": [
    "GROUND:CreateSurface(1,10,PoisonCloud)",
    "Force(3)"
   ],
   "TargetRadius": 5,
   "AreaRadius": 3
  },
  "Projectile_UND_Runepowder_Vial_Explosion": {
   "Name": "Projectile_UND_Runepowder_Vial_Explosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_Barrel_Explosion_Smokepowder",
   "Template": "8a67c2f5-9f87-42f0-9f82-6a38e0e7d6b0",
   "DisplayName": "Gustav_Projectile_UND_Runepowder_Vial_Explosion_DisplayName",
   "Description": "Gustav_Projectile_UND_Runepowder_Vial_Explosion_Description"
  },
  "Projectile_UND_Runepowder_Barrel_Explosion": {
   "Name": "Projectile_UND_Runepowder_Barrel_Explosion",
   "SpellType": "Projectile",
   "Parent": "Projectile_Barrel_Explosion_Smokepowder",
   "AreaRadius": 18,
   "ExplodeRadius": 18,
   "Template": "b66fd3e9-861b-4f1e-bdf6-d2884fdd6d32",
   "DisplayName": "Gustav_Projectile_UND_Runepowder_Barrel_Explosion_DisplayName",
   "Description": "Gustav_Projectile_UND_Runepowder_Barrel_Explosion_Description"
  },
  "Projectile_UND_LavaBubbleBurst": {
   "Name": "Projectile_UND_LavaBubbleBurst",
   "SpellType": "Projectile",
   "Parent": "Projectile_Fireball_Trap",
   "SpellProperties": [
    "GROUND:CreateSurface(6,2,Fire)",
    "DealDamage(2d6,Fire)"
   ],
   "Template": "5b774469-d3c9-4fa8-8300-90d82178a8ca",
   "DisplayName": "Gustav_Projectile_UND_LavaBubbleBurst_DisplayName",
   "Description": "Gustav_Projectile_UND_LavaBubbleBurst_Description",
   "SpellFlags": [
    "IsHarmful"
   ]
  },
  "Projectile_UND_AdamantineForge_HammerImpact_NoVFX": {
   "Name": "Projectile_UND_AdamantineForge_HammerImpact_NoVFX",
   "SpellType": "Projectile",
   "Parent": "Projectile_UND_AdamantineForge_HammerImpact",
   "Template": "90e60f25-e72e-418f-b473-6ac00f8a055e"
  },
  "ProjectileStrike_Placeholder": {
   "Name": "ProjectileStrike_Placeholder",
   "SpellType": "ProjectileStrike",
   "AIFlags": [
    "CanNotUse"
   ],
   "SpellProperties": [
    "GROUND:Spawn(278271f9-3fbc-4cf7-a5dc-b36527f521b2,,)"
   ],
   "TargetRadius": 1,
   "AreaRadius": 3,
   "TargetProjectiles": "Yes",
   "ProjectileCount": 6,
   "ProjectileDelay": 1,
   "Angle": 90,
   "Height": 8,
   "Template": "b3d955f2-33d7-4146-98e8-8b953cbc060d",
   "DisplayName": "Shared_ProjectileStrike_Placeholder_DisplayName",
   "CastTextEvent": "Cast",
   "AlternativeCastTextEvents": [
    "Cast"
   ],
   "ProjectileType": "Grenade",
   "Distribution": "Normal",
   "SpellAnimation": [
    "73afb4e5-8cfe-4479-95cf-16889597fee3(CMBT_Range_RHand_01_Prepare),,",
    "7e67bfd0-2fc2-4d10-bed5-cfda9e660de5(CMBT_Range_RHand_01_Antic),,",
    "eb054308-7fce-4b85-bf4c-7a0031fda7ac(CMBT_Range_RHand_01_Attack),,",
    "0b0dc35b-4953-45c0-a9eb-8d3fef5e798a(CMBT_Range_RHand_01_Recover),,",
    "6ec808e1-e128-44ef-9361-a713bf86de8f(CMBT_Range_RHand_01_Loop),,",
    "b2e9c771-3497-444c-b360-23b4441985a1(CMBT_Range_RHand_01_Dash),,"
   ]
  },
  "ProjectileStrike_TUT_UpperDeck_Bombardment": {
   "Name": "ProjectileStrike_TUT_UpperDeck_Bombardment",
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
   "DisplayName": "Gustav_ProjectileStrike_TUT_UpperDeck_Bombardment_DisplayName",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand"
   ],
   "VerbalIntent": "Damage"
  },
  "Rush_Rush": {
   "Name": "Rush_Rush",
   "SpellType": "Rush",
   "Cooldown": "OncePerShortRest",
   "AIFlags": [
    "CanNotUse"
   ],
   "TargetRadius": 9,
   "HitRadius": 1,
   "MovementSpeed": 40000,
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "TargetConditions": "not Ally()",
   "Icon": "Action_Rush",
   "DisplayName": "Shared_Rush_Rush_DisplayName",
   "Description": "Shared_Rush_Rush_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "CastSound": "Action_Cast_Rush",
   "StartTextEvent": "Cast",
   "CycleConditions": "Enemy()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "eae21eb0-bde7-4c86-a197-12a2a0c3ecac(CMBT_Skill_Rush_01_Prepare),,",
    "7bfeb9dd-1348-45c7-bff9-ed42f8cd43a1(CMBT_Skill_Rush_01_Antic),,",
    "b780092c-cc12-43d5-b60e-acbac3fdceed(CMBT_Skill_Rush_01_Attack),,",
    "abbeb7de-2128-4b16-95e5-7b9d7b1af2f9(CMBT_Skill_Rush_01_Recover),,",
    "e6a25c4b-816c-41e1-888a-50215d994b23(CMBT_Skill_Rush_01_Loop),,",
    ",,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsDefaultWeaponAction",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": "4-6",
   "PrepareEffect": "82154992-95d0-4323-8e2e-35f06976736e",
   "CastEffect": "6137834a-4e00-466d-beef-3e9a515c8d60",
   "TargetHitEffect": "9a19e7d0-92e8-4a40-909c-10b657135051"
  },
  "Rush_Aggressive": {
   "Name": "Rush_Aggressive",
   "SpellType": "Rush",
   "Parent": "Rush_Rush"
  },
  "Rush_Rush_Boar": {
   "Name": "Rush_Rush_Boar",
   "SpellType": "Rush",
   "Parent": "Rush_Rush",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "TargetConditions": "DistanceToTargetGreaterThan(4.0) and not Ally()",
   "Icon": "Action_Boar_Charge",
   "SpellAnimation": [
    "eae21eb0-bde7-4c86-a197-12a2a0c3ecac(CMBT_Skill_Rush_01_Prepare),,",
    "7bfeb9dd-1348-45c7-bff9-ed42f8cd43a1(CMBT_Skill_Rush_01_Antic),,",
    "b780092c-cc12-43d5-b60e-acbac3fdceed(CMBT_Skill_Rush_01_Attack),,",
    "abbeb7de-2128-4b16-95e5-7b9d7b1af2f9(CMBT_Skill_Rush_01_Recover),,",
    "e6a25c4b-816c-41e1-888a-50215d994b23(CMBT_Skill_Rush_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "05ba3089-2cf3-4c23-996e-b741015ea6c0",
   "CastEffect": "d6670f85-9ff9-4d7a-9168-8acd1987608e",
   "TargetHitEffect": "15b5d050-845f-4b94-bf57-98891bcf8e8e"
  },
  "Rush_Rush_Boar_Summon": {
   "Name": "Rush_Rush_Boar_Summon",
   "SpellType": "Rush",
   "Parent": "Rush_Rush_Boar",
   "TargetConditions": "not Ally()",
   "DisplayName": "Shared_Rush_Rush_Boar_Summon_DisplayName",
   "Description": "Shared_Rush_Rush_Boar_Summon_Description",
   "SpellAnimation": [
    "eae21eb0-bde7-4c86-a197-12a2a0c3ecac(CMBT_Skill_Rush_01_Prepare),,",
    "7bfeb9dd-1348-45c7-bff9-ed42f8cd43a1(CMBT_Skill_Rush_01_Antic),,",
    "b780092c-cc12-43d5-b60e-acbac3fdceed(CMBT_Skill_Rush_01_Attack),,",
    "abbeb7de-2128-4b16-95e5-7b9d7b1af2f9(CMBT_Skill_Rush_01_Recover),,",
    "e6a25c4b-816c-41e1-888a-50215d994b23(CMBT_Skill_Rush_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsHarmful"
   ]
  },
  "Rush_Rush_DeepRothe": {
   "Name": "Rush_Rush_DeepRothe",
   "SpellType": "Rush",
   "Parent": "Rush_Rush",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "TargetConditions": "not Ally() and not (not Player(context.Source) and not DistanceToTargetGreaterOrEqual(5.0))",
   "Icon": "Action_DeepRothe_Charge",
   "DisplayName": "Shared_Rush_Rush_DeepRothe_DisplayName",
   "Description": "Shared_Rush_Rush_DeepRothe_Description",
   "TooltipStatusApply": [
    "ApplyStatus(PRONE,100,2)"
   ],
   "CastSound": "CrSpell_Cast_Charge",
   "UseCosts": [
    "ActionPoint:1",
    "Movement:Distance"
   ],
   "SpellFlags": [
    "IsHarmful"
   ]
  },
  "Rush_ForceTunnel": {
   "Name": "Rush_ForceTunnel",
   "SpellType": "Rush",
   "Cooldown": "OncePerShortRest",
   "SpellProperties": [
    "Force(4)"
   ],
   "TargetRadius": 9,
   "HitRadius": 2,
   "TargetConditions": "not Ally() and not Grounded()",
   "Icon": "TadpoleSuperPower_ForceTunnel",
   "DisplayName": "Shared_Rush_ForceTunnel_DisplayName",
   "Description": "Shared_Rush_ForceTunnel_Description",
   "DescriptionParams": [
    "Distance(4)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_ForceTunnel_L1to3",
   "StartTextEvent": "Cast",
   "CycleConditions": "Enemy()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "2456bf0b-119f-4321-9f35-1ef9e85a66d5(TAD_ForceTunnel_01_Prepare),,",
    "805176c0-276e-4682-8078-686eb5f706c7(TAD_ForceTunnel_01_Antic),,",
    "e36855bf-fbfb-4911-bf47-4e1895da9acc(TAD_ForceTunnel_01_Cast),,",
    "47d6885b-e858-4d26-a94b-becf185b983a(TAD_ForceTunnel_01_Recover),,",
    "e4ed4236-9176-42c3-884e-16ce8b1336eb(TAD_ForceTunnel_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsHarmful",
    "AddFallDamageOnLand"
   ],
   "PrepareEffect": "420c38d1-19b5-425c-8fc4-766cd4f9b48b",
   "CastEffect": "38db3c94-f6d8-4299-8efd-5988123cc5d8",
   "PositionEffect": "add6ad5d-0a18-4e50-b1db-57e94576d02f"
  },
  "Rush_Charge_Minotaur": {
   "Name": "Rush_Charge_Minotaur",
   "SpellType": "Rush",
   "Parent": "Rush_Rush",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 12,
   "HitRadius": 2,
   "SpellSuccess": [
    "DealDamage(2d8,Piercing)",
    "Force(4)"
   ],
   "TargetConditions": "DistanceToTargetGreaterThan(4.5) and Character()",
   "DisplayName": "Shared_Rush_Charge_Minotaur_DisplayName",
   "Description": "Shared_Rush_Charge_Minotaur_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Piercing)",
    " Distance(4)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d8,Piercing)"
   ],
   "CastSound": "CrSpell_Cast_Charge",
   "UseCosts": [
    "ActionPoint:1",
    "Movement:Distance"
   ],
   "SpellAnimation": [
    "f5ee4588-a1f3-40a9-b8ad-17c565d26b24(CMBT_Skill_Charge_01_Prepare),,",
    "255d2795-7df1-42c8-bbe7-9773505ecb4c(CMBT_Skill_Charge_01_Antic),,",
    "b23a4639-7d28-4c9d-bb02-995f75aa4397(CMBT_Skill_Charge_01_Attack),,",
    "bb66d865-9256-4cd6-bf48-5358e776bc16(CMBT_Skill_Charge_01_Recover),,",
    "80e997f8-09f0-42a1-a597-afcccd499fe7(CMBT_Skill_Charge_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsHarmful",
    "AddFallDamageOnLand"
   ],
   "CastEffect": "2e90bb3a-daae-4157-b531-de1c71774c98"
  },
  "Rush_Rush_DeepRothe_NPC": {
   "Name": "Rush_Rush_DeepRothe_NPC",
   "SpellType": "Rush",
   "Parent": "Rush_Rush_DeepRothe",
   "Cooldown": "OncePerTurn",
   "SpellSuccess": [
    "DealDamage(1d8,Piercing)",
    "Force(3)"
   ],
   "TargetConditions": "DistanceToTargetGreaterThan(5.0) and Character()",
   "DisplayName": "Shared_Rush_Rush_DeepRothe_NPC_DisplayName",
   "Description": "Shared_Rush_Rush_DeepRothe_NPC_Description",
   "DescriptionParams": [
    "DealDamage(1d8,Piercing)",
    " Distance(3)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d8,Piercing)"
   ],
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Rush_WEAPON_ACTION_RUSH": {
   "Name": "Rush_WEAPON_ACTION_RUSH",
   "SpellType": "Rush",
   "Parent": "Rush_Rush"
  },
  "Rush_SpringAttack": {
   "Name": "Rush_SpringAttack",
   "SpellType": "Rush",
   "Cooldown": "OncePerShortRest",
   "TargetRadius": 9,
   "HitRadius": "0.3",
   "MovementSpeed": 40000,
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "TargetConditions": "(not Ally() and not Dead()) or Item()",
   "Icon": "Action_Rush_New",
   "DisplayName": "Shared_Rush_SpringAttack_DisplayName",
   "Description": "Shared_Rush_SpringAttack_Description",
   "TooltipAttackSave": [
    "Strength"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(OFF_BALANCED,100,2)"
   ],
   "PreviewCursor": "Melee",
   "CastSound": "Action_Cast_SpringAttack",
   "StartTextEvent": "Cast",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "2ba949b7-0329-4190-992c-11b0d29183c5(CMBT_Skill_Precision_01_Prepare),,",
    "7bfeb9dd-1348-45c7-bff9-ed42f8cd43a1(CMBT_Skill_Rush_01_Antic),,",
    "b780092c-cc12-43d5-b60e-acbac3fdceed(CMBT_Skill_Rush_01_Attack),,",
    "abbeb7de-2128-4b16-95e5-7b9d7b1af2f9(CMBT_Skill_Rush_01_Recover),,",
    "a0503ad0-c1b1-449c-b431-4ac6c39c58d7(CMBT_Skill_Precision_01_Loop),,",
    ",,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsHarmful",
    "IsDefaultWeaponAction"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": "4-6",
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "4d97dc4c-0b6f-4c87-a65a-6e6f08c186b9",
   "TargetEffect": "1615a7f7-21d9-4dd0-849b-d3c79a57c5ff",
   "TargetHitEffect": "c3151383-86e9-4876-9e29-28256d6bed7d",
   "StopAtFirstContact": 1,
   "HitExtension": "0.5"
  },
  "Shout_ActionSurge": {
   "Name": "Shout_ActionSurge",
   "SpellType": "Shout",
   "Cooldown": "OncePerShortRest",
   "AIFlags": [
    "GrantsResources",
    "UseAsSupportingActionOnly"
   ],
   "SpellProperties": [
    "ApplyStatus(ACTION_SURGE,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Skill_Fighter_ActionSurge",
   "DisplayName": "Shared_Shout_ActionSurge_DisplayName",
   "Description": "Shared_Shout_ActionSurge_Description",
   "TooltipStatusApply": [
    "ApplyStatus(ACTION_SURGE,100,1)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Surge",
   "TargetSound": "Action_Impact_Surge",
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellStyleGroup": "Class",
   "Requirements": "Combat",
   "PrepareEffect": "49dd385f-fd25-4372-8628-30b775af7c79",
   "CastEffect": "2550e2bb-c9f9-4440-9cd4-146a03f2e9bc"
  },
  "Shout_SELF": {
   "Name": "Shout_SELF",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge"
  },
  "Shout_AberrantShape": {
   "Name": "Shout_AberrantShape",
   "SpellType": "Shout",
   "SpellProperties": [
    "ApplyStatus(ABERRANT_SHAPE,100,-1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "TadpoleSuperPower_AberrantShape",
   "DisplayName": "Shared_Shout_AberrantShape_DisplayName",
   "Description": "Shared_Shout_AberrantShape_Description",
   "DescriptionParams": [
    "RegainHitPoints(21)"
   ],
   "ExtraDescription": "Shared_Shout_AberrantShape_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_AberrantShape_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "WildShape:1"
   ],
   "SpellAnimation": [
    "f94542d9-a79c-478a-92de-573cead9260e(TAD_PsionicPull_01_Prepare),,",
    ",,",
    "45eb309a-40c4-4093-bbf2-c22f6321553e(TAD_AbberantShape_01_Cast),,",
    ",,",
    "bd339475-d2b5-46e8-8d0c-9f2ad6a91328(TAD_PsionicPull_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "PrepareEffect": "b593a6ca-fbf1-4bec-98ab-db7035577548",
   "CastEffect": "1c1b7ee9-54c0-4cc9-8290-0e09240c83c8"
  },
  "Shout_AberrantShape_Dismiss": {
   "Name": "Shout_AberrantShape_Dismiss",
   "SpellType": "Shout",
   "SpellProperties": [
    "RemoveStatus(SG_Polymorph)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Skill_Druid_WildShape_Dismiss",
   "DisplayName": "Shared_Shout_AberrantShape_Dismiss_DisplayName",
   "Description": "Shared_Shout_AberrantShape_Dismiss_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_AberrantShapeDismiss_L1to3",
   "SpellAnimation": [
    "d7745165-66e4-41c4-9e42-d09d95a29491(SPL_ShapeShift_01_Prepare),,",
    ",,",
    "fd5e6365-f314-42e8-a39b-a041dc56b0e7(SPL_ShapeShift_01_Cast),,",
    "14294166-95db-46c1-b22a-2b780c2c2790(SPL_ShapeShift_Combat_01_Recover),,",
    "ce773016-6fb4-44fe-84db-e037aaa22041(SPL_ShapeShift_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellActionType": "Dismiss",
   "PrepareEffect": "c9b186fa-c2e3-4619-abea-f93c01324fdd",
   "CastEffect": "cae956d5-7450-4c43-9c0b-60eeb83e1c17"
  },
  "Shout_AlterSelf_Drow": {
   "Name": "Shout_AlterSelf_Drow",
   "SpellType": "Shout",
   "Level": 2,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_DROW,100,-1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_AlterSelf_Drow_DisplayName",
   "Description": "Shared_Shout_AlterSelf_Drow_Description",
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_PolymorphGeneric",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "4148823a-6dbc-4692-a8ff-71520315a10f(SPL_Somatic_Target_Mute_01_Cast),,",
    ",,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration"
   ]
  },
  "Shout_AlterSelf_Duergar": {
   "Name": "Shout_AlterSelf_Duergar",
   "SpellType": "Shout",
   "Parent": "Shout_AlterSelf_Drow",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_DUERGAR,100,-1)"
   ],
   "DisplayName": "Shared_Shout_AlterSelf_Duergar_DisplayName"
  },
  "Shout_AlterSelf_Dwarf": {
   "Name": "Shout_AlterSelf_Dwarf",
   "SpellType": "Shout",
   "Parent": "Shout_AlterSelf_Drow",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_DWARF,100,-1)"
   ],
   "DisplayName": "Shared_Shout_AlterSelf_Dwarf_DisplayName"
  },
  "Shout_AlterSelf_Elf": {
   "Name": "Shout_AlterSelf_Elf",
   "SpellType": "Shout",
   "Parent": "Shout_AlterSelf_Drow",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_ELF,100,-1)"
   ],
   "DisplayName": "Shared_Shout_AlterSelf_Elf_DisplayName"
  },
  "Shout_AlterSelf_Githyanki": {
   "Name": "Shout_AlterSelf_Githyanki",
   "SpellType": "Shout",
   "Parent": "Shout_AlterSelf_Drow",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_GITHYANKI,100,-1)"
   ],
   "DisplayName": "Shared_Shout_AlterSelf_Githyanki_DisplayName"
  },
  "Shout_AlterSelf_HalfDrow": {
   "Name": "Shout_AlterSelf_HalfDrow",
   "SpellType": "Shout",
   "Parent": "Shout_AlterSelf_Drow",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_HALFDROW,100,-1)"
   ],
   "DisplayName": "Shared_Shout_AlterSelf_HalfDrow_DisplayName"
  },
  "Shout_AlterSelf_HalfElf": {
   "Name": "Shout_AlterSelf_HalfElf",
   "SpellType": "Shout",
   "Parent": "Shout_AlterSelf_Drow",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_HALFELF,100,-1)"
   ],
   "DisplayName": "Shared_Shout_AlterSelf_HalfElf_DisplayName"
  },
  "Shout_AlterSelf_Halfling": {
   "Name": "Shout_AlterSelf_Halfling",
   "SpellType": "Shout",
   "Parent": "Shout_AlterSelf_Drow",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_HALFLING,100,-1)"
   ],
   "DisplayName": "Shared_Shout_AlterSelf_Halfling_DisplayName"
  },
  "Shout_AlterSelf_Human": {
   "Name": "Shout_AlterSelf_Human",
   "SpellType": "Shout",
   "Parent": "Shout_AlterSelf_Drow",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_HUMAN,100,-1)"
   ],
   "DisplayName": "Shared_Shout_AlterSelf_Human_DisplayName"
  },
  "Shout_AlterSelf_Tiefling": {
   "Name": "Shout_AlterSelf_Tiefling",
   "SpellType": "Shout",
   "Parent": "Shout_AlterSelf_Drow",
   "SpellProperties": [
    "ApplyStatus(ALTER_SELF_TIEFLING,100,-1)"
   ],
   "DisplayName": "Shared_Shout_AlterSelf_Tiefling_DisplayName"
  },
  "Shout_ArcaneRecovery": {
   "Name": "Shout_ArcaneRecovery",
   "SpellType": "Shout",
   "ContainerSpells": [
    "Shout_ArcaneRecovery_1"
   ],
   "Icon": "Skill_Wizard_ArcaneRecovery",
   "DisplayName": "Shared_Shout_ArcaneRecovery_DisplayName",
   "Description": "Shared_Shout_ArcaneRecovery_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_ArcaneRecovery",
   "TargetSound": "Action_Impact_ArcaneRecovery",
   "UseCosts": [
    "ActionPoint:1",
    "ArcaneRecoveryPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsLinkedSpellContainer"
   ],
   "PrepareEffect": "af787096-8656-4495-a6ce-cbd376578069",
   "CastEffect": "b7fb4cd6-971f-44c0-9447-378092d36b63"
  },
  "Shout_ArcaneRecovery_1": {
   "Name": "Shout_ArcaneRecovery_1",
   "SpellType": "Shout",
   "Parent": "Shout_ArcaneRecovery",
   "SpellContainerID": "Shout_ArcaneRecovery",
   "SpellProperties": [
    "RestoreResource(SpellSlot,2,1)"
   ],
   "DisplayName": "Shared_Shout_ArcaneRecovery_1_DisplayName",
   "Description": "Shared_Shout_ArcaneRecovery_1_Description",
   "PrepareEffect": "271665f4-5c3c-4bb4-933d-8a7daf8268b5",
   "CastEffect": "b88e4a1e-4eef-470c-8d12-6db53c48a1e8"
  },
  "Shout_ArcaneRecovery_2": {
   "Name": "Shout_ArcaneRecovery_2",
   "SpellType": "Shout",
   "Parent": "Shout_ArcaneRecovery",
   "SpellContainerID": "Shout_ArcaneRecovery",
   "SpellProperties": [
    "RestoreResource(SpellSlot,1,2)"
   ],
   "DisplayName": "Shared_Shout_ArcaneRecovery_2_DisplayName",
   "Description": "Shared_Shout_ArcaneRecovery_2_Description",
   "RootSpellID": "Shout_ArcaneRecovery_1",
   "PowerLevel": 2,
   "PrepareEffect": "aacf8a2d-1ef8-435d-b467-18a106c4442c",
   "CastEffect": "1cacdf94-4499-47ad-b40d-6353e4e197a8"
  },
  "Shout_ArmorOfAgathys": {
   "Name": "Shout_ArmorOfAgathys",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(ARMOR_OF_AGATHYS, 100, -1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Abjuration_ArmorOfAgathys",
   "DisplayName": "Shared_Shout_ArmorOfAgathys_DisplayName",
   "Description": "Shared_Shout_ArmorOfAgathys_Description",
   "DescriptionParams": [
    "DealDamage(5,Cold)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(ARMOR_OF_AGATHYS, 100, -1)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_ArmorOfAgathys_L1to3",
   "TargetSound": "Spell_Impact_Buff_ArmorOfAgathys_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "194b3bb6-fbd5-44a0-bec5-c8b4d8ff4871(SPL_Arcane_Buff_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent",
    "HasVerbalComponent"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "ea436b83-0684-41e3-887d-c8599cb5f105",
   "CastEffect": "f45653b4-42bf-494d-a5d7-270f3b448658"
  },
  "Shout_ArmorOfAgathys_2": {
   "Name": "Shout_ArmorOfAgathys_2",
   "SpellType": "Shout",
   "Parent": "Shout_ArmorOfAgathys",
   "SpellProperties": [
    "ApplyStatus(ARMOR_OF_AGATHYS_2, 100, -1)"
   ],
   "Icon": "Spell_Abjuration_ArmorOfAgathys_2",
   "Description": "Shared_Shout_ArmorOfAgathys_2_Description",
   "DescriptionParams": [
    "DealDamage(10,Cold)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Shout_ArmorOfAgathys",
   "PowerLevel": 2,
   "PrepareEffect": "ea436b83-0684-41e3-887d-c8599cb5f105",
   "CastEffect": "f45653b4-42bf-494d-a5d7-270f3b448658"
  },
  "Shout_BladeWard": {
   "Name": "Shout_BladeWard",
   "SpellType": "Shout",
   "Level": 0,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(BLADE_WARD,100,2)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Abjuration_BladeWard",
   "DisplayName": "Shared_Shout_BladeWard_DisplayName",
   "Description": "Shared_Shout_BladeWard_Description",
   "TooltipStatusApply": [
    "ApplyStatus(BLADE_WARD,100,2)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_BladeWard_L1to3",
   "TargetSound": "Spell_Impact_Buff_BladeWard_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "PrepareEffect": "33302a46-4a12-41dd-8845-6b7314d50022",
   "CastEffect": "1a4b0423-005b-4577-b376-815a08809675"
  },
  "Shout_Blur": {
   "Name": "Shout_Blur",
   "SpellType": "Shout",
   "Level": 2,
   "SpellSchool": "Illusion",
   "SpellProperties": [
    "ApplyStatus(BLUR,100,10)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Illusion_Blur",
   "DisplayName": "Shared_Shout_Blur_DisplayName",
   "Description": "Shared_Shout_Blur_Description",
   "ExtraDescription": "Shared_Shout_Blur_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(BLUR,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_Blur_L1to3",
   "VocalComponentSound": "Vocal_Component_Disadvantage",
   "TargetSound": "Spell_Impact_Buff_Blur_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "IsConcentration"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "PrepareEffect": "33302a46-4a12-41dd-8845-6b7314d50022",
   "CastEffect": "1a4b0423-005b-4577-b376-815a08809675"
  },
  "Shout_BreakFree_Restrained": {
   "Name": "Shout_BreakFree_Restrained",
   "SpellType": "Shout",
   "SpellRoll": "not SavingThrow(Ability.Strength, SourceSpellDC())",
   "SpellFail": [
    "RemoveStatus(RESTRAINED)",
    "RemoveStatus(ENSNARING_STRIKE)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_BreakFree_Restrained_DisplayName",
   "Description": "Shared_Shout_BreakFree_Restrained_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "f176f9e3-f7ee-4b9a-8ca2-fbb37bb4f12e(SPL_Somatic_1HandWard_01),,",
    ",,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent"
   ],
   "CastEffect": "4c512a59-338d-4321-b1f4-cb3fd57e288a"
  },
  "Shout_ComprehendLanguages": {
   "Name": "Shout_ComprehendLanguages",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Divination",
   "SpellProperties": [
    "ApplyStatus(COMPREHEND_LANGUAGES,100,-1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Divination_ComprehendLanguages",
   "DisplayName": "Shared_Shout_ComprehendLanguages_DisplayName",
   "Description": "Shared_Shout_ComprehendLanguages_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_ComprehendLanguages_L1to3",
   "VocalComponentSound": "Vocal_Component_ComprehendLanguages",
   "TargetSound": "Spell_Impact_Utility_ComprehendLanguages_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent"
   ],
   "PrepareEffect": "f0fdf917-8df0-4099-9db8-74047bfaaa81",
   "CastEffect": "e918985b-1855-4543-ba15-e7890ee5d649"
  },
  "Shout_CreateSorceryPoints": {
   "Name": "Shout_CreateSorceryPoints",
   "SpellType": "Shout",
   "ContainerSpells": [
    "Shout_CreateSorceryPoints_1"
   ],
   "TargetConditions": "Self()",
   "Icon": "Skill_Sorcerer_CreateSorceryPoints_1",
   "DisplayName": "Shared_Shout_CreateSorceryPoints_DisplayName",
   "Description": "Shared_Shout_CreateSorceryPoints_Description",
   "DescriptionParams": 1,
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_CreateSorceryPoint_L1to3",
   "TargetSound": "Spell_Impact_Utility_CreateSorceryPoint_L1to3",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "d58199b1-9bc5-4715-99d4-43a5b5c1ec16(SPL_Sorcerer_CreatePoint_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    "4222840e-85c4-41d4-89f3-cf525ab7a2ce(SPL_Sorcerer_CreatePoint_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsLinkedSpellContainer"
   ],
   "PowerLevel": 1,
   "PrepareEffect": "8f9043e2-4608-43c5-b78f-c4a1b91ea340",
   "CastEffect": "d822f332-8213-49a1-bc48-4668a89199ad"
  },
  "Shout_CreateSorceryPoints_1": {
   "Name": "Shout_CreateSorceryPoints_1",
   "SpellType": "Shout",
   "Parent": "Shout_CreateSorceryPoints",
   "SpellContainerID": "Shout_CreateSorceryPoints",
   "SpellProperties": [
    "ApplyStatus(SORCERYPOINT_1,100,-1)"
   ],
   "DisplayName": "Shared_Shout_CreateSorceryPoints_1_DisplayName",
   "Description": "Shared_Shout_CreateSorceryPoints_1_Description",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:1"
   ]
  },
  "Shout_CreateSorceryPoints_2": {
   "Name": "Shout_CreateSorceryPoints_2",
   "SpellType": "Shout",
   "Parent": "Shout_CreateSorceryPoints",
   "SpellContainerID": "Shout_CreateSorceryPoints",
   "SpellProperties": [
    "ApplyStatus(SORCERYPOINT_2,100,-1)"
   ],
   "Icon": "Skill_Sorcerer_CreateSorceryPoints_2",
   "DisplayName": "Shared_Shout_CreateSorceryPoints_2_DisplayName",
   "Description": "Shared_Shout_CreateSorceryPoints_2_Description",
   "DescriptionParams": 2,
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Shout_CreateSorceryPoints",
   "PowerLevel": 2,
   "PrepareEffect": "3cb0b265-544a-40f2-918e-2a4fb0860b71"
  },
  "Shout_CreateSorceryPoints_3": {
   "Name": "Shout_CreateSorceryPoints_3",
   "SpellType": "Shout",
   "Parent": "Shout_CreateSorceryPoints_2",
   "SpellProperties": [
    "ApplyStatus(SORCERYPOINT_3,100,-1)"
   ],
   "Icon": "Skill_Sorcerer_CreateSorceryPoints_3",
   "DisplayName": "Shared_Shout_CreateSorceryPoints_3_DisplayName",
   "DescriptionParams": 3,
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "RootSpellID": "Shout_CreateSorceryPoints",
   "PowerLevel": 3,
   "PrepareEffect": "67b81290-3e09-4361-bf63-20fada4ae632"
  },
  "Shout_CreateSorceryPoints_4": {
   "Name": "Shout_CreateSorceryPoints_4",
   "SpellType": "Shout",
   "Parent": "Shout_CreateSorceryPoints_2",
   "SpellProperties": [
    "ApplyStatus(SORCERYPOINT_4,100,-1)"
   ],
   "Icon": "Skill_Sorcerer_CreateSorceryPoints_4",
   "DisplayName": "Shared_Shout_CreateSorceryPoints_4_DisplayName",
   "DescriptionParams": 4,
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:4"
   ],
   "RootSpellID": "Shout_CreateSorceryPoints",
   "PowerLevel": 4,
   "PrepareEffect": "5feec47c-a895-48e3-baba-7d97ec89aa9f"
  },
  "Shout_CreateSpellSlot": {
   "Name": "Shout_CreateSpellSlot",
   "SpellType": "Shout",
   "ContainerSpells": [
    "Shout_CreateSpellSlot_1"
   ],
   "TargetConditions": "Self()",
   "Icon": "Skill_Sorcerer_CreateSpellSlot_1",
   "DisplayName": "Shared_Shout_CreateSpellSlot_DisplayName",
   "Description": "Shared_Shout_CreateSpellSlot_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_CreateSpellSlot_L1to3",
   "TargetSound": "Spell_Impact_Utility_CreateSpellSlot_L1to3",
   "UseCosts": [
    "BonusActionPoint:1",
    "SorceryPoint:2"
   ],
   "SpellAnimation": [
    "e343c8fe-877f-4739-bb77-4e481da07e84(SPL_Sorcerer_CreateSlot_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "4faf1d67-1b56-435b-973a-d3c228bb4348(SPL_Sorcerer_CreateSlot_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsLinkedSpellContainer"
   ],
   "PrepareEffect": "72a41c0a-6bb0-4063-946e-54000cf684c0",
   "CastEffect": "79caa1cd-1a4d-4c9f-8401-76ce465dc7c6"
  },
  "Shout_CreateSpellSlot_1": {
   "Name": "Shout_CreateSpellSlot_1",
   "SpellType": "Shout",
   "Parent": "Shout_CreateSpellSlot",
   "SpellContainerID": "Shout_CreateSpellSlot",
   "SpellProperties": [
    "ApplyStatus(SPELLSLOT_1,100,-1)"
   ],
   "DisplayName": "Shared_Shout_CreateSpellSlot_1_DisplayName",
   "Description": "Shared_Shout_CreateSpellSlot_1_Description",
   "DescriptionParams": [
    "2",
    "1"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "SorceryPoint:2"
   ]
  },
  "Shout_CreateSpellSlot_2": {
   "Name": "Shout_CreateSpellSlot_2",
   "SpellType": "Shout",
   "Parent": "Shout_CreateSpellSlot_1",
   "SpellProperties": [
    "ApplyStatus(SPELLSLOT_2,100,-1)"
   ],
   "Icon": "Skill_Sorcerer_CreateSpellSlot_2",
   "DisplayName": "Shared_Shout_CreateSpellSlot_2_DisplayName",
   "DescriptionParams": [
    "3",
    "2"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "SorceryPoint:3"
   ],
   "RootSpellID": "Shout_CreateSpellSlot",
   "PowerLevel": 2,
   "PrepareEffect": "f01605c2-bcf3-4626-82de-02fd31c4999b",
   "CastEffect": "a15fef07-05f7-448c-9fac-1b4f9df492fd"
  },
  "Shout_CreateSpellSlot_3": {
   "Name": "Shout_CreateSpellSlot_3",
   "SpellType": "Shout",
   "Parent": "Shout_CreateSpellSlot_1",
   "SpellProperties": [
    "ApplyStatus(SPELLSLOT_3,100,-1)"
   ],
   "Icon": "Skill_Sorcerer_CreateSpellSlot_3",
   "DisplayName": "Shared_Shout_CreateSpellSlot_3_DisplayName",
   "DescriptionParams": [
    "5",
    "3"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "SorceryPoint:5"
   ],
   "RootSpellID": "Shout_CreateSpellSlot",
   "PowerLevel": 3,
   "PrepareEffect": "a4fd6391-9841-433a-b69a-45f78973dfdd",
   "CastEffect": "00ed925a-7046-414b-9e09-6e0dfef7a86f"
  },
  "Shout_CreateSpellSlot_4": {
   "Name": "Shout_CreateSpellSlot_4",
   "SpellType": "Shout",
   "Parent": "Shout_CreateSpellSlot_1",
   "SpellProperties": [
    "ApplyStatus(SPELLSLOT_4,100,-1)"
   ],
   "Icon": "Skill_Sorcerer_CreateSpellSlot_4",
   "DisplayName": "Shared_Shout_CreateSpellSlot_4_DisplayName",
   "DescriptionParams": [
    "6",
    "4"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "SorceryPoint:6"
   ],
   "RootSpellID": "Shout_CreateSpellSlot",
   "PowerLevel": 4,
   "PrepareEffect": "b94f386d-1d36-4b4f-acca-554513f88ab8",
   "CastEffect": "68081adf-4e52-401b-aaea-5e5e4a146bf1"
  },
  "Shout_Crouch": {
   "Name": "Shout_Crouch",
   "SpellType": "Shout",
   "SpellProperties": [
    "ApplyStatus(CROUCH,100,-1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_Crouch_DisplayName",
   "Description": "Shared_Shout_Crouch_Description",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "ImmediateCast",
    "Stealth",
    "Invisible"
   ]
  },
  "Shout_Dash": {
   "Name": "Shout_Dash",
   "SpellType": "Shout",
   "AIFlags": [
    "GrantsResources",
    "UseAsSupportingActionOnly"
   ],
   "TargetConditions": "Self()",
   "Icon": "Action_Dash",
   "DisplayName": "Shared_Shout_Dash_DisplayName",
   "Description": "Shared_Shout_Dash_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DASH,100,1)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Dash",
   "TargetSound": "Action_Impact_Dash",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IgnoreSilence",
    "Stealth",
    "Invisible"
   ],
   "SpellActionType": "Dash",
   "SpellAnimationIntentType": "None",
   "PrepareEffect": "ae569a16-41db-43ee-94cf-770e101841cd",
   "CastEffect": "806a170b-c567-4481-bb56-56871d8aaf5f"
  },
  "Shout_Dash_BonusAction": {
   "Name": "Shout_Dash_BonusAction",
   "SpellType": "Shout",
   "Parent": "Shout_Dash",
   "Icon": "Action_Dash_Bonus",
   "DisplayName": "Shared_Shout_Dash_BonusAction_DisplayName",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Shout_Dash_CunningAction": {
   "Name": "Shout_Dash_CunningAction",
   "SpellType": "Shout",
   "Parent": "Shout_Dash_BonusAction",
   "DisplayName": "Shared_Shout_Dash_CunningAction_DisplayName"
  },
  "Shout_Dash_StepOfTheWind": {
   "Name": "Shout_Dash_StepOfTheWind",
   "SpellType": "Shout",
   "Parent": "Shout_Dash_BonusAction",
   "SpellProperties": [
    "ApplyStatus(DASH,100,1)",
    " ApplyStatus(STEP_OF_THE_WIND,100,1)"
   ],
   "DisplayName": "Shared_Shout_Dash_StepOfTheWind_DisplayName",
   "Description": "Shared_Shout_Dash_StepOfTheWind_Description"
  },
  "Shout_BootsOfSpeed": {
   "Name": "Shout_BootsOfSpeed",
   "SpellType": "Shout",
   "Parent": "Shout_Dash_BonusAction",
   "DisplayName": "Shared_Shout_BootsOfSpeed_DisplayName",
   "Description": "Shared_Shout_BootsOfSpeed_Description"
  },
  "Shout_DetectEvilAndGood": {
   "Name": "Shout_DetectEvilAndGood",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Divination",
   "SpellProperties": [
    "ApplyStatus(DETECT_EVIL_GOOD,100,-1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Divination_DetectEvilAndGood",
   "DisplayName": "Shared_Shout_DetectEvilAndGood_DisplayName",
   "Description": "Shared_Shout_DetectEvilAndGood_Description",
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_DetectGeneric",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration"
   ],
   "PrepareEffect": "11882b06-77fb-475a-b924-5f163fdaf40d",
   "CastEffect": "a32e391e-05f3-45d1-9575-dfb99a0ca4d2",
   "TargetEffect": "3660074d-d0ca-44c6-aaa3-803d892c1757"
  },
  "Shout_DetectThoughts": {
   "Name": "Shout_DetectThoughts",
   "SpellType": "Shout",
   "Level": 2,
   "SpellSchool": "Divination",
   "SpellProperties": [
    "ApplyStatus(DETECT_THOUGHTS,100,10)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Divination_DetectThoughts",
   "DisplayName": "Shared_Shout_DetectThoughts_DisplayName",
   "Description": "Shared_Shout_DetectThoughts_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DETECT_THOUGHTS,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_DetectThoughts_L1to3",
   "VocalComponentSound": "Vocal_Component_DetectGeneric",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration"
   ],
   "PrepareEffect": "33302a46-4a12-41dd-8845-6b7314d50022",
   "CastEffect": "1a4b0423-005b-4577-b376-815a08809675"
  },
  "Shout_Disengage": {
   "Name": "Shout_Disengage",
   "SpellType": "Shout",
   "TargetConditions": "Self()",
   "Icon": "Action_Disengage",
   "DisplayName": "Shared_Shout_Disengage_DisplayName",
   "Description": "Shared_Shout_Disengage_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Disengage",
   "TargetSound": "Action_Impact_Disengage",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "SpellActionType": "Disengage",
   "RequirementConditions": "not Immobilized()",
   "PrepareEffect": "f56fb8e0-815b-41e0-9071-3c2305c93660",
   "CastEffect": "08ecdc25-31ea-4f32-8787-19b97971a9f1"
  },
  "Shout_Disengage_BonusAction": {
   "Name": "Shout_Disengage_BonusAction",
   "SpellType": "Shout",
   "Parent": "Shout_Disengage",
   "Icon": "Action_Disengage_Bonus",
   "DisplayName": "Shared_Shout_Disengage_BonusAction_DisplayName",
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Shout_Disengage_CunningAction": {
   "Name": "Shout_Disengage_CunningAction",
   "SpellType": "Shout",
   "Parent": "Shout_Disengage_BonusAction",
   "DisplayName": "Shared_Shout_Disengage_CunningAction_DisplayName"
  },
  "Shout_Disengage_StepOfTheWind": {
   "Name": "Shout_Disengage_StepOfTheWind",
   "SpellType": "Shout",
   "Parent": "Shout_Disengage_BonusAction",
   "SpellProperties": [
    "ApplyStatus(DISENGAGE,100,1)",
    " ApplyStatus(STEP_OF_THE_WIND,100,1)"
   ],
   "DisplayName": "Shared_Shout_Disengage_StepOfTheWind_DisplayName",
   "Description": "Shared_Shout_Disengage_StepOfTheWind_Description"
  },
  "Shout_DisguiseSelf": {
   "Name": "Shout_DisguiseSelf",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Illusion",
   "ContainerSpells": [
    "Shout_DisguiseSelf_Tiefling_Male",
    "Shout_DisguiseSelf_Tiefling_Female",
    "Shout_DisguiseSelf_Drow_Male",
    "Shout_DisguiseSelf_Drow_Female",
    "Shout_DisguiseSelf_Human_Male",
    "Shout_DisguiseSelf_Human_Female",
    "Shout_DisguiseSelf_Githyanki_Male",
    "Shout_DisguiseSelf_Githyanki_Female",
    "Shout_DisguiseSelf_Dwarf_Male",
    "Shout_DisguiseSelf_Dwarf_Female",
    "Shout_DisguiseSelf_Elf_Male",
    "Shout_DisguiseSelf_Elf_Female",
    "Shout_DisguiseSelf_HalfElf_Male",
    "Shout_DisguiseSelf_HalfElf_Female",
    "Shout_DisguiseSelf_Halfling_Male",
    "Shout_DisguiseSelf_Halfling_Female"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Illusion_DisguiseSelf",
   "DisplayName": "Shared_Shout_DisguiseSelf_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_DisguiseSelf_L1to3",
   "VocalComponentSound": "Vocal_Component_PolymorphGeneric",
   "TargetSound": "Spell_Impact_Utility_DisguiseSelf_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsLinkedSpellContainer"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "9e7ec23c-4b13-4a88-b3d6-1df1782e4359",
   "CastEffect": "c33c578f-fc5c-4a9d-a961-78b7bfff73d7"
  },
  "Shout_DisguiseSelf_Tiefling_Male": {
   "Name": "Shout_DisguiseSelf_Tiefling_Male",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_TIEFLING_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Tiefling_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Tiefling_Male_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Tiefling_Male_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_TIEFLING_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Tiefling_Female": {
   "Name": "Shout_DisguiseSelf_Tiefling_Female",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_TIEFLING_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Tiefling_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Tiefling_Female_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Tiefling_Female_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_TIEFLING_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Drow_Male": {
   "Name": "Shout_DisguiseSelf_Drow_Male",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_DROW_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Drow_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Drow_Male_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Drow_Male_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_DROW_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Drow_Female": {
   "Name": "Shout_DisguiseSelf_Drow_Female",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_DROW_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Drow_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Drow_Female_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Drow_Female_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_DROW_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Human_Male": {
   "Name": "Shout_DisguiseSelf_Human_Male",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HUMAN_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Human_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Human_Male_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Human_Male_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HUMAN_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Human_Female": {
   "Name": "Shout_DisguiseSelf_Human_Female",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HUMAN_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Human_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Human_Female_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Human_Female_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HUMAN_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Githyanki_Male": {
   "Name": "Shout_DisguiseSelf_Githyanki_Male",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_GITHYANKI_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Githyanki_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Githyanki_Male_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Githyanki_Male_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_GITHYANKI_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Githyanki_Female": {
   "Name": "Shout_DisguiseSelf_Githyanki_Female",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_GITHYANKI_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Githyanki_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Githyanki_Female_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Githyanki_Female_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_GITHYANKI_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Dwarf_Male": {
   "Name": "Shout_DisguiseSelf_Dwarf_Male",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_DWARF_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Dwarf_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Dwarf_Male_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Dwarf_Male_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_DWARF_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Dwarf_Female": {
   "Name": "Shout_DisguiseSelf_Dwarf_Female",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_DWARF_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Dwarf_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Dwarf_Female_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Dwarf_Female_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_DWARF_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Elf_Male": {
   "Name": "Shout_DisguiseSelf_Elf_Male",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_ELF_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Elf_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Elf_Male_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Elf_Male_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_ELF_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Elf_Female": {
   "Name": "Shout_DisguiseSelf_Elf_Female",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_ELF_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Elf_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Elf_Female_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Elf_Female_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_ELF_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_HalfElf_Male": {
   "Name": "Shout_DisguiseSelf_HalfElf_Male",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HALFELF_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_HalfElf_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_HalfElf_Male_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_HalfElf_Male_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HALFELF_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_HalfElf_Female": {
   "Name": "Shout_DisguiseSelf_HalfElf_Female",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HALFELF_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_HalfElf_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_HalfElf_Female_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_HalfElf_Female_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HALFELF_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Halfling_Male": {
   "Name": "Shout_DisguiseSelf_Halfling_Male",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HALFLING_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Halfling_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Halfling_Male_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Halfling_Male_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HALFLING_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Halfling_Female": {
   "Name": "Shout_DisguiseSelf_Halfling_Female",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellContainerID": "Shout_DisguiseSelf",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HALFLING_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Halfling_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Halfling_Female_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Halfling_Female_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HALFLING_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "ContainerSpells": [
    "Shout_DisguiseSelf_Tiefling_Male_MaskOfManyFaces",
    "Shout_DisguiseSelf_Tiefling_Female_MaskOfManyFaces",
    "Shout_DisguiseSelf_Drow_Male_MaskOfManyFaces",
    "Shout_DisguiseSelf_Drow_Female_MaskOfManyFaces",
    "Shout_DisguiseSelf_Human_Male_MaskOfManyFaces",
    "Shout_DisguiseSelf_Human_Female_MaskOfManyFaces",
    "Shout_DisguiseSelf_Githyanki_Male_MaskOfManyFaces",
    "Shout_DisguiseSelf_Githyanki_Female_MaskOfManyFaces",
    "Shout_DisguiseSelf_Dwarf_Male_MaskOfManyFaces",
    "Shout_DisguiseSelf_Dwarf_Female_MaskOfManyFaces",
    "Shout_DisguiseSelf_Elf_Male_MaskOfManyFaces",
    "Shout_DisguiseSelf_Elf_Female_MaskOfManyFaces",
    "Shout_DisguiseSelf_HalfElf_Male_MaskOfManyFaces",
    "Shout_DisguiseSelf_HalfElf_Female_MaskOfManyFaces",
    "Shout_DisguiseSelf_Halfling_Male_MaskOfManyFaces",
    "Shout_DisguiseSelf_Halfling_Female_MaskOfManyFaces"
   ],
   "DisplayName": "Shared_Shout_DisguiseSelf_MaskOfManyFaces_DisplayName",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Shout_DisguiseSelf_Tiefling_Male_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Tiefling_Male_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_TIEFLING_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Tiefling_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Tiefling_Male_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Tiefling_Male_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_TIEFLING_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Tiefling_Female_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Tiefling_Female_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_TIEFLING_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Tiefling_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Tiefling_Female_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Tiefling_Female_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_TIEFLING_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Drow_Male_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Drow_Male_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_DROW_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Drow_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Drow_Male_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Drow_Male_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_DROW_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Drow_Female_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Drow_Female_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_DROW_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Drow_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Drow_Female_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Drow_Female_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_DROW_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Human_Male_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Human_Male_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HUMAN_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Human_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Human_Male_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Human_Male_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HUMAN_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Human_Female_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Human_Female_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HUMAN_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Human_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Human_Female_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Human_Female_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HUMAN_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Githyanki_Male_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Githyanki_Male_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_GITHYANKI_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Githyanki_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Githyanki_Male_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Githyanki_Male_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_GITHYANKI_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Githyanki_Female_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Githyanki_Female_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_GITHYANKI_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Githyanki_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Githyanki_Female_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Githyanki_Female_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_GITHYANKI_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Dwarf_Male_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Dwarf_Male_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_DWARF_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Dwarf_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Dwarf_Male_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Dwarf_Male_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_DWARF_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Dwarf_Female_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Dwarf_Female_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_DWARF_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Dwarf_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Dwarf_Female_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Dwarf_Female_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_DWARF_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Elf_Male_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Elf_Male_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_ELF_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Elf_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Elf_Male_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Elf_Male_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_ELF_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Elf_Female_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Elf_Female_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_ELF_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Elf_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Elf_Female_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Elf_Female_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_ELF_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_HalfElf_Male_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_HalfElf_Male_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HALFELF_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_HalfElf_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_HalfElf_Male_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_HalfElf_Male_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HALFELF_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_HalfElf_Female_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_HalfElf_Female_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HALFELF_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_HalfElf_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_HalfElf_Female_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_HalfElf_Female_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HALFELF_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Halfling_Male_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Halfling_Male_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HALFLING_MALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Halfling_Male",
   "DisplayName": "Shared_Shout_DisguiseSelf_Halfling_Male_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Halfling_Male_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HALFLING_MALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Halfling_Female_MaskOfManyFaces": {
   "Name": "Shout_DisguiseSelf_Halfling_Female_MaskOfManyFaces",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellContainerID": "Shout_DisguiseSelf_MaskOfManyFaces",
   "SpellProperties": [
    "ApplyStatus(DISGUISE_SELF_HALFLING_FEMALE,100,-1)"
   ],
   "Icon": "Spell_Illusion_DisguiseSelf_Halfling_Female",
   "DisplayName": "Shared_Shout_DisguiseSelf_Halfling_Female_MaskOfManyFaces_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Halfling_Female_MaskOfManyFaces_Description",
   "TooltipStatusApply": [
    "ApplyStatus(DISGUISE_SELF_HALFLING_FEMALE,100,-1)"
   ]
  },
  "Shout_DisguiseSelf_Cancel": {
   "Name": "Shout_DisguiseSelf_Cancel",
   "SpellType": "Shout",
   "Parent": "Shout_DisguiseSelf",
   "SpellProperties": [
    "RemoveStatus(SG_Disguise)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Illusion_DisguiseSelf",
   "DisplayName": "Shared_Shout_DisguiseSelf_Cancel_DisplayName",
   "Description": "Shared_Shout_DisguiseSelf_Cancel_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ]
  },
  "Shout_ExpeditiousRetreat": {
   "Name": "Shout_ExpeditiousRetreat",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Transmutation",
   "TargetConditions": "Self()",
   "Icon": "Spell_Divination_ExpeditiousRetreat",
   "DisplayName": "Shared_Shout_ExpeditiousRetreat_DisplayName",
   "Description": "Shared_Shout_ExpeditiousRetreat_Description",
   "TooltipStatusApply": [
    "ApplyStatus(EXPEDITIOUS_RETREAT, 100, -1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_ExpeditiousRetreat_L1to3",
   "VocalComponentSound": "Vocal_Component_BuffMovement",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "f6c0d370-c167-484a-81ad-1265a4f8af91",
   "CastEffect": "1a4b0423-005b-4577-b376-815a08809675"
  },
  "Shout_ExpeditiousRetreat_2": {
   "Name": "Shout_ExpeditiousRetreat_2",
   "SpellType": "Shout",
   "Parent": "Shout_ExpeditiousRetreat",
   "Icon": "Spell_Divination_ExpeditiousRetreat_2",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Shout_ExpeditiousRetreat",
   "PowerLevel": 2
  },
  "Shout_FalseLife": {
   "Name": "Shout_FalseLife",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Necromancy",
   "SpellProperties": [
    "ApplyStatus(FALSE_LIFE,100,-1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Necromancy_FalseLife",
   "DisplayName": "Shared_Shout_FalseLife_DisplayName",
   "Description": "Shared_Shout_FalseLife_Description",
   "TooltipStatusApply": [
    "ApplyStatus(FALSE_LIFE,100,-1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Healing_FalseLife_L1to3",
   "VocalComponentSound": "Vocal_Component_BoostMaxHP",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "1162f3ba-ed65-4cd0-9e1f-5882414c0097",
   "CastEffect": "fb2cd1f1-3fb7-4efc-87cc-61f08868f567"
  },
  "Shout_FalseLife_2": {
   "Name": "Shout_FalseLife_2",
   "SpellType": "Shout",
   "Parent": "Shout_FalseLife",
   "SpellProperties": [
    "ApplyStatus(FALSE_LIFE_2,100,-1)"
   ],
   "Icon": "Spell_Necromancy_FalseLife_2",
   "Description": "Shared_Shout_FalseLife_2_Description",
   "TooltipStatusApply": [
    "ApplyStatus(FALSE_LIFE_2,100,-1)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Shout_FalseLife",
   "PowerLevel": 2
  },
  "Shout_FalseLife_FiendishVigor": {
   "Name": "Shout_FalseLife_FiendishVigor",
   "SpellType": "Shout",
   "Parent": "Shout_FalseLife",
   "DisplayName": "Shared_Shout_FalseLife_FiendishVigor_DisplayName",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Shout_FlameBlade": {
   "Name": "Shout_FlameBlade",
   "SpellType": "Shout",
   "Level": 2,
   "SpellSchool": "Evocation",
   "TargetConditions": "Self()",
   "Icon": "Spell_Evocation_FlameBlade",
   "DisplayName": "Shared_Shout_FlameBlade_DisplayName",
   "Description": "Shared_Shout_FlameBlade_Description",
   "DescriptionParams": [
    "DealDamage(3d6,Fire)",
    "Distance(3)",
    "Distance(6)"
   ],
   "ExtraDescription": "Shared_Shout_FlameBlade_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Summon_Flameblade_L1to3",
   "VocalComponentSound": "Vocal_Component_EnchantWeapon",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "54d977c9-c17a-4ba2-a727-5c51f97ee91a(SPL_Druid_Damage_01_Prepare),,",
    ",,",
    "35b644cf-5c13-4407-9dc1-23bf4309216e(SPL_Weapon_01_Cast),,",
    "823e3ddf-c670-41ef-b7b4-9f4a4e38300b(SPL_Weapon_01_Recover),,",
    "3fd6fd64-9a68-46c9-a7da-29a85e53ef7f(SPL_Druid_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "SwitchSheathUnsheathOnCast",
    "Force1HSSubSetDuringCast"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "ef000775-5921-4a24-98a4-a68ef65cdc74",
   "CastEffect": "ec6002b5-fda9-4a78-a024-60e4a90563aa"
  },
  "Shout_FlameBlade_4": {
   "Name": "Shout_FlameBlade_4",
   "SpellType": "Shout",
   "Parent": "Shout_FlameBlade",
   "SpellProperties": [
    "SummonInInventory(7bbfed72-1302-4709-8da5-2220343d7d29,-1,1,true,true,true,,FLAME_BLADE,FLAME_BLADE)"
   ],
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:4"
   ],
   "SpellAnimation": [
    "54d977c9-c17a-4ba2-a727-5c51f97ee91a(SPL_Druid_Damage_01_Prepare),,",
    ",,",
    "35b644cf-5c13-4407-9dc1-23bf4309216e(SPL_Weapon_01_Cast),,",
    "823e3ddf-c670-41ef-b7b4-9f4a4e38300b(SPL_Weapon_01_Recover),,",
    "3fd6fd64-9a68-46c9-a7da-29a85e53ef7f(SPL_Druid_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "RootSpellID": "Shout_FlameBlade",
   "PowerLevel": 4
  },
  "Shout_HellishRebuke": {
   "Name": "Shout_HellishRebuke",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "ApplyStatus(HELLISH_REBUKE,100,-1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_HellishRebuke",
   "DisplayName": "Shared_Shout_HellishRebuke_DisplayName",
   "Description": "Shared_Shout_HellishRebuke_Description",
   "DescriptionParams": [
    "DealDamage(2d10,Fire)"
   ],
   "ExtraDescription": "Shared_Shout_HellishRebuke_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d10,Fire)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_HellishRebuke_L1to3",
   "UseCosts": [
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "194b3bb6-fbd5-44a0-bec5-c8b4d8ff4871(SPL_Arcane_Buff_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "617356b2-8b51-471f-ba67-5f9f1fd4bccc",
   "CastEffect": "fe325884-a0ab-494b-8f94-917b4c7c6ffe"
  },
  "Shout_HellishRebuke_2": {
   "Name": "Shout_HellishRebuke_2",
   "SpellType": "Shout",
   "Parent": "Shout_HellishRebuke",
   "SpellProperties": [
    "ApplyStatus(HELLISH_REBUKE_2,100,-1)"
   ],
   "Icon": "Spell_HellishRebuke_2",
   "DescriptionParams": [
    "DealDamage(3d10,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d10,Fire)"
   ],
   "UseCosts": [
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Shout_HellishRebuke",
   "PowerLevel": 2
  },
  "Shout_HellishRebuke_AsmodeusTiefling": {
   "Name": "Shout_HellishRebuke_AsmodeusTiefling",
   "SpellType": "Shout",
   "Parent": "Shout_HellishRebuke_2",
   "Level": 2,
   "SpellSchool": "Evocation",
   "Cooldown": "OncePerRest",
   "DisplayName": "Shared_Shout_HellishRebuke_AsmodeusTiefling_DisplayName"
  },
  "Shout_Hide": {
   "Name": "Shout_Hide",
   "SpellType": "Shout",
   "AIFlags": [
    "CanNotUse"
   ],
   "SpellProperties": [
    "ApplyStatus(SNEAKING,100,-1)"
   ],
   "TargetConditions": "Self()",
   "Autocast": "Yes",
   "Icon": "Action_Hide",
   "DisplayName": "Shared_Shout_Hide_DisplayName",
   "Description": "Shared_Shout_Hide_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "Stealth",
    "ImmediateCast",
    "DontForceSheathOrUnsheath",
    "AllowMoveAndCast",
    "Invisible",
    "UnavailableInDialogs"
   ],
   "SpellActionType": "Hide",
   "CinematicArenaFlags": "Ignore"
  },
  "Shout_Hide_BonusAction": {
   "Name": "Shout_Hide_BonusAction",
   "SpellType": "Shout",
   "Parent": "Shout_Hide",
   "DisplayName": "Shared_Shout_Hide_BonusAction_DisplayName",
   "Description": "Shared_Shout_Hide_BonusAction_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ]
  },
  "Shout_Inkblot": {
   "Name": "Shout_Inkblot",
   "SpellType": "Shout",
   "Parent": "Shout_Hide",
   "Cooldown": "OncePerShortRest",
   "TargetConditions": "Self()",
   "Autocast": "Yes",
   "Icon": "TadpoleSuperPower_InkBlot",
   "DisplayName": "Shared_Shout_Inkblot_DisplayName",
   "Description": "Shared_Shout_Inkblot_Description",
   "ExtraDescription": "Shared_Shout_Inkblot_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_Inkblot_L1to3",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    ",,",
    ",,",
    "f89ce1b3-a397-4623-8cea-235d94bef0fe(TAD_Inkblot_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "DontForceSheathOrUnsheath",
    "Stealth",
    "Invisible",
    "UnavailableInDialogs"
   ],
   "PrepareEffect": "c750d2db-2e5b-476e-9fea-1af25c2f867c",
   "CastEffect": "0271b157-0152-4de9-acbd-985079e2a596"
  },
  "Shout_MageArmor_ArmorOfShadows": {
   "Name": "Shout_MageArmor_ArmorOfShadows",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(MAGE_ARMOR,100,-1)"
   ],
   "TargetConditions": "Self() and not WearingArmor()",
   "Icon": "Spell_Abjuration_MageArmor",
   "DisplayName": "Shared_Shout_MageArmor_ArmorOfShadows_DisplayName",
   "Description": "Shared_Shout_MageArmor_ArmorOfShadows_Description",
   "ExtraDescription": "Shared_Shout_MageArmor_ArmorOfShadows_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(MAGE_ARMOR,100,-1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_MageArmor_L1to3",
   "VocalComponentSound": "Vocal_Component_CastIllusion",
   "TargetSound": "Spell_Impact_Buff_MageArmor_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "RequirementConditions": "not WearingArmor()",
   "PrepareEffect": "ea436b83-0684-41e3-887d-c8599cb5f105",
   "CastEffect": "f45653b4-42bf-494d-a5d7-270f3b448658"
  },
  "Shout_MirrorImage": {
   "Name": "Shout_MirrorImage",
   "SpellType": "Shout",
   "Level": 2,
   "SpellSchool": "Illusion",
   "SpellProperties": [
    "ApplyStatus(MIRROR_IMAGE_3,100,10)",
    "ApplyStatus(MIRROR_IMAGE_2,100,10)",
    "ApplyStatus(MIRROR_IMAGE_1,100,10)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Illusion_MirrorImage",
   "DisplayName": "Shared_Shout_MirrorImage_DisplayName",
   "Description": "Shared_Shout_MirrorImage_Description",
   "ExtraDescription": "Shared_Shout_MirrorImage_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(MIRROR_IMAGE_1,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_MirrorImage_L1to3",
   "VocalComponentSound": "Vocal_Component_CastIllusion",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "33302a46-4a12-41dd-8845-6b7314d50022",
   "CastEffect": "1a4b0423-005b-4577-b376-815a08809675"
  },
  "Shout_MirrorImage_TrickeryCleric": {
   "Name": "Shout_MirrorImage_TrickeryCleric",
   "SpellType": "Shout",
   "Parent": "Shout_MirrorImage",
   "ExtraDescription": "Shared_Shout_MirrorImage_TrickeryCleric_ExtraDescription"
  },
  "Shout_NaturalRecovery": {
   "Name": "Shout_NaturalRecovery",
   "SpellType": "Shout",
   "ContainerSpells": [
    "Shout_NaturalRecovery_1"
   ],
   "TargetConditions": "Self()",
   "Icon": "Skill_Druid_NaturalRecovery",
   "DisplayName": "Shared_Shout_NaturalRecovery_DisplayName",
   "Description": "Shared_Shout_NaturalRecovery_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_NaturalRecovery",
   "TargetSound": "Action_Impact_NaturalRecovery",
   "UseCosts": [
    "ActionPoint:1",
    "NaturalRecoveryPoint:1"
   ],
   "SpellAnimation": [
    "75e56f2b-46e4-4456-8b2a-ce91076718ea(SPL_Druid_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "f2cce35f-eed2-4fdd-9f0b-16ca08fa1e25(SPL_Druid_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsLinkedSpellContainer"
   ],
   "PrepareEffect": "e8109f4b-2439-4424-9bc8-743270220f47",
   "CastEffect": "a948977d-8057-4e81-a3cb-1a3ea3cc3812"
  },
  "Shout_NaturalRecovery_1": {
   "Name": "Shout_NaturalRecovery_1",
   "SpellType": "Shout",
   "Parent": "Shout_NaturalRecovery",
   "SpellContainerID": "Shout_NaturalRecovery",
   "SpellProperties": [
    "RestoreResource(SpellSlot,2,1)"
   ],
   "Icon": "Skill_Druid_NaturalRecovery",
   "DisplayName": "Shared_Shout_NaturalRecovery_1_DisplayName",
   "Description": "Shared_Shout_NaturalRecovery_1_Description"
  },
  "Shout_NaturalRecovery_2": {
   "Name": "Shout_NaturalRecovery_2",
   "SpellType": "Shout",
   "Parent": "Shout_NaturalRecovery",
   "SpellContainerID": "Shout_NaturalRecovery",
   "SpellProperties": [
    "RestoreResource(SpellSlot,1,2)"
   ],
   "Icon": "Skill_Druid_NaturalRecovery",
   "DisplayName": "Shared_Shout_NaturalRecovery_2_DisplayName",
   "Description": "Shared_Shout_NaturalRecovery_2_Description",
   "RootSpellID": "Shout_NaturalRecovery_1",
   "PowerLevel": 2
  },
  "Shout_ProduceFlame": {
   "Name": "Shout_ProduceFlame",
   "SpellType": "Shout",
   "Level": 0,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "ApplyStatus(PRODUCE_FLAME,100,100)",
    "ApplyStatus(PRODUCE_FLAME_HURL_FREE,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Conjuration_ProduceFlame_Light",
   "DisplayName": "Shared_Shout_ProduceFlame_DisplayName",
   "Description": "Shared_Shout_ProduceFlame_Description",
   "DescriptionParams": [
    "Distance(9)",
    "DealDamage(1d8,Fire)"
   ],
   "ExtraDescription": "Shared_Shout_ProduceFlame_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(PRODUCE_FLAME,100,100)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Fire_ProduceFlame_L1to3",
   "VocalComponentSound": "Vocal_Component_Light",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "75e56f2b-46e4-4456-8b2a-ce91076718ea(SPL_Druid_Utility_01_Prepare),,",
    ",,",
    "29cc8ef2-e45e-4513-8f98-085d0dad7bc1(SPL_Somatic_Target_Swipe_01_Cast),,",
    "bb428832-db99-4236-8a81-a2737b81d0cc(SPL_Somatic_Target_Swipe_01_Recover),,",
    "f2cce35f-eed2-4fdd-9f0b-16ca08fa1e25(SPL_Druid_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent",
    "HasVerbalComponent"
   ],
   "PrepareEffect": "7b26059d-9a0a-46f5-b269-3df00842ecd2",
   "CastEffect": "715ae090-ae24-4b93-9543-d431e7aaefb9"
  },
  "Shout_ProduceFlame_Dismiss": {
   "Name": "Shout_ProduceFlame_Dismiss",
   "SpellType": "Shout",
   "Level": 0,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "RemoveStatus(PRODUCE_FLAME)",
    "RemoveStatus(PRODUCE_FLAME_HURL)",
    "RemoveStatus(PRODUCE_FLAME_HURL_FREE)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Conjuration_ProduceFlame_Dismiss",
   "DisplayName": "Shared_Shout_ProduceFlame_Dismiss_DisplayName",
   "Description": "Shared_Shout_ProduceFlame_Dismiss_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_ProduceFlameDismiss_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "75e56f2b-46e4-4456-8b2a-ce91076718ea(SPL_Druid_Utility_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    "f2cce35f-eed2-4fdd-9f0b-16ca08fa1e25(SPL_Druid_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent",
    "HasVerbalComponent"
   ],
   "PrepareEffect": "d814b674-ab81-4e6a-8c14-c23e0b92487a",
   "CastEffect": "a8a47473-49e4-43dc-a1db-06faeb6a4a51"
  },
  "Shout_ReflectiveShell": {
   "Name": "Shout_ReflectiveShell",
   "SpellType": "Shout",
   "Parent": "Shout_Blur",
   "Cooldown": "OncePerShortRest",
   "SpellProperties": [
    "ApplyStatus(REFLECTIVE_SHELL, 100, 2)"
   ],
   "TargetConditions": "Self()",
   "Icon": "TadpoleSuperPower_ReflectiveShell",
   "DisplayName": "Shared_Shout_ReflectiveShell_DisplayName",
   "Description": "Shared_Shout_ReflectiveShell_Description",
   "TooltipStatusApply": [
    "ApplyStatus(REFLECTIVE_SHELL, 100, 2)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_ReflectiveShell_L1to3",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "43fdcf16-8cff-42f3-bc5a-4b32519a5b13(TAD_ReflectiveShell_01_Prepare),,",
    ",,",
    "ab17f201-8251-4690-bfac-b42c8561fc91(TAD_ReflectiveShell_01_Cast),,",
    "7e13b95d-d114-4c1b-baa9-d29fd71b8be9(TAD_ReflectiveShell_01_Recover),,",
    "e65482d6-3706-46c2-b33e-a87a98b10e11(TAD_ReflectiveShell_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "074d1774-2e76-4cb1-9339-ecb2790cfa27",
   "CastEffect": "3ba6580e-2f6a-438a-b261-e739424537fb"
  },
  "Shout_RegainHP": {
   "Name": "Shout_RegainHP",
   "SpellType": "Shout",
   "TargetConditions": "Self()",
   "Icon": "Action_RegainHP",
   "DisplayName": "Shared_Shout_RegainHP_DisplayName",
   "Description": "Shared_Shout_RegainHP_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_RegainHP",
   "TargetSound": "Action_Impact_RegainHP",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "HitCosts": "HitDice:1",
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "96a51ac8-2e7e-4718-bb62-dcfd18964a02",
   "CastEffect": "9396e4e3-2af9-465e-adba-5714d97ce66f"
  },
  "Shout_RegainHP_Peace_NPC": {
   "Name": "Shout_RegainHP_Peace_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_RegainHP"
  },
  "Shout_SecondWind": {
   "Name": "Shout_SecondWind",
   "SpellType": "Shout",
   "Cooldown": "OncePerShortRest",
   "TargetConditions": "Self()",
   "Icon": "Skill_Fighter_SecondWind",
   "DisplayName": "Shared_Shout_SecondWind_DisplayName",
   "Description": "Shared_Shout_SecondWind_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_SecondWind",
   "TargetSound": "Action_Impact_SecondWind",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "SpellStyleGroup": "Class",
   "PrepareEffect": "bd833cb2-2d28-4533-bfdf-67e4f77dd10f",
   "CastEffect": "bc392fbd-4ca6-4066-954b-169eb0b963e0"
  },
  "Shout_Shillelagh": {
   "Name": "Shout_Shillelagh",
   "SpellType": "Shout",
   "Level": 0,
   "SpellSchool": "Transmutation",
   "TargetConditions": "Self()",
   "Icon": "Spell_Abjuration_Transmutation_Shillelagh",
   "DisplayName": "Shared_Shout_Shillelagh_DisplayName",
   "Description": "Shared_Shout_Shillelagh_Description",
   "TooltipStatusApply": [
    "ApplyStatus(SHILLELAGH, 100, 10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_Shillelagh_L0",
   "VocalComponentSound": "Vocal_Component_EnchantWeapon",
   "TargetSound": "Spell_Impact_Buff_Shillelagh_L0",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    ",,",
    "35b644cf-5c13-4407-9dc1-23bf4309216e(SPL_Weapon_01_Cast),,",
    "823e3ddf-c670-41ef-b7b4-9f4a4e38300b(SPL_Weapon_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "WeaponTypes": [
    "StaffOrClub",
    "Melee"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "IsMelee",
    "IsSpell",
    "HasSomaticComponent"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "e8109f4b-2439-4424-9bc8-743270220f47",
   "CastEffect": "53c9d361-0fc1-4d72-a70b-bc2611d538f0"
  },
  "Shout_SpeakWithAnimals": {
   "Name": "Shout_SpeakWithAnimals",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Divination",
   "SpellProperties": [
    "ApplyStatus(PETPAL,100,-1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Divination_SpeakWithAnimals",
   "DisplayName": "Shared_Shout_SpeakWithAnimals_DisplayName",
   "Description": "Shared_Shout_SpeakWithAnimals_Description",
   "TooltipStatusApply": [
    "ApplyStatus(PETPAL,100,-1)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_SpeakWithAnimals_L1to3",
   "VocalComponentSound": "Vocal_Component_SpeakWithAnimals",
   "TargetSound": "Spell_Impact_Utility_SpeakWithAnimals_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "60323abf-e161-4293-9ffb-c883eb87009f"
  },
  "Shout_SpeakWithAnimals_SpiritSeeker": {
   "Name": "Shout_SpeakWithAnimals_SpiritSeeker",
   "SpellType": "Shout",
   "Parent": "Shout_SpeakWithAnimals",
   "TargetConditions": "Self()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "PrepareEffect": "41b7de58-d96b-460c-b767-7d439a8353bc"
  },
  "Shout_SpeakWithAnimals_BeastSpeech": {
   "Name": "Shout_SpeakWithAnimals_BeastSpeech",
   "SpellType": "Shout",
   "Parent": "Shout_SpeakWithAnimals",
   "DisplayName": "Shared_Shout_SpeakWithAnimals_BeastSpeech_DisplayName",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Shout_SpeakWithAnimals_2": {
   "Name": "Shout_SpeakWithAnimals_2",
   "SpellType": "Shout",
   "Parent": "Shout_SpeakWithAnimals",
   "Icon": "Spell_Divination_SpeakWithAnimals_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Shout_SpeakWithAnimals",
   "PowerLevel": 2
  },
  "Shout_Thaumaturgy": {
   "Name": "Shout_Thaumaturgy",
   "SpellType": "Shout",
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "ApplyStatus(THAUMATURGY,100,10)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Transmutation_Thaumaturgy",
   "DisplayName": "Shared_Shout_Thaumaturgy_DisplayName",
   "Description": "Shared_Shout_Thaumaturgy_Description",
   "TooltipStatusApply": [
    "ApplyStatus(THAUMATURGY,100,10)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_Thaumaturgy_L0",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent"
   ],
   "PrepareEffect": "b205bf60-d55b-4eb6-a4cf-091b8ccbaf9a",
   "CastEffect": "b2af7595-7aca-4d9d-92a6-68065515810b"
  },
  "Shout_WildShape": {
   "Name": "Shout_WildShape",
   "SpellType": "Shout",
   "ContainerSpells": [
    "Shout_WildShape_Badger",
    "Shout_WildShape_Spider",
    "Shout_WildShape_Wolf_Dire",
    "Shout_WildShape_Cat"
   ],
   "TargetConditions": "Self()",
   "Icon": "Skill_Druid_WildShape",
   "DisplayName": "Shared_Shout_WildShape_DisplayName",
   "Description": "Shared_Shout_WildShape_Description",
   "ExtraDescription": "Shared_Shout_WildShape_ExtraDescription",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1",
    "WildShape:1"
   ],
   "SpellAnimation": [
    "d7745165-66e4-41c4-9e42-d09d95a29491(SPL_ShapeShift_01_Prepare),,",
    ",,",
    "fd5e6365-f314-42e8-a39b-a041dc56b0e7(SPL_ShapeShift_01_Cast),,",
    ",,",
    "ce773016-6fb4-44fe-84db-e037aaa22041(SPL_ShapeShift_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsLinkedSpellContainer"
   ]
  },
  "Shout_WildShape_Dismiss": {
   "Name": "Shout_WildShape_Dismiss",
   "SpellType": "Shout",
   "SpellProperties": [
    "RemoveStatus(SG_Polymorph_BeastShape)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Skill_Druid_WildShape_Dismiss",
   "DisplayName": "Shared_Shout_WildShape_Dismiss_DisplayName",
   "Description": "Shared_Shout_WildShape_Dismiss_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_WildShapeDismiss_L1to3",
   "SpellAnimation": [
    "d7745165-66e4-41c4-9e42-d09d95a29491(SPL_ShapeShift_01_Prepare),,",
    ",,",
    "fd5e6365-f314-42e8-a39b-a041dc56b0e7(SPL_ShapeShift_01_Cast),,",
    "14294166-95db-46c1-b22a-2b780c2c2790(SPL_ShapeShift_Combat_01_Recover),,",
    "ce773016-6fb4-44fe-84db-e037aaa22041(SPL_ShapeShift_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellActionType": "Dismiss",
   "PrepareEffect": "4ccd738c-494b-4231-9067-742798e4c241",
   "CastEffect": "727a210b-90c4-4a5a-b9d6-a466753aa2ed"
  },
  "Shout_WildShape_Badger": {
   "Name": "Shout_WildShape_Badger",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape",
   "SpellContainerID": "Shout_WildShape",
   "SpellProperties": [
    "ApplyStatus(WILDSHAPE_BADGER_PLAYER,100,-1)"
   ],
   "Icon": "Skill_Druid_WildShape_GiantBadger",
   "DisplayName": "Shared_Shout_WildShape_Badger_DisplayName",
   "Description": "Shared_Shout_WildShape_Badger_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Badger_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(13)"
   ],
   "CastSound": "Spell_Cast_Buff_WildShapeBadger_L1to3",
   "SpellAnimation": [
    "f324c7b4-4fb8-4088-ae4a-02fa323a8701(SPL_WildShape_Badger_01_Prepare),,",
    ",,",
    "825a94f3-b675-402a-a275-adcc465f4f62(SPL_WildShape_Badger_01_Cast),,",
    "721abca5-2d52-4317-82a3-2a2e970a7a16(SPL_ShapeShift_Peace_01_Recover),,",
    "c5b317da-4fc3-4d59-a45e-2681592cf0ed(SPL_WildShape_Badger_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "UnavailableInDialogs"
   ],
   "PrepareEffect": "22330577-b4cb-49ea-ade9-7ff183aa9209",
   "CastEffect": "cc1dcf3b-9fc9-4d11-993d-296af54dc67a"
  },
  "Shout_WildShape_Bear_Polar": {
   "Name": "Shout_WildShape_Bear_Polar",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape",
   "SpellContainerID": "Shout_WildShape",
   "SpellProperties": [
    "ApplyStatus(WILDSHAPE_BEAR_POLAR_PLAYER,100,-1)"
   ],
   "Icon": "Skill_Druid_WildShape_PolarBear",
   "DisplayName": "Shared_Shout_WildShape_Bear_Polar_DisplayName",
   "Description": "Shared_Shout_WildShape_Bear_Polar_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Bear_Polar_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(30)"
   ],
   "CastSound": "Spell_Cast_Buff_WildShapeBear_L1to3",
   "SpellAnimation": [
    "d03adb1c-8b8a-4cf6-b06f-15de13cd67ee(SPL_WildShape_Bear_01_Prepare),,",
    ",,",
    "0e901555-c5ba-43ea-b548-fc19a94799b2(SPL_WildShape_Bear_01_Cast),,",
    "14294166-95db-46c1-b22a-2b780c2c2790(SPL_ShapeShift_Combat_01_Recover),,",
    "e7c2e184-0ad2-4439-9594-c6a39f9e218b(SPL_WildShape_Bear_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "UnavailableInDialogs"
   ],
   "PrepareEffect": "2e05edbb-ee72-48d9-bb79-c540b1d2ddd8",
   "CastEffect": "7659df47-335b-4478-a108-8e7812b03ae8"
  },
  "Shout_WildShape_Cat": {
   "Name": "Shout_WildShape_Cat",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape",
   "SpellContainerID": "Shout_WildShape",
   "SpellProperties": [
    "ApplyStatus(WILDSHAPE_CAT_PLAYER,100,-1)"
   ],
   "Icon": "Skill_Druid_WildShape_Cat",
   "DisplayName": "Shared_Shout_WildShape_Cat_DisplayName",
   "Description": "Shared_Shout_WildShape_Cat_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Cat_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(2)"
   ],
   "CastSound": "Spell_Cast_Buff_WildShapeCat_L1to3",
   "SpellAnimation": [
    "0ff03958-d308-40d7-9be0-5e2862fd2b0b(SPL_WildShape_Cat_01_Prepare),,",
    ",,",
    "42122b24-01c7-4b93-8b29-6d969b877690(SPL_WildShape_Cat_01_Cast),,",
    "721abca5-2d52-4317-82a3-2a2e970a7a16(SPL_ShapeShift_Peace_01_Recover),,",
    "cff0d09b-0ba7-4085-9261-9f2889f53aab(SPL_WildShape_Cat_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "UnavailableInDialogs"
   ],
   "PrepareEffect": "f4a83238-689d-4d33-a51e-e630f982d837",
   "CastEffect": "bfe23797-6c5c-4f4e-adba-7a142040c0cc"
  },
  "Shout_WildShape_DeepRothe": {
   "Name": "Shout_WildShape_DeepRothe",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape",
   "SpellContainerID": "Shout_WildShape",
   "SpellProperties": [
    "ApplyStatus(WILDSHAPE_DEEP_ROTHE_PLAYER,100,-1)"
   ],
   "Icon": "Skill_Druid_WildShape_DeepRothe",
   "DisplayName": "Shared_Shout_WildShape_DeepRothe_DisplayName",
   "Description": "Shared_Shout_WildShape_DeepRothe_Description",
   "ExtraDescription": "Shared_Shout_WildShape_DeepRothe_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(23)"
   ],
   "CastSound": "Spell_Cast_Buff_WildShapeRothe_L1to3",
   "SpellAnimation": [
    "3851e40b-df28-4f3c-a4a8-9d5ccda5dfc2(SPL_WildShape_DeepRothe_01_Prepare),,",
    ",,",
    "796611ce-d13b-485e-9965-1e3f9023dd18(SPL_WildShape_DeepRothe_01_Cast),,",
    ",,",
    "b0dc06be-342a-495f-84c2-5a7f393b6cd7(SPL_WildShape_DeepRothe_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "UnavailableInDialogs"
   ],
   "PrepareEffect": "26878236-181d-4dd3-8634-6ce7682a32e1",
   "CastEffect": "aebd34c0-3c37-4a41-88ac-352673b17f00"
  },
  "Shout_WildShape_Raven": {
   "Name": "Shout_WildShape_Raven",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape",
   "SpellContainerID": "Shout_WildShape",
   "SpellProperties": [
    "ApplyStatus(WILDSHAPE_RAVEN_PLAYER,100,-1)"
   ],
   "Icon": "Skill_Druid_WildShape_Raven",
   "DisplayName": "Shared_Shout_WildShape_Raven_DisplayName",
   "Description": "Shared_Shout_WildShape_Raven_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Raven_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(13)"
   ],
   "CastSound": "Spell_Cast_Buff_WildShapeRaven_L1to3",
   "SpellAnimation": [
    "fa60e31a-ae11-41ae-8ccc-d5dad8c0ff7a(SPL_WildShape_Raven_01_Prepare),,",
    ",,",
    "40345593-6ec6-47b9-b110-609588ff03fa(SPL_WildShape_Raven_01_Cast),,",
    "721abca5-2d52-4317-82a3-2a2e970a7a16(SPL_ShapeShift_Peace_01_Recover),,",
    "801bc9f0-230d-4c99-8825-6163e58dcf63(SPL_WildShape_Raven_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "UnavailableInDialogs"
   ],
   "PrepareEffect": "a99411a3-3936-411b-8494-96c680341cf1",
   "CastEffect": "7344bba3-248f-47ea-ad7d-1ce747237c2f"
  },
  "Shout_WildShape_Spider": {
   "Name": "Shout_WildShape_Spider",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape",
   "SpellContainerID": "Shout_WildShape",
   "SpellProperties": [
    "ApplyStatus(WILDSHAPE_SPIDER_GIANT_PLAYER,100,-1)"
   ],
   "Icon": "Skill_Druid_WildShape_GiantSpider",
   "DisplayName": "Shared_Shout_WildShape_Spider_DisplayName",
   "Description": "Shared_Shout_WildShape_Spider_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Spider_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(20)"
   ],
   "CastSound": "Spell_Cast_Buff_WildShapeSpider_L1to3",
   "SpellAnimation": [
    "912b2675-ff93-4f31-bd8e-e0798154b4e2(SPL_WildShape_Spider_01_Prepare),,",
    ",,",
    "a8b6de8e-526b-455f-9ffa-ce674d477c58(SPL_WildShape_Spider_01_Cast),,",
    "14294166-95db-46c1-b22a-2b780c2c2790(SPL_ShapeShift_Combat_01_Recover),,",
    "ff40f1fd-5043-4449-911d-4c2d20cb89e8(SPL_WildShape_Spider_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "UnavailableInDialogs"
   ],
   "PrepareEffect": "8c1bda4b-2da7-44ac-b1a1-0d7a62d376b5",
   "CastEffect": "64c15389-ac44-4549-ad3e-71783d482d0d"
  },
  "Shout_WildShape_Wolf_Dire": {
   "Name": "Shout_WildShape_Wolf_Dire",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape",
   "SpellContainerID": "Shout_WildShape",
   "SpellProperties": [
    "ApplyStatus(WILDSHAPE_WOLF_DIRE_PLAYER,100,-1)"
   ],
   "Icon": "Skill_Druid_WildShape_DireWolf",
   "DisplayName": "Shared_Shout_WildShape_Wolf_Dire_DisplayName",
   "Description": "Shared_Shout_WildShape_Wolf_Dire_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Wolf_Dire_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(18)"
   ],
   "CastSound": "Spell_Cast_Buff_WildShapeWolf_L1to3",
   "SpellAnimation": [
    "62b4dc84-8233-4226-ae60-92eceeb9c673(SPL_WildShape_Wolf_01_Prepare),,",
    ",,",
    "6fa555b6-9096-47b6-8ce1-d177c54fcba0(SPL_WildShape_Wolf_01_Cast),,",
    "14294166-95db-46c1-b22a-2b780c2c2790(SPL_ShapeShift_Combat_01_Recover),,",
    "125b10d6-ffeb-4060-9076-8ac12a0b1921(SPL_WildShape_Wolf_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "UnavailableInDialogs"
   ],
   "PrepareEffect": "8bec9cde-00ca-4cc0-b9d8-4672d1ff3143",
   "CastEffect": "f554a36a-9a5a-4a48-a052-782113331ce6"
  },
  "Shout_WildShape_Combat": {
   "Name": "Shout_WildShape_Combat",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape",
   "ContainerSpells": [
    "Shout_WildShape_Combat_Badger",
    "Shout_WildShape_Combat_Spider",
    "Shout_WildShape_Combat_Wolf_Dire",
    "Shout_WildShape_Combat_Cat"
   ],
   "TargetConditions": "Self()",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ],
   "SpellAnimation": [
    "d7745165-66e4-41c4-9e42-d09d95a29491(SPL_ShapeShift_01_Prepare),,",
    ",,",
    "fd5e6365-f314-42e8-a39b-a041dc56b0e7(SPL_ShapeShift_01_Cast),,",
    "14294166-95db-46c1-b22a-2b780c2c2790(SPL_ShapeShift_Combat_01_Recover),,",
    "ce773016-6fb4-44fe-84db-e037aaa22041(SPL_ShapeShift_01_Loop),,",
    ",,"
   ]
  },
  "Shout_WildShape_Combat_Badger": {
   "Name": "Shout_WildShape_Combat_Badger",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Badger",
   "SpellContainerID": "Shout_WildShape_Combat",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Combat_Bear_Polar": {
   "Name": "Shout_WildShape_Combat_Bear_Polar",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_Polar",
   "SpellContainerID": "Shout_WildShape_Combat",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Combat_Cat": {
   "Name": "Shout_WildShape_Combat_Cat",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Cat",
   "SpellContainerID": "Shout_WildShape_Combat",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Combat_DeepRothe": {
   "Name": "Shout_WildShape_Combat_DeepRothe",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_DeepRothe",
   "SpellContainerID": "Shout_WildShape_Combat",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Combat_Raven": {
   "Name": "Shout_WildShape_Combat_Raven",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Raven",
   "SpellContainerID": "Shout_WildShape_Combat",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Combat_Spider": {
   "Name": "Shout_WildShape_Combat_Spider",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Spider",
   "SpellContainerID": "Shout_WildShape_Combat",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Combat_Wolf_Dire": {
   "Name": "Shout_WildShape_Combat_Wolf_Dire",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Wolf_Dire",
   "SpellContainerID": "Shout_WildShape_Combat",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Combat_Heal": {
   "Name": "Shout_WildShape_Combat_Heal",
   "SpellType": "Shout",
   "Level": 1,
   "ContainerSpells": [
    "Shout_WildShape_Combat_Heal_1"
   ],
   "TargetConditions": "Self()",
   "Icon": "Skill_Druid_WildShape_Heal",
   "DisplayName": "Shared_Shout_WildShape_Combat_Heal_DisplayName",
   "Description": "Shared_Shout_WildShape_Combat_Heal_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Combat_Heal_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(1d8)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Healing_FalseLife_L1to3",
   "TargetSound": "Spell_Impact_Heal_WildShapeHeal_L1to3",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellFlags": [
    "IsLinkedSpellContainer",
    "WildShape"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "RechargeValues": "5-6",
   "PrepareEffect": "07664d70-a01c-4979-a58f-6b960e238cd0",
   "CastEffect": "c17c3316-ab71-4f2e-adf4-2908510512ae"
  },
  "Shout_WildShape_Combat_Heal_1": {
   "Name": "Shout_WildShape_Combat_Heal_1",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Combat_Heal",
   "SpellContainerID": "Shout_WildShape_Combat_Heal",
   "SpellProperties": [
    "RegainHitPoints(1d8)"
   ],
   "DisplayName": "Shared_Shout_WildShape_Combat_Heal_1_DisplayName",
   "Description": "Shared_Shout_WildShape_Combat_Heal_1_Description",
   "DescriptionParams": [
    "RegainHitPoints(1d8)"
   ],
   "TooltipDamageList": [
    "RegainHitPoints(1d8)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:1"
   ]
  },
  "Shout_WildShape_Combat_Heal_2": {
   "Name": "Shout_WildShape_Combat_Heal_2",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Combat_Heal_1",
   "SpellContainerID": "Shout_WildShape_Combat_Heal",
   "SpellProperties": [
    "RegainHitPoints(2d8)"
   ],
   "Icon": "Skill_Druid_WildShape_Heal_2",
   "DisplayName": "Shared_Shout_WildShape_Combat_Heal_2_DisplayName",
   "Description": "Shared_Shout_WildShape_Combat_Heal_2_Description",
   "DescriptionParams": [
    "RegainHitPoints(2d8)"
   ],
   "TooltipDamageList": [
    "RegainHitPoints(2d8)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Shout_WildShape_Combat_Heal_1",
   "PowerLevel": 2
  },
  "Shout_AOE": {
   "Name": "Shout_AOE",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge"
  },
  "Shout_Aid": {
   "Name": "Shout_Aid",
   "SpellType": "Shout",
   "Level": 2,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(AID,100,-1)"
   ],
   "AreaRadius": 9,
   "TargetConditions": "Ally()",
   "Icon": "Spell_Abjuration_Aid",
   "DisplayName": "Shared_Shout_Aid_DisplayName",
   "Description": "Shared_Shout_Aid_Description",
   "DescriptionParams": [
    "RegainHitPoints(5)"
   ],
   "TooltipDamageList": [
    "RegainHitPoints(5)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(AID,100,-1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Healing_Aid_L1to3",
   "VocalComponentSound": "Vocal_Component_BoostMaxHP",
   "TargetSound": "Spell_Impact_Healing_Aid_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "96a51ac8-2e7e-4718-bb62-dcfd18964a02",
   "CastEffect": "b50decc3-5f93-4467-8d3a-aa8b01fc915e",
   "TargetEffect": "a908e49b-b59f-4a20-b487-e25ae198d926"
  },
  "Shout_Aid_LifeCleric": {
   "Name": "Shout_Aid_LifeCleric",
   "SpellType": "Shout",
   "Parent": "Shout_Aid"
  },
  "Shout_ArmsOfHadar": {
   "Name": "Shout_ArmsOfHadar",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Conjuration",
   "AreaRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Strength, SourceSpellDC())",
   "SpellSuccess": [
    "DealDamage(2d6, Necrotic)",
    " ApplyStatus(ARMS_OF_HADAR,100,1)"
   ],
   "TargetConditions": "Character() and not Self()",
   "Icon": "Spell_Conjuration_ArmsOfHadar",
   "DisplayName": "Shared_Shout_ArmsOfHadar_DisplayName",
   "Description": "Shared_Shout_ArmsOfHadar_Description",
   "DescriptionParams": [
    "DealDamage(2d6,Necrotic)"
   ],
   "ExtraDescription": "Shared_Shout_ArmsOfHadar_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d6, Necrotic)"
   ],
   "TooltipAttackSave": [
    "Strength"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(ARMS_OF_HADAR,100,1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Necrotic_ArmsOfHadar_L1to3",
   "TargetSound": "Spell_Impact_Damage_Necrotic_ArmsOfHadar_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "efbf3ee5-7340-4b29-8ab5-113b004a8e7b(SPL_Somatic_Self_Touch_01_Cast),,",
    "95c387b6-3756-4bb5-accf-75a117eefb5f(SPL_Somatic_Self_Touch_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "80a4c9a2-af28-4ba2-bcab-082c9d2ee0e4",
   "CastEffect": "104d98d3-1402-4fce-bab8-14df357d660e",
   "TargetEffect": "63def50f-b1fa-4394-81f6-539880d4e8a9"
  },
  "Shout_ArmsOfHadar_2": {
   "Name": "Shout_ArmsOfHadar_2",
   "SpellType": "Shout",
   "Parent": "Shout_ArmsOfHadar",
   "SpellSuccess": [
    "DealDamage(3d6, Necrotic)",
    " ApplyStatus(ARMS_OF_HADAR,100,1)"
   ],
   "Icon": "Spell_Conjuration_ArmsOfHadar_2",
   "DescriptionParams": [
    "DealDamage(3d6,Necrotic)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d6,Necrotic)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Shout_ArmsOfHadar",
   "PowerLevel": 2
  },
  "Shout_CharmAnimalsAndPlants": {
   "Name": "Shout_CharmAnimalsAndPlants",
   "SpellType": "Shout",
   "AreaRadius": 9,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC(),AdvantageOnCharmed())",
   "SpellSuccess": [
    "ApplyStatus(CHARM_ANIMALS_AND_PLANTS, 100, 10)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_CharmAnimalsAndPlants_DisplayName",
   "Description": "Shared_Shout_CharmAnimalsAndPlants_Description",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(CHARM_ANIMALS_AND_PLANTS, 100, 10)"
   ],
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1",
    "ChannelDivinity:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "1fd48304-2ba1-4dcb-8efa-4550517305ed(SPL_Arcane_Control_01_Cast),,",
    "2afb250c-e441-4573-a75e-e1fdad1c6064(SPL_Arcane_Control_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellStyleGroup": "Class"
  },
  "Shout_FeatherFall": {
   "Name": "Shout_FeatherFall",
   "SpellType": "Shout",
   "Level": 1,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "ApplyStatus(FEATHER_FALL,100,10)"
   ],
   "AreaRadius": 9,
   "TargetConditions": "Ally()",
   "Icon": "Spell_Transmutation_FeatherFall",
   "DisplayName": "Shared_Shout_FeatherFall_DisplayName",
   "Description": "Shared_Shout_FeatherFall_Description",
   "TooltipStatusApply": [
    "ApplyStatus(FEATHER_FALL,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_FeatherFall_L1to3",
   "VocalComponentSound": "Vocal_Component_GrantFeatherFall",
   "TargetSound": "Spell_Impact_Utility_FeatherFall_L1to3",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "9d86c202-31a5-4ba3-ae60-ec4fbb425665(SPL_Somatic_Aoe_Widen_01_Cast),,",
    "a4112e22-e36f-44ff-828f-81252360da53(SPL_Somatic_Aoe_Widen_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "RangeIgnoreVerticalThreshold"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "91bb5a96-ffb7-4b6f-9b77-21eb82205630",
   "CastEffect": "1a966496-91e6-40b5-b76b-cb863c388ed2",
   "TargetEffect": "c93e451d-fff8-4e92-aeff-d0b03faaa848"
  },
  "Shout_FeatherFall_2": {
   "Name": "Shout_FeatherFall_2",
   "SpellType": "Shout",
   "Parent": "Shout_FeatherFall",
   "Icon": "Spell_Transmutation_FeatherFall_2",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Shout_FeatherFall",
   "PowerLevel": 2
  },
  "Shout_PassWithoutTrace": {
   "Name": "Shout_PassWithoutTrace",
   "SpellType": "Shout",
   "Level": 2,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(PASS_WITHOUT_TRACE_AURA, 100, -1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Spell_Abjuration_PassWithoutTrace",
   "DisplayName": "Shared_Shout_PassWithoutTrace_DisplayName",
   "Description": "Shared_Shout_PassWithoutTrace_Description",
   "TooltipStatusApply": [
    "ApplyStatus(PASS_WITHOUT_TRACE_AURA, 100, -1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_PassWithoutTrace_L1to3",
   "VocalComponentSound": "Vocal_Component_Invisibility",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "10caea0e-c949-4d91-8ab7-3b50019dd054(SPL_Somatic_Aoe_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "Invisible"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "PrepareEffect": "303820aa-13a4-4763-ae22-253bf0dd6585",
   "CastEffect": "6fa6d561-5cf2-429f-b2fa-2e4f6a8d5a3d"
  },
  "Shout_PassWithoutTrace_TrickeryCleric": {
   "Name": "Shout_PassWithoutTrace_TrickeryCleric",
   "SpellType": "Shout",
   "Parent": "Shout_PassWithoutTrace",
   "ExtraDescription": "Shared_Shout_PassWithoutTrace_TrickeryCleric_ExtraDescription"
  },
  "Shout_PrayerOfHealing": {
   "Name": "Shout_PrayerOfHealing",
   "SpellType": "Shout",
   "Level": 2,
   "SpellSchool": "Evocation",
   "AreaRadius": 9,
   "Icon": "Spell_Evocation_PrayerOfHealing",
   "DisplayName": "Shared_Shout_PrayerOfHealing_DisplayName",
   "Description": "Shared_Shout_PrayerOfHealing_Description",
   "ExtraDescription": "Shared_Shout_PrayerOfHealing_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Healing_PrayerOfHealing_L1to3",
   "VocalComponentSound": "Vocal_Component_Prayer",
   "TargetSound": "Spell_Impact_Healing_PrayerOfHealing_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "96a51ac8-2e7e-4718-bb62-dcfd18964a02",
   "CastEffect": "28455865-752d-4793-8b39-765974ddf499",
   "TargetEffect": "3c7b783e-d2ee-4125-9f94-0d48d44fe3e8"
  },
  "Shout_PreserveLife": {
   "Name": "Shout_PreserveLife",
   "SpellType": "Shout",
   "AreaRadius": 9,
   "Icon": "Action_Cleric_PreserveLife",
   "DisplayName": "Shared_Shout_PreserveLife_DisplayName",
   "Description": "Shared_Shout_PreserveLife_Description",
   "DescriptionParams": [
    "RegainHitPoints(Level)"
   ],
   "ExtraDescription": "Shared_Shout_PreserveLife_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_PreserveLife",
   "TargetSound": "Action_Impact_PreserveLife",
   "UseCosts": [
    "ActionPoint:1",
    "ChannelDivinity:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellStyleGroup": "Class",
   "HitAnimationType": "MagicalNonDamage",
   "PrepareEffect": "1406899b-9de3-426b-9251-9e7d3bfacedf",
   "CastEffect": "df9ffd5a-deb8-4a27-8e37-e7f688579fd4",
   "TargetEffect": "89952943-fe61-452d-81af-d0a936544231"
  },
  "Shout_RadianceOfTheDawn": {
   "Name": "Shout_RadianceOfTheDawn",
   "SpellType": "Shout",
   "AreaRadius": 9,
   "SpellRoll": "not SavingThrow(Ability.Constitution, SourceSpellDC())",
   "TargetConditions": "Enemy() and Character()",
   "Icon": "Action_Cleric_RadianceOfTheDawn",
   "DisplayName": "Shared_Shout_RadianceOfTheDawn_DisplayName",
   "Description": "Shared_Shout_RadianceOfTheDawn_Description",
   "ExtraDescription": "Shared_Shout_RadianceOfTheDawn_ExtraDescription",
   "TooltipAttackSave": [
    "Constitution"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_RadianceOfTheDawn",
   "TargetSound": "Action_Impact_RadianceOfTheDawn",
   "UseCosts": [
    "ActionPoint:1",
    "ChannelDivinity:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellStyleGroup": "Class",
   "HitAnimationType": "MagicalNonDamage",
   "PrepareEffect": "33d4ba61-8c76-4138-ac49-c33d279fb9c9",
   "CastEffect": "11b177e1-ccd8-495d-ad9a-5547a138f540",
   "TargetEffect": "78ab57f2-edce-4697-8be4-7bf7c2e76f92"
  },
  "Shout_Repulsor": {
   "Name": "Shout_Repulsor",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerShortRest",
   "AreaRadius": 6,
   "SpellRoll": "not SavingThrow(Ability.Strength, SourceSpellDC())",
   "SpellSuccess": [
    "Force(6)",
    "DealDamage(2d6,Force)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "TadpoleSuperPower_Repulsor",
   "DisplayName": "Shared_Shout_Repulsor_DisplayName",
   "Description": "Shared_Shout_Repulsor_Description",
   "DescriptionParams": [
    "DealDamage(2d6,Force)",
    " Distance(6)"
   ],
   "ExtraDescription": "Shared_Shout_Repulsor_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d6,Force)"
   ],
   "TooltipAttackSave": [
    "Strength"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_Repulsor_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "f94542d9-a79c-478a-92de-573cead9260e(TAD_PsionicPull_01_Prepare),,",
    "78650553-ef5a-4284-b80c-07be9745d037(TAD_Shout_Repulsor_01_Antic),,",
    "85e04bc9-a5e2-4d62-ac2f-8eaa45f7e1d2(TAD_Shout_Repulsor_01_Cast),,",
    "8eb48775-6977-43de-bd85-b0dc89c7913b(TAD_Shout_Repulsor_01_Recover),,",
    "bd339475-d2b5-46e8-8d0c-9f2ad6a91328(TAD_PsionicPull_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand",
    "IsHarmful"
   ],
   "PrepareEffect": "e949b36e-d56a-4918-8d8c-4c26a333b493",
   "CastEffect": "9fdf9456-fcbb-4558-b2a2-df13a06c69f2",
   "TargetEffect": "12d3e0a2-cc79-4707-aead-ed5f9da4417e"
  },
  "Shout_TurnUndead": {
   "Name": "Shout_TurnUndead",
   "SpellType": "Shout",
   "AreaRadius": 9,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(TURNED, 100, 3)"
   ],
   "Icon": "Spell_Cleric_TurnUndead",
   "DisplayName": "Shared_Shout_TurnUndead_DisplayName",
   "Description": "Shared_Shout_TurnUndead_Description",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(TURNED, 100,  3)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_TurnUndead",
   "TargetSound": "Action_Impact_TurnUndead",
   "UseCosts": [
    "ActionPoint:1",
    "ChannelDivinity:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "9d86c202-31a5-4ba3-ae60-ec4fbb425665(SPL_Somatic_Aoe_Widen_01_Cast),,",
    "a4112e22-e36f-44ff-828f-81252360da53(SPL_Somatic_Aoe_Widen_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsHarmful"
   ],
   "PrepareEffect": "a9a50d7f-8a81-4c26-82a7-5020bbd43148",
   "CastEffect": "af38c779-6ed5-4e15-a18e-5b219ceabdd2",
   "TargetEffect": "824d2a93-b33b-4f4f-8ad0-b58466757198"
  },
  "Shout_WEAPON_ACTION_SHOUT": {
   "Name": "Shout_WEAPON_ACTION_SHOUT",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge"
  },
  "Shout_Steady": {
   "Name": "Shout_Steady",
   "SpellType": "Shout",
   "Cooldown": "OncePerShortRest",
   "AIFlags": [
    "CanNotUse"
   ],
   "SpellProperties": [
    "ApplyStatus(STEADY,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Action_Steady",
   "DisplayName": "Shared_Shout_Steady_DisplayName",
   "Description": "Shared_Shout_Steady_Description",
   "DescriptionParams": [
    "Distance(7.5)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(STEADY,100,1)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Steady",
   "TargetSound": "Action_Impact_Steady",
   "UseCosts": [
    "Movement:7.5"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "b660a683-61c5-44a0-87c6-84cac5f9201d"
  },
  "Shout_SteadyRanged": {
   "Name": "Shout_SteadyRanged",
   "SpellType": "Shout",
   "Parent": "Shout_Steady",
   "AIFlags": [
    "CanNotUse"
   ],
   "Icon": "Action_Steady_Ranged",
   "DisplayName": "Shared_Shout_SteadyRanged_DisplayName",
   "Description": "Shared_Shout_SteadyRanged_Description",
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "b660a683-61c5-44a0-87c6-84cac5f9201d"
  },
  "Shout_FullSwing": {
   "Name": "Shout_FullSwing",
   "SpellType": "Shout",
   "Cooldown": "OncePerShortRest",
   "AIFlags": [
    "CanNotUse"
   ],
   "SpellProperties": [
    "ApplyStatus(FULL_SWING,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Action_FullSwing",
   "DisplayName": "Shared_Shout_FullSwing_DisplayName",
   "Description": "Shared_Shout_FullSwing_Description",
   "DescriptionParams": [
    "Distance(7.5)",
    "DealDamage(StrengthModifier, MainMeleeWeaponDamageType)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(FULL_SWING,100,1)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Surge",
   "TargetSound": "Action_Impact_Surge",
   "UseCosts": [
    "Movement:7.5"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "c96318ca-93b5-470b-be9e-6a51c7a8ccf9"
  },
  "Shout__WildMagic": {
   "Name": "Shout__WildMagic",
   "SpellType": "Shout",
   "TargetConditions": "Character()",
   "DisplayName": "Shared_Shout__WildMagic_DisplayName",
   "Description": "Shared_Shout__WildMagic_Description",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    "921aedc8-10a0-47b3-b5a3-85f2b8a105af(SPL_WildMagic_TurnMagic_01_Recover),,",
    "924d3103-e770-47ad-b472-f0f0c79baea3(SPL_WildMagic_TurnMagic_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ],
   "CastEffect": "469505dd-fe63-4940-9b14-7efe9fc320d1",
   "TargetEffect": "469505dd-fe63-4940-9b14-7efe9fc320d1"
  },
  "Shout_WildMagic_TurnMagic": {
   "Name": "Shout_WildMagic_TurnMagic",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "ApplyStatus(WILD_MAGIC_TURN_MAGIC,100,5)"
   ],
   "TargetConditions": "Self()",
   "Icon": "statIcons_WildMagic_TurnMagic",
   "DisplayName": "Shared_Shout_WildMagic_TurnMagic_DisplayName",
   "Description": "Shared_Shout_WildMagic_TurnMagic_Description",
   "TooltipStatusApply": [
    "ApplyStatus(WILD_MAGIC_TURN_MAGIC,100,5)"
   ],
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_TurnMagic",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    "921aedc8-10a0-47b3-b5a3-85f2b8a105af(SPL_WildMagic_TurnMagic_01_Recover),,",
    "924d3103-e770-47ad-b472-f0f0c79baea3(SPL_WildMagic_TurnMagic_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ]
  },
  "Shout_WildMagic_Burning": {
   "Name": "Shout_WildMagic_Burning",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "ApplyStatus(WILD_MAGIC_BURNING,100,5)"
   ],
   "AreaRadius": 6,
   "TargetConditions": "Character() or Item()",
   "Icon": "statIcons_WildMagic_Burning",
   "DisplayName": "Shared_Shout_WildMagic_Burning_DisplayName",
   "Description": "Shared_Shout_WildMagic_Burning_Description",
   "DescriptionParams": [
    "Distance(6)",
    "DealDamage(1d6,Fire)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(WILD_MAGIC_BURNING,100,5)"
   ],
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_Burning",
   "SpellAnimation": [
    ",,",
    ",,",
    "980616b5-acd3-4ab8-87ff-11984cdaad99(SPL_WildMagic_Burning_01_Cast),,",
    "7b6ce274-14d1-4f75-b0af-e54aa3e9d6e1(SPL_WildMagic_Burning_01_Recover),,",
    ",,",
    ",,"
   ],
   "CastEffect": "fb4a7d63-4d9c-4067-a3d7-119aff37c605",
   "TargetEffect": "c73e1f4d-3c38-4692-8b23-16dd2e12b3fb"
  },
  "Shout_WildMagic_Teleport": {
   "Name": "Shout_WildMagic_Teleport",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "ApplyStatus(WILD_MAGIC_TELEPORT,100,2)"
   ],
   "TargetConditions": "Self()",
   "Icon": "statIcons_WildMagic_Teleport",
   "DisplayName": "Shared_Shout_WildMagic_Teleport_DisplayName",
   "Description": "Shared_Shout_WildMagic_Teleport_Description",
   "DescriptionParams": [
    "Distance(9)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(WILD_MAGIC_TELEPORT,100,2)"
   ],
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_Teleport",
   "SpellAnimation": [
    ",,",
    ",,",
    "6889097a-f94b-4a09-82f5-b2a2ed1eb796(SPL_WildMagic_Teleport_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ]
  },
  "Shout_WildMagic_Enchant": {
   "Name": "Shout_WildMagic_Enchant",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "ApplyStatus(WILD_MAGIC_ENCHANT_CHARACTER,100,-1)",
    "ApplyEquipmentStatus(MainHand,WILD_MAGIC_ENCHANT,100,-1)"
   ],
   "AreaRadius": 6,
   "TargetConditions": "Character() and not Unarmed()",
   "Icon": "statIcons_WildMagic_Enchant",
   "DisplayName": "Shared_Shout_WildMagic_Enchant_DisplayName",
   "Description": "Shared_Shout_WildMagic_Enchant_Description",
   "DescriptionParams": [
    "Distance(6)",
    "DealDamage(1d4,Force)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(WILD_MAGIC_ENCHANT_CHARACTER,100,-1)"
   ],
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_Enchant",
   "SpellAnimation": [
    ",,",
    ",,",
    "a7df78ec-0b5d-421f-a5d6-211d6b07f2d8(SPL_WildMagic_Enchant_01_Cast),,",
    "449abb18-4d65-406c-be52-3cb1c99d80ed(SPL_WildMagic_Enchant_01_Recover),,",
    ",,",
    ",,"
   ]
  },
  "Shout_WildMagic_SorceryPoints": {
   "Name": "Shout_WildMagic_SorceryPoints",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "ApplyStatus(WILD_MAGIC_SORCERY_POINTS,100,2)"
   ],
   "TargetConditions": "Self()",
   "Icon": "statIcons_WildMagic_SorceryPoints",
   "DisplayName": "Shared_Shout_WildMagic_SorceryPoints_DisplayName",
   "Description": "Shared_Shout_WildMagic_SorceryPoints_Description",
   "TooltipStatusApply": [
    "ApplyStatus(WILD_MAGIC_SORCERY_POINTS,100,2)"
   ],
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_SorceryPoint",
   "SpellAnimation": [
    ",,",
    ",,",
    "512f7a89-a41c-43f9-beba-03ea5e9f33bd(SPL_WildMagic_SorceryPoints_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ]
  },
  "Shout_WildMagic_Fog": {
   "Name": "Shout_WildMagic_Fog",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "GROUND:CreateSurface(6,3,FogCloud)"
   ],
   "TargetConditions": "Self()",
   "Icon": "statIcons_WildMagic_gasCloud",
   "DisplayName": "Shared_Shout_WildMagic_Fog_DisplayName",
   "Description": "Shared_Shout_WildMagic_Fog_Description",
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_Fog",
   "SpellAnimation": [
    ",,",
    ",,",
    "c968068e-2b42-4751-9869-0e58d90c08e0(SPL_WildMagic_Fog_01_Cast),,",
    "17cdee3c-6f64-43a5-9518-8d9267ec09a3(SPL_WildMagic_Fog_01_Recover),,",
    ",,",
    ",,"
   ],
   "CastEffect": "7e674dab-7226-423f-b4bf-4e006bc99cbd"
  },
  "Shout_WildMagic_Blur": {
   "Name": "Shout_WildMagic_Blur",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "ApplyStatus(BLUR,100,3)"
   ],
   "AreaRadius": 9,
   "TargetConditions": "Character()",
   "Icon": "statIcons_WildMagic_Blur",
   "DisplayName": "Shared_Shout_WildMagic_Blur_DisplayName",
   "Description": "Shared_Shout_WildMagic_Blur_Description",
   "DescriptionParams": [
    "Distance(9)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(BLUR,100,3)"
   ],
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_Blurred",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "bb91ddf0-2cf1-489b-91fb-e818cf70c50f(SPL_WildMagic_Blur_01_Cast),,",
    "bd2b64b3-2b08-4644-a06c-d9c91eac0b66(SPL_WildMagic_Blur_01_Recover),,",
    ",,",
    ",,"
   ],
   "CastEffect": "6a990c71-6d6f-427f-83b9-e2ae980b8a5c"
  },
  "Shout_WildMagic_Heal": {
   "Name": "Shout_WildMagic_Heal",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "ApplyStatus(WILD_MAGIC_HEAL,100,5)"
   ],
   "TargetConditions": "Self()",
   "Icon": "statIcons_WildMagic_Heal",
   "DisplayName": "Shared_Shout_WildMagic_Heal_DisplayName",
   "Description": "Shared_Shout_WildMagic_Heal_Description",
   "DescriptionParams": [
    "Distance(3)",
    "RegainHitPoints(1d4)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(WILD_MAGIC_HEAL,100,5)"
   ],
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_Heal",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "6d8a2fc2-a069-4a27-9907-653a1dce0ae0(SPL_WildMagic_Heal_01_Cast),,",
    "f204c26e-21ba-4693-85fc-98759493c988(SPL_WildMagic_Heal_01_Recover),,",
    ",,",
    ",,"
   ]
  },
  "Shout_WildMagic_Mephit": {
   "Name": "Shout_WildMagic_Mephit",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "GROUND:IF(not CharacterLevelGreaterThan(3)):Spawn(3844ba99-4e84-4ae0-8cf6-33b981b8bbfa)",
    "GROUND:IF(CharacterLevelGreaterThan(3)):Spawn(9cf75e67-e219-4787-a410-7b2df9fbe255)"
   ],
   "TargetConditions": "Self()",
   "Icon": "statIcons_WildMagic_Memphit",
   "DisplayName": "Shared_Shout_WildMagic_Mephit_DisplayName",
   "Description": "Shared_Shout_WildMagic_Mephit_Description",
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_Mephit",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "eae14188-2976-40e7-899a-4646c68074aa(SPL_WildMagic_Mephit_01_Cast),,",
    "17ed59ba-ee4d-43dd-8345-bf8edf0fcc87(SPL_WildMagic_Mephit_01_Recover),,",
    ",,",
    ",,"
   ],
   "CastEffect": "1fece9aa-e749-4235-8770-427d2ddf9d55",
   "TargetEffect": "1fece9aa-e749-4235-8770-427d2ddf9d55"
  },
  "Shout_WildMagic_Swap": {
   "Name": "Shout_WildMagic_Swap",
   "SpellType": "Shout",
   "Parent": "Shout__WildMagic",
   "SpellProperties": [
    "ApplyStatus(WILD_MAGIC_SWAP,100,5)"
   ],
   "TargetConditions": "Self()",
   "Icon": "statIcons_WildMagic_Swap",
   "DisplayName": "Shared_Shout_WildMagic_Swap_DisplayName",
   "Description": "Shared_Shout_WildMagic_Swap_Description",
   "TooltipStatusApply": [
    "ApplyStatus(WILD_MAGIC_SWAP,100,5)"
   ],
   "CastSound": "Spell_Cast_Sorcerer_Wildmagic_Swap",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "350387bf-4405-4cd2-b11f-e1356d5f7fdc(SPL_WildMagic_Swap_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ],
   "CastEffect": "1fece9aa-e749-4235-8770-427d2ddf9d55",
   "TargetEffect": "1fece9aa-e749-4235-8770-427d2ddf9d55"
  },
  "Shout_MONSTERS": {
   "Name": "Shout_MONSTERS",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge"
  },
  "Shout_Blur_Githyanki": {
   "Name": "Shout_Blur_Githyanki",
   "SpellType": "Shout",
   "Parent": "Shout_Blur",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Shout_CallForHelp": {
   "Name": "Shout_CallForHelp",
   "SpellType": "Shout",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,3)",
    "AI_IGNORE:ApplyStatus(CALLING_FOR_HELP,100,2)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_CallForHelp_DisplayName",
   "Description": "Shared_Shout_CallForHelp_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_CallForHelp",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent"
   ]
  },
  "Shout_CallForHelp_HookHorror": {
   "Name": "Shout_CallForHelp_HookHorror",
   "SpellType": "Shout",
   "Parent": "Shout_CallForHelp",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,3)",
    "AI_IGNORE:ApplyStatus(CALLING_FOR_HELP_HOOKHORROR,100,2)"
   ],
   "DisplayName": "Shared_Shout_CallForHelp_HookHorror_DisplayName",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasSomaticComponent",
    "HasVerbalComponent"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "3d8318ce-0895-47a9-8401-23fe06f8fc91"
  },
  "Shout_CreateLava": {
   "Name": "Shout_CreateLava",
   "SpellType": "Shout",
   "Parent": "Shout_Disengage",
   "SpellProperties": [
    "AI_IGNORE:GROUND:CreateSurface(1.3,10,Lava)",
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_BUFF_SMALL,100,1)",
    "ApplyStatus(SELF,SPAWN_LAVA,100,3)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_CreateLava_DisplayName",
   "Description": "Shared_Shout_CreateLava_Description",
   "CastSound": "CrSpell_Cast_CreateLava",
   "TargetSound": "CrSpell_Impact_CreateLava",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "CastEffect": "2da042c9-91b3-411c-a68d-5dce0e1f37ec",
   "TargetEffect": "d81c633d-90dd-4861-9a0e-d13a0b1943b4"
  },
  "Shout_Dash_HookHorror": {
   "Name": "Shout_Dash_HookHorror",
   "SpellType": "Shout",
   "Parent": "Shout_Dash",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ]
  },
  "Shout_Disengage_Goblin": {
   "Name": "Shout_Disengage_Goblin",
   "SpellType": "Shout",
   "Parent": "Shout_Disengage_BonusAction",
   "SpellProperties": [
    "TARGET:ApplyStatus(DISENGAGE,100,1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_Disengage_Goblin_DisplayName",
   "Description": "Shared_Shout_Disengage_Goblin_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Disengage",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    ",,",
    "853f1923-f6a7-4e92-91d3-892dd3c021d9(CMBT_Skill_Stance_01_Antic),,",
    "972109d9-0470-41b1-aa82-8b01cecfc556(CMBT_Skill_Stance_01_Attack),,",
    "09e0f1fd-4107-414b-ba34-188188167854(CMBT_Skill_Stance_01_Recover),,",
    ",,",
    ",,"
   ],
   "CastEffect": "4849ac12-cebb-4c56-a0a8-75529e246c43"
  },
  "Shout_Distract_Cat_Summon": {
   "Name": "Shout_Distract_Cat_Summon",
   "SpellType": "Shout",
   "Parent": "Shout_Dash",
   "SpellProperties": [
    "ApplyStatus(SELF,CRIME_DISTRACTION,100,5)"
   ],
   "AreaRadius": 18,
   "Icon": "Action_Cat_DrawAttention",
   "DisplayName": "Shared_Shout_Distract_Cat_Summon_DisplayName",
   "Description": "Shared_Shout_Distract_Cat_Summon_Description",
   "CastSound": "CrSpell_Cast_DrawAttention",
   "PrepareEffect": "96377661-f17e-476b-8e01-540de022fb03",
   "CastEffect": "92459b8e-7a60-4459-84e4-0f9400514cb2"
  },
  "Shout_Enlarge_Duergar": {
   "Name": "Shout_Enlarge_Duergar",
   "SpellType": "Shout",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(ENLARGE_DUERGAR, 100, 10)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_Enlarge_Duergar_DisplayName",
   "Description": "Shared_Shout_Enlarge_Duergar_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Enlarge",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    ",,",
    ",,"
   ],
   "PrepareEffect": "e11630b9-598a-4ce0-b2bf-c50e074e7b9d",
   "CastEffect": "419490b6-d15f-474e-87bb-635c012f0682"
  },
  "Shout_Fury_Gnoll": {
   "Name": "Shout_Fury_Gnoll",
   "SpellType": "Shout",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(AI_HELPER_BUFF, 100, 2)",
    " AI_IGNORE:ApplyStatus(GNOLL_BREWING_RAGE, 100, 2)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_Fury_Gnoll_DisplayName",
   "Description": "Shared_Shout_Fury_Gnoll_Description",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasSomaticComponent",
    "IsEnemySpell"
   ],
   "CastEffect": "3b4c35ad-4d0a-4889-8408-46181439be42"
  },
  "Shout_Fury_Gnoll_Boss": {
   "Name": "Shout_Fury_Gnoll_Boss",
   "SpellType": "Shout",
   "Parent": "Shout_Fury_Gnoll",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(AI_HELPER_BUFF, 100, 3)",
    " AI_IGNORE:ApplyStatus(GNOLL_BREWING_RAGE, 100, 3)"
   ]
  },
  "Shout_HelpArrives": {
   "Name": "Shout_HelpArrives",
   "SpellType": "Shout",
   "Parent": "Shout_CallForHelp",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,4)",
    "AI_IGNORE:ApplyStatus(CALLING_FOR_HELP_SPAWNALLIES,100,2)"
   ],
   "DisplayName": "Shared_Shout_HelpArrives_DisplayName",
   "Description": "Shared_Shout_HelpArrives_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent"
   ]
  },
  "Shout_HelpArrives_HookHorror": {
   "Name": "Shout_HelpArrives_HookHorror",
   "SpellType": "Shout",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,4)",
    "AI_IGNORE:ApplyStatus(CALLING_FOR_HELP_SPAWNALLIES,100,2)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_HelpArrives_HookHorror_DisplayName",
   "Description": "Shared_Shout_HelpArrives_HookHorror_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_CallForHelp",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasSomaticComponent",
    "HasVerbalComponent"
   ],
   "CastEffect": "a21050b2-b19a-47c1-9530-9df34ed61e9c"
  },
  "Shout_GoadingRoar_Bear_Summon": {
   "Name": "Shout_GoadingRoar_Bear_Summon",
   "SpellType": "Shout",
   "AreaRadius": 9,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 13)",
   "SpellSuccess": [
    "ApplyStatus(TAUNTED,100,2)"
   ],
   "TargetConditions": "Enemy() and not Dead()",
   "Icon": "Action_Bear_GuardingRoar",
   "DisplayName": "Shared_Shout_GoadingRoar_Bear_Summon_DisplayName",
   "Description": "Shared_Shout_GoadingRoar_Bear_Summon_Description",
   "ExtraDescription": "Shared_Shout_GoadingRoar_Bear_Summon_ExtraDescription",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(TAUNTED,100,2)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_GoadingRoar",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellAnimationIntentType": "Peaceful",
   "PrepareEffect": "87a4a1c7-8a14-478e-ac4c-b92711494c9b",
   "CastEffect": "7da505c3-dffe-4d0c-8c15-d862d3bc4f76"
  },
  "Shout_GoblinWarcry": {
   "Name": "Shout_GoblinWarcry",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "SpellProperties": [
    "ApplyStatus(GOBLINWARCRY,100,2)"
   ],
   "AreaRadius": 15,
   "TargetConditions": "Character() and Ally()",
   "Icon": "statIcons_RecklessWarcry",
   "DisplayName": "Shared_Shout_GoblinWarcry_DisplayName",
   "Description": "Shared_Shout_GoblinWarcry_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_GoblinRecklessWarcry",
   "TargetSound": "CrSpell_Impact_GoblinRecklessWarcry",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    ",,",
    ",,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": 6,
   "PrepareEffect": "4694d076-bd9a-4a02-9e12-caacb7feb24f",
   "CastEffect": "a1f13b07-5643-4735-9dad-fd251d7c8794"
  },
  "Shout_Generic_Bugbear": {
   "Name": "Shout_Generic_Bugbear",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge"
  },
  "Shout_Generic_Goblin": {
   "Name": "Shout_Generic_Goblin",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge"
  },
  "Shout_Generic_Gnoll": {
   "Name": "Shout_Generic_Gnoll",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge"
  },
  "Shout_Generic_Minotaur": {
   "Name": "Shout_Generic_Minotaur",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge"
  },
  "Shout_Generic_Ogre": {
   "Name": "Shout_Generic_Ogre",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "DontForceSheathOrUnsheath"
   ]
  },
  "Shout_Invisibility_Imp": {
   "Name": "Shout_Invisibility_Imp",
   "SpellType": "Shout",
   "SpellProperties": [
    "AI_IGNORE:ApplyStatus(INVISIBILITY,100,-1)",
    "AI_ONLY:ApplyStatus(INVISIBILITY,100,2)"
   ],
   "Icon": "Action_Imp_Invisibility",
   "DisplayName": "Shared_Shout_Invisibility_Imp_DisplayName",
   "Description": "Shared_Shout_Invisibility_Imp_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_Invisibility_L1to3",
   "TargetSound": "Spell_Impact_Utility_Invisibility_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "6aae7c32-ce4b-4ad3-ad9b-f5a8c354e3cf(CMBT_Skill_Invisibility_01_Prepare),,",
    "f3a26975-5aab-4fd6-989a-2b2515b57139(CMBT_Skill_Invisibility_01_Antic),,",
    "9942c019-92d2-4107-b6f8-35fd8df22c75(CMBT_Skill_Invisibility_01_Attack),,",
    "1a11f959-abd1-4fb9-a127-73e420f55586(CMBT_Skill_Invisibility_01_Recover),,",
    "307b18c3-f79b-4327-b296-1853334c0475(CMBT_Skill_Invisibility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsConcentration"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "b1c774c1-9ad2-426b-9240-ba83ad2efc70",
   "CastEffect": "fadb15d3-6175-4334-be28-3160a640e799"
  },
  "Shout_Invisibility_Quasit": {
   "Name": "Shout_Invisibility_Quasit",
   "SpellType": "Shout",
   "Parent": "Shout_Invisibility_Imp",
   "Icon": "Action_Quasit_Invisibility",
   "CastSound": "Spell_Cast_Utility_Invisibility_L1to3",
   "TargetSound": "Spell_Impact_Utility_Invisibility_L1to3",
   "SpellAnimation": [
    "6aae7c32-ce4b-4ad3-ad9b-f5a8c354e3cf(CMBT_Skill_Invisibility_01_Prepare),,",
    "f3a26975-5aab-4fd6-989a-2b2515b57139(CMBT_Skill_Invisibility_01_Antic),,",
    "9942c019-92d2-4107-b6f8-35fd8df22c75(CMBT_Skill_Invisibility_01_Attack),,",
    "1a11f959-abd1-4fb9-a127-73e420f55586(CMBT_Skill_Invisibility_01_Recover),,",
    "307b18c3-f79b-4327-b296-1853334c0475(CMBT_Skill_Invisibility_01_Loop),,",
    "280c838c-93a2-4f0c-a035-1bf2259dc993(CMBT_Skill_Invisibility_01_Dash),,"
   ],
   "VerbalIntent": "Utility",
   "PrepareEffect": "664aedee-2f08-4723-9387-b9f589daf03a",
   "CastEffect": "8bdab21c-c5e2-4a80-98c7-e7c9071cebf2"
  },
  "Shout_Invisibility_Duergar": {
   "Name": "Shout_Invisibility_Duergar",
   "SpellType": "Shout",
   "Parent": "Shout_Invisibility_Imp",
   "Cooldown": "OncePerCombat",
   "CastSound": "Spell_Cast_Utility_Invisibility_L1to3",
   "TargetSound": "Spell_Impact_Utility_Invisibility_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ]
  },
  "Shout_Leadership_Hobgoblin": {
   "Name": "Shout_Leadership_Hobgoblin",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_IGNORE:TARGET:ApplyStatus(HOBGOBLIN_LEADERSHIP_AURA,100,5)",
    "AI_ONLY:TARGET:ApplyStatus(AI_STATUS_FAKE,100)"
   ],
   "TargetConditions": "Self()",
   "Icon": "statIcons_AuraOfLeadership",
   "DisplayName": "Shared_Shout_Leadership_Hobgoblin_DisplayName",
   "Description": "Shared_Shout_Leadership_Hobgoblin_Description",
   "DescriptionParams": [
    "DealDamage(1d4,Force)"
   ],
   "CastSound": "CrSpell_Cast_Leadership",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellFlags": [
    "IsSpell",
    "IsEnemySpell"
   ],
   "PrepareEffect": "e3fa01d0-9a2f-4163-872b-001027e6d3bc",
   "CastEffect": "880f6ce1-391c-4544-918d-4ca66d21f854"
  },
  "Shout_LuringSong_Harpy": {
   "Name": "Shout_LuringSong_Harpy",
   "SpellType": "Shout",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_IGNORE:ApplyStatus(SELF,LURING_SONG_AURA,100,-1)",
    "AI_ONLY:ApplyStatus(AI_HELPER_DEBUFF,100,-1)"
   ],
   "AreaRadius": 25,
   "Icon": "Action_Singing",
   "DisplayName": "Shared_Shout_LuringSong_Harpy_DisplayName",
   "Description": "Shared_Shout_LuringSong_Harpy_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_LuringSong",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "e300098e-46f5-456d-b99a-01c95585c689(CMBT_Skill_LuringSong_01_Prepare),,",
    "7b1554c9-4040-4992-86ac-f8050895ce0a(CMBT_Skill_LuringSong_01_Antic),,",
    "654c8b25-9484-440a-8185-029a8fdf5c6b(CMBT_Skill_LuringSong_01_Attack),,",
    "e5138e36-3625-4222-bc8a-2b0841ba23ae(CMBT_Skill_LuringSong_01_Recover),,",
    "b66568ca-1898-44e2-8852-b27677a40c9c(CMBT_Skill_LuringSong_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsEnemySpell",
    "IgnoreVisionBlock",
    "IsConcentration"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": "5-6",
   "CastEffect": "eec31b12-beb7-4473-8be9-0ec441a5b1ff"
  },
  "Shout_PackHowl_Wolf_Dire": {
   "Name": "Shout_PackHowl_Wolf_Dire",
   "SpellType": "Shout",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "ApplyStatus(PACK_HOWL_WOLF_DIRE,100,1)"
   ],
   "AreaRadius": 9,
   "TargetConditions": "Character() and Ally()",
   "Icon": "Action_DireWolfPack_Howl",
   "DisplayName": "Shared_Shout_PackHowl_Wolf_Dire_DisplayName",
   "Description": "Shared_Shout_PackHowl_Wolf_Dire_Description",
   "DescriptionParams": [
    "Distance(3)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_PackHowl",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "HitAnimationType": "MagicalNonDamage",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "27daeb02-1e87-448a-b8f6-6cc8d198acca",
   "CastEffect": "149e5277-6230-48e5-ae7c-7460a7507398"
  },
  "Shout_PrimalHowl_Wolf": {
   "Name": "Shout_PrimalHowl_Wolf",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(PRIMAL_HOWL_WOLF,100,1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_PrimalHowl",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "29b3f9ac-919b-42cf-abc8-264d7a1eba98",
   "CastEffect": "1f6fc8cd-7c4c-466a-9f54-67953adbbe09"
  },
  "Shout_Reckless_Minotaur": {
   "Name": "Shout_Reckless_Minotaur",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "AI_IGNORE:ApplyStatus(SELF,RECKLESS_MINOTAUR,100,3)",
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_BUFF,100,3)"
   ],
   "Icon": "statIcons_Minotaur_Reckless",
   "DisplayName": "Shared_Shout_Reckless_Minotaur_DisplayName",
   "Description": "Shared_Shout_Reckless_Minotaur_Description",
   "CastSound": "CrSpell_Cast_RecklessRoar",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "b57580c5-9966-4ff6-947b-e34f4eef3e57(CMBT_Skill_Reckless_01_Prepare),,",
    "3cb4a956-e420-4c32-b483-0d4feb1d4efd(CMBT_Skill_Reckless_01_Antic),,",
    "357230d1-e552-4f0f-879b-578a5eb422c7(CMBT_Skill_Reckless_01_Attack),,",
    "40e1918e-027e-4c7a-a26c-df26426758fe(CMBT_Skill_Reckless_01_Recover),,",
    "1e3f6161-45b9-4551-96e9-9c2bf961c615(CMBT_Skill_Reckless_01_Loop),,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "RechargeValues": "4-6",
   "CastEffect": "1d671f4e-0a90-4e01-a2c9-e76743e207d9"
  },
  "Shout_Reduce_Duergar": {
   "Name": "Shout_Reduce_Duergar",
   "SpellType": "Shout",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(REDUCE_DUERGAR, 100, 10)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_Reduce_Duergar_DisplayName",
   "Description": "Shared_Shout_Reduce_Duergar_Description",
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ]
  },
  "Shout_Roar_Bear_Polar": {
   "Name": "Shout_Roar_Bear_Polar",
   "SpellType": "Shout",
   "Parent": "Shout_GoadingRoar_Bear_Summon",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "SpellAnimationIntentType": "Peaceful",
   "PrepareEffect": "9a8e4467-8d3c-4cb5-a56f-8bfcc3051367",
   "CastEffect": "d3d61bfa-0877-4ceb-a930-367821b5d996"
  },
  "Shout_Shapechanger": {
   "Name": "Shout_Shapechanger",
   "SpellType": "Shout",
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast),,",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellStyleGroup": "Class"
  },
  "Shout_Shapechanger_Imp": {
   "Name": "Shout_Shapechanger_Imp",
   "SpellType": "Shout",
   "Parent": "Shout_Shapechanger"
  },
  "Shout_Shapechanger_Werewolf": {
   "Name": "Shout_Shapechanger_Werewolf",
   "SpellType": "Shout",
   "Parent": "Shout_Shapechanger"
  },
  "Shout_StaticOverdrive_Automaton": {
   "Name": "Shout_StaticOverdrive_Automaton",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(SELF,STATIC_DISCHARGE_AURA,100,3)",
    "ApplyStatus(SELF,STATIC_DISCHARGE_CONSTRUCT,100,3)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Skill_Shout_StaticOverdrive_Automaton",
   "DisplayName": "Shared_Shout_StaticOverdrive_Automaton_DisplayName",
   "Description": "Shared_Shout_StaticOverdrive_Automaton_Description",
   "DescriptionParams": [
    "DealDamage(3d10,Lightning)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d10,Lightning)"
   ],
   "CastSound": "CrSpell_Cast_StaticOverdrive",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "79f8640c-612a-4b13-aac7-bdc1b90458c2(CMBT_Skill_Power_01_Prepare),,",
    "655f5d8e-39c7-45b4-8a36-fdd3358a448c(CMBT_Skill_Power_01_Antic),,",
    "c07a9d83-9a39-464a-b281-15c67c528ffb(CMBT_Skill_Power_01_Attack),,",
    "32c33123-7962-4d95-b497-532b1a897e85(CMBT_Skill_Power_01_Recover),,",
    "7f20e242-be7c-4fd1-a2bd-5715b2adca03(CMBT_Skill_Power_01_Loop),,",
    "170d9e28-0191-4a01-9fd3-f3593983a716(CMBT_Skill_StaticOverdrive_01_Dash),,"
   ],
   "SpellFlags": [
    "HasSomaticComponent"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "e4e25084-62c5-4526-be60-7841cffa8499",
   "CastEffect": "32e02b4f-f10f-41ec-9354-8970342de6f1"
  },
  "Shout_Stomp_AdamantineGolem": {
   "Name": "Shout_Stomp_AdamantineGolem",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_STATUS_FAKE,100,1)"
   ],
   "AreaRadius": 12,
   "DeathType": "KnockedDown",
   "SpellRoll": "not SavingThrow(Ability.Strength, 14)",
   "SpellSuccess": [
    "AI_IGNORE:ApplyStatus(PRONE,100,2)",
    "AI_IGNORE:DealDamage(2d4,Bludgeoning)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_Stomp_AdamantineGolem_DisplayName",
   "Description": "Shared_Shout_Stomp_AdamantineGolem_Description",
   "DescriptionParams": [
    "DealDamage(2d4,Bludgeoning)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d4,Bludgeoning)"
   ],
   "TooltipAttackSave": [
    "Strength"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(PRONE,100,2)"
   ],
   "CastSound": "CrSpell_Cast_Stomp",
   "TargetSound": "CrSpell_Impact_Stomp",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "91b3c3f1-643d-499b-a0f8-b733180abb47(CMBT_Skill_Quake_01_Prepare),,",
    "8b585f1b-405e-42bc-81e0-90791d86873c(CMBT_Skill_Quake_01_Antic),,",
    "a3899bab-8e3d-48cc-a6b1-bce64b39c84b(CMBT_Skill_Quake_01_Attack),,",
    "3d5bfbec-17f8-43d7-b354-d3c8d76b7772(CMBT_Skill_Quake_01_Recover),,",
    "ac7fd02d-bfb4-48f2-8bae-86bfa2ed2ff5(CMBT_Skill_Quake_01_Loop),,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "9b1d6677-8714-467a-b646-e982edca10cf"
  },
  "Shout_SuddenRush_Gnoll": {
   "Name": "Shout_SuddenRush_Gnoll",
   "SpellType": "Shout",
   "Parent": "Shout_Dash",
   "SpellSchool": "None",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(GNOLL_SUDDENRUSH,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_SuddenRush_Gnoll_DisplayName",
   "Description": "Shared_Shout_SuddenRush_Gnoll_Description",
   "DescriptionParams": [
    "Distance(18)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_SuddenRush",
   "SpellAnimation": [
    ",,",
    "138dddd5-417e-4c66-b824-53c4db710884(CMBT_Skill_SuddenRush_01_Antic),,",
    "470ebc18-2e7e-476d-948d-ec42727f3592(CMBT_Skill_SuddenRush_01_Attack),,",
    "4fdb3a7d-f374-421c-a6d2-57046a118326(CMBT_Skill_SuddenRush_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsSpell"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "b0037eb9-6bd1-455f-9c55-bcd7bb834b25",
   "CastEffect": "22ba6bc8-8131-480b-be8d-4da540963cc1"
  },
  "Shout_WildShape_Badger_NPC": {
   "Name": "Shout_WildShape_Badger_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Badger",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BADGER,100,-1)"
   ],
   "DisplayName": "Shared_Shout_WildShape_Badger_NPC_DisplayName",
   "UseCosts": [
    "ActionPoint:1",
    "WildShape:1"
   ],
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent"
   ],
   "RechargeValues": "4-6"
  },
  "Shout_WildShape_Badger_NPC_Moon": {
   "Name": "Shout_WildShape_Badger_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Badger_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BADGER_MOON,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Bear_NPC": {
   "Name": "Shout_WildShape_Bear_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_Polar",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BEAR,100,-1)"
   ],
   "DisplayName": "Shared_Shout_WildShape_Bear_NPC_DisplayName",
   "Description": "Shared_Shout_WildShape_Bear_NPC_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Bear_NPC_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(19)"
   ],
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent"
   ]
  },
  "Shout_WildShape_Bear_NPC_Moon": {
   "Name": "Shout_WildShape_Bear_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BEAR_MOON,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Bear_Black_NPC": {
   "Name": "Shout_WildShape_Bear_Black_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BEAR_BLACK,100,-1)"
   ],
   "DisplayName": "Shared_Shout_WildShape_Bear_Black_NPC_DisplayName",
   "Description": "Shared_Shout_WildShape_Bear_Black_NPC_Description"
  },
  "Shout_WildShape_Bear_Black_NPC_Moon": {
   "Name": "Shout_WildShape_Bear_Black_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_Black_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BEAR_BLACK_MOON,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Bear_Grey_NPC": {
   "Name": "Shout_WildShape_Bear_Grey_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BEAR_GREY,100,-1)"
   ],
   "DisplayName": "Shared_Shout_WildShape_Bear_Grey_NPC_DisplayName",
   "Description": "Shared_Shout_WildShape_Bear_Grey_NPC_Description"
  },
  "Shout_WildShape_Bear_Grey_NPC_Moon": {
   "Name": "Shout_WildShape_Bear_Grey_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_Grey_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BEAR_GREY_MOON,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Bear_Polar_NPC": {
   "Name": "Shout_WildShape_Bear_Polar_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_Polar",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BEAR_POLAR,100,-1)"
   ],
   "DisplayName": "Shared_Shout_WildShape_Bear_Polar_NPC_DisplayName"
  },
  "Shout_WildShape_Bear_Polar_NPC_Moon": {
   "Name": "Shout_WildShape_Bear_Polar_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_Polar_NPC",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Boar_NPC": {
   "Name": "Shout_WildShape_Boar_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Badger",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BOAR,100,-1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Shout_WildShape_Boar_NPC_DisplayName",
   "Description": "Shared_Shout_WildShape_Boar_NPC_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Boar_NPC_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(11)"
   ],
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent"
   ]
  },
  "Shout_WildShape_Boar_NPC_Moon": {
   "Name": "Shout_WildShape_Boar_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Boar_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_BOAR_MOON,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_DeepRothe_NPC": {
   "Name": "Shout_WildShape_DeepRothe_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_DeepRothe",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_DEEP_ROTHE,100,-1)"
   ],
   "DisplayName": "Shared_Shout_WildShape_DeepRothe_NPC_DisplayName"
  },
  "Shout_WildShape_Raven_NPC": {
   "Name": "Shout_WildShape_Raven_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Raven",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,3)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_RAVEN,100,-1)"
   ],
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent"
   ],
   "RechargeValues": "5-6"
  },
  "Shout_WildShape_Raven_NPC_Moon": {
   "Name": "Shout_WildShape_Raven_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Raven_NPC",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,3)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_RAVEN_MOON,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ],
   "RechargeValues": "5-6"
  },
  "Shout_WildShape_Spider_NPC": {
   "Name": "Shout_WildShape_Spider_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Spider",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_GIANT_SPIDER,100,-1)"
   ],
   "DisplayName": "Shared_Shout_WildShape_Spider_NPC_DisplayName",
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent"
   ]
  },
  "Shout_WildShape_Spider_NPC_Moon": {
   "Name": "Shout_WildShape_Spider_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Spider_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_GIANT_SPIDER_MOON,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Wolf_NPC": {
   "Name": "Shout_WildShape_Wolf_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Wolf_Dire",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_WOLF,100,-1)"
   ],
   "DisplayName": "Shared_Shout_WildShape_Wolf_NPC_DisplayName",
   "Description": "Shared_Shout_WildShape_Wolf_NPC_Description",
   "ExtraDescription": "Shared_Shout_WildShape_Wolf_NPC_ExtraDescription",
   "ExtraDescriptionParams": [
    "RegainHitPoints(11)"
   ],
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent"
   ]
  },
  "Shout_WildShape_Wolf_NPC_Moon": {
   "Name": "Shout_WildShape_Wolf_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Wolf_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_WOLF_MOON,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Wolf_White_NPC": {
   "Name": "Shout_WildShape_Wolf_White_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Wolf_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_WOLF_WHITE,100,-1)"
   ],
   "Description": "Shared_Shout_WildShape_Wolf_White_NPC_Description"
  },
  "Shout_WildShape_Wolf_White_NPC_Moon": {
   "Name": "Shout_WildShape_Wolf_White_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Wolf_White_NPC",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_WOLF_WHITE_MOON,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_WildShape_Wolf_Dire_NPC": {
   "Name": "Shout_WildShape_Wolf_Dire_NPC",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Wolf_Dire",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_WILDSHAPE_MELEE,100,2)",
    "AI_IGNORE:CAST:ApplyStatus(WILDSHAPE_WOLF_DIRE,100,-1)"
   ],
   "DisplayName": "Shared_Shout_WildShape_Wolf_Dire_NPC_DisplayName",
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent"
   ]
  },
  "Shout_WildShape_Wolf_Dire_NPC_Moon": {
   "Name": "Shout_WildShape_Wolf_Dire_NPC_Moon",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Wolf_Dire_NPC",
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ]
  },
  "Shout_ITEMS": {
   "Name": "Shout_ITEMS",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge"
  },
  "Shout_GOB_DetonateSelf": {
   "Name": "Shout_GOB_DetonateSelf",
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
   "Icon": "statIcons_DeathWish",
   "DisplayName": "Gustav_Shout_GOB_DetonateSelf_DisplayName",
   "Description": "Gustav_Shout_GOB_DetonateSelf_Description",
   "DescriptionParams": [
    "DealDamage(100,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(100,Fire)"
   ],
   "CastSound": "CrSpell_Cast_Detonate",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    ",,",
    ",,",
    "023a1d55-e50a-43d7-ad5d-fbc3f3b73291(CMBT_Skill_Detonate_01_Cast),,",
    ",,",
    ",,",
    "ae14b436-0170-4fe6-8341-94bf6e42714b(CMBT_Skill_Detonate_01_Dash),,"
   ],
   "SpellFlags": [
    "HasSomaticComponent"
   ],
   "PrepareEffect": "5016c5da-1162-4981-9c4a-386238739777",
   "CastEffect": "690c5b41-7d7c-488e-812a-db7bf3531373"
  },
  "Shout_HAG_SpawnDoubles_Phase1": {
   "Name": "Shout_HAG_SpawnDoubles_Phase1",
   "SpellType": "Shout",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF, AI_HELPER_BUFF,100,5)",
    "AI_ONLY:CAST:ApplyStatus(SELF, INVISIBLE,100,-1)",
    "AI_IGNORE:CAST:ApplyStatus(SELF,AI_HELPER_BLOCKRESOURCES,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Gustav_Shout_HAG_SpawnDoubles_Phase1_DisplayName",
   "Description": "Gustav_Shout_HAG_SpawnDoubles_Phase1_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_SpawnDoubles",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "ca19e1f6-c9fe-42b5-a2d0-7a6538314f5e(SPL_SpawnDoubles_01_Prepare),,",
    ",,",
    "1349209b-b66c-441c-a8af-3eb9f1d01b4d(SPL_SpawnDoubles_01_Cast),,",
    "1ab8596c-1287-46e7-baad-0ef9dab899a3(SPL_SpawnDoubles_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent",
    "HasVerbalComponent"
   ],
   "CastEffect": "f3beac16-b7cc-40bf-9b80-b94a3fcfe1c9"
  },
  "Shout_HAG_SpawnDoubles_Phase2": {
   "Name": "Shout_HAG_SpawnDoubles_Phase2",
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
   "DisplayName": "Gustav_Shout_HAG_SpawnDoubles_Phase2_DisplayName",
   "Description": "Gustav_Shout_HAG_SpawnDoubles_Phase2_Description",
   "CastSound": "CrSpell_Cast_SpawnGreaterDoubles",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "CastEffect": "bd6a6e4f-851a-449a-b2f4-72a6161737b5"
  },
  "Shout_HAG_SpawnDoubles_MayrinaIllusion": {
   "Name": "Shout_HAG_SpawnDoubles_MayrinaIllusion",
   "SpellType": "Shout",
   "Parent": "Shout_HAG_SpawnDoubles_Phase1",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF, AI_HELPER_BUFF,100)",
    "AI_IGNORE:CAST:ApplyStatus(SELF,AI_HELPER_BLOCKRESOURCES,100,1)"
   ],
   "TargetConditions": "Self()",
   "DisplayName": "Gustav_Shout_HAG_SpawnDoubles_MayrinaIllusion_DisplayName",
   "Description": "Gustav_Shout_HAG_SpawnDoubles_MayrinaIllusion_Description",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "f02ed06c-bd44-4abb-9e8e-c2973708ca64(SPL_Trickery_01_Prepare),,",
    ",,",
    "cc5fa3f5-27c4-49aa-a31d-03018a86529b(SPL_Trickery_01_Cast),,",
    "f3f52ddf-fe80-4373-bd3f-9b30795f1c3f(SPL_Trickery_01_Recover),,",
    ",,",
    ",,"
   ],
   "RechargeValues": 6,
   "CastEffect": "618197ce-c757-4ba5-a340-5feae7e39176"
  },
  "Shout_HAG_Frog_ReflectiveMucus": {
   "Name": "Shout_HAG_Frog_ReflectiveMucus",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(FROG_REFLECTIVEMUCUS,100,-1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Gustav_Shout_HAG_Frog_ReflectiveMucus_DisplayName",
   "Description": "Gustav_Shout_HAG_Frog_ReflectiveMucus_Description",
   "CastTextEvent": "VFX_Attack_02",
   "CastSound": "CrSpell_Cast_ReflectiveMucus",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "47cc362e-5635-46d5-a240-9fbad950ab4a",
   "CastEffect": "457a6a5a-2a7f-4e9c-aa19-c2bd91507649"
  },
  "Shout_DEN_KanonPush": {
   "Name": "Shout_DEN_KanonPush",
   "SpellType": "Shout",
   "SpellProperties": [
    "Force(8)",
    "DealDamage(100,Piercing)"
   ],
   "TargetConditions": "Self()",
   "DisplayName": "Gustav_Shout_DEN_KanonPush_DisplayName",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "b1d7f747-1ce7-4cf0-9cb3-0b6c9b2529a2(SCENE_KanonKilledArrow),,",
    ",,",
    "438dc0d6-e232-4a16-9f89-ca6cb7c87e50(SCENE_KanonKilledFall),,",
    "d6865bb0-ec3d-4ca6-aec8-6860526e290b(SCENE_KanonKilledLand),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand"
   ]
  },
  "Shout_GLO_Wyll_CambionTalk": {
   "Name": "Shout_GLO_Wyll_CambionTalk",
   "SpellType": "Shout",
   "AIFlags": [
    "CanNotUse"
   ],
   "Autocast": "Yes",
   "Icon": "Action_ContactMizora",
   "DisplayName": "Gustav_Shout_GLO_Wyll_CambionTalk_DisplayName",
   "Description": "Gustav_Shout_GLO_Wyll_CambionTalk_Description",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "ImmediateCast",
    "DontForceSheathOrUnsheath"
   ]
  },
  "Shout_GOB_GoblinKing_ForceShout": {
   "Name": "Shout_GOB_GoblinKing_ForceShout",
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
   "DisplayName": "Gustav_Shout_GOB_GoblinKing_ForceShout_DisplayName",
   "Description": "Gustav_Shout_GOB_GoblinKing_ForceShout_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Force)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d6,Force)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_WillOfTheAbsolute",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "AddFallDamageOnLand"
   ],
   "RechargeValues": "4-6",
   "PrepareEffect": "3ab96f86-2eaf-4ed6-897d-f8f322a9dab4",
   "CastEffect": "282bcc2e-0dbd-4a93-a53b-ca3a70279cfb",
   "TargetEffect": "6b15cf0d-0f36-4d44-9f1d-573c9159a35e"
  },
  "Shout_FOR_Ogre_Blur": {
   "Name": "Shout_FOR_Ogre_Blur",
   "SpellType": "Shout",
   "Parent": "Shout_Blur",
   "Cooldown": "OncePerCombat",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ]
  },
  "Shout_UND_SocietyOfBrilliance_Teleportation": {
   "Name": "Shout_UND_SocietyOfBrilliance_Teleportation",
   "SpellType": "Shout",
   "Level": 5,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "AI_ONLY:TARGET:ApplyStatus(AI_STATUS_FAKE,100)"
   ],
   "AreaRadius": 100,
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Gustav_Shout_UND_SocietyOfBrilliance_Teleportation_DisplayName",
   "Description": "Gustav_Shout_UND_SocietyOfBrilliance_Teleportation_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell"
   ]
  },
  "Shout_GOB_PainPriest_DaggerSpell": {
   "Name": "Shout_GOB_PainPriest_DaggerSpell",
   "SpellType": "Shout",
   "SpellProperties": [
    "GROUND:CreateSurface(1,-1,Blood)",
    "DealDamage(1d4,Slashing)",
    "ApplyStatus(SELF,BLESS,100,1)"
   ],
   "TargetConditions": "Self()",
   "Icon": "Action_SacrificeToLoviatar",
   "DisplayName": "Gustav_Shout_GOB_PainPriest_DaggerSpell_DisplayName",
   "Description": "Gustav_Shout_GOB_PainPriest_DaggerSpell_Description",
   "DescriptionParams": [
    "DealDamage(1d4,Slashing)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_BloodSacrifice",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "PrepareEffect": "e4abb54b-8d1a-4940-a6e0-71cd6a895831",
   "CastEffect": "c3c4ce67-c06b-42ef-84d6-d4f6eb205805"
  },
  "Shout_GOB_Priestess_MirrorImage": {
   "Name": "Shout_GOB_Priestess_MirrorImage",
   "SpellType": "Shout",
   "Parent": "Shout_MirrorImage",
   "Cooldown": "OncePerCombat",
   "MemoryCost": 0
  },
  "Shout_DEN_ARM_LuckyBoots_Spell": {
   "Name": "Shout_DEN_ARM_LuckyBoots_Spell",
   "SpellType": "Shout",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(SELF,DEN_UNFORTUNATEGNOME_LUCKYBOOTS_STATUS,100,3)",
    "ApplyStatus(SELF,BLESS,100,1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Gustav_Shout_DEN_ARM_LuckyBoots_Spell_DisplayName",
   "Description": "Gustav_Shout_DEN_ARM_LuckyBoots_Spell_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "CastEffect": "3b4c35ad-4d0a-4889-8408-46181439be42"
  },
  "Shout_CHA_ShellKid_Stone_Spell": {
   "Name": "Shout_CHA_ShellKid_Stone_Spell",
   "SpellType": "Shout",
   "Parent": "Shout_MirrorImage",
   "SpellSchool": "Enchantment",
   "AreaRadius": 15,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 14)",
   "SpellSuccess": [
    "ApplyStatus(CHARMED,100,10)"
   ],
   "TargetConditions": "Character() and not Self() and not Ally()",
   "Icon": "unknown",
   "DisplayName": "Gustav_Shout_CHA_ShellKid_Stone_Spell_DisplayName",
   "Description": "Gustav_Shout_CHA_ShellKid_Stone_Spell_Description",
   "CastTextEvent": "VFX_Cast_01",
   "CastSound": "CrSpell_Cast_ShellKidStone",
   "TargetSound": "CrSpell_Impact_ShellKidStone",
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "895ce382-397d-4b9a-9e8f-6ee3b1ff3a13(UTIL_Drink_01),,",
    ",,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "aca2b782-e6cb-4ce6-8cc3-f90dff9b0c3c",
   "CastEffect": "c59a1d05-a4f4-43f0-95b0-a2b85190a954"
  },
  "Shout_UND_Invisibility_ShadowOfMenzoberranzan": {
   "Name": "Shout_UND_Invisibility_ShadowOfMenzoberranzan",
   "SpellType": "Shout",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "AI_IGNORE:ApplyStatus(INVISIBILITY,100,-1)",
    "AI_ONLY:ApplyStatus(INVISIBILITY,100,2)"
   ],
   "Icon": "Action_ShroudedInShadow",
   "DisplayName": "Gustav_Shout_UND_Invisibility_ShadowOfMenzoberranzan_DisplayName",
   "Description": "Gustav_Shout_UND_Invisibility_ShadowOfMenzoberranzan_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_Invisibility_L1to3",
   "TargetSound": "Spell_Impact_Utility_Invisibility_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "6aae7c32-ce4b-4ad3-ad9b-f5a8c354e3cf(CMBT_Skill_Invisibility_01_Prepare),,",
    "f3a26975-5aab-4fd6-989a-2b2515b57139(CMBT_Skill_Invisibility_01_Antic),,",
    "9942c019-92d2-4107-b6f8-35fd8df22c75(CMBT_Skill_Invisibility_01_Attack),,",
    "1a11f959-abd1-4fb9-a127-73e420f55586(CMBT_Skill_Invisibility_01_Recover),,",
    "307b18c3-f79b-4327-b296-1853334c0475(CMBT_Skill_Invisibility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsConcentration"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "53589346-1eee-4de3-a42d-cec4b3e76705",
   "CastEffect": "4fbf1266-e014-4921-85de-ec79cb05c82c"
  },
  "Shout_GOB_WolfPens_Disengage_GoblinKid": {
   "Name": "Shout_GOB_WolfPens_Disengage_GoblinKid",
   "SpellType": "Shout",
   "Parent": "Shout_Disengage_Goblin",
   "TargetConditions": "Self() and not Immobilized()"
  },
  "Shout_GOB_WolfPens_Dash_GoblinKid": {
   "Name": "Shout_GOB_WolfPens_Dash_GoblinKid",
   "SpellType": "Shout",
   "Parent": "Shout_Dash"
  },
  "Shout_GOB_WolfPens_Dash_GoblinAdult": {
   "Name": "Shout_GOB_WolfPens_Dash_GoblinAdult",
   "SpellType": "Shout",
   "Parent": "Shout_Dash"
  },
  "Shout_FOR_SpiderQueen_Enrage": {
   "Name": "Shout_FOR_SpiderQueen_Enrage",
   "SpellType": "Shout",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "ApplyStatus(FOR_SPIDERQUEEN_ENRAGE,100,-1)",
    "AI_ONLY:ApplyStatus(AI_HELPER_BUFF,100)"
   ],
   "DisplayName": "Gustav_Shout_FOR_SpiderQueen_Enrage_DisplayName",
   "Description": "Gustav_Shout_FOR_SpiderQueen_Enrage_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_SpiderQueenEnrage",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "CastEffect": "26d2af6c-e752-4fdd-8ffb-50035b68ad99"
  },
  "Shout_FOR_Owlbear_Enrage": {
   "Name": "Shout_FOR_Owlbear_Enrage",
   "SpellType": "Shout",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "ApplyStatus(FOR_OWLBEAR_ENRAGE,100,-1)",
    "AI_ONLY:ApplyStatus(SELF,AI_HELPER_BUFF,100)"
   ],
   "DisplayName": "Gustav_Shout_FOR_Owlbear_Enrage_DisplayName",
   "Description": "Gustav_Shout_FOR_Owlbear_Enrage_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_OwlbearEnrage",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "CastEffect": "5507406b-6199-43d1-bb7d-a8f5b336de34"
  },
  "Shout_GOB_Ogre_Enrage": {
   "Name": "Shout_GOB_Ogre_Enrage",
   "SpellType": "Shout",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(GOB_OGRE_ENRAGE,100,-1)",
    "AI_ONLY:CAST:ApplyStatus(AI_STATUS_FAKE,100)"
   ],
   "DisplayName": "Gustav_Shout_GOB_Ogre_Enrage_DisplayName",
   "Description": "Gustav_Shout_GOB_Ogre_Enrage_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_OgreEnrage",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "CastEffect": "2b7847f0-1e1a-4bf0-a8bc-271e4a44e19c"
  },
  "Shout_FOR_Ogre_Enrage": {
   "Name": "Shout_FOR_Ogre_Enrage",
   "SpellType": "Shout",
   "Parent": "Shout_GOB_Ogre_Enrage",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(FOR_OGRE_ENRAGE,100,-1)",
    "AI_ONLY:ApplyStatus(AI_STATUS_FAKE,100,5)"
   ],
   "CastSound": "CrSpell_Cast_OgreEnrage",
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Shout_UND_DetectThoughts_Tower_Amulet": {
   "Name": "Shout_UND_DetectThoughts_Tower_Amulet",
   "SpellType": "Shout",
   "Parent": "Shout_DetectThoughts",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Shout_UND_FeatherFall_Tower_Boots": {
   "Name": "Shout_UND_FeatherFall_Tower_Boots",
   "SpellType": "Shout",
   "Parent": "Shout_FeatherFall",
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Shout_UND_Phase1_AdamantineGolem": {
   "Name": "Shout_UND_Phase1_AdamantineGolem",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "None",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_STATUS_FAKE,100,5)",
    "AI_IGNORE:ApplyStatus(SELF,UND_ADAMANTINEGOLEM_PHASE1,100,-1)",
    "AI_IGNORE:CAST:ApplyStatus(SELF,AI_HELPER_BLOCKRESOURCES,100,1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Gustav_Shout_UND_Phase1_AdamantineGolem_DisplayName",
   "Description": "Gustav_Shout_UND_Phase1_AdamantineGolem_Description",
   "CastSound": "CrSpell_Cast_Awaken",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    ",,",
    ",,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "00c2ded6-e85f-44e4-8bd0-897d1a255dcf"
  },
  "Shout_UND_Phase2_AdamantineGolem": {
   "Name": "Shout_UND_Phase2_AdamantineGolem",
   "SpellType": "Shout",
   "Parent": "Shout_UND_Phase1_AdamantineGolem",
   "SpellProperties": [
    "AI_ONLY:ApplyStatus(SELF,AI_STATUS_FAKE,100,5)",
    "AI_IGNORE:ApplyStatus(SELF,UND_ADAMANTINEGOLEM_PHASE2,100,-1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Gustav_Shout_UND_Phase2_AdamantineGolem_DisplayName",
   "Description": "Gustav_Shout_UND_Phase2_AdamantineGolem_Description",
   "CastSound": "CrSpell_Cast_Berzerk",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    ",,",
    ",,",
    "af4a74d1-a4cb-4ec9-9811-6c69fd6ee510(CMBT_Skill_Shout_02_Attack),,",
    "26c2cc48-104a-4366-ac09-7b512db4c639(CMBT_Skill_Shout_02_Recover),,",
    ",,",
    ",,"
   ],
   "CastEffect": "307de217-77ec-43fc-8ebf-0b30caf71c23"
  },
  "Shout_DEN_Halsin_WildShape_Bear": {
   "Name": "Shout_DEN_Halsin_WildShape_Bear",
   "SpellType": "Shout",
   "Parent": "Shout_WildShape_Bear_Black_NPC_Moon",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,3)",
    "AI_IGNORE:CAST:ApplyStatus(GOB_WolfPens_WILDSHAPE_BEAR,100,-1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1",
    "WildShape:1"
   ],
   "RechargeValues": "4-6"
  },
  "Shout_GOB_GoblinPriest_CallForHelp": {
   "Name": "Shout_GOB_GoblinPriest_CallForHelp",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_STATUS_FAKE,100,3)"
   ],
   "TargetConditions": "Self()",
   "DisplayName": "Gustav_Shout_GOB_GoblinPriest_CallForHelp_DisplayName",
   "Description": "Gustav_Shout_GOB_GoblinPriest_CallForHelp_Description"
  },
  "Shout_CRA_DyingMindflayer_Enthrall": {
   "Name": "Shout_CRA_DyingMindflayer_Enthrall",
   "SpellType": "Shout",
   "SpellProperties": [
    "ApplyStatus(CRA_ENTHRALLED,100,-1)"
   ],
   "AreaRadius": 9,
   "TargetConditions": "not Self()",
   "Autocast": "Yes",
   "DisplayName": "Gustav_Shout_CRA_DyingMindflayer_Enthrall_DisplayName",
   "Description": "Gustav_Shout_CRA_DyingMindflayer_Enthrall_Description",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    "bf924cc6-8b39-4c3b-b1c0-eda264cf6150(SPL_Somatic_Self_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsEnemySpell",
    "IsConcentration"
   ]
  },
  "Shout_HAG_UseCharm": {
   "Name": "Shout_HAG_UseCharm",
   "SpellType": "Shout",
   "Parent": "Shout_ActionSurge",
   "SpellProperties": [
    "ApplyStatus(BEARS_ENDURANCE, 100, -1)",
    "ApplyStatus(BULLS_STRENGTH, 100, -1)",
    "ApplyStatus(CATS_GRACE, 100, -1)",
    "ApplyStatus(EAGLES_SPLENDOR, 100, -1)",
    "ApplyStatus(FOXS_CUNNING, 100, -1)",
    "ApplyStatus(OWLS_WISDOM, 100, -1)"
   ],
   "TargetConditions": "Self()",
   "Autocast": "Yes",
   "Icon": "unknown",
   "DisplayName": "Gustav_Shout_HAG_UseCharm_DisplayName",
   "Description": "Gustav_Shout_HAG_UseCharm_Description",
   "CastTextEvent": "Cast",
   "CastEffect": "480b21ab-8632-4e4c-bdf5-c1e4c5c131d1",
   "TargetEffect": "4d80e719-6b5a-4a77-829c-f9b7f38fd966"
  },
  "Shout_UND_Nere_ShieldOfScreams": {
   "Name": "Shout_UND_Nere_ShieldOfScreams",
   "SpellType": "Shout",
   "SpellSchool": "Abjuration",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(UND_NERE_SHIELDOFSCREAMS,100,2)"
   ],
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Gustav_Shout_UND_Nere_ShieldOfScreams_DisplayName",
   "Description": "Gustav_Shout_UND_Nere_ShieldOfScreams_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Psychic)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(UND_NERE_SHIELDOFSCREAMS,100,2)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_ShieldOfScreams",
   "TargetSound": "CrSpell_Impact_ShieldOfScreams",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "IsEnemySpell",
    "CannotTargetItems",
    "CannotTargetTerrain",
    "HasVerbalComponent",
    "IsSpell"
   ],
   "CastEffect": "0c5c57f4-95c5-4c2a-a655-69d7f9e72139"
  },
  "Shout_UND_MonkAmulet_TalkToAmulet": {
   "Name": "Shout_UND_MonkAmulet_TalkToAmulet",
   "SpellType": "Shout",
   "AIFlags": [
    "CanNotUse"
   ],
   "Autocast": "Yes",
   "Icon": "Action_TalkToAmulet",
   "DisplayName": "Gustav_Shout_UND_MonkAmulet_TalkToAmulet_DisplayName",
   "Description": "Gustav_Shout_UND_MonkAmulet_TalkToAmulet_Description",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "ImmediateCast",
    "DontForceSheathOrUnsheath"
   ]
  },
  "Target_MainHandAttack": {
   "Name": "Target_MainHandAttack",
   "SpellType": "Target",
   "TargetCeiling": 0,
   "TargetFloor": ".25",
   "TargetRadius": "MeleeMainWeaponRange",
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "Target_MainHandAttack",
   "DisplayName": "Shared_Target_MainHandAttack_DisplayName",
   "Description": "Shared_Target_MainHandAttack_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "MeleeWeaponAttack"
   ],
   "PreviewCursor": "Melee",
   "CastTextEvent": "Cast",
   "AlternativeCastTextEvents": [
    "CastOffhand"
   ],
   "CycleConditions": "Character() and Enemy() and not Dead()",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "DualWieldingUseCosts": "BonusActionPoint:1",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),366693ee-d97f-4294-a4dd-a2145ddc4e6a(CMBT_Melee_RHand_01_Antic_LOW),9f2d32b9-529a-4b75-b3df-6e1ae1395280(CMBT_Melee_RHand_01_Antic_HIGH)",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),479ee5da-2967-41e1-b7d1-a94e864a5f25(CMBT_Melee_RHand_01_Attack_LOW),79323098-edb3-4993-ba50-9b5f705e9878(CMBT_Melee_RHand_01_Attack_HIGH)",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),b5cb923d-0c08-4c20-89a9-44b9bf98c6cb(CMBT_Melee_RHand_01_Recover_LOW),6282d127-0c06-4365-9d53-6f32ef350127(CMBT_Melee_RHand_01_Recover_HIGH)",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),ecbf9949-3b33-432c-b735-e47aaed0924a(CMBT_Melee_RHand_01_Dash_LOW),e71a7c08-fdc1-4a0b-9a90-1c793c58553c(CMBT_Melee_RHand_01_Dash_HIGH)"
   ],
   "DualWieldingSpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,:722df2d7-7898-4b0b-b930-5a850b55ccf0(CMBT_Melee_LHand_01_Attack),,",
    "a693a7c3-e7e7-4edb-98dd-db5fd700663f(CMBT_Melee_LHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsHarmful",
    "CanDualWield"
   ],
   "HitAnimationType": "PhysicalDamage",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "8682067a-e523-40fb-b705-3112083b6b05"
  },
  "Target_WEAPON ATTACK": {
   "Name": "Target_WEAPON ATTACK",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_Sentinel_AttackOfOpportunity": {
   "Name": "Target_Sentinel_AttackOfOpportunity",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "ExecuteWeaponFunctors(MainHand)",
    "ApplyStatus(SENTINEL,100,1)"
   ]
  },
  "Target_Charger_Attack": {
   "Name": "Target_Charger_Attack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "DisplayName": "Shared_Target_Charger_Attack_DisplayName",
   "Description": "Shared_Target_Charger_Attack_Description",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ]
  },
  "Target_CommandersStrike_Attack": {
   "Name": "Target_CommandersStrike_Attack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_CommandersStrike_Attack_DisplayName",
   "Description": "Shared_Target_CommandersStrike_Attack_Description",
   "UseCosts": [
    "ReactionActionPoint:1"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ]
  },
  "Target_Dipped_Fire": {
   "Name": "Target_Dipped_Fire",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " ApplyStatus(BURNING,100,1)"
   ],
   "Icon": "Action_DippedFire_Melee",
   "DisplayName": "Shared_Target_Dipped_Fire_DisplayName",
   "Description": "Shared_Target_Dipped_Fire_Description",
   "PreviewCursor": "Melee",
   "CastSound": "Action_Cast_Dipped_Fire",
   "TargetSound": "Action_Impact_Dipped_Fire",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "PrepareEffect": "4a21118d-5544-4529-a8b5-c5296bf921c2",
   "CastEffect": "5b130478-6021-4a38-a33c-d549a3da0634"
  },
  "Target_Dipped_Poison": {
   "Name": "Target_Dipped_Poison",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " DealDamage(1d6, Poison)"
   ],
   "Icon": "Action_DippedPoison_Melee",
   "DisplayName": "Shared_Target_Dipped_Poison_DisplayName",
   "Description": "Shared_Target_Dipped_Poison_Description",
   "PreviewCursor": "Melee",
   "CastSound": "Action_Cast_Dipped_Poison",
   "TargetSound": "Action_Impact_Dipped_Poison",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Internal",
   "PrepareEffect": "3c2a573f-fbe5-4f5f-952b-222f67cee16e",
   "CastEffect": "90695daf-5c41-4d72-bd14-58c531e4f860"
  },
  "Target_FlameBlade_Attack": {
   "Name": "Target_FlameBlade_Attack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Level": 2,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:DealDamage(MainMeleeWeapon, Fire)",
    "GROUND:ExecuteWeaponFunctors(MainHand)"
   ],
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeSpellAttack)",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, Fire)",
    "ExecuteWeaponFunctors(MainHand)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Target_FlameBlade_Attack_DisplayName",
   "Description": "Shared_Target_FlameBlade_Attack_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, Fire)"
   ],
   "ExtraDescription": "Shared_Target_FlameBlade_Attack_ExtraDescription",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful",
    "IsAttack"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "MemoryCost": 1
  },
  "Target_HordeBreaker": {
   "Name": "Target_HordeBreaker",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "TARGET:ApplyStatus(HORDE_BREAKER_TECHNICAL,100,1)",
    "ApplyStatus(SELF,HORDE_BREAKER,100,1)",
    "ApplyStatus(SELF,HORDE_BREAKER_TECHNICAL,100,1)",
    "GROUND:DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "GROUND:ExecuteWeaponFunctors(MainHand)",
    "CreateExplosion(Projectile_HordeBreaker_Explosion)"
   ],
   "AreaRadius": 2,
   "SpellSuccess": [
    "TARGET:DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "TargetConditions": "Character() and not Self()",
   "Icon": "Action_HordeBreaker_Melee",
   "DisplayName": "Shared_Target_HordeBreaker_DisplayName",
   "Description": "Shared_Target_HordeBreaker_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(HORDE_BREAKER_TARGET,100,1)"
   ],
   "CastSound": "Action_Cast_HordeBreaker",
   "TargetSound": "Action_Impact_HordeBreaker",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "PrepareEffect": "bf46125f-b173-4d63-9abb-6a38ba58748a",
   "CastEffect": "0edf65ff-2608-4a65-a478-a2128542a3e7",
   "TargetEffect": "e702491c-dffe-4a9a-9fbc-15cb30ae36c4",
   "PositionEffect": "19629c01-d8c7-4179-9ea7-7b563269b840"
  },
  "Target_HordeBreaker_Free": {
   "Name": "Target_HordeBreaker_Free",
   "SpellType": "Target",
   "Parent": "Target_HordeBreaker",
   "SpellProperties": [
    "RemoveStatus(SELF,HORDE_BREAKER)",
    "RemoveStatus(HORDE_BREAKER_TARGET)",
    "GROUND:DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "GROUND:ExecuteWeaponFunctors(MainHand)"
   ],
   "Icon": "Action_HordeBreaker_Melee",
   "DisplayName": "Shared_Target_HordeBreaker_Free_DisplayName",
   "Description": "Shared_Target_HordeBreaker_Free_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "ExtraDescription": "Shared_Target_HordeBreaker_Free_ExtraDescription",
   "ExtraDescriptionParams": [
    "Distance(1.5)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "PositionEffect": "5157bd4e-d162-41ed-aad9-a4b0f20166ff"
  },
  "Target_LungingAttack": {
   "Name": "Target_LungingAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": 3,
   "Icon": "unknown",
   "DisplayName": "Shared_Target_LungingAttack_DisplayName",
   "Description": "Shared_Target_LungingAttack_Description",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ]
  },
  "Target_PolearmMaster_BonusAttack": {
   "Name": "Target_PolearmMaster_BonusAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellSuccess": [
    "DealDamage(1d4, Bludgeoning)"
   ],
   "DisplayName": "Shared_Target_PolearmMaster_BonusAttack_DisplayName",
   "Description": "Shared_Target_PolearmMaster_BonusAttack_Description",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ]
  },
  "Target_RecklessAttack": {
   "Name": "Target_RecklessAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "SpellProperties": [
    "ApplyStatus(RECKLESS_ATTACK, 100, 1)",
    "GROUND:DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "GROUND:ExecuteWeaponFunctors(MainHand)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Target_RecklessAttack_DisplayName",
   "Description": "Shared_Target_RecklessAttack_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "VerbalIntent": "Damage",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ]
  },
  "Target_OffhandAttack": {
   "Name": "Target_OffhandAttack",
   "SpellType": "Target",
   "SpellProperties": [
    "GROUND:DealDamage(OffhandMeleeWeapon, OffhandMeleeWeaponDamageType)",
    " GROUND:ExecuteWeaponFunctors(OffHand)"
   ],
   "TargetCeiling": 0,
   "TargetFloor": ".25",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeOffHandWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(max(1,OffhandMeleeWeapon), OffhandMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(OffHand)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "Target_OffHandAttack",
   "DisplayName": "Shared_Target_OffhandAttack_DisplayName",
   "Description": "Shared_Target_OffhandAttack_Description",
   "DescriptionParams": [
    "DealDamage(OffhandMeleeWeapon, OffhandMeleeWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(OffhandMeleeWeapon, OffhandMeleeWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "MeleeWeaponAttack"
   ],
   "PreviewCursor": "Melee",
   "CastTextEvent": "CastOffhand",
   "CycleConditions": "Character() and Enemy() and not Dead()",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "c1df9aea-8be9-4de3-bcbc-4e4c1e44dc37(CMBT_Melee_LHand_01_Antic),,",
    "722df2d7-7898-4b0b-b930-5a850b55ccf0(CMBT_Melee_LHand_01_Attack),,",
    "a693a7c3-e7e7-4edb-98dd-db5fd700663f(CMBT_Melee_LHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "35f5cba8-3706-46d5-9a1e-2def9ba22473(CMBT_Melee_LHand_01_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "HitAnimationType": "PhysicalDamage",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "6b1751f5-a275-44de-bfde-352fc949162e"
  },
  "Target_UnarmedAttack": {
   "Name": "Target_UnarmedAttack",
   "SpellType": "Target",
   "SpellProperties": [
    "IF(not Player(context.Source)):ApplyStatus(SELF,AI_HELPER_EXTRAATTACK,100,1)"
   ],
   "TargetCeiling": 0,
   "TargetFloor": ".25",
   "TargetRadius": "1.5",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "Action_UnarmedAttack",
   "DisplayName": "Shared_Target_UnarmedAttack_DisplayName",
   "Description": "Shared_Target_UnarmedAttack_Description",
   "TooltipAttackSave": [
    "MeleeUnarmedAttack"
   ],
   "PreviewCursor": "Melee",
   "CastTextEvent": "Cast",
   "CycleConditions": "Character() and Enemy() and not Dead()",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),366693ee-d97f-4294-a4dd-a2145ddc4e6a(CMBT_Melee_RHand_01_Antic_LOW),9f2d32b9-529a-4b75-b3df-6e1ae1395280(CMBT_Melee_RHand_01_Antic_HIGH)",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),479ee5da-2967-41e1-b7d1-a94e864a5f25(CMBT_Melee_RHand_01_Attack_LOW),79323098-edb3-4993-ba50-9b5f705e9878(CMBT_Melee_RHand_01_Attack_HIGH)",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),b5cb923d-0c08-4c20-89a9-44b9bf98c6cb(CMBT_Melee_RHand_01_Recover_LOW),6282d127-0c06-4365-9d53-6f32ef350127(CMBT_Melee_RHand_01_Recover_HIGH)",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),ecbf9949-3b33-432c-b735-e47aaed0924a(CMBT_Melee_RHand_01_Dash_LOW),e71a7c08-fdc1-4a0b-9a90-1c793c58553c(CMBT_Melee_RHand_01_Dash_HIGH)"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsHarmful",
    "DontForceSheathOrUnsheath"
   ],
   "HitAnimationType": "PhysicalDamage",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Bash": {
   "Name": "Target_Bash",
   "SpellType": "Target",
   "AIFlags": [
    "CanNotUse"
   ],
   "TargetCeiling": 0,
   "TargetFloor": ".25",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "not SavingThrow(Ability.Strength, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(PRONE,100,1)"
   ],
   "TargetConditions": "Character() and not Self()",
   "Icon": "Action_Bash",
   "DisplayName": "Shared_Target_Bash_DisplayName",
   "Description": "Shared_Target_Bash_Description",
   "PreviewCursor": "Melee",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Bash",
   "TargetSound": "Action_Impact_Bash",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "1d832b0a-ccfe-4ca7-8426-10200306921c(CMBT_Melee_LHand_01_Prepare),,",
    "c1df9aea-8be9-4de3-bcbc-4e4c1e44dc37(CMBT_Melee_LHand_01_Antic),,",
    "722df2d7-7898-4b0b-b930-5a850b55ccf0(CMBT_Melee_LHand_01_Attack),,",
    "a693a7c3-e7e7-4edb-98dd-db5fd700663f(CMBT_Melee_LHand_01_Recover),,",
    "cbe217f4-bca8-46c0-bb22-c846b18e13a1(CMBT_Melee_LHand_01_Loop),,",
    "35f5cba8-3706-46d5-9a1e-2def9ba22473(CMBT_Melee_LHand_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "1d832b0a-ccfe-4ca7-8426-10200306921c(CMBT_Melee_LHand_01_Prepare),,",
    "c1df9aea-8be9-4de3-bcbc-4e4c1e44dc37(CMBT_Melee_LHand_01_Antic),,",
    "722df2d7-7898-4b0b-b930-5a850b55ccf0(CMBT_Melee_LHand_01_Attack),,",
    "a693a7c3-e7e7-4edb-98dd-db5fd700663f(CMBT_Melee_LHand_01_Recover),,",
    "cbe217f4-bca8-46c0-bb22-c846b18e13a1(CMBT_Melee_LHand_01_Loop),,",
    "35f5cba8-3706-46d5-9a1e-2def9ba22473(CMBT_Melee_LHand_01_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful",
    "IsDefaultWeaponAction"
   ],
   "RechargeValues": "5-6",
   "PrepareEffect": "e1cc173f-b12f-4060-b8ea-57b891dd30fe",
   "CastEffect": "468f6e0e-222f-4ea6-8572-10ff14f2c422"
  },
  "Target_DisarmingAttack": {
   "Name": "Target_DisarmingAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "TargetConditions": "Character() and not Self() and HasWeaponInMainHand()",
   "Icon": "Action_DisarmingAttack_Melee",
   "DisplayName": "Shared_Target_DisarmingAttack_DisplayName",
   "Description": "Shared_Target_DisarmingAttack_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_DisarmingAttack_Melee",
   "TargetSound": "Action_Impact_DisarmingAttack",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "5dbfc67e-a1f4-4a91-b398-4df1ad989c49(CMBT_Skill_Slash_01_Prepare),,",
    "6f957f78-322e-465f-b314-27299a98add7(CMBT_Skill_Slash_01_Antic),,",
    "63c0501c-14aa-467c-8980-45ed023ab15d(CMBT_Skill_Slash_01_Attack),,",
    "e6af1757-da0b-4640-8ce5-ea559816d2b0(CMBT_Skill_Slash_01_Recover),,",
    "08e862c4-75d3-489d-bdb2-b2f95031373e(CMBT_Skill_Slash_01_Loop),,",
    "3ed0eebd-86d0-4902-bcea-e0b039e9ad1f(CMBT_Skill_Slash_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "b6a6bde4-f4f3-4f10-bd8b-e642a8da4aa9(CMBT_Skill_Slash_02_Prepare),,",
    "550c6598-8929-4071-aced-c12f5c9ad8aa(CMBT_Skill_Slash_02_Antic),,",
    "da4fb3e1-c9e0-4d16-ba92-aca8def437b3(CMBT_Skill_Slash_02_Attack),,",
    "be687d06-cb06-4fca-b977-bd2746cacc91(CMBT_Skill_Slash_02_Recover),,",
    "12773179-f31c-4c27-a8d5-0649df16995d(CMBT_Skill_Slash_02_Loop),,",
    "7bd69a21-e7f9-4c8b-aaf3-64ad999293b4(CMBT_Skill_Slash_02_Dash),,"
   ],
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "PrepareEffect": "e3faa4ab-3c09-456d-997a-23a48eac2b09",
   "CastEffect": "6c62be43-fdf9-4921-87eb-1ec7a97813c3",
   "TargetEffect": "b87ba2df-24f8-48b1-bf00-2da8a9f635f7"
  },
  "Target_DistractingStrike": {
   "Name": "Target_DistractingStrike",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "TargetConditions": "Character() and not Self()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_DistractingStrike_DisplayName",
   "Description": "Shared_Target_DistractingStrike_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "2ba949b7-0329-4190-992c-11b0d29183c5(CMBT_Skill_Precision_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "a0503ad0-c1b1-449c-b431-4ac6c39c58d7(CMBT_Skill_Precision_01_Loop),,",
    "c36ed247-2272-492b-99c2-2ca10b014670(CMBT_Skill_Precision_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "c25d80c5-aaf3-4aba-bc1f-bb1c8534725e(CMBT_Skill_Precision_02_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "dc83b386-41f5-43df-9649-788107052830(CMBT_Skill_Precision_02_Loop),,",
    "b63dee1e-08e1-4f7a-88ee-1e6baa38e0dd(CMBT_Skill_Precision_02_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ]
  },
  "Target_EnsnaringStrike": {
   "Name": "Target_EnsnaringStrike",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Level": 1,
   "SpellSchool": "Conjuration",
   "SpellContainerID": "Projectile_EnsnaringStrike_Container",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "SpellSuccess": [
    "IF(not SavingThrow(Ability.Strength, SourceSpellDC(),AdvantageOnRestrained(),DisadvantageOnRestrained())):ApplyStatus(ENSNARING_STRIKE,100,10)",
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "TargetConditions": "Character() and not Self()",
   "Icon": "Spell_Conjuration_EnsnaringStrikeMelee",
   "DisplayName": "Shared_Target_EnsnaringStrike_DisplayName",
   "Description": "Shared_Target_EnsnaringStrike_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "ExtraDescription": "Shared_Target_EnsnaringStrike_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d6,Piercing)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "Strength"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(ENSNARING_STRIKE,100,10)"
   ],
   "PreviewCursor": "Melee",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Physical_EnsnaringStrike_L1to3",
   "TargetSound": "Spell_Impact_Damage_Physical_EnsnaringStrike_L1to3",
   "UseCosts": [
    "ActionPointGroup:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "2ba949b7-0329-4190-992c-11b0d29183c5(CMBT_Skill_Precision_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "a0503ad0-c1b1-449c-b431-4ac6c39c58d7(CMBT_Skill_Precision_01_Loop),,",
    "c36ed247-2272-492b-99c2-2ca10b014670(CMBT_Skill_Precision_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "c25d80c5-aaf3-4aba-bc1f-bb1c8534725e(CMBT_Skill_Precision_02_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "dc83b386-41f5-43df-9649-788107052830(CMBT_Skill_Precision_02_Loop),,",
    "b63dee1e-08e1-4f7a-88ee-1e6baa38e0dd(CMBT_Skill_Precision_02_Dash),,"
   ],
   "VerbalIntent": "Control",
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "IsMelee",
    "IsConcentration",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "1ffb0671-f398-4cb5-a3c0-3ed4b15a5f10",
   "CastEffect": "48611453-6d8e-470a-8f88-c30ab9875d89",
   "TargetEffect": "00b0965a-b9cf-4f39-8b5b-49df3fc43f86"
  },
  "Target_EnsnaringStrike_2": {
   "Name": "Target_EnsnaringStrike_2",
   "SpellType": "Target",
   "Parent": "Target_EnsnaringStrike",
   "SpellSuccess": [
    "IF(not SavingThrow(Ability.Strength, SourceSpellDC(),AdvantageOnRestrained(),DisadvantageOnRestrained())):ApplyStatus(ENSNARING_STRIKE_2,100,10)",
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "Icon": "Spell_Conjuration_EnsnaringStrikeMelee_2",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "DealDamage(2d6,Piercing)"
   ],
   "ExtraDescriptionParams": [
    "DealDamage(2d6,Piercing)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(ENSNARING_STRIKE_2,100,10)"
   ],
   "UseCosts": [
    "ActionPointGroup:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_EnsnaringStrike",
   "PowerLevel": 2
  },
  "Target_Flurry": {
   "Name": "Target_Flurry",
   "SpellType": "Target",
   "AIFlags": [
    "CanNotUse"
   ],
   "SpellProperties": [
    "GROUND:DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " GROUND:ExecuteWeaponFunctors(MainHand)",
    " GROUND:DealDamage(OffhandMeleeWeapon, OffhandMeleeWeaponDamageType)",
    " GROUND:ExecuteWeaponFunctors(OffHand)"
   ],
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " DealDamage(OffhandMeleeWeapon, OffhandMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(OffHand)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "Action_Flurry",
   "DisplayName": "Shared_Target_Flurry_DisplayName",
   "Description": "Shared_Target_Flurry_Description",
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " DealDamage(OffhandMeleeWeapon, OffhandMeleeWeaponDamageType)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Flurry",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,:722df2d7-7898-4b0b-b930-5a850b55ccf0(CMBT_Melee_LHand_01_Attack),,",
    "a693a7c3-e7e7-4edb-98dd-db5fd700663f(CMBT_Melee_LHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "PrepareEffect": "11f99c50-720c-430f-80f5-6688171bcf50",
   "CastEffect": "17c93518-f3e6-4955-bcc8-366ef979bcaf",
   "TargetEffect": "aba1b31b-fff5-4dc5-bb9a-3984bd3af79d"
  },
  "Target_GreatWeaponMaster_BonusAttack": {
   "Name": "Target_GreatWeaponMaster_BonusAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Icon": "PassiveAction_GreatWeaponMaster_AllIn",
   "DisplayName": "Shared_Target_GreatWeaponMaster_BonusAttack_DisplayName",
   "Description": "Shared_Target_GreatWeaponMaster_BonusAttack_Description",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ]
  },
  "Target_MenacingAttack": {
   "Name": "Target_MenacingAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "TargetConditions": "Character() and not Self()",
   "Icon": "Action_MenacingAttack_Melee",
   "DisplayName": "Shared_Target_MenacingAttack_DisplayName",
   "Description": "Shared_Target_MenacingAttack_Description",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_MenacingAttack",
   "TargetSound": "Action_Impact_MenacingAttack",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "79f8640c-612a-4b13-aac7-bdc1b90458c2(CMBT_Skill_Power_01_Prepare),,",
    "655f5d8e-39c7-45b4-8a36-fdd3358a448c(CMBT_Skill_Power_01_Antic),,",
    "c07a9d83-9a39-464a-b281-15c67c528ffb(CMBT_Skill_Power_01_Attack),,",
    "32c33123-7962-4d95-b497-532b1a897e85(CMBT_Skill_Power_01_Recover),,",
    "7f20e242-be7c-4fd1-a2bd-5715b2adca03(CMBT_Skill_Power_01_Loop),,",
    "7465f7f7-67ea-41f2-8dd4-3c97f1089a54(CMBT_Skill_Power_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "6f9e662c-b10c-4388-9e56-d74320efa0c0(CMBT_Skill_Power_02_Prepare),,",
    "d668f9d6-bd9d-435c-83b5-6d46ac54761f(CMBT_Skill_Power_02_Antic),,",
    "8e60eacb-12be-4711-96e2-d6d906a1ce25(CMBT_Skill_Power_02_Attack),,",
    "603a7bfb-d53e-41c2-98dd-e004fdf5a0e8(CMBT_Skill_Power_02_Recover),,",
    "003e58fc-f11d-41b6-90d9-ea8bc943826b(CMBT_Skill_Power_02_Loop),,",
    "b850a756-6bd6-4c4d-a3fc-6c524a49a818(CMBT_Skill_Power_02_Dash),,"
   ],
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "PrepareEffect": "2b5cf667-33aa-4758-868c-a6c88eb1c81f",
   "CastEffect": "1712482b-491a-4655-a2c1-197aefedd228",
   "TargetEffect": "77543fdb-b41c-4ba9-b709-bd846c602de3"
  },
  "Target_PushingAttack": {
   "Name": "Target_PushingAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "TargetConditions": "Character() and not Self()",
   "Icon": "Action_PushingAttack_Melee",
   "DisplayName": "Shared_Target_PushingAttack_DisplayName",
   "Description": "Shared_Target_PushingAttack_Description",
   "TooltipAttackSave": [
    "Strength"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_PushingAttack",
   "TargetSound": "Action_Impact_PushingAttack",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "79e47203-3855-4837-8673-ddb708d86962(CMBT_Skill_Sweep_01_Prepare),,",
    "711781fb-5f5a-4b9a-bd8b-e0b4ff9dec46(CMBT_Skill_Sweep_01_Antic),,",
    "a17a7bf3-7381-4191-83f4-304d37c738e0(CMBT_Skill_Sweep_01_Attack),,",
    "1172e0b6-08d1-4f28-a651-a01681b84ee6(CMBT_Skill_Sweep_01_Recover),,",
    "863fabe7-d990-42a3-8961-7898c207bcb1(CMBT_Skill_Sweep_01_Loop),,",
    "0002afee-5ad9-4109-ae64-9b2571601226(CMBT_Skill_Sweep_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "403865ab-807c-4ca1-b798-e698773fe18d(CMBT_Skill_Sweep_02_Prepare),,",
    "ed63aaa2-36fe-4f50-b2cc-b2df68558693(CMBT_Skill_Sweep_02_Antic),,",
    "d4f528cf-78b2-49c8-a414-2896d12c4d70(CMBT_Skill_Sweep_02_Attack),,",
    "60693960-2eb6-4d22-81cf-2861a3ead2c6(CMBT_Skill_Sweep_02_Recover),,",
    "f2532a95-383b-4ec7-b9f5-ec2bf17b6e0e(CMBT_Skill_Sweep_02_Loop),,",
    "75dd8a27-dd89-43f1-a08b-772df28606ad(CMBT_Skill_Sweep_02_Dash),,"
   ],
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "AddFallDamageOnLand",
    "IsHarmful"
   ],
   "PrepareEffect": "e3faa4ab-3c09-456d-997a-23a48eac2b09",
   "CastEffect": "7a5bb529-b7ee-4fda-9aea-05629e4f2ad6",
   "TargetEffect": "da2df3f8-b53c-439d-8ca3-1795b31df0d6"
  },
  "Target_Riposte": {
   "Name": "Target_Riposte",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "TargetConditions": "Character() and not Self()",
   "Icon": "Action_Riposte",
   "DisplayName": "Shared_Target_Riposte_DisplayName",
   "Description": "Shared_Target_Riposte_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Riposte",
   "TargetSound": "Action_Impact_Riposte",
   "SpellAnimation": [
    "79f8640c-612a-4b13-aac7-bdc1b90458c2(CMBT_Skill_Power_01_Prepare),,",
    "655f5d8e-39c7-45b4-8a36-fdd3358a448c(CMBT_Skill_Power_01_Antic),,",
    "c07a9d83-9a39-464a-b281-15c67c528ffb(CMBT_Skill_Power_01_Attack),,",
    "32c33123-7962-4d95-b497-532b1a897e85(CMBT_Skill_Power_01_Recover),,",
    "7f20e242-be7c-4fd1-a2bd-5715b2adca03(CMBT_Skill_Power_01_Loop),,",
    "7465f7f7-67ea-41f2-8dd4-3c97f1089a54(CMBT_Skill_Power_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "6f9e662c-b10c-4388-9e56-d74320efa0c0(CMBT_Skill_Power_02_Prepare),,",
    "d668f9d6-bd9d-435c-83b5-6d46ac54761f(CMBT_Skill_Power_02_Antic),,",
    "8e60eacb-12be-4711-96e2-d6d906a1ce25(CMBT_Skill_Power_02_Attack),,",
    "603a7bfb-d53e-41c2-98dd-e004fdf5a0e8(CMBT_Skill_Power_02_Recover),,",
    "003e58fc-f11d-41b6-90d9-ea8bc943826b(CMBT_Skill_Power_02_Loop),,",
    "b850a756-6bd6-4c4d-a3fc-6c524a49a818(CMBT_Skill_Power_02_Dash),,"
   ],
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "PrepareEffect": "e3faa4ab-3c09-456d-997a-23a48eac2b09",
   "CastEffect": "e4013228-0f3c-4c9c-a0d9-59417c9de652",
   "TargetEffect": "fe37f6cc-0a5e-4a27-b953-19f46bf91ca5"
  },
  "Target_Slash": {
   "Name": "Target_Slash",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerShortRest",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " IF(Character()):ApplyStatus(BLEEDING,100,1)"
   ],
   "Icon": "Action_Slash",
   "DisplayName": "Shared_Target_Slash_DisplayName",
   "Description": "Shared_Target_Slash_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "DealDamage(1d4,Piercing)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "DealDamage(1d4,Piercing)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(BLEEDING,100,1)"
   ],
   "PreviewCursor": "Melee",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Slash",
   "TargetSound": "Action_Impact_Slash",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "5dbfc67e-a1f4-4a91-b398-4df1ad989c49(CMBT_Skill_Slash_01_Prepare),,",
    "6f957f78-322e-465f-b314-27299a98add7(CMBT_Skill_Slash_01_Antic),,",
    "63c0501c-14aa-467c-8980-45ed023ab15d(CMBT_Skill_Slash_01_Attack),,",
    "e6af1757-da0b-4640-8ce5-ea559816d2b0(CMBT_Skill_Slash_01_Recover),,",
    "08e862c4-75d3-489d-bdb2-b2f95031373e(CMBT_Skill_Slash_01_Loop),,",
    "3ed0eebd-86d0-4902-bcea-e0b039e9ad1f(CMBT_Skill_Slash_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "b6a6bde4-f4f3-4f10-bd8b-e642a8da4aa9(CMBT_Skill_Slash_02_Prepare),,",
    "550c6598-8929-4071-aced-c12f5c9ad8aa(CMBT_Skill_Slash_02_Antic),,",
    "da4fb3e1-c9e0-4d16-ba92-aca8def437b3(CMBT_Skill_Slash_02_Attack),,",
    "be687d06-cb06-4fca-b977-bd2746cacc91(CMBT_Skill_Slash_02_Recover),,",
    "12773179-f31c-4c27-a8d5-0649df16995d(CMBT_Skill_Slash_02_Loop),,",
    "7bd69a21-e7f9-4c8b-aaf3-64ad999293b4(CMBT_Skill_Slash_02_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful",
    "IsDefaultWeaponAction"
   ],
   "PrepareEffect": "e56cfaef-1719-421e-83a8-78b6637cb440",
   "CastEffect": "8c702c9c-7a61-427d-b325-fc5b92d28874",
   "TargetEffect": "645ef5b2-8914-46bf-9db9-558385ad923f"
  },
  "Target_Smash": {
   "Name": "Target_Smash",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerShortRest",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "Icon": "Action_Smash",
   "DisplayName": "Shared_Target_Smash_DisplayName",
   "Description": "Shared_Target_Smash_Description",
   "PreviewCursor": "Melee",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Smash",
   "TargetSound": "Action_Impact_Smash",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "79f8640c-612a-4b13-aac7-bdc1b90458c2(CMBT_Skill_Power_01_Prepare),,",
    "655f5d8e-39c7-45b4-8a36-fdd3358a448c(CMBT_Skill_Power_01_Antic),,",
    "c07a9d83-9a39-464a-b281-15c67c528ffb(CMBT_Skill_Power_01_Attack),,",
    "32c33123-7962-4d95-b497-532b1a897e85(CMBT_Skill_Power_01_Recover),,",
    "7f20e242-be7c-4fd1-a2bd-5715b2adca03(CMBT_Skill_Power_01_Loop),,",
    "7465f7f7-67ea-41f2-8dd4-3c97f1089a54(CMBT_Skill_Power_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "6f9e662c-b10c-4388-9e56-d74320efa0c0(CMBT_Skill_Power_02_Prepare),,",
    "d668f9d6-bd9d-435c-83b5-6d46ac54761f(CMBT_Skill_Power_02_Antic),,",
    "8e60eacb-12be-4711-96e2-d6d906a1ce25(CMBT_Skill_Power_02_Attack),,",
    "603a7bfb-d53e-41c2-98dd-e004fdf5a0e8(CMBT_Skill_Power_02_Recover),,",
    "003e58fc-f11d-41b6-90d9-ea8bc943826b(CMBT_Skill_Power_02_Loop),,",
    "b850a756-6bd6-4c4d-a3fc-6c524a49a818(CMBT_Skill_Power_02_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful",
    "IsDefaultWeaponAction"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "ef39275d-19b1-4582-a99a-d7105316b2db",
   "TargetEffect": "700fed09-0db2-4b9e-97d1-00e7c6191711"
  },
  "Target_Smite_Searing": {
   "Name": "Target_Smite_Searing",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Level": 1,
   "SpellSchool": "Evocation",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " DealDamage(1d6, Fire)",
    " ApplyStatus(SEARING_SMITE, 100, 10)"
   ],
   "Icon": "Spell_Evocation_SearingSmite",
   "DisplayName": "Shared_Target_Smite_Searing_DisplayName",
   "Description": "Shared_Target_Smite_Searing_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Fire)"
   ],
   "ExtraDescription": "Shared_Target_Smite_Searing_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d6,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "DealDamage(1d6,Fire)"
   ],
   "TooltipAttackSave": [
    "MeleeWeaponAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(SEARING_SMITE, 100, 10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_SearingSmite_L1to3",
   "TargetSound": "Spell_Impact_Damage_SearingSmite_L1to3",
   "UseCosts": [
    "ActionPointGroup:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsConcentration",
    "IsHarmful",
    "HasVerbalComponent",
    "IsSpell"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "MemoryCost": 1,
   "PrepareEffect": "d2ed4f24-55f8-4c70-9bd1-8da22deb8e83",
   "CastEffect": "b5b24254-75d3-4575-af9f-ba3575a2f8b7",
   "TargetEffect": "d5f54cd9-9252-4bcd-9e04-7e63d071eac6"
  },
  "Target_Smite_Searing_2": {
   "Name": "Target_Smite_Searing_2",
   "SpellType": "Target",
   "Parent": "Target_Smite_Searing",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " DealDamage(2d6, Fire)",
    " ApplyStatus(SEARING_SMITE, 100, 10)"
   ],
   "Icon": "Spell_Evocation_SearingSmite_2",
   "DescriptionParams": [
    "DealDamage(2d6, Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "DealDamage(2d6, Fire)"
   ],
   "UseCosts": [
    "ActionPointGroup:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_Smite_Searing",
   "PowerLevel": 2
  },
  "Target_Smite_Searing_ZarielTiefling": {
   "Name": "Target_Smite_Searing_ZarielTiefling",
   "SpellType": "Target",
   "Parent": "Target_Smite_Searing_2",
   "Cooldown": "OncePerRest",
   "DisplayName": "Shared_Target_Smite_Searing_ZarielTiefling_DisplayName",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "MemoryCost": 0
  },
  "Target_SneakAttack": {
   "Name": "Target_SneakAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "TargetRadius": "MeleeMainWeaponRange",
   "RequirementConditions": "WieldingFinesseWeaponInMainHand(context.Source)",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "IF(SneakAttackDices(1)):DealDamage(1d6, MainMeleeWeaponDamageType)",
    "IF(SneakAttackDices(2)):DealDamage(2d6, MainMeleeWeaponDamageType)",
    "ExecuteWeaponFunctors(MainHand)"
   ],
   "Icon": "Action_SneakAttack_Melee",
   "DisplayName": "Shared_Target_SneakAttack_DisplayName",
   "Description": "Shared_Target_SneakAttack_Description",
   "ExtraDescription": "Shared_Target_SneakAttack_ExtraDescription",
   "ExtraDescriptionParams": [
    "Distance(1.5)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_SneakAttack",
   "TargetSound": "Action_Impact_SneakAttack",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "2ba949b7-0329-4190-992c-11b0d29183c5(CMBT_Skill_Precision_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "a0503ad0-c1b1-449c-b431-4ac6c39c58d7(CMBT_Skill_Precision_01_Loop),,",
    "c36ed247-2272-492b-99c2-2ca10b014670(CMBT_Skill_Precision_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "c25d80c5-aaf3-4aba-bc1f-bb1c8534725e(CMBT_Skill_Precision_02_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "dc83b386-41f5-43df-9649-788107052830(CMBT_Skill_Precision_02_Loop),,",
    "b63dee1e-08e1-4f7a-88ee-1e6baa38e0dd(CMBT_Skill_Precision_02_Dash),,"
   ],
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "PrepareEffect": "62fa9d2f-ec0b-4900-a455-ec9b5e6e3eb4",
   "CastEffect": "6ebc0b77-460f-4be0-90ce-355cfa5b67c1",
   "TargetEffect": "b51922cf-e412-4462-8274-144781bac7f3"
  },
  "Target_Topple": {
   "Name": "Target_Topple",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerShortRest",
   "AIFlags": [
    "CanNotUse"
   ],
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "not SavingThrow(Ability.Dexterity, HybridCasterWeaponActionDC())",
   "SpellSuccess": [
    "ApplyStatus(PRONE,100,1)"
   ],
   "Icon": "Action_Topple",
   "DisplayName": "Shared_Target_Topple_DisplayName",
   "Description": "Shared_Target_Topple_Description",
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(PRONE,100,1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Topple",
   "TargetSound": "Action_Impact_Topple",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "SpellAnimation": [
    "d11b68a0-5c5c-430f-a033-90ab91e04525(CMBT_Skill_Trip_01_Prepare),,",
    "8c5b6452-a6eb-44f3-8830-f8e1a06678ba(CMBT_Skill_Trip_01_Antic),,",
    "412f122d-0773-4a08-bf1c-65749e543fb6(CMBT_Skill_Trip_01_Attack),,",
    "87c14b90-fb0a-4cd3-8364-b38c3204dae4(CMBT_Skill_Trip_01_Recover),,",
    "082f9ee1-a009-4234-9fb5-412d3afba640(CMBT_Skill_Trip_01_Loop),,",
    "dced792c-ab29-450c-b9ec-d0c291c6c022(CMBT_Skill_Trip_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "ce4e5210-46ca-436f-90c0-00ef3e9eeb29(CMBT_Skill_Trip_02_Prepare),,",
    "f2a2f68b-8ee1-402e-a374-6cddacc16fe4(CMBT_Skill_Trip_02_Antic),,",
    "f63970b8-ddbe-4058-a6e4-c689ffa8f4bb(CMBT_Skill_Trip_02_Attack),,",
    "aec7bcca-5a0b-4f73-bddd-2f1dc3ce6f00(CMBT_Skill_Trip_02_Recover),,",
    "3201ba74-a4d2-428b-be90-cbef244878df(CMBT_Skill_Trip_02_Loop),,",
    "9946ece2-74fc-4b81-927a-4bf83503cc20(CMBT_Skill_Trip_02_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "RechargeValues": "5-6",
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "da5a1f91-7bc7-422d-8ba0-a30552744f24",
   "TargetEffect": "4fcd1f5a-58dd-4649-b20b-b7d4152c1ddd"
  },
  "Target_TripAttack": {
   "Name": "Target_TripAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetRadius": "MeleeMainWeaponRange",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "TargetConditions": "Character() and not Self()",
   "Icon": "Action_TripAttack_Melee",
   "DisplayName": "Shared_Target_TripAttack_DisplayName",
   "Description": "Shared_Target_TripAttack_Description",
   "ExtraDescription": "Shared_Target_TripAttack_ExtraDescription",
   "TooltipAttackSave": [
    "Strength"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(PRONE,100,1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_TripAttack_Melee",
   "TargetSound": "Action_Impact_Trip",
   "UseCosts": [
    "ActionPointGroup:1"
   ],
   "HitCosts": "SuperiorityDie:1",
   "SpellAnimation": [
    "d11b68a0-5c5c-430f-a033-90ab91e04525(CMBT_Skill_Trip_01_Prepare),,",
    "8c5b6452-a6eb-44f3-8830-f8e1a06678ba(CMBT_Skill_Trip_01_Antic),,",
    "412f122d-0773-4a08-bf1c-65749e543fb6(CMBT_Skill_Trip_01_Attack),,",
    "87c14b90-fb0a-4cd3-8364-b38c3204dae4(CMBT_Skill_Trip_01_Recover),,",
    "082f9ee1-a009-4234-9fb5-412d3afba640(CMBT_Skill_Trip_01_Loop),,",
    "dced792c-ab29-450c-b9ec-d0c291c6c022(CMBT_Skill_Trip_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "ce4e5210-46ca-436f-90c0-00ef3e9eeb29(CMBT_Skill_Trip_02_Prepare),,",
    "f2a2f68b-8ee1-402e-a374-6cddacc16fe4(CMBT_Skill_Trip_02_Antic),,",
    "f63970b8-ddbe-4058-a6e4-c689ffa8f4bb(CMBT_Skill_Trip_02_Attack),,",
    "aec7bcca-5a0b-4f73-bddd-2f1dc3ce6f00(CMBT_Skill_Trip_02_Recover),,",
    "3201ba74-a4d2-428b-be90-cbef244878df(CMBT_Skill_Trip_02_Loop),,",
    "9946ece2-74fc-4b81-927a-4bf83503cc20(CMBT_Skill_Trip_02_Dash),,"
   ],
   "SpellStyleGroup": "Class",
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "PrepareEffect": "e3faa4ab-3c09-456d-997a-23a48eac2b09",
   "CastEffect": "5abeaf9e-c8a9-4722-bd3c-99223267c1c6",
   "TargetEffect": "3967d3c5-8187-4460-8e9c-6feb3a43fd8b"
  },
  "Target_WEAPON_ACTION_TARGET": {
   "Name": "Target_WEAPON_ACTION_TARGET",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_AdvancedMeleeWeaponAction": {
   "Name": "Target_AdvancedMeleeWeaponAction",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerShortRest",
   "TargetRadius": "MeleeMainWeaponRange",
   "TargetConditions": "(Character() or Item()) and not Self() and not Dead()",
   "Icon": "unknown",
   "PreviewCursor": "Melee",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful",
    "IsDefaultWeaponAction"
   ],
   "PrepareEffect": "18188471-a2d8-4ed8-82ee-f4a1917eb6ff",
   "CastEffect": "19e5f1f1-33e2-47cd-a634-ccf21808dc6e",
   "TargetEffect": "a5341b2a-c161-4a4a-aa97-ea6a493d1402"
  },
  "Target_HeartStopper": {
   "Name": "Target_HeartStopper",
   "SpellType": "Target",
   "Parent": "Target_AdvancedMeleeWeaponAction",
   "Icon": "Action_HeartStopper",
   "DisplayName": "Shared_Target_HeartStopper_DisplayName",
   "Description": "Shared_Target_HeartStopper_Description",
   "ExtraDescription": "Shared_Target_HeartStopper_ExtraDescription",
   "TooltipAttackSave": [
    "MeleeWeaponAttack",
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(CHEST_TRAUMA,100,2)"
   ],
   "CastSound": "Action_Cast_HeartStopper",
   "TargetSound": "Action_Impact_HeartStopper",
   "SpellAnimation": [
    "79f8640c-612a-4b13-aac7-bdc1b90458c2(CMBT_Skill_Power_01_Prepare),,",
    "655f5d8e-39c7-45b4-8a36-fdd3358a448c(CMBT_Skill_Power_01_Antic),,",
    "c07a9d83-9a39-464a-b281-15c67c528ffb(CMBT_Skill_Power_01_Attack),,",
    "32c33123-7962-4d95-b497-532b1a897e85(CMBT_Skill_Power_01_Recover),,",
    "7f20e242-be7c-4fd1-a2bd-5715b2adca03(CMBT_Skill_Power_01_Loop),,",
    "7465f7f7-67ea-41f2-8dd4-3c97f1089a54(CMBT_Skill_Power_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "6f9e662c-b10c-4388-9e56-d74320efa0c0(CMBT_Skill_Power_02_Prepare),,",
    "d668f9d6-bd9d-435c-83b5-6d46ac54761f(CMBT_Skill_Power_02_Antic),,",
    "8e60eacb-12be-4711-96e2-d6d906a1ce25(CMBT_Skill_Power_02_Attack),,",
    "603a7bfb-d53e-41c2-98dd-e004fdf5a0e8(CMBT_Skill_Power_02_Recover),,",
    "003e58fc-f11d-41b6-90d9-ea8bc943826b(CMBT_Skill_Power_02_Loop),,",
    "b850a756-6bd6-4c4d-a3fc-6c524a49a818(CMBT_Skill_Power_02_Dash),,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "14e8690f-d8a4-44ac-a8ba-197eb000acbf",
   "TargetEffect": "0f5b0d5e-b5ad-4ca1-8574-ec84dbae2913"
  },
  "Target_HinderingSmash": {
   "Name": "Target_HinderingSmash",
   "SpellType": "Target",
   "Parent": "Target_AdvancedMeleeWeaponAction",
   "Icon": "Action_HinderingStrike",
   "DisplayName": "Shared_Target_HinderingSmash_DisplayName",
   "Description": "Shared_Target_HinderingSmash_Description",
   "ExtraDescription": "Shared_Target_HinderingSmash_ExtraDescription",
   "TooltipAttackSave": [
    "MeleeWeaponAttack",
    " Strength"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(HINDERED,100,2)"
   ],
   "CastSound": "Action_Cast_HinderingStrike",
   "TargetSound": "Action_Impact_HinderingStrike",
   "SpellAnimation": [
    "5dbfc67e-a1f4-4a91-b398-4df1ad989c49(CMBT_Skill_Slash_01_Prepare),,",
    "6f957f78-322e-465f-b314-27299a98add7(CMBT_Skill_Slash_01_Antic),,",
    "63c0501c-14aa-467c-8980-45ed023ab15d(CMBT_Skill_Slash_01_Attack),,",
    "e6af1757-da0b-4640-8ce5-ea559816d2b0(CMBT_Skill_Slash_01_Recover),,",
    "08e862c4-75d3-489d-bdb2-b2f95031373e(CMBT_Skill_Slash_01_Loop),,",
    "3ed0eebd-86d0-4902-bcea-e0b039e9ad1f(CMBT_Skill_Slash_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "b6a6bde4-f4f3-4f10-bd8b-e642a8da4aa9(CMBT_Skill_Slash_02_Prepare),,",
    "550c6598-8929-4071-aced-c12f5c9ad8aa(CMBT_Skill_Slash_02_Antic),,",
    "da4fb3e1-c9e0-4d16-ba92-aca8def437b3(CMBT_Skill_Slash_02_Attack),,",
    "be687d06-cb06-4fca-b977-bd2746cacc91(CMBT_Skill_Slash_02_Recover),,",
    "12773179-f31c-4c27-a8d5-0649df16995d(CMBT_Skill_Slash_02_Loop),,",
    "7bd69a21-e7f9-4c8b-aaf3-64ad999293b4(CMBT_Skill_Slash_02_Dash),,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "3aa0619e-f7a4-4d11-bb12-bc89297e5eb8",
   "TargetEffect": "57658fab-88cf-4de8-ad47-ff2aac92a78b"
  },
  "Target_CripplingStrike": {
   "Name": "Target_CripplingStrike",
   "SpellType": "Target",
   "Parent": "Target_AdvancedMeleeWeaponAction",
   "Icon": "Action_CripplingStrike",
   "DisplayName": "Shared_Target_CripplingStrike_DisplayName",
   "Description": "Shared_Target_CripplingStrike_Description",
   "ExtraDescription": "Shared_Target_CripplingStrike_ExtraDescription",
   "TooltipAttackSave": [
    "MeleeWeaponAttack",
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(CRIPPLED,100,2)"
   ],
   "CastSound": "Action_Cast_CripplingStrike",
   "TargetSound": "Action_Impact_CripplingStrike",
   "SpellAnimation": [
    "5dbfc67e-a1f4-4a91-b398-4df1ad989c49(CMBT_Skill_Slash_01_Prepare),,",
    "6f957f78-322e-465f-b314-27299a98add7(CMBT_Skill_Slash_01_Antic),,",
    "63c0501c-14aa-467c-8980-45ed023ab15d(CMBT_Skill_Slash_01_Attack),,",
    "e6af1757-da0b-4640-8ce5-ea559816d2b0(CMBT_Skill_Slash_01_Recover),,",
    "08e862c4-75d3-489d-bdb2-b2f95031373e(CMBT_Skill_Slash_01_Loop),,",
    "3ed0eebd-86d0-4902-bcea-e0b039e9ad1f(CMBT_Skill_Slash_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "b6a6bde4-f4f3-4f10-bd8b-e642a8da4aa9(CMBT_Skill_Slash_02_Prepare),,",
    "550c6598-8929-4071-aced-c12f5c9ad8aa(CMBT_Skill_Slash_02_Antic),,",
    "da4fb3e1-c9e0-4d16-ba92-aca8def437b3(CMBT_Skill_Slash_02_Attack),,",
    "be687d06-cb06-4fca-b977-bd2746cacc91(CMBT_Skill_Slash_02_Recover),,",
    "12773179-f31c-4c27-a8d5-0649df16995d(CMBT_Skill_Slash_02_Loop),,",
    "7bd69a21-e7f9-4c8b-aaf3-64ad999293b4(CMBT_Skill_Slash_02_Dash),,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "5999e1c6-e910-486f-ae56-5941a8b675da",
   "TargetEffect": "81040f01-f232-4ffb-9688-0a586683f5c1"
  },
  "Target_PommelStrike": {
   "Name": "Target_PommelStrike",
   "SpellType": "Target",
   "Parent": "Target_AdvancedMeleeWeaponAction",
   "SpellSuccess": [
    "IF(Character() and not SavingThrow(Ability.Constitution, ManeuverSaveDC())):ApplyStatus(DAZED,100,2)",
    "DealDamage(max(1,StrengthModifier), Bludgeoning, Nonmagical, Nonlethal)"
   ],
   "Icon": "Action_PommelStrike",
   "DisplayName": "Shared_Target_PommelStrike_DisplayName",
   "Description": "Shared_Target_PommelStrike_Description",
   "DescriptionParams": [
    "DealDamage(max(1,StrengthModifier), Bludgeoning)"
   ],
   "TooltipDamageList": [
    "DealDamage(max(1,StrengthModifier), Bludgeoning)"
   ],
   "TooltipAttackSave": [
    "MeleeWeaponAttack",
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(DAZED, 100, 2)"
   ],
   "CastSound": "Action_Cast_PommelStrike",
   "TargetSound": "Action_Impact_PommelStrike",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "e4c33fe4-af36-47b7-9f61-51f2f6924210(CMBT_Skill_Subdual_01_Prepare),,",
    "9a52d1ad-09df-473a-bb0c-039b234a37af(CMBT_Skill_Subdual_01_Antic),,",
    "962fa683-1f5e-46c0-8323-596af00d2954(CMBT_Skill_Subdual_01_Attack),,",
    "ea68cfbb-960e-409f-a967-fdc27ba36378(CMBT_Skill_Subdual_01_Recover),,",
    "6574bfb9-d601-4760-bd53-867747514006(CMBT_Skill_Subdual_01_Loop),,",
    "66cf0be9-de93-4821-a755-32fdda2743e8(CMBT_Skill_Subdual_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "07fb29aa-cde0-41cc-8014-204f97eb8849(CMBT_Skill_Subdual_02_Attack_Prepare),,",
    "fe385f62-7e9b-4517-ac55-32e5fa3f2204(CMBT_Skill_Subdual_02_Attack_Antic),,",
    "dd52220e-8435-41b3-b700-445a1c01e464(CMBT_Skill_Subdual_02_Attack_Attack),,",
    "ff694201-8c8a-440f-99d4-d3e7abb71b49(CMBT_Skill_Subdual_02_Attack_Recover),,",
    "25c8454a-5058-4605-a9f0-65988688eb56(CMBT_Skill_Subdual_02_Attack_Loop),,",
    "35691af0-4345-4b6a-b4ef-ff982e6cc116(CMBT_Skill_Subdual_02_Attack_Dash),,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "1fdde122-4f4b-4466-9c1c-4dd101d7101a",
   "TargetEffect": "7836deb8-6037-48d4-8404-6e7adb4274bc"
  },
  "Target_PiercingThrust": {
   "Name": "Target_PiercingThrust",
   "SpellType": "Target",
   "Parent": "Target_AdvancedMeleeWeaponAction",
   "Icon": "Action_PiercingThrust",
   "DisplayName": "Shared_Target_PiercingThrust_DisplayName",
   "Description": "Shared_Target_PiercingThrust_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "ExtraDescription": "Shared_Target_PiercingThrust_ExtraDescription",
   "TooltipAttackSave": [
    "MeleeWeaponAttack",
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(GAPING_WOUND,100,2)"
   ],
   "CastSound": "Action_Cast_PiercingThrust",
   "TargetSound": "Action_Impact_PiercingThrust",
   "SpellAnimation": [
    "2ba949b7-0329-4190-992c-11b0d29183c5(CMBT_Skill_Precision_01_Prepare),,",
    "9583ecee-cf6c-4735-86db-7ebf1df15eae(CMBT_Skill_Precision_01_Antic),,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    "50696db7-d931-4734-915d-32d038ba99a5(CMBT_Skill_Precision_01_Recover),,",
    "a0503ad0-c1b1-449c-b431-4ac6c39c58d7(CMBT_Skill_Precision_01_Loop),,",
    "c36ed247-2272-492b-99c2-2ca10b014670(CMBT_Skill_Precision_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "c25d80c5-aaf3-4aba-bc1f-bb1c8534725e(CMBT_Skill_Precision_02_Prepare),,",
    "45bcbbd4-f9ca-4b19-88c2-822c5e2b0d8b(CMBT_Skill_Precision_02_Antic),,",
    "466e7470-712f-4a67-8ef1-5908a20b0449(CMBT_Skill_Precision_02_Attack),,",
    "c1713221-163b-4bae-95de-e6681d665c76(CMBT_Skill_Precision_02_Recover),,",
    "dc83b386-41f5-43df-9649-788107052830(CMBT_Skill_Precision_02_Loop),,",
    "b63dee1e-08e1-4f7a-88ee-1e6baa38e0dd(CMBT_Skill_Precision_02_Dash),,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "82f51209-b58e-4d9c-a604-bd95838fd42d",
   "TargetEffect": "21b17422-2a0b-489e-bcc9-e3cb4e55f82b"
  },
  "Target_Slash_New": {
   "Name": "Target_Slash_New",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerShortRest",
   "TargetConditions": "(Character() or Item()) and not Self() and not Dead()",
   "Icon": "Action_Slash_New",
   "DisplayName": "Shared_Target_Slash_New_DisplayName",
   "Description": "Shared_Target_Slash_New_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "ExtraDescription": "Shared_Target_Slash_New_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "MeleeWeaponAttack",
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(BLEEDING,100,2)"
   ],
   "PreviewCursor": "Melee",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Slash",
   "TargetSound": "Action_Impact_Slash",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5dbfc67e-a1f4-4a91-b398-4df1ad989c49(CMBT_Skill_Slash_01_Prepare),,",
    "6f957f78-322e-465f-b314-27299a98add7(CMBT_Skill_Slash_01_Antic),,",
    "63c0501c-14aa-467c-8980-45ed023ab15d(CMBT_Skill_Slash_01_Attack),,",
    "e6af1757-da0b-4640-8ce5-ea559816d2b0(CMBT_Skill_Slash_01_Recover),,",
    "08e862c4-75d3-489d-bdb2-b2f95031373e(CMBT_Skill_Slash_01_Loop),,",
    "3ed0eebd-86d0-4902-bcea-e0b039e9ad1f(CMBT_Skill_Slash_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "b6a6bde4-f4f3-4f10-bd8b-e642a8da4aa9(CMBT_Skill_Slash_02_Prepare),,",
    "550c6598-8929-4071-aced-c12f5c9ad8aa(CMBT_Skill_Slash_02_Antic),,",
    "da4fb3e1-c9e0-4d16-ba92-aca8def437b3(CMBT_Skill_Slash_02_Attack),,",
    "be687d06-cb06-4fca-b977-bd2746cacc91(CMBT_Skill_Slash_02_Recover),,",
    "12773179-f31c-4c27-a8d5-0649df16995d(CMBT_Skill_Slash_02_Loop),,",
    "7bd69a21-e7f9-4c8b-aaf3-64ad999293b4(CMBT_Skill_Slash_02_Dash),,"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful",
    "IsDefaultWeaponAction"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "d8b20aa4-c6c5-443d-a559-0c9542edeec5",
   "TargetEffect": "e4ead9ba-cfda-4ec5-8fbd-5e7000420f69"
  },
  "Target_PostureBreaker": {
   "Name": "Target_PostureBreaker",
   "SpellType": "Target",
   "Parent": "Target_AdvancedMeleeWeaponAction",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "TargetConditions": "(Character() or Item()) and not Self() and TargetSizeEqualOrSmaller(Size.Large) and not Dead()",
   "Icon": "Action_PostureBreaker",
   "DisplayName": "Shared_Target_PostureBreaker_DisplayName",
   "Description": "Shared_Target_PostureBreaker_Description",
   "TooltipAttackSave": [
    "MeleeWeaponAttack",
    "Strength"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(PRONE,100,2)"
   ],
   "CastSound": "Action_Cast_PostureBreaker",
   "TargetSound": "Action_Impact_PostureBreaker",
   "SpellAnimation": [
    "79f8640c-612a-4b13-aac7-bdc1b90458c2(CMBT_Skill_Power_01_Prepare),,",
    "655f5d8e-39c7-45b4-8a36-fdd3358a448c(CMBT_Skill_Power_01_Antic),,",
    "c07a9d83-9a39-464a-b281-15c67c528ffb(CMBT_Skill_Power_01_Attack),,",
    "32c33123-7962-4d95-b497-532b1a897e85(CMBT_Skill_Power_01_Recover),,",
    "7f20e242-be7c-4fd1-a2bd-5715b2adca03(CMBT_Skill_Power_01_Loop),,",
    "7465f7f7-67ea-41f2-8dd4-3c97f1089a54(CMBT_Skill_Power_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "6f9e662c-b10c-4388-9e56-d74320efa0c0(CMBT_Skill_Power_02_Prepare),,",
    "d668f9d6-bd9d-435c-83b5-6d46ac54761f(CMBT_Skill_Power_02_Antic),,",
    "8e60eacb-12be-4711-96e2-d6d906a1ce25(CMBT_Skill_Power_02_Attack),,",
    "603a7bfb-d53e-41c2-98dd-e004fdf5a0e8(CMBT_Skill_Power_02_Recover),,",
    "003e58fc-f11d-41b6-90d9-ea8bc943826b(CMBT_Skill_Power_02_Loop),,",
    "b850a756-6bd6-4c4d-a3fc-6c524a49a818(CMBT_Skill_Power_02_Dash),,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "843792a5-98fd-441d-a495-c4802040a381",
   "TargetEffect": "646682ea-2790-4dc7-886e-5d61c9732f59"
  },
  "Target_OpeningAttack": {
   "Name": "Target_OpeningAttack",
   "SpellType": "Target",
   "Parent": "Target_AdvancedMeleeWeaponAction",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "Icon": "Action_OpeningAttack",
   "DisplayName": "Shared_Target_OpeningAttack_DisplayName",
   "Description": "Shared_Target_OpeningAttack_Description",
   "TooltipAttackSave": [
    "MeleeWeaponAttack",
    "Dexterity"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(OFF_BALANCED, 100, 2)"
   ],
   "CastSound": "Action_Cast_OpeningAttack",
   "TargetSound": "Action_Impact_OpeningAttack",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "d11b68a0-5c5c-430f-a033-90ab91e04525(CMBT_Skill_Trip_01_Prepare),,",
    "8c5b6452-a6eb-44f3-8830-f8e1a06678ba(CMBT_Skill_Trip_01_Antic),,",
    "412f122d-0773-4a08-bf1c-65749e543fb6(CMBT_Skill_Trip_01_Attack),,",
    "87c14b90-fb0a-4cd3-8364-b38c3204dae4(CMBT_Skill_Trip_01_Recover),,",
    "082f9ee1-a009-4234-9fb5-412d3afba640(CMBT_Skill_Trip_01_Loop),,",
    "dced792c-ab29-450c-b9ec-d0c291c6c022(CMBT_Skill_Trip_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "ce4e5210-46ca-436f-90c0-00ef3e9eeb29(CMBT_Skill_Trip_02_Prepare),,",
    "f2a2f68b-8ee1-402e-a374-6cddacc16fe4(CMBT_Skill_Trip_02_Antic),,",
    "f63970b8-ddbe-4058-a6e4-c689ffa8f4bb(CMBT_Skill_Trip_02_Attack),,",
    "aec7bcca-5a0b-4f73-bddd-2f1dc3ce6f00(CMBT_Skill_Trip_02_Recover),,",
    "3201ba74-a4d2-428b-be90-cbef244878df(CMBT_Skill_Trip_02_Loop),,",
    "9946ece2-74fc-4b81-927a-4bf83503cc20(CMBT_Skill_Trip_02_Dash),,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "a289cc42-2bdb-448e-8b1c-cf375fe55120",
   "TargetEffect": "24ed0e06-f655-41bc-b796-f781527b8399"
  },
  "Target_ConcussiveSmash": {
   "Name": "Target_ConcussiveSmash",
   "SpellType": "Target",
   "Parent": "Target_AdvancedMeleeWeaponAction",
   "SpellSuccess": [
    "IF(Character() and not SavingThrow(Ability.Constitution, HybridCasterWeaponActionDC())):ApplyStatus(DAZED,100,2)",
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)"
   ],
   "Icon": "Action_ConcussiveSmash",
   "DisplayName": "Shared_Target_ConcussiveSmash_DisplayName",
   "Description": "Shared_Target_ConcussiveSmash_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipAttackSave": [
    "MeleeWeaponAttack",
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(DAZED,100,2)"
   ],
   "CastSound": "Action_Cast_ConcussiveSmash",
   "TargetSound": "Action_Impact_ConcussiveSmash",
   "SpellAnimation": [
    "79f8640c-612a-4b13-aac7-bdc1b90458c2(CMBT_Skill_Power_01_Prepare),,",
    "655f5d8e-39c7-45b4-8a36-fdd3358a448c(CMBT_Skill_Power_01_Antic),,",
    "c07a9d83-9a39-464a-b281-15c67c528ffb(CMBT_Skill_Power_01_Attack),,",
    "32c33123-7962-4d95-b497-532b1a897e85(CMBT_Skill_Power_01_Recover),,",
    "7f20e242-be7c-4fd1-a2bd-5715b2adca03(CMBT_Skill_Power_01_Loop),,",
    "7465f7f7-67ea-41f2-8dd4-3c97f1089a54(CMBT_Skill_Power_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "6f9e662c-b10c-4388-9e56-d74320efa0c0(CMBT_Skill_Power_02_Prepare),,",
    "d668f9d6-bd9d-435c-83b5-6d46ac54761f(CMBT_Skill_Power_02_Antic),,",
    "8e60eacb-12be-4711-96e2-d6d906a1ce25(CMBT_Skill_Power_02_Attack),,",
    "603a7bfb-d53e-41c2-98dd-e004fdf5a0e8(CMBT_Skill_Power_02_Recover),,",
    "003e58fc-f11d-41b6-90d9-ea8bc943826b(CMBT_Skill_Power_02_Loop),,",
    "b850a756-6bd6-4c4d-a3fc-6c524a49a818(CMBT_Skill_Power_02_Dash),,"
   ],
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "2f5ddf2b-5151-4bd9-ab15-c712d2e0e823",
   "TargetEffect": "3283b94c-bece-4835-a62b-de3a8c34d515"
  },
  "Target_TOUCH": {
   "Name": "Target_TOUCH",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_Shove": {
   "Name": "Target_Shove",
   "SpellType": "Target",
   "SpellProperties": [
    "RemoveStatus(SLEEP)",
    "RemoveStatus(SLEEPING)"
   ],
   "TargetCeiling": 0,
   "TargetFloor": ".25",
   "TargetRadius": "1.5",
   "SpellSuccess": [
    "IF(not Ally()):Force(ShoveDistance,OriginToEntity,Aggressive)",
    "IF(Ally()):Force(ShoveDistance,OriginToEntity,Friendly)"
   ],
   "Icon": "Action_Shove",
   "DisplayName": "Shared_Target_Shove_DisplayName",
   "Description": "Shared_Target_Shove_Description",
   "ExtraDescription": "Shared_Target_Shove_ExtraDescription",
   "PreviewCursor": "Melee",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Shove",
   "CycleConditions": "CanShoveWeight() and not Grounded()",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "0319ca29-4024-4649-9278-3c1f20c5f023(CMBT_Skill_Shove_01_Prepare),,",
    "a71e11ca-95ab-463d-a4bf-fe8094126b61(CMBT_Skill_Shove_01_Antic),,",
    "352c3a89-f99c-4472-8424-58c0ffb15e55(CMBT_Skill_Shove_01_Attack),,",
    "a57fc614-ed20-4574-936b-bdcc6cebd36a(CMBT_Skill_Shove_01_Recover),,",
    "b24b3f23-6d3a-43ce-ae3a-abfb44d26082(CMBT_Skill_Shove_01_Loop),,",
    "200ab854-a989-4a6a-8ac9-4b20aecaccda(CMBT_Skill_Shove_01_Dash),,"
   ],
   "SpellFlags": [
    "IsMelee",
    "AddFallDamageOnLand",
    "IsHarmful"
   ],
   "SpellActionType": "Shove",
   "SpellAnimationIntentType": "Peaceful",
   "PrepareEffect": "c512042e-a04f-4a02-af7a-16f30e11ed95",
   "CastEffect": "3fdf3e73-59a3-4518-9521-35f40374d048",
   "TargetEffect": "5d8c64e3-f9ff-4ee0-b0b6-2a081c7244a8"
  },
  "Target_Shove_MageHand": {
   "Name": "Target_Shove_MageHand",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "DescriptionParams": [
    "Distance(2)"
   ]
  },
  "Target_Charger_Push": {
   "Name": "Target_Charger_Push",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "DisplayName": "Shared_Target_Charger_Push_DisplayName",
   "Description": "Shared_Target_Charger_Push_Description",
   "DescriptionParams": [
    "Distance(3)"
   ],
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Target_ShieldShove": {
   "Name": "Target_ShieldShove",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "TargetRadius": "1.5",
   "DisplayName": "Shared_Target_ShieldShove_DisplayName",
   "Description": "Shared_Target_ShieldShove_Description",
   "DescriptionParams": [
    "Distance(1.5)"
   ]
  },
  "Target_ArcaneLock": {
   "Name": "Target_ArcaneLock",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(ARCANE_LOCK, 100, -1)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Item()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_ArcaneLock_DisplayName",
   "Description": "Shared_Target_ArcaneLock_Description",
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_Lock",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "a4da186a-0872-461e-ae5e-93d5b32b9bef(SPL_Somatic_Circle_1HandCW_01_Cast),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee"
   ],
   "MemoryCost": 1
  },
  "Target_Barkskin": {
   "Name": "Target_Barkskin",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "ApplyStatus(BARKSKIN,100,-1)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character()",
   "Icon": "Spell_Transmutation_Barkskin",
   "DisplayName": "Shared_Target_Barkskin_DisplayName",
   "Description": "Shared_Target_Barkskin_Description",
   "TooltipStatusApply": [
    "ApplyStatus(BARKSKIN,100,-1)"
   ],
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_Barkskin_L1to3",
   "TargetSound": "Spell_Impact_Buff_Barkskin_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "e089d263-0588-4aab-aef9-55f4f4ece224(SPL_Druid_Buff_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "1a116d74-9e8d-4abb-952b-bd644d8a4494(SPL_Druid_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee",
    "IsSpell",
    "IsConcentration"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "59571222-bfc0-4e90-9636-514ac48485f8",
   "CastEffect": "6fa15e05-79a0-466e-adbb-6d3ad9c3e6fc",
   "TargetEffect": "c8c8a4be-6483-454c-815a-e24feed40e88"
  },
  "Target_BlessingOfTheTrickster": {
   "Name": "Target_BlessingOfTheTrickster",
   "SpellType": "Target",
   "SpellProperties": [
    "ApplyStatus(BLESSING_OF_THE_TRICKSTER,100,-1)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Ally() and not Self()",
   "Icon": "Action_Cleric_BlessingOfTheTrickster",
   "DisplayName": "Shared_Target_BlessingOfTheTrickster_DisplayName",
   "Description": "Shared_Target_BlessingOfTheTrickster_Description",
   "ExtraDescription": "Shared_Target_BlessingOfTheTrickster_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_BlessingOfTheTrickster_L1to3",
   "TargetSound": "Spell_Impact_Buff_BlessingOfTheTrickster_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsConcentration",
    "IsMelee",
    "Invisible"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MaximumTargets": 1,
   "PrepareEffect": "81e31dc6-3014-49c5-95a5-fe6473c1163b",
   "CastEffect": "c1ae2a9b-9fb0-4f1b-aa4e-dc6f2456b2b2",
   "TargetEffect": "b3b84171-9c99-44d7-98da-f0a1b2d1e206"
  },
  "Target_CureWounds": {
   "Name": "Target_CureWounds",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Evocation",
   "TargetRadius": "1.5",
   "Icon": "Spell_Evocation_CureWounds",
   "DisplayName": "Shared_Target_CureWounds_DisplayName",
   "Description": "Shared_Target_CureWounds_Description",
   "ExtraDescription": "Shared_Target_CureWounds_ExtraDescription",
   "PreviewCursor": "Cast",
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Healing_CureWounds_L1to3",
   "TargetSound": "Spell_Impact_Healing_CureWounds_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "IsMelee"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "96a51ac8-2e7e-4718-bb62-dcfd18964a02",
   "CastEffect": "ce5a1256-d5c8-45b5-98fc-ee9a16e3673c",
   "TargetEffect": "d16a93f4-ddb5-4175-9b3f-22eced19ff02"
  },
  "Target_CureWounds_2": {
   "Name": "Target_CureWounds_2",
   "SpellType": "Target",
   "Parent": "Target_CureWounds",
   "Icon": "Spell_Evocation_CureWounds_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_CureWounds",
   "PowerLevel": 2
  },
  "Target_CureWounds_3": {
   "Name": "Target_CureWounds_3",
   "SpellType": "Target",
   "Parent": "Target_CureWounds",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "RootSpellID": "Target_CureWounds",
   "PowerLevel": 3
  },
  "Target_CureWounds_LifeCleric": {
   "Name": "Target_CureWounds_LifeCleric",
   "SpellType": "Target",
   "Parent": "Target_CureWounds",
   "ExtraDescription": "Shared_Target_CureWounds_LifeCleric_ExtraDescription"
  },
  "Target_CureWounds_LifeCleric_2": {
   "Name": "Target_CureWounds_LifeCleric_2",
   "SpellType": "Target",
   "Parent": "Target_CureWounds_2",
   "ExtraDescription": "Shared_Target_CureWounds_LifeCleric_2_ExtraDescription",
   "RootSpellID": "Target_CureWounds_LifeCleric",
   "PowerLevel": 2
  },
  "Target_CureWounds_LifeCleric_3": {
   "Name": "Target_CureWounds_LifeCleric_3",
   "SpellType": "Target",
   "Parent": "Target_CureWounds_3",
   "ExtraDescription": "Shared_Target_CureWounds_LifeCleric_3_ExtraDescription",
   "RootSpellID": "Target_CureWounds_LifeCleric",
   "PowerLevel": 3
  },
  "Target_Darkvision": {
   "Name": "Target_Darkvision",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "ApplyStatus(DARKVISION,100,-1)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character() and Ally()",
   "Icon": "Spell_Evocation_Darkvision",
   "DisplayName": "Shared_Target_Darkvision_DisplayName",
   "Description": "Shared_Target_Darkvision_Description",
   "DescriptionParams": [
    "Distance(12)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(DARKVISION,100,-1)"
   ],
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_DarkVision_L1to3",
   "VocalComponentSound": "Vocal_Component_GrantDarkvision",
   "TargetSound": "Spell_Impact_Utility_DarkVision_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsMelee"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "f6c0d370-c167-484a-81ad-1265a4f8af91",
   "CastEffect": "bcd66fb0-b0bc-41d0-abba-ad443d63dd72",
   "TargetEffect": "32d71967-b080-4ac9-a1cf-c2829839bd90"
  },
  "Target_Distract": {
   "Name": "Target_Distract",
   "SpellType": "Target",
   "SpellProperties": [
    "ApplyStatus(DISTRACTED,100,1)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "not Ally() and not Dead()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Distract_DisplayName",
   "Description": "Shared_Target_Distract_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "1300f78c-4469-49d4-9b8d-d0febec0b211(CMBT_Skill_Command_01_Prepare),,",
    "58fe003c-1612-4052-8137-f44252f535d6(CMBT_Skill_Command_01_Antic),,",
    "0d7359e1-fb44-4854-a992-1ae64315f646(CMBT_Skill_Command_01_Attack),,",
    "34d8b715-1924-47bf-872b-d047cb0b582e(CMBT_Skill_Command_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsMelee"
   ],
   "SpellActionType": "Distract"
  },
  "Target_EnhanceAbility": {
   "Name": "Target_EnhanceAbility",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Transmutation",
   "ContainerSpells": [
    "Target_EnhanceAbility_BearsEndurance",
    "Target_EnhanceAbility_BullsStrength",
    "Target_EnhanceAbility_CatsGrace",
    "Target_EnhanceAbility_EaglesSplendor",
    "Target_EnhanceAbility_FoxsCunning",
    "Target_EnhanceAbility_OwlsWisdom"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "(Character() and Ally()) or Self()",
   "Icon": "Spell_Transmutation_EnhanceAbility",
   "DisplayName": "Shared_Target_EnhanceAbility_DisplayName",
   "Description": "Shared_Target_EnhanceAbility_Description",
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "e089d263-0588-4aab-aef9-55f4f4ece224(SPL_Druid_Buff_01_Prepare),,",
    ",,",
    "8252328a-66dd-4dc0-bbe0-00eea3204922(SPL_Somatic_Circle_1HandCCW_01_Cast),,",
    "982d842b-5d44-4ef6-ab33-14d5ae514a50(SPL_Somatic_Circle_1HandCCW_01_Recover),,",
    "1a116d74-9e8d-4abb-952b-bd644d8a4494(SPL_Druid_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration",
    "IsMelee",
    "IsLinkedSpellContainer"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MaximumTargets": 1,
   "MemoryCost": 1
  },
  "Target_EnhanceAbility_3": {
   "Name": "Target_EnhanceAbility_3",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility",
   "ContainerSpells": [
    "Target_EnhanceAbility_BearsEndurance_3",
    "Target_EnhanceAbility_BullsStrength_3",
    "Target_EnhanceAbility_CatsGrace_3",
    "Target_EnhanceAbility_EaglesSplendor_3",
    "Target_EnhanceAbility_FoxsCunning_3",
    "Target_EnhanceAbility_OwlsWisdom_3"
   ],
   "Description": "Shared_Target_EnhanceAbility_3_Description",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration",
    "IsMelee",
    "IsLinkedSpellContainer"
   ],
   "MaximumTargets": 2,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility",
   "PowerLevel": 3
  },
  "Target_EnhanceAbility_4": {
   "Name": "Target_EnhanceAbility_4",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility",
   "ContainerSpells": [
    "Target_EnhanceAbility_BearsEndurance_4",
    "Target_EnhanceAbility_BullsStrength_4",
    "Target_EnhanceAbility_CatsGrace_4",
    "Target_EnhanceAbility_EaglesSplendor_4",
    "Target_EnhanceAbility_FoxsCunning_4",
    "Target_EnhanceAbility_OwlsWisdom_4"
   ],
   "Description": "Shared_Target_EnhanceAbility_4_Description",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:4"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration",
    "IsMelee",
    "IsLinkedSpellContainer"
   ],
   "MaximumTargets": 3,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility",
   "PowerLevel": 4
  },
  "Target_EnhanceAbility_BearsEndurance": {
   "Name": "Target_EnhanceAbility_BearsEndurance",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility",
   "SpellContainerID": "Target_EnhanceAbility",
   "SpellProperties": [
    "ApplyStatus(BEARS_ENDURANCE, 100, -1)"
   ],
   "Icon": "Spell_Transmutation_EnhanceAbility_BearsEndurance",
   "DisplayName": "Shared_Target_EnhanceAbility_BearsEndurance_DisplayName",
   "Description": "Shared_Target_EnhanceAbility_BearsEndurance_Description",
   "DescriptionParams": 7,
   "TooltipStatusApply": [
    "ApplyStatus(BEARS_ENDURANCE, 100, -1)"
   ],
   "CastSound": "Spell_Cast_Buff_EnhanceAbilityBearsEndurance_L1to3",
   "TargetSound": "Spell_Impact_Buff_EnhanceAbilityBearsEndurance_L1to3",
   "VerbalIntent": "Buff",
   "MaximumTargets": 1,
   "MemoryCost": 1,
   "PrepareEffect": "15908bab-2ec3-4abc-a282-c3bf5f2b1387",
   "CastEffect": "bcd66fb0-b0bc-41d0-abba-ad443d63dd72",
   "TargetEffect": "4d80e719-6b5a-4a77-829c-f9b7f38fd966"
  },
  "Target_EnhanceAbility_BearsEndurance_3": {
   "Name": "Target_EnhanceAbility_BearsEndurance_3",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_BearsEndurance",
   "SpellContainerID": "Target_EnhanceAbility_3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 2,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_BearsEndurance",
   "PowerLevel": 3
  },
  "Target_EnhanceAbility_BearsEndurance_4": {
   "Name": "Target_EnhanceAbility_BearsEndurance_4",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_BearsEndurance",
   "SpellContainerID": "Target_EnhanceAbility_4",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:4"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 3,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_BearsEndurance",
   "PowerLevel": 4
  },
  "Target_EnhanceAbility_BullsStrength": {
   "Name": "Target_EnhanceAbility_BullsStrength",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility",
   "SpellContainerID": "Target_EnhanceAbility",
   "SpellProperties": [
    "ApplyStatus(BULLS_STRENGTH, 100, -1)"
   ],
   "Icon": "Spell_Transmutation_EnhanceAbility_BullsStrenght",
   "DisplayName": "Shared_Target_EnhanceAbility_BullsStrength_DisplayName",
   "Description": "Shared_Target_EnhanceAbility_BullsStrength_Description",
   "TooltipStatusApply": [
    "ApplyStatus(BULLS_STRENGTH, 100, -1)"
   ],
   "CastSound": "Spell_Cast_Buff_EnhanceAbilityBullsStrength_L1to3",
   "TargetSound": "Spell_Impact_Buff_EnhanceAbilityBullsStrength_L1to3",
   "VerbalIntent": "Buff",
   "MaximumTargets": 1,
   "MemoryCost": 1,
   "PrepareEffect": "5ea8f8f4-ba5f-4417-82f6-ed2ce4ffe264",
   "CastEffect": "bcd66fb0-b0bc-41d0-abba-ad443d63dd72",
   "TargetEffect": "fbb955f8-a644-451b-89bd-7950ad4cebad"
  },
  "Target_EnhanceAbility_BullsStrength_3": {
   "Name": "Target_EnhanceAbility_BullsStrength_3",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_BullsStrength",
   "SpellContainerID": "Target_EnhanceAbility_3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 2,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_BullsStrength",
   "PowerLevel": 3
  },
  "Target_EnhanceAbility_BullsStrength_4": {
   "Name": "Target_EnhanceAbility_BullsStrength_4",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_BullsStrength",
   "SpellContainerID": "Target_EnhanceAbility_4",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:4"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 3,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_BullsStrength",
   "PowerLevel": 4
  },
  "Target_EnhanceAbility_CatsGrace": {
   "Name": "Target_EnhanceAbility_CatsGrace",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility",
   "SpellContainerID": "Target_EnhanceAbility",
   "SpellProperties": [
    "ApplyStatus(CATS_GRACE, 100, -1)"
   ],
   "Icon": "Spell_Transmutation_EnhanceAbility_CatsGrace",
   "DisplayName": "Shared_Target_EnhanceAbility_CatsGrace_DisplayName",
   "Description": "Shared_Target_EnhanceAbility_CatsGrace_Description",
   "TooltipStatusApply": [
    "ApplyStatus(CATS_GRACE, 100, -1)"
   ],
   "CastSound": "Spell_Cast_Buff_EnhanceAbilityCatsGrace_L1to3",
   "TargetSound": "Spell_Impact_Buff_EnhanceAbilityCatsGrace_L1to3",
   "VerbalIntent": "Buff",
   "MaximumTargets": 1,
   "MemoryCost": 1,
   "PrepareEffect": "fbce561c-fd42-4626-bf04-8461f46dfbc8",
   "CastEffect": "bcd66fb0-b0bc-41d0-abba-ad443d63dd72",
   "TargetEffect": "474d55bf-bce6-401b-872a-1922c8d54d99"
  },
  "Target_EnhanceAbility_CatsGrace_3": {
   "Name": "Target_EnhanceAbility_CatsGrace_3",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_CatsGrace",
   "SpellContainerID": "Target_EnhanceAbility_3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 2,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_CatsGrace",
   "PowerLevel": 3
  },
  "Target_EnhanceAbility_CatsGrace_4": {
   "Name": "Target_EnhanceAbility_CatsGrace_4",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_CatsGrace",
   "SpellContainerID": "Target_EnhanceAbility_4",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:4"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 3,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_CatsGrace",
   "PowerLevel": 4
  },
  "Target_EnhanceAbility_EaglesSplendor": {
   "Name": "Target_EnhanceAbility_EaglesSplendor",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility",
   "SpellContainerID": "Target_EnhanceAbility",
   "SpellProperties": [
    "ApplyStatus(EAGLES_SPLENDOR, 100, -1)"
   ],
   "Icon": "Spell_Transmutation_EnhanceAbility_EaglesSplendor",
   "DisplayName": "Shared_Target_EnhanceAbility_EaglesSplendor_DisplayName",
   "Description": "Shared_Target_EnhanceAbility_EaglesSplendor_Description",
   "TooltipStatusApply": [
    "ApplyStatus(EAGLES_SPLENDOR, 100, -1)"
   ],
   "CastSound": "Spell_Cast_Buff_EnhanceAbilityEaglesSplendor_L1to3",
   "TargetSound": "Spell_Impact_Buff_EnhanceAbilityEaglesSplendor_L1to3",
   "VerbalIntent": "Buff",
   "MaximumTargets": 1,
   "MemoryCost": 1,
   "PrepareEffect": "fa18f4ad-7f12-47fc-9fe7-3a157e0ee260",
   "CastEffect": "bcd66fb0-b0bc-41d0-abba-ad443d63dd72",
   "TargetEffect": "70d8d0dc-e4ff-42ed-8503-09bbf2fbbeda"
  },
  "Target_EnhanceAbility_EaglesSplendor_3": {
   "Name": "Target_EnhanceAbility_EaglesSplendor_3",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_EaglesSplendor",
   "SpellContainerID": "Target_EnhanceAbility_3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 2,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_EaglesSplendor",
   "PowerLevel": 3
  },
  "Target_EnhanceAbility_EaglesSplendor_4": {
   "Name": "Target_EnhanceAbility_EaglesSplendor_4",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_EaglesSplendor",
   "SpellContainerID": "Target_EnhanceAbility_4",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:4"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 3,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_EaglesSplendor",
   "PowerLevel": 4
  },
  "Target_EnhanceAbility_FoxsCunning": {
   "Name": "Target_EnhanceAbility_FoxsCunning",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility",
   "SpellContainerID": "Target_EnhanceAbility",
   "SpellProperties": [
    "ApplyStatus(FOXS_CUNNING, 100, -1)"
   ],
   "Icon": "Spell_Transmutation_EnhanceAbility_FoxsCunning",
   "DisplayName": "Shared_Target_EnhanceAbility_FoxsCunning_DisplayName",
   "Description": "Shared_Target_EnhanceAbility_FoxsCunning_Description",
   "TooltipStatusApply": [
    "ApplyStatus(FOXS_CUNNING, 100, -1)"
   ],
   "CastSound": "Spell_Cast_Buff_EnhanceAbilityFoxsCunning_L1to3",
   "TargetSound": "Spell_Impact_Buff_EnhanceAbilityFoxsCunning_L1to3",
   "VerbalIntent": "Buff",
   "MaximumTargets": 1,
   "MemoryCost": 1,
   "PrepareEffect": "1ee00587-5c1a-4068-aba3-6bfd5cb8f92f",
   "CastEffect": "bcd66fb0-b0bc-41d0-abba-ad443d63dd72",
   "TargetEffect": "587df9a6-10c6-4125-ab0a-73c477018a4b"
  },
  "Target_EnhanceAbility_FoxsCunning_3": {
   "Name": "Target_EnhanceAbility_FoxsCunning_3",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_FoxsCunning",
   "SpellContainerID": "Target_EnhanceAbility_3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 2,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_FoxsCunning",
   "PowerLevel": 3
  },
  "Target_EnhanceAbility_FoxsCunning_4": {
   "Name": "Target_EnhanceAbility_FoxsCunning_4",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_FoxsCunning",
   "SpellContainerID": "Target_EnhanceAbility_4",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:4"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 3,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_FoxsCunning",
   "PowerLevel": 4
  },
  "Target_EnhanceAbility_OwlsWisdom": {
   "Name": "Target_EnhanceAbility_OwlsWisdom",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility",
   "SpellContainerID": "Target_EnhanceAbility",
   "SpellProperties": [
    "ApplyStatus(OWLS_WISDOM, 100, -1)"
   ],
   "Icon": "Spell_Transmutation_EnhanceAbility_OwlsWisdom",
   "DisplayName": "Shared_Target_EnhanceAbility_OwlsWisdom_DisplayName",
   "Description": "Shared_Target_EnhanceAbility_OwlsWisdom_Description",
   "TooltipStatusApply": [
    "ApplyStatus(OWLS_WISDOM, 100, -1)"
   ],
   "CastSound": "Spell_Cast_Buff_EnhanceAbilityOwlsWisdom_L1to3",
   "TargetSound": "Spell_Impact_Buff_EnhanceAbilityOwlsWisdom_L1to3",
   "VerbalIntent": "Buff",
   "MaximumTargets": 1,
   "MemoryCost": 1,
   "PrepareEffect": "1082b19d-920d-423f-b787-3c66da153f47",
   "CastEffect": "bcd66fb0-b0bc-41d0-abba-ad443d63dd72",
   "TargetEffect": "b01d8d96-abb3-4e88-8e41-ce12c7dbf30a"
  },
  "Target_EnhanceAbility_OwlsWisdom_3": {
   "Name": "Target_EnhanceAbility_OwlsWisdom_3",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_OwlsWisdom",
   "SpellContainerID": "Target_EnhanceAbility_3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 2,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_OwlsWisdom",
   "PowerLevel": 3
  },
  "Target_EnhanceAbility_OwlsWisdom_4": {
   "Name": "Target_EnhanceAbility_OwlsWisdom_4",
   "SpellType": "Target",
   "Parent": "Target_EnhanceAbility_OwlsWisdom",
   "SpellContainerID": "Target_EnhanceAbility_4",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:4"
   ],
   "VerbalIntent": "Buff",
   "MaximumTargets": 3,
   "MemoryCost": 1,
   "RootSpellID": "Target_EnhanceAbility_OwlsWisdom",
   "PowerLevel": 4
  },
  "Target_Goodberry": {
   "Name": "Target_Goodberry",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "SummonInInventory(de6b186e-839e-41d0-87af-a1a9d9327785,-1,4,false,false,false,,,)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Player() and not Dead() and not Summon()",
   "Icon": "Spell_Transmutation_Goodberry",
   "DisplayName": "Shared_Target_Goodberry_DisplayName",
   "Description": "Shared_Target_Goodberry_Description",
   "DescriptionParams": [
    "RegainHitPoints(1d4)"
   ],
   "ExtraDescription": "Shared_Target_Goodberry_ExtraDescription",
   "TooltipDamageList": [
    "RegainHitPoints(4d4)"
   ],
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Summon_Goodberry_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "7552fe7c-f098-42a5-a312-9e9cd1fd6f52(SPL_Druid_Summon_01_Prepare),,",
    ",,",
    "29cc8ef2-e45e-4513-8f98-085d0dad7bc1(SPL_Somatic_Target_Swipe_01_Cast),,",
    "bb428832-db99-4236-8a81-a2737b81d0cc(SPL_Somatic_Target_Swipe_01_Recover),,",
    "da2204ae-af10-408e-8102-9091e9312800(SPL_Druid_Summon_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Summon",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee"
   ],
   "RechargeValues": "4-6",
   "MemoryCost": 1,
   "PrepareEffect": "f2e02f51-70c2-482b-bcac-2dac285fda14",
   "CastEffect": "e7d9a675-3a62-4eb5-9d90-f41884b1f524",
   "TargetEffect": "45f03e64-4e97-42a3-8597-af369687c896"
  },
  "Target_Goodberry_2": {
   "Name": "Target_Goodberry_2",
   "SpellType": "Target",
   "Parent": "Target_Goodberry",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_Goodberry",
   "PowerLevel": 2
  },
  "Target_Guidance": {
   "Name": "Target_Guidance",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Divination",
   "SpellProperties": [
    "ApplyStatus(GUIDANCE, 100, 10)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character() and Ally()",
   "Icon": "Spell_Divination_Guidance",
   "DisplayName": "Shared_Target_Guidance_DisplayName",
   "Description": "Shared_Target_Guidance_Description",
   "TooltipStatusApply": [
    "ApplyStatus(GUIDANCE, 100, 10)"
   ],
   "PreviewCursor": "Cast",
   "CastSelfAnimation": "8252328a-66dd-4dc0-bbe0-00eea3204922(SPL_Somatic_Circle_1HandCCW_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_Guidance_L1to3",
   "TargetSound": "Spell_Impact_Buff_Guidance_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "8252328a-66dd-4dc0-bbe0-00eea3204922(SPL_Somatic_Circle_1HandCCW_01_Cast),,",
    "982d842b-5d44-4ef6-ab33-14d5ae514a50(SPL_Somatic_Circle_1HandCCW_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration",
    "IsMelee"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "PrepareEffect": "78b419eb-8ada-47f4-904a-5f335971a331",
   "CastEffect": "5d7a0ad1-ac47-4f03-8c36-cce8184e1df0",
   "TargetEffect": "5eccabb5-4b4f-4d3a-87ed-69a2c27b7f18"
  },
  "Target_Healer_Heal": {
   "Name": "Target_Healer_Heal",
   "SpellType": "Target",
   "TargetRadius": "1.5",
   "TargetConditions": "Character() and Ally()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Healer_Heal_DisplayName",
   "Description": "Shared_Target_Healer_Heal_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    "194b3bb6-fbd5-44a0-bec5-c8b4d8ff4871(SPL_Arcane_Buff_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellFlags": [
    "IsMelee"
   ],
   "MaximumTargets": 1
  },
  "Target_Help": {
   "Name": "Target_Help",
   "SpellType": "Target",
   "TargetRadius": "1.5",
   "TargetConditions": "Character() and not Self() and (not Enemy() or Player()) and HasHelpableCondition()",
   "Icon": "Action_Help",
   "DisplayName": "Shared_Target_Help_DisplayName",
   "Description": "Shared_Target_Help_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Help",
   "TargetSound": "Action_Impact_Help",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    ",,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "DualWieldingSpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    ",,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsMelee"
   ],
   "SpellActionType": "Help",
   "SpellAnimationType": "Assisting",
   "SpellAnimationIntentType": "Peaceful",
   "PrepareEffect": "810a605a-8a5f-4f67-8407-505267f0b1f2",
   "TargetEffect": "0f7dfee5-ad45-4cc4-908c-06f6bd06acab"
  },
  "Target_Identify": {
   "Name": "Target_Identify",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Divination",
   "TargetRadius": "1.5",
   "Icon": "Spell_Divination_Identify",
   "DisplayName": "Shared_Target_Identify_DisplayName",
   "Description": "Shared_Target_Identify_Description",
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_Identify",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "c7022507-086a-40f6-a64e-3a9865d73900(SPL_Material_Combust_01),,:2cb93c5c-26fd-4557-a677-74d83f886b17(SPL_Somatic_TouchTarget_01),,",
    ",,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee"
   ],
   "MemoryCost": 1
  },
  "Target_InflictWounds": {
   "Name": "Target_InflictWounds",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Necromancy",
   "TargetRadius": "1.5",
   "SpellRoll": "Attack(AttackType.MeleeSpellAttack)",
   "SpellSuccess": [
    "DealDamage(3d10,Necrotic)"
   ],
   "TargetConditions": "Character() and not Self()",
   "Icon": "Spell_Necromancy_InflictWounds",
   "DisplayName": "Shared_Target_InflictWounds_DisplayName",
   "Description": "Shared_Target_InflictWounds_Description",
   "DescriptionParams": [
    "DealDamage(3d10,Necrotic)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d10,Necrotic)"
   ],
   "TooltipAttackSave": [
    "MeleeSpellAttack"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Necrotic_InflictWounds_L1to3",
   "TargetSound": "Spell_Impact_Damage_Necrotic_InflictWounds_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee",
    "IsSpell",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "a847f5ad-ec44-4b31-916f-fc3aaa0f1746",
   "CastEffect": "7bce304f-a409-495e-a092-012b727b0914",
   "TargetEffect": "1d00a392-5444-4533-b125-d4cafc7e496a"
  },
  "Target_InflictWounds_2": {
   "Name": "Target_InflictWounds_2",
   "SpellType": "Target",
   "Parent": "Target_InflictWounds",
   "SpellSuccess": [
    "DealDamage(4d10,Necrotic)"
   ],
   "Icon": "Spell_Necromancy_InflictWounds_2",
   "DescriptionParams": [
    "DealDamage(4d10,Necrotic)"
   ],
   "TooltipDamageList": [
    "DealDamage(4d10,Necrotic)"
   ],
   "TooltipAttackSave": [
    "MeleeSpellAttack"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_InflictWounds",
   "PowerLevel": 2
  },
  "Target_Invisibility": {
   "Name": "Target_Invisibility",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Illusion",
   "SpellProperties": [
    "AI_IGNORE:ApplyStatus(INVISIBILITY,100,-1)",
    "AI_ONLY:ApplyStatus(INVISIBILITY,100,2)"
   ],
   "TargetRadius": "1.5",
   "Icon": "Spell_Illusion_Invisibility",
   "DisplayName": "Shared_Target_Invisibility_DisplayName",
   "Description": "Shared_Target_Invisibility_Description",
   "ExtraDescription": "Shared_Target_Invisibility_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(INVISIBILITY,100,-1)"
   ],
   "PreviewCursor": "Cast",
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_Invisibility_L1to3",
   "VocalComponentSound": "Vocal_Component_Invisibility",
   "TargetSound": "Spell_Impact_Utility_Invisibility_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee",
    "IsConcentration",
    "UnavailableInDialogs"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "4f8e353e-c04e-45c3-880b-d10885fd091f",
   "TargetEffect": "68b1219a-ccc2-4b29-bb42-b18996de3b4d"
  },
  "Target_Jump": {
   "Name": "Target_Jump",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "ApplyStatus(LONG_JUMP,100,10)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character()",
   "Icon": "Spell_Transmutation_LongJump",
   "DisplayName": "Shared_Target_Jump_DisplayName",
   "Description": "Shared_Target_Jump_Description",
   "TooltipStatusApply": [
    "ApplyStatus(LONG_JUMP,100,10)"
   ],
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_Jump_L1to3",
   "TargetSound": "Spell_Impact_Utility_Jump_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "IsMelee",
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "33302a46-4a12-41dd-8845-6b7314d50022",
   "CastEffect": "ded76bc1-5cb9-43cd-a209-c93cc87d4f70",
   "TargetEffect": "090b5af2-c54d-4d1e-ae01-e3448e343a35"
  },
  "Target_Jump_Githyanki": {
   "Name": "Target_Jump_Githyanki",
   "SpellType": "Target",
   "Parent": "Target_Jump",
   "Cooldown": "OncePerRest",
   "DisplayName": "Shared_Target_Jump_Githyanki_DisplayName",
   "Description": "Shared_Target_Jump_Githyanki_Description",
   "CastSound": "Spell_Cast_Utility_Jump_L1to3",
   "TargetSound": "Spell_Impact_Utility_Jump_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_Jump_2": {
   "Name": "Target_Jump_2",
   "SpellType": "Target",
   "Parent": "Target_Jump",
   "Icon": "Spell_Transmutation_LongJump_2",
   "CastSound": "Spell_Cast_Utility_Jump_L1to3",
   "TargetSound": "Spell_Impact_Utility_Jump_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_Jump",
   "PowerLevel": 2
  },
  "Target_KnockOut_Person": {
   "Name": "Target_KnockOut_Person",
   "SpellType": "Target",
   "AIFlags": [
    "CanNotUse"
   ],
   "TargetRadius": "1.5",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "SpellSuccess": [
    "DealDamage(1d4, Bludgeoning, Nonmagical, Nonlethal)",
    "TARGET:IF(LethalHP() and not Player()):ApplyStatus(KNOCKED_OUT,100,-1)",
    "TARGET:IF(LethalHP() and Player()):ApplyStatus(KNOCKED_DOWN,100,3)"
   ],
   "Icon": "Action_KnockOut",
   "DisplayName": "Shared_Target_KnockOut_Person_DisplayName",
   "Description": "Shared_Target_KnockOut_Person_Description",
   "DescriptionParams": [
    "DealDamage(1d4, Bludgeoning)"
   ],
   "ExtraDescription": "Shared_Target_KnockOut_Person_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(1d4, Bludgeoning)"
   ],
   "TooltipAttackSave": [
    "MeleeWeaponAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(KNOCKED_OUT,100,-1)"
   ],
   "PreviewCursor": "Melee",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_KnockOutPerson",
   "TargetSound": "Action_Impact_KnockOutPerson",
   "CycleConditions": "Enemy() and not Self() and not Summon()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "e4c33fe4-af36-47b7-9f61-51f2f6924210(CMBT_Skill_Subdual_01_Prepare),,",
    "9a52d1ad-09df-473a-bb0c-039b234a37af(CMBT_Skill_Subdual_01_Antic),,",
    "962fa683-1f5e-46c0-8323-596af00d2954(CMBT_Skill_Subdual_01_Attack),,",
    "ea68cfbb-960e-409f-a967-fdc27ba36378(CMBT_Skill_Subdual_01_Recover),,",
    "6574bfb9-d601-4760-bd53-867747514006(CMBT_Skill_Subdual_01_Loop),,",
    "66cf0be9-de93-4821-a755-32fdda2743e8(CMBT_Skill_Subdual_01_Dash),,"
   ],
   "DualWieldingSpellAnimation": [
    "07fb29aa-cde0-41cc-8014-204f97eb8849(CMBT_Skill_Subdual_02_Attack_Prepare),,",
    "fe385f62-7e9b-4517-ac55-32e5fa3f2204(CMBT_Skill_Subdual_02_Attack_Antic),,",
    "dd52220e-8435-41b3-b700-445a1c01e464(CMBT_Skill_Subdual_02_Attack_Attack),,",
    "ff694201-8c8a-440f-99d4-d3e7abb71b49(CMBT_Skill_Subdual_02_Attack_Recover),,",
    "25c8454a-5058-4605-a9f0-65988688eb56(CMBT_Skill_Subdual_02_Attack_Loop),,",
    "35691af0-4345-4b6a-b4ef-ff982e6cc116(CMBT_Skill_Subdual_02_Attack_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "SpellActionType": "Knockout",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "9c26a632-b09a-49c3-8139-77c602ed26cf",
   "CastEffect": "85c083b6-5c06-45fe-9bf9-d21c1fd83112",
   "TargetEffect": "9e84837a-2e41-4c37-8875-5ebec7ff80ad"
  },
  "Target_KnockOut_Person_Guaranteed": {
   "Name": "Target_KnockOut_Person_Guaranteed",
   "SpellType": "Target",
   "Parent": "Target_KnockOut_Person",
   "SpellSuccess": [
    "TARGET:IF(not Player()):ApplyStatus(KNOCKED_OUT,100,-1)",
    "TARGET:IF(Player()):ApplyStatus(KNOCKED_DOWN,100,3)"
   ]
  },
  "Target_LearnSpell": {
   "Name": "Target_LearnSpell",
   "SpellType": "Target",
   "TargetRadius": "1.5",
   "TargetConditions": "Item()",
   "Icon": "Skill_Wizard_LearnSpell",
   "DisplayName": "Shared_Target_LearnSpell_DisplayName",
   "Description": "Shared_Target_LearnSpell_Description",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "1655b1c3-8524-4281-adef-48d3ca6e3c7a(SPL_Scroll_01_Prepare),,",
    ",,",
    "b30f46ab-8718-48f1-b1dd-4a2ab030bf4f(SPL_Scroll_01_Cast),,",
    "8b2a8ec1-cf8a-4b72-9efd-5d8ee23806d8(SPL_Scroll_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsMelee"
   ],
   "MemoryCost": 1
  },
  "Target_LesserRestoration": {
   "Name": "Target_LesserRestoration",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "RemoveStatus(SG_Poisoned)",
    "RemoveStatus(SG_Disease)",
    "RemoveStatus(PARALYZED)",
    "RemoveStatus(DEAF)",
    "RemoveStatus(SG_Blinded)",
    "RemoveStatus(HOLD_PERSON)",
    "RemoveStatus(ASTARION_WEAK)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character()",
   "Icon": "Spell_Abjuration_LesserRestoration",
   "DisplayName": "Shared_Target_LesserRestoration_DisplayName",
   "Description": "Shared_Target_LesserRestoration_Description",
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Healing_LesserRestoration_L1to3",
   "VocalComponentSound": "Vocal_Component_RemoveNegativeStatuses",
   "TargetSound": "Spell_Impact_Healing_LesserRestoration_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsMelee"
   ],
   "RechargeValues": "4-6",
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "96a51ac8-2e7e-4718-bb62-dcfd18964a02",
   "CastEffect": "b3087bdc-96ad-495a-9199-18846152088d",
   "TargetEffect": "0b923965-fccd-41cc-9227-f886c427f65f"
  },
  "Target_LesserRestoration_LifeCleric": {
   "Name": "Target_LesserRestoration_LifeCleric",
   "SpellType": "Target",
   "Parent": "Target_LesserRestoration",
   "ExtraDescription": "Shared_Target_LesserRestoration_LifeCleric_ExtraDescription"
  },
  "Target_Light": {
   "Name": "Target_Light",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Evocation",
   "TargetRadius": "1.5",
   "SpellRoll": "Item() or SpellAutoResolveOnAlly(Ability.Dexterity, SourceSpellDC(),true)",
   "SpellSuccess": [
    "IF(Item()):ApplyStatus(LIGHT,100,100)",
    "IF(not Item()):ApplyEquipmentStatus(MainHand,LIGHT,100,100)"
   ],
   "TargetConditions": "Item() or HasWeaponInMainHand()",
   "Icon": "Spell_Evocation_Light",
   "DisplayName": "Shared_Target_Light_DisplayName",
   "Description": "Shared_Target_Light_Description",
   "TooltipStatusApply": [
    "ApplyStatus(LIGHT,100,100)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_Light_L0",
   "VocalComponentSound": "Vocal_Component_Light",
   "TargetSound": "Spell_Impact_Utility_Light_L0",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "IsMelee"
   ],
   "MaximumTargets": 1,
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "0198563f-c48b-45e0-afb5-46ef9576adff",
   "TargetEffect": "b94fcfde-d824-4e7d-b9c5-833a50b66537"
  },
  "Target_Longstrider": {
   "Name": "Target_Longstrider",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "ApplyStatus(LONGSTRIDER,100,-1)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character()",
   "Icon": "Spell_Transmutation_Longstrider",
   "DisplayName": "Shared_Target_Longstrider_DisplayName",
   "Description": "Shared_Target_Longstrider_Description",
   "DescriptionParams": [
    "Distance(3)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(LONGSTRIDER,100,-1)"
   ],
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_Longstrider_L1to3",
   "VocalComponentSound": "Vocal_Component_BuffMovement",
   "TargetSound": "Spell_Impact_Utility_Longstrider_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "f6c0d370-c167-484a-81ad-1265a4f8af91",
   "CastEffect": "e3b0d8d1-b44f-4ef2-a382-7d6783f8fe6c",
   "TargetEffect": "68a1fe0b-980b-4b94-9404-822618030a59"
  },
  "Target_Longstrider_2": {
   "Name": "Target_Longstrider_2",
   "SpellType": "Target",
   "Parent": "Target_Longstrider",
   "AreaRadius": 2,
   "Icon": "Spell_Transmutation_Longstrider_2",
   "Description": "Shared_Target_Longstrider_2_Description",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "MaximumTargets": 2,
   "RootSpellID": "Target_Longstrider",
   "PowerLevel": 2
  },
  "Target_MageArmor": {
   "Name": "Target_MageArmor",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(MAGE_ARMOR,100,-1)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character() and not Enemy() and not WearingArmor()",
   "Icon": "Spell_Abjuration_MageArmor",
   "DisplayName": "Shared_Target_MageArmor_DisplayName",
   "Description": "Shared_Target_MageArmor_Description",
   "ExtraDescription": "Shared_Target_MageArmor_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(MAGE_ARMOR,100,-1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_MageArmor_L1to3",
   "TargetSound": "Spell_Impact_Buff_MageArmor_L1to3",
   "CycleConditions": "Ally() and not Dead() and not WearingArmor()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "5e7e63e1-0e69-46e7-ade7-fe3dadcc9184(SPL_Somatic_Cone_01_Cast),,",
    "e9ad50df-e7f1-43a0-b782-4c08f92b0f5a(SPL_Somatic_Cone_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "d39761b2-330d-455b-9225-b54dedc8c1c6",
   "CastEffect": "0a0b5aa5-a6d0-464d-8fa1-20a1c48530f2",
   "TargetEffect": "99ae486b-9055-4a75-b536-e57d62f15c0e"
  },
  "Target_MageArmor_2": {
   "Name": "Target_MageArmor_2",
   "SpellType": "Target",
   "Parent": "Target_MageArmor",
   "Icon": "Spell_Abjuration_MageArmor_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_MageArmor",
   "PowerLevel": 2
  },
  "Target_Mending": {
   "Name": "Target_Mending",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Transmutation",
   "TargetRadius": "1.5",
   "TargetConditions": "Item()",
   "Icon": "Spell_Transmutation_Mending",
   "DisplayName": "Shared_Target_Mending_DisplayName",
   "Description": "Shared_Target_Mending_Description",
   "CastSelfAnimation": "efbf3ee5-7340-4b29-8ab5-113b004a8e7b(SPL_Somatic_Self_Touch_01_Cast)",
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_MendObject",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasSomaticComponent",
    "HasVerbalComponent",
    "IsSpell",
    "IsMelee"
   ],
   "PrepareEffect": "7d4e6824-a7fd-4ee5-a35a-5ca243c142ab",
   "CastEffect": "4d5f1c01-492e-4348-b6f2-bcfa1ce8c1e0",
   "TargetEffect": "b96435a1-5866-4d37-b692-022a614fe7e4"
  },
  "Target_ProtectionFromEvilAndGood": {
   "Name": "Target_ProtectionFromEvilAndGood",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(PROTECTION_FROM_EVIL_AND_GOOD,100,-1)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character() and not Enemy()",
   "Icon": "Spell_Abjuration_ProtectionFromEvilAndGood",
   "DisplayName": "Shared_Target_ProtectionFromEvilAndGood_DisplayName",
   "Description": "Shared_Target_ProtectionFromEvilAndGood_Description",
   "ExtraDescription": "Shared_Target_ProtectionFromEvilAndGood_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(PROTECTION_FROM_EVIL_AND_GOOD,100,-1)"
   ],
   "CastSelfAnimation": "efbf3ee5-7340-4b29-8ab5-113b004a8e7b(SPL_Somatic_Self_Touch_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_ProtectionFromEvilAndGood_L1to3",
   "VocalComponentSound": "Vocal_Component_Protection",
   "TargetSound": "Spell_Impact_Buff_ProtectionFromEvilAndGood_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell",
    "IsMelee"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "6c1a552e-5a05-4a00-8da0-4ff81c670cc7",
   "CastEffect": "ed63ee77-5696-485c-9905-8cb10128e5a5",
   "TargetEffect": "8871664c-c66b-4f14-96e7-c174bc36b90b"
  },
  "Target_ProtectionFromEvilAndGood_2": {
   "Name": "Target_ProtectionFromEvilAndGood_2",
   "SpellType": "Target",
   "Parent": "Target_ProtectionFromEvilAndGood",
   "Icon": "Spell_Abjuration_ProtectionFromEvilAndGood_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_ProtectionFromEvilAndGood",
   "PowerLevel": 2
  },
  "Target_ProtectionFromEvilAndGood_KeeperOfTheVeil": {
   "Name": "Target_ProtectionFromEvilAndGood_KeeperOfTheVeil",
   "SpellType": "Target",
   "Parent": "Target_ProtectionFromEvilAndGood",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_ProtectionFromPoison": {
   "Name": "Target_ProtectionFromPoison",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "RemoveStatus(SG_Poisoned)",
    " ApplyStatus(PROTECTION_FROM_POISON, 100, -1)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character()",
   "Icon": "Spell_Abjuration_ProtectionFromPoison",
   "DisplayName": "Shared_Target_ProtectionFromPoison_DisplayName",
   "Description": "Shared_Target_ProtectionFromPoison_Description",
   "TooltipStatusApply": [
    "ApplyStatus(PROTECTION_FROM_POISON, 100, -1)"
   ],
   "CastSelfAnimation": "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_ProtectionFromPoison_L1to3",
   "VocalComponentSound": "Vocal_Component_ResistPoison",
   "TargetSound": "Spell_Impact_Buff_ProtectionFromPoison_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "e089d263-0588-4aab-aef9-55f4f4ece224(SPL_Druid_Buff_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "1a116d74-9e8d-4abb-952b-bd644d8a4494(SPL_Druid_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "7232adb5-d69c-4346-9037-0bc4b674f287",
   "CastEffect": "0b10b1d1-ca47-4686-bc1a-2dbdbbfa3e79",
   "TargetEffect": "6a19b82e-e9ff-4dcf-9eaf-0a35a4a6109e"
  },
  "Target_Resistance": {
   "Name": "Target_Resistance",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(RESISTANCE,100,10)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Character() and Ally()",
   "Icon": "Spell_Abjuration_Resistance",
   "DisplayName": "Shared_Target_Resistance_DisplayName",
   "Description": "Shared_Target_Resistance_Description",
   "TooltipStatusApply": [
    "ApplyStatus(RESISTANCE,100,10)"
   ],
   "PreviewCursor": "Cast",
   "CastSelfAnimation": "efbf3ee5-7340-4b29-8ab5-113b004a8e7b(SPL_Somatic_Self_Touch_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_Resistance_L1to3",
   "VocalComponentSound": "Vocal_Component_ResistanceGeneric",
   "TargetSound": "Spell_Impact_Buff_Resistance_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell",
    "IsMelee"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "PrepareEffect": "c238f860-37c1-47b1-8030-14fa6a1bdfa1",
   "CastEffect": "33ba4bed-e160-4019-9fbc-3a4d3bb924a3",
   "TargetEffect": "fb919edf-4dce-45d8-9338-91f26bccec31"
  },
  "Target_ShockingGrasp": {
   "Name": "Target_ShockingGrasp",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:SurfaceChange(Electrify)"
   ],
   "TargetRadius": "1.5",
   "SpellRoll": "Attack(AttackType.MeleeSpellAttack,HasMetalArmor())",
   "SpellSuccess": [
    "ApplyStatus(SHOCKING_GRASP,100,1)",
    "DealDamage(1d8,Lightning)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "Spell_Evocation_ShockingGrasp",
   "DisplayName": "Shared_Target_ShockingGrasp_DisplayName",
   "Description": "Shared_Target_ShockingGrasp_Description",
   "DescriptionParams": [
    "DealDamage(1d8,Lightning)"
   ],
   "ExtraDescription": "Shared_Target_ShockingGrasp_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(1d8,Lightning)"
   ],
   "TooltipAttackSave": [
    "MeleeSpellAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(SHOCKING_GRASP,100,1)"
   ],
   "CastSelfAnimation": "efbf3ee5-7340-4b29-8ab5-113b004a8e7b(SPL_Somatic_Self_Touch_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Lightning_ShockingGrasp_L0",
   "TargetSound": "Spell_Impact_Damage_Lightning_ShockingGrasp_L0",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsMelee",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Electric",
   "PrepareEffect": "fb951b81-3c9f-4e9d-a89b-bf40b57e719d",
   "CastEffect": "10fc784a-4312-47a8-a6b8-6b529c646ac4",
   "TargetEffect": "a3e2368b-f486-4cfc-b04a-b02e23383280"
  },
  "Target_SpareTheDying": {
   "Name": "Target_SpareTheDying",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Necromancy",
   "SpellProperties": [
    "Stabilize()"
   ],
   "TargetRadius": "1.5",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_SpareTheDying_DisplayName",
   "Description": "Shared_Target_SpareTheDying_Description",
   "DescriptionParams": [
    "RegainHitPoints(0)"
   ],
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_Stabilize",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsMelee"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MaximumTargets": 1,
   "PrepareEffect": "e816a45f-6458-4e1a-acd9-476103d37c1c",
   "CastEffect": "3463a904-e36d-4bce-8479-d2b5939a8baf",
   "TargetEffect": "e716a8d6-0e57-411a-83aa-76c94082f757"
  },
  "Target_SINGLE": {
   "Name": "Target_SINGLE",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_AnimalFriendship": {
   "Name": "Target_AnimalFriendship",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Enchantment",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC(),AdvantageOnCharmed())",
   "SpellSuccess": [
    "ApplyStatus(CHARMED,100,10)"
   ],
   "Icon": "Spell_Enchantment_AnimalFriendship",
   "DisplayName": "Shared_Target_AnimalFriendship_DisplayName",
   "Description": "Shared_Target_AnimalFriendship_Description",
   "ExtraDescription": "Shared_Target_AnimalFriendship_ExtraDescription",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(CHARMED,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_AnimalFriendship_L1to3",
   "VocalComponentSound": "Vocal_Component_CharmAnimal",
   "TargetSound": "Spell_Impact_Control_AnimalFriendship_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension"
   ],
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "d2ef6b50-243f-478d-85c6-892086a1477e",
   "TargetEffect": "e1b340b6-78a9-413a-bb7e-8299848238ae"
  },
  "Target_AnimalFriendship_2": {
   "Name": "Target_AnimalFriendship_2",
   "SpellType": "Target",
   "Parent": "Target_AnimalFriendship",
   "Icon": "Spell_Enchantment_AnimalFriendship_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_AnimalFriendship",
   "PowerLevel": 2
  },
  "Target_Bane": {
   "Name": "Target_Bane",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Enchantment",
   "TargetRadius": 9,
   "AreaRadius": 9,
   "SpellRoll": "not SavingThrow(Ability.Charisma, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(BANE, 100, 10)"
   ],
   "TargetConditions": "not Dead() and not Ally() and not Item()",
   "Icon": "Spell_Enchantment_Bane",
   "DisplayName": "Shared_Target_Bane_DisplayName",
   "Description": "Shared_Target_Bane_Description",
   "TooltipAttackSave": [
    "Charisma"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(BANE, 100, 10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_Bane_L1to3",
   "TargetSound": "Spell_Impact_Debuff_Bane_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "10caea0e-c949-4d91-8ab7-3b50019dd054(SPL_Somatic_Aoe_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell",
    "IsHarmful"
   ],
   "MaximumTargets": 3,
   "MemoryCost": 1,
   "PrepareEffect": "b090825a-0728-4566-a02b-056a188cc347",
   "CastEffect": "38776222-db33-4b53-9e23-ca3b47ab58cb",
   "TargetEffect": "c6846cf3-6ea3-4551-b867-3554eaa6aeae",
   "PositionEffect": "7db045f9-83ac-4768-88c8-48563b685a9d"
  },
  "Target_Bane_2": {
   "Name": "Target_Bane_2",
   "SpellType": "Target",
   "Parent": "Target_Bane",
   "Icon": "Spell_Enchantment_Bane_2",
   "Description": "Shared_Target_Bane_2_Description",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "MaximumTargets": 4,
   "RootSpellID": "Target_Bane",
   "PowerLevel": 2
  },
  "Target_Bane_ThiefOfFiveFates": {
   "Name": "Target_Bane_ThiefOfFiveFates",
   "SpellType": "Target",
   "Parent": "Target_Bane",
   "Cooldown": "OncePerRest",
   "DisplayName": "Shared_Target_Bane_ThiefOfFiveFates_DisplayName",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ]
  },
  "Target_Bane_ThiefOfFiveFates_2": {
   "Name": "Target_Bane_ThiefOfFiveFates_2",
   "SpellType": "Target",
   "Parent": "Target_Bane_ThiefOfFiveFates",
   "Icon": "Spell_Enchantment_Bane_2",
   "Description": "Shared_Target_Bane_ThiefOfFiveFates_2_Description",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "MaximumTargets": 4,
   "RootSpellID": "Target_Bane_ThiefOfFiveFates",
   "PowerLevel": 2
  },
  "Target_Bless": {
   "Name": "Target_Bless",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Enchantment",
   "SpellProperties": [
    "ApplyStatus(BLESS, 100, 10)"
   ],
   "TargetRadius": 9,
   "AreaRadius": 9,
   "TargetConditions": "not Item() and not Dead() and not Enemy()",
   "Icon": "Spell_Enchantment_Bless",
   "DisplayName": "Shared_Target_Bless_DisplayName",
   "Description": "Shared_Target_Bless_Description",
   "TooltipStatusApply": [
    "ApplyStatus(BLESS, 100, 10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_Bless_L1to3",
   "TargetSound": "Spell_Impact_Buff_Bless_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "10caea0e-c949-4d91-8ab7-3b50019dd054(SPL_Somatic_Aoe_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell"
   ],
   "RechargeValues": 6,
   "HitAnimationType": "MagicalNonDamage",
   "MaximumTargets": 3,
   "MemoryCost": 1,
   "PrepareEffect": "60ec0a2d-1b72-4fb2-9eaf-571638aca25d",
   "CastEffect": "6d072523-11f5-4b1b-a2d8-24ade34a315d",
   "TargetEffect": "4df0bae6-fccf-48a0-804c-3edc40264d07",
   "PositionEffect": "2832c7dd-14bd-4c51-9d2a-599c2c19005f"
  },
  "Target_Bless_2": {
   "Name": "Target_Bless_2",
   "SpellType": "Target",
   "Parent": "Target_Bless",
   "Icon": "Spell_Enchantment_Bless_2",
   "Description": "Shared_Target_Bless_2_Description",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "MaximumTargets": 4,
   "RootSpellID": "Target_Bless",
   "PowerLevel": 2
  },
  "Target_Bless_LifeCleric": {
   "Name": "Target_Bless_LifeCleric",
   "SpellType": "Target",
   "Parent": "Target_Bless",
   "ExtraDescription": "Shared_Target_Bless_LifeCleric_ExtraDescription"
  },
  "Target_Bless_LifeCleric_2": {
   "Name": "Target_Bless_LifeCleric_2",
   "SpellType": "Target",
   "Parent": "Target_Bless_LifeCleric",
   "Icon": "Spell_Enchantment_Bless_2",
   "Description": "Shared_Target_Bless_LifeCleric_2_Description",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "MaximumTargets": 4,
   "RootSpellID": "Target_Bless_LifeCleric",
   "PowerLevel": 2
  },
  "Target_Blindness": {
   "Name": "Target_Blindness",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Necromancy",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Constitution, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(BLINDNESS,100,10)"
   ],
   "TargetConditions": "Character() and not Ally() and not (not Player(context.Source) and IsCrowdControlled(context.Target)) ",
   "Icon": "Spell_Necromancy_Blindness",
   "DisplayName": "Shared_Target_Blindness_DisplayName",
   "Description": "Shared_Target_Blindness_Description",
   "ExtraDescription": "Shared_Target_Blindness_ExtraDescription",
   "TooltipAttackSave": [
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(BLINDNESS,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_Blindness_L1to3",
   "VocalComponentSound": "Vocal_Component_Blind",
   "TargetSound": "Spell_Impact_Debuff_Blindness_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasHighGroundRangeExtension",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "df151e16-a464-4a55-87a0-17ef802c7e4b",
   "CastEffect": "fbfcb9f8-5dda-4f45-9f94-043f0ca702c7",
   "TargetEffect": "7bc94f99-636c-40e9-a438-79394823a3be"
  },
  "Target_CharmPerson": {
   "Name": "Target_CharmPerson",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Enchantment",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC(),AdvantageOnCharmed())",
   "SpellSuccess": [
    "ApplyStatus(CHARMED,100,10)"
   ],
   "Icon": "Spell_Enchantment_CharmPerson",
   "DisplayName": "Shared_Target_CharmPerson_DisplayName",
   "Description": "Shared_Target_CharmPerson_Description",
   "ExtraDescription": "Shared_Target_CharmPerson_ExtraDescription",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(CHARMED,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_CharmPerson_L1to3",
   "VocalComponentSound": "Vocal_Component_CharmPerson",
   "TargetSound": "Spell_Impact_Control_CharmPerson_L1to3",
   "CycleConditions": "Character() and not Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "af94aac1-d8eb-4ccb-9520-694ade11b61c(SPL_Somatic_Target_Snap_01_Cast),,",
    "f5db4001-b136-4c48-9aa4-026c4a7dd3b7(SPL_Somatic_Target_Snap_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension"
   ],
   "RechargeValues": "5-6",
   "MemoryCost": 1,
   "PrepareEffect": "d7ff6074-0dee-46eb-84c2-fed6118b0cc3",
   "CastEffect": "238adc5b-64e5-474a-b5fa-c4c5d032a21b",
   "TargetEffect": "5cd08691-b441-43e1-b9d7-14668e4affa5",
   "BeamEffect": "ef76e96c-3b6e-41f1-8d62-7c8813ca7624"
  },
  "Target_CharmPerson_2": {
   "Name": "Target_CharmPerson_2",
   "SpellType": "Target",
   "Parent": "Target_CharmPerson",
   "AreaRadius": 4,
   "Icon": "Spell_Enchantment_CharmPerson_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "MaximumTargets": 2,
   "RootSpellID": "Target_CharmPerson",
   "PowerLevel": 2
  },
  "Target_CharmPerson_TrickeryCleric": {
   "Name": "Target_CharmPerson_TrickeryCleric",
   "SpellType": "Target",
   "Parent": "Target_CharmPerson",
   "ExtraDescription": "Shared_Target_CharmPerson_TrickeryCleric_ExtraDescription"
  },
  "Target_CharmPerson_TrickeryCleric_2": {
   "Name": "Target_CharmPerson_TrickeryCleric_2",
   "SpellType": "Target",
   "Parent": "Target_CharmPerson_TrickeryCleric",
   "AreaRadius": 4,
   "MaximumTargets": 2,
   "RootSpellID": "Target_CharmPerson_TrickeryCleric",
   "PowerLevel": 2
  },
  "Target_ChillTouch": {
   "Name": "Target_ChillTouch",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Necromancy",
   "TargetRadius": 18,
   "SpellRoll": "Attack(AttackType.RangedSpellAttack)",
   "SpellSuccess": [
    "ApplyStatus(CHILL_TOUCH,100,1)",
    "DealDamage(1d8, Necrotic)"
   ],
   "TargetConditions": "not Self() and not Dead() and Character()",
   "Icon": "Spell_Necromancy_ChillTouch",
   "DisplayName": "Shared_Target_ChillTouch_DisplayName",
   "Description": "Shared_Target_ChillTouch_Description",
   "DescriptionParams": [
    "DealDamage(1d8, Necrotic)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d8, Necrotic)"
   ],
   "TooltipAttackSave": [
    "RangedSpellAttack"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(CHILL_TOUCH,100,1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Necrotic_ChillTouch_L1to3",
   "VocalComponentSound": "Vocal_Component_DamageNecroticGhostly",
   "TargetSound": "Spell_Impact_Damage_Necrotic_ChillTouch_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Internal",
   "PrepareEffect": "0b713985-6696-45a2-8b8b-49f778b85057",
   "CastEffect": "d97c5b65-eccd-4b54-a665-64539e7924bf",
   "TargetEffect": "ef274710-5f43-4af5-ad69-fc87b41ccbb5"
  },
  "Target_Command_Halt": {
   "Name": "Target_Command_Halt",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Enchantment",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(COMMAND_HALT, 100, 1)"
   ],
   "Icon": "Spell_Enchantment_CommandHalt",
   "DisplayName": "Shared_Target_Command_Halt_DisplayName",
   "Description": "Shared_Target_Command_Halt_Description",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(COMMAND_HALT, 100, 1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_CommandHalt_L1to3",
   "TargetSound": "Spell_Impact_Control_CommandHalt_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "d2ef6b50-243f-478d-85c6-892086a1477e",
   "TargetEffect": "e1b340b6-78a9-413a-bb7e-8299848238ae"
  },
  "Target_Command_Halt_2": {
   "Name": "Target_Command_Halt_2",
   "SpellType": "Target",
   "Parent": "Target_Command_Halt",
   "AreaRadius": 9,
   "Icon": "Spell_Enchantment_CommandHalt_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "MaximumTargets": 2,
   "RootSpellID": "Target_Command_Halt",
   "PowerLevel": 2
  },
  "Target_CrownOfMadness": {
   "Name": "Target_CrownOfMadness",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Enchantment",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC(), AdvantageOnCharmed())",
   "SpellSuccess": [
    "ApplyStatus(CROWN_OF_MADNESS,100,3)"
   ],
   "Icon": "Spell_Enchantment_CrownOfMadness",
   "DisplayName": "Shared_Target_CrownOfMadness_DisplayName",
   "Description": "Shared_Target_CrownOfMadness_Description",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(CROWN_OF_MADNESS,100,3)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_CrownOfMadness_L1to3",
   "VocalComponentSound": "Vocal_Component_Confuse",
   "TargetSound": "Spell_Impact_Control_CrownOfMadness_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "0149cfd3-d80f-4ce8-8cf7-234e0864ba46(SPL_Somatic_Aoe_Shrink_01_Cast),,",
    "1c58959b-8cb1-491d-89b7-2a7d0a593215(SPL_Somatic_Aoe_Shrink_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "4ca6a918-a46b-4269-b11b-d98fb6694677",
   "TargetEffect": "4b5dc428-d623-4203-a7f0-a86c47bf9aa8"
  },
  "Target_DancingLights": {
   "Name": "Target_DancingLights",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:Summon(2064328c-a090-454f-b3b8-b488bbe64567, 10,,,DANCING_LIGHTS)"
   ],
   "TargetRadius": 18,
   "Icon": "Spell_Evocation_DancingLights",
   "DisplayName": "Shared_Target_DancingLights_DisplayName",
   "Description": "Shared_Target_DancingLights_Description",
   "DescriptionParams": [
    "Distance(12)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_DancingLights_L0",
   "VocalComponentSound": "Vocal_Component_Light",
   "TargetSound": "Spell_Impact_Utility_DancingLights_L0",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell",
    "HasHighGroundRangeExtension"
   ],
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "fff95fa7-3e3f-41c7-9815-b1854e6ebd34",
   "PositionEffect": "12c0e505-2b3a-4f31-bbb8-c6aa6d4b4977"
  },
  "Target_Deafnesss": {
   "Name": "Target_Deafnesss",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Necromancy",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Constitution, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(DEAFNESS,100,1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Deafnesss_DisplayName",
   "Description": "Shared_Target_Deafnesss_Description",
   "TooltipAttackSave": [
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(DEAFNESS,100,1)"
   ],
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "98491edb-7dbf-476a-b00b-fd97f26646ca(SPL_Arcane_Debuff_01_Cast),,",
    "d667be60-16f9-4955-aef2-07a96de5c9e7(SPL_Arcane_Debuff_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasHighGroundRangeExtension",
    "IsHarmful"
   ],
   "MemoryCost": 1
  },
  "Target_Dip": {
   "Name": "Target_Dip",
   "SpellType": "Target",
   "TargetRadius": 3,
   "RequirementConditions": "HasDippableWeapon()",
   "TargetConditions": "IsDippableSurface() or IsOnFire()",
   "Icon": "Action_Dip",
   "DisplayName": "Shared_Target_Dip_DisplayName",
   "Description": "Shared_Target_Dip_Description",
   "ExtraDescription": "Shared_Target_Dip_ExtraDescription",
   "PreviewCursor": "Melee_Ground",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Dip",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "2ba949b7-0329-4190-992c-11b0d29183c5(CMBT_Skill_Precision_01_Prepare),,",
    ",,",
    "de006e3f-70fb-4eb7-a98d-d845d15b20e8(CMBT_Skill_Precision_01_Attack),,",
    ",,",
    "a0503ad0-c1b1-449c-b431-4ac6c39c58d7(CMBT_Skill_Precision_01_Loop),,",
    ",,"
   ],
   "WeaponTypes": [
    "Dippable"
   ],
   "SpellFlags": [
    "IsMelee",
    "TargetClosestEqualGroundSurface",
    "Stealth",
    "Invisible"
   ],
   "SpellActionType": "Dip",
   "SpellAnimationType": "Dipping",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "bcd1488f-2c9d-4f14-98ba-0e4bb80fc967",
   "CastEffect": "177c5aea-56b1-494b-9753-c09288bfdcd4"
  },
  "Target_Dip_NPC": {
   "Name": "Target_Dip_NPC",
   "SpellType": "Target",
   "Parent": "Target_Dip"
  },
  "Target_DissonantWhispers": {
   "Name": "Target_DissonantWhispers",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Enchantment",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC(), AdvantageOnFrightened())",
   "SpellSuccess": [
    "DealDamage(3d6,Psychic)",
    "ApplyStatus(FRIGHTENED,100,2)"
   ],
   "TargetConditions": "Character()",
   "Icon": "Spell_Enchantment_DissonantWhispers",
   "DisplayName": "Shared_Target_DissonantWhispers_DisplayName",
   "Description": "Shared_Target_DissonantWhispers_Description",
   "DescriptionParams": [
    "DealDamage(3d6,Psychic)"
   ],
   "ExtraDescription": "Shared_Target_DissonantWhispers_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(3d6,Psychic)"
   ],
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(FRIGHTENED,100,1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Psychic_DissonantWhispers_L1to3",
   "VocalComponentSound": "Vocal_Component_DamagePsychicDiscordantMelody",
   "TargetSound": "Spell_Impact_Damage_Psychic_DissonantWhispers_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "af94aac1-d8eb-4ccb-9520-694ade11b61c(SPL_Somatic_Target_Snap_01_Cast),,",
    "f5db4001-b136-4c48-9aa4-026c4a7dd3b7(SPL_Somatic_Target_Snap_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Psychic",
   "MemoryCost": 1,
   "PrepareEffect": "752219e2-351d-46ea-9448-3a714b3d3acc",
   "CastEffect": "bd2fc245-5645-452f-a2cd-d158b751bbe4",
   "TargetEffect": "a0aee53a-d702-4901-9bb3-7cf08e214346"
  },
  "Target_DissonantWhispers_2": {
   "Name": "Target_DissonantWhispers_2",
   "SpellType": "Target",
   "Parent": "Target_DissonantWhispers",
   "SpellSuccess": [
    "DealDamage(4d6,Psychic)",
    "ApplyStatus(FRIGHTENED,100,1)"
   ],
   "Icon": "Spell_Enchantment_DissonantWhispers_2",
   "DescriptionParams": [
    "DealDamage(4d6,Psychic)"
   ],
   "TooltipDamageList": [
    "DealDamage(4d6,Psychic)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_DissonantWhispers",
   "PowerLevel": 2
  },
  "Target_EnlargeReduce": {
   "Name": "Target_EnlargeReduce",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Transmutation",
   "ContainerSpells": [
    "Target_Enlarge",
    "Target_Reduce"
   ],
   "TargetRadius": 9,
   "TargetConditions": "Character()",
   "Icon": "Spell_Transmutation_EnlargeReduce",
   "DisplayName": "Shared_Target_EnlargeReduce_DisplayName",
   "Description": "Shared_Target_EnlargeReduce_Description",
   "TooltipAttackSave": [
    "Constitution"
   ],
   "CastSound": "Action_Cast_Reduce",
   "TargetSound": "Action_Impact_Reduce",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "e37d18b8-0de7-4bbc-a644-31ec2a91e548(SPL_Somatic_Touch_01_Cast),,",
    "acfe8d41-20c1-4fe8-b158-f4b2be86e080(SPL_Somatic_Touch_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration",
    "IsLinkedSpellContainer"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MaximumTargets": 1,
   "MemoryCost": 1
  },
  "Target_Enlarge": {
   "Name": "Target_Enlarge",
   "SpellType": "Target",
   "Parent": "Target_EnlargeReduce",
   "SpellContainerID": "Target_EnlargeReduce",
   "SpellRoll": "SpellAutoResolveOnAlly(Ability.Constitution, SourceSpellDC(), true)",
   "SpellSuccess": [
    "ApplyStatus(ENLARGE,100,10)"
   ],
   "Icon": "Spell_Transmutation_Enlarge",
   "DisplayName": "Shared_Target_Enlarge_DisplayName",
   "Description": "Shared_Target_Enlarge_Description",
   "TooltipStatusApply": [
    "ApplyStatus(ENLARGE,100,10)"
   ],
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_Enlarge_L1to3",
   "VocalComponentSound": "Vocal_Component_Enlarge",
   "TargetSound": "Spell_Impact_Buff_Enlarge_L1to3",
   "PrepareEffect": "f6c0d370-c167-484a-81ad-1265a4f8af91",
   "CastEffect": "bcd66fb0-b0bc-41d0-abba-ad443d63dd72",
   "TargetEffect": "7be62644-38a2-4151-a674-777f4e87da43"
  },
  "Target_Exhale_Fire": {
   "Name": "Target_Exhale_Fire",
   "SpellType": "Target",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 13)",
   "SpellSuccess": [
    "DealDamage(4d6, Fire)"
   ],
   "TargetConditions": "Character()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Exhale_Fire_DisplayName",
   "Description": "Shared_Target_Exhale_Fire_Description",
   "DescriptionParams": [
    "DealDamage(4d6,Fire)"
   ],
   "ExtraDescription": "Shared_Target_Exhale_Fire_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(4d6, Fire)"
   ],
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "895ce382-397d-4b9a-9e8f-6ee3b1ff3a13(UTIL_Drink_01),,",
    ",,",
    "9bcbf658-8433-46f0-a34a-9c9d2dcd585b(SPL_Arcane_Damage_01_Cast),,",
    "d75865cd-fddd-4ad1-be34-d5b89155d7c6(SPL_Arcane_Damage_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "HitAnimationType": "MagicalDamage_External"
  },
  "Target_FlamingSphere_Move": {
   "Name": "Target_FlamingSphere_Move",
   "SpellType": "Target",
   "Cooldown": "OncePerTurnNoRealtime",
   "SpellProperties": [
    "RemoveStatus(SELF,FLAMING_SPHERE_BLOCK)",
    "UseActionResource(BonusActionPoint,1)"
   ],
   "TargetRadius": 36,
   "Icon": "Skill_Druid_FlamingSphere_Move",
   "DisplayName": "Shared_Target_FlamingSphere_Move_DisplayName",
   "Description": "Shared_Target_FlamingSphere_Move_Description",
   "ExtraDescription": "Shared_Target_FlamingSphere_Move_ExtraDescription",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "e96cce98-e889-45c3-a21f-fbb901b31107(SPL_Material_Container_01),,:0fa05642-9607-46c1-9544-75c61e133865(SPL_Somatic_Circle_2HandSphere_01_Cast),,",
    ",,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IgnoreVisionBlock",
    "RangeIgnoreVerticalThreshold"
   ]
  },
  "Target_FlamingSphere_Ram": {
   "Name": "Target_FlamingSphere_Ram",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "TargetRadius": "1.5",
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 12)",
   "SpellSuccess": [
    "DealDamage(2d6,Fire)"
   ],
   "TargetConditions": "not Dead()",
   "Icon": "Skill_Druid_FlamingSphere_Ram",
   "DisplayName": "Shared_Target_FlamingSphere_Ram_DisplayName",
   "Description": "Shared_Target_FlamingSphere_Ram_Description",
   "DescriptionParams": [
    "DealDamage(2d6,Fire)"
   ],
   "ExtraDescription": "Shared_Target_FlamingSphere_Ram_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d6,Fire)"
   ],
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Ram",
   "TargetSound": "CrSpell_Impact_Ram",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "0319ca29-4024-4649-9278-3c1f20c5f023(CMBT_Skill_Shove_01_Prepare),,",
    "a71e11ca-95ab-463d-a4bf-fe8094126b61(CMBT_Skill_Shove_01_Antic),,",
    "352c3a89-f99c-4472-8424-58c0ffb15e55(CMBT_Skill_Shove_01_Attack),,",
    "a57fc614-ed20-4574-936b-bdcc6cebd36a(CMBT_Skill_Shove_01_Recover),,",
    "b24b3f23-6d3a-43ce-ae3a-abfb44d26082(CMBT_Skill_Shove_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "PrepareEffect": "5822e00d-08d9-4ac0-8889-7ae3cb56d2d7",
   "CastEffect": "6e871034-4d0c-4851-91ce-9d8f28343e85",
   "TargetEffect": "18169d09-2a36-4c15-b647-ba6f97ba7712"
  },
  "Target_Friends": {
   "Name": "Target_Friends",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Enchantment",
   "SpellProperties": [
    "ApplyStatus(FRIENDS,100,10)"
   ],
   "TargetRadius": 9,
   "TargetConditions": "Character() and not Enemy()  and not Self()",
   "Icon": "Spell_Enchantment_Friends",
   "DisplayName": "Shared_Target_Friends_DisplayName",
   "Description": "Shared_Target_Friends_Description",
   "ExtraDescription": "Shared_Target_Friends_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(FRIENDS,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_Friends_L0",
   "TargetSound": "Spell_Impact_Control_Friends_L0",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent",
    "IsConcentration"
   ],
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "d2ef6b50-243f-478d-85c6-892086a1477e",
   "TargetEffect": "e1b340b6-78a9-413a-bb7e-8299848238ae"
  },
  "Target_HealingWord": {
   "Name": "Target_HealingWord",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Evocation",
   "TargetRadius": 18,
   "Icon": "Spell_Evocation_HealingWord",
   "DisplayName": "Shared_Target_HealingWord_DisplayName",
   "Description": "Shared_Target_HealingWord_Description",
   "ExtraDescription": "Shared_Target_HealingWord_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Healing_HealingWord_L1to3",
   "TargetSound": "Spell_Impact_Healing_HealingWord_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "RangeIgnoreVerticalThreshold"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "96a51ac8-2e7e-4718-bb62-dcfd18964a02",
   "CastEffect": "7a73fa11-81e8-44bc-8653-a0d0ebbecf4b",
   "TargetEffect": "70319a43-6342-4996-811d-dd50df8b3fa1"
  },
  "Target_HealingWord_2": {
   "Name": "Target_HealingWord_2",
   "SpellType": "Target",
   "Parent": "Target_HealingWord",
   "Icon": "Spell_Evocation_HealingWord_2",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_HealingWord",
   "PowerLevel": 2
  },
  "Target_HeatMetal": {
   "Name": "Target_HeatMetal",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "IF(IsMetalItem()):ApplyStatus(HEAT_METAL,100,10)",
    "IF(not IsMetalItem() and HasMetalWeapon(context.Target, true)):ApplyEquipmentStatus(MainHand,HEAT_METAL,100,10)",
    "IF(not IsMetalItem() and not HasMetalWeapon(context.Target, true) and HasMetalWeapon(context.Target, false)):ApplyEquipmentStatus(OffHand,HEAT_METAL,100,10)",
    "IF(not IsMetalItem() and not HasMetalWeapon(context.Target, true) and not HasMetalWeapon(context.Target, false) and HasMetalArmor()):ApplyEquipmentStatus(Breast,HEAT_METAL,100,10)",
    "IF(IsMetalCharacter()):ApplyStatus(HEAT_METAL,100,10)",
    "IF(Character()):DealDamage(2d8,Fire)",
    "ApplyStatus(SELF,HEAT_METAL_TECHNICAL,100,10)"
   ],
   "TargetRadius": 18,
   "SpellRoll": "HeatMetalInitialCheck(Ability.Constitution, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(DISARM,100,0)"
   ],
   "SpellFail": [
    "ApplyStatus(HEAT_METAL_DISADVANTAGE,100,1)"
   ],
   "TargetConditions": "IsMetalItem() or HasMetalWeaponInAnyHand() or HasMetalArmor() or IsMetalCharacter()",
   "Icon": "Spell_Transmutation_HeatMetal",
   "DisplayName": "Shared_Target_HeatMetal_DisplayName",
   "Description": "Shared_Target_HeatMetal_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Fire)"
   ],
   "ExtraDescription": "Shared_Target_HeatMetal_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(2d8,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d8,Fire)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(HEAT_METAL,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_HeatMetal_L1to3",
   "TargetSound": "Spell_Impact_Damage_HeatMetal_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "54d977c9-c17a-4ba2-a727-5c51f97ee91a(SPL_Druid_Damage_01_Prepare),,",
    ",,",
    "d30d2b40-c45a-45bd-94d7-9b2baaf0f77b(SPL_Somatic_Beam_2HandCone_01_Cast),,",
    "a601b33c-5320-455d-b4d4-74d6dc35b757(SPL_Somatic_Beam_2HandCone_01_Recover),,",
    "3fd6fd64-9a68-46c9-a7da-29a85e53ef7f(SPL_Druid_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "8af1789b-3e7b-4224-bebc-546be6f5f5d4",
   "CastEffect": "7a2115d5-e9b2-4fc2-9201-767275c47f43",
   "TargetEffect": "ec3af71e-4c6e-4ca3-8af8-bcf713aab8bf"
  },
  "Target_HeatMetal_Reapply": {
   "Name": "Target_HeatMetal_Reapply",
   "SpellType": "Target",
   "Parent": "Target_HeatMetal",
   "SpellProperties": [
    "DealDamage(2d8,Fire)"
   ],
   "TargetRadius": 18,
   "SpellRoll": "HeatMetalReapplyCheck(Ability.Constitution, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(DISARM,100,0)"
   ],
   "SpellFail": [
    "ApplyStatus(HEAT_METAL_DISADVANTAGE,100,1)"
   ],
   "TargetConditions": "Character() and HasHeatMetalActive()",
   "Icon": "Spell_Transmutation_HeatMetal_Reapply",
   "DisplayName": "Shared_Target_HeatMetal_Reapply_DisplayName",
   "Description": "Shared_Target_HeatMetal_Reapply_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Fire)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "54d977c9-c17a-4ba2-a727-5c51f97ee91a(SPL_Druid_Damage_01_Prepare),,",
    ",,",
    "d30d2b40-c45a-45bd-94d7-9b2baaf0f77b(SPL_Somatic_Beam_2HandCone_01_Cast),,",
    "a601b33c-5320-455d-b4d4-74d6dc35b757(SPL_Somatic_Beam_2HandCone_01_Recover),,",
    "3fd6fd64-9a68-46c9-a7da-29a85e53ef7f(SPL_Druid_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell"
   ]
  },
  "Target_HellishRebuke": {
   "Name": "Target_HellishRebuke",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Evocation",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC())",
   "Icon": "Spell_HellishRebuke",
   "DisplayName": "Shared_Target_HellishRebuke_DisplayName",
   "Description": "Shared_Target_HellishRebuke_Description",
   "DescriptionParams": [
    "DealDamage(2d10,Fire)"
   ],
   "ExtraDescription": "Shared_Target_HellishRebuke_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d10,Fire)"
   ],
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_HellishRebukeTrigger_L1to3",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasSomaticComponent",
    "HasVerbalComponent",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful"
   ],
   "PrepareEffect": "e57f0f1e-54b8-4afb-a6b9-92509d561165",
   "CastEffect": "488a0639-98c3-4c5f-83d2-3fe055f8e310",
   "TargetEffect": "f97febdd-7f77-4ca0-9a05-13e8bd5772e0"
  },
  "Target_HellishRebuke_2": {
   "Name": "Target_HellishRebuke_2",
   "SpellType": "Target",
   "Parent": "Target_HellishRebuke",
   "Icon": "Spell_HellishRebuke",
   "DescriptionParams": [
    "DealDamage(3d10,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d10,Fire)"
   ],
   "CastSound": "Spell_Cast_Buff_HellishRebukeTrigger_L1to3"
  },
  "Target_Hex": {
   "Name": "Target_Hex",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Enchantment",
   "ContainerSpells": [
    "Target_Hex_Strength",
    "Target_Hex_Dexterity",
    "Target_Hex_Constitution",
    "Target_Hex_Intelligence",
    "Target_Hex_Wisdom",
    "Target_Hex_Charisma"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Character()",
   "Icon": "Spell_Enchantment_Hex",
   "DisplayName": "Shared_Target_Hex_DisplayName",
   "Description": "Shared_Target_Hex_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Necrotic)"
   ],
   "ExtraDescription": "Shared_Target_Hex_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_Hex_L1to3",
   "VocalComponentSound": "Vocal_Component_Curse",
   "TargetSound": "Spell_Impact_Debuff_Hex_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "BonusActionPoint:1",
    " SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell",
    "IsLinkedSpellContainer",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "db4fd7eb-049e-43d0-95ce-d8f5bc808c0c",
   "CastEffect": "d9cc11d0-ef2a-4c79-aaf4-7916a51f56a6",
   "TargetEffect": "ef1cdb0d-28ae-4989-b8b8-09438f749a00"
  },
  "Target_Hex_2": {
   "Name": "Target_Hex_2",
   "SpellType": "Target",
   "Parent": "Target_Hex",
   "ContainerSpells": [
    "Target_Hex_Strength_2",
    "Target_Hex_Dexterity_2",
    "Target_Hex_Constitution_2",
    "Target_Hex_Intelligence_2",
    "Target_Hex_Wisdom_2",
    "Target_Hex_Charisma_2"
   ],
   "Icon": "Spell_Enchantment_Hex_2",
   "UseCosts": [
    "BonusActionPoint:1",
    " SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_Hex",
   "PowerLevel": 2
  },
  "Target_Hex_Strength": {
   "Name": "Target_Hex_Strength",
   "SpellType": "Target",
   "Parent": "Target_Hex",
   "SpellContainerID": "Target_Hex",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_STRENGTH,100,-1)"
   ],
   "Icon": "Spell_Enchantment_Hex_Strenght",
   "DisplayName": "Shared_Target_Hex_Strength_DisplayName",
   "Description": "Shared_Target_Hex_Strength_Description",
   "TooltipStatusApply": [
    "ApplyStatus(HEX_STRENGTH,100,-1)"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell",
    "IsHarmful"
   ]
  },
  "Target_Hex_Strength_2": {
   "Name": "Target_Hex_Strength_2",
   "SpellType": "Target",
   "Parent": "Target_Hex_Strength",
   "SpellContainerID": "Target_Hex_2",
   "Icon": "Spell_Enchantment_Hex_Strenght_2",
   "UseCosts": [
    "BonusActionPoint:1",
    " SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_Hex_Strength",
   "PowerLevel": 2
  },
  "Target_Hex_Dexterity": {
   "Name": "Target_Hex_Dexterity",
   "SpellType": "Target",
   "Parent": "Target_Hex_Strength",
   "SpellContainerID": "Target_Hex",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_DEXTERITY,100,-1)"
   ],
   "Icon": "Spell_Enchantment_Hex_Dexterity",
   "DisplayName": "Shared_Target_Hex_Dexterity_DisplayName",
   "Description": "Shared_Target_Hex_Dexterity_Description",
   "TooltipStatusApply": [
    "ApplyStatus(HEX_DEXTERITY,100,-1)"
   ]
  },
  "Target_Hex_Dexterity_2": {
   "Name": "Target_Hex_Dexterity_2",
   "SpellType": "Target",
   "Parent": "Target_Hex_Dexterity",
   "SpellContainerID": "Target_Hex_2",
   "Icon": "Spell_Enchantment_Hex_Dexterity_2",
   "UseCosts": [
    "BonusActionPoint:1",
    " SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_Hex_Dexterity",
   "PowerLevel": 2
  },
  "Target_Hex_Constitution": {
   "Name": "Target_Hex_Constitution",
   "SpellType": "Target",
   "Parent": "Target_Hex_Strength",
   "SpellContainerID": "Target_Hex",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_CONSTITUTION,100,-1)"
   ],
   "Icon": "Spell_Enchantment_Hex_Constitution",
   "DisplayName": "Shared_Target_Hex_Constitution_DisplayName",
   "Description": "Shared_Target_Hex_Constitution_Description",
   "TooltipStatusApply": [
    "ApplyStatus(HEX_CONSTITUTION,100,-1)"
   ]
  },
  "Target_Hex_Constitution_2": {
   "Name": "Target_Hex_Constitution_2",
   "SpellType": "Target",
   "Parent": "Target_Hex_Constitution",
   "SpellContainerID": "Target_Hex_2",
   "Icon": "Spell_Enchantment_Hex_Constitution_2",
   "UseCosts": [
    "BonusActionPoint:1",
    " SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_Hex_Constitution",
   "PowerLevel": 2
  },
  "Target_Hex_Intelligence": {
   "Name": "Target_Hex_Intelligence",
   "SpellType": "Target",
   "Parent": "Target_Hex_Strength",
   "SpellContainerID": "Target_Hex",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_INTELLIGENCE,100,-1)"
   ],
   "Icon": "Spell_Enchantment_Hex_Intelligence",
   "DisplayName": "Shared_Target_Hex_Intelligence_DisplayName",
   "Description": "Shared_Target_Hex_Intelligence_Description",
   "TooltipStatusApply": [
    "ApplyStatus(HEX_INTELLIGENCE,100,-1)"
   ]
  },
  "Target_Hex_Intelligence_2": {
   "Name": "Target_Hex_Intelligence_2",
   "SpellType": "Target",
   "Parent": "Target_Hex_Intelligence",
   "SpellContainerID": "Target_Hex_2",
   "Icon": "Spell_Enchantment_Hex_Intelligence_2",
   "UseCosts": [
    "BonusActionPoint:1",
    " SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_Hex_Intelligence",
   "PowerLevel": 2
  },
  "Target_Hex_Wisdom": {
   "Name": "Target_Hex_Wisdom",
   "SpellType": "Target",
   "Parent": "Target_Hex_Strength",
   "SpellContainerID": "Target_Hex",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_WISDOM,100,-1)"
   ],
   "Icon": "Spell_Enchantment_Hex_Wisdom",
   "DisplayName": "Shared_Target_Hex_Wisdom_DisplayName",
   "Description": "Shared_Target_Hex_Wisdom_Description",
   "TooltipStatusApply": [
    "ApplyStatus(HEX_WISDOM,100,-1)"
   ]
  },
  "Target_Hex_Wisdom_2": {
   "Name": "Target_Hex_Wisdom_2",
   "SpellType": "Target",
   "Parent": "Target_Hex_Wisdom",
   "SpellContainerID": "Target_Hex_2",
   "Icon": "Spell_Enchantment_Hex_Wisdom_2",
   "UseCosts": [
    "BonusActionPoint:1",
    " SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_Hex_Wisdom",
   "PowerLevel": 2
  },
  "Target_Hex_Charisma": {
   "Name": "Target_Hex_Charisma",
   "SpellType": "Target",
   "Parent": "Target_Hex_Strength",
   "SpellContainerID": "Target_Hex",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_CHARISMA,100,-1)"
   ],
   "Icon": "Spell_Enchantment_Hex_Charisma",
   "DisplayName": "Shared_Target_Hex_Charisma_DisplayName",
   "Description": "Shared_Target_Hex_Charisma_Description",
   "TooltipStatusApply": [
    "ApplyStatus(HEX_CHARISMA,100,-1)"
   ]
  },
  "Target_Hex_Charisma_2": {
   "Name": "Target_Hex_Charisma_2",
   "SpellType": "Target",
   "Parent": "Target_Hex_Charisma",
   "SpellContainerID": "Target_Hex_2",
   "Icon": "Spell_Enchantment_Hex_2",
   "UseCosts": [
    "BonusActionPoint:1",
    " SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_Hex_Charisma",
   "PowerLevel": 2
  },
  "Target_Hex_Reapply": {
   "Name": "Target_Hex_Reapply",
   "SpellType": "Target",
   "Parent": "Target_Hex",
   "ContainerSpells": [
    "Target_Hex_Reapply_Strength",
    "Target_Hex_Reapply_Dexterity",
    "Target_Hex_Reapply_Constitution",
    "Target_Hex_Reapply_Intelligence",
    "Target_Hex_Reapply_Wisdom",
    "Target_Hex_Reapply_Charisma"
   ],
   "Icon": "Spell_Enchantment_ReapplyHex",
   "DisplayName": "Shared_Target_Hex_Reapply_DisplayName",
   "Description": "Shared_Target_Hex_Reapply_Description",
   "ExtraDescription": "Shared_Target_Hex_Reapply_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d6,Necrotic)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_Hex_L1to3",
   "TargetSound": "Spell_Impact_Debuff_Hex_L1to3",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsLinkedSpellContainer",
    "IsHarmful"
   ],
   "PrepareEffect": "3b52fe89-85c9-4dd4-8563-59ad5cfad510",
   "CastEffect": "8f54b126-3700-4aba-9b28-eb48a0187f92",
   "TargetEffect": "553953fc-b249-44ac-a10a-77a046bb73b4"
  },
  "Target_Hex_Reapply_Strength": {
   "Name": "Target_Hex_Reapply_Strength",
   "SpellType": "Target",
   "Parent": "Target_Hex_Reapply",
   "SpellContainerID": "Target_Hex_Reapply",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_STRENGTH,100,-1)",
    "RemoveStatus(SELF,HEX_REAPPLY)"
   ],
   "Icon": "Spell_Enchantment_ReapplyHex_Strenght",
   "DisplayName": "Shared_Target_Hex_Reapply_Strength_DisplayName",
   "Description": "Shared_Target_Hex_Reapply_Strength_Description"
  },
  "Target_Hex_Reapply_Dexterity": {
   "Name": "Target_Hex_Reapply_Dexterity",
   "SpellType": "Target",
   "Parent": "Target_Hex_Reapply",
   "SpellContainerID": "Target_Hex_Reapply",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_DEXTERITY,100,-1)",
    "RemoveStatus(SELF,HEX_REAPPLY)"
   ],
   "Icon": "Spell_Enchantment_ReapplyHex_Dexterity",
   "DisplayName": "Shared_Target_Hex_Reapply_Dexterity_DisplayName",
   "Description": "Shared_Target_Hex_Reapply_Dexterity_Description"
  },
  "Target_Hex_Reapply_Constitution": {
   "Name": "Target_Hex_Reapply_Constitution",
   "SpellType": "Target",
   "Parent": "Target_Hex_Reapply",
   "SpellContainerID": "Target_Hex_Reapply",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_CONSTITUTION,100,-1)",
    "RemoveStatus(SELF,HEX_REAPPLY)"
   ],
   "Icon": "Spell_Enchantment_ReapplyHex_Constitution",
   "DisplayName": "Shared_Target_Hex_Reapply_Constitution_DisplayName",
   "Description": "Shared_Target_Hex_Reapply_Constitution_Description"
  },
  "Target_Hex_Reapply_Intelligence": {
   "Name": "Target_Hex_Reapply_Intelligence",
   "SpellType": "Target",
   "Parent": "Target_Hex_Reapply",
   "SpellContainerID": "Target_Hex_Reapply",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_INTELLIGENCE,100,-1)",
    "RemoveStatus(SELF,HEX_REAPPLY)"
   ],
   "Icon": "Spell_Enchantment_ReapplyHex_Intelligence",
   "DisplayName": "Shared_Target_Hex_Reapply_Intelligence_DisplayName",
   "Description": "Shared_Target_Hex_Reapply_Intelligence_Description"
  },
  "Target_Hex_Reapply_Wisdom": {
   "Name": "Target_Hex_Reapply_Wisdom",
   "SpellType": "Target",
   "Parent": "Target_Hex_Reapply",
   "SpellContainerID": "Target_Hex_Reapply",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_WISDOM,100,-1)",
    "RemoveStatus(SELF,HEX_REAPPLY)"
   ],
   "Icon": "Spell_Enchantment_ReapplyHex_Wisdom",
   "DisplayName": "Shared_Target_Hex_Reapply_Wisdom_DisplayName",
   "Description": "Shared_Target_Hex_Reapply_Wisdom_Description"
  },
  "Target_Hex_Reapply_Charisma": {
   "Name": "Target_Hex_Reapply_Charisma",
   "SpellType": "Target",
   "Parent": "Target_Hex_Reapply",
   "SpellContainerID": "Target_Hex_Reapply",
   "SpellProperties": [
    "ApplyStatus(SELF,HEX_OWNER,100,-1)",
    "ApplyStatus(HEX_CHARISMA,100,-1)",
    "RemoveStatus(SELF,HEX_REAPPLY)"
   ],
   "Icon": "Spell_Enchantment_ReapplyHex_Charisma",
   "DisplayName": "Shared_Target_Hex_Reapply_Charisma_DisplayName",
   "Description": "Shared_Target_Hex_Reapply_Charisma_Description"
  },
  "Target_HideousLaughter": {
   "Name": "Target_HideousLaughter",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Enchantment",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(HIDEOUS_LAUGHTER,100,10)"
   ],
   "TargetConditions": "Character() and not Self() and IntelligenceGreaterThan(4)",
   "DisplayName": "Shared_Target_HideousLaughter_DisplayName",
   "Description": "Shared_Target_HideousLaughter_Description",
   "ExtraDescription": "Shared_Target_HideousLaughter_ExtraDescription",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(HIDEOUS_LAUGHTER,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_HideousLaughter_L1to3",
   "VocalComponentSound": "Vocal_Component_TellAJoke",
   "TargetSound": "Spell_Impact_Control_HideousLaughter_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "d2ef6b50-243f-478d-85c6-892086a1477e",
   "TargetEffect": "e1b340b6-78a9-413a-bb7e-8299848238ae"
  },
  "Target_HideousLaughter_2": {
   "Name": "Target_HideousLaughter_2",
   "SpellType": "Target",
   "Parent": "Target_HideousLaughter",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_HideousLaughter",
   "PowerLevel": 2
  },
  "Target_HoldPerson": {
   "Name": "Target_HoldPerson",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Enchantment",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(HOLD_PERSON,100,10)"
   ],
   "Icon": "Spell_Enchantment_HoldPerson",
   "DisplayName": "Shared_Target_HoldPerson_DisplayName",
   "Description": "Shared_Target_HoldPerson_Description",
   "ExtraDescription": "Shared_Target_HoldPerson_ExtraDescription",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(HOLD_PERSON,100,10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_HoldPerson_L1to3",
   "VocalComponentSound": "Vocal_Component_Paralyze",
   "TargetSound": "Spell_Impact_Control_HoldPerson_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "IsHarmful"
   ],
   "RechargeValues": "5-6",
   "MemoryCost": 1,
   "PrepareEffect": "bcdca947-b1ba-475f-8e3b-9ac850da90fa",
   "CastEffect": "d2ef6b50-243f-478d-85c6-892086a1477e",
   "TargetEffect": "e1b340b6-78a9-413a-bb7e-8299848238ae"
  },
  "Target_HorrificVisage": {
   "Name": "Target_HorrificVisage",
   "SpellType": "Target",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(HORRIFIC_VISAGE,100,3)",
    "ApplyStatus(SELF,HORRIFIC_VISAGE_RECOVERY,100,1)"
   ],
   "TargetRadius": 9,
   "TargetConditions": "Character() and not Self() and not Dead()",
   "Icon": "TadpoleSuperPower_Sorcerer",
   "DisplayName": "Shared_Target_HorrificVisage_DisplayName",
   "Description": "Shared_Target_HorrificVisage_Description",
   "DescriptionParams": [
    "DealDamage(1d4,Psychic)",
    "3",
    "2"
   ],
   "TooltipAttackSave": [
    "Intelligence"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(HORRIFIC_VISAGE,100,3)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_HorrificVisage_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "f94542d9-a79c-478a-92de-573cead9260e(TAD_PsionicPull_01_Prepare),,",
    ",,",
    "c424155d-d04b-434d-a8f6-3abf10a55f88(TAD_HorrificVisage_01_Cast),,",
    "96c3f29a-d401-4b8e-8a3e-f9d523b8de23(TAD_HorrificVisage_01_Recover),,",
    "bd339475-d2b5-46e8-8d0c-9f2ad6a91328(TAD_PsionicPull_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasSomaticComponent",
    "IsHarmful"
   ],
   "PrepareEffect": "c018783b-a556-4093-b74a-b42ee43f8312",
   "CastEffect": "2cc72eb7-b8bf-4f53-8a05-23c55fa5b6ff",
   "TargetEffect": "4eed2f42-fa23-4e11-acee-012aa6dd93c2"
  },
  "Target_HuntersMark": {
   "Name": "Target_HuntersMark",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Divination",
   "SpellProperties": [
    "ApplyStatus(SELF,HUNTERS_MARK_OWNER,100,-1)",
    "ApplyStatus(HUNTERS_MARK,100,-1)"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Character() and not Self() and not (not Player(context.Source) and not Enemy())",
   "Icon": "Spell_Divination_HuntersMark",
   "DisplayName": "Shared_Target_HuntersMark_DisplayName",
   "Description": "Shared_Target_HuntersMark_Description",
   "DescriptionParams": [
    "DealDamage(1d6,MainMeleeWeaponDamageType)"
   ],
   "ExtraDescription": "Shared_Target_HuntersMark_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(HUNTERS_MARK,100,-1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_HuntersMark_L1to3",
   "VocalComponentSound": "Vocal_Component_HuntersMark",
   "TargetSound": "Spell_Impact_Debuff_HuntersMark_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "de6dddd8-8a32-4db1-a521-70706648a83b",
   "CastEffect": "2e44371c-a637-4cab-a120-3088b3d83369",
   "TargetEffect": "7537e8f0-1897-4a66-83fe-7f58e9dbd12e"
  },
  "Target_HuntersMark_Reapply": {
   "Name": "Target_HuntersMark_Reapply",
   "SpellType": "Target",
   "Parent": "Target_HuntersMark",
   "SpellProperties": [
    "ApplyStatus(SELF,HUNTERS_MARK_OWNER,100,-1)",
    "ApplyStatus(HUNTERS_MARK,100,-1)",
    "RemoveStatus(SELF,HUNTERS_MARK_REAPPLY)"
   ],
   "Icon": "Spell_Divination_ReapplyHuntersMark",
   "DisplayName": "Shared_Target_HuntersMark_Reapply_DisplayName",
   "Description": "Shared_Target_HuntersMark_Reapply_Description",
   "ExtraDescription": "Shared_Target_HuntersMark_Reapply_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d6,MainMeleeWeaponDamageType)"
   ],
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Target_InvokeDuplicity": {
   "Name": "Target_InvokeDuplicity",
   "SpellType": "Target",
   "TargetRadius": 9,
   "Icon": "Action_Cleric_InvokeDuplicity",
   "DisplayName": "Shared_Target_InvokeDuplicity_DisplayName",
   "Description": "Shared_Target_InvokeDuplicity_Description",
   "DescriptionParams": [
    "Distance(3)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Summon_InvokeDuplicity_L1to3",
   "TargetSound": "Spell_Impact_Summon_InvokeDuplicity_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "ChannelDivinity:1"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    "42aaefdc-cf9b-4249-b159-285041851f69(SPL_Arcane_Summon_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Summon",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsConcentration"
   ],
   "PrepareEffect": "d71f28ac-e1b7-4169-9670-a3cc1e338dc3",
   "CastEffect": "5215e8c4-dab6-49c5-8d5f-c1bd806c1938"
  },
  "Target_Knock": {
   "Name": "Target_Knock",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "Unlock()"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Item() and Locked()",
   "Icon": "Spell_Transmutation_Knock",
   "DisplayName": "Shared_Target_Knock_DisplayName",
   "Description": "Shared_Target_Knock_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_Knock_L1to3",
   "VocalComponentSound": "Vocal_Component_Knock",
   "TargetSound": "Spell_Impact_Utility_Knock_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "af94aac1-d8eb-4ccb-9520-694ade11b61c(SPL_Somatic_Target_Snap_01_Cast),,",
    "f5db4001-b136-4c48-9aa4-026c4a7dd3b7(SPL_Somatic_Target_Snap_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasHighGroundRangeExtension"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "60682975-b896-4740-8ae8-08e43bba3b16",
   "TargetEffect": "badef96e-8ec2-42d7-91a2-39602ef68d84"
  },
  "Target_Knock_LightCleric": {
   "Name": "Target_Knock_LightCleric",
   "SpellType": "Target",
   "Parent": "Target_Knock",
   "ExtraDescription": "Shared_Target_Knock_LightCleric_ExtraDescription"
  },
  "Target_Levitate": {
   "Name": "Target_Levitate",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Transmutation",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Constitution, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(LEVITATE,100,1)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Levitate_DisplayName",
   "Description": "Shared_Target_Levitate_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Levitate",
   "VocalComponentSound": "Vocal_Component_GrantFly",
   "TargetSound": "CrSpell_Impact_Levitate",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    ",,",
    "52891546-f9c1-4ade-b390-6882682c7c44(CMBT_Skill_MindBlast_01_Antic),,",
    "92fd64ad-6b10-46ba-a2a9-82633129f806(CMBT_Skill_MindBlast_01_Attack),,",
    "c554e614-bf70-4198-8ebf-1a32d25c658e(CMBT_Skill_MindBlast_01_Recover),,",
    ",,",
    "58c33026-840a-414e-9597-4e52d329488c(CMBT_Skill_MindBlast_01_Dash),,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "IsConcentration"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "CastEffect": "6dc4bf38-5a2e-4097-b52d-92849da976b1",
   "PositionEffect": "9754dfec-cfe2-4127-b862-910652ccad8f"
  },
  "Target_MageHand": {
   "Name": "Target_MageHand",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Conjuration",
   "AIFlags": [
    "CanNotUse"
   ],
   "TargetRadius": 18,
   "Icon": "Spell_Conjuration_MageHand",
   "DisplayName": "Shared_Target_MageHand_DisplayName",
   "Description": "Shared_Target_MageHand_Description",
   "CastTextEvent": "VFX_Somatic_03",
   "CastSound": "Spell_Cast_Utility_MageHand_L1to3",
   "TargetSound": "Spell_Impact_Utility_MageHand_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "IsConcentration"
   ],
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "518bc78f-c169-43ba-b951-977d75429199"
  },
  "Target_MageHand_GithyankiPsionics": {
   "Name": "Target_MageHand_GithyankiPsionics",
   "SpellType": "Target",
   "Parent": "Target_MageHand",
   "AIFlags": [
    "CanNotUse"
   ],
   "DisplayName": "Shared_Target_MageHand_GithyankiPsionics_DisplayName",
   "Description": "Shared_Target_MageHand_GithyankiPsionics_Description"
  },
  "Target_MinorIllusion": {
   "Name": "Target_MinorIllusion",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Illusion",
   "AIFlags": [
    "CanNotUse"
   ],
   "TargetRadius": 18,
   "AreaRadius": 18,
   "Icon": "Spell_Illusion_MinorIllusion",
   "DisplayName": "Shared_Target_MinorIllusion_DisplayName",
   "Description": "Shared_Target_MinorIllusion_Description",
   "ExtraDescription": "Shared_Target_MinorIllusion_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_MinorIllusion_L1to3",
   "TargetSound": "Spell_Impact_Utility_MinorIllusion_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasSomaticComponent",
    "IsSpell",
    "IgnoreSilence",
    "Stealth",
    "Invisible"
   ],
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "3fb29a92-c3c2-419a-a4ae-b2b969419685",
   "PositionEffect": "f8df9fce-dc18-403f-bd09-8ab31501cc8f"
  },
  "Target_MistyStep": {
   "Name": "Target_MistyStep",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "GROUND:TeleportSource()"
   ],
   "TargetRadius": 18,
   "Icon": "Spell_Conjuration_MistyStep",
   "DisplayName": "Shared_Target_MistyStep_DisplayName",
   "Description": "Shared_Target_MistyStep_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_MistyStep_L1to3",
   "VocalComponentSound": "Vocal_Component_Teleport",
   "TargetSound": "Spell_Impact_Utility_MistyStep_L1to3",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast),,",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "Invisible"
   ],
   "MemoryCost": 1,
   "LineOfSightFlags": "AddSourceHeight",
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "71859b27-bdda-44c3-8c65-7f142a1a2f60"
  },
  "Target_MistyStep_Githyanki": {
   "Name": "Target_MistyStep_Githyanki",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "Level": 0,
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Target_MistyStep_Shadow_TEST": {
   "Name": "Target_MistyStep_Shadow_TEST",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "Level": 0,
   "AreaRadius": 30
  },
  "Target_PsionicPull": {
   "Name": "Target_PsionicPull",
   "SpellType": "Target",
   "Parent": "Target_Hex",
   "Cooldown": "OncePerShortRest",
   "SpellProperties": [
    "Force(-6)"
   ],
   "TargetRadius": 18,
   "TargetConditions": "not Self() and not Grounded() and IsMovable()",
   "Icon": "TadpoleSuperPower_PsionicPull",
   "DisplayName": "Shared_Target_PsionicPull_DisplayName",
   "Description": "Shared_Target_PsionicPull_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_PsionicPull_L1to3",
   "TargetSound": "Spell_Impact_Tadpole_PsionicPull_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "f94542d9-a79c-478a-92de-573cead9260e(TAD_PsionicPull_01_Prepare),,",
    ",,",
    "5ca5b155-fbc3-465e-ab24-55421c91bea7(TAD_PsionicPull_01_Cast),,",
    "7da4ad07-cfc9-4de0-a02c-7f1b07fac394(TAD_PsionicPull_01_Recover),,",
    "bd339475-d2b5-46e8-8d0c-9f2ad6a91328(TAD_PsionicPull_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "AddFallDamageOnLand"
   ],
   "PrepareEffect": "45ebd6ef-1289-405d-a4d9-175dd021aa21",
   "CastEffect": "456933cc-f8c3-42d9-ae4c-622d83391cc6",
   "TargetEffect": "aafee3d2-0f5b-42b7-a91c-1397fb58dd25",
   "BeamEffect": "f23f8654-27d8-461e-a8cd-c3e6a19eba92"
  },
  "Target_Rally": {
   "Name": "Target_Rally",
   "SpellType": "Target",
   "SpellProperties": [
    "ApplyStatus(RALLY,100,5)"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Character() and Ally() and not Self()",
   "Icon": "Skill_Fighter_Rally",
   "DisplayName": "Shared_Target_Rally_DisplayName",
   "Description": "Shared_Target_Rally_Description",
   "DescriptionParams": [
    "RegainHitPoints(8)"
   ],
   "TooltipDamageList": [
    "RegainHitPoints(8)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(RALLY,100,5)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Rally",
   "TargetSound": "Action_Impact_Rally",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "BonusActionPoint:1",
    "SuperiorityDie:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Healing",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "PrepareEffect": "7a5b19df-0015-44ce-9a06-199d8e681e94",
   "CastEffect": "74a0c9e9-c932-462e-a5f9-3ff2b79834fa",
   "TargetEffect": "eedddf2e-a10d-44b9-b635-278fcf9b81b6"
  },
  "Target_Reduce": {
   "Name": "Target_Reduce",
   "SpellType": "Target",
   "Parent": "Target_EnlargeReduce",
   "SpellContainerID": "Target_EnlargeReduce",
   "SpellRoll": "SpellAutoResolveOnAlly(Ability.Constitution, SourceSpellDC(), true)",
   "SpellSuccess": [
    "ApplyStatus(REDUCE,100,10)"
   ],
   "Icon": "Spell_Transmutation_Reduce",
   "DisplayName": "Shared_Target_Reduce_DisplayName",
   "Description": "Shared_Target_Reduce_Description",
   "TooltipStatusApply": [
    "ApplyStatus(REDUCE,100,10)"
   ],
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Reduce",
   "VocalComponentSound": "Vocal_Component_Enlarge",
   "TargetSound": "Action_Impact_Reduce",
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "0149cfd3-d80f-4ce8-8cf7-234e0864ba46(SPL_Somatic_Aoe_Shrink_01_Cast),,",
    "1c58959b-8cb1-491d-89b7-2a7d0a593215(SPL_Somatic_Aoe_Shrink_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "PrepareEffect": "556fd141-698d-4c08-9322-ad155821260a",
   "CastEffect": "38776222-db33-4b53-9e23-ca3b47ab58cb",
   "TargetEffect": "5940ed61-049a-41dc-889b-0efd32655f36"
  },
  "Target_Reduce_LifeCleric": {
   "Name": "Target_Reduce_LifeCleric",
   "SpellType": "Target",
   "Parent": "Target_Reduce",
   "ExtraDescription": "Shared_Target_Reduce_LifeCleric_ExtraDescription"
  },
  "Target_SacredFlame": {
   "Name": "Target_SacredFlame",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Evocation",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC())",
   "SpellSuccess": [
    "DealDamage(1d8,Radiant)"
   ],
   "TargetConditions": "Character() and not Self()",
   "Icon": "Spell_Evocation_SacredFlame",
   "DisplayName": "Shared_Target_SacredFlame_DisplayName",
   "Description": "Shared_Target_SacredFlame_Description",
   "DescriptionParams": [
    "DealDamage(1d8,Radiant)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d8,Radiant)"
   ],
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Radiant_SacredFlame_L1to3",
   "TargetSound": "Spell_Impact_Damage_Radiant_SacredFlame_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "PrepareEffect": "7ad4b02c-14c7-4ab2-8a0e-16ea20097f32",
   "CastEffect": "2f784038-2bea-49ba-b7c1-7b128b16b167",
   "TargetEffect": "78c8a29a-cd3d-40a2-ba01-41d0ec4ccd74"
  },
  "Target_Sanctuary": {
   "Name": "Target_Sanctuary",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(SANCTUARY,100,10)"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Character()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Sanctuary_DisplayName",
   "Description": "Shared_Target_Sanctuary_Description",
   "CastSelfAnimation": "efbf3ee5-7340-4b29-8ab5-113b004a8e7b(SPL_Somatic_Self_Touch_01_Cast)",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "03496c4a-49e0-4132-b585-3e5ecd1ad8e5(SPL_Arcane_Buff_01_Prepare),,",
    ",,",
    "a640687f-b884-42d0-b147-6dd394b78cbd(SPL_Arcane_Buff_01_Cast),,",
    ",,",
    "a9682ef9-5d9e-4ac0-8144-2c7fe6eb868c(SPL_Arcane_Buff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell"
   ],
   "RechargeValues": "4-6",
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1
  },
  "Target_Scrying": {
   "Name": "Target_Scrying",
   "SpellType": "Target",
   "Level": 5,
   "SpellSchool": "Divination",
   "SpellProperties": [
    "GROUND:Summon(2f83206a-13c3-4ecb-a599-f6aa4708e149,10,,,)"
   ],
   "TargetRadius": 18,
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Scrying_DisplayName",
   "Description": "Shared_Target_Scrying_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:5"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "60f073b7-1e43-47a5-96c7-53376057e59a(SPL_Arcane_Summon_01_Cast),,",
    "f2137644-4bb4-4ed3-ab1d-d149719fbb53(SPL_Arcane_Summon_01_Recover),,",
    "42aaefdc-cf9b-4249-b159-285041851f69(SPL_Arcane_Summon_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Summon",
   "SpellFlags": [
    "IsConcentration"
   ],
   "MemoryCost": 1
  },
  "Target_ShapeTheFlowingRiver_IceBlock": {
   "Name": "Target_ShapeTheFlowingRiver_IceBlock",
   "SpellType": "Target",
   "SpellProperties": [
    "GROUND:Summon(dc1a3895-a328-4ba9-a090-e5251f4b44bd, -1,,,)"
   ],
   "TargetRadius": 18,
   "Icon": "unknown",
   "DisplayName": "Shared_Target_ShapeTheFlowingRiver_IceBlock_DisplayName",
   "Description": "Shared_Target_ShapeTheFlowingRiver_IceBlock_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "60f073b7-1e43-47a5-96c7-53376057e59a(SPL_Arcane_Summon_01_Cast),,",
    "f2137644-4bb4-4ed3-ab1d-d149719fbb53(SPL_Arcane_Summon_01_Recover),,",
    "42aaefdc-cf9b-4249-b159-285041851f69(SPL_Arcane_Summon_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Summon"
  },
  "Target_ShieldOfFaith": {
   "Name": "Target_ShieldOfFaith",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Abjuration",
   "SpellProperties": [
    "ApplyStatus(SHIELD_OF_FAITH,100,-1)"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Character()",
   "Icon": "Spell_Abjuration_ShieldOfFaith",
   "DisplayName": "Shared_Target_ShieldOfFaith_DisplayName",
   "Description": "Shared_Target_ShieldOfFaith_Description",
   "TooltipStatusApply": [
    "ApplyStatus(SHIELD_OF_FAITH,100,-1)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_ShieldOfFaith_L1to3",
   "TargetSound": "Spell_Impact_Buff_ShieldOfFaith_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "10caea0e-c949-4d91-8ab7-3b50019dd054(SPL_Somatic_Aoe_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell"
   ],
   "HitAnimationType": "MagicalNonDamage",
   "MemoryCost": 1,
   "PrepareEffect": "b4ce9bc6-813e-4b20-8081-9e4057bba299",
   "CastEffect": "1c5d1c5b-d8ff-42b5-8586-99aeaf901192",
   "TargetEffect": "b76f528c-3b42-4283-a10d-d0217baf3c7c"
  },
  "Target_ShieldOfFaith_2": {
   "Name": "Target_ShieldOfFaith_2",
   "SpellType": "Target",
   "Parent": "Target_ShieldOfFaith",
   "Icon": "Spell_Abjuration_ShieldOfFaith_2",
   "UseCosts": [
    "BonusActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_ShieldOfFaith",
   "PowerLevel": 2
  },
  "Target_SpeakWithDead": {
   "Name": "Target_SpeakWithDead",
   "SpellType": "Target",
   "Level": 3,
   "SpellSchool": "Necromancy",
   "SpellProperties": [
    "TARGET:ApplyStatus(SELF,SPEAK_WITH_DEAD_RECAST,100,-1)",
    "TARGET:ApplyStatus(SPEAK_WITH_DEAD,100,0)"
   ],
   "TargetRadius": 9,
   "Icon": "Spell_Necromancy_SpeakWithDead",
   "DisplayName": "Shared_Target_SpeakWithDead_DisplayName",
   "Description": "Shared_Target_SpeakWithDead_Description",
   "ExtraDescription": "Shared_Target_SpeakWithDead_ExtraDescription",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_SpeakWithDead_L1to3",
   "VocalComponentSound": "Vocal_Component_SpeakWithDead",
   "TargetSound": "Spell_Impact_Utility_SpeakWithDead_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "fa83395a-23db-42a2-972a-c4ecc66fead6(SPL_Arcane_Healing_01_Cast),,",
    "01e58b73-2a63-4986-a1d2-1a0838237c90(SPL_Arcane_Healing_01_Recover),,",
    "0c5dcc83-fa78-41da-b6a5-440b5ea30936(SPL_Arcane_Healing_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "5d4a5adb-db3a-47ed-9c29-b84e09425921",
   "CastEffect": "c582c3b6-2758-4d72-81f6-e45f07519a10"
  },
  "Target_SpeakWithDead_FreeRecast": {
   "Name": "Target_SpeakWithDead_FreeRecast",
   "SpellType": "Target",
   "Parent": "Target_SpeakWithDead",
   "SpellProperties": [
    "TARGET:ApplyStatus(SPEAK_WITH_DEAD,100,0)"
   ],
   "Icon": "Spell_Necromancy_RecastSpeakWithDead",
   "DisplayName": "Shared_Target_SpeakWithDead_FreeRecast_DisplayName",
   "Description": "Shared_Target_SpeakWithDead_FreeRecast_Description",
   "CastSound": "Spell_Cast_Utility_SpeakWithDead_L1to3",
   "TargetSound": "Spell_Impact_Utility_SpeakWithDead_L1to3",
   "MemoryCost": 0
  },
  "Target_SurvivalInstinct": {
   "Name": "Target_SurvivalInstinct",
   "SpellType": "Target",
   "Cooldown": "OncePerShortRest",
   "SpellProperties": [
    "ApplyStatus(SURVIVAL_INSTINCT,100,3)"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Ally() and not Dead()",
   "Icon": "TadpoleSuperPower_SurvivalInstinct",
   "DisplayName": "Shared_Target_SurvivalInstinct_DisplayName",
   "Description": "Shared_Target_SurvivalInstinct_Description",
   "DescriptionParams": [
    "RegainHitPoints(3d4)"
   ],
   "TooltipDamageList": [
    "RegainHitPoints(3d4)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_SurvivalInstinct_L1to3",
   "TargetSound": "Spell_Impact_Tadpole_SurvivalInstinct_L1to3",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "3ca3ec39-d0b9-42a5-b173-bc877d41339d(TAD_SurvivalInstinct_01_Prepare),,",
    ",,",
    "6df470fd-9ba1-4b8f-bec2-f7ff22811ecd(TAD_SurvivalInstinct_01_Cast),,",
    "1484b853-d893-4f48-bc0d-8bda8700462f(TAD_SurvivalInstinct_01_Recover),,",
    "32705177-0682-4882-a0e8-f02393a54299(TAD_SurvivalInstinct_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension"
   ],
   "PrepareEffect": "c018783b-a556-4093-b74a-b42ee43f8312",
   "CastEffect": "2cc72eb7-b8bf-4f53-8a05-23c55fa5b6ff",
   "TargetEffect": "4eed2f42-fa23-4e11-acee-012aa6dd93c2",
   "BeamEffect": "f6fdd33e-33ab-43ce-bc1c-e2f1a6b6b0eb"
  },
  "Target_SupernaturalAttraction": {
   "Name": "Target_SupernaturalAttraction",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "Cooldown": "OncePerShortRest",
   "Icon": "TadpoleSuperPower_SupernaturalAttraction",
   "DisplayName": "Shared_Target_SupernaturalAttraction_DisplayName",
   "Description": "Shared_Target_SupernaturalAttraction_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Tadpole_SupernaturalAttraction_L1to3",
   "TargetSound": "Spell_Impact_Tadpole_SupernaturalAttraction_L1to3",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "25d2e465-34e4-4bd8-a320-92ae706c580c(TAD_SupernaturalAttraction_01_Prepare),,",
    ",,",
    "da916b55-6679-41b1-bed0-27bd2c6a5f2c(TAD_SupernaturalAttraction_01_Cast),,",
    "7125ede4-469f-4caa-b037-b244c24eae12(TAD_SupernaturalAttraction_01_Recover),,",
    "a3632f21-d954-453b-b8dc-73ad50ddfdad(TAD_SupernaturalAttraction_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold"
   ],
   "LineOfSightFlags": "AddSourceHeight",
   "PrepareEffect": "54d12e90-23ce-4f2b-af51-c50be6e9c6a9",
   "CastEffect": "3b7811c6-4943-4403-aa2e-2f37d5bd5cab",
   "TargetEffect": "281603cd-0633-4aff-afc5-2f00d2f824b6"
  },
  "Target_ThornWhip": {
   "Name": "Target_ThornWhip",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Transmutation",
   "TargetRadius": 9,
   "SpellRoll": "Attack(AttackType.MeleeSpellAttack)",
   "SpellSuccess": [
    "TARGET:IF(TargetSizeEqualOrSmaller(Size.Large)):Force(-3)",
    " DealDamage(1d6,Piercing,Magical)"
   ],
   "TargetConditions": "not Self() and not Grounded() and (Item() or Character() or Dead())",
   "Icon": "Spell_Transmutation_ThornWhip",
   "DisplayName": "Shared_Target_ThornWhip_DisplayName",
   "Description": "Shared_Target_ThornWhip_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Piercing)",
    "Distance(3)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d6,Piercing)"
   ],
   "TooltipAttackSave": [
    "MeleeSpellAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_ThornWhip_L0",
   "VocalComponentSound": "Vocal_Component_DamagePiercingWhip",
   "TargetSound": "Spell_Impact_Damage_ThornWhip_L0",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "54d977c9-c17a-4ba2-a727-5c51f97ee91a(SPL_Druid_Damage_01_Prepare),,",
    ",,",
    "70a28457-dba7-46f7-b03c-ceb3b9e12bad(SPL_Arcane_01_Cast),,",
    "68868848-6341-448a-97e3-94aa43ad5faf(SPL_Arcane_01_Recover),,",
    "3fd6fd64-9a68-46c9-a7da-29a85e53ef7f(SPL_Druid_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "AddFallDamageOnLand"
   ],
   "MaximumTargets": 1,
   "PrepareEffect": "613e61ed-610d-4380-89f4-6c977a85b4df",
   "CastEffect": "f9eb379f-108c-443d-bf29-886774d0fb63",
   "TargetEffect": "037dc8e8-15e0-439f-ae4d-ad6a93e85cfd",
   "BeamEffect": "32b12e6c-7b91-4dab-aeb6-061578dbdf51"
  },
  "Target_TrueStrike": {
   "Name": "Target_TrueStrike",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Divination",
   "SpellProperties": [
    "ApplyStatus(TRUE_STRIKE,100,2)",
    "ApplyStatus(SELF,TRUE_STRIKE_OWNER,100,2)"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Character() and not Self()",
   "Icon": "Spell_Divination_TrueStrike",
   "DisplayName": "Shared_Target_TrueStrike_DisplayName",
   "Description": "Shared_Target_TrueStrike_Description",
   "TooltipStatusApply": [
    "ApplyStatus(TRUE_STRIKE,100,2)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_TrueStrike_L1to3",
   "TargetSound": "Spell_Impact_Debuff_TrueStrike_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellFlags": [
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "IsHarmful"
   ],
   "PrepareEffect": "556fd141-698d-4c08-9322-ad155821260a",
   "CastEffect": "65f12ba8-d67e-4e67-87f3-b69e520fb659",
   "TargetEffect": "de333436-aa42-45cc-a3da-14277ca1df60"
  },
  "Target_ViciousMockery": {
   "Name": "Target_ViciousMockery",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Enchantment",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, SourceSpellDC())",
   "SpellSuccess": [
    "DealDamage(1d4,Psychic)",
    "ApplyStatus(VICIOUSMOCKERY,100,1)"
   ],
   "TargetConditions": "Character() and not Ally()",
   "Icon": "Spell_Enchantment_ViciousMockery",
   "DisplayName": "Shared_Target_ViciousMockery_DisplayName",
   "Description": "Shared_Target_ViciousMockery_Description",
   "DescriptionParams": [
    "DealDamage(1d4,Psychic)"
   ],
   "ExtraDescription": "Shared_Target_ViciousMockery_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(1d4,Psychic)"
   ],
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(VICIOUSMOCKERY,100,1)"
   ],
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_DamagePsychicInsults",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "9bcbf658-8433-46f0-a34a-9c9d2dcd585b(SPL_Arcane_Damage_01_Cast),,",
    "d75865cd-fddd-4ad1-be34-d5b89155d7c6(SPL_Arcane_Damage_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Psychic"
  },
  "Target_WitchBolt_Activate": {
   "Name": "Target_WitchBolt_Activate",
   "SpellType": "Target",
   "SpellProperties": [
    "DealDamage(1d12,Lightning)",
    "SetStatusDuration(SELF,WITCH_BOLT_OWNER,2,false)"
   ],
   "TargetRadius": 18,
   "Icon": "Spell_Evocation_ActivateWitchBolt",
   "DisplayName": "Shared_Target_WitchBolt_Activate_DisplayName",
   "Description": "Shared_Target_WitchBolt_Activate_Description",
   "DescriptionParams": [
    "DealDamage(1d12,Lightning)"
   ],
   "ExtraDescription": "Shared_Target_WitchBolt_Activate_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(1d12,Lightning)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Lightning_ActivateWitchBolt_L1to3",
   "TargetSound": "Spell_Impact_Damage_Lightning_ActivateWitchBolt_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "9bcbf658-8433-46f0-a34a-9c9d2dcd585b(SPL_Arcane_Damage_01_Cast),,",
    "d75865cd-fddd-4ad1-be34-d5b89155d7c6(SPL_Arcane_Damage_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasHighGroundRangeExtension",
    "IsHarmful",
    "RangeIgnoreVerticalThreshold"
   ],
   "HitAnimationType": "MagicalDamage_Electric",
   "MemoryCost": 1,
   "PrepareEffect": "b0208571-de48-46e3-8752-1d648422537d",
   "CastEffect": "d3a05455-419f-4699-82c9-2320edc5b5fc",
   "TargetEffect": "371c77a2-456d-45c2-8504-864a3e10a364",
   "BeamEffect": "ef3b238c-12f6-47fb-a08a-af42b063aa96"
  },
  "Target_WildMagic_Teleport": {
   "Name": "Target_WildMagic_Teleport",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "TargetRadius": 9,
   "Icon": "Spell_WildMagic_Teleport_Activate",
   "DisplayName": "Shared_Target_WildMagic_Teleport_DisplayName",
   "Description": "Shared_Target_WildMagic_Teleport_Description",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "HasHighGroundRangeExtension",
    "RangeIgnoreVerticalThreshold",
    "Invisible"
   ]
  },
  "Target_SUMMON": {
   "Name": "Target_SUMMON",
   "SpellType": "Target",
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "60f073b7-1e43-47a5-96c7-53376057e59a(SPL_Arcane_Summon_01_Cast),,",
    "f2137644-4bb4-4ed3-ab1d-d149719fbb53(SPL_Arcane_Summon_01_Recover),,",
    "42aaefdc-cf9b-4249-b159-285041851f69(SPL_Arcane_Summon_01_Loop),,",
    ",,"
   ]
  },
  "Target_FlamingSphere": {
   "Name": "Target_FlamingSphere",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "GROUND:Summon(a4ca1c8f-d59b-4393-9c06-987713f8f74d, 10,Projectile_AiHelper_Summon_Weak,,INVULNERABLE_NOT_SHOWN)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 2,
   "Icon": "Spell_Conjuration_FlamingSphere",
   "DisplayName": "Shared_Target_FlamingSphere_DisplayName",
   "Description": "Shared_Target_FlamingSphere_Description",
   "DescriptionParams": [
    "DealDamage(2d6,Fire)",
    "Distance(6)"
   ],
   "ExtraDescription": "Shared_Target_FlamingSphere_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d6,Fire)"
   ],
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(FLAMING_SPHERE,100,10)"
   ],
   "CastTextEvent": "VFX_Somatic_03",
   "CastSound": "Spell_Cast_Summon_FlamingSphere_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "7552fe7c-f098-42a5-a312-9e9cd1fd6f52(SPL_Druid_Summon_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    "da2204ae-af10-408e-8102-9091e9312800(SPL_Druid_Summon_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Summon",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "IsConcentration"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "7b0dc211-4ba6-42fe-ab83-e0c9694193e4",
   "CastEffect": "42737352-fb2a-4afa-b0ff-9ea82aa11695"
  },
  "Target_FindFamiliar": {
   "Name": "Target_FindFamiliar",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Conjuration",
   "ContainerSpells": [
    "Target_FindFamiliar_Cat",
    "Target_FindFamiliar_Crab",
    "Target_FindFamiliar_Frog",
    "Target_FindFamiliar_Rat",
    "Target_FindFamiliar_Raven",
    "Target_FindFamiliar_Spider"
   ],
   "TargetRadius": 18,
   "Icon": "Spell_Conjuration_FindFamiliar",
   "DisplayName": "Shared_Target_FindFamiliar_DisplayName",
   "Description": "Shared_Target_FindFamiliar_Description",
   "CastTextEvent": "VFX_Somatic_03",
   "CastSound": "Spell_Cast_Summon_FindFamiliar_L1to3",
   "TargetSound": "Spell_Impact_Summon_FindFamiliar_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    "42aaefdc-cf9b-4249-b159-285041851f69(SPL_Arcane_Summon_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Summon",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent",
    "HasVerbalComponent",
    "HasHighGroundRangeExtension",
    "IsLinkedSpellContainer"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "739617e8-1255-4429-8b96-cc86296e0366",
   "CastEffect": "23d05225-027b-4656-97f8-564b185d37a2"
  },
  "Target_FindFamiliar_Cat": {
   "Name": "Target_FindFamiliar_Cat",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar",
   "SpellContainerID": "Target_FindFamiliar",
   "Icon": "Spell_Conjuration_FindFamiliar",
   "DisplayName": "Shared_Target_FindFamiliar_Cat_DisplayName",
   "Description": "Shared_Target_FindFamiliar_Cat_Description",
   "CastSound": "Spell_Cast_Summon_FindFamiliar_L1to3",
   "TargetSound": "Spell_Impact_Summon_FindFamiliar_L1to3",
   "PrepareEffect": "8e035a07-8928-4008-a86d-7f45ed61e39a"
  },
  "Target_FindFamiliar_Crab": {
   "Name": "Target_FindFamiliar_Crab",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar",
   "SpellContainerID": "Target_FindFamiliar",
   "Icon": "Spell_Conjuration_FindFamiliar_Crab",
   "DisplayName": "Shared_Target_FindFamiliar_Crab_DisplayName",
   "Description": "Shared_Target_FindFamiliar_Crab_Description",
   "CastSound": "Spell_Cast_Summon_FindFamiliar_L1to3",
   "TargetSound": "Spell_Impact_Summon_FindFamiliar_L1to3",
   "PrepareEffect": "fb3950e2-5b09-45eb-8a0e-c08caec35702"
  },
  "Target_FindFamiliar_Frog": {
   "Name": "Target_FindFamiliar_Frog",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar",
   "SpellContainerID": "Target_FindFamiliar",
   "Icon": "Spell_Conjuration_FindFamiliar_Frog",
   "DisplayName": "Shared_Target_FindFamiliar_Frog_DisplayName",
   "Description": "Shared_Target_FindFamiliar_Frog_Description",
   "CastSound": "Spell_Cast_Summon_FindFamiliar_L1to3",
   "TargetSound": "Spell_Impact_Summon_FindFamiliar_L1to3",
   "PrepareEffect": "4d182e6c-d69a-45cf-8e56-7cb65897342a"
  },
  "Target_FindFamiliar_Rat": {
   "Name": "Target_FindFamiliar_Rat",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar",
   "SpellContainerID": "Target_FindFamiliar",
   "Icon": "Spell_Conjuration_FindFamiliar_Rat",
   "DisplayName": "Shared_Target_FindFamiliar_Rat_DisplayName",
   "Description": "Shared_Target_FindFamiliar_Rat_Description",
   "CastSound": "Spell_Cast_Summon_FindFamiliar_L1to3",
   "TargetSound": "Spell_Impact_Summon_FindFamiliar_L1to3",
   "PrepareEffect": "f14fc064-bbc3-4cfc-bfd4-409d821b114e"
  },
  "Target_FindFamiliar_Raven": {
   "Name": "Target_FindFamiliar_Raven",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar",
   "SpellContainerID": "Target_FindFamiliar",
   "Icon": "Spell_Conjuration_FindFamiliar_Raven",
   "DisplayName": "Shared_Target_FindFamiliar_Raven_DisplayName",
   "Description": "Shared_Target_FindFamiliar_Raven_Description",
   "CastSound": "Spell_Cast_Summon_FindFamiliar_L1to3",
   "TargetSound": "Spell_Impact_Summon_FindFamiliar_L1to3",
   "PrepareEffect": "a74686e9-9ff0-4108-8f0d-107faa2bcd26"
  },
  "Target_FindFamiliar_Spider": {
   "Name": "Target_FindFamiliar_Spider",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar",
   "SpellContainerID": "Target_FindFamiliar",
   "Icon": "Spell_Conjuration_FindFamiliar_Spider",
   "DisplayName": "Shared_Target_FindFamiliar_Spider_DisplayName",
   "Description": "Shared_Target_FindFamiliar_Spider_Description",
   "CastSound": "Spell_Cast_Summon_FindFamiliar_L1to3",
   "TargetSound": "Spell_Impact_Summon_FindFamiliar_L1to3",
   "PrepareEffect": "9a8d6d5e-8b27-48dd-9c8f-72fa9ef07e28"
  },
  "Target_FindFamiliar_Ritual": {
   "Name": "Target_FindFamiliar_Ritual",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar",
   "ContainerSpells": [
    "Target_FindFamiliar_Cat_Ritual",
    "Target_FindFamiliar_Crab_Ritual",
    "Target_FindFamiliar_Frog_Ritual",
    "Target_FindFamiliar_Rat_Ritual",
    "Target_FindFamiliar_Raven_Ritual",
    "Target_FindFamiliar_Spider_Ritual"
   ],
   "CastSound": "Spell_Cast_Summon_FindFamiliar_L1to3",
   "TargetSound": "Spell_Impact_Summon_FindFamiliar_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellFlags": [
    "IsSpell",
    "IsLinkedSpellContainer",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension"
   ]
  },
  "Target_FindFamiliar_Cat_Ritual": {
   "Name": "Target_FindFamiliar_Cat_Ritual",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_Cat",
   "SpellContainerID": "Target_FindFamiliar_Ritual",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_FindFamiliar_Crab_Ritual": {
   "Name": "Target_FindFamiliar_Crab_Ritual",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_Crab",
   "SpellContainerID": "Target_FindFamiliar_Ritual",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_FindFamiliar_Frog_Ritual": {
   "Name": "Target_FindFamiliar_Frog_Ritual",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_Frog",
   "SpellContainerID": "Target_FindFamiliar_Ritual",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_FindFamiliar_Rat_Ritual": {
   "Name": "Target_FindFamiliar_Rat_Ritual",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_Rat",
   "SpellContainerID": "Target_FindFamiliar_Ritual",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_FindFamiliar_Raven_Ritual": {
   "Name": "Target_FindFamiliar_Raven_Ritual",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_Raven",
   "SpellContainerID": "Target_FindFamiliar_Ritual",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_FindFamiliar_Spider_Ritual": {
   "Name": "Target_FindFamiliar_Spider_Ritual",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_Spider",
   "SpellContainerID": "Target_FindFamiliar_Ritual",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_Moonbeam": {
   "Name": "Target_Moonbeam",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Evocation",
   "TargetRadius": 18,
   "AreaRadius": 1,
   "Icon": "Spell_Evocation_Moonbeam",
   "DisplayName": "Shared_Target_Moonbeam_DisplayName",
   "Description": "Shared_Target_Moonbeam_Description",
   "DescriptionParams": [
    "DealDamage(2d10,Radiant)"
   ],
   "ExtraDescription": "Shared_Target_Moonbeam_ExtraDescription",
   "ExtraDescriptionParams": [
    "Distance(18)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d10,Radiant)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "VFX_Somatic_03",
   "CastSound": "Spell_Cast_Damage_Moonbeam_L1to3",
   "TargetSound": "Spell_Impact_Damage_Moonbeam_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "54d977c9-c17a-4ba2-a727-5c51f97ee91a(SPL_Druid_Damage_01_Prepare),,",
    ",,",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast),,",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover),,",
    "3fd6fd64-9a68-46c9-a7da-29a85e53ef7f(SPL_Druid_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Summon",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "be75ea00-f753-4d9e-ab04-4993691d099c",
   "CastEffect": "e72cb38e-f92c-481c-b27a-121c54092fcd",
   "PositionEffect": "942910fa-d929-4d6b-956e-13befd2cab41"
  },
  "Target_Moonbeam_Move": {
   "Name": "Target_Moonbeam_Move",
   "SpellType": "Target",
   "Parent": "Target_Moonbeam",
   "Icon": "Skill_Druid_MoonBeam_Move",
   "DisplayName": "Shared_Target_Moonbeam_Move_DisplayName",
   "Description": "Shared_Target_Moonbeam_Move_Description",
   "DescriptionParams": [
    "Distance(18)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_MoveMoobeam_L1to3",
   "TargetSound": "Spell_Impact_Damage_MoveMoobeam_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast),,",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "RangeIgnoreVerticalThreshold",
    "IsConcentration",
    "IsSpell"
   ],
   "PrepareEffect": "5492343b-8bfe-4b4a-9f02-25db54e32e94",
   "CastEffect": "9c28dd9d-4b53-442e-b615-a0e2791edded",
   "PositionEffect": "1326ab01-fa41-4bff-8a76-c34b3916571c",
   "DisappearEffect": "74a72379-c655-4f4d-bb23-ddae742beaa3"
  },
  "Target_PactOfTheChain_Imp": {
   "Name": "Target_PactOfTheChain_Imp",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_Ritual",
   "SpellContainerID": "Target_FindFamiliar_Ritual",
   "Icon": "Action_Warlock_PactOfTheChain_Imp",
   "DisplayName": "Shared_Target_PactOfTheChain_Imp_DisplayName",
   "Description": "Shared_Target_PactOfTheChain_Imp_Description",
   "PrepareEffect": "c61eed94-a15b-48fd-b321-c5c0e767d490",
   "CastEffect": "d42fbc7d-b6d7-4c59-8081-2feffb80383a"
  },
  "Target_PactOfTheChain_Quasit": {
   "Name": "Target_PactOfTheChain_Quasit",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_Ritual",
   "SpellContainerID": "Target_FindFamiliar_Ritual",
   "Icon": "Action_Warlock_PactOfTheChain_Quasit",
   "DisplayName": "Shared_Target_PactOfTheChain_Quasit_DisplayName",
   "Description": "Shared_Target_PactOfTheChain_Quasit_Description",
   "PrepareEffect": "1a34e89b-4685-4dfc-a7ea-6efc03e448cc",
   "CastEffect": "d42fbc7d-b6d7-4c59-8081-2feffb80383a"
  },
  "Target_RangersCompanion": {
   "Name": "Target_RangersCompanion",
   "SpellType": "Target",
   "ContainerSpells": [
    "Target_RangersCompanion_Bear",
    "Target_RangersCompanion_Boar",
    "Target_RangersCompanion_GiantSpider",
    "Target_RangersCompanion_Raven",
    "Target_RangersCompanion_Wolf"
   ],
   "TargetRadius": 18,
   "Icon": "Skill_Ranger_RangersCompanion",
   "DisplayName": "Shared_Target_RangersCompanion_DisplayName",
   "Description": "Shared_Target_RangersCompanion_Description",
   "CastTextEvent": "VFX_Somatic_03",
   "CastSound": "Action_Cast_RangersCompanion",
   "TargetSound": "Action_Impact_RangersCompanion",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    "42aaefdc-cf9b-4249-b159-285041851f69(SPL_Arcane_Summon_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Summon",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "IgnoreSilence",
    "IgnoreVisionBlock",
    "IsLinkedSpellContainer"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "2adc2574-07ac-4116-ba89-9ffe367ff77b",
   "CastEffect": "a8bd13f1-3918-4c25-a3c4-ca312ef20178",
   "PositionEffect": "47de8912-a859-436b-b88b-e849b1f5e180"
  },
  "Target_RangersCompanion_Bear": {
   "Name": "Target_RangersCompanion_Bear",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion",
   "SpellContainerID": "Target_RangersCompanion",
   "Icon": "Action_Ranger_RangersCompanion_Bear",
   "DisplayName": "Shared_Target_RangersCompanion_Bear_DisplayName",
   "Description": "Shared_Target_RangersCompanion_Bear_Description"
  },
  "Target_RangersCompanion_Boar": {
   "Name": "Target_RangersCompanion_Boar",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion",
   "SpellContainerID": "Target_RangersCompanion",
   "Icon": "Action_Ranger_RangersCompanion_Boar",
   "DisplayName": "Shared_Target_RangersCompanion_Boar_DisplayName",
   "Description": "Shared_Target_RangersCompanion_Boar_Description"
  },
  "Target_RangersCompanion_GiantBadger": {
   "Name": "Target_RangersCompanion_GiantBadger",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion",
   "DisplayName": "Shared_Target_RangersCompanion_GiantBadger_DisplayName"
  },
  "Target_RangersCompanion_GiantSpider": {
   "Name": "Target_RangersCompanion_GiantSpider",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion",
   "SpellContainerID": "Target_RangersCompanion",
   "Icon": "Action_Ranger_RangersCompanion_GiantSpider",
   "DisplayName": "Shared_Target_RangersCompanion_GiantSpider_DisplayName",
   "Description": "Shared_Target_RangersCompanion_GiantSpider_Description"
  },
  "Target_RangersCompanion_Raven": {
   "Name": "Target_RangersCompanion_Raven",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion",
   "SpellContainerID": "Target_RangersCompanion",
   "Icon": "Action_Ranger_RangersCompanion_Raven",
   "DisplayName": "Shared_Target_RangersCompanion_Raven_DisplayName",
   "Description": "Shared_Target_RangersCompanion_Raven_Description"
  },
  "Target_RangersCompanion_Wolf": {
   "Name": "Target_RangersCompanion_Wolf",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion",
   "SpellContainerID": "Target_RangersCompanion",
   "Icon": "Action_Ranger_RangersCompanion_Wolf",
   "DisplayName": "Shared_Target_RangersCompanion_Wolf_DisplayName",
   "Description": "Shared_Target_RangersCompanion_Wolf_Description"
  },
  "Target_Summon_Quasit": {
   "Name": "Target_Summon_Quasit",
   "SpellType": "Target",
   "Parent": "Target_PactOfTheChain_Quasit",
   "DisplayName": "Shared_Target_Summon_Quasit_DisplayName"
  },
  "Target_MULTIPLE": {
   "Name": "Target_MULTIPLE",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_AOE": {
   "Name": "Target_AOE",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_CalmEmotions": {
   "Name": "Target_CalmEmotions",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Enchantment",
   "SpellProperties": [
    "RemoveStatus(SG_Charmed)",
    " RemoveStatus(SG_Frightened)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 6,
   "Icon": "unknown",
   "DisplayName": "Shared_Target_CalmEmotions_DisplayName",
   "Description": "Shared_Target_CalmEmotions_Description",
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_RemoveNegativeStatuses",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "1fd48304-2ba1-4dcb-8efa-4550517305ed(SPL_Arcane_Control_01_Cast),,",
    "2afb250c-e441-4573-a75e-e1fdad1c6064(SPL_Arcane_Control_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration"
   ],
   "MaximumTargets": 1,
   "MemoryCost": 1
  },
  "Target_CloudOfDaggers": {
   "Name": "Target_CloudOfDaggers",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "GROUND:Summon(0ba4af65-19d0-4a31-9a42-2c365462841b, 10,,,CLOUD_OF_DAGGERS_AURA)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 2,
   "Icon": "Spell_Conjuration_CloudOfDaggers",
   "DisplayName": "Shared_Target_CloudOfDaggers_DisplayName",
   "Description": "Shared_Target_CloudOfDaggers_Description",
   "DescriptionParams": [
    "DealDamage(4d4,Slashing)"
   ],
   "TooltipDamageList": [
    "DealDamage(4d4,Slashing)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Physical_CloudOfDaggers_L1to3",
   "TargetSound": "Spell_Impact_Damage_Physical_CloudOfDaggers_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "e61d2266-f041-4bd5-a488-7b66e76d781c",
   "PositionEffect": "1a3a7ca5-2072-43fe-b07e-cd52e1bbf3e6"
  },
  "Target_CreateWater": {
   "Name": "Target_CreateWater",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Transmutation",
   "SpellContainerID": "Target_CreateDestroyWater",
   "SpellProperties": [
    "ApplyStatus(WET,100, 3)",
    " GROUND:CreateSurface(4,0, Water)"
   ],
   "TargetRadius": 9,
   "AreaRadius": 4,
   "Icon": "Spell_Transmutation_CreateWater",
   "DisplayName": "Shared_Target_CreateWater_DisplayName",
   "Description": "Shared_Target_CreateWater_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_CreateWater_L1to3",
   "VocalComponentSound": "Vocal_Component_CreateWater",
   "TargetSound": "Spell_Impact_Utility_CreateWater_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "10caea0e-c949-4d91-8ab7-3b50019dd054(SPL_Somatic_Aoe_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "RangeIgnoreVerticalThreshold"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "06fda61b-8867-4f68-aee4-c1536bd11e78",
   "PositionEffect": "2c9ae2d5-5b85-458e-92fe-f311dae7f174"
  },
  "Target_CreateDestroyWater": {
   "Name": "Target_CreateDestroyWater",
   "SpellType": "Target",
   "Parent": "Target_CreateWater",
   "Level": 1,
   "SpellSchool": "Transmutation",
   "ContainerSpells": [
    "Target_CreateWater",
    "Target_DestroyWater"
   ],
   "DisplayName": "Shared_Target_CreateDestroyWater_DisplayName",
   "Description": "Shared_Target_CreateDestroyWater_Description",
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "10caea0e-c949-4d91-8ab7-3b50019dd054(SPL_Somatic_Aoe_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsLinkedSpellContainer"
   ]
  },
  "Target_CreateWater_StaffOfRain": {
   "Name": "Target_CreateWater_StaffOfRain",
   "SpellType": "Target",
   "Parent": "Target_CreateWater",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_CreateWater_2": {
   "Name": "Target_CreateWater_2",
   "SpellType": "Target",
   "Parent": "Target_CreateWater",
   "SpellProperties": [
    "ApplyStatus(WET,100, 3)",
    " GROUND:CreateSurface(6,0, Water)"
   ],
   "AreaRadius": 6,
   "Icon": "Spell_Transmutation_CreateWater_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_CreateWater",
   "PowerLevel": 2
  },
  "Target_Darkness": {
   "Name": "Target_Darkness",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:CreateSurface(5,10,DarknessCloud)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 5,
   "Icon": "Spell_Evocation_Darkness",
   "DisplayName": "Shared_Target_Darkness_DisplayName",
   "Description": "Shared_Target_Darkness_Description",
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_Darkness_L1to3",
   "VocalComponentSound": "Vocal_Component_Dark",
   "TargetSound": "Spell_Impact_Utility_Darkness_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "IsConcentration",
    "Stealth",
    "Invisible"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "e61d2266-f041-4bd5-a488-7b66e76d781c",
   "PositionEffect": "0afcbe13-7593-4bb7-8dfd-b7147a3f416c"
  },
  "Target_Darkness_DrowMagic": {
   "Name": "Target_Darkness_DrowMagic",
   "SpellType": "Target",
   "Parent": "Target_Darkness",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_DestroyWater": {
   "Name": "Target_DestroyWater",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Transmutation",
   "SpellContainerID": "Target_CreateDestroyWater",
   "SpellProperties": [
    "GROUND:SurfaceChange(DestroyWater)",
    "TARGET:RemoveStatus(WET)"
   ],
   "TargetRadius": 9,
   "AreaRadius": 4,
   "Icon": "Spell_Transmutation_DestroyWater",
   "DisplayName": "Shared_Target_DestroyWater_DisplayName",
   "Description": "Shared_Target_DestroyWater_Description",
   "DescriptionParams": [
    "Distance(4.5)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_DestroyWater_L1to3",
   "VocalComponentSound": "Vocal_Component_DestroyWater",
   "TargetSound": "Spell_Impact_Utility_DestroyWater_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "9d86c202-31a5-4ba3-ae60-ec4fbb425665(SPL_Somatic_Aoe_Widen_01_Cast),,",
    "a4112e22-e36f-44ff-828f-81252360da53(SPL_Somatic_Aoe_Widen_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "7121a488-7c9a-4ba1-a585-f79aaa77e97c",
   "CastEffect": "5f53bfeb-47de-4872-9e73-15cf400ffcda",
   "PositionEffect": "cb63bb8b-a3b1-47dd-9334-4e01c326c0ba"
  },
  "Target_DestroyWater_2": {
   "Name": "Target_DestroyWater_2",
   "SpellType": "Target",
   "Parent": "Target_DestroyWater",
   "AreaRadius": 6,
   "Icon": "Spell_Transmutation_DestroyWater_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_DestroyWater",
   "PowerLevel": 2
  },
  "Target_Entangle": {
   "Name": "Target_Entangle",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "GROUND:CreateSurface(3,10,Vines)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 3,
   "Icon": "Spell_Conjuration_Entangled",
   "DisplayName": "Shared_Target_Entangle_DisplayName",
   "Description": "Shared_Target_Entangle_Description",
   "ExtraDescription": "Shared_Target_Entangle_ExtraDescription",
   "TooltipAttackSave": [
    "Strength"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(ENSNARED_VINES, 100, -1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_Entangle_L1to3",
   "VocalComponentSound": "Vocal_Component_SurfaceCreationVines",
   "TargetSound": "Spell_Impact_Control_Entangle_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "b3f0ed98-2773-4fed-bcc1-6e19ba6b0063(SPL_Druid_Control_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "c52d5d9e-f118-41f5-a6a2-18d37dc9678d(SPL_Druid_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsConcentration",
    "IsHarmful"
   ],
   "RechargeValues": "5-6",
   "MemoryCost": 1,
   "PrepareEffect": "775854c6-d835-4468-99ef-8b33a5384e23",
   "CastEffect": "0c6e0ff4-62be-4d89-8f7f-7bb6b52789a9",
   "PositionEffect": "0295bd38-d6e5-48cb-9544-8f38e10a1532"
  },
  "Target_Entangle_2": {
   "Name": "Target_Entangle_2",
   "SpellType": "Target",
   "Parent": "Target_Entangle",
   "Icon": "Spell_Conjuration_Entangled_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_Entangle",
   "PowerLevel": 2
  },
  "Target_FaerieFire": {
   "Name": "Target_FaerieFire",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Evocation",
   "TargetRadius": 18,
   "AreaRadius": 6,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC())",
   "SpellSuccess": [
    "ApplyStatus(FAERIE_FIRE, 100, 10)"
   ],
   "Icon": "Spell_Evocation_FaerieFire",
   "DisplayName": "Shared_Target_FaerieFire_DisplayName",
   "Description": "Shared_Target_FaerieFire_Description",
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(FAERIE_FIRE, 100, 10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_FaerieFire_L1to3",
   "VocalComponentSound": "Vocal_Component_ShowInvisibleHidden",
   "TargetSound": "Spell_Position_Debuff_FaerieFire_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "10caea0e-c949-4d91-8ab7-3b50019dd054(SPL_Somatic_Aoe_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "IsConcentration",
    "IsHarmful",
    "RangeIgnoreVerticalThreshold"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "556fd141-698d-4c08-9322-ad155821260a",
   "CastEffect": "38776222-db33-4b53-9e23-ca3b47ab58cb",
   "TargetEffect": "134c228b-8e64-4268-b10a-9b53493dd248",
   "PositionEffect": "7db045f9-83ac-4768-88c8-48563b685a9d"
  },
  "Target_FaerieFire_LightCleric": {
   "Name": "Target_FaerieFire_LightCleric",
   "SpellType": "Target",
   "Parent": "Target_FaerieFire",
   "ExtraDescription": "Shared_Target_FaerieFire_LightCleric_ExtraDescription"
  },
  "Target_FaerieFire_LightCleric_2": {
   "Name": "Target_FaerieFire_LightCleric_2",
   "SpellType": "Target",
   "Parent": "Target_FaerieFire_LightCleric",
   "Icon": "Spell_Evocation_FaerieFire_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Target_FaerieFire_LightCleric",
   "PowerLevel": 2
  },
  "Target_FaerieFire_DrowMagic": {
   "Name": "Target_FaerieFire_DrowMagic",
   "SpellType": "Target",
   "Parent": "Target_FaerieFire",
   "Cooldown": "OncePerRest",
   "DisplayName": "Shared_Target_FaerieFire_DrowMagic_DisplayName",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_FaerieFire_2": {
   "Name": "Target_FaerieFire_2",
   "SpellType": "Target",
   "Parent": "Target_FaerieFire",
   "Icon": "Spell_Evocation_FaerieFire_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_FaerieFire",
   "PowerLevel": 2
  },
  "Target_FogCloud": {
   "Name": "Target_FogCloud",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "GROUND:CreateSurface(4.5,600,FogCloud,true)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 4,
   "Icon": "Spell_Conjuration_FogCloud",
   "DisplayName": "Shared_Target_FogCloud_DisplayName",
   "Description": "Shared_Target_FogCloud_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_FogCloud_L1to3",
   "VocalComponentSound": "Vocal_Component_SurfaceCreationCloud",
   "TargetSound": "Spell_Impact_Control_FogCloud_L1to3",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "10caea0e-c949-4d91-8ab7-3b50019dd054(SPL_Somatic_Aoe_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "RangeIgnoreVerticalThreshold"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "b4221f40-bcc3-4703-acc5-1afaee284839",
   "PositionEffect": "2de1821f-02b9-454d-8436-382c9879becd"
  },
  "Target_FogCloud_2": {
   "Name": "Target_FogCloud_2",
   "SpellType": "Target",
   "Parent": "Target_FogCloud",
   "SpellProperties": [
    "GROUND:CreateSurface(6,600,FogCloud,true)"
   ],
   "AreaRadius": 6,
   "Icon": "Spell_Conjuration_FogCloud_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_FogCloud",
   "PowerLevel": 2
  },
  "Target_Grease": {
   "Name": "Target_Grease",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "GROUND:CreateSurface(4,10,Grease)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 4,
   "Icon": "Spell_Conjuration_Grease",
   "DisplayName": "Shared_Target_Grease_DisplayName",
   "Description": "Shared_Target_Grease_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_Grease_L1to3",
   "VocalComponentSound": "Vocal_Component_SurfaceCreationGrease",
   "TargetSound": "Spell_Impact_Control_Grease_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasSomaticComponent",
    "HasVerbalComponent",
    "IsSpell",
    "HasHighGroundRangeExtension"
   ],
   "RechargeValues": 6,
   "MemoryCost": 1,
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "ba496ed9-5d72-4243-8918-18cb3b2703ee",
   "PositionEffect": "38480f98-ea71-41e5-9427-a4aa3bf20fd4"
  },
  "Target_Grease_2": {
   "Name": "Target_Grease_2",
   "SpellType": "Target",
   "Parent": "Target_Grease",
   "Icon": "Spell_Conjuration_Grease_2",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Target_Grease",
   "PowerLevel": 2
  },
  "Target_Shatter": {
   "Name": "Target_Shatter",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Evocation",
   "TargetRadius": 18,
   "AreaRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Constitution, SourceSpellDC(),false,IsInorganic())",
   "SpellSuccess": [
    "DealDamage(3d8,Thunder)"
   ],
   "Icon": "Spell_Evocation_Shatter",
   "DisplayName": "Shared_Target_Shatter_DisplayName",
   "Description": "Shared_Target_Shatter_Description",
   "DescriptionParams": [
    "DealDamage(3d8,Thunder)"
   ],
   "ExtraDescription": "Shared_Target_Shatter_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(3d8,Thunder)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Thunder_Shatter_L1to3",
   "TargetSound": "Spell_Impact_Damage_Thunder_Shatter_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast),,",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsSpell",
    "HasHighGroundRangeExtension",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Psychic",
   "MemoryCost": 1,
   "PrepareEffect": "2af907e1-127c-4c83-a117-af18f211c59d",
   "CastEffect": "ee3c85ae-0078-4223-9345-c2594535d1f2",
   "PositionEffect": "326e77b8-3951-4507-b42a-838533b274e2"
  },
  "Target_Silence": {
   "Name": "Target_Silence",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Illusion",
   "SpellProperties": [
    "GROUND:Summon(edca6656-dc8c-410b-9f16-fcc02d5ed803, 100,Projectile_AiHelper_Silence,,SILENCED_AURA)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 6,
   "Icon": "Spell_Illusion_Silence",
   "DisplayName": "Shared_Target_Silence_DisplayName",
   "Description": "Shared_Target_Silence_Description",
   "ExtraDescription": "Shared_Target_Silence_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_Silence_L1to3",
   "VocalComponentSound": "Vocal_Component_Silence",
   "TargetSound": "Spell_Impact_Debuff_Silence_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "9313094a-bae2-454f-9701-f920d0e8e98d(SPL_Arcane_Debuff_01_Prepare),,",
    ",,",
    "4148823a-6dbc-4692-a8ff-71520315a10f(SPL_Somatic_Target_Mute_01_Cast),,",
    "1b8cdb9d-6f8e-4161-901c-1fd7a7787c7c(SPL_Somatic_Target_Mute_01_Recover),,",
    "808fdfab-2e6c-472e-b3c4-19ce4a719d9d(SPL_Arcane_Debuff_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell"
   ],
   "MaximumTargets": 1,
   "MemoryCost": 1,
   "PrepareEffect": "556fd141-698d-4c08-9322-ad155821260a",
   "CastEffect": "38776222-db33-4b53-9e23-ca3b47ab58cb",
   "TargetEffect": "b5b72f72-297b-4a96-b215-b5611359555a",
   "PositionEffect": "7db045f9-83ac-4768-88c8-48563b685a9d"
  },
  "Target_Sleep": {
   "Name": "Target_Sleep",
   "SpellType": "Target",
   "Level": 1,
   "SpellSchool": "Enchantment",
   "SpellProperties": [
    "ApplyStatus(SLEEP,100,2)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 6,
   "Icon": "Spell_Enchantment_Sleep",
   "DisplayName": "Shared_Target_Sleep_DisplayName",
   "Description": "Shared_Target_Sleep_Description",
   "DescriptionParams": [
    "RegainHitPoints(24)"
   ],
   "ExtraDescription": "Shared_Target_Sleep_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(SLEEP,100,2)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_Sleep_L1to3",
   "TargetSound": "Spell_Impact_Control_Sleep_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "af94aac1-d8eb-4ccb-9520-694ade11b61c(SPL_Somatic_Target_Snap_01_Cast),,",
    "f5db4001-b136-4c48-9aa4-026c4a7dd3b7(SPL_Somatic_Target_Snap_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "IsHarmful",
    "RangeIgnoreVerticalThreshold"
   ],
   "MaximumTotalTargetHP": 24,
   "MemoryCost": 1,
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "40f543cf-7aac-4da5-bc97-b11bb693d297",
   "TargetEffect": "91ef374a-8917-4b10-a4dc-89ba36ec60b4",
   "PositionEffect": "69cd378b-2fa5-466b-bbf4-2c2ccb165717"
  },
  "Target_Sleep_2": {
   "Name": "Target_Sleep_2",
   "SpellType": "Target",
   "Parent": "Target_Sleep",
   "Icon": "Spell_Enchantment_Sleep_2",
   "DescriptionParams": [
    "RegainHitPoints(32)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "MaximumTotalTargetHP": 32,
   "RootSpellID": "Target_Sleep",
   "PowerLevel": 2
  },
  "Target_Sleep_GP2": {
   "Name": "Target_Sleep_GP2",
   "SpellType": "Target",
   "Parent": "Target_Sleep",
   "SpellRoll": "not SavingThrow(Ability.Constitution, 30)"
  },
  "Target_SpikeGrowth": {
   "Name": "Target_SpikeGrowth",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Transmutation",
   "SpellProperties": [
    "GROUND:CreateSurface(6,100,SpikeGrowth)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 6,
   "Icon": "Spell_Transmutation_SpikeGrowth",
   "DisplayName": "Shared_Target_SpikeGrowth_DisplayName",
   "Description": "Shared_Target_SpikeGrowth_Description",
   "DescriptionParams": [
    "DealDamage(1d4,Piercing)",
    "Distance(1.5)"
   ],
   "ExtraDescription": "Shared_Target_SpikeGrowth_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(1d4,Piercing)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_SpikeGrowth_L1to3",
   "TargetSound": "Spell_Impact_Control_SpikeGrowth_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "SpellAnimation": [
    "54d977c9-c17a-4ba2-a727-5c51f97ee91a(SPL_Druid_Damage_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "3fd6fd64-9a68-46c9-a7da-29a85e53ef7f(SPL_Druid_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsConcentration",
    "IsSpell",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "e8109f4b-2439-4424-9bc8-743270220f47",
   "CastEffect": "31e60ea0-1592-4e14-a1b5-5d32a9b36b76",
   "PositionEffect": "da921a23-90aa-4b41-a6ee-a965c80986c1"
  },
  "Target_Web": {
   "Name": "Target_Web",
   "SpellType": "Target",
   "Level": 2,
   "SpellSchool": "Conjuration",
   "SpellProperties": [
    "GROUND:CreateSurface(4,10,Web)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 4,
   "Icon": "Spell_Conjuration_Web",
   "DisplayName": "Shared_Target_Web_DisplayName",
   "Description": "Shared_Target_Web_Description",
   "ExtraDescription": "Shared_Target_Web_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Control_Web_L1to3",
   "VocalComponentSound": "Vocal_Component_SurfaceCreationWeb",
   "TargetSound": "Spell_Impact_Control_Web_L1to3",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "09ae2f11-f5b4-42f5-ae16-687a5b57d500(SPL_Somatic_Aoe_01_Cast),,",
    "10caea0e-c949-4d91-8ab7-3b50019dd054(SPL_Somatic_Aoe_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "RangeIgnoreVerticalThreshold"
   ],
   "RechargeValues": "5-6",
   "MemoryCost": 1,
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "b4221f40-bcc3-4703-acc5-1afaee284839",
   "PositionEffect": "2de1821f-02b9-454d-8436-382c9879becd"
  },
  "Target_MONSTERS": {
   "Name": "Target_MONSTERS",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack"
  },
  "Target_AnimateDead_NPC": {
   "Name": "Target_AnimateDead_NPC",
   "SpellType": "Target",
   "Level": 3,
   "SpellSchool": "Necromancy",
   "SpellProperties": [
    "AI_IGNORE:ApplyStatus(EXPLODE,100,1)",
    "AI_IGNORE:Summon(e7191344-8bd6-4587-a4a5-0431c6882892, 5,Projectile_AiHelper_Summon_Weak,,)",
    "AI_ONLY:Resurrect(100,100)"
   ],
   "TargetRadius": 18,
   "Icon": "unknown",
   "DisplayName": "Shared_Target_AnimateDead_NPC_DisplayName",
   "Description": "Shared_Target_AnimateDead_NPC_Description",
   "ExtraDescription": "Shared_Target_AnimateDead_NPC_ExtraDescription",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_AnimateDead",
   "VocalComponentSound": "Vocal_Component_AnimateDead",
   "TargetSound": "CrSpell_Impact_AnimateDead",
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:3"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    "42aaefdc-cf9b-4249-b159-285041851f69(SPL_Arcane_Summon_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Summon",
   "SpellStyleGroup": "Class",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell"
   ],
   "RechargeValues": "3-6",
   "MaximumTargets": 1,
   "MemoryCost": 1,
   "CastEffect": "a9894b81-aeab-49c7-a457-b0e0a6d8376f",
   "TargetEffect": "054f894c-52e9-476b-bee2-f4d388ad318c"
  },
  "Target_AnimatingSpores": {
   "Name": "Target_AnimatingSpores",
   "SpellType": "Target",
   "SpellSchool": "None",
   "SpellProperties": [
    "AI_IGNORE:ApplyStatus(CREATURE_SPORE_SERVANT,100,-1)",
    "Resurrect(100,65)",
    "AI_ONLY:ApplyStatus(SELF, AI_HELPER_BUFF,100,1)"
   ],
   "TargetRadius": 3,
   "Icon": "Action_Glut_RaiseDeadViaSpores",
   "DisplayName": "Shared_Target_AnimatingSpores_DisplayName",
   "Description": "Shared_Target_AnimatingSpores_Description",
   "ExtraDescription": "Shared_Target_AnimatingSpores_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_AnimatingSpores",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "c9f9e5ed-e39f-47a8-bf43-4013ec1a0ce3(CMBT_Skill_SporesAnimating_01_Prepare),,",
    "8ca3941c-09c3-4e11-8454-81e4e6cd64c7(CMBT_Skill_SporesAnimating_01_Antic),,",
    "6fd2f49d-1537-4bb6-9719-98a543d66f0b(CMBT_Skill_SporesAnimating_01_Attack),,",
    "dbe65fa1-f13c-4f6f-a9be-9f6dbeb51d9e(CMBT_Skill_SporesAnimating_01_Recover),,",
    "647899fc-7faa-4feb-8222-6fb374b919dd(CMBT_Skill_SporesAnimating_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent"
   ],
   "CastEffect": "4c724b78-3970-43ea-9109-3dde7df6eb53",
   "TargetEffect": "b04345d2-17a5-4b20-b0a0-17f8e321f0a6"
  },
  "Target_Beak": {
   "Name": "Target_Beak",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetRadius": "1.5",
   "Icon": "Action_Raven_BeakAttack",
   "DisplayName": "Shared_Target_Beak_DisplayName",
   "Description": "Shared_Target_Beak_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_BeakAttack",
   "TargetSound": "CrSpell_Impact_BeakAttack",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "69afddfd-8746-4e08-8b4a-846acc767e8e"
  },
  "Target_Beak_Raven_Summon": {
   "Name": "Target_Beak_Raven_Summon",
   "SpellType": "Target",
   "Parent": "Target_Beak",
   "CastSound": "CrSpell_Cast_BeakAttack",
   "TargetSound": "CrSpell_Impact_BeakAttack",
   "TargetEffect": "7d2fc16c-eedb-4311-9f17-f71c223a48c9"
  },
  "Target_Beak_Raven_Familiar": {
   "Name": "Target_Beak_Raven_Familiar",
   "SpellType": "Target",
   "Parent": "Target_Beak_Raven_Summon",
   "CastSound": "CrSpell_Cast_BeakAttack",
   "TargetSound": "CrSpell_Impact_BeakAttack"
  },
  "Target_Bite": {
   "Name": "Target_Bite",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetRadius": "1.5",
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "Action_VampireBite",
   "DisplayName": "Shared_Target_Bite_DisplayName",
   "Description": "Shared_Target_Bite_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Bite",
   "TargetSound": "CrSpell_Impact_Bite",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),366693ee-d97f-4294-a4dd-a2145ddc4e6a(CMBT_Melee_RHand_01_Antic_LOW),9f2d32b9-529a-4b75-b3df-6e1ae1395280(CMBT_Melee_RHand_01_Antic_HIGH)",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),479ee5da-2967-41e1-b7d1-a94e864a5f25(CMBT_Melee_RHand_01_Attack_LOW),79323098-edb3-4993-ba50-9b5f705e9878(CMBT_Melee_RHand_01_Attack_HIGH)",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),b5cb923d-0c08-4c20-89a9-44b9bf98c6cb(CMBT_Melee_RHand_01_Recover_LOW),6282d127-0c06-4365-9d53-6f32ef350127(CMBT_Melee_RHand_01_Recover_HIGH)",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),ecbf9949-3b33-432c-b735-e47aaed0924a(CMBT_Melee_RHand_01_Dash_LOW),e71a7c08-fdc1-4a0b-9a90-1c793c58553c(CMBT_Melee_RHand_01_Dash_HIGH)"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "dc2d6fa3-5fe4-4aa0-bc5e-20213fd4e065"
  },
  "Target_Bite_Bear_Brown": {
   "Name": "Target_Bite_Bear_Brown",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "f0285b1d-d943-4b03-bc9e-c5681436ac2e"
  },
  "Target_Bite_Bear_Black_Summon": {
   "Name": "Target_Bite_Bear_Black_Summon",
   "SpellType": "Target",
   "Parent": "Target_Bite_Bear_Brown",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "c347229b-82c8-4227-9194-48cf0e9f7990"
  },
  "Target_Bite_Bulette": {
   "Name": "Target_Bite_Bulette",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "Description": "Shared_Target_Bite_Bulette_Description",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "6c6072de-ab2e-41b9-8f14-941d4d0c5b3b"
  },
  "Target_Bite_Wolf": {
   "Name": "Target_Bite_Wolf",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "Icon": "Action_Wolf_Bite",
   "Description": "Shared_Target_Bite_Wolf_Description",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "937a72bb-2c7f-4446-a1d3-9e49227d984e",
   "TargetEffect": "1cfd2cce-fbcb-464f-b6b6-1628a982dd08"
  },
  "Target_Bite_Dog": {
   "Name": "Target_Bite_Dog",
   "SpellType": "Target",
   "Parent": "Target_Bite_Wolf",
   "CastSound": "CrSpell_Cast_BiteTiny",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "efd9975f-5acc-4c4a-b090-a9d7f4ac0908"
  },
  "Target_Bite_GiantBadger": {
   "Name": "Target_Bite_GiantBadger",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "Icon": "Action_GiantBadger_Bite",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "6ed817f5-1dc1-4c1d-bd9c-ad704eb70d9f",
   "TargetEffect": "8873134a-184d-4d2c-a33f-75de78b10070"
  },
  "Target_Bite_GiantBadger_Summon": {
   "Name": "Target_Bite_GiantBadger_Summon",
   "SpellType": "Target",
   "Parent": "Target_Bite_GiantBadger",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "8996de7a-feb9-45d6-abd8-d510d47340a1",
   "TargetEffect": "910eeb47-b650-402e-8a0f-e2e49095d3a1"
  },
  "Target_Bite_GiantSpider": {
   "Name": "Target_Bite_GiantSpider",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "Icon": "Action_Spider_Giant_PoisonousBite",
   "DisplayName": "Shared_Target_Bite_GiantSpider_DisplayName",
   "Description": "Shared_Target_Bite_GiantSpider_Description",
   "ExtraDescription": "Shared_Target_Bite_GiantSpider_ExtraDescription",
   "TooltipStatusApply": [
    "ApplyStatus(POISONED,100,1)"
   ],
   "CastSound": "CrSpell_Cast_Bite",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "c6318d1b-1355-4f49-8c9e-0db3d3ba4805",
   "TargetEffect": "37fb3d92-5d02-4cbe-a3f0-f6ffee18bdd3"
  },
  "Target_Bite_GiantSpider_Summon": {
   "Name": "Target_Bite_GiantSpider_Summon",
   "SpellType": "Target",
   "Parent": "Target_Bite_GiantSpider",
   "CastSound": "CrSpell_Cast_Bite",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "5eb98732-f43f-413d-93da-a461be893035",
   "TargetEffect": "594a3a82-6e67-40aa-a156-e6909b839d76"
  },
  "Target_Bite_GiantSpider_Wildshape": {
   "Name": "Target_Bite_GiantSpider_Wildshape",
   "SpellType": "Target",
   "Parent": "Target_Bite_GiantSpider",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Bite_SwordSpider": {
   "Name": "Target_Bite_SwordSpider",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "CastSound": "CrSpell_Cast_Bite",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Bite_Mimic": {
   "Name": "Target_Bite_Mimic",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Bite_Mimic_DisplayName",
   "Description": "Shared_Target_Bite_Mimic_Description",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "a81ca52d-3414-4eaa-a5d5-468dd3bb3a58",
   "TargetEffect": "19407593-7dd1-41a8-8168-dfbd106e87c8"
  },
  "Target_Bite_PhaseSpider": {
   "Name": "Target_Bite_PhaseSpider",
   "SpellType": "Target",
   "Parent": "Target_Bite_GiantSpider",
   "TargetRadius": "1.5",
   "Description": "Shared_Target_Bite_PhaseSpider_Description",
   "CastSound": "CrSpell_Cast_Bite",
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "49dbd783-7925-4431-876e-ffbb8f1e1588"
  },
  "Target_Bite_PhaseSpider_Queen": {
   "Name": "Target_Bite_PhaseSpider_Queen",
   "SpellType": "Target",
   "Parent": "Target_Bite_PhaseSpider",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 2,
   "TargetConditions": "not Self() and not Dead() and not Item()",
   "CastSound": "CrSpell_Cast_Bite",
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "ebb697f8-053d-4a13-9d72-e20854a1530b"
  },
  "Target_Bite_PhaseSpider_Queen_ExtraAttack": {
   "Name": "Target_Bite_PhaseSpider_Queen_ExtraAttack",
   "SpellType": "Target",
   "Parent": "Target_Bite_PhaseSpider_Queen",
   "Cooldown": "OncePerTurn",
   "DisplayName": "Shared_Target_Bite_PhaseSpider_Queen_ExtraAttack_DisplayName",
   "SpellFlags": [
    "IsMelee",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Bite_TinySpider": {
   "Name": "Target_Bite_TinySpider",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "Icon": "Action_Spider_Tiny_Bite",
   "Description": "Shared_Target_Bite_TinySpider_Description",
   "CastSound": "CrSpell_Cast_BiteTiny",
   "TargetSound": "CrSpell_Impact_BiteTiny",
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "4627cd52-e315-42bb-b614-5b0d4814d0a1"
  },
  "Target_Bite_TinySpider_Familiar": {
   "Name": "Target_Bite_TinySpider_Familiar",
   "SpellType": "Target",
   "Parent": "Target_Bite_TinySpider",
   "SpellSuccess": [
    "DealDamage(1, Piercing)",
    "TARGET:IF(not SavingThrow(Ability.Constitution,9)):DealDamage(1d4, Poison)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "DescriptionParams": [
    "DealDamage(1, Piercing)",
    "DealDamage(1d4, Poison)"
   ],
   "TooltipDamageList": [
    "DealDamage(1, Piercing)",
    "DealDamage(1d4, Poison)"
   ],
   "CastSound": "CrSpell_Cast_BiteTiny",
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Bite_TinySpider_Phase": {
   "Name": "Target_Bite_TinySpider_Phase",
   "SpellType": "Target",
   "Parent": "Target_Bite_TinySpider",
   "Description": "Shared_Target_Bite_TinySpider_Phase_Description",
   "CastSound": "CrSpell_Cast_BiteTiny",
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Bite_Gnoll": {
   "Name": "Target_Bite_Gnoll",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6212dab3-5676-4fa1-98a0-a043a87422d7(CMBT_Skill_FuriousBite_01_Antic),,",
    "f8efd116-b48c-4378-a29b-9bbb9d2f2dda(CMBT_Skill_FuriousBite_01_Attack),,",
    "cf8b2455-87d7-4939-b558-17faa32291e7(CMBT_Skill_FuriousBite_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "c56afacd-3afd-4f01-a1aa-c953587953b5(CMBT_Skill_FuriousBite_01_Dash),,"
   ],
   "WeaponTypes": [
    "None"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "c7f5f2ef-60f2-42d2-a7ec-a94125c0a422"
  },
  "Target_Bite_Gnoll_Bonus": {
   "Name": "Target_Bite_Gnoll_Bonus",
   "SpellType": "Target",
   "Parent": "Target_Bite_Gnoll",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6212dab3-5676-4fa1-98a0-a043a87422d7(CMBT_Skill_FuriousBite_01_Antic),,",
    "f8efd116-b48c-4378-a29b-9bbb9d2f2dda(CMBT_Skill_FuriousBite_01_Attack),,",
    "cf8b2455-87d7-4939-b558-17faa32291e7(CMBT_Skill_FuriousBite_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "c56afacd-3afd-4f01-a1aa-c953587953b5(CMBT_Skill_FuriousBite_01_Dash),,"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "6def0ee2-cd39-4085-bd45-206ea2e13df2"
  },
  "Target_Bite_Gnoll_Fang": {
   "Name": "Target_Bite_Gnoll_Fang",
   "SpellType": "Target",
   "Parent": "Target_Bite_Gnoll",
   "DisplayName": "Shared_Target_Bite_Gnoll_Fang_DisplayName",
   "Description": "Shared_Target_Bite_Gnoll_Fang_Description",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6212dab3-5676-4fa1-98a0-a043a87422d7(CMBT_Skill_FuriousBite_01_Antic),,",
    "f8efd116-b48c-4378-a29b-9bbb9d2f2dda(CMBT_Skill_FuriousBite_01_Attack),,",
    "cf8b2455-87d7-4939-b558-17faa32291e7(CMBT_Skill_FuriousBite_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "c56afacd-3afd-4f01-a1aa-c953587953b5(CMBT_Skill_FuriousBite_01_Dash),,"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "e862152e-a2ac-4641-b600-f4b5c5d8d64a"
  },
  "Target_Bite_Gnoll_Fang_Bonus": {
   "Name": "Target_Bite_Gnoll_Fang_Bonus",
   "SpellType": "Target",
   "Parent": "Target_Bite_Gnoll_Fang",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Bite_Hyena": {
   "Name": "Target_Bite_Hyena",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "1c6b835c-c34e-4e83-b01c-c5d3cbefc5fb"
  },
  "Target_Bite_Spectator": {
   "Name": "Target_Bite_Spectator",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Bite_Rat_Summon": {
   "Name": "Target_Bite_Rat_Summon",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "SpellSuccess": [
    "DealDamage(1,Piercing)",
    "ApplyStatus(RAT_INFECTED,100,10)"
   ],
   "Icon": "Action_Rat_PlagueBite",
   "DisplayName": "Shared_Target_Bite_Rat_Summon_DisplayName",
   "Description": "Shared_Target_Bite_Rat_Summon_Description",
   "DescriptionParams": [
    "DealDamage(1,Piercing)"
   ],
   "ExtraDescription": "Shared_Target_Bite_Rat_Summon_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(1,Piercing)"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "3e73d54d-694a-4984-8725-920023578f87",
   "CastEffect": "6a7f3791-7c88-4cf7-975e-509c79973720",
   "TargetEffect": "0d6a7f81-5dcf-43a6-9208-18e1407e3dfc"
  },
  "Target_Bite_Wolf_Summon": {
   "Name": "Target_Bite_Wolf_Summon",
   "SpellType": "Target",
   "Parent": "Target_Bite_Wolf",
   "DisplayName": "Shared_Target_Bite_Wolf_Summon_DisplayName",
   "Description": "Shared_Target_Bite_Wolf_Summon_Description",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "29daf5c1-0870-4c3e-ae1d-3408621a033b"
  },
  "Target_Bite_Wolf_Dire": {
   "Name": "Target_Bite_Wolf_Dire",
   "SpellType": "Target",
   "Parent": "Target_Bite_Wolf",
   "TargetRadius": "1.5",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Bite_Wolf_Dire_Wildshape": {
   "Name": "Target_Bite_Wolf_Dire_Wildshape",
   "SpellType": "Target",
   "Parent": "Target_Bite_Wolf",
   "Cooldown": "OncePerShortRest",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "DisplayName": "Shared_Target_Bite_Wolf_Dire_Wildshape_DisplayName",
   "Description": "Shared_Target_Bite_Wolf_Dire_Wildshape_Description",
   "TooltipStatusApply": [
    "ApplyStatus(EXPOSING_BITE,100,1)"
   ],
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "56ff0ea4-39dd-4efd-a58c-322bf11b6f59",
   "CastEffect": "d737dc14-6167-4314-b7a4-8469d898cb82",
   "TargetEffect": "faa72005-e3e4-443f-8172-16515507009e"
  },
  "Target_Bufotoxin_Frog_Summon": {
   "Name": "Target_Bufotoxin_Frog_Summon",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetRadius": "1.5",
   "SpellRoll": "not SavingThrow(Ability.Constitution, 13)",
   "SpellSuccess": [
    "DealDamage(1,Acid)",
    "ApplyStatus(FROG_BUFOTOXIN,100,10)"
   ],
   "Icon": "Action_Frog_Bufotoxin",
   "DisplayName": "Shared_Target_Bufotoxin_Frog_Summon_DisplayName",
   "Description": "Shared_Target_Bufotoxin_Frog_Summon_Description",
   "DescriptionParams": [
    "DealDamage(1,Acid)"
   ],
   "TooltipDamageList": [
    "DealDamage(1,Acid)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Bufotoxin",
   "TargetSound": "CrSpell_Impact_Bufotoxin",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "VerbalIntent": "Debuff",
   "SpellFlags": [
    "IgnoreSilence",
    "IsMelee",
    "IsAttack"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "f91a56a1-598c-4d20-95cc-f2b2e32ef14b",
   "TargetEffect": "7bcbc8c4-5d02-4c18-a994-1784ba62a7df"
  },
  "Target_BloodFest_Gnoll": {
   "Name": "Target_BloodFest_Gnoll",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "SpellSchool": "None",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "SwitchDeathType(Explode)",
    "RegainHitPoints(SELF,1d8)",
    "GROUND:CreateSurface(1,0,Blood)"
   ],
   "TargetRadius": ".2",
   "TargetConditions": "Dead() and FreshCorpse()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_BloodFest_Gnoll_DisplayName",
   "Description": "Shared_Target_BloodFest_Gnoll_Description",
   "DescriptionParams": [
    "RegainHitPoints(1d8)"
   ],
   "TooltipDamageList": [
    "RegainHitPoints(1d8)"
   ],
   "CastSound": "CrSpell_Cast_BloodFest",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    ",,",
    ",,",
    "4ff0935a-a47d-4385-9710-c830cf393161(CMBT_Skill_Bloodfest_01_Attack),,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsEnemySpell"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "465a418c-76df-4bc8-9c99-20c52b36c6c3"
  },
  "Target_BloodLust_RedCap": {
   "Name": "Target_BloodLust_RedCap",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "ApplyStatus(BLOODLUST_REDCAP,100,5)"
   ],
   "TargetRadius": 12,
   "DisplayName": "Shared_Target_BloodLust_RedCap_DisplayName",
   "Description": "Shared_Target_BloodLust_RedCap_Description",
   "DescriptionParams": [
    "RegainHitPoints(3d6)"
   ],
   "TooltipDamageList": [
    "RegainHitPoints(3d6)"
   ],
   "CastSound": "CrSpell_Cast_BloodLust",
   "TargetSound": "CrSpell_Impact_BloodLust",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "24a8266f-a105-4f23-bda0-19379d1f2e55(SPL_Bloodlust_Prepare),,",
    ",,",
    "49b4d417-5829-4674-85eb-bd44f087506e(SPL_Bloodlust_Cast),,",
    "6c58d00e-366f-435d-ae09-eef9b2b05ac4(SPL_Bloodlust_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsSpell",
    "IsEnemySpell",
    "HasVerbalComponent",
    "IsConcentration"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "4f8b6876-7d36-480f-a625-2f1a25c1c650",
   "TargetEffect": "9e884d89-906a-4cfa-a613-ef13efb69b76"
  },
  "Target_Burrow_GiantBadger": {
   "Name": "Target_Burrow_GiantBadger",
   "SpellType": "Target",
   "SpellProperties": [
    "GROUND:TeleportSource()"
   ],
   "TargetRadius": 12,
   "AreaRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 13)",
   "SpellSuccess": [
    "ApplyStatus(PRONE,100,1)"
   ],
   "AoEConditions": "not Ally() and not Dead()",
   "Icon": "Action_GiantBadger_Burrow",
   "DisplayName": "Shared_Target_Burrow_GiantBadger_DisplayName",
   "Description": "Shared_Target_Burrow_GiantBadger_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_BurrowBulette",
   "UseCosts": [
    "ActionPoint:1",
    "Movement:6"
   ],
   "SpellAnimation": [
    "bccd02aa-2f1f-469b-b4e8-26b1e10c62f7(CMBT_Skill_Burrow_01_Prepare),,",
    "b1ffdfec-1879-4d34-9a3a-b3f002c7e035(CMBT_Skill_Burrow_01_Antic),,",
    "0c535d6f-d669-4d5e-9e03-1eb7320ba627(CMBT_Skill_Burrow_01_Attack),,",
    "0cbede33-9044-4679-a17b-de988836d601(CMBT_Skill_Burrow_01_Recover),,",
    "dcea2e32-2962-4a22-865f-4152261307b9(CMBT_Skill_Burrow_01_Loop),,",
    "215d161c-5283-4409-920a-323aaebbd8e5(CMBT_Skill_Claw_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "2c69a0ce-e47a-467b-b2ca-a3c1a2ba659d",
   "CastEffect": "a302b29e-e21e-4cbe-9011-d73e0a9a4761"
  },
  "Target_Burrow_Bulette": {
   "Name": "Target_Burrow_Bulette",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetConditions": "Self()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Burrow_Bulette_DisplayName",
   "Description": "Shared_Target_Burrow_Bulette_Description",
   "CastSound": "CrSpell_Cast_Burrow",
   "SpellAnimation": [
    ",,",
    ",,",
    "d94250ed-e555-471a-89ac-e0cb3e3b4792(UTIL_DeSpawn_01),,",
    ",,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful",
    "DontForceSheathOrUnsheath"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "3e6b15d5-ff60-4a1e-b756-3a80700b7414"
  },
  "Target_Claws": {
   "Name": "Target_Claws",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Claws_DisplayName",
   "Description": "Shared_Target_Claws_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Claw",
   "TargetSound": "CrSpell_Impact_Claw",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Claws_Bear_Brown": {
   "Name": "Target_Claws_Bear_Brown",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "Icon": "Action_Bear_Claws",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "6c05ec9a-02f6-4465-9827-34fc6e99724c",
   "TargetEffect": "3ad7ce85-5889-4c1d-8db0-2cb89eb1c55a"
  },
  "Target_Claws_Bear_Black_Summon": {
   "Name": "Target_Claws_Bear_Black_Summon",
   "SpellType": "Target",
   "Parent": "Target_Claws_Bear_Brown",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "a37d8fbb-f762-45bf-b335-be9c120ecd72",
   "TargetEffect": "5b143818-1f79-47e2-b5ad-a39e97ce83c1"
  },
  "Target_Claws_Bear_Cave": {
   "Name": "Target_Claws_Bear_Cave",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "Icon": "Action_Bear_Claws",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "38d981b6-6425-4915-af8b-5a7b5da085fc",
   "TargetEffect": "5b4b8cb6-cc89-4aaa-a5ce-f0c42c5da3f9"
  },
  "Target_Claws_Bear_Polar": {
   "Name": "Target_Claws_Bear_Polar",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "Icon": "Action_Bear_Claws",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "VerbalIntent": "Damage",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "c5fb5b6c-3e1a-49d4-be4a-a14915dd6438",
   "TargetEffect": "013d35b5-98cd-48d1-9ecf-5fb126af764b"
  },
  "Target_Claws_Cat": {
   "Name": "Target_Claws_Cat",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "Icon": "Action_Cat_Claws",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "203d60bc-0f1e-45ef-b3fb-b18aabb1b3ac",
   "TargetEffect": "c35702c5-e077-4fb8-be3b-a45477beff3b"
  },
  "Target_Claws_Ettercap": {
   "Name": "Target_Claws_Ettercap",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "1654cbb4-1fef-4a4d-9816-a1cfd6b157b3",
   "TargetEffect": "2d23547d-a5e2-4124-badc-28e9f3ce17ba"
  },
  "Target_Claws_Harpy": {
   "Name": "Target_Claws_Harpy",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "0dfd986e-a852-4a73-a86b-fb86d23531b3",
   "TargetEffect": "c18a5de7-1f5d-4153-8ef0-59450f958dda"
  },
  "Target_Claws_Ghoul": {
   "Name": "Target_Claws_Ghoul",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "SpellSuccess": [
    "IF(not SavingThrow(Ability.Constitution, 10)):ApplyStatus(PARALYZED,100,2)"
   ],
   "TargetConditions": "not Self() and not Dead()",
   "Description": "Shared_Target_Claws_Ghoul_Description",
   "TooltipStatusApply": [
    "ApplyStatus(PARALYZED,100,2)"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsMelee",
    "IsAttack",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Claws_GiantBadger": {
   "Name": "Target_Claws_GiantBadger",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "Icon": "Action_GiantBadger_Claws",
   "SpellAnimation": [
    "439be620-eee9-496b-83da-36fea96c7b02(CMBT_Skill_Claw_01_Prepare),,",
    "9fa218b8-9596-4c94-b5a1-13d877d8330c(CMBT_Skill_Claw_01_Antic),,",
    "ff2789c1-1d26-43a6-992e-a6fd6af36fb3(CMBT_Skill_Claw_01_Attack),,",
    "d91aab3d-0d93-4a31-8bc4-990e109a4eb3(CMBT_Skill_Claw_01_Recover),,",
    "26bce56a-9d3f-48c4-b2ff-f1ae32f7817b(CMBT_Skill_Claw_01_Loop),,",
    "215d161c-5283-4409-920a-323aaebbd8e5(CMBT_Skill_Claw_01_Dash),,"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "5644a564-99e1-4a4b-9099-08ac80827f79",
   "TargetEffect": "a4077e45-5187-412a-ad16-de7c3c809f59"
  },
  "Target_Claws_GiantBadger_Wildshape": {
   "Name": "Target_Claws_GiantBadger_Wildshape",
   "SpellType": "Target",
   "Parent": "Target_Claws_GiantBadger",
   "Description": "Shared_Target_Claws_GiantBadger_Wildshape_Description",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "9fa218b8-9596-4c94-b5a1-13d877d8330c(CMBT_Skill_Claw_01_Antic),,",
    "ff2789c1-1d26-43a6-992e-a6fd6af36fb3(CMBT_Skill_Claw_01_Attack),,",
    "d91aab3d-0d93-4a31-8bc4-990e109a4eb3(CMBT_Skill_Claw_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "215d161c-5283-4409-920a-323aaebbd8e5(CMBT_Skill_Claw_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "b54ff1fa-121d-474b-bb07-1f63833e6442",
   "CastEffect": "28fccbbb-cb93-4c7a-9571-f2d477a230f1",
   "TargetEffect": "b9ed0a98-c6fd-4382-bf62-c63a2f9f49f0"
  },
  "Target_Claws_GreenHag": {
   "Name": "Target_Claws_GreenHag",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    ",,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "4e1546f0-a1f8-42ff-8520-0f93108508c1",
   "TargetEffect": "ae267b50-2c5f-48cb-92d4-c3acfc36d233"
  },
  "Target_Claws_Imp": {
   "Name": "Target_Claws_Imp",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "Icon": "Action_Imp_Claws",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "a3d3617e-73ca-4eb1-a521-7615c6fc6aa6",
   "TargetEffect": "0bf20806-1624-4ddf-8a34-3fdf11a54407"
  },
  "Target_Claws_Imp_Summon": {
   "Name": "Target_Claws_Imp_Summon",
   "SpellType": "Target",
   "Parent": "Target_Claws_Imp",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "346b7166-a6fc-456e-98f7-13ce9385d4b2",
   "TargetEffect": "b0a855f5-b5e0-48ad-b80d-ef1dff1a6834"
  },
  "Target_Claws_IntellectDevourer": {
   "Name": "Target_Claws_IntellectDevourer",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "Icon": "Action_Imp_Claws",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_ClawTiny",
   "TargetSound": "CrSpell_Impact_ClawTiny",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "a6e8b985-3130-49d5-bf96-44d12f602aeb",
   "TargetEffect": "4f9de470-dbf9-4c4b-96f9-66bcc29711c8"
  },
  "Target_Claws_IntellectDevourer_Weakened": {
   "Name": "Target_Claws_IntellectDevourer_Weakened",
   "SpellType": "Target",
   "Parent": "Target_Claws_IntellectDevourer",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "DisplayName": "Shared_Target_Claws_IntellectDevourer_Weakened_DisplayName",
   "Description": "Shared_Target_Claws_IntellectDevourer_Weakened_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_ClawTiny",
   "TargetSound": "CrSpell_Impact_ClawTiny",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "f6537af0-2ca8-49b0-81e1-6a884374ac8d",
   "TargetEffect": "75422626-412b-4b24-beaf-af3732450058"
  },
  "Target_Claws_Mephit_Mud": {
   "Name": "Target_Claws_Mephit_Mud",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "DisplayName": "Shared_Target_Claws_Mephit_Mud_DisplayName",
   "Description": "Shared_Target_Claws_Mephit_Mud_Description",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "278aab6b-5e0d-4dfb-9b04-6218b300e628",
   "TargetEffect": "c9ae8409-70ac-4d30-a3d6-fccb74293097"
  },
  "Target_Claws_Mephit_Magma": {
   "Name": "Target_Claws_Mephit_Magma",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "Description": "Shared_Target_Claws_Mephit_Magma_Description",
   "HitAnimationType": "MagicalDamage_External",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "efaff801-86bd-4fd7-9ae7-c1a924a8eac9",
   "TargetEffect": "d83e2fe2-4ba4-4923-8207-fc29fa84201a"
  },
  "Target_Claws_Owlbear": {
   "Name": "Target_Claws_Owlbear",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "TargetRadius": "2.5",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "Description": "Shared_Target_Claws_Owlbear_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    ",,",
    "2b81c18b-9698-4262-a623-932c2bb1296d(CMBT_Melee_RHand_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "167153a5-4dc7-4a38-b726-573c8cd9d888",
   "TargetEffect": "0ba6860d-8781-4cd1-8dfe-3d1781ad2f59"
  },
  "Target_Claws_Owlbear_Cub": {
   "Name": "Target_Claws_Owlbear_Cub",
   "SpellType": "Target",
   "Parent": "Target_Claws_Owlbear",
   "TargetRadius": "1.5",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "DisplayName": "Shared_Target_Claws_Owlbear_Cub_DisplayName",
   "Description": "Shared_Target_Claws_Owlbear_Cub_Description",
   "CastSound": "CrSpell_Cast_ClawTiny",
   "TargetSound": "CrSpell_Impact_ClawTiny",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "d746500b-57db-46f9-99b5-bcc27beff0d0",
   "TargetEffect": "b58c32e8-d369-45d1-af7c-6f618ab70790"
  },
  "Target_Claws_Quasit": {
   "Name": "Target_Claws_Quasit",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "Icon": "Action_Quasit_Claws",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "8b8fa59d-5152-45a3-b838-c43a3741be10",
   "TargetEffect": "1c165220-c1ff-4c13-8080-d8d16deae9d6"
  },
  "Target_Claws_Quasit_Summon": {
   "Name": "Target_Claws_Quasit_Summon",
   "SpellType": "Target",
   "Parent": "Target_Claws_Quasit",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "a3f6a11b-89b8-42db-a504-33768dd75801",
   "TargetEffect": "1dad7ab8-7f47-4a75-b6ee-8d9df738ef97"
  },
  "Target_Claws_Scarecrow": {
   "Name": "Target_Claws_Scarecrow",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "Description": "Shared_Target_Claws_Scarecrow_Description",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "67c250bd-2d88-4b77-bbe7-559efc6012b6",
   "TargetEffect": "5807cd67-f399-4a3b-93ae-924990b42866"
  },
  "Target_Claws_StoneCursed": {
   "Name": "Target_Claws_StoneCursed",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "d8b4408c-14c3-4928-9c6b-acce691c0f76",
   "TargetEffect": "e20c63d5-2940-4c9b-b96f-6280577afd58"
  },
  "Target_Claws_Werewolf": {
   "Name": "Target_Claws_Werewolf",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "e98229da-4265-40ed-abbf-96e828616f55",
   "TargetEffect": "b1291303-25fc-4e05-9d1c-10c8d6812065"
  },
  "Target_Curse_Gnoll": {
   "Name": "Target_Curse_Gnoll",
   "SpellType": "Target",
   "TargetRadius": 8,
   "SpellRoll": "not SavingThrow(Ability.Charisma, 14)",
   "SpellSuccess": [
    "ApplyStatus(GNOLL_CURSE,100,2)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Curse_Gnoll_DisplayName",
   "Description": "Shared_Target_Curse_Gnoll_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_Curse",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "07d28b38-33df-4190-a71e-b894c17522cc(CMBT_Skill_Curse_01_Prepare),,",
    "1ff4d787-6f6e-44e2-94cd-0fba868ffe43(CMBT_Skill_Curse_01_Antic),,",
    "a11e38d7-0165-4736-8d6b-4ee6edcd4406(CMBT_Skill_Curse_01_Attack),,",
    "c004d63e-8906-4668-9fe3-ccffc87665ee(CMBT_Skill_Curse_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellFlags": [
    "IsEnemySpell",
    "IsConcentration"
   ],
   "RechargeValues": "4-6",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Curse_Ogre": {
   "Name": "Target_Curse_Ogre",
   "SpellType": "Target",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(OGRE_CURSE,100,2)"
   ],
   "TargetRadius": 8,
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Curse_Ogre_DisplayName",
   "Description": "Shared_Target_Curse_Ogre_Description",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_Curse",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "07d28b38-33df-4190-a71e-b894c17522cc(CMBT_Skill_Curse_01_Prepare),,",
    "1ff4d787-6f6e-44e2-94cd-0fba868ffe43(CMBT_Skill_Curse_01_Antic),,",
    "a11e38d7-0165-4736-8d6b-4ee6edcd4406(CMBT_Skill_Curse_01_Attack),,",
    "c004d63e-8906-4668-9fe3-ccffc87665ee(CMBT_Skill_Curse_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "RechargeValues": "3-6",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_CripplingPinch_Crab_Summon": {
   "Name": "Target_CripplingPinch_Crab_Summon",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "TargetRadius": "1.5",
   "SpellSuccess": [
    "DealDamage(1,Slashing)",
    "ApplyStatus(CRAB_PINCHED,100,2)"
   ],
   "Icon": "Action_Crab_CripplingPinch",
   "DisplayName": "Shared_Target_CripplingPinch_Crab_Summon_DisplayName",
   "Description": "Shared_Target_CripplingPinch_Crab_Summon_Description",
   "DescriptionParams": [
    "DealDamage(1,Slashing)",
    "Distance(3)",
    "DealDamage(1d4,Piercing)"
   ],
   "TooltipDamageList": [
    "DealDamage(1,Slashing)",
    "DealDamage(1d4,Piercing)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(CRAB_PINCHED,100,2)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_CriplingPinch",
   "TargetSound": "CrSpell_Impact_CriplingPinch",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "VerbalIntent": "Debuff",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "161e729e-4c61-466c-9dcb-ab6d3728c369",
   "CastEffect": "090d86e5-635d-48e1-8dbd-9692a5c79491"
  },
  "Target_DancingLights_DeepRothe": {
   "Name": "Target_DancingLights_DeepRothe",
   "SpellType": "Target",
   "Parent": "Target_DancingLights",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsConcentration"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "eae62993-679c-4cda-89d5-08a4337c2acc",
   "CastEffect": "2b3be96b-9797-4294-820a-958827291f71",
   "PositionEffect": "99e64454-0a59-4386-8319-f81b2f46118a"
  },
  "Target_Devour_Ghoul": {
   "Name": "Target_Devour_Ghoul",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "Cooldown": "OncePerTurn",
   "TargetRadius": "1.5",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "Icon": "Action_Wolf_Bite",
   "DisplayName": "Shared_Target_Devour_Ghoul_DisplayName",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "6687973c-0787-4189-a980-ff0dcf9c7774(CMBT_Skill_Devour_01_Prepare),,",
    "0dc197cc-2667-4125-ba4c-e2aac0ea7b12(CMBT_Skill_Devour_01_Antic),,",
    "a03544c9-9ac2-46a4-8826-50bab880bada(CMBT_Skill_Devour_01_Attack),,",
    "a17f7e8b-3557-45ee-a9f7-d0e2392c6aee(CMBT_Skill_Devour_01_Recover),,",
    "ee634117-9ebb-442d-baa5-deb39d11284f(CMBT_Skill_Devour_01_Loop),,",
    "dbf36a55-64ff-42d9-b6b4-8e5d0b4f75cb(CMBT_Skill_Devour_01_Dash),,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsEnemySpell",
    "IsMelee"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_DevourIntellect": {
   "Name": "Target_DevourIntellect",
   "SpellType": "Target",
   "TargetRadius": "1.5",
   "SpellRoll": "not SavingThrow(Ability.Intelligence,12)",
   "SpellSuccess": [
    "IF(not IntelligenceGreaterThan(3)):DealDamage(2d10,Psychic)",
    "IF(not IntelligenceGreaterThan(3)):ApplyStatus(DEVOUR_INTELLECT_VFX,100,0)",
    "IF(not IntelligenceGreaterThan(3)):ApplyStatus(STUNNED,100,1)",
    "IF(IntelligenceGreaterThan(3)):ApplyStatus(DEVOURED_INT,100,2)"
   ],
   "TargetConditions": "Character() and not Self() and not Dead()",
   "Icon": "Spell_IntellectDevourer_DevourIntellect",
   "DisplayName": "Shared_Target_DevourIntellect_DisplayName",
   "Description": "Shared_Target_DevourIntellect_Description",
   "DescriptionParams": [
    "DealDamage(2d10,Psychic)"
   ],
   "ExtraDescription": "Shared_Target_DevourIntellect_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d10,Psychic)"
   ],
   "TooltipAttackSave": [
    "Intelligence"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(DEVOURED_INT,100,1)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_DevourIntellect",
   "TargetSound": "CrSpell_Impact_DevourIntellect",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "6687973c-0787-4189-a980-ff0dcf9c7774(CMBT_Skill_Devour_01_Prepare),,",
    "0dc197cc-2667-4125-ba4c-e2aac0ea7b12(CMBT_Skill_Devour_01_Antic),,",
    "a03544c9-9ac2-46a4-8826-50bab880bada(CMBT_Skill_Devour_01_Attack),,",
    "a17f7e8b-3557-45ee-a9f7-d0e2392c6aee(CMBT_Skill_Devour_01_Recover),,",
    "ee634117-9ebb-442d-baa5-deb39d11284f(CMBT_Skill_Devour_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "HitAnimationType": "MagicalDamage_Psychic",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "e8e9a76f-c321-4c73-8fe6-c5f4936950bf",
   "CastEffect": "49fc45b2-977f-4036-82a4-9bf837b1cd91",
   "TargetEffect": "fe3b677a-6c38-4ac3-8b8d-c85029ee9930"
  },
  "Target_DigestCorpse_CorpseFlower": {
   "Name": "Target_DigestCorpse_CorpseFlower",
   "SpellType": "Target",
   "SpellProperties": [
    "RegainHitPoints(2d10)"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Self()",
   "DisplayName": "Shared_Target_DigestCorpse_CorpseFlower_DisplayName",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "60f073b7-1e43-47a5-96c7-53376057e59a(SPL_Arcane_Summon_01_Cast),,",
    "f2137644-4bb4-4ed3-ab1d-d149719fbb53(SPL_Arcane_Summon_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_DisarmingAttack_NPC": {
   "Name": "Target_DisarmingAttack_NPC",
   "SpellType": "Target",
   "Parent": "Target_DisarmingAttack",
   "Cooldown": "OncePerCombat"
  },
  "Target_EtherealJaunt": {
   "Name": "Target_EtherealJaunt",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "GROUND:TeleportSource()"
   ],
   "TargetRadius": 22,
   "DisplayName": "Shared_Target_EtherealJaunt_DisplayName",
   "TargetSound": "CrSpell_Impact_EtheralJaunt",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "fc1d6bb2-8ed5-4e4f-9104-df066205e744(CMBT_Skill_EtherealJaunt_01_Prepare),,",
    "a98d648e-76be-4ff5-8a56-b3479de13b4a(CMBT_Skill_EtherealJaunt_01_Antic),,",
    "4c77140a-ba72-405f-8e0b-26e6d6910a31(CMBT_Skill_EtherealJaunt_01_Attack),,",
    "87ab0c85-6f27-460b-a59b-011b5728350d(CMBT_Skill_EtherealJaunt_01_Recover),,",
    "76a13190-6888-470d-9d7b-abf839598898(CMBT_Skill_EtherealJaunt_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IgnoreVisionBlock",
    "RangeIgnoreVerticalThreshold",
    "HasHighGroundRangeExtension"
   ],
   "LineOfSightFlags": "AddSourceHeight",
   "PrepareEffect": "d402dbef-9653-4bd0-8256-e8da5092df8f",
   "CastEffect": "931dc1d5-a878-4844-aae5-6d23a6812bc9",
   "BeamEffect": "2ee02bd7-1c27-468c-afa4-a0edd011e100"
  },
  "Target_EtherealJaunt_Spiderling": {
   "Name": "Target_EtherealJaunt_Spiderling",
   "SpellType": "Target",
   "Parent": "Target_EtherealJaunt",
   "PrepareEffect": "85fedbbc-688a-46db-8ccd-3110e8d2515f",
   "CastEffect": "2bd9dc35-d405-44e9-8fb2-d2bd624711eb",
   "BeamEffect": "01cabfcb-b2e7-47ea-8c32-375bd8ca5045"
  },
  "Target_EtherealJaunt_Queen": {
   "Name": "Target_EtherealJaunt_Queen",
   "SpellType": "Target",
   "Parent": "Target_EtherealJaunt",
   "UseCosts": [
    "Movement:5"
   ]
  },
  "Target_Entangle_WoodWoad": {
   "Name": "Target_Entangle_WoodWoad",
   "SpellType": "Target",
   "Parent": "Target_Entangle",
   "CastSound": "CrSpell_Cast_Entangle",
   "TargetSound": "CrSpell_Impact_Entangle",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "873a89d9-a985-4ad2-9367-23122c38bff3(SPL_Entangle_Prepare),,",
    ",,",
    "1f8f023d-8f7c-4d8e-b60f-f08f8abeed7b(SPL_Entangle_Cast),,",
    "9d8e80ee-9da1-4c37-a335-e31a90c778db(SPL_Entangle_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsHarmful"
   ],
   "RechargeValues": 6,
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_ExtraAttack": {
   "Name": "Target_ExtraAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "DisplayName": "Shared_Target_ExtraAttack_DisplayName",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_ExtraAttack_Unarmed": {
   "Name": "Target_ExtraAttack_Unarmed",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Cooldown": "OncePerTurn",
   "DisplayName": "Shared_Target_ExtraAttack_Unarmed_DisplayName",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Gore_Minotaur": {
   "Name": "Target_Gore_Minotaur",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Gore_Minotaur_DisplayName",
   "Description": "Shared_Target_Gore_Minotaur_Description",
   "CastSound": "CrSpell_Cast_Gore",
   "TargetSound": "CrSpell_Impact_Gore",
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "AddFallDamageOnLand",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "36464af7-d016-4e3d-a04e-8708605dee7b",
   "TargetEffect": "cf2d2d94-20a4-487d-ab7b-3647ef1766a4"
  },
  "Target_ExtraAttack_Minotaur": {
   "Name": "Target_ExtraAttack_Minotaur",
   "SpellType": "Target",
   "Parent": "Target_Gore_Minotaur",
   "Cooldown": "OncePerTurn",
   "DisplayName": "Shared_Target_ExtraAttack_Minotaur_DisplayName",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_FindFamiliar_NPC": {
   "Name": "Target_FindFamiliar_NPC",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar",
   "Cooldown": "OncePerCombat",
   "SpellFlags": [
    "IsSpell",
    "HasSomaticComponent",
    "HasVerbalComponent",
    "HasHighGroundRangeExtension"
   ]
  },
  "Target_FindFamiliar_Spider_NPC": {
   "Name": "Target_FindFamiliar_Spider_NPC",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_NPC"
  },
  "Target_FindFamiliar_Raven_NPC": {
   "Name": "Target_FindFamiliar_Raven_NPC",
   "SpellType": "Target",
   "Parent": "Target_FindFamiliar_NPC"
  },
  "Target_Fist_Myconid": {
   "Name": "Target_Fist_Myconid",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetConditions": "Character() and Enemy() and not Dead()",
   "DisplayName": "Shared_Target_Fist_Myconid_DisplayName",
   "Description": "Shared_Target_Fist_Myconid_Description",
   "CastSound": "CrSpell_Cast_Fist",
   "TargetSound": "CrSpell_Impact_Fist",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "93989ea4-7a76-4d5f-a9e6-ac5a7126580b"
  },
  "Target_Fist_Myconid_Strong": {
   "Name": "Target_Fist_Myconid_Strong",
   "SpellType": "Target",
   "Parent": "Target_Fist_Myconid",
   "TargetConditions": "Character() and Enemy() and not Dead()",
   "CastSound": "CrSpell_Cast_Fist",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "d64ef74e-57f4-4dd5-89a7-bfa69e3504db"
  },
  "Target_Fist_Myconid_Weak": {
   "Name": "Target_Fist_Myconid_Weak",
   "SpellType": "Target",
   "Parent": "Target_Fist_Myconid",
   "TargetConditions": "Character() and Enemy() and not Dead()",
   "CastSound": "CrSpell_Cast_Fist",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "0d7b2c87-6f22-49e5-a456-4226cbb82b23"
  },
  "Target_Flail_Gnoll_Madness": {
   "Name": "Target_Flail_Gnoll_Madness",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetConditions": "Character() and not Ally()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Flail_Gnoll_Madness_DisplayName",
   "Description": "Shared_Target_Flail_Gnoll_Madness_Description",
   "ExtraDescription": "Shared_Target_Flail_Gnoll_Madness_ExtraDescription",
   "CastSound": "CrSpell_Cast_FlailOfMadness",
   "TargetSound": "CrSpell_Impact_FlailOfMadness",
   "SpellAnimation": [
    "b8f86a26-9df5-4bd8-ad3d-ab10395e88f5(CMBT_Skill_FlailofMadness_01_Prepare),,",
    "c0088a89-3e12-4c93-b7c2-51e87798dec9(CMBT_Skill_FlailofMadness_01_Antic),,",
    "f59fd33d-5b2e-40aa-a327-be307fea53d0(CMBT_Skill_FlailofMadness_01_Attack),,",
    "6549ed7b-40de-45b5-b9f9-d9941b0096f0(CMBT_Skill_FlailofMadness_01_Recover),,",
    ",,",
    ",,"
   ],
   "RechargeValues": "3-6",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "cf1d9210-e997-489c-af6f-40f11bdb5d26",
   "TargetEffect": "369a439a-6e5b-4451-81b4-f982ccd98fb8"
  },
  "Target_Flail_Gnoll_Pain": {
   "Name": "Target_Flail_Gnoll_Pain",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetConditions": "Character() and not Ally()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Flail_Gnoll_Pain_DisplayName",
   "Description": "Shared_Target_Flail_Gnoll_Pain_Description",
   "CastSound": "CrSpell_Cast_FlailOfPain",
   "TargetSound": "CrSpell_Impact_FlailOfPain",
   "SpellAnimation": [
    "b8f86a26-9df5-4bd8-ad3d-ab10395e88f5(CMBT_Skill_FlailofMadness_01_Prepare),,",
    "c0088a89-3e12-4c93-b7c2-51e87798dec9(CMBT_Skill_FlailofMadness_01_Antic),,",
    "f59fd33d-5b2e-40aa-a327-be307fea53d0(CMBT_Skill_FlailofMadness_01_Attack),,",
    "6549ed7b-40de-45b5-b9f9-d9941b0096f0(CMBT_Skill_FlailofMadness_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsHarmful"
   ],
   "RechargeValues": "5-6",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "120e0bc3-cd73-4209-a2ac-8d7f03270a01",
   "TargetEffect": "d77faa41-a068-4405-85da-d1aa409dbcce"
  },
  "Target_Flail_Gnoll_Paralysis": {
   "Name": "Target_Flail_Gnoll_Paralysis",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "TargetConditions": "Character() and not Ally()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Flail_Gnoll_Paralysis_DisplayName",
   "Description": "Shared_Target_Flail_Gnoll_Paralysis_Description",
   "ExtraDescription": "Shared_Target_Flail_Gnoll_Paralysis_ExtraDescription",
   "CastSound": "CrSpell_Cast_FlailOfParalysis",
   "TargetSound": "CrSpell_Impact_FlailOfParalysis",
   "SpellAnimation": [
    "b8f86a26-9df5-4bd8-ad3d-ab10395e88f5(CMBT_Skill_FlailofMadness_01_Prepare),,",
    "c0088a89-3e12-4c93-b7c2-51e87798dec9(CMBT_Skill_FlailofMadness_01_Antic),,",
    "f59fd33d-5b2e-40aa-a327-be307fea53d0(CMBT_Skill_FlailofMadness_01_Attack),,",
    "6549ed7b-40de-45b5-b9f9-d9941b0096f0(CMBT_Skill_FlailofMadness_01_Recover),,",
    ",,",
    ",,"
   ],
   "RechargeValues": "3-6",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "5e664fec-2515-4a7e-ae8a-b11063810c13",
   "TargetEffect": "f7e94a9b-131b-40ff-bbdf-efed914ed7f3"
  },
  "Target_Generic_Goblin": {
   "Name": "Target_Generic_Goblin",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "01e58b73-2a63-4986-a1d2-1a0838237c90(SPL_Arcane_Healing_01_Recover),,",
    ",,",
    ",,"
   ]
  },
  "Target_Generic_Hobgoblin": {
   "Name": "Target_Generic_Hobgoblin",
   "SpellType": "Target",
   "Parent": "Target_Claws"
  },
  "Target_Gore_DeepRothe": {
   "Name": "Target_Gore_DeepRothe",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetConditions": "not Self() and not Dead()",
   "Icon": "Action_DeepRothe_Gore",
   "DisplayName": "Shared_Target_Gore_DeepRothe_DisplayName",
   "Description": "Shared_Target_Gore_DeepRothe_Description",
   "ExtraDescription": "Shared_Target_Gore_DeepRothe_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(11,Force)"
   ],
   "CastSound": "CrSpell_Cast_DeepRotheGore",
   "TargetSound": "CrSpell_Impact_DeepRotheGore",
   "SpellAnimation": [
    "da2bdc9e-d61e-4387-9652-34c180f31c2f(CMBT_Skill_Gore_01_Prepare),,",
    "bd87acd7-3cc1-42f7-b837-29a867b1feb1(CMBT_Skill_Gore_01_Antic),,",
    "2f1ce576-047a-4d92-bdf9-9d7d916029d4(CMBT_Skill_Gore_01_Attack),,",
    "c84adde9-5f4e-46ee-849e-8a376c977de0(CMBT_Skill_Gore_01_Recover),,",
    "9e6bb473-b74d-4a81-bdf9-f40b962ceb6f(CMBT_Skill_Gore_01_Loop),,",
    "f1b53206-0716-48c5-a92b-5e0bec7f1ccb(CMBT_Skill_Gore_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "cf3a1359-4c90-44e0-b1a4-67e23b9cd807",
   "TargetEffect": "03828481-1042-4796-be00-76678bc941a3"
  },
  "Target_Gore_DeepRothe_NPC": {
   "Name": "Target_Gore_DeepRothe_NPC",
   "SpellType": "Target",
   "Parent": "Target_Gore_DeepRothe"
  },
  "Target_HallucinationSpores": {
   "Name": "Target_HallucinationSpores",
   "SpellType": "Target",
   "Parent": "Target_HoldPerson",
   "TargetRadius": 3,
   "SpellRoll": "not SavingThrow(Ability.Constitution, 12)",
   "SpellSuccess": [
    "ApplyStatus(HALLUCINATION_SPORES, 100, 5)"
   ],
   "Icon": "Action_Glut_HallucinationSpores",
   "DisplayName": "Shared_Target_HallucinationSpores_DisplayName",
   "Description": "Shared_Target_HallucinationSpores_Description",
   "ExtraDescription": "Shared_Target_HallucinationSpores_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_HallucinationSpores",
   "TargetSound": "CrSpell_Impact_HallucinationSpores",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "b7d21450-9cb9-4548-b199-6f75d334a078(CMBT_Skill_SporesHallucination_01_Prepare),,",
    "5900f78e-b689-4772-8d79-482384d799e8(CMBT_Skill_SporesHallucination_01_Antic),,",
    "3522cbcf-9e5a-42c3-beda-e00b10fdf048(CMBT_Skill_SporesHallucination_01_Attack),,",
    "7f12e62d-90e9-4128-b306-9591608927f5(CMBT_Skill_SporesHallucination_01_Recover),,",
    "6380db06-8a5f-4e7b-950b-3021d2827f2e(CMBT_Skill_SporesHallucination_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Debuff",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "2a0c1549-275d-480a-af9b-27334673e132"
  },
  "Target_HarvestTheDead_CorpseFlower": {
   "Name": "Target_HarvestTheDead_CorpseFlower",
   "SpellType": "Target",
   "TargetRadius": 18,
   "TargetConditions": "Dead()",
   "DisplayName": "Shared_Target_HarvestTheDead_CorpseFlower_DisplayName",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "60f073b7-1e43-47a5-96c7-53376057e59a(SPL_Arcane_Summon_01_Cast),,",
    "f2137644-4bb4-4ed3-ab1d-d149719fbb53(SPL_Arcane_Summon_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_HeatMetal_MagmaMephit": {
   "Name": "Target_HeatMetal_MagmaMephit",
   "SpellType": "Target",
   "Parent": "Target_HeatMetal",
   "Cooldown": "OncePerCombat",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "a82bcf33-4aeb-4ffb-afdc-6badebddd459(SPL_HeatMetal_01_Prepare),,",
    ",,",
    "7aa37dc8-c638-4ad7-9c66-9bee6a2974d6(SPL_HeatMetal_01_Cast),,",
    "566dd83b-ba2b-4c2c-b26f-802ca961cbfb(SPL_HeatMetal_01_Recover),,",
    "561414cd-5f98-4d5c-a014-0e9e91dab0d2(SPL_HeatMetal_01_Loop),,",
    ",,"
   ]
  },
  "Target_HeatMetal_Reapply_MagmaMephit": {
   "Name": "Target_HeatMetal_Reapply_MagmaMephit",
   "SpellType": "Target",
   "Parent": "Target_HeatMetal_Reapply",
   "SpellAnimation": [
    "a82bcf33-4aeb-4ffb-afdc-6badebddd459(SPL_HeatMetal_01_Prepare),,",
    ",,",
    "7aa37dc8-c638-4ad7-9c66-9bee6a2974d6(SPL_HeatMetal_01_Cast),,",
    "566dd83b-ba2b-4c2c-b26f-802ca961cbfb(SPL_HeatMetal_01_Recover),,",
    "561414cd-5f98-4d5c-a014-0e9e91dab0d2(SPL_HeatMetal_01_Loop),,",
    ",,"
   ]
  },
  "Target_Hook": {
   "Name": "Target_Hook",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "TargetRadius": 3,
   "Icon": "Action_HookHorror_Hook",
   "DisplayName": "Shared_Target_Hook_DisplayName",
   "Description": "Shared_Target_Hook_Description",
   "ExtraDescription": "Shared_Target_Hook_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d4,Piercing)"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "AddFallDamageOnLand",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "2076b193-dc62-4243-b434-57760fb3e55a",
   "TargetEffect": "29b7fc98-0ec9-4234-99d2-0dbdf17deab2"
  },
  "Target_HoldPerson_Redcap": {
   "Name": "Target_HoldPerson_Redcap",
   "SpellType": "Target",
   "Parent": "Target_HoldPerson",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "3c809c4e-24da-4fa6-b912-6ff108bfe5d7(SPL_HoldPerson_01_Prepare),,",
    ",,",
    "496cec90-1c0c-49ae-9f68-32870b7e1dbe(SPL_HoldPerson_01_Cast),,",
    "812a2026-61c7-4d46-b607-b5b71d34062c(SPL_HoldPerson_01_Recover),,",
    ",,",
    ",,"
   ],
   "RechargeValues": "3-6",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "9909b8df-ae48-4455-8943-91db37a61140",
   "CastEffect": "f7df8834-59eb-4e97-8dde-e8161863604a",
   "TargetEffect": "4a384041-fcda-4ae4-a263-efe501b8a534"
  },
  "Target_IronboundPursuit_RedCap": {
   "Name": "Target_IronboundPursuit_RedCap",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 14)",
   "DisplayName": "Shared_Target_IronboundPursuit_RedCap_DisplayName",
   "Description": "Shared_Target_IronboundPursuit_RedCap_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Pursuit",
   "TargetSound": "CrSpell_Impact_Pursuit",
   "SpellAnimation": [
    "2a7f6717-4f2f-422b-a9c6-c877140437c5(CMBT_Skill_IronboundPursuit_01_Prepare),,",
    "2639781e-007c-456b-b404-fa04d62f3380(CMBT_Skill_IronboundPursuit_01_Antic),,",
    "8ae42bd8-0ab8-4a9b-84ea-a021e15539f9(CMBT_Skill_IronboundPursuit_01_Attack),,",
    "64e4bf00-6b7c-4312-a24d-a0964d940b8d(CMBT_Skill_IronboundPursuit_01_Recover),,",
    "4bb2b184-ead3-4afe-b28f-b1ec218d6ac5(CMBT_Skill_IronboundPursuit_01_Loop),,",
    "1445e6a1-5644-44a2-b857-80b6b24b2ea3(CMBT_Skill_IronboundPursuit_01_Dash),,"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "AddFallDamageOnLand",
    "IsHarmful"
   ],
   "RechargeValues": 6,
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "2d1f79df-26be-404e-ac1e-dc0bbb34c998",
   "TargetEffect": "be3b17f8-d6af-4b13-b80b-95a075d4a91d"
  },
  "Target_MagicClub_WoodWoad": {
   "Name": "Target_MagicClub_WoodWoad",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "SpellSuccess": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " ExecuteWeaponFunctors(MainHand)",
    " DealDamage(3d4,Bludgeoning)"
   ],
   "DisplayName": "Shared_Target_MagicClub_WoodWoad_DisplayName",
   "Description": "Shared_Target_MagicClub_WoodWoad_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " DealDamage(3d4,Bludgeoning)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    " DealDamage(3d4,Bludgeoning)"
   ],
   "CastSound": "CrSpell_Cast_MagicClub",
   "TargetSound": "CrSpell_Impact_MagicClub",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "a566eaa8-e098-44d0-abfc-8eacb0e9724c",
   "TargetEffect": "f2d7c3a3-31fb-4d4c-8f0f-82e908a3d715"
  },
  "Target_MenacingAttack_NPC": {
   "Name": "Target_MenacingAttack_NPC",
   "SpellType": "Target",
   "Parent": "Target_MenacingAttack",
   "Cooldown": "OncePerCombat",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_MindMastery_Duergar": {
   "Name": "Target_MindMastery_Duergar",
   "SpellType": "Target",
   "SpellSchool": "Enchantment",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 14)",
   "SpellSuccess": [
    "ApplyStatus(MIND_MASTERY, 100, 2)"
   ],
   "TargetConditions": "Character() and Enemy() and not Dead()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_MindMastery_Duergar_DisplayName",
   "Description": "Shared_Target_MindMastery_Duergar_Description",
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_MindMastery",
   "TargetSound": "CrSpell_Impact_MindMastery",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "af94aac1-d8eb-4ccb-9520-694ade11b61c(SPL_Somatic_Target_Snap_01_Cast),,",
    "f5db4001-b136-4c48-9aa4-026c4a7dd3b7(SPL_Somatic_Target_Snap_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsHarmful",
    "IsEnemySpell",
    "HasVerbalComponent",
    "IsConcentration"
   ],
   "RechargeValues": "5-6",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "d2ef6b50-243f-478d-85c6-892086a1477e",
   "TargetEffect": "405b0936-5ce6-486e-be1e-f103a53145fc"
  },
  "Target_MindSpike_NPC": {
   "Name": "Target_MindSpike_NPC",
   "SpellType": "Target",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 18,
   "DeathType": "Psychic",
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 14)",
   "SpellSuccess": [
    "DealDamage(3d8,Psychic)"
   ],
   "TargetConditions": "Character() and Enemy() and not Dead()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_MindSpike_NPC_DisplayName",
   "Description": "Shared_Target_MindSpike_NPC_Description",
   "DescriptionParams": [
    "DealDamage(3d8, Psychic)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d8, Psychic)"
   ],
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_MindSpike",
   "TargetSound": "CrSpell_Impact_MindSpike",
   "UseCosts": [
    "ActionPoint:1",
    " SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "49fe22cb-4b9f-4480-b7ce-050942c420bb(SPL_Somatic_Projectile_ThrowHorizontal_01_Cast),,",
    "3eeccdd5-70cb-41aa-91c5-549c8d81a9de(SPL_Somatic_Projectile_ThrowHorizontal_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsHarmful",
    "IsEnemySpell",
    "HasSomaticComponent"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "bd2fc245-5645-452f-a2cd-d158b751bbe4",
   "TargetEffect": "c34b836f-ac14-4222-8e32-bdb4d1c0f504"
  },
  "Target_MindSpike_MindMaster": {
   "Name": "Target_MindSpike_MindMaster",
   "SpellType": "Target",
   "Parent": "Target_MindSpike_NPC",
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 14)",
   "SpellSuccess": [
    "DealDamage(1d8,Psychic)",
    " ApplyStatus(MENTAL_ARROW, 100, 3)"
   ],
   "SpellFail": [
    "DealDamage(1d8,Psychic)"
   ],
   "DisplayName": "Shared_Target_MindSpike_MindMaster_DisplayName",
   "Description": "Shared_Target_MindSpike_MindMaster_Description",
   "DescriptionParams": [
    "DealDamage(1d8,Psychic)"
   ],
   "TooltipDamageList": [
    "DealDamage(1d8,Psychic)"
   ],
   "CastSound": "CrSpell_Cast_MindSpike",
   "TargetSound": "CrSpell_Impact_MindSpike",
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsHarmful",
    "IsEnemySpell",
    "HasVerbalComponent"
   ],
   "RechargeValues": "3-6",
   "CastEffect": "bd2fc245-5645-452f-a2cd-d158b751bbe4",
   "TargetEffect": "a0aee53a-d702-4901-9bb3-7cf08e214346"
  },
  "Target_Multiattack": {
   "Name": "Target_Multiattack",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "TargetConditions": "not Self() and not Dead()",
   "DisplayName": "Shared_Target_Multiattack_DisplayName",
   "Description": "Shared_Target_Multiattack_Description",
   "CastTextEvent": "Cast",
   "AlternativeCastTextEvents": [
    "Cast2"
   ],
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    "caa0d92c-5cd1-4248-9a4a-f2a8e404dac3(CMBT_Skill_MultiAttack_01_Loop),,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful",
    "IsEnemySpell"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Multiattack_Automaton": {
   "Name": "Target_Multiattack_Automaton",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "TargetRadius": "2.5",
   "Description": "Shared_Target_Multiattack_Automaton_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "CastTextEvent": "Cast",
   "AlternativeCastTextEvents": [
    "Cast2"
   ],
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    "caa0d92c-5cd1-4248-9a4a-f2a8e404dac3(CMBT_Skill_MultiAttack_01_Loop),,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "cf074ad1-9dff-418f-9353-7b8068f71305",
   "HitEffect": "625304f8-000b-43b3-a6b1-10214a7a75fe"
  },
  "Target_Multiattack_Bear": {
   "Name": "Target_Multiattack_Bear",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Icon": "Action_Bear_Multiattack",
   "Description": "Shared_Target_Multiattack_Bear_Description",
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    ",,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "880f2fcb-9d82-47a3-b028-c257a39a9d38",
   "TargetEffect": "3c1857a6-5d61-4da3-8ec3-f8feb5096357"
  },
  "Target_Multiattack_Ettercap": {
   "Name": "Target_Multiattack_Ettercap",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Description": "Shared_Target_Multiattack_Ettercap_Description",
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    ",,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "dd0b0091-adf3-4f1f-ab3f-2b798f9fd332",
   "TargetEffect": "deb56be1-bc60-4137-bca2-b9b583e00e99"
  },
  "Target_Multiattack_Elemental_Lava": {
   "Name": "Target_Multiattack_Elemental_Lava",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Description": "Shared_Target_Multiattack_Elemental_Lava_Description",
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    ",,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "CastEffect": "7ef50d90-b039-474a-b9d0-a5ea213d4dc1",
   "TargetEffect": "324d258d-3f9a-4d20-b1ab-09ffe7933cf1"
  },
  "Target_Multiattack_GiantBadger": {
   "Name": "Target_Multiattack_GiantBadger",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Description": "Shared_Target_Multiattack_GiantBadger_Description",
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    "caa0d92c-5cd1-4248-9a4a-f2a8e404dac3(CMBT_Skill_MultiAttack_01_Loop),,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Multiattack_Gnoll": {
   "Name": "Target_Multiattack_Gnoll",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Description": "Shared_Target_Multiattack_Gnoll_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "AlternativeCastTextEvents": [
    "Cast2",
    "Cast3"
   ],
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    ",,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "RechargeValues": "5-6",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "b4057338-d3b2-4cba-a7dc-8460172d2c7d",
   "TargetEffect": "fb5179fb-482d-4cf6-8b34-20c9698348cb"
  },
  "Target_Multiattack_Gnoll_Flind_Melee": {
   "Name": "Target_Multiattack_Gnoll_Flind_Melee",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Description": "Shared_Target_Multiattack_Gnoll_Flind_Melee_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "AlternativeCastTextEvents": [
    "Cast2",
    "Cast3"
   ],
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    ",,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "RechargeValues": "2-6",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "a5f58e1a-bf2f-48a9-9fec-5c14ef7bc547",
   "TargetEffect": "4c554cea-8f35-401d-a6df-9efa8abc385a"
  },
  "Target_Multiattack_Harpy": {
   "Name": "Target_Multiattack_Harpy",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Description": "Shared_Target_Multiattack_Harpy_Description",
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    ",,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "164d0803-7748-42ca-85a9-123e4c4a5c46",
   "TargetEffect": "49991f28-1138-4d20-a812-491cd60cbaa6"
  },
  "Target_Multiattack_HookHorror": {
   "Name": "Target_Multiattack_HookHorror",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "TargetRadius": 3,
   "Icon": "Action_HookHorror_Multiattack",
   "Description": "Shared_Target_Multiattack_HookHorror_Description",
   "ExtraDescription": "Shared_Target_Multiattack_HookHorror_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d4,Piercing)"
   ],
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    "caa0d92c-5cd1-4248-9a4a-f2a8e404dac3(CMBT_Skill_MultiAttack_01_Loop),,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "807c95c9-89b5-49fe-a3ac-afd5174e3d3a",
   "TargetEffect": "951ef7eb-5829-45e6-8d23-63bf8c810d1c"
  },
  "Target_Multiattack_Myconid": {
   "Name": "Target_Multiattack_Myconid",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Icon": "Action_Glut_MultiAttack",
   "Description": "Shared_Target_Multiattack_Myconid_Description",
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    "caa0d92c-5cd1-4248-9a4a-f2a8e404dac3(CMBT_Skill_MultiAttack_01_Loop),,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "e838e334-f53d-4486-b0bb-049bf44b1dc0"
  },
  "Target_Multiattack_Owlbear": {
   "Name": "Target_Multiattack_Owlbear",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "TargetRadius": "2.5",
   "Description": "Shared_Target_Multiattack_Owlbear_Description",
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    ",,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "790ddf80-a758-4b29-9020-33a1944a62cb",
   "TargetEffect": "072968fc-51bb-491b-8f12-ade8c8b9cda5"
  },
  "Target_Multiattack_Redcap": {
   "Name": "Target_Multiattack_Redcap",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Description": "Shared_Target_Multiattack_Redcap_Description",
   "DescriptionParams": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "TooltipDamageList": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)",
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)"
   ],
   "CastTextEvent": "Cast",
   "AlternativeCastTextEvents": [
    "Cast2",
    "Cast3"
   ],
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    "caa0d92c-5cd1-4248-9a4a-f2a8e404dac3(CMBT_Skill_MultiAttack_01_Loop),,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "WeaponTypes": [
    "Melee"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "3d4b50e7-ccbd-477b-9a34-be56fdfd7ddf",
   "TargetEffect": "5c14bfa5-3d6d-4c30-8530-6519573bcc1b"
  },
  "Target_Multiattack_Werewolf": {
   "Name": "Target_Multiattack_Werewolf",
   "SpellType": "Target",
   "Parent": "Target_Multiattack",
   "Description": "Shared_Target_Multiattack_Werewolf_Description",
   "SpellAnimation": [
    "6d444cbe-28c7-4f69-9409-9b4871851d9b(CMBT_Skill_MultiAttack_01_Prepare),,",
    "ebd0529b-057e-491f-b124-acfed054728b(CMBT_Skill_MultiAttack_01_Antic),,",
    "eeca2c0a-5f81-411e-aad8-b72362322900(CMBT_Skill_MultiAttack_01_Attack),,",
    "2b6afcc6-c9c1-4dc1-9904-88bebecb892f(CMBT_Skill_MultiAttack_01_Recover),,",
    "caa0d92c-5cd1-4248-9a4a-f2a8e404dac3(CMBT_Skill_MultiAttack_01_Loop),,",
    "e6d40932-427f-4699-a0de-66f124d905b1(CMBT_Skill_MultiAttack_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "ae4f7dae-384e-47ad-8d34-f29cf5ae4420",
   "TargetEffect": "73a95fdc-77cd-4833-ae5a-d10fcefdf940"
  },
  "Target_OpenWounds_Redcap": {
   "Name": "Target_OpenWounds_Redcap",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 14)",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_OpenWounds_Redcap_DisplayName",
   "Description": "Shared_Target_OpenWounds_Redcap_Description",
   "ExtraDescription": "Shared_Target_OpenWounds_Redcap_ExtraDescription",
   "ExtraDescriptionParams": [
    "DealDamage(1d4,Piercing)"
   ],
   "TooltipAttackSave": [
    "RangedWeaponAttack"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_OpenWounds",
   "TargetSound": "CrSpell_Impact_OpenWounds",
   "SpellAnimation": [
    "be806e00-f4fa-4078-b1ad-f3b5cf49776d(SPL_OpenWounds_Prepare),,",
    ",,",
    "89d18db2-07fc-48de-a2c9-5ad6857cc732(SPL_OpenWounds_Cast),,",
    "33176205-04c0-430d-867b-8e54d876fd00(SPL_OpenWounds_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsSpell",
    "HasVerbalComponent",
    "HasSomaticComponent"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "2ffe3243-3e9c-459c-9705-a8a370c8da9e",
   "HitEffect": "bf3e7eb1-9911-4342-8385-890a6a096dbe"
  },
  "Target_PacifyingSpores": {
   "Name": "Target_PacifyingSpores",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "SpellRoll": "not SavingThrow(Ability.Constitution, 12)",
   "SpellSuccess": [
    "ApplyStatus(PACIFYING_SPORES,100,2)"
   ],
   "TargetConditions": "Character() and Enemy() and not Dead()",
   "Icon": "Action_Glut_PacifyingSpores",
   "DisplayName": "Shared_Target_PacifyingSpores_DisplayName",
   "Description": "Shared_Target_PacifyingSpores_Description",
   "CastSound": "CrSpell_Cast_PacifyingSpores",
   "TargetSound": "CrSpell_Impact_PacifyingSpores",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "b4c158cd-0517-48f8-a5c5-9204f744fb2b(CMBT_Skill_SporesPacifying_01_Prepare),,",
    "daedceed-8230-4322-ade9-20a5b06388b4(CMBT_Skill_SporesPacifying_01_Antic),,",
    "7feea097-93fa-4a04-b5a7-7d10593cbd60(CMBT_Skill_SporesPacifying_01_Attack),,",
    "45ddf2aa-92ef-4579-8108-5c01b6e01005(CMBT_Skill_SporesPacifying_01_Recover),,",
    "49460c9c-7620-44b8-8e27-ffaeb6c3b66f(CMBT_Skill_SporesPacifying_01_Loop),,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "30cb6133-77b7-4f84-8e3c-6805e0e7e56e",
   "TargetEffect": "78e82ce7-9a5d-49f1-8686-4c8ed5ad4773"
  },
  "Target_PushingAttack_NPC": {
   "Name": "Target_PushingAttack_NPC",
   "SpellType": "Target",
   "Parent": "Target_PushingAttack",
   "Cooldown": "OncePerCombat",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_ParalyzingRay_Spectator": {
   "Name": "Target_ParalyzingRay_Spectator",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 18,
   "SpellRoll": "not SavingThrow(Ability.Constitution, 13, AdvantageOnParalyzed())",
   "SpellSuccess": [
    "ApplyStatus(PARALYZED,100,3)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Target_ParalyzingRay_Spectator_DisplayName",
   "Description": "Shared_Target_ParalyzingRay_Spectator_Description",
   "ExtraDescription": "Shared_Target_ParalyzingRay_Spectator_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_RayParalyzing",
   "TargetSound": "CrSpell_Impact_RayParalyzing",
   "UseCosts": [
    "EyeStalkActionPoint:1"
   ],
   "VerbalIntent": "Control",
   "WeaponTypes": [
    "None"
   ],
   "SpellFlags": [
    "CannotRotate"
   ],
   "RechargeValues": "4-6",
   "SpellAnimationIntentType": "Aggressive",
   "SourceLimbIndex": 4,
   "CastEffect": "6acd6b15-c4ed-4acd-8f10-9d7d54460e46",
   "TargetEffect": "3787f028-453a-4b76-ac7f-9ff677da6748",
   "HitEffect": "eec186d8-ae79-4800-a463-756d9834ecbb",
   "BeamEffect": "0ceeadd7-b6a7-43f0-882b-2509ecb5c635"
  },
  "Target_Pseudopod_Ooze_Gray": {
   "Name": "Target_Pseudopod_Ooze_Gray",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Pseudopod_Ooze_Gray_DisplayName",
   "CastSound": "CrSpell_Cast_Pseudopod",
   "TargetSound": "CrSpell_Impact_Pseudopod",
   "CastEffect": "fd95bb0c-ec9b-4f01-86d1-54041e38033a",
   "HitEffect": "435bb665-d011-4c71-b54f-6b53a1130db7"
  },
  "Target_WoundingRay_Spectator": {
   "Name": "Target_WoundingRay_Spectator",
   "SpellType": "Target",
   "Parent": "Target_ParalyzingRay_Spectator",
   "DeathType": "Acid",
   "SpellRoll": "not SavingThrow(Ability.Constitution, 13)",
   "TargetConditions": "Character()",
   "DisplayName": "Shared_Target_WoundingRay_Spectator_DisplayName",
   "Description": "Shared_Target_WoundingRay_Spectator_Description",
   "ExtraDescription": "Shared_Target_WoundingRay_Spectator_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_RayWounding",
   "TargetSound": "CrSpell_Impact_RayWounding",
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "CannotRotate"
   ],
   "HitAnimationType": "MagicalDamage_Internal",
   "SpellAnimationIntentType": "Aggressive",
   "SourceLimbIndex": 3,
   "CastEffect": "91994073-34fd-4d03-8380-274968c1d04e",
   "TargetEffect": "5627d1ef-3821-44ac-b734-9ab84e0f4ccc",
   "HitEffect": "cd356086-21df-406f-8acf-bf7e73bf7b89",
   "BeamEffect": "73f914ff-726e-4e4a-a156-f1ac02b8753c"
  },
  "Target_ConfusionRay_Spectator": {
   "Name": "Target_ConfusionRay_Spectator",
   "SpellType": "Target",
   "Parent": "Target_ParalyzingRay_Spectator",
   "SpellRoll": "not SavingThrow(Ability.Wisdom,13)",
   "SpellSuccess": [
    "ApplyStatus(CONFUSION_RAY,100,3)"
   ],
   "DisplayName": "Shared_Target_ConfusionRay_Spectator_DisplayName",
   "Description": "Shared_Target_ConfusionRay_Spectator_Description",
   "ExtraDescription": "Shared_Target_ConfusionRay_Spectator_ExtraDescription",
   "CastTextEvent": "Cast",
   "VerbalIntent": "Control",
   "SpellFlags": [
    "CannotRotate"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "SourceLimbIndex": 9
  },
  "Target_FearRay_Spectator": {
   "Name": "Target_FearRay_Spectator",
   "SpellType": "Target",
   "Parent": "Target_ParalyzingRay_Spectator",
   "SpellRoll": "not SavingThrow(Ability.Wisdom,13, AdvantageOnFrightened())",
   "SpellSuccess": [
    "ApplyStatus(FRIGHTENED,100,3)"
   ],
   "DisplayName": "Shared_Target_FearRay_Spectator_DisplayName",
   "Description": "Shared_Target_FearRay_Spectator_Description",
   "ExtraDescription": "Shared_Target_FearRay_Spectator_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_RayFear",
   "TargetSound": "CrSpell_Impact_RayFear",
   "VerbalIntent": "Control",
   "SpellFlags": [
    "CannotRotate"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "SourceLimbIndex": 10,
   "CastEffect": "45b6efb7-bba3-4dc9-af25-cbfa2c74926d",
   "TargetEffect": "3ec121cf-0862-40b9-ba59-0881af7da550",
   "HitEffect": "d9846f10-94b4-4de7-85d7-04173e4c1e2b",
   "BeamEffect": "4bc7dd52-06ff-4500-9054-db4424a72d98"
  },
  "Target_Rally_NPC": {
   "Name": "Target_Rally_NPC",
   "SpellType": "Target",
   "Parent": "Target_Rally",
   "Cooldown": "OncePerCombat",
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Target_RangersCompanion_NPC": {
   "Name": "Target_RangersCompanion_NPC",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion",
   "Cooldown": "OncePerCombat",
   "SpellFlags": [
    "IgnoreSilence"
   ]
  },
  "Target_RangersCompanion_Boar_NPC": {
   "Name": "Target_RangersCompanion_Boar_NPC",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion_NPC",
   "DisplayName": "Shared_Target_RangersCompanion_Boar_NPC_DisplayName"
  },
  "Target_RangersCompanion_GiantSpider_NPC": {
   "Name": "Target_RangersCompanion_GiantSpider_NPC",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion_NPC",
   "DisplayName": "Shared_Target_RangersCompanion_GiantSpider_NPC_DisplayName"
  },
  "Target_RangersCompanion_GiantRangedSpider_NPC": {
   "Name": "Target_RangersCompanion_GiantRangedSpider_NPC",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion_NPC"
  },
  "Target_RangersCompanion_Wolf_NPC": {
   "Name": "Target_RangersCompanion_Wolf_NPC",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion_NPC",
   "DisplayName": "Shared_Target_RangersCompanion_Wolf_NPC_DisplayName"
  },
  "Target_RangersCompanion_Worg_NPC": {
   "Name": "Target_RangersCompanion_Worg_NPC",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion_NPC",
   "DisplayName": "Shared_Target_RangersCompanion_Worg_NPC_DisplayName"
  },
  "Target_RendVision_Raven_Summon": {
   "Name": "Target_RendVision_Raven_Summon",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetConditions": "Character() and not Self()",
   "Icon": "Action_Raven_RendVision",
   "DisplayName": "Shared_Target_RendVision_Raven_Summon_DisplayName",
   "Description": "Shared_Target_RendVision_Raven_Summon_Description",
   "TooltipStatusApply": [
    "ApplyStatus(BLINDED,100,2)"
   ],
   "CastSound": "CrSpell_Cast_RendVision",
   "TargetSound": "CrSpell_Impact_RendVision",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "7ef4de00-ad83-46a9-8f6e-08ad88e3a38b",
   "CastEffect": "2258267e-85e3-427e-a1ff-6b1134f98e04",
   "TargetEffect": "b7c7825b-83f9-41d0-b140-f588bbb5d38a"
  },
  "Target_RendVision_RavenFamiliar_Summon": {
   "Name": "Target_RendVision_RavenFamiliar_Summon",
   "SpellType": "Target",
   "Parent": "Target_RendVision_Raven_Summon",
   "SpellSuccess": [
    "DealDamage(1, Piercing)",
    "ApplyStatus(BLINDED,100,1)"
   ],
   "DescriptionParams": [
    "DealDamage(1, Piercing)"
   ],
   "TooltipDamageList": [
    "DealDamage(1, Piercing)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(BLINDED,100,1)"
   ],
   "CastSound": "CrSpell_Cast_RendVision",
   "TargetSound": "CrSpell_Impact_RendVision",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Scare_Quasit": {
   "Name": "Target_Scare_Quasit",
   "SpellType": "Target",
   "TargetRadius": 6,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 10, AdvantageOnFrightened())",
   "SpellSuccess": [
    "ApplyStatus(FRIGHTENED,100,2)"
   ],
   "Icon": "Action_Quasit_Scare",
   "DisplayName": "Shared_Target_Scare_Quasit_DisplayName",
   "Description": "Shared_Target_Scare_Quasit_Description",
   "ExtraDescription": "Shared_Target_Scare_Quasit_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Scare",
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    "5bcdefbb-2194-46c2-ac77-0b2d8472a5f7(CMBT_Skill_Shout_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "cd870d99-1bd8-45a5-9dd3-b3749b7bb86c",
   "CastEffect": "e49dad20-6e91-4fdd-a158-c7821c8e3fcc",
   "TargetEffect": "77bed415-9b69-46a0-a015-bd9fe024d6f6"
  },
  "Target_Scare_Quasit_Summon": {
   "Name": "Target_Scare_Quasit_Summon",
   "SpellType": "Target",
   "Parent": "Target_Scare_Quasit",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "64bea8d0-40a2-440f-a0d4-dc78373e39f1",
   "CastEffect": "6448575a-13ec-476a-897d-82a248a883f2",
   "TargetEffect": "02ad4520-f81d-4006-8094-496d27e4fda7"
  },
  "Target_Shove_Bugbear": {
   "Name": "Target_Shove_Bugbear",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "c92d7431-1a0c-4310-92ce-bda26447d262",
   "TargetEffect": "9cd26c01-f426-461b-9f54-3ba372e275de"
  },
  "Target_Shove_Gnoll": {
   "Name": "Target_Shove_Gnoll",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "a71e11ca-95ab-463d-a4bf-fe8094126b61(CMBT_Skill_Shove_01_Antic),,",
    "352c3a89-f99c-4472-8424-58c0ffb15e55(CMBT_Skill_Shove_01_Attack),,",
    "a57fc614-ed20-4574-936b-bdcc6cebd36a(CMBT_Skill_Shove_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "200ab854-a989-4a6a-8ac9-4b20aecaccda(CMBT_Skill_Shove_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "08888396-e4cc-4613-86c1-3989814555ec",
   "TargetEffect": "cc0c445e-2d4f-4d33-be42-45a2c5f15df4"
  },
  "Target_Shove_Harpy": {
   "Name": "Target_Shove_Harpy",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Shove_Hobgoblin": {
   "Name": "Target_Shove_Hobgoblin",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "ba46c15d-90cb-49c7-9825-f3a60a55e5b8",
   "CastEffect": "f15fb8bc-f72f-4300-af65-3c4b0c2080de",
   "TargetEffect": "656e3480-91d4-4ed7-9217-cc27508157bc"
  },
  "Target_Shove_Ogre": {
   "Name": "Target_Shove_Ogre",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "a0490db4-b280-466f-9fe3-bdff0f22ce0f",
   "TargetEffect": "0d5c9ce1-4dbc-4442-bff5-940c08fce04f"
  },
  "Target_Slam_AdamantineGolem": {
   "Name": "Target_Slam_AdamantineGolem",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Icon": "Action_Slam",
   "DisplayName": "Shared_Target_Slam_AdamantineGolem_DisplayName",
   "Description": "Shared_Target_Slam_AdamantineGolem_Description",
   "CastSound": "CrSpell_Cast_SlamAdamantine",
   "TargetSound": "CrSpell_Impact_SlamAdamantine",
   "CastEffect": "34e9449d-504e-406d-960b-b1cc5b996566",
   "TargetEffect": "f06e7b1c-80a7-4227-814c-de5e35585627"
  },
  "Target_Slam_Ogre": {
   "Name": "Target_Slam_Ogre",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Icon": "Action_Slam",
   "DisplayName": "Shared_Target_Slam_Ogre_DisplayName",
   "Description": "Shared_Target_Slam_Ogre_Description",
   "CastSound": "CrSpell_Cast_Slam",
   "TargetSound": "CrSpell_Impact_Slam",
   "SpellAnimation": [
    ",,",
    "1fad5d7e-b4c1-4852-b44f-3f8efc3c4460(CMBT_Skill_Slam_01_Antic),,",
    "b3cfdeb0-fc45-4a10-b6fb-3c62817662eb(CMBT_Skill_Slam_01_Attack),,",
    "d7ea1967-d037-477d-b3d2-b422b3e40c34(CMBT_Skill_Slam_01_Recover),,",
    "2e1a3214-7c9a-44c0-bf99-32704dcd56f5(CMBT_Skill_Slam_01_Loop),,",
    "fb40445c-9e15-40be-8125-1daa14180686(CMBT_Skill_Slam_01_Dash),,"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "AddFallDamageOnLand",
    "IsHarmful"
   ],
   "RechargeValues": "4-6",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "908ed6d0-9bbc-4979-9f91-59652b5586d6"
  },
  "Target_Slam_MudElemental": {
   "Name": "Target_Slam_MudElemental",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Icon": "Action_Slam",
   "DisplayName": "Shared_Target_Slam_MudElemental_DisplayName",
   "Description": "Shared_Target_Slam_MudElemental_Description",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "82cd426e-7d1c-4e44-9965-9859d0660658",
   "TargetEffect": "ec18ddf7-7c12-4255-8ac9-21be3ae508a9"
  },
  "Target_Slam_Elemental_Lava": {
   "Name": "Target_Slam_Elemental_Lava",
   "SpellType": "Target",
   "Parent": "Target_Slam_MudElemental",
   "Description": "Shared_Target_Slam_Elemental_Lava_Description",
   "CastSound": "CrSpell_Cast_LavaSlam",
   "TargetSound": "CrSpell_Impact_LavaSlam",
   "PrepareEffect": "0d8388e8-d6f6-4c22-8914-fcc92f85d1b8",
   "CastEffect": "a310ddc5-85a0-4d52-b615-7df60f9c7df9",
   "TargetEffect": "a85b03a3-6a34-4509-b59d-295f0d31cbc8"
  },
  "Target_Slam_Zombie": {
   "Name": "Target_Slam_Zombie",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Icon": "Action_Slam",
   "DisplayName": "Shared_Target_Slam_Zombie_DisplayName",
   "Description": "Shared_Target_Slam_Zombie_Description",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "6606c30b-be1c-4f17-ae6b-1a591c80b18c(CMBT_Melee_RHand_01_Antic),,",
    "f4ac302b-1569-404f-bd52-1fe443e265df(CMBT_Melee_RHand_01_Attack),,",
    "e8a5c57f-855b-4227-acaa-11e8ce8d7d64(CMBT_Melee_RHand_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Sting_Imp": {
   "Name": "Target_Sting_Imp",
   "SpellType": "Target",
   "Parent": "Target_Bite",
   "DisplayName": "Shared_Target_Sting_Imp_DisplayName",
   "Description": "Shared_Target_Sting_Imp_Description",
   "ExtraDescription": "Shared_Target_Sting_Imp_ExtraDescription",
   "SpellAnimation": [
    "6995ae19-c8d6-434e-a535-eae22d3cf388(CMBT_Skill_Sting_01_Prepare),,",
    "588a0bbb-2d2f-4bd2-928f-2517104a6dd4(CMBT_Skill_Sting_01_Antic),,",
    "a2144fdb-83c3-4442-b567-d3eff9e48686(CMBT_Skill_Sting_01_Attack),,",
    "c43c0cac-9447-4b88-a784-2f0d80a45104(CMBT_Skill_Sting_01_Recover),,",
    "9ffd7e8c-1eba-4bb9-bc90-b1971c5de637(CMBT_Skill_Sting_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "11a20c12-3b22-4a1e-a7d5-1d261b60aef9",
   "TargetEffect": "7933e052-8bf1-40b6-9e2f-91e73c4dc53d"
  },
  "Target_Sting_Imp_Summon": {
   "Name": "Target_Sting_Imp_Summon",
   "SpellType": "Target",
   "Parent": "Target_Sting_Imp",
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Summon_MudMephit": {
   "Name": "Target_Summon_MudMephit",
   "SpellType": "Target",
   "Parent": "Target_RangersCompanion",
   "SpellSchool": "None",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "GROUND:Spawn(02b5e1ea-389d-4008-a247-66538709388b,Projectile_AiHelper_Summon_Weak,)",
    "AI_IGNORE:GROUND:CreateSurface(1, -1, None)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Summon_MudMephit_DisplayName",
   "Description": "Shared_Target_Summon_MudMephit_Description",
   "CastTextEvent": "VFX_Somatic_01",
   "CastSound": "CrSpell_Cast_MudMephitMuddyFriends",
   "TargetSound": "CrSpell_Impact_MudMephitMuddyFriends",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "20bc8606-6406-4f04-a0f7-ec458125b663(CMBT_Skill_Summon_01_Prepare),,",
    "8f5c3b68-2383-4470-bb15-ca3e9b6c5819(CMBT_Skill_Summon_01_Antic),,",
    "36fcebc4-6813-48f0-81f0-c473b79782b7(CMBT_Skill_Summon_01_Attack),,",
    "6e5625e7-7912-450f-9375-d42491d31335(CMBT_Skill_Summon_01_Recover),,",
    "7a4db7bc-d962-4e4c-9ac8-c2f03b96a370(CMBT_Skill_Summon_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IgnoreSilence",
    "IgnoreVisionBlock",
    "IsEnemySpell",
    "HasHighGroundRangeExtension"
   ],
   "RechargeValues": "4-6",
   "PrepareEffect": "7642df71-e717-4a3a-a5ee-482b29ce3e65",
   "CastEffect": "20235cdf-4ca6-4412-bb2d-5ea20cc33705",
   "TargetEffect": "995013d2-ac87-400e-adfa-c7aa3f2b949d"
  },
  "Target_SummonZombie_CorpseFlower": {
   "Name": "Target_SummonZombie_CorpseFlower",
   "SpellType": "Target",
   "SpellProperties": [
    "GROUND:Summon(4b2a85ba-2e6e-481e-a469-3a878d17eb1a, -1,Projectile_AiHelper_Summon_Weak,,CF_ZOMBIE)"
   ],
   "TargetRadius": "1.5",
   "DisplayName": "Shared_Target_SummonZombie_CorpseFlower_DisplayName",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "c0513845-6e0e-42e8-9a8c-baa5e2b6ead6(SPL_Somatic_Summon_01_Cast),,",
    "fbf20742-9dbf-475b-9ff5-42e4b08064ad(SPL_Somatic_Summon_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsEnemySpell"
   ],
   "PrepareEffect": "b69fd981-8bcd-4d76-8f05-53e9f6dcbee5",
   "CastEffect": "3336f7d2-f5a3-4916-ad37-6ed2882fe1f2"
  },
  "Target_Tentacle_CorpseFlower": {
   "Name": "Target_Tentacle_CorpseFlower",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "TargetRadius": 3,
   "TargetConditions": "Character() and not Self()",
   "DisplayName": "Shared_Target_Tentacle_CorpseFlower_DisplayName",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "60f073b7-1e43-47a5-96c7-53376057e59a(SPL_Arcane_Summon_01_Cast),,",
    "f2137644-4bb4-4ed3-ab1d-d149719fbb53(SPL_Arcane_Summon_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsAttack",
    "IsMelee",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Tentacles_MindFlayer": {
   "Name": "Target_Tentacles_MindFlayer",
   "SpellType": "Target",
   "Parent": "Target_Claws",
   "SpellRoll": "Attack(AttackType.MeleeSpellAttack)",
   "DisplayName": "Shared_Target_Tentacles_MindFlayer_DisplayName",
   "Description": "Shared_Target_Tentacles_MindFlayer_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Tentacle",
   "TargetSound": "CrSpell_Impact_Tentacle",
   "SpellAnimation": [
    "8b8bb757-21ce-4e02-a2f3-97d55cf2f90b(CMBT_Melee_RHand_01_Prepare),,",
    "b8a95317-2226-4f00-82b2-af97fb1f36bc(CMBT_Skill_Tentacles_01_Antic),,",
    "2eaa08cb-b2bd-453c-b80a-f1bf1cd90a1a(CMBT_Skill_Tentacles_01_Attack),,",
    "f8d1de3f-8fd1-42b2-87a5-d83ce4937e8c(CMBT_Skill_Tentacles_01_Recover),,",
    "7bb52cd4-0b1c-4926-9165-fa92b75876a3(CMBT_Melee_RHand_01_Loop),,",
    "66cb2d8a-f5c5-4edd-8c1c-e2c03c80d3f7(CMBT_Skill_Tentacles_01_Dash),,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "f29f7ac8-cce2-45f9-8302-b824847a8bbe",
   "TargetEffect": "cc09a13d-5d07-4604-a77f-87e0fa1df56b"
  },
  "Target_TerrifyingGlare_Scarecrow": {
   "Name": "Target_TerrifyingGlare_Scarecrow",
   "SpellType": "Target",
   "TargetRadius": 9,
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 11, AdvantageOnFrightened())",
   "SpellSuccess": [
    "ApplyStatus(FRIGHTENED,100,2)",
    " ApplyStatus(HOLD_PERSON,100,2)"
   ],
   "TargetConditions": "Character()",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_TerrifyingGlare_Scarecrow_DisplayName",
   "Description": "Shared_Target_TerrifyingGlare_Scarecrow_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "1fd48304-2ba1-4dcb-8efa-4550517305ed(SPL_Arcane_Control_01_Cast),,",
    "2afb250c-e441-4573-a75e-e1fdad1c6064(SPL_Arcane_Control_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "IsSpell",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Tongue_Mimic": {
   "Name": "Target_Tongue_Mimic",
   "SpellType": "Target",
   "Parent": "Target_ThornWhip",
   "TargetRadius": 12,
   "TargetConditions": "not Self() and not Grounded() and (Item() or Character() or Dead()) and DistanceToTargetGreaterThan(6.0)",
   "DisplayName": "Shared_Target_Tongue_Mimic_DisplayName",
   "Description": "Shared_Target_Tongue_Mimic_Description",
   "TooltipStatusApply": [
    "ApplyStatus(ACID,100,2)"
   ],
   "CastSound": "CrSpell_Cast_Tongue",
   "TargetSound": "CrSpell_Impact_Tongue",
   "SpellAnimation": [
    "77339011-7faf-41f6-ba2b-037d44e14973(CMBT_Skill_Tongue_01_Prepare),,",
    "14568191-0d45-4939-9821-b8866a975d55(CMBT_Skill_Tongue_01_Antic),,",
    "9d5b8991-fbc3-40bb-850c-0d57597f05dd(CMBT_Skill_Tongue_01_Attack),,",
    "252f14c6-cfca-475a-90b4-54c5edcc8f2d(CMBT_Skill_Tongue_01_Recover),,",
    "0c719f6a-144d-4c85-8639-96eaf1d76340(CMBT_Skill_Tongue_01_Loop),,",
    "65413481-5582-48f5-920d-c875d4138bc0(CMBT_Skill_Tongue_01_Dash),,"
   ],
   "SpellFlags": [
    "IsEnemySpell",
    "IsHarmful"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "de6748d3-5695-4c6a-a801-c440615639ab",
   "TargetEffect": "c44809ff-9e82-4e92-a935-927b162bd5b9"
  },
  "Target_TripAttack_NPC": {
   "Name": "Target_TripAttack_NPC",
   "SpellType": "Target",
   "Parent": "Target_TripAttack",
   "Cooldown": "OncePerCombat",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Tusk_Boar": {
   "Name": "Target_Tusk_Boar",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Icon": "Action_Boar_Tusk",
   "DisplayName": "Shared_Target_Tusk_Boar_DisplayName",
   "Description": "Shared_Target_Tusk_Boar_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_Tusk",
   "TargetSound": "CrSpell_Impact_Tusk",
   "SpellAnimationIntentType": "Aggressive",
   "TargetEffect": "6ef8a4f2-aefc-43c8-83c2-a3569f16241d"
  },
  "Target_Tusk_Boar_Weak": {
   "Name": "Target_Tusk_Boar_Weak",
   "SpellType": "Target",
   "Parent": "Target_Tusk_Boar"
  },
  "Target_Tusk_Boar_Summon": {
   "Name": "Target_Tusk_Boar_Summon",
   "SpellType": "Target",
   "Parent": "Target_Tusk_Boar",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_UnarmedAttack_Gnoll_Newborn": {
   "Name": "Target_UnarmedAttack_Gnoll_Newborn",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "Icon": "unknown",
   "DisplayName": "Shared_Target_UnarmedAttack_Gnoll_Newborn_DisplayName",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_Web_Spider": {
   "Name": "Target_Web_Spider",
   "SpellType": "Target",
   "Parent": "Target_Web",
   "SpellProperties": [
    "GROUND:CreateSurface(3,10,Web)"
   ],
   "TargetRadius": 18,
   "TargetConditions": "Character()",
   "Icon": "Action_Spider_Giant_Web",
   "DisplayName": "Shared_Target_Web_Spider_DisplayName",
   "Description": "Shared_Target_Web_Spider_Description",
   "ExtraDescription": "Shared_Target_Web_Spider_ExtraDescription",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "0bb38184-0ebf-4f1e-9389-233d71ca46e3(CMBT_Skill_Web_01_Prepare),,",
    "59746b96-1aea-4593-8ae7-94c5f4339c68(CMBT_Skill_Web_01_Antic),,",
    "37ab59f8-18b3-4e09-adf2-e7751239c2f7(CMBT_Skill_Web_01_Attack),,",
    "ea1f4b27-e75b-49a2-aec2-e4473c5f5653(CMBT_Skill_Web_01_Recover),,",
    "be54887b-b0b7-4f3a-92aa-807ab21ca880(CMBT_Skill_Web_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasSomaticComponent",
    "HasHighGroundRangeExtension",
    "IsHarmful"
   ],
   "RechargeValues": "4-6",
   "SpellAnimationIntentType": "Aggressive",
   "MemoryCost": 1,
   "PrepareEffect": "c3353db7-ab31-4c3d-8b57-fde10435add7",
   "CastEffect": "c65c89c7-b3f4-4b92-8e28-fba18fcf443a",
   "PositionEffect": "07d87d1d-f99f-452d-8db3-3f91ee1949dd"
  },
  "Target_Web_Spider_Summon": {
   "Name": "Target_Web_Spider_Summon",
   "SpellType": "Target",
   "Parent": "Target_Web_Spider",
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "9d6de4dc-ebdb-42af-802b-f977f4e245f6",
   "PositionEffect": "849df8cd-2b29-4fb8-8353-a77b3fe337f3"
  },
  "Target_Web_Spider_WildShape": {
   "Name": "Target_Web_Spider_WildShape",
   "SpellType": "Target",
   "Parent": "Target_Web_Spider",
   "SpellProperties": [
    "GROUND:CreateSurface(4.5,10,Web)"
   ],
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "e0b460f0-7e39-47b0-b477-f11793bd2896",
   "PositionEffect": "84ca7d06-24f2-4f28-9ad2-ac2f9950ff35"
  },
  "Target_Web_Ettercap": {
   "Name": "Target_Web_Ettercap",
   "SpellType": "Target",
   "Parent": "Target_Web_Spider",
   "SpellAnimation": [
    "0bb38184-0ebf-4f1e-9389-233d71ca46e3(CMBT_Skill_Web_01_Prepare),,",
    "59746b96-1aea-4593-8ae7-94c5f4339c68(CMBT_Skill_Web_01_Antic),,",
    "37ab59f8-18b3-4e09-adf2-e7751239c2f7(CMBT_Skill_Web_01_Attack),,",
    "ea1f4b27-e75b-49a2-aec2-e4473c5f5653(CMBT_Skill_Web_01_Recover),,",
    "be54887b-b0b7-4f3a-92aa-807ab21ca880(CMBT_Skill_Web_01_Loop),,",
    ",,"
   ],
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "6169eb56-79ac-4562-a57d-5ed09d0060d3",
   "PositionEffect": "366881dd-5057-4f38-876e-808f359e57ba"
  },
  "Target_PLAYERS_TADPOLE": {
   "Name": "Target_PLAYERS_TADPOLE",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_MONSTERS_TADPOLE": {
   "Name": "Target_MONSTERS_TADPOLE",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_Telekinesis_Goblin": {
   "Name": "Target_Telekinesis_Goblin",
   "SpellType": "Target",
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast),,",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover),,",
    "cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a(SPL_Arcane_Utility_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellAnimationIntentType": "Aggressive"
  },
  "Target_ITEMS": {
   "Name": "Target_ITEMS",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_Oil_Of_The_Basilisk": {
   "Name": "Target_Oil_Of_The_Basilisk",
   "SpellType": "Target",
   "SpellProperties": [
    "RemoveStatus(SG_Petrified, 100)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Target_Oil_Of_The_Basilisk_DisplayName",
   "Description": "Shared_Target_Oil_Of_The_Basilisk_Description",
   "CastTextEvent": "Cast",
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "c7022507-086a-40f6-a64e-3a9865d73900(SPL_Material_Combust_01),,:a4da186a-0872-461e-ae5e-93d5b32b9bef(SPL_Somatic_Circle_1HandCW_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ]
  },
  "Target_TEST": {
   "Name": "Target_TEST",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_NULLSPELL": {
   "Name": "Target_NULLSPELL",
   "SpellType": "Target",
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "7d4e2c05-1fc4-41b6-98c3-8073309b6b01(SPL_Somatic_1HandFlick_01),,",
    ",,",
    ",,",
    ",,"
   ]
  },
  "Target_SpeakWithDead_Test": {
   "Name": "Target_SpeakWithDead_Test",
   "SpellType": "Target",
   "Parent": "Target_SpeakWithDead",
   "DisplayName": "Shared_Target_SpeakWithDead_Test_DisplayName"
  },
  "Target_GLO_CursedIronFlask_CaptureCreature": {
   "Name": "Target_GLO_CursedIronFlask_CaptureCreature",
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
   "DisplayName": "Gustav_Target_GLO_CursedIronFlask_CaptureCreature_DisplayName",
   "Description": "Gustav_Target_GLO_CursedIronFlask_CaptureCreature_Description",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "bfbdf9fb-d793-48fd-827d-b23995c4f24a(SPL_Somatic_MimeCharm_01),,",
    ",,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension"
   ],
   "CastEffect": "4e0fe453-2290-4f35-b475-5384f54b8636",
   "TargetEffect": "d740bdb3-ad1a-4514-ae9a-f8de2d0f2788"
  },
  "Target_GLO_DangerousBook_SpeakWithDead": {
   "Name": "Target_GLO_DangerousBook_SpeakWithDead",
   "SpellType": "Target",
   "Parent": "Target_SpeakWithDead",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_Guidance_TalismanOfSelune": {
   "Name": "Target_Guidance_TalismanOfSelune",
   "SpellType": "Target",
   "Parent": "Target_Guidance",
   "CastSelfAnimation": "efbf3ee5-7340-4b29-8ab5-113b004a8e7b(SPL_Somatic_Self_Touch_01_Cast)"
  },
  "Target_VampireBite_Astarion": {
   "Name": "Target_VampireBite_Astarion",
   "SpellType": "Target",
   "Cooldown": "OncePerShortRest",
   "TargetRadius": "1.5",
   "DeathType": "DoT",
   "Icon": "Action_VampireBite",
   "DisplayName": "Gustav_Target_VampireBite_Astarion_DisplayName",
   "Description": "Gustav_Target_VampireBite_Astarion_Description",
   "DescriptionParams": [
    "RegainHitPoints(2d4)",
    "DealDamage(2d4,Piercing)"
   ],
   "TooltipDamageList": [
    "RegainHitPoints(2d4)",
    "DealDamage(2d4,Piercing)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_VampireBite",
   "TargetSound": "Action_Impact_VampireBite",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "f13da615-33ae-412e-8314-4ac4fc560dbf(CMBT_Skill_VampireBite_01_Prepare),,",
    ",,",
    "01fe9641-f630-4ed2-8035-1186dc7a5803(CMBT_Skill_VampireBite_01_Attack),,",
    "e6643712-8521-4c83-b518-1a10d61da4ef(CMBT_Skill_VampireBite_01_Recover),,",
    "f28943e2-f5e6-4133-80ef-8c7c4f628920(CMBT_Skill_VampireBite_01_Loop),,",
    ",,"
   ],
   "SpellFlags": [
    "IsMelee",
    "Stealth",
    "IsHarmful",
    "CannotTargetTerrain",
    "CannotTargetItems"
   ],
   "PrepareEffect": "7fb582d5-8a10-4e14-99c6-cf3856ed81a4",
   "CastEffect": "beb643ec-4b17-4618-951a-e98230f757b6",
   "TargetEffect": "e415a119-48eb-407e-9e3a-d48266a3b902"
  },
  "Target_Bite_MothersLoathing": {
   "Name": "Target_Bite_MothersLoathing",
   "SpellType": "Target",
   "Parent": "Target_VampireBite_Astarion",
   "Cooldown": "OncePerTurn",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "SpellSuccess": [
    "DealDamage(2d4, Piercing)"
   ],
   "DisplayName": "Gustav_Target_Bite_MothersLoathing_DisplayName",
   "Description": "Gustav_Target_Bite_MothersLoathing_Description",
   "DescriptionParams": [
    "DealDamage(2d4, Piercing)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d4, Piercing)"
   ],
   "TooltipAttackSave": [
    "MeleeUnarmedAttack"
   ],
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target__CHA": {
   "Name": "Target__CHA",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_CHA_TrueStrike_CompassSpear": {
   "Name": "Target_CHA_TrueStrike_CompassSpear",
   "SpellType": "Target",
   "Parent": "Target_TrueStrike",
   "Cooldown": "OncePerTurn"
  },
  "Target_SpeakWithDead_Amulet_CHA": {
   "Name": "Target_SpeakWithDead_Amulet_CHA",
   "SpellType": "Target",
   "Parent": "Target_SpeakWithDead",
   "Cooldown": "OncePerRest"
  },
  "Target__DEN": {
   "Name": "Target__DEN",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_DEN_DancingLights_Arabella_Locket": {
   "Name": "Target_DEN_DancingLights_Arabella_Locket",
   "SpellType": "Target",
   "Parent": "Target_DancingLights",
   "Cooldown": "OncePerTurn"
  },
  "Target_DEN_BearReward_LesserRestoration": {
   "Name": "Target_DEN_BearReward_LesserRestoration",
   "SpellType": "Target",
   "Parent": "Target_LesserRestoration",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_DEN_Apprentice_DaggerOfShar_Spell": {
   "Name": "Target_DEN_Apprentice_DaggerOfShar_Spell",
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
   "DisplayName": "Gustav_Target_DEN_Apprentice_DaggerOfShar_Spell_DisplayName",
   "Description": "Gustav_Target_DEN_Apprentice_DaggerOfShar_Spell_Description",
   "ExtraDescription": "Gustav_Target_DEN_Apprentice_DaggerOfShar_Spell_ExtraDescription"
  },
  "Target_DEN_TheRiteOfThorns": {
   "Name": "Target_DEN_TheRiteOfThorns",
   "SpellType": "Target",
   "Level": 0,
   "SpellSchool": "Evocation",
   "TargetRadius": 20,
   "DisplayName": "Gustav_Target_DEN_TheRiteOfThorns_DisplayName",
   "Description": "Gustav_Target_DEN_TheRiteOfThorns_Description",
   "TooltipStatusApply": [
    "ApplyStatus(LIGHT,100,20)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_TheRiteOfThorns_L1to3",
   "SpellAnimation": [
    ",,",
    ",,",
    "fa47feb5-294f-4dcd-88be-b7254b743fd6(CUST_TheRiteOfThorns_01_Cast),,",
    "3adf0f0a-467c-4992-b1db-76ab5e076f2f(CUST_TheRiteOfThorns_01_Recover),,",
    "bf6be5eb-5bf8-428b-a855-b054f476ef20(CUST_TheRiteOfThornsStill_01_Loop),,",
    ",,"
   ],
   "MaximumTargets": 1
  },
  "Target_DEN_EnsnaringStrike_HalsinBlade": {
   "Name": "Target_DEN_EnsnaringStrike_HalsinBlade",
   "SpellType": "Target",
   "Parent": "Target_EnsnaringStrike",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_DEN_Nettie_HealingWord": {
   "Name": "Target_DEN_Nettie_HealingWord",
   "SpellType": "Target",
   "Parent": "Target_HealingWord",
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    ",,",
    ",,"
   ],
   "PrepareEffect": "56ee7250-df2b-46b5-9ddb-0aec6c0d99f0",
   "CastEffect": "f025276a-09c4-4b44-bcbc-bf334a059094",
   "TargetEffect": "456d73c1-3cc8-4556-b76a-3d16fd25ba3e"
  },
  "Target_DEN_Entangle_Staff": {
   "Name": "Target_DEN_Entangle_Staff",
   "SpellType": "Target",
   "Parent": "Target_Entangle",
   "Cooldown": "OncePerRest",
   "DisplayName": "Gustav_Target_DEN_Entangle_Staff_DisplayName",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target__FOR": {
   "Name": "Target__FOR",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_FOR_Smite_Searing_DeathOfATrueSoul": {
   "Name": "Target_FOR_Smite_Searing_DeathOfATrueSoul",
   "SpellType": "Target",
   "Parent": "Target_Smite_Searing",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_FOR_ThayanCellar_SummonQuasit": {
   "Name": "Target_FOR_ThayanCellar_SummonQuasit",
   "SpellType": "Target",
   "Parent": "Target_Summon_Quasit"
  },
  "Target_FOR_SpiderQueen_HatchEggs": {
   "Name": "Target_FOR_SpiderQueen_HatchEggs",
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
   "DisplayName": "Gustav_Target_FOR_SpiderQueen_HatchEggs_DisplayName",
   "Description": "Gustav_Target_FOR_SpiderQueen_HatchEggs_Description",
   "CastSound": "CrSpell_Cast_BroodmotherCall",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "5e57443f-284e-47b2-915e-5b6417db269c(CMBT_Skill_Shout_01_Prepare),,",
    "d8b7f668-db2b-43b0-9707-5da2ed2cf27e(CMBT_Skill_Shout_01_Antic),,",
    "7521e279-1bb3-4105-b32d-8206234836a3(CMBT_Skill_Shout_01_Attack),,",
    "d172e037-7041-4352-9a20-5f4b185f9ef1(CMBT_Skill_Shout_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "IgnoreVisionBlock"
   ],
   "MemoryCost": 0,
   "CastEffect": "ff0a1840-bcda-4802-88cd-99be08ee34df"
  },
  "Target__GOB": {
   "Name": "Target__GOB",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_UNI_MistyStep_DrowCommander_Amulet": {
   "Name": "Target_UNI_MistyStep_DrowCommander_Amulet",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast),,",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover),,",
    ",,",
    ",,"
   ]
  },
  "Target_GOB_CureWounds_SeluneAmulet": {
   "Name": "Target_GOB_CureWounds_SeluneAmulet",
   "SpellType": "Target",
   "Parent": "Target_CureWounds",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(SLEEP,100,2,,,,not SavingThrow(Ability.Constitution,10))",
    " RegainHitPoints(1d8)"
   ],
   "Icon": "Action_SelunesDream",
   "DisplayName": "Gustav_Target_GOB_CureWounds_SeluneAmulet_DisplayName",
   "Description": "Gustav_Target_GOB_CureWounds_SeluneAmulet_Description",
   "TooltipAttackSave": [
    "Constitution"
   ],
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_GOB_ChickenChase_CommentatorShove": {
   "Name": "Target_GOB_ChickenChase_CommentatorShove",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellProperties": [
    "Force(5)"
   ],
   "SpellSuccess": [
    "Force(4)"
   ],
   "TargetConditions": "not Self() and CanShoveWeight() and not Grounded() and IsMovable()"
  },
  "Target_GOB_DrowCommander_Buff": {
   "Name": "Target_GOB_DrowCommander_Buff",
   "SpellType": "Target",
   "Parent": "Target_SacredFlame",
   "SpellSchool": "None",
   "TargetRadius": 12,
   "DeathType": "None",
   "Icon": "statIcons_SoulBranding",
   "DisplayName": "Gustav_Target_GOB_DrowCommander_Buff_DisplayName",
   "Description": "Gustav_Target_GOB_DrowCommander_Buff_Description",
   "ExtraDescription": "Gustav_Target_GOB_DrowCommander_Buff_ExtraDescription",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_BrandOfTheAbsolute",
   "TargetSound": "CrSpell_Impact_BrandOfTheAbsolute",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell"
   ],
   "PrepareEffect": "07f4449f-dd3b-4a4f-b27f-04422db17dfd",
   "CastEffect": "cda623ed-656e-490f-b72e-927dbf66536f",
   "TargetEffect": "3c58e43a-10c9-4308-9fbb-49fdb39e8c4d"
  },
  "Target_GOB_DrowCommander_Bless": {
   "Name": "Target_GOB_DrowCommander_Bless",
   "SpellType": "Target",
   "Parent": "Target_Bless",
   "MaximumTargets": 4
  },
  "Target_GOB_Priestess_Telekinesis": {
   "Name": "Target_GOB_Priestess_Telekinesis",
   "SpellType": "Target",
   "Parent": "Target_HoldPerson",
   "Level": 0,
   "SpellSchool": "None",
   "Cooldown": "OncePerCombat",
   "SpellProperties": [
    "AI_IGNORE:TARGET:ApplyStatus(GOB_PRIESTESS_STATUE_DESTROY,100,1)",
    "AI_ONLY:CAST:ApplyStatus(SELF, AI_STATUS_FAKE,100)"
   ],
   "TargetRadius": 18,
   "AreaRadius": 5,
   "DeathType": "None",
   "Icon": "unknown",
   "DisplayName": "Gustav_Target_GOB_Priestess_Telekinesis_DisplayName",
   "Description": "Gustav_Target_GOB_Priestess_Telekinesis_Description",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_GoblinTelekinesis",
   "TargetSound": "CrSpell_Impact_GoblinTelekinesis",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast),,",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "MemoryCost": 0,
   "PrepareEffect": "2a604b6f-c958-481d-a188-fa1fde28c598",
   "CastEffect": "121f6a39-1695-4acf-bde3-2dde1764ecc4",
   "TargetEffect": "d1f1738c-9628-4d88-bbe9-d75b5d307f10",
   "BeamEffect": "c6ab2aef-9a58-4196-afc0-5c7fa58b0173"
  },
  "Target_GOB_Priestess_Telekinesis_Pull": {
   "Name": "Target_GOB_Priestess_Telekinesis_Pull",
   "SpellType": "Target",
   "Parent": "Target_PsionicPull",
   "Cooldown": "OncePerCombat",
   "TargetConditions": "Character() and not Self() and not Dead()",
   "Icon": "unknown",
   "DisplayName": "Gustav_Target_GOB_Priestess_Telekinesis_Pull_DisplayName",
   "Description": "Gustav_Target_GOB_Priestess_Telekinesis_Pull_Description",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast),,",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "PrepareEffect": "282bad87-4462-4c2e-a264-84ee0e725065",
   "CastEffect": "c4b2906d-4a2c-4d67-a71c-e5b153c14872",
   "TargetEffect": "33210915-2041-4967-bdb4-3858fbd21f71",
   "BeamEffect": "c6d17c32-998f-4323-93a7-040e4a042ef3"
  },
  "Target_GOB_Priestess_HealingWord": {
   "Name": "Target_GOB_Priestess_HealingWord",
   "SpellType": "Target",
   "Parent": "Target_HealingWord",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "RangeIgnoreVerticalThreshold"
   ],
   "RechargeValues": "4-6",
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_HoldPerson": {
   "Name": "Target_GOB_Priestess_HoldPerson",
   "SpellType": "Target",
   "Parent": "Target_HoldPerson",
   "Cooldown": "None",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "HasHighGroundRangeExtension",
    "IsConcentration",
    "RangeIgnoreVerticalThreshold"
   ],
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_ShieldOfFaith": {
   "Name": "Target_GOB_Priestess_ShieldOfFaith",
   "SpellType": "Target",
   "Parent": "Target_ShieldOfFaith",
   "TargetConditions": "Character() and not IsConcentrating(context.Source)",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsEnemySpell",
    "IsHarmful"
   ],
   "RechargeValues": "4-6",
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_AbsolutesWord": {
   "Name": "Target_GOB_Priestess_AbsolutesWord",
   "SpellType": "Target",
   "Parent": "Target_ShieldOfFaith",
   "SpellSchool": "None",
   "Cooldown": "OncePerShortRest",
   "SpellProperties": [
    "ApplyStatus(GOB_PRIESTESS_ABSOLUTEWORD_APPLY,100,1)"
   ],
   "TargetRadius": 12,
   "AreaRadius": 5,
   "TargetConditions": "Ally() and not Item() and not Dead() and not Self() and not IsConcentrating(context.Source)",
   "DisplayName": "Gustav_Target_GOB_Priestess_AbsolutesWord_DisplayName",
   "Description": "Gustav_Target_GOB_Priestess_AbsolutesWord_Description",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "7c194893-2879-4afe-84dc-9ea842fe0a43(SPL_Arcane_Utility_01_Cast),,",
    "a000af58-a7c7-48d4-a746-c19242ef00ac(SPL_Arcane_Utility_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell"
   ],
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_Grease": {
   "Name": "Target_GOB_Priestess_Grease",
   "SpellType": "Target",
   "Parent": "Target_Grease",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "RechargeValues": "4-6",
   "MemoryCost": 0
  },
  "Target_GOB_Priestess_ShockingGrasp": {
   "Name": "Target_GOB_Priestess_ShockingGrasp",
   "SpellType": "Target",
   "Parent": "Target_ShockingGrasp",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "RechargeValues": "3-6",
   "MemoryCost": 0
  },
  "Target_GOB_GoblinKing_ForceAttack": {
   "Name": "Target_GOB_GoblinKing_ForceAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "Cooldown": "OncePerTurn",
   "DeathType": "Physical",
   "Icon": "Action_AbsolutePower",
   "DisplayName": "Gustav_Target_GOB_GoblinKing_ForceAttack_DisplayName",
   "Description": "Gustav_Target_GOB_GoblinKing_ForceAttack_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Force)",
    "Distance(5)"
   ],
   "CastSound": "CrSpell_Cast_BlindFury",
   "TargetSound": "CrSpell_Impact_BlindFury",
   "SpellAnimation": [
    "d11b68a0-5c5c-430f-a033-90ab91e04525(CMBT_Skill_Trip_01_Prepare),,",
    "8c5b6452-a6eb-44f3-8830-f8e1a06678ba(CMBT_Skill_Trip_01_Antic),,",
    "412f122d-0773-4a08-bf1c-65749e543fb6(CMBT_Skill_Trip_01_Attack),,",
    "87c14b90-fb0a-4cd3-8364-b38c3204dae4(CMBT_Skill_Trip_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsMelee",
    "IsAttack",
    "IsEnemySpell",
    "AddFallDamageOnLand"
   ],
   "CastEffect": "95566e63-1e63-44ed-8768-ca38cf69c146",
   "TargetEffect": "52bd8281-f970-4e5f-a313-d57945d2608a"
  },
  "Target_GOB_GoblinKing_ForceAttack_WeaponAttack": {
   "Name": "Target_GOB_GoblinKing_ForceAttack_WeaponAttack",
   "SpellType": "Target",
   "Parent": "Target_GOB_GoblinKing_ForceAttack",
   "Cooldown": "OncePerShortRest",
   "AIFlags": [
    "CanNotUse"
   ],
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
   "Name": "Target_GOB_SpiderNest_ShortShove",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellProperties": [
    "Force(3)"
   ],
   "Icon": "unknown",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_GOB_WolfPens_HalsinCureWounds": {
   "Name": "Target_GOB_WolfPens_HalsinCureWounds",
   "SpellType": "Target",
   "Parent": "Target_CureWounds"
  },
  "Target_GOB_WolfPens_HalsinMultiAttack_Bear": {
   "Name": "Target_GOB_WolfPens_HalsinMultiAttack_Bear",
   "SpellType": "Target",
   "Parent": "Target_Multiattack_Bear",
   "Cooldown": "OncePerCombat"
  },
  "Target_GOB_PainPriest_WeaponAttack": {
   "Name": "Target_GOB_PainPriest_WeaponAttack",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack",
   "SpellProperties": [
    "DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType, Nonmagical, Nonlethal)"
   ],
   "DisplayName": "Gustav_Target_GOB_PainPriest_WeaponAttack_DisplayName"
  },
  "Target_GOB_PainPriest_ChillTouch": {
   "Name": "Target_GOB_PainPriest_ChillTouch",
   "SpellType": "Target",
   "Parent": "Target_ChillTouch",
   "SpellProperties": [
    "ApplyStatus(CHILL_TOUCH,100,1)",
    " DealDamage(1d6, Necrotic, Magical, Nonlethal)"
   ]
  },
  "Target_GOB_VoloGuard_Shove": {
   "Name": "Target_GOB_VoloGuard_Shove",
   "SpellType": "Target",
   "Parent": "Target_Shove",
   "SpellProperties": [
    "Force(2)"
   ]
  },
  "Target_GOB_AnimalFriendship_Pens_BeastmasterAmulet": {
   "Name": "Target_GOB_AnimalFriendship_Pens_BeastmasterAmulet",
   "SpellType": "Target",
   "Parent": "Target_AnimalFriendship",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target__HAG": {
   "Name": "Target__HAG",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_HAG_ClearIllusion": {
   "Name": "Target_HAG_ClearIllusion",
   "SpellType": "Target",
   "Parent": "Target_Mending",
   "SpellProperties": [
    "ApplyStatus(HAG_MASK_ILLUSION,100,-1)"
   ],
   "TargetRadius": 10,
   "AreaRadius": 0,
   "DisplayName": "Gustav_Target_HAG_ClearIllusion_DisplayName",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Utility_MinorIllusion_L1to3",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "Spell_Impact_Utility_MinorIllusion_L1to3",
   "AiCalculationSpellOverride": "Quest_HAG_ClearIllusion_Override",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    ",,",
    ",,",
    "a4da186a-0872-461e-ae5e-93d5b32b9bef(SPL_Somatic_Circle_1HandCW_01_Cast),,",
    ",,",
    ",,",
    ",,"
   ],
   "TargetEffect": "d6d9f148-00f1-40fe-b332-812b20331b5b"
  },
  "Target_HAG_SinisterStrike": {
   "Name": "Target_HAG_SinisterStrike",
   "SpellType": "Target",
   "Parent": "Target_Claws_GreenHag",
   "SpellRoll": "Attack(AttackType.MeleeUnarmedAttack)",
   "DisplayName": "Gustav_Target_HAG_SinisterStrike_DisplayName",
   "Description": "Gustav_Target_HAG_SinisterStrike_Description",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "SpellFlags": [
    "IsMelee",
    "IsHarmful"
   ],
   "CastEffect": "fc420eb6-4009-4e33-a673-307b107f301c",
   "TargetEffect": "ce119613-8605-43aa-86f0-f45c8bff5000"
  },
  "Target_HAG_Hagspawn_SummonHusband": {
   "Name": "Target_HAG_Hagspawn_SummonHusband",
   "SpellType": "Target",
   "TargetRadius": 18,
   "Icon": "unknown",
   "DisplayName": "Gustav_Target_HAG_Hagspawn_SummonHusband_DisplayName",
   "Description": "Gustav_Target_HAG_Hagspawn_SummonHusband_Description",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Summon_FindFamiliar_L1to3",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "Spell_Impact_Summon_FindFamiliar_L1to3",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "6f42f5f3-7a5a-4441-a02e-71b0450ac4b7(SPL_Arcane_Summon_01_Prepare),,",
    ",,",
    "60f073b7-1e43-47a5-96c7-53376057e59a(SPL_Arcane_Summon_01_Cast),,",
    "f2137644-4bb4-4ed3-ab1d-d149719fbb53(SPL_Arcane_Summon_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Summon",
   "PrepareEffect": "63de2f8e-d6f7-48be-9e69-e07517ed6217",
   "CastEffect": "efa7c4f8-2920-48d6-be69-563094a290ac",
   "TargetEffect": "318e95be-3624-44a1-8ca9-b0ff93c38e7f"
  },
  "Target_HAG_ViciousMockery": {
   "Name": "Target_HAG_ViciousMockery",
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
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_ViciousMockery",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_ViciousMockery",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "41050809-ab26-46eb-9e15-ece46ade7937(SPL_ViciousMockery_01_Prepare),,",
    ",,",
    "6d2407bd-68ca-429f-8867-02ee5f3a1127(SPL_ViciousMockery_01_Cast),,",
    "182c45eb-3716-457c-9aa2-3f36271253ba(SPL_ViciousMockery_01_Recover),,",
    ",,",
    ",,"
   ],
   "MemoryCost": 0,
   "CastEffect": "1ed4fca5-f90b-4241-92ae-63e2b48c6f8e",
   "TargetEffect": "cd1b47d2-8d2e-45e8-97ac-5d569a5347a2"
  },
  "Target_HAG_HoldPerson": {
   "Name": "Target_HAG_HoldPerson",
   "SpellType": "Target",
   "Parent": "Target_HoldPerson",
   "Level": 0,
   "TargetRadius": 26,
   "CastTextEvent": "Cast",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3c809c4e-24da-4fa6-b912-6ff108bfe5d7(SPL_HoldPerson_01_Prepare),,",
    ",,",
    "496cec90-1c0c-49ae-9f68-32870b7e1dbe(SPL_HoldPerson_01_Cast),,",
    "812a2026-61c7-4d46-b607-b5b71d34062c(SPL_HoldPerson_01_Recover),,",
    ",,",
    ",,"
   ],
   "RechargeValues": "5-6",
   "MemoryCost": 0,
   "PrepareEffect": "c79a3258-abb0-4cfc-aae7-b55faffbe2d0",
   "CastEffect": "2abb77a8-9bca-4e01-82d6-1c9463b238ae",
   "TargetEffect": "876c9309-2be9-4b1d-8e56-bb23c1f2a9eb"
  },
  "Target_HAG_MaskOfTerror": {
   "Name": "Target_HAG_MaskOfTerror",
   "SpellType": "Target",
   "Parent": "Target_ViciousMockery",
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 16)",
   "SpellFail": [
    "DealDamage(1d4,Psychic)"
   ],
   "DisplayName": "Gustav_Target_HAG_MaskOfTerror_DisplayName",
   "Description": "Gustav_Target_HAG_MaskOfTerror_Description",
   "ExtraDescription": "Gustav_Target_HAG_MaskOfTerror_ExtraDescription",
   "CastSound": "CrSpell_Cast_MaskOfTerror",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_MaskOfTerror",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "4148823a-6dbc-4692-a8ff-71520315a10f(SPL_Somatic_Target_Mute_01_Cast),,",
    "1b8cdb9d-6f8e-4161-901c-1fd7a7787c7c(SPL_Somatic_Target_Mute_01_Recover),,",
    ",,",
    ",,"
   ],
   "PrepareEffect": "a9e3a219-c03c-4adb-8b59-d80eb8535ff5",
   "CastEffect": "bbe5d452-f976-4f1e-8e8c-7f5fe5c6dd4a",
   "TargetEffect": "cb5da71b-084e-46d6-b204-2869ff0e8b08"
  },
  "Target_HAG_MaskOfRegret": {
   "Name": "Target_HAG_MaskOfRegret",
   "SpellType": "Target",
   "Parent": "Target_Bane",
   "TargetRadius": 16,
   "AreaRadius": 4,
   "SpellRoll": "not SavingThrow(Ability.Charisma, 14)",
   "DisplayName": "Gustav_Target_HAG_MaskOfRegret_DisplayName",
   "Description": "Gustav_Target_HAG_MaskOfRegret_Description",
   "CastSound": "CrSpell_Cast_MaskOfRegret",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_MaskOfRegret",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "9d86c202-31a5-4ba3-ae60-ec4fbb425665(SPL_Somatic_Aoe_Widen_01_Cast),,",
    "a4112e22-e36f-44ff-828f-81252360da53(SPL_Somatic_Aoe_Widen_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "HasSomaticComponent",
    "HasVerbalComponent",
    "IsSpell",
    "IsHarmful"
   ],
   "MaximumTargets": 3,
   "PrepareEffect": "5a2db23c-0eb4-449d-83ce-37e25922e4ba",
   "CastEffect": "d0dd8b17-c8ee-4515-aa12-878644ac7d6d",
   "TargetEffect": "8bfaa952-a402-4c21-8b47-51aaec55a83c",
   "PositionEffect": "52a7eb9b-10ae-4ffc-b0d4-0460df1d08a6"
  },
  "Target_HAG_MaskOfVengeance": {
   "Name": "Target_HAG_MaskOfVengeance",
   "SpellType": "Target",
   "Parent": "Target_Smash",
   "DisplayName": "Gustav_Target_HAG_MaskOfVengeance_DisplayName",
   "Description": "Gustav_Target_HAG_MaskOfVengeance_Description",
   "CastSound": "CrSpell_Cast_MaskOfVengence",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_MaskOfVengence",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "PrepareEffect": "b10e10db-604a-45cf-aab0-0fc434eb9f37",
   "CastEffect": "1e18afe1-2102-4032-85a6-6214676fe5ee",
   "TargetEffect": "550119e3-9c52-42ff-aecc-341ae462df42"
  },
  "Target_HAG_MaskOfServitude": {
   "Name": "Target_HAG_MaskOfServitude",
   "SpellType": "Target",
   "Parent": "Target_CureWounds",
   "SpellProperties": [
    "ApplyStatus(HAG_MASKOFSERVITUDE,100,2)"
   ],
   "TargetRadius": 18,
   "DisplayName": "Gustav_Target_HAG_MaskOfServitude_DisplayName",
   "Description": "Gustav_Target_HAG_MaskOfServitude_Description",
   "CastSelfAnimation": "bcc3b0d9-f04f-4448-aab0-e0ad641167cc(SPL_Somatic_Self_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_MaskOfServitude",
   "VocalComponentSound": "Vocal_Component_UniqueNPC_Gen_Hag",
   "TargetSound": "CrSpell_Impact_MaskOfServitude",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    ",,",
    ",,"
   ],
   "PrepareEffect": "4af0bc9c-fa59-4d8c-8e2c-d0c45e00af4f",
   "CastEffect": "96b42302-4b81-43b5-85fd-b8a176b8e60c",
   "TargetEffect": "d88defed-2d7b-4e45-8d3e-106d8794f79f"
  },
  "Target_HAG_MudMephit_Summon": {
   "Name": "Target_HAG_MudMephit_Summon",
   "SpellType": "Target",
   "Parent": "Target_Summon_MudMephit",
   "SpellProperties": [
    "GROUND:Spawn(16144541-3049-48f0-b80f-fd978bf1134a,Projectile_AiHelper_Summon_Weak,)",
    "AI_IGNORE:GROUND:CreateSurface(1, -1, None)"
   ]
  },
  "Target_HAG_ProtectionFromEvilAndGood_Amulet": {
   "Name": "Target_HAG_ProtectionFromEvilAndGood_Amulet",
   "SpellType": "Target",
   "Parent": "Target_ProtectionFromEvilAndGood",
   "Cooldown": "OncePerShortRest",
   "ExtraDescription": "Gustav_Target_HAG_ProtectionFromEvilAndGood_Amulet_ExtraDescription",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target__PLA": {
   "Name": "Target__PLA",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_PLA_ZhentDungeon_Punch": {
   "Name": "Target_PLA_ZhentDungeon_Punch",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "SpellProperties": [
    "DealDamage(1, Bludgeoning, Nonmagical, Nonlethal)"
   ]
  },
  "Target_PLA_ShieldOfFaith_SwordOfJustice": {
   "Name": "Target_PLA_ShieldOfFaith_SwordOfJustice",
   "SpellType": "Target",
   "Parent": "Target_ShieldOfFaith",
   "Cooldown": "OncePerCombat",
   "DisplayName": "Gustav_Target_PLA_ShieldOfFaith_SwordOfJustice_DisplayName",
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Target__UND": {
   "Name": "Target__UND",
   "SpellType": "Target",
   "Parent": "Target_MainHandAttack"
  },
  "Target_UNI_MistyStep_NightWalkers": {
   "Name": "Target_UNI_MistyStep_NightWalkers",
   "SpellType": "Target",
   "Parent": "Target_MistyStep",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "SpellAnimation": [
    "dd86aa43-8189-4d9f-9a5c-454b5fe4a197(SPL_Arcane_Utility_01_Prepare),,",
    ",,",
    "39daf365-ec06-49a8-81f3-9032640699d7(SPL_Somatic_Target_StrikeVertical_01_Cast),,",
    "5c400e93-0266-499c-a2e1-75d53358460f(SPL_Somatic_Target_StrikeVertical_01_Recover),,",
    ",,",
    ",,"
   ]
  },
  "Target_UND_LoneDuergar_InflictWounds": {
   "Name": "Target_UND_LoneDuergar_InflictWounds",
   "SpellType": "Target",
   "Parent": "Target_InflictWounds",
   "RechargeValues": "3-6"
  },
  "Target_UND_LoneDuergar_AnimateDead": {
   "Name": "Target_UND_LoneDuergar_AnimateDead",
   "SpellType": "Target",
   "Parent": "Target_AnimateDead_NPC",
   "Cooldown": "OncePerCombat",
   "TargetRadius": 22,
   "AreaRadius": 8,
   "MaximumTargets": 5
  },
  "Target_UND_MushroomHunter_MistyStep": {
   "Name": "Target_UND_MushroomHunter_MistyStep",
   "SpellType": "Target",
   "Parent": "Target_MistyStep"
  },
  "Target_UND_Spectator_UnpetrifyingRay": {
   "Name": "Target_UND_Spectator_UnpetrifyingRay",
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
    "RemoveStatus(UND_SPECTATOR_PETRIFIED_HOOKHORROR)",
    "RemoveStatus(PETRIFIED)",
    "ApplyStatus(UND_SPECTATOR_CHARMED,100,-1)"
   ],
   "TargetRadius": 18,
   "DisplayName": "Gustav_Target_UND_Spectator_UnpetrifyingRay_DisplayName",
   "Description": "Gustav_Target_UND_Spectator_UnpetrifyingRay_Description",
   "CastSound": "CrSpell_Cast_RayUnpetrifying",
   "TargetSound": "CrSpell_Impact_RayUnpetrify",
   "VerbalIntent": "Healing",
   "CastEffect": "f23bc1e0-9a35-434e-a0b3-c9ef93c4cbf7",
   "HitEffect": "b29c7e5e-4b10-47f6-82e6-df8908bb930f",
   "BeamEffect": "7c5bb7d7-2549-4232-bc03-c97f57ff18a1"
  },
  "Target_UND_Spectator_Bite": {
   "Name": "Target_UND_Spectator_Bite",
   "SpellType": "Target",
   "Parent": "Target_Bite_Spectator"
  },
  "Target_UND_Spectator_Ray_Paralyzing": {
   "Name": "Target_UND_Spectator_Ray_Paralyzing",
   "SpellType": "Target",
   "Parent": "Target_ParalyzingRay_Spectator"
  },
  "Target_UND_Spectator_Ray_Wounding": {
   "Name": "Target_UND_Spectator_Ray_Wounding",
   "SpellType": "Target",
   "Parent": "Target_WoundingRay_Spectator"
  },
  "Target_UND_Spectator_Ray_Fear": {
   "Name": "Target_UND_Spectator_Ray_Fear",
   "SpellType": "Target",
   "Parent": "Target_FearRay_Spectator"
  },
  "Target_UND_PetrifiedDrow_HealingWord": {
   "Name": "Target_UND_PetrifiedDrow_HealingWord",
   "SpellType": "Target",
   "Parent": "Target_HealingWord"
  },
  "Target_UND_Myconid_UseBarrelStalk": {
   "Name": "Target_UND_Myconid_UseBarrelStalk",
   "SpellType": "Target",
   "Parent": "Target_UnarmedAttack",
   "SpellProperties": [
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_HELPER_BUFF,100,3)"
   ],
   "TargetRadius": "1.5",
   "DisplayName": "Gustav_Target_UND_Myconid_UseBarrelStalk_DisplayName",
   "Description": "Gustav_Target_UND_Myconid_UseBarrelStalk_Description",
   "DescriptionParams": [
    "DealDamage(3d4,Poison)"
   ],
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Target_UND_DeadInTheWater_Shove": {
   "Name": "Target_UND_DeadInTheWater_Shove",
   "SpellType": "Target",
   "Parent": "Target_Shove"
  },
  "Target_UND_MyconidSovereign_FakeAnimatingSpores": {
   "Name": "Target_UND_MyconidSovereign_FakeAnimatingSpores",
   "SpellType": "Target",
   "Parent": "Target_AnimatingSpores"
  },
  "Target_UND_Light_Tower_Ring": {
   "Name": "Target_UND_Light_Tower_Ring",
   "SpellType": "Target",
   "Parent": "Target_Light",
   "Cooldown": "OncePerTurn"
  },
  "Target_UND_Bless_StaffBlessMystra": {
   "Name": "Target_UND_Bless_StaffBlessMystra",
   "SpellType": "Target",
   "Parent": "Target_Bless",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_UND_Smite_Searing_DuergarBlacksmithHammer": {
   "Name": "Target_UND_Smite_Searing_DuergarBlacksmithHammer",
   "SpellType": "Target",
   "Parent": "Target_Smite_Searing",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_UND_DeadInWater_Invisibility": {
   "Name": "Target_UND_DeadInWater_Invisibility",
   "SpellType": "Target",
   "Parent": "Target_Invisibility",
   "Cooldown": "OncePerRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Target_UND_MyconidSovereign_BlissSpores": {
   "Name": "Target_UND_MyconidSovereign_BlissSpores",
   "SpellType": "Target",
   "Parent": "Target_AnimatingSpores",
   "Cooldown": "OncePerTurn",
   "SpellProperties": [
    "ApplyStatus(UND_BLISS_SPORES,100,2)"
   ],
   "TargetConditions": "not Item() and not Dead()",
   "Icon": "unknown",
   "DisplayName": "Gustav_Target_UND_MyconidSovereign_BlissSpores_DisplayName",
   "Description": "Gustav_Target_UND_MyconidSovereign_BlissSpores_Description",
   "UseCosts": [
    "BonusActionPoint:1"
   ]
  },
  "Target_UND_MyconidAmulet_Good": {
   "Name": "Target_UND_MyconidAmulet_Good",
   "SpellType": "Target",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(UND_MYCONIDAMULET_GOOD, 100, 10)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Ally() and not Dead()",
   "Icon": "Item_UNI_UND_MyconidAmulet_Good",
   "DisplayName": "Gustav_Target_UND_MyconidAmulet_Good_DisplayName",
   "Description": "Gustav_Target_UND_MyconidAmulet_Good_Description",
   "TooltipStatusApply": [
    "ApplyStatus(UND_MYCONIDAMULET_GOOD, 100, 10)"
   ],
   "CastSelfAnimation": "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast)",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_ProtectionFromPoison_L1to3",
   "VocalComponentSound": "Vocal_Component_ResistPoison",
   "TargetSound": "Spell_Impact_Buff_ProtectionFromPoison_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "HasSomaticComponent",
    "IsMelee"
   ],
   "PrepareEffect": "34e6f4e2-8685-44df-bd44-84046ee4ef94",
   "CastEffect": "7a6ebf04-7b16-417d-b984-898915d63e0e",
   "TargetEffect": "e03fc233-ab16-4dd2-b28a-d9665f7d92f6"
  },
  "Target_UND_MyconidAmulet_Evil": {
   "Name": "Target_UND_MyconidAmulet_Evil",
   "SpellType": "Target",
   "Cooldown": "OncePerRest",
   "SpellProperties": [
    "ApplyStatus(UND_MYCONIDAMULET_EVIL, 100, 10)"
   ],
   "TargetRadius": "1.5",
   "TargetConditions": "Ally() and not Dead()",
   "Icon": "Item_UNI_UND_MyconidAmulet_Evil",
   "DisplayName": "Gustav_Target_UND_MyconidAmulet_Evil_DisplayName",
   "Description": "Gustav_Target_UND_MyconidAmulet_Evil_Description",
   "TooltipStatusApply": [
    "ApplyStatus(UND_MYCONIDAMULET_EVIL, 100, 10)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Buff_BlessingOfTheTrickster_L1to3",
   "TargetSound": "Spell_Impact_Buff_BlessingOfTheTrickster_L1to3",
   "CycleConditions": "Ally() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90(SPL_Somatic_Beam_01_Cast),,",
    "141f48d9-9615-496a-8737-9240f0dba60d(SPL_Somatic_Beam_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Buff",
   "SpellFlags": [
    "IsMelee",
    "HasSomaticComponent"
   ],
   "PrepareEffect": "811d8e0f-6207-43f7-a34a-cc1929472c5f",
   "CastEffect": "3bf4d294-d68c-4314-a9a7-46070e3a4028",
   "TargetEffect": "de5e807c-fe79-4038-a269-de24c0d578a8"
  },
  "Target_UND_Nere_Coercion": {
   "Name": "Target_UND_Nere_Coercion",
   "SpellType": "Target",
   "SpellSchool": "Enchantment",
   "Cooldown": "OncePerTurn",
   "TargetRadius": 16,
   "DeathType": "Psychic",
   "SpellRoll": "not SavingThrow(Ability.Wisdom, 14)",
   "SpellSuccess": [
    "DealDamage(2d4,Psychic)",
    "ApplyStatus(UND_NERE_COERCION,100,4)"
   ],
   "SpellFail": [
    "DealDamage(2d4,Psychic)"
   ],
   "Icon": "unknown",
   "DisplayName": "Gustav_Target_UND_Nere_Coercion_DisplayName",
   "Description": "Gustav_Target_UND_Nere_Coercion_Description",
   "DescriptionParams": [
    "DealDamage(2d4,Psychic)",
    " DealDamage(1d6,Psychic)"
   ],
   "TooltipDamageList": [
    "DealDamage(2d4,Psychic)"
   ],
   "TooltipAttackSave": [
    "Wisdom"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(UND_NERE_COERCION,100,4)"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_CruelCoercion",
   "TargetSound": "CrSpell_Impact_CruelCoercion",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "ab7b6aac-b3c9-4918-8f17-f777a94dcb5e(SPL_Somatic_Target_01_Cast),,",
    "57211a11-ed0b-46d7-9369-81df25a85df6(SPL_Somatic_Target_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "HasVerbalComponent",
    "IsSpell",
    "IsEnemySpell",
    "CannotTargetItems",
    "CannotTargetTerrain",
    "IsHarmful"
   ],
   "RechargeValues": "4-6",
   "CastEffect": "bd2fc245-5645-452f-a2cd-d158b751bbe4",
   "TargetEffect": "a0aee53a-d702-4901-9bb3-7cf08e214346"
  },
  "Target_UND_MonkAmulet_Ability": {
   "Name": "Target_UND_MonkAmulet_Ability",
   "SpellType": "Target",
   "Parent": "Target_Shatter",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Teleportation_Resurrection": {
   "Name": "Teleportation_Resurrection",
   "SpellType": "Teleportation",
   "TargetRadius": 9,
   "AreaRadius": 9,
   "Height": 0,
   "Acceleration": 0,
   "TeleportSelf": "No",
   "TeleportSurface": "No",
   "Icon": "Skill_Air_Teleportation",
   "DisplayName": "Shared_Teleportation_Resurrection_DisplayName",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "414bbf02-2918-4f01-83fb-1ddc7a588d88(SPL_Arcane_Healing_01_Prepare),,",
    ",,",
    "7abe77ed-9c77-4eac-872c-5b8caed070b6(SPL_Somatic_Aoe_Rise_01_Cast),,",
    "cb171bda-f065-4520-b470-e447f678ba1f(SPL_Somatic_Aoe_Rise_01_Recover),,",
    ",,",
    ",,"
   ],
   "SpellFlags": [
    "IsSpell",
    "RangeIgnoreVerticalThreshold",
    "HasVerbalComponent",
    "HasSomaticComponent"
   ],
   "VerbalIntent": "Healing",
   "PrepareEffect": "1162f3ba-ed65-4cd0-9e1f-5882414c0097",
   "CastEffect": "ab2e7fd5-7785-41ba-84b0-5d0c0b115757",
   "DisappearEffect": "7d410cdd-7de8-49ae-b232-5ca6a04b5220"
  },
  "Teleportation_SINGLE": {
   "Name": "Teleportation_SINGLE",
   "SpellType": "Teleportation",
   "Parent": "Teleportation_Resurrection"
  },
  "Teleportation_Revivify": {
   "Name": "Teleportation_Revivify",
   "SpellType": "Teleportation",
   "Parent": "Teleportation_Resurrection",
   "Level": 3,
   "SpellSchool": "Necromancy",
   "DisplayName": "Shared_Teleportation_Revivify_DisplayName",
   "Description": "Shared_Teleportation_Revivify_Description",
   "CastSound": "Spell_Cast_Healing_Revivify_L1to3",
   "TargetSound": "Spell_Impact_Healing_Revivify_L1to3"
  },
  "Teleportation_Revivify_Scroll": {
   "Name": "Teleportation_Revivify_Scroll",
   "SpellType": "Teleportation",
   "Parent": "Teleportation_Revivify",
   "CastSound": "Spell_Cast_Healing_Revivify_L1to3",
   "TargetSound": "Spell_Impact_Healing_Revivify_L1to3"
  },
  "Teleportation_TrueResurrection_Scroll": {
   "Name": "Teleportation_TrueResurrection_Scroll",
   "SpellType": "Teleportation",
   "Parent": "Teleportation_Revivify_Scroll",
   "Level": 9,
   "DisplayName": "Shared_Teleportation_TrueResurrection_Scroll_DisplayName",
   "Description": "Shared_Teleportation_TrueResurrection_Scroll_Description"
  },
  "Teleportation_ITEMS": {
   "Name": "Teleportation_ITEMS",
   "SpellType": "Teleportation",
   "Parent": "Teleportation_Resurrection"
  },
  "Teleportation_HAG_HusbandResurrection": {
   "Name": "Teleportation_HAG_HusbandResurrection",
   "SpellType": "Teleportation",
   "Parent": "Teleportation_Resurrection",
   "SpellAnimation": [
    "9745d2e5-2519-411a-947f-7545e0095d85(SPL_Wand_01_Prepare),,",
    ",,",
    "82842aef-9961-4566-b854-113470749e4e(SPL_Wand_01_Cast),,",
    "2f4e48ee-3349-42ff-bcd2-6b32df5915ab(SPL_Wand_01_Recover),,",
    ",,",
    ",,"
   ],
   "PrepareEffect": "63de2f8e-d6f7-48be-9e69-e07517ed6217",
   "CastEffect": "efa7c4f8-2920-48d6-be69-563094a290ac",
   "DisappearEffect": "318e95be-3624-44a1-8ca9-b0ff93c38e7f"
  },
  "Throw_Throw": {
   "Name": "Throw_Throw",
   "SpellType": "Throw",
   "SpellProperties": [
    "GROUND:DealDamage(1d4,Bludgeoning)"
   ],
   "TargetFloor": "-1",
   "TargetRadius": "ThrownObjectRange",
   "AreaRadius": 1,
   "SpellRoll": "Attack(AttackType.RangedUnarmedAttack)",
   "TargetConditions": "not Self() and not (not Player(context.Source) and Item())",
   "Template": "a82d0147-9ecd-455a-a9ef-c6d2b8119777",
   "Icon": "Action_Throw",
   "DisplayName": "Shared_Throw_Throw_DisplayName",
   "Description": "Shared_Throw_Throw_Description",
   "ExtraDescription": "Shared_Throw_Throw_ExtraDescription",
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Throw",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4(CMBT_Skill_Throw_Far_01_Prepare),,",
    "f2803838-31cf-471b-85d1-92fa2d0eb7c2(CMBT_Skill_Throw_Far_01_Antic),,",
    "4be0751c-9fca-4c35-9337-6bf8a321c516(CMBT_Skill_Throw_Far_01_Attack),,",
    "86b52093-596c-4054-bb1d-2dbdfcdc4347(CMBT_Skill_Throw_Far_01_Recover),,",
    "e1726462-6f35-4551-af40-5247a314f38d(CMBT_Skill_Throw_Far_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Utility",
   "SpellFlags": [
    "DefaultThrow",
    "RangeIgnoreVerticalThreshold",
    "IsHarmful",
    "HasHighGroundRangeExtension",
    "IgnoreSilence",
    "IgnoreVisionBlock",
    "AddFallDamageOnLand"
   ],
   "SpellActionType": "Throw",
   "PrepareEffect": "ede0c318-7f5d-43b4-bc73-a50e0a528d55"
  },
  "Throw_Throw_MageHand": {
   "Name": "Throw_Throw_MageHand",
   "SpellType": "Throw",
   "Parent": "Throw_Throw"
  },
  "Throw_Throw_Ogre": {
   "Name": "Throw_Throw_Ogre",
   "SpellType": "Throw",
   "Parent": "Throw_Throw"
  },
  "Throw_Throw_Bugbear": {
   "Name": "Throw_Throw_Bugbear",
   "SpellType": "Throw",
   "Parent": "Throw_Throw"
  },
  "Throw_GOB_Ogre_Throw": {
   "Name": "Throw_GOB_Ogre_Throw",
   "SpellType": "Throw",
   "Parent": "Throw_Throw",
   "SpellProperties": [
    "GROUND:DealDamage(1d4,Bludgeoning)",
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
    "IgnoreSilence"
   ],
   "ThrowableTargetConditions": "Item()"
  },
  "Throw_GOB_Ogre_Throw_TargetA": {
   "Name": "Throw_GOB_Ogre_Throw_TargetA",
   "SpellType": "Throw",
   "Parent": "Throw_GOB_Ogre_Throw",
   "SpellProperties": [
    "GROUND:DealDamage(1d4,Bludgeoning)",
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_HELPER_BUFF,100,5)"
   ],
   "ThrowableTargetConditions": "Item()"
  },
  "Throw_GOB_Ogre_Throw_TargetB": {
   "Name": "Throw_GOB_Ogre_Throw_TargetB",
   "SpellType": "Throw",
   "Parent": "Throw_GOB_Ogre_Throw",
   "SpellProperties": [
    "GROUND:DealDamage(1d4,Bludgeoning)",
    "AI_ONLY:CAST:ApplyStatus(SELF,AI_HELPER_BUFF,100,4)",
    "AI_IGNORE:CAST:ApplyStatus(SELF,AI_HELPER_BLOCKRESOURCES,100,1)"
   ],
   "UseCosts": [
    "BonusActionPoint:1"
   ],
   "ThrowableTargetConditions": "Item()"
  },
  "Zone_Cleave": {
   "Name": "Zone_Cleave",
   "SpellType": "Zone",
   "Cooldown": "OncePerShortRest",
   "SpellProperties": [
    "GROUND:ExecuteWeaponFunctors(MainHand)"
   ],
   "SurfaceType": "Sentinel",
   "SurfaceLifetime": 0,
   "SurfaceGrowStep": 100,
   "SurfaceGrowInterval": 1,
   "SpellRoll": "Attack(AttackType.MeleeWeaponAttack)",
   "TargetConditions": "(Character() or Item()) and not Self() and not Dead() and not Ally()",
   "Icon": "Action_Cleave_New",
   "DisplayName": "Shared_Zone_Cleave_DisplayName",
   "Description": "Shared_Zone_Cleave_Description",
   "DescriptionParams": 3,
   "PreviewCursor": "Melee_Ground",
   "CastTextEvent": "Cast",
   "CastSound": "Action_Cast_Sweep",
   "Shape": "Cone",
   "FrontOffset": "-2",
   "Range": 2,
   "Angle": 60,
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "79e47203-3855-4837-8673-ddb708d86962(CMBT_Skill_Sweep_01_Prepare),,",
    "711781fb-5f5a-4b9a-bd8b-e0b4ff9dec46(CMBT_Skill_Sweep_01_Antic),,",
    "a17a7bf3-7381-4191-83f4-304d37c738e0(CMBT_Skill_Sweep_01_Attack),,",
    "1172e0b6-08d1-4f28-a651-a01681b84ee6(CMBT_Skill_Sweep_01_Recover),,",
    "863fabe7-d990-42a3-8961-7898c207bcb1(CMBT_Skill_Sweep_01_Loop),,",
    "0002afee-5ad9-4109-ae64-9b2571601226(CMBT_Skill_Sweep_01_Dash),,"
   ],
   "VerbalIntent": "Damage",
   "WeaponTypes": [
    "Melee"
   ],
   "SpellFlags": [
    "IsHarmful",
    "IsDefaultWeaponAction"
   ],
   "RechargeValues": 6,
   "MaximumTargets": 3,
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "9342eaf4-6a20-44c6-a740-863b0f9c2475",
   "CastEffect": "1d808499-eac9-408a-b5c8-219bb4f52bdc",
   "TargetEffect": "0444f9b9-f4a9-4c0e-8671-3bfc3e883447"
  },
  "Zone_WEAPON ATTACK": {
   "Name": "Zone_WEAPON ATTACK",
   "SpellType": "Zone",
   "Parent": "Zone_Cleave"
  },
  "Zone_AOE": {
   "Name": "Zone_AOE",
   "SpellType": "Zone",
   "Parent": "Zone_Cleave"
  },
  "Zone_BurningHands": {
   "Name": "Zone_BurningHands",
   "SpellType": "Zone",
   "Level": 1,
   "SpellSchool": "Evocation",
   "SpellProperties": [
    "GROUND:SurfaceChange(Ignite)",
    "GROUND:SurfaceChange(Vaporize)",
    "TARGET:IF(Item()):ApplyStatus(BURNING,100,2)"
   ],
   "SurfaceType": "Sentinel",
   "SurfaceLifetime": 0,
   "SurfaceGrowStep": 5,
   "SurfaceGrowInterval": 10,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, SourceSpellDC())",
   "Icon": "Spell_Evocation_BurningHands",
   "DisplayName": "Shared_Zone_BurningHands_DisplayName",
   "Description": "Shared_Zone_BurningHands_Description",
   "DescriptionParams": [
    "DealDamage(3d6,Fire)"
   ],
   "ExtraDescription": "Shared_Zone_BurningHands_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(3d6,Fire)"
   ],
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Fire_BurningHands_L1to3",
   "Shape": "Cone",
   "FrontOffset": "-2",
   "Range": 5,
   "Angle": 60,
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "d30d2b40-c45a-45bd-94d7-9b2baaf0f77b(SPL_Somatic_Beam_2HandCone_01_Cast),,",
    "a601b33c-5320-455d-b4d4-74d6dc35b757(SPL_Somatic_Beam_2HandCone_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasSomaticComponent",
    "HasVerbalComponent",
    "IsSpell",
    "IsHarmful"
   ],
   "HitAnimationType": "MagicalDamage_External",
   "MemoryCost": 1,
   "PowerLevel": 1,
   "PrepareEffect": "fab371de-227d-4fde-aad6-868ae34c36da",
   "CastEffect": "5438d3f5-6041-432d-9708-be99fac223ae"
  },
  "Zone_BurningHands_2": {
   "Name": "Zone_BurningHands_2",
   "SpellType": "Zone",
   "Parent": "Zone_BurningHands",
   "Icon": "Spell_Evocation_BurningHands_2",
   "DescriptionParams": [
    "DealDamage(4d6,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(4d6,Fire)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:2"
   ],
   "RootSpellID": "Zone_BurningHands",
   "PowerLevel": 2
  },
  "Zone_BurningHands_3": {
   "Name": "Zone_BurningHands_3",
   "SpellType": "Zone",
   "Parent": "Zone_BurningHands",
   "DescriptionParams": [
    "DealDamage(5d6,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(5d6,Fire)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlotsGroup:1:1:3"
   ],
   "RootSpellID": "Zone_BurningHands",
   "PowerLevel": 3
  },
  "Zone_BurningHands_LightCleric": {
   "Name": "Zone_BurningHands_LightCleric",
   "SpellType": "Zone",
   "Parent": "Zone_BurningHands",
   "DescriptionParams": [
    "DealDamage(3d6,Fire)"
   ],
   "ExtraDescription": "Shared_Zone_BurningHands_LightCleric_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(3d6,Fire)"
   ]
  },
  "Zone_BurningHands_LightCleric_2": {
   "Name": "Zone_BurningHands_LightCleric_2",
   "SpellType": "Zone",
   "Parent": "Zone_BurningHands_LightCleric",
   "DescriptionParams": [
    "DealDamage(4d6,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(4d6,Fire)"
   ],
   "RootSpellID": "Zone_BurningHands_LightCleric",
   "PowerLevel": 2
  },
  "Zone_BurningHands_LightCleric_3": {
   "Name": "Zone_BurningHands_LightCleric_3",
   "SpellType": "Zone",
   "Parent": "Zone_BurningHands_LightCleric",
   "DescriptionParams": [
    "DealDamage(5d6,Fire)"
   ],
   "TooltipDamageList": [
    "DealDamage(5d6,Fire)"
   ],
   "RootSpellID": "Zone_BurningHands_LightCleric",
   "PowerLevel": 3
  },
  "Zone_BurningHands_MephistophelesTiefling": {
   "Name": "Zone_BurningHands_MephistophelesTiefling",
   "SpellType": "Zone",
   "Parent": "Zone_BurningHands_2",
   "Level": 2,
   "Cooldown": "OncePerRest",
   "DisplayName": "Shared_Zone_BurningHands_MephistophelesTiefling_DisplayName",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Zone_ColorSpray": {
   "Name": "Zone_ColorSpray",
   "SpellType": "Zone",
   "Level": 1,
   "SpellSchool": "Illusion",
   "SpellProperties": [
    "ApplyStatus(COLOR_SPRAY,100,1)"
   ],
   "SurfaceType": "Sentinel",
   "SurfaceLifetime": 0,
   "SurfaceGrowStep": 5,
   "SurfaceGrowInterval": 10,
   "TargetConditions": "Character()",
   "Icon": "Spell_Illusion_ColorSpray",
   "DisplayName": "Shared_Zone_ColorSpray_DisplayName",
   "Description": "Shared_Zone_ColorSpray_Description",
   "DescriptionParams": [
    "RegainHitPoints(33)"
   ],
   "TooltipStatusApply": [
    "ApplyStatus(COLOR_SPRAY,100,1)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Debuff_ColorSpray_L1to3",
   "VocalComponentSound": "Vocal_Component_Blind",
   "Shape": "Cone",
   "FrontOffset": "-2",
   "Range": 5,
   "Angle": 60,
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "554a18f7-952e-494a-b301-7702a85d4bc9(SPL_Arcane_Control_01_Prepare),,",
    ",,",
    "5e7e63e1-0e69-46e7-ade7-fe3dadcc9184(SPL_Somatic_Cone_01_Cast),,",
    "e9ad50df-e7f1-43a0-b782-4c08f92b0f5a(SPL_Somatic_Cone_01_Recover),,",
    "22dfbbf4-f417-4c84-b39e-2039315961e6(SPL_Arcane_Control_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Control",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "IsHarmful"
   ],
   "RechargeValues": "5-6",
   "MaximumTotalTargetHP": 33,
   "MemoryCost": 1,
   "PrepareEffect": "2fa6b127-6f8a-4150-8be6-6f62b7a85911",
   "CastEffect": "bdb57e34-f30a-4369-b337-77f93933cf71"
  },
  "Zone_ColorSpray_2": {
   "Name": "Zone_ColorSpray_2",
   "SpellType": "Zone",
   "Parent": "Zone_ColorSpray",
   "Icon": "Spell_Illusion_ColorSpray_2",
   "DescriptionParams": [
    "RegainHitPoints(44)"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "MaximumTotalTargetHP": 44,
   "RootSpellID": "Zone_ColorSpray",
   "PowerLevel": 2
  },
  "Zone_Thunderwave": {
   "Name": "Zone_Thunderwave",
   "SpellType": "Zone",
   "Level": 1,
   "SpellSchool": "Evocation",
   "SurfaceType": "Sentinel",
   "SurfaceLifetime": 0,
   "SurfaceGrowStep": 50,
   "SurfaceGrowInterval": 1,
   "SpellRoll": "not SavingThrow(Ability.Constitution, SourceSpellDC())",
   "SpellSuccess": [
    "DealDamage(2d8,Thunder)",
    "Force(8, OriginToTarget)"
   ],
   "Icon": "Spell_Evocation_Thunderwave",
   "DisplayName": "Shared_Zone_Thunderwave_DisplayName",
   "Description": "Shared_Zone_Thunderwave_Description",
   "DescriptionParams": [
    "DealDamage(2d8,Thunder)"
   ],
   "ExtraDescription": "Shared_Zone_Thunderwave_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d8,Thunder)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Thunder_Thunderwave_L1to3_01",
   "Shape": "Square",
   "Range": 5,
   "Base": 5,
   "CycleConditions": "Enemy() and not Dead()",
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:1"
   ],
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "5e7e63e1-0e69-46e7-ade7-fe3dadcc9184(SPL_Somatic_Cone_01_Cast),,",
    "e9ad50df-e7f1-43a0-b782-4c08f92b0f5a(SPL_Somatic_Cone_01_Recover),,",
    "d8925ce4-d6d9-400c-92f5-ad772ef7f178(SPL_Arcane_Damage_01_Loop),,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "HasVerbalComponent",
    "HasSomaticComponent",
    "IsSpell",
    "AddFallDamageOnLand",
    "IsHarmful"
   ],
   "MemoryCost": 1,
   "PrepareEffect": "c2891dba-7f94-4b19-b5c5-1d9c4743ea62",
   "CastEffect": "9c6f07ae-dd92-4e02-aa30-730644cd0d1d"
  },
  "Zone_Thunderwave_2": {
   "Name": "Zone_Thunderwave_2",
   "SpellType": "Zone",
   "Parent": "Zone_Thunderwave",
   "SpellSuccess": [
    "DealDamage(3d8,Thunder)",
    "Force(8, OriginToTarget)"
   ],
   "Icon": "Spell_Evocation_Thunderwave_2",
   "DescriptionParams": [
    "DealDamage(3d8,Thunder)"
   ],
   "TooltipDamageList": [
    "DealDamage(3d8,Thunder)"
   ],
   "TooltipAttackSave": [
    "Constitution"
   ],
   "UseCosts": [
    "ActionPoint:1",
    "SpellSlot:1:1:2"
   ],
   "RootSpellID": "Zone_Thunderwave",
   "PowerLevel": 2
  },
  "Zone_MONSTERS": {
   "Name": "Zone_MONSTERS",
   "SpellType": "Zone",
   "Parent": "Zone_Cleave"
  },
  "Zone_Mephit_MudBreath": {
   "Name": "Zone_Mephit_MudBreath",
   "SpellType": "Zone",
   "Parent": "Zone_ColorSpray",
   "Cooldown": "OncePerTurn",
   "DeathType": "Physical",
   "SurfaceType": "Mud",
   "SurfaceLifetime": 60,
   "SurfaceGrowStep": 5,
   "SurfaceGrowInterval": 10,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 11,AdvantageOnRestrained(),DisadvantageOnRestrained())",
   "SpellSuccess": [
    "ApplyStatus(MEPHIT_MUD_RESTRAINED,100,2)"
   ],
   "TargetConditions": "Character() and not Ally()",
   "Icon": "unknown",
   "DisplayName": "Shared_Zone_Mephit_MudBreath_DisplayName",
   "Description": "Shared_Zone_Mephit_MudBreath_Description",
   "ExtraDescription": "Shared_Zone_Mephit_MudBreath_ExtraDescription",
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "CastSound": "CrSpell_Cast_MudMephitMudBreath",
   "TargetSound": "CrSpell_Impact_MudMephitMudBreath",
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellFlags": [
    "IsEnemySpell",
    "IsHarmful"
   ],
   "RechargeValues": "4-6",
   "SpellAnimationIntentType": "Aggressive",
   "PrepareEffect": "b9a238f2-9143-49c9-84c8-8459fe8ee99e",
   "CastEffect": "7c620761-fc92-4f91-b39b-3df4a72309c6"
  },
  "Zone_Mephit_FireBreath": {
   "Name": "Zone_Mephit_FireBreath",
   "SpellType": "Zone",
   "Parent": "Zone_Mephit_MudBreath",
   "Cooldown": "OncePerTurn",
   "DeathType": "Incinerate",
   "SurfaceType": "Fire",
   "SurfaceLifetime": 3,
   "SpellRoll": "not SavingThrow(Ability.Dexterity, 11)",
   "SpellSuccess": [
    "DealDamage(2d6,Fire)"
   ],
   "Icon": "unknown",
   "DisplayName": "Shared_Zone_Mephit_FireBreath_DisplayName",
   "Description": "Shared_Zone_Mephit_FireBreath_Description",
   "DescriptionParams": [
    "DealDamage(2d6,Fire)"
   ],
   "ExtraDescription": "Shared_Zone_Mephit_FireBreath_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(2d6,Fire)"
   ],
   "TooltipAttackSave": [
    "Dexterity"
   ],
   "CastSound": "CrSpell_Cast_MagmaMephitFireBreath",
   "TargetSound": "CrSpell_Impact_MagmaMephitFireBreath",
   "FrontOffset": 0,
   "RechargeValues": 6,
   "CastEffect": "b614cdf5-095d-420d-9aba-0cd1eb9779d5"
  },
  "Zone_MindBlast_MindFlayer": {
   "Name": "Zone_MindBlast_MindFlayer",
   "SpellType": "Zone",
   "SurfaceType": "Sentinel",
   "SurfaceLifetime": 0,
   "SurfaceGrowStep": 50,
   "SurfaceGrowInterval": 1,
   "SpellRoll": "not SavingThrow(Ability.Intelligence, 15)",
   "Icon": "unknown",
   "DisplayName": "Shared_Zone_MindBlast_MindFlayer_DisplayName",
   "Description": "Shared_Zone_MindBlast_MindFlayer_Description",
   "ExtraDescription": "Shared_Zone_MindBlast_MindFlayer_ExtraDescription",
   "TooltipAttackSave": [
    "Intelligence"
   ],
   "CastTextEvent": "Cast",
   "CastSound": "CrSpell_Cast_MindBlast",
   "Shape": "Cone",
   "FrontOffset": "-2",
   "Range": 18,
   "Angle": 60,
   "UseCosts": [
    "ActionPoint:1"
   ],
   "SpellAnimation": [
    "76253a35-15e0-4424-8a47-787002f8aa2f(CMBT_Skill_MindBlast_01_Prepare),,",
    "52891546-f9c1-4ade-b390-6882682c7c44(CMBT_Skill_MindBlast_01_Antic),,",
    "92fd64ad-6b10-46ba-a2a9-82633129f806(CMBT_Skill_MindBlast_01_Attack),,",
    "c554e614-bf70-4198-8ebf-1a32d25c658e(CMBT_Skill_MindBlast_01_Recover),,",
    "2c90ef8d-f050-492f-8a1e-1eeaaeaa91ac(CMBT_Skill_MindBlast_01_Loop),,",
    "58c33026-840a-414e-9597-4e52d329488c(CMBT_Skill_MindBlast_01_Dash),,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "IsEnemySpell",
    "IsHarmful",
    "HasSomaticComponent"
   ],
   "RechargeValues": 6,
   "SpellAnimationIntentType": "Aggressive",
   "CastEffect": "036c62a1-36dc-41d8-bc58-14f6ddf8bfb6",
   "TargetEffect": "a9cafd50-d3a0-4c55-9cc6-2c088c17df5f"
  },
  "Zone_DEN_Prodigy_Thunderwave": {
   "Name": "Zone_DEN_Prodigy_Thunderwave",
   "SpellType": "Zone",
   "Parent": "Zone_Thunderwave"
  },
  "Zone_DEN_ColorSpray_HarpyMeal_NestRing": {
   "Name": "Zone_DEN_ColorSpray_HarpyMeal_NestRing",
   "SpellType": "Zone",
   "Parent": "Zone_ColorSpray",
   "Cooldown": "OncePerCombat",
   "UseCosts": [
    "ActionPoint:1"
   ]
  },
  "Zone_PLA_Chokepoint_DragonBreath": {
   "Name": "Zone_PLA_Chokepoint_DragonBreath",
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
   "Name": "Zone_UNI_SuperheavyWeapon_Spell",
   "SpellType": "Zone",
   "Parent": "Zone_Cleave",
   "SpellProperties": [
    "GROUND:ExecuteWeaponFunctors(MainHand)",
    "DealDamage(1d6,Slashing)",
    "ApplyStatus(SELF,GOB_LOSTBALANCE,100,1)"
   ],
   "DisplayName": "Gustav_Zone_UNI_SuperheavyWeapon_Spell_DisplayName",
   "Description": "Gustav_Zone_UNI_SuperheavyWeapon_Spell_Description",
   "ExtraDescription": "Gustav_Zone_UNI_SuperheavyWeapon_Spell_ExtraDescription",
   "Angle": 75
  },
  "Zone_CHA_ShellKid_Cup_Spell": {
   "Name": "Zone_CHA_ShellKid_Cup_Spell",
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
   "DisplayName": "Gustav_Zone_CHA_ShellKid_Cup_Spell_DisplayName",
   "Description": "Gustav_Zone_CHA_ShellKid_Cup_Spell_Description",
   "CastSound": "CrSpell_Cast_ShellKidCup",
   "PrepareEffect": "d93c909e-63da-4c33-89e7-5c1473fc983a",
   "CastEffect": "288667de-4bf0-4db2-b47f-2f47ff0606ce"
  },
  "Zone_PLA_StuckHalfElf_Backdraft": {
   "Name": "Zone_PLA_StuckHalfElf_Backdraft",
   "SpellType": "Zone",
   "SurfaceGrowStep": 15,
   "SurfaceGrowInterval": 1,
   "SpellRoll": "not SavingThrow(Ability.Strength, 18)",
   "SpellSuccess": [
    "DealDamage(1d6,Thunder)",
    "DealDamage(2d6,Fire)",
    "Force(12, OriginToTarget)"
   ],
   "Icon": "Spell_Evocation_Thunderwave",
   "DisplayName": "Gustav_Zone_PLA_StuckHalfElf_Backdraft_DisplayName",
   "Description": "Gustav_Zone_PLA_StuckHalfElf_Backdraft_Description",
   "DescriptionParams": [
    "DealDamage(1d6,Thunder)",
    "DealDamage(2d6,Fire)"
   ],
   "ExtraDescription": "Gustav_Zone_PLA_StuckHalfElf_Backdraft_ExtraDescription",
   "TooltipDamageList": [
    "DealDamage(1d6,Thunder)",
    "DealDamage(2d6,Fire)"
   ],
   "PreviewCursor": "Cast",
   "CastTextEvent": "Cast",
   "CastSound": "Spell_Cast_Damage_Thunder_Thunderwave_L1to3_01",
   "Shape": "Cone",
   "FrontOffset": "-2",
   "Range": 6,
   "Base": 3,
   "Angle": 60,
   "SpellAnimation": [
    "3ff87abf-1ea1-4c32-aadf-c822d74c7dc0(SPL_Arcane_Damage_01_Prepare),,",
    ",,",
    "5e7e63e1-0e69-46e7-ade7-fe3dadcc9184(SPL_Somatic_Cone_01_Cast),,",
    "e9ad50df-e7f1-43a0-b782-4c08f92b0f5a(SPL_Somatic_Cone_01_Recover),,",
    ",,",
    ",,"
   ],
   "VerbalIntent": "Damage",
   "SpellFlags": [
    "AddFallDamageOnLand",
    "IsHarmful",
    "IsTrap"
   ],
   "PrepareEffect": "ac69ec31-50ee-4bc4-82bd-ed9471f953c6",
   "CastEffect": "c1f7295b-9003-4db4-822f-b81d4c988861"
  },
  "Zone_GOB_Priestess_Thunderwave": {
   "Name": "Zone_GOB_Priestess_Thunderwave",
   "SpellType": "Zone",
   "Parent": "Zone_Thunderwave",
   "RechargeValues": "3-6",
   "MemoryCost": 0
  },
  "Zone_TUT_MindBlast_MindFlayer": {
   "Name": "Zone_TUT_MindBlast_MindFlayer",
   "SpellType": "Zone",
   "Parent": "Zone_MindBlast_MindFlayer",
   "RechargeValues": 6
  },
  "Zone_UND_KethericCity_Trap_FireWave": {
   "Name": "Zone_UND_KethericCity_Trap_FireWave",
   "SpellType": "Zone",
   "SpellProperties": [
    "DealDamage(3d4,Fire)"
   ],
   "SurfaceType": "Sentinel",
   "SurfaceLifetime": 0,
   "SurfaceGrowStep": 50,
   "SurfaceGrowInterval": 1,
   "SpellRoll": "not SavingThrow(Ability.Strength, 10)",
   "SpellSuccess": [
    "Force(5, OriginToTarget)",
    "ApplyStatus(PRONE, 100, 1)"
   ],
   "DisplayName": "Gustav_Zone_UND_KethericCity_Trap_FireWave_DisplayName",
   "Range": 22,
   "Base": 3,
   "Angle": 15,
   "SpellFlags": [
    "IsTrap",
    "IsHarmful"
   ]
  },
  "Zone_UND_KC_RingOfAbsolute_Thunderwave": {
   "Name": "Zone_UND_KC_RingOfAbsolute_Thunderwave",
   "SpellType": "Zone",
   "Parent": "Zone_Thunderwave",
   "Cooldown": "OncePerShortRest",
   "UseCosts": [
    "ActionPoint:1"
   ]
  }
 },
 "types": {
  "Projectile": 1,
  "ProjectileStrike": 1,
  "Rush": 1,
  "Shout": 1,
  "Target": 1,
  "Teleportation": 1,
  "Throw": 1,
  "Zone": 1
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
    