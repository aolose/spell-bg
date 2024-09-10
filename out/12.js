loadSpell([{"Name":"Target_LOW_VampireBite","SpellType":"Target","Using":"Target_VampireBite_Astarion","TooltipStatusApply":["<b>ApplyStatus(LOW_VAMPIRE_BITE_HAPPY, 100, -1)</b>","<b>ApplyStatus(LOW_VAMPIRE_BITE_WEAK,100,-1)</b>"]},{"Name":"Target_LOW_DarkUrge_PowerWordKill","SpellType":"Target","Using":"Target_PowerWordKill","DisplayName":"Power Word Kill","Description":"Compel an enemy with [1] <LSTag Tooltip=\"HitPoints\"<hit points</LSTag< or fewer to die instantly. Limited to one use only."},{"Name":"Target_MAG_BeckoningDarkness","SpellType":"Target","Using":"Target_SHA_Justiciar_BeckoningDarkness","TargetConditions":["<b>Character() and Enemy() and not HasObscuredState(ObscuredState.Clear)</b>"],"Icon":"PassiveFeature_Generic_Darkness","SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","2f893fad-98eb-47cf-a524-dd4efd42bc2a,,","ca3147a8-2cf6-45a8-ac9a-1ce0fc11305f,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["IsHarmful","IsSpell"],"PrepareEffect":"a0458d31-f8ef-419a-8708-5715c81e91d3"},{"Name":"Target_MAG_HungerOfHadar","SpellType":"Target","Using":"Target_HungerOfHadar","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsConcentration","IsSpell","CannotTargetItems"]},{"Name":"Target_MAG_WhipOfShar","SpellType":"Target","Using":"Target_PsionicPull","SpellSchool":"Necromancy","SpellRoll":["<b>Attack(AttackType.MeleeSpellAttack)</b>"],"SpellSuccess":["TARGET:<b>IF(TargetSizeEqualOrSmaller(Size.Large))</b>:<b>Force(-5, OriginToEntity, Neutral, false, true)</b>"," <b>DealDamage(LevelMapValue(D6Cantrip),Piercing,Magical)</b>"],"TargetConditions":["not <b>Self() and not Grounded() and (Item() or Character() or Dead())</b>"],"DisplayName":"Whip of Shar","Description":"Strike at a creature with a shadow whip and pull it [1] closer to you.","DescriptionParams":["<b>Distance(5)</b>"],"UseCosts":["BonusActionPoint:1"],"PrepareEffect":"4c9f1d91-fcd1-40eb-b704-121d112f7e3b","CastEffect":"456933cc-f8c3-42d9-ae4c-622d83391cc6","TargetEffect":"aafee3d2-0f5b-42b7-a91c-1397fb58dd25"},{"Name":"Target_MAG_MenacingAttack","SpellType":"Target","Using":"Target_MenacingAttack","Cooldown":"OncePerTurn","SpellSuccess":["<b>IF(not SavingThrow(Ability.Wisdom, ManeuverSaveDC(),AdvantageOnFrightened(), DisadvantageOnFrightened()))</b>:<b>ApplyStatus(FRIGHTENED,100,2)</b>","<b>DealDamage(MainMeleeWeapon + ProficiencyBonus, MainMeleeWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>"],"TooltipDamageList":["<b>DealDamage(MainMeleeWeapon + ProficiencyBonus, MainMeleeWeaponDamageType)</b>"]},{"Name":"Target_MAG_HuntersMark_Grymskull","SpellType":"Target","Using":"Target_HuntersMark","Cooldown":"OncePerRestPerItem","UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_TrueStrike_Grymskull","SpellType":"Target","Using":"Target_TrueStrike","Cooldown":"OncePerShortRest","UseCosts":["BonusActionPoint:1"]},{"Name":"Target_ORI_Gale_ShadowSummon","SpellType":"Target","Using":"Target_CreateUndead","Cooldown":"OncePerRestPerItem","SpellProperties":["<b>SwitchDeathType(Explode)</b>","GROUND:<b>Summon(122ce989-2603-4bf4-a3ee-8b2513c39d5e, -1,,,'ShadowSummonStack',MAG_SHADOW_SUMMON,UNSUMMON_ABLE)</b>"],"TargetConditions":["<b>CanStand('122ce989-2603-4bf4-a3ee-8b2513c39d5e')</b>"],"Icon":"Spell_Gale_ShadowSummon","DisplayName":"Conjure Shadow Lantern Wraith","Description":"Pull an undead creature from the depths of the Shadow Lantern's depraved magic to join your side in combat.","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent"]},{"Name":"Target_MAG_ThornWhip_Sorrow","SpellType":"Target","Using":"Target_ThornWhip","Cooldown":"OncePerTurn","SpellSuccess":["TARGET:<b>IF(TargetSizeEqualOrSmaller(Size.Large))</b>:<b>Force(-3, OriginToEntity, Neutral, false, true)</b>"," <b>DealDamage(1d4+max(1,SpellCastingAbilityModifier), Piercing,Magical)</b>"],"DisplayName":"Sorrowful Lash","TooltipDamageList":["<b>DealDamage(1d4+max(1,SpellCastingAbilityModifier), Piercing)</b>"],"UseCosts":["BonusActionPoint:1"],"SpellFlags":["IsSpell","HasVerbalComponent","HasSomaticComponent","AddFallDamageOnLand","Temporary"]},{"Name":"Target_SHA_Apprentice_DaggerOfShar_Spell","SpellType":"Target","Using":"Target_DEN_Apprentice_DaggerOfShar_Spell"},{"Name":"Target_ORI_Wyll_SummonCambion","SpellType":"Target","Using":"Target_PlanarAlly_Cambion","Cooldown":"OncePerRestPerItem","SpellProperties":["Ground:<b>Summon(6708ae4b-8dcf-4812-bdba-fd5fe1c343f6, -1,Projectile_AiHelper_Summon_Strong,,'PlanarAllyStack',MAG_CAMBION_SUMMON,SHADOWCURSE_SUMMON_CHECK,KNOCKED_OUT_SUMMON_DISMISS,UNSUMMON_ABLE)</b>"],"UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_OrphicHammer_ChainBreaker","SpellType":"Target","Using":"Target_DispelMagic","TargetRadius":"MeleeMainWeaponRange","SpellRoll":["<b>Attack(AttackType.MeleeWeaponAttack)</b>"],"SpellSuccess":["<b>RemoveStatus(SG_Paralyzed)</b>","<b>RemoveStatus(SG_Restrained)</b>","<b>RemoveStatus(SG_Paralyzed)</b>","<b>RemoveStatus(SG_Stunned)</b>"],"DisplayName":"Unshackling Strike","Description":"Smite the magical bonds keeping a creature <LSTag Type=\"Status\" Tooltip=\"RESTRAINED\"<Restrained</LSTag<, <LSTag Type=\"Status\" Tooltip=\"PARALYZED\"<Paralysed</LSTag<, and <LSTag Type=\"Status\" Tooltip=\"STUNNED\"<Stunned</LSTag<, freeing it.","PreviewCursor":"Melee","UseCosts":["ActionPoint:1"],"SpellAnimation":["5dbfc67e-a1f4-4a91-b398-4df1ad989c49,,","6f957f78-322e-465f-b314-27299a98add7,,","63c0501c-14aa-467c-8980-45ed023ab15d,,","e6af1757-da0b-4640-8ce5-ea559816d2b0,,","08e862c4-75d3-489d-bdb2-b2f95031373e,,","3ed0eebd-86d0-4902-bcea-e0b039e9ad1f,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"DualWieldingSpellAnimation":["b6a6bde4-f4f3-4f10-bd8b-e642a8da4aa9,,","550c6598-8929-4071-aced-c12f5c9ad8aa,,","da4fb3e1-c9e0-4d16-ba92-aca8def437b3,,","be687d06-cb06-4fca-b977-bd2746cacc91,,","12773179-f31c-4c27-a8d5-0649df16995d,,","7bd69a21-e7f9-4c8b-aaf3-64ad999293b4,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"WeaponTypes":"Melee","SpellFlags":["HasVerbalComponent","HasSomaticComponent"],"Sheathing":"Melee"},{"Name":"Target_MAG_Tyrant_Command_Container","SpellType":"Target","Using":"Target_Command_Container_3","Level":3,"ContainerSpells":["Target_MAG_Tyrant_Command_Halt","Target_MAG_Tyrant_Command_Approach","Target_MAG_Tyrant_Command_Drop","Target_MAG_Tyrant_Command_Flee","Target_MAG_Tyrant_Command_Grovel"],"Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Tyrant_Command_Halt","SpellType":"Target","Using":"Target_Command_Halt_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Tyrant_Command_Approach","SpellType":"Target","Using":"Target_Command_Approach_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Tyrant_Command_Drop","SpellType":"Target","Using":"Target_Command_Drop_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Tyrant_Command_Flee","SpellType":"Target","Using":"Target_Command_Flee_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Tyrant_Command_Grovel","SpellType":"Target","Using":"Target_Command_Grovel_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Bhaalist_Hold_Person","SpellType":"Target","Using":"Target_HoldPerson_3","Level":3,"Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_LOW_MinscHideout_MinscAttacksWall","SpellType":"Target","Using":"Target_UnarmedAttack","SpellProperties":["<b>DealDamage(10, Bludgeoning, Nonmagical)</b>"],"SpellFlags":["IsAttack","IsMelee","IsHarmful","DisableBlood"],"Sheathing":"Sheathed"},{"Name":"Target_MAG_Spectator_ParalyzingRay","SpellType":"Target","Using":"Target_UND_Spectator_Ray_Paralyzing","Level":3,"SpellSchool":"Necromancy","Cooldown":"OncePerRestPerItem","SpellSuccess":["<b>ApplyStatus(PARALYZED_SPECTATOR,100, 2)</b>"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL, 100, 0)</b>"],"Icon":"GenericIcon_Intent_Damage","DisplayName":"Paralyzing Ray","Description":"<LSTag Type=\"Status\" Tooltip=\"PARALYZED_SPECTATOR\"<Paralyzes</LSTag< its target.","TooltipAttackSave":["Constitution"],"TooltipStatusApply":["<b>ApplyStatus(PARALYZED_SPECTATOR,100, 2)</b>"],"UseCosts":["ActionPoint:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90,,","141f48d9-9615-496a-8737-9240f0dba60d,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["IsSpell","HasHighGroundRangeExtension","HasVerbalComponent","HasSomaticComponent","RangeIgnoreVerticalThreshold","IsHarmful"],"PrepareEffect":"d7ff6074-0dee-46eb-84c2-fed6118b0cc3"},{"Name":"Target_MAG_Spectator_FearRay","SpellType":"Target","Using":"Target_UND_Spectator_Ray_Fear","Level":3,"SpellSchool":"Necromancy","Cooldown":"OncePerRestPerItem","SpellSuccess":["<b>ApplyStatus(FRIGHTENED,100, 2)</b>"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL, 100, 0)</b>"],"Icon":"GenericIcon_Intent_Control","DisplayName":"Ray of Fear","Description":"<LSTag Type=\"Status\" Tooltip=\"FRIGHTENED\"<Frightens</LSTag< your target.","TooltipAttackSave":["Wisdom"],"TooltipStatusApply":["<b>ApplyStatus(FRIGHTENED,100, 2)</b>"],"UseCosts":["ActionPoint:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90,,","141f48d9-9615-496a-8737-9240f0dba60d,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["IsSpell","HasHighGroundRangeExtension","HasVerbalComponent","HasSomaticComponent","RangeIgnoreVerticalThreshold","IsHarmful"],"PrepareEffect":"d7ff6074-0dee-46eb-84c2-fed6118b0cc3"},{"Name":"Target_MAG_Spectator_WoundingRay","SpellType":"Target","Using":"Target_UND_Spectator_Ray_Wounding","Level":3,"SpellSchool":"Necromancy","Cooldown":"OncePerRestPerItem","SpellSuccess":["<b>DealDamage(2d8,Necrotic,Magical)</b>"],"SpellFail":["<b>DealDamage((2d8)</b>/2,Necrotic,Magical)"],"Icon":"GenericIcon_DamageType_Necrotic","DisplayName":"Wounding Ray","Description":"Deals [1].","DescriptionParams":["<b>DealDamage(2d8,Necrotic)</b>"],"ExtraDescriptionParams":["<b>DealDamage(2d8,Necrotic)</b>"],"TooltipDamageList":["<b>DealDamage(2d8,Necrotic)</b>"],"TooltipAttackSave":["Constitution"],"UseCosts":["ActionPoint:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90,,","141f48d9-9615-496a-8737-9240f0dba60d,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["IsSpell","HasHighGroundRangeExtension","HasVerbalComponent","HasSomaticComponent","RangeIgnoreVerticalThreshold","IsHarmful"],"PrepareEffect":"d7ff6074-0dee-46eb-84c2-fed6118b0cc3"},{"Name":"Target_MAG_EnsnaringStrike_Shield","SpellType":"Target","Using":"Target_EnsnaringStrike","Cooldown":"OncePerShortRestPerItem","AIFlags":["CanNotUse"],"SpellRoll":["not <b>SavingThrow(Ability.Strength, SourceSpellDC(),AdvantageOnRestrained(),DisadvantageOnRestrained())</b>"],"SpellSuccess":["<b>ApplyStatus(ENSNARING_STRIKE,100, 3)</b>","<b>DealDamage(1d4, Bludgeoning,Magical)</b>"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL, 100, 0)</b>"],"DisplayName":"Woad's Ensnaring Strike","TooltipDamageList":["<b>DealDamage(1d4, Bludgeoning)</b>"],"TooltipStatusApply":["<b>ApplyStatus(ENSNARING_STRIKE,100, 3)</b>"],"CastTextEvent":"CastOffhand","UseCosts":["BonusActionPoint:1"],"SpellAnimation":["8b8bb757-21ce-4e02-a2f3-97d55cf2f90b,,","c1df9aea-8be9-4de3-bcbc-4e4c1e44dc37,,","722df2d7-7898-4b0b-b930-5a850b55ccf0,,","a693a7c3-e7e7-4edb-98dd-db5fd700663f,,","7bb52cd4-0b1c-4926-9165-fa92b75876a3,,","35f5cba8-3706-46d5-9a1e-2def9ba22473,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"SpellFlags":["HasVerbalComponent","IsSpell","IsMelee","IsHarmful"]},{"Name":"Target_MAG_Druid_Armor_PlantGrowth","SpellType":"Target","Using":"Target_PlantGrowth","Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Druid_HallucinationSpores","SpellType":"Target","Using":"Target_HallucinationSpores","PrepareSound":"Action_Prepare_Druid_SpreadingSpores","PrepareLoopSound":"Action_Loop_Druid_SpreadingSpores","SpellAnimation":["cc6063ad-e800-4e2d-baee-6620dae744ca,,","fb6ce5ad-6b56-4695-89c3-9133a44a763d,,","0cdd6ae5-cf8a-4fc6-8ff5-2cdbd5176046,,","a0a15c9e-0cbc-4086-90ff-a932c3027a98,,","c7afcdc2-f42d-4aa7-b400-9794ba1ec84b,,"],"SpellAnimationIntentType":"Peaceful","PrepareEffect":"44b75daa-f458-4c93-aa4f-7d277e356414","Sheathing":"Sheathed"},{"Name":"Target_MAG_Druid_PacifyingSpores","SpellType":"Target","Using":"Target_PacifyingSpores","PrepareSound":"Action_Prepare_Druid_SpreadingSpores","PrepareLoopSound":"Action_Loop_Druid_SpreadingSpores","SpellAnimation":["cc6063ad-e800-4e2d-baee-6620dae744ca,,","59a9ac6e-ece1-4ab7-8c2a-3fbf8961e554,,","446677f9-b1f1-4cad-9f25-e1779bb9be39,,","a0a15c9e-0cbc-4086-90ff-a932c3027a98,,","c7afcdc2-f42d-4aa7-b400-9794ba1ec84b,,"],"SpellAnimationIntentType":"Peaceful","PrepareEffect":"3947edf4-a565-4d82-a4e1-43b64f1c9ef4","Sheathing":"Sheathed"},{"Name":"Target_MAG_Djinni_MageHand","SpellType":"Target","Using":"Target_MageHand","Cooldown":"OncePerShortRestPerItem","SpellProperties":["GROUND:<b>IF(not HasPassive('MageHandLegerdemain', context.Source))</b>:<b>Summon(eddf2b83-21d3-4d6f-b958-c30f00dbbb92, 10,,,,UNSUMMON_ABLE_MAGEHAND,MAG_DJINNI_MAGE_HAND,SHADOWCURSE_SUMMON_CHECK)</b>","GROUND:<b>IF(HasPassive('MageHandLegerdemain', context.Source))</b>:<b>Summon(eddf2b83-21d3-4d6f-b958-c30f00dbbb92, 10,,,,INVISIBLE,UNSUMMON_ABLE_MAGEHAND,MAG_DJINNI_MAGE_HAND,SHADOWCURSE_SUMMON_CHECK)</b>"]},{"Name":"Target_MAG_FindFamiliar_Raven","SpellType":"Target","Using":"Target_FindFamiliar_Raven_3","Level":3,"Cooldown":"OncePerShortRestPerItem","SpellProperties":["GROUND:<b>Summon(ecdffa46-80bd-41d2-8a50-4460a2810672, Permanent,,,'FindFamiliarStack',UNSUMMON_ABLE,MAG_FIND_FAMILIAR_RAVEN,EXTRA_ATTACK_THIRSTING_BLADE,SHADOWCURSE_SUMMON_CHECK, MAG_RAVEN_EXPLOSION)</b>"],"DisplayName":"Summon Quothe the Raven","Description":"Summon a raven familiar that can <LSTag Type=\"Spell\" Tooltip=\"Target_RendVision_RavenFamiliar_Summon\"<Blind</LSTag< enemies with its beak. ","ExtraDescription":["h3c7945c9ga77cg4123g98afg9f0f1c12a01c","1"],"UseCosts":["ActionPoint:1"],"SpellFlags":["IsSpell","HasSomaticComponent","HasVerbalComponent","HasHighGroundRangeExtension","CannotTargetCharacter","CannotTargetItems"]},{"Name":"Target_MAG_Resistance","SpellType":"Target","Using":"Target_Resistance"},{"Name":"Target_MAG_GoblinShield_Heroism","SpellType":"Target","Using":"Target_Heroism","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_DominateBeast","SpellType":"Target","Using":"Target_DominateBeast_5","Level":5,"Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"],"PowerLevel":5},{"Name":"Target_MAG_RetrievingShot","SpellType":"Target","Using":"Target_SteelWatcher_Biped_RetrievingShot","TargetRadius":"RangedMainWeaponRange","SpellRoll":["not <b>SavingThrow(Ability.Dexterity,15)</b>"],"SpellSuccess":["<b>Force(-9,TargetToOrigin)</b>","DealDamage(MainRangedWeapon/2, MainRangedWeaponDamageType)"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL,100,0)</b>"],"TargetConditions":["not <b>Self() and not Grounded() and IsMovable()</b>"],"Icon":"Action_Monster_Gortash_ReelIn","Description":"Pulls the creature [1] closer to you.","DescriptionParams":["<b>Distance(9)</b>"],"TooltipDamageList":["DealDamage(MainRangedWeapon/2, MainRangedWeaponDamageType)"],"SpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","9583ecee-cf6c-4735-86db-7ebf1df15eae,,","de006e3f-70fb-4eb7-a98d-d845d15b20e8,,","50696db7-d931-4734-915d-32d038ba99a5,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"DualWieldingSpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","7e67bfd0-2fc2-4d10-bed5-cfda9e660de5,,","eb054308-7fce-4b85-bf4c-7a0031fda7ac,,:4a789a60-04b8-4a26-b476-65cf26ca558b,,","a11b8bcb-ba24-417a-aa86-4e4379c41ee2,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","b2e9c771-3497-444c-b360-23b4441985a1,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"SpellFlags":["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","AddFallDamageOnLand","HasSomaticComponent","IsDefaultWeaponAction"],"PrepareEffect":"4430007f-4300-445c-8f75-977b6a523974","Sheathing":"Ranged"},{"Name":"Target_MAG_Confusion","SpellType":"Target","Using":"Target_Confusion_5","Level":5,"Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsConcentration","IsSpell"]},{"Name":"Target_LOW_Polymorph_Trap","SpellType":"Target","Using":"Target_Polymorph","Cooldown":"None","SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","ImmediateCast","IsTrap"]},{"Name":"Target_LOW_ViciousMockery_Trap","SpellType":"Target","Using":"Target_ViciousMockery","TargetConditions":["<b>Character()</b>"],"SpellFlags":["IsSpell","HasVerbalComponent","IsHarmful","ImmediateCast","IsTrap"]},{"Name":"Target_LOW_Silence_Trap","SpellType":"Target","Using":"Target_Silence_5","SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsConcentration","IsSpell","CannotTargetItems","ImmediateCast","IsTrap"]},{"Name":"Target_LOW_Hex_Dexterity_Trap","SpellType":"Target","Using":"Target_Hex_Dexterity_6","SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsConcentration","IsSpell","IsHarmful","ImmediateCast","IsTrap"]},{"Name":"Target_MAG_HealingWord","SpellType":"Target","Using":"Target_HealingWord","Cooldown":"OncePerRestPerItem","UseCosts":["BonusActionPoint:1"]},{"Name":"Target_WYR_Circus_TeleportBoots_MistyStep","SpellType":"Target","Using":"Target_MistyStep","Cooldown":"OncePerTurn","DisplayName":"Disrobing Blinkstep","Description":"You teleport to an unoccupied space you can see. However, your clothes do not teleport with you.","UseCosts":["BonusActionPoint:1"]},{"Name":"Target_WYR_Circus_AirElemental","SpellType":"Target","Using":"Target_ConjureElemental_Elemental_Air","Cooldown":"OncePerCombat","UseCosts":["ActionPoint:1"],"SpellAnimation":["2c6bdbdc-8059-454f-9683-c63b94a570af,,","cd129fad-3704-4dfd-9547-16b6d3375f61,,","df356ebd-4999-4a2c-b6bc-cfe17ec5dd4d,,","91775390-3afa-4d1a-9587-c31a9a16b89a,,","6177f064-a0fb-4797-a7ef-94aa6565e31d,,"],"PrepareEffect":"11e1cea3-7a6e-4701-948d-3bca206637d6","CastEffect":"a19b8965-d5ef-4626-ae85-ae097f849938"},{"Name":"Target_MAG_Umberlee_CreateDestroyWater","SpellType":"Target","Using":"Target_CreateDestroyWater","ContainerSpells":["Target_MAG_Umberlee_CreateWater","Target_MAG_Umberlee_DestroyWater"],"Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Umberlee_CreateWater","SpellType":"Target","Using":"Target_CreateWater_4","SpellContainerID":"Target_MAG_Umberlee_CreateDestroyWater","Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Umberlee_DestroyWater","SpellType":"Target","Using":"Target_DestroyWater_4","SpellContainerID":"Target_MAG_Umberlee_CreateDestroyWater","Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_InflictWounds_DK","SpellType":"Target","Using":"Target_InflictWounds_4","Level":4,"Cooldown":"OncePerRestPerItem","PrepareSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3","PrepareLoopSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3_Loop","UseCosts":["ActionPoint:1"]},{"Name":"Target_LOW_EastwayWizards_MinorIllusion","SpellType":"Target","Using":"Target_MinorIllusion","SpellProperties":["GROUND:<b>Summon(a4d03902-0382-4f88-866d-3bb2225a69a3, 10,,,'MinorIllusionStack',LOW_EASTWAYWIZARD_MINOR_ILLUSION)</b>"],"TargetConditions":["not <b>Character() and not Self()</b>"],"CastSound":"Spell_Cast_EastwayWizards_MinorIllusion_L1to3","TargetSound":"Spell_Impact_EastwayWizards_MinorIllusion_L1to3","SpellFlags":["HasSomaticComponent","IsSpell","IgnoreSilence","Stealth","Invisible"]},{"Name":"Target_LOW_EastwayWizards_DancingLights","SpellType":"Target","Using":"Target_DancingLights","CastSound":"Spell_Cast_EastwayWizards_DancingLights_L0","TargetSound":"Spell_Impact_EastwayWizards_DancingLights_L0"},{"Name":"Target_MAG_BlackTentacle","SpellType":"Target","Using":"Target_BlackTentacles","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_LOW_SorcerousSundries_MageHandCreateWater","SpellType":"Target","Using":"Target_CreateWater_2","Cooldown":"None","SpellProperties":["<b>ApplyStatus(WET,100, 2)</b>"," GROUND:<b>CreateSurface(2,4, Water)</b>"],"AreaRadius":2,"CastSound":"MageHand_Cast_Utility_CreateWater_L1to3","TargetSound":"MageHand_Impact_Utility_CreateWater_L1to3","UseCosts":["ActionPoint:1"],"SpellAnimation":["b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,","5b4905be-03fd-42fb-9652-c2d1c772f4d3,,","9673b7c5-9928-44ce-ae4f-a85be2683981,,","e81ffae4-6be0-47fd-8502-48b9961004e9,,"],"SpellFlags":["RangeIgnoreVerticalThreshold","IsSpell","HasVerbalComponent","HasSomaticComponent"]},{"Name":"Target_MAG_OutpostJewelry_Guidance","SpellType":"Target","Using":"Target_Guidance"},{"Name":"Target__EPI","SpellType":"Target","Using":"Target_MainHandAttack"},{"Name":"Target_EPI_DivineViciousMockery","SpellType":"Target","Using":"Target_ViciousMockery","TargetRadius":26,"SpellSuccess":["<b>DealDamage(2d8,Psychic,Magical)</b>","<b>DealDamage(2d8,Radiant,Magical)</b>","<b>Force(10)</b>","<b>ApplyStatus(VICIOUSMOCKERY,100,2)</b>"],"TooltipDamageList":["<b>DealDamage(2d8,Psychic)</b>","<b>DealDamage(2d8,Radiant)</b>"],"CastSound":"CrSpell_Cast_ViciousMockery","TargetSound":"CrSpell_Impact_ViciousMockery","PrepareEffect":"2f422ff1-2aba-4b40-ae4e-a5f5d2fab103","CastEffect":"f857a71f-fdcd-415f-89e2-de63192cd86f","TargetEffect":"37e56a3a-d749-4d8e-9d1d-d44ef1001022","BeamEffect":"7a20894a-09a9-45f2-9b9e-c2a824adaad4","Sheathing":"Instrument"},{"Name":"Target_EPI_GhostTouch","SpellType":"Target","Using":"Target_ChillTouch","TargetRadius":"1.5","SpellSuccess":["<b>ApplyStatus(EPI_EPILOGUE_GHOSTTOUCHED,100,1)</b>"],"DisplayName":"Chilling Touch","Description":"Reach from beyond to a mortal creature, sending shivers down its spine.","TooltipStatusApply":["<b>ApplyStatus(EPI_EPILOGUE_GHOSTTOUCHED,100,1)</b>"],"SpellFlags":["HasSomaticComponent"]},{"Name":"Target_END_Nautiloid_HighHallInterior_Targeting","SpellType":"Target","Icon":"","DisplayName":"Nautiloid Targeting","Description":"The nautiloid affixes itself aim to several targets for bombardment.","CastTextEvent":"Cast","SpellAnimation":["5e57443f-284e-47b2-915e-5b6417db269c,,","d8b7f668-db2b-43b0-9707-5da2ed2cf27e,,","7521e279-1bb3-4105-b32d-8206234836a3,,","d172e037-7041-4352-9a20-5f4b185f9ef1,,","5bcdefbb-2194-46c2-ac77-0b2d8472a5f7,,","5fdb66be-7506-411a-a7ea-c4783288aac8,,"],"SpellFlags":["ImmediateCast"]},{"Name":"Target_END_Gale_ActivateNethereseOrb","SpellType":"Target","TargetConditions":["<b>Self()</b>"],"Icon":"Action_EndGame_NethereseOrbBlast","DisplayName":"Netherese Orb Blast","Description":"Gale triggers the Netherese Orb in his chest, destroying everything and everyone in a wide radius.","PrepareSound":"Spell_Prepare_Gale_NethereseOrb","PrepareLoopSound":"Spell_Loop_Gale_NethereseOrb","CastSound":"Spell_Cast_Gale_NethereseOrb","PreviewCursor":"Cast","CastTextEvent":"Cast","UseCosts":["ActionPoint:1"],"SpellAnimation":["5e57443f-284e-47b2-915e-5b6417db269c,,","d8b7f668-db2b-43b0-9707-5da2ed2cf27e,,","7521e279-1bb3-4105-b32d-8206234836a3,,","d172e037-7041-4352-9a20-5f4b185f9ef1,,","5bcdefbb-2194-46c2-ac77-0b2d8472a5f7,,","5fdb66be-7506-411a-a7ea-c4783288aac8,,"],"SpellStyleGroup":"Intent","SpellFlags":["IsSpell"],"PrepareEffect":"c837e328-3dba-4c6a-9326-ad36865aec13","CastEffect":"422b8f06-a174-4061-9d24-16b175088005"},{"Name":"Target_LOW_SorcerousSundries_FindFamiliar_Frog","SpellType":"Target","Using":"Target_FindFamiliar_Frog","CastSound":"Spell_Cast_SorcerousSundries_FindFamiliar_L1to3","TargetSound":"Spell_Impact_SorcerousSundries_FindFamiliar_L1to3","SpellFlags":["IsSpell","HasSomaticComponent","HasVerbalComponent","HasHighGroundRangeExtension","IsLinkedSpellContainer","CannotTargetCharacter","CannotTargetItems","ImmediateCast"]},{"Name":"Target_LOW_SorcerousSundries_FindFamiliar_Cat","SpellType":"Target","Using":"Target_FindFamiliar_Cat","CastSound":"Spell_Cast_SorcerousSundries_FindFamiliar_L1to3","TargetSound":"Spell_Impact_SorcerousSundries_FindFamiliar_L1to3","SpellFlags":["IsSpell","HasSomaticComponent","HasVerbalComponent","HasHighGroundRangeExtension","IsLinkedSpellContainer","CannotTargetCharacter","CannotTargetItems","ImmediateCast"]},{"Name":"Target_LOW_SorcerousSundries_FindFamiliar_Rat","SpellType":"Target","Using":"Target_FindFamiliar_Rat","CastSound":"Spell_Cast_SorcerousSundries_FindFamiliar_L1to3","TargetSound":"Spell_Impact_SorcerousSundries_FindFamiliar_L1to3","SpellFlags":["IsSpell","HasSomaticComponent","HasVerbalComponent","HasHighGroundRangeExtension","IsLinkedSpellContainer","CannotTargetCharacter","CannotTargetItems","ImmediateCast"]},{"Name":"Target_LOW_SorcerousSundries_FindFamiliar_Crab","SpellType":"Target","Using":"Target_FindFamiliar_Crab","CastSound":"Spell_Cast_SorcerousSundries_FindFamiliar_L1to3","TargetSound":"Spell_Impact_SorcerousSundries_FindFamiliar_L1to3","SpellFlags":["IsSpell","HasSomaticComponent","HasVerbalComponent","HasHighGroundRangeExtension","IsLinkedSpellContainer","CannotTargetCharacter","CannotTargetItems","ImmediateCast"]},{"Name":"Target_LOW_SorcerousSundries_FindFamiliar_Spider","SpellType":"Target","Using":"Target_FindFamiliar_Spider","CastSound":"Spell_Cast_SorcerousSundries_FindFamiliar_L1to3","TargetSound":"Spell_Impact_SorcerousSundries_FindFamiliar_L1to3","SpellFlags":["IsSpell","HasSomaticComponent","HasVerbalComponent","HasHighGroundRangeExtension","IsLinkedSpellContainer","CannotTargetCharacter","CannotTargetItems","ImmediateCast"]},{"Name":"Teleportation_END_Orpheus_DimensionDoor","SpellType":"Teleportation","Using":"Teleportation_DimensionDoor","UseCosts":["ActionPoint:1","KiPoint:2"]},{"Name":"Teleportation_MAG_ArcaneGate","SpellType":"Teleportation","Using":"Teleportation_ArcaneGate","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Teleportation_MAG_Revivify","SpellType":"Teleportation","Using":"Teleportation_Revivify","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Teleportation_MAG_Dolor_DimensionDoor","SpellType":"Teleportation","Using":"Teleportation_DimensionDoor","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Throw_CRE_BreweryKobolds_Throw_KoboldInventor","SpellType":"Throw","Using":"Throw_Throw","SpellSuccess":["TARGET:<b>IF(IsLightThrownObject(context.HitDescription.ThrownObject, false))</b>:<b>DealDamage(1d4,Bludgeoning)</b>","TARGET:<b>IF(IsHeavyThrownObject(context.HitDescription.ThrownObject, false))</b>:<b>DealDamage(2d4,Bludgeoning)</b>","TARGET:<b>IF(HasWeaponProperty(WeaponProperties.Thrown,context.HitDescription.ThrownObject))</b>:<b>DealDamage(ThrownWeapon, ThrownWeaponDamageType)</b>","TARGET:IF(HasWeightGreaterThan(context.Target.Weight/2, context.HitDescription.ThrownObject)):<b>Force(2)</b>","TARGET:<b>IF(HasWeightGreaterThan(context.Target.Weight, context.HitDescription.ThrownObject))</b>:<b>ApplyStatus(PRONE,100,1)</b>","AI_ONLY:<b>DealDamage(4d6, Fire)</b>"],"TargetConditions":["not <b>Self() and not (not Player(context.Source) and Item()) and not (not Player(context.Source) and Ally())</b>"],"SpellAnimation":["2bae2c99-49a5-485d-8f50-069a03f89e60,,","265bfa28-16e6-4637-b717-e043ff076333,,","58f8ca1e-eb72-4207-9359-bbc51ea3756c,,","8e29e8b6-a017-4252-8274-deff73775d12,,","45eb1dc1-d9ce-40fc-a453-97d9fc758e6f,,"]},{"Name":"Throw_MAG_WeaponAction_CometThrow","SpellType":"Throw","Using":"Throw_FrenziedThrow","Cooldown":"OncePerShortRest","TargetRadius":"ThrownObjectRange","AreaRadius":1,"SpellSuccess":["TARGET:IF(HasWeightGreaterThan(context.Target.Weight/2, context.HitDescription.ThrownObject)):<b>Force(2)</b>","TARGET:<b>IF(HasWeightGreaterThan(context.Target.Weight, context.HitDescription.ThrownObject))</b>:<b>ApplyStatus(PRONE,100,1)</b>","<b>IF(not SavingThrow(Ability.Dexterity, 13))</b>:<b>ApplyStatus(PRONE,100,1)</b>","PROJECTILE:<b>CreateExplosion(Projectile_MAG_Mobility_ExplosionOnJump_Explosion)</b>"],"TargetConditions":["not <b>Self() and not Player(context.Source)</b>"],"ThrowableTargetConditions":"<b>CanThrowWeight() and not Grounded() and (IsMovable() or Character() or Dead()) and CanMove(context.Target, context.Source, false)</b>","Trajectories":"c062a5c4-094e-469c-b283-0d7c919b2028","DisplayName":"Comet","Description":"Pick up a creature and throw it at a target, possibly knocking it <LSTag Type=\"Status\" Tooltip=\"PRONE\"<Prone</LSTag<. Deal [1] in [2] radius on contact.","DescriptionParams":["<b>DealDamage(1d4, Force)</b>","<b>Distance(3)</b>"],"ExtraDescription":["hdfbfee20g24a2g492aga128gcc984d91f8a0","1"],"SpellFlags":["RangeIgnoreVerticalThreshold","IsHarmful","HasHighGroundRangeExtension","IgnoreSilence","IgnoreVisionBlock","AddFallDamageOnLand"]},{"Name":"Throw_LOW_Dolor_ThrowPotion","SpellType":"Throw","Using":"Throw_Throw","Cooldown":"OncePerTurn","TargetConditions":["<b>Ally() or Enemy()</b>"],"ThrowableTargetConditions":"<b>Tagged('POTION') or Tagged('GRENADE')</b>","UseCosts":["BonusActionPoint:1"]},{"Name":"Throw_LOW_Doppelganger_ThrowPotion","SpellType":"Throw","Using":"Throw_Throw","ThrowableTargetConditions":"<b>Tagged('POTION') or Tagged('GRENADE')</b>","RequirementConditions":"<b>HasStatus('SG_Polymorph',context.Source)</b>"},{"Name":"Throw_LOW_BlushingMermaid_Redcap_ThrowGrenade","SpellType":"Throw","Using":"Throw_Throw","SpellProperties":["AI_IGNORE:GROUND:<b>DealDamage(1,Bludgeoning)</b>","AI_ONLY:TARGET:<b>ApplyStatus(BLEEDING,100,2)</b>"],"TargetConditions":["<b>Enemy() and not HasStatus('BLEEDING')</b>"],"ThrowableTargetConditions":"<b>Tagged('GRENADE')</b>"},{"Name":"Throw_LOW_Poltergeist_Telekinesis","SpellType":"Throw","Using":"Throw_Throw","TargetRadius":18,"SpellProperties":["AI_ONLY:<b>ApplyStatus(SELF,AI_HELPER_BUFF_LARGE,100,10)</b>","GROUND:<b>DealDamage(1,Bludgeoning)</b>","TARGET:<b>IF(HasStatus('MAG_THE_THORNS_WEAPON_BOND', context.HitDescription.ThrownObject))</b>:<b>ApplyStatus(MAG_THE_THORNS_AOE_DAMAGE_TECHNICAL, 100, 0)</b>","TARGET:<b>IF(HasStatus('MAG_FIRE_THROW', context.HitDescription.ThrownObject))</b>:<b>DealDamage(1d4, Fire)</b>","TARGET:<b>IF(HasStatus('MAG_COLD_THROW', context.HitDescription.ThrownObject))</b>:<b>DealDamage(1d4, Cold)</b>","TARGET:<b>IF(HasStatus('MAG_LIGHTNING_THROW', context.HitDescription.ThrownObject))</b>:<b>DealDamage(1d4, Lightning)</b>","TARGET:<b>IF(HasStatus('MAG_THUNDER_THROW', context.HitDescription.ThrownObject))</b>:<b>DealDamage(1d4, Thunder)</b>","TARGET:<b>IF(HasStatus('MAG_ACID_THROW', context.HitDescription.ThrownObject))</b>:<b>DealDamage(1d4, Acid)</b>","TARGET:<b>IF(HasStatus('MAG_POISON_THROW', context.HitDescription.ThrownObject))</b>:<b>DealDamage(1d4, Poison)</b>","TARGET:<b>IF(HasStatus('MAG_NECROTIC_THROW', context.HitDescription.ThrownObject))</b>:<b>DealDamage(1d4, Necrotic)</b>","TARGET:<b>IF(HasStatus('MAG_FORCE_THROW', context.HitDescription.ThrownObject))</b>:<b>DealDamage(1d4, Force)</b>","TARGET:<b>IF(HasStatus('MAG_PSYCHIC_THROW', context.HitDescription.ThrownObject))</b>:<b>DealDamage(1d4, Psychic)</b>","TARGET:<b>IF((HasStatus('BURNING', context.HitDescription.ThrownObject) or HasStatus('FLAMING_SPHERE_AURA', context.HitDescription.ThrownObject)))</b>:<b>ApplyStatus(SELF, BURNING,100,1)</b>"],"SpellRoll":["not <b>SavingThrow(Ability.Dexterity,15)</b>"],"SpellSuccess":["TARGET:<b>IF(IsLightThrownObject(context.HitDescription.ThrownObject, false))</b>:<b>DealDamage(1d10,Bludgeoning)</b>","TARGET:<b>IF(IsMediumThrownObject(context.HitDescription.ThrownObject, false))</b>:<b>DealDamage(2d10,Bludgeoning)</b>","TARGET:<b>IF(IsHeavyThrownObject(context.HitDescription.ThrownObject, false))</b>:<b>DealDamage(3d10,Bludgeoning)</b>","TARGET:<b>IF(HasWeaponProperty(WeaponProperties.Thrown,context.HitDescription.ThrownObject))</b>:<b>DealDamage(ThrownWeapon, ThrownWeaponDamageType)</b>","TARGET:IF(HasWeightGreaterThan(context.Target.Weight/2, context.HitDescription.ThrownObject)):<b>Force(2)</b>","TARGET:<b>IF(HasWeightGreaterThan(context.Target.Weight, context.HitDescription.ThrownObject))</b>:<b>ApplyStatus(PRONE,100,1)</b>"],"TargetConditions":["not <b>Dead() and Enemy() and not Tagged('OSKARSBELOVED_IMMUNITY')</b>"],"ThrowableTargetConditions":"<b>Tagged('ACT3_LOW_OSKARSBELOVED_THROWABLEITEM')</b>","DisplayName":"Forceful Throw","Description":"Throw an item at a creature, wounding it and possibly knocking it <LSTag Type=\"Status\" Tooltip=\"PRONE\"<Prone</LSTag<.","ExtraDescription":["hd8ddaa70g81c9g46ebg8905g27e3b9d1582f","3"],"UseCosts":["ActionPoint:1"],"VerbalIntent":"Damage","SpellFlags":["InventorySelection","RangeIgnoreVerticalThreshold","IsHarmful","HasHighGroundRangeExtension","IgnoreSilence","IgnoreVisionBlock","AddFallDamageOnLand","AbortOnSecondarySpellRollFail","CombatLogSetSingleLineRoll"]},{"Name":"Throw_LOW_Poltergeist_Telekinesis_Combat","SpellType":"Throw","Using":"Throw_LOW_Poltergeist_Telekinesis","TargetRadius":9,"ThrowableTargetConditions":"<b>HasStatus('LOW_POLTERGEIST_THROW')</b>","DisplayName":"Forceful Throw","Description":"Throw an item at a creature, wounding it and possibly knocking it <LSTag Type=\"Status\" Tooltip=\"PRONE\"<Prone</LSTag<.","ExtraDescription":["h9ede2eddgedc9g4d81g8414g50d66895fbe2","1"]},{"Name":"Throw_END_Orpheus_Telekinesis","SpellType":"Throw","Using":"Throw_Telekinesis","UseCosts":["ActionPoint:1","KiPoint:2"]},{"Name":"Throw_LOW_NineFingers_SneakyDagger","SpellType":"Throw","Using":"Throw_Throw","Cooldown":"OncePerTurn","SpellSuccess":["TARGET:<b>IF(HasWeaponProperty(WeaponProperties.Thrown,context.HitDescription.ThrownObject) and (HasAdvantage() or HasAllyWithinRange('SG_Incapacitated',1.5)) and not HasDisadvantage())</b>:<b>DealDamage(ThrownWeapon + LevelMapValue(SneakAttack), ThrownWeaponDamageType)</b>"," TARGET:<b>IF(HasWeaponProperty(WeaponProperties.Thrown,context.HitDescription.ThrownObject) and not ((HasAdvantage() or HasAllyWithinRange('SG_Incapacitated',1.5)) and not HasDisadvantage()))</b>:<b>DealDamage(ThrownWeapon, ThrownWeaponDamageType)</b>"],"ThrowableTargetConditions":"<b>CanThrowWeight() and not Grounded() and not IsItemDisabled() and not HasAttribute('InventoryBound') and (IsMovable() or Character() or Dead()) and CanMove(context.Target, context.Source, false) and (not IsEquipped() or IsEquipmentSlot(EquipmentSlot.MeleeMainHand) or IsEquipmentSlot(EquipmentSlot.MeleeOffHand) or IsEquipmentSlot(EquipmentSlot.Boots)) and Tagged('WPN_DAGGER')</b>","DisplayName":"The Blade Least Expected","Description":"Hit a foe against whom you've got <LSTag Tooltip=\"Advantage\"<Advantage</LSTag<, dealing <LSTag Type=\"Spell\" Tooltip=\"Target_SneakAttack\"<Sneak Attack</LSTag< damage.","CastSound":"Action_Cast_SneakAttackProjectile","VerbalIntent":"Damage","CastEffect":"bf5fa9ef-7d14-4061-b393-10852789ff1b","TargetEffect":"b51922cf-e412-4462-8274-144781bac7f3","HitEffect":"5a88afee-d864-4dba-87a5-5bed5745e201"},{"Name":"Throw_LOW_NineFingers_SneakyDagger_2","SpellType":"Throw","Using":"Throw_LOW_NineFingers_SneakyDagger","DisplayName":"The Blade Least Expected","Description":"Hit a foe against whom you've got <LSTag Tooltip=\"Advantage\"<Advantage</LSTag<, dealing <LSTag Type=\"Spell\" Tooltip=\"Target_SneakAttack\"<Sneak Attack</LSTag< damage."},{"Name":"Throw_LOW_NineFingers_SneakyDagger_3","SpellType":"Throw","Using":"Throw_LOW_NineFingers_SneakyDagger","DisplayName":"The Blade Least Expected","Description":"Hit a foe against whom you've got <LSTag Tooltip=\"Advantage\"<Advantage</LSTag<, dealing <LSTag Type=\"Spell\" Tooltip=\"Target_SneakAttack\"<Sneak Attack</LSTag< damage."},{"Name":"Throw_LOW_Chasm_FrenziedThrow","SpellType":"Throw","Using":"Throw_FrenziedThrow","TargetConditions":["<b>Enemy()</b>"]},{"Name":"Throw_END_Emperor_Telekinesis","SpellType":"Throw","Using":"Throw_Telekinesis","UseCosts":["ActionPoint:1"]},{"Name":"Throw_MAG_TheThorns_Throw","SpellType":"Throw","Using":"Throw_Throw","SpellSuccess":["TARGET:<b>IF(IsLightThrownObject(context.HitDescription.ThrownObject, false))</b>:<b>DealDamage(1,Bludgeoning)</b>","TARGET:<b>IF(IsMediumThrownObject(context.HitDescription.ThrownObject, false))</b>:<b>DealDamage(1d4,Bludgeoning)</b>","TARGET:<b>IF(IsHeavyThrownObject(context.HitDescription.ThrownObject, false))</b>:<b>DealDamage(2d4,Bludgeoning)</b>","TARGET:<b>IF(HasWeaponProperty(WeaponProperties.Thrown,context.HitDescription.ThrownObject))</b>:<b>DealDamage(ThrownWeapon, ThrownWeaponDamageType)</b>","TARGET:IF(HasWeightGreaterThan(context.Target.Weight/2, context.HitDescription.ThrownObject)):<b>Force(2)</b>","TARGET:<b>IF(HasWeightGreaterThan(context.Target.Weight, context.HitDescription.ThrownObject))</b>:<b>ApplyStatus(PRONE,100,1)</b>","TARGET:<b>IF(Tagged('BOO',context.HitDescription.ThrownObject))</b>:<b>ApplyStatus(BLINDED,100,1)</b>","GROUND:<b>ExecuteWeaponFunctors(MainHand)</b>","GROUND:<b>ExecuteWeaponFunctors(OffHand)</b>"],"ThrowableTargetConditions":"<b>HasStatus('MAG_THE_THORNS_WEAPON_BOND') and CanThrowWeight() and not Grounded() and not IsItemDisabled() and not HasAttribute('InventoryBound') and (not IsEquipped() or IsEquipmentSlot(EquipmentSlot.MeleeMainHand) or IsEquipmentSlot(EquipmentSlot.MeleeOffHand))</b>","Trajectories":"a82d0147-9ecd-455a-a9ef-c6d2b8119777,48362660-28e7-2af1-62fe-49fc4cb6cc70,bfd9fe10-124d-6b01-53e0-824346204638","DisplayName":"Billowing Hurl","Description":"Throw Nyrulna forth to deal [1] in a [2] radius explosion of turbulence.","DescriptionParams":["<b>DealDamage(1d4, Force)</b>","<b>Distance(6)</b>"],"TooltipDamageList":["<b>DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)</b>","<b>DealDamage(1d4, Force,,,,ad727a13-c6f0-4b5b-aefd-aac79c6ed46e)</b>"],"VerbalIntent":"Damage","SpellFlags":["InventorySelection","RangeIgnoreVerticalThreshold","IsHarmful","HasHighGroundRangeExtension","IgnoreSilence","IgnoreVisionBlock","AddFallDamageOnLand","AbortOnSecondarySpellRollFail"],"PrepareEffect":"9342eaf4-6a20-44c6-a740-863b0f9c2475","CastEffect":"d8134ee0-add9-449f-8934-c6ef8dbee199","HitEffect":"c0faba43-8838-4e9a-ac41-126d46d67d39","Sheathing":"Melee"},{"Name":"Throw_WYR_Throw_Gortash","SpellType":"Throw","Using":"Throw_Throw","TargetConditions":"not <b>Self() and not (not Player(context.Source) and Item()) and not Enemy()</b>","DisplayName":"Mechanical Throw","Description":"Throw as a Bonus Action.","UseCosts":"BonusActionPoint:1","RequirementConditions":"not <b>HasStatus('WYR_GORTASH_BANE_BUFF',context.Source)</b>"}])