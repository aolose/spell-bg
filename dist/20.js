loadSpell([[0,1,2,32,3,"","Projectile_LOW_HouseOfHope_DebtorExplode_Merregon","Projectile","Projectile_LOW_HouseOfHope_DebtorExplode_Imp",["GROUND:<b>SurfaceChange(Ignite)</b>","GROUND:<b>SurfaceChange(Melt)</b>","GROUND:<b>CreateSurface(4,,Fire)</b>","<b>ApplyStatus(BURNING,100,1)</b>","GROUND:<b>Spawn(48a2d0cd-cb46-4165-ac13-977283ee5320)</b>"]],[0,1,2,32,3,"","Projectile_LOW_HouseOfHope_DebtorExplode_Boar","Projectile","Projectile_LOW_HouseOfHope_DebtorExplode_Imp",["GROUND:<b>SurfaceChange(Ignite)</b>","GROUND:<b>SurfaceChange(Melt)</b>","GROUND:<b>CreateSurface(4,,Fire)</b>","<b>ApplyStatus(BURNING,100,1)</b>","GROUND:<b>Spawn(3d4fd805-9b88-4a71-843b-1457d96f4235)</b>"]],[0,1,2,32,3,47,85,42,6,7,8,9,11,12,13,14,45,15,71,39,21,23,27,28,46,41,33,34,66,35,31,"","Projectile_LOW_Raphael_PrimordialHell","Projectile","Projectile_ChainLightning",["GROUND:<b>SurfaceChange(Ignite)</b>","GROUND:<b>SurfaceChange(Melt)</b>","GROUND:<b>CreateSurface(5,,Fire)</b>","<b>ApplyStatus(BURNING,100,1)</b>"],5,"Incinerate",5,["not <b>SavingThrow(Ability.Dexterity, 15)</b>"],["<b>DealDamage(15d8,Fire,Magical)</b>","<b>SpawnExtraProjectiles(Projectile_LOW_Raphael_PrimordialHell_Chain)</b>"],["<b>DealDamage(15d8/2,Fire,Magical)</b>"],["not <b>Self() and not Dead() and Enemy()</b>"],"001ce817-932e-4d8c-bf86-7097178a7806","Spell_Evocation_Fireball","Ravaging Inferno","Spend [3] souls to deal [1] and cause [2] <b>Igniting Sparks</b> to burst from each target hit. ",["<b>DealDamage(15d8, Fire)</b>","<b>DealDamage(4d6, Fire)</b>"],["<b>DealDamage(15d8, Fire)</b>"],"23bf0c8d-a594-4f4c-9571-412af59cb434","CrSpell_Cast_PrimordialHell",["ActionPoint:1","SpellSlotsGroup:3:3:1"],["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","6444d598-3e0e-4a14-902a-c067905a0b87,,","97f8db1e-e873-490a-9c33-8dbb4b97e583,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],["HasSomaticComponent","HasHighGroundRangeExtension","IsSpell"],"MagicalDamage_External","3-6",["<b>HasStatus('LOW_RAPHAEL_MONSTER_FORM')</b>"],"fdbf8e88-c3a5-4151-a81d-429985de422c","6d134da0-3f09-4bfd-928b-70443b382498","41de42e1-56d0-4336-8b44-99fc38281525","Fire","DontChange"],[0,1,2,32,36,3,85,9,13,14,45,39,21,23,46,61,41,34,31,"","Projectile_LOW_Raphael_HellfireOrb","Projectile","Projectile_HellfireOrb_DeathKnight","OncePerTurn",["GROUND:<b>CreateSurface(4, 2,Hellfire)</b>","<b>SurfaceChange(Ignite)</b>","GROUND:<b>SurfaceChange(Melt)</b>"],"Incinerate",["<b>Enemy() and not Dead()</b>"],"Ravaging Inferno","Spend [1] souls to hurl an exploding ball of <b>Hellfire</b> that damages all nearby creatures and objects.",2,"CrSpell_Cast_PrimordialHell",["ActionPoint:1","SpellSlotsGroup:2:2:1"],["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","6444d598-3e0e-4a14-902a-c067905a0b87,,","97f8db1e-e873-490a-9c33-8dbb4b97e583,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"3-6",1,["<b>HasStatus('LOW_RAPHAEL_MONSTER_FORM')</b>"],"6d134da0-3f09-4bfd-928b-70443b382498","DontChange"],[0,1,2,32,65,9,10,"","Projectile_LOW_Raphael_PrimordialHell_Chain","Projectile","Projectile_LOW_Raphael_DancingFlame",3,["not <b>Self() and not Dead() and Enemy()</b>"],3],[0,1,2,32,57,47,85,42,6,7,8,9,13,14,15,"","Projectile_LOW_Raphael_Soul_Explosion","Projectile","Projectile_DeathBurst_IntellectDevourer",4,3,"Necrotic",3,["not <b>SavingThrow(Ability.Constitution, 15)</b>"],["<b>DealDamage(5d8, Fire,Magical)</b>"],["<b>DealDamage(5d8/2, Fire,Magical)</b>"],["not <b>Dead() and Enemy()</b>"],"%%% Explode","%%% WIP",["<b>DealDamage(5d8, Fire)</b>"]],[0,1,2,32,3,9,"","Projectile_LOW_CountingHouse_AiHelper_UseDocksAlarmTrigger","Projectile","Projectile_AiHelper_UseItem_Large",["CAST:<b>ApplyStatus(SELF,AI_HELPER_BUFF_MASSIVE,100,4)</b>"],["<b>DistanceToTargetLessThan(20) and Tagged('ACT3_LOW_COUNTINGHOUSE_AI_DOCKSALARM_TRIGGER') and Tagged('ACT3_LOW_COUNTINGHOUSE_CASHGUARD', context.Source) and not HasStatus('SILENCED')</b>"]],[0,1,2,32,36,3,7,8,9,11,12,13,14,56,21,23,27,29,41,34,84,31,"","Projectile_LOW_WatcherTitan_DummyHellfireMissiles","Projectile","Projectile_Fireball","OncePerTurn",["AI_IGNORE:<b>ApplyStatus(SELF,LOW_STEELWATCHFOUNDRY_TITAN_APBLOCK,100,2)</b>"],["AI_ONLY:<b>DealDamage(8d6,Fire)</b>"],["AI_ONLY:<b>DealDamage((8d6)/2,Fire)</b>"],["<b>Character() and not Self()</b>"],"f346b284-854e-4dd9-b87c-3938f5178265","PassiveFeature_Generic_Explosion","Targeting Protocol: Hellfire Missiles","Prime and aim your <b>Hellfire Missiles</b> at a target to fire on your next turn. ",["0695feaa-7a95-4216-a292-c0eef5b5c3d0"],["ActionPoint:1"],["8f8d9961-db99-469b-86af-a468a454387e,,","736f94db-091b-46e7-8d90-ea73ad26a970,,","74b75cd3-7013-4e58-bb10-8c8ffa6c264b,,"],["IsHarmful","CannotRotate"],"Aggressive",["<b>HasStatus('BULWARK_MODE')</b>"],"d7350c2e-6539-462f-9c9e-a87febd2fb19","8c141a70-5db3-4cb6-a1e0-2d1568543165","WeaponSet"],[0,1,2,32,3,65,13,15,"","Projectile_LOW_RamazithTower_TurretArcane","Projectile","Projectile_Turret_Arcane",["<b>DealDamage(3d10,Force,Magical)</b>"],1,"Arcane Shot",["<b>DealDamage(3d10,Force)</b>"]],[0,1,2,32,36,"","Projectile_MAG_FireRay","Projectile","Projectile_FireRay_Cambion","OncePerShortRestPerItem"],[0,1,2,32,6,8,16,39,21,27,28,30,"","Projectile_END_ThunderTrap","Projectile","Projectile_ChromaticOrb_Thunder_3",["not <b>SavingThrow(Ability.Constitution, 10)</b>"],["<b>DealDamage((5d8)/2,Thunder)</b>"],["Constitution"],"Spell_Cast_Damage_Thunder_Thunderwave_L1to3_01",["ActionPoint:1"],["IsHarmful","IsTrap","AddFallDamageOnLand"],"MagicalDamage_External","Big"],[0,1,2,32,13,14,"","Projectile_LOW_SorcerousSundries_ArtistryOfWar","Projectile","Projectile_MagicMissile_5","Artistry of War","Call upon the spirits of 6 long dead warriors and strategists whose master techniques were recorded in the Curriculum. Each spirit strikes a creature you can see within range, and deals 2d6+6 force damage."],[0,1,2,32,3,9,45,15,27,"","Projectile_MAG_SarevoksArmor_WitheringBarrier_Explosion","Projectile","Projectile_MOO_DeathBloom_Explosion",["<b>DealDamage(1d6, Piercing,Magical)</b>"],["(<b>Character() and Enemy() and not Dead()) or Item()</b>"],["<b>DealDamage(1d6,Necrotic)</b>"],["<b>DealDamage(1d6,Necrotic)</b>"],["CanAreaDamageEvade","IsTrap"]],[0,1,2,32,36,3,7,8,12,13,14,37,15,21,23,24,26,27,33,34,31,"","Projectile_MAG_Automaton_FireballShot","Projectile","Projectile_Fireball","OncePerShortRestPerItem",["GROUND:<b>CreateSurface(6, 2,Hellfire)</b>","GROUND:<b>SurfaceChange(Ignite)</b>","GROUND:<b>SurfaceChange(Melt)</b>","<b>ApplyStatus(SELF, MAG_AUTOMATON_FIREBALL_SHOT_OWNER,100,10)</b>"],["<b>DealDamage(4d6,Fire,Magical)</b>"],["<b>DealDamage((4d6)/2,Fire,Magical)</b>"],"Action_Monster_GortashMachine_FlameThrower","Fiery Shot","Scorch foes with fire.","Until the spell ends, you can recast the spell, creating <b>Heat</b> each time you recast it.",["<b>DealDamage(4d6,Fire)</b>"],["ActionPoint:1"],["73afb4e5-8cfe-4479-95cf-16889597fee3,,","9583ecee-cf6c-4735-86db-7ebf1df15eae,,","de006e3f-70fb-4eb7-a98d-d845d15b20e8,,","50696db7-d931-4734-915d-32d038ba99a5,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],["73afb4e5-8cfe-4479-95cf-16889597fee3,,","7e67bfd0-2fc2-4d10-bed5-cfda9e660de5,,","eb054308-7fce-4b85-bf4c-7a0031fda7ac,,:4a789a60-04b8-4a26-b476-65cf26ca558b,,","a11b8bcb-ba24-417a-aa86-4e4379c41ee2,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","b2e9c771-3497-444c-b360-23b4441985a1,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"Ammunition",["HasSomaticComponent","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","CanAreaDamageEvade","IsDefaultWeaponAction","IsConcentration"],"ab9a9a13-7ceb-46ee-bd9e-74c044516fb1","b26abd87-14b7-4ed0-93d1-f424bc4fa236","Ranged"],[0,1,2,32,3,13,14,37,27,"","Projectile_MAG_Automaton_FireballShot_Recreate","Projectile","Projectile_MAG_Automaton_FireballShot",["GROUND:<b>CreateSurface(6, 2,Hellfire)</b>","GROUND:<b>SurfaceChange(Ignite)</b>","GROUND:<b>SurfaceChange(Melt)</b>","<b>ApplyStatus(SELF, MAG_FIRE_HEAT,100, 2)</b>"],"Recast Fiery Shot","Scorch foes with fire.","Create <b>Heat</b> each time you recast this spell.",["HasSomaticComponent","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","CanAreaDamageEvade","IsDefaultWeaponAction"]],[0,1,2,32,7,11,12,13,14,15,21,"","Projectile_MAG_Automaton_LightTagging_Shot","Projectile","Projectile_MainHandAttack",["<b>DealDamage(1d4, MainRangedWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>","<b>ApplyStatus(MAG_RADIANT_RADIATING_ORB, 100, 1)</b>"],"c63c4527-1bdf-4635-ad59-7d7e2f666fa3","Action_Monster_GortashMachine_GrenadeLauncher","Illuminating Shot","Fire a shimmering bolt that inflicts 1 turn of  <b>Radiating Orb</b> upon the target. ",["<b>DealDamage(1d4, MainRangedWeaponDamageType)</b>"],["BonusActionPoint:1"]],[0,1,2,32,36,21,"","Projectile_MAG_IceKnife","Projectile","Projectile_IceKnife","OncePerRestPerItem",["ActionPoint:1"]],[0,1,2,32,57,36,21,23,31,"","Projectile_MAG_MagicMissile_Shot","Projectile","Projectile_MagicMissile_3",3,"OncePerShortRestPerItem",["ActionPoint:1"],["73afb4e5-8cfe-4479-95cf-16889597fee3,,","9583ecee-cf6c-4735-86db-7ebf1df15eae,,","de006e3f-70fb-4eb7-a98d-d845d15b20e8,,","50696db7-d931-4734-915d-32d038ba99a5,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"Ranged"],[0,1,2,32,36,21,"","Projectile_MAG_MelfsMagicArrow","Projectile","Projectile_AcidArrow","OncePerRestPerItem",["ActionPoint:1"]],[0,1,2,32,36,7,15,27,"","Projectile_MAG_PushingAttack","Projectile","Projectile_PushingAttack","OncePerShortRest",["<b>IF(not SavingThrow(Ability.Strength, ManeuverSaveDC()))</b>:<b>Force(5)</b>","<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>"],["<b>DealDamage(MainMeleeWeapon, MainRangedWeaponDamageType)</b>"],["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","AddFallDamageOnLand","IsDefaultWeaponAction"]],[0,1,2,32,36,27,33,31,"","Projectile_MAG_DivingStrike","Projectile","Projectile_DivingStrike","OncePerShortRest",["IsJump","IsHarmful","HasHighGroundRangeExtension","CombatLogSetSingleLineRoll","IsDefaultWeaponAction"],"9342eaf4-6a20-44c6-a740-863b0f9c2475","Melee"],[0,1,2,47,42,7,8,9,11,13,27,"","Projectile_MAG_Barbarian_Rage_EmotionalDamage_Explosion","Projectile",3,3,["<b>IF(not SavingThrow(Ability.Wisdom, ManeuverSaveDC()))</b>:<b>DealDamage(2d4, Psychic,Magical)</b>"],["<b>DealDamage(1d4, Psychic,Magical)</b>"],["not <b>Self() and not Dead() and Enemy()</b>"],"f346b284-854e-4dd9-b87c-3938f5178265,78f998fb-2bb4-c8bd-c170-fcd899abc905,a62c27e3-86c0-db69-8f04-0ea3074cae7a","Explode",["IsTrap"]],[0,1,2,32,27,"","Projectile_MAG_Barbarian_BrutalLeap","Projectile","Projectile_Jump_Minotaur",["IsJump","AddFallDamageOnLand","HasHighGroundRangeExtension","IgnoreVisionBlock","Stealth","Invisible","CannotTargetCharacter","CannotTargetItems","Temporary"]],[0,1,2,32,47,42,6,7,8,15,"","Projectile_Fireball_Trap_VeryHard","Projectile","Projectile_Fireball_Trap",3,3,["not <b>SavingThrow(Ability.Dexterity, 15)</b>"],["<b>DealDamage(8d6,Fire)</b>"],["<b>DealDamage((8d6)/2,Fire)</b>"],["<b>DealDamage(8d6,Fire)</b>"]],[0,1,2,32,36,21,"","Projectile_MAG_RayOfEnfeeblement","Projectile","Projectile_RayOfEnfeeblement","OncePerRestPerItem",["ActionPoint:1"]],[0,1,2,32,3,28,"","Projectile_LOW_KurwinCoffin_ExplodingBody","Projectile","Projectile_SCL_Distillery_PoisonCloud_Trap",["<b>SwitchDeathType(Explode)</b>","GROUND:<b>CreateSurface(3,3,PoisonCloud)</b>"],"MagicalDamage_External"],[0,1,2,32,5,7,8,"","Projectile_LOW_SorcerousSundries_BookExplosion","Projectile","Projectile_Fireball_FromItem",7,["<b>DealDamage((2d6)/2,Fire,Magical)</b>"],["<b>DealDamage((4d6)/2,Fire,Magical)</b>"]],[0,1,2,32,57,36,13,21,23,31,"","Projectile_MAG_ScorchingRay_Shot","Projectile","Projectile_ScorchingRay_3",3,"OncePerShortRestPerItem","Scorching Ray Shot",["ActionPoint:1"],["73afb4e5-8cfe-4479-95cf-16889597fee3,,","9583ecee-cf6c-4735-86db-7ebf1df15eae,,","de006e3f-70fb-4eb7-a98d-d845d15b20e8,,","50696db7-d931-4734-915d-32d038ba99a5,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"Ranged"],[0,1,2,32,42,8,11,13,"","Projectile_MOO_BalthazarCircle_Explode","Projectile","Projectile_ArrowOfDetonation_Trap",4,["<b>DealDamage(2d6/2,Force,Magical)</b>"],"VFX_Projectile_MOO_BalthazarCircle_Explode_9fad4f9d-7bce-45d0-8383-7fc5bd8192f4","Destabilised Magic"],[0,1,2,32,13,23,28,29,"","Projectile_MAG_RayOfFrost_Staff","Projectile","Projectile_RayOfFrost","Ray of Frost",["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90,,","141f48d9-9615-496a-8737-9240f0dba60d,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"MagicalDamage_External","Aggressive"],[0,1,2,32,3,47,42,9,10,11,13,14,18,27,"","Projectile_MAG_HaHaHat_explosion","Projectile","Projectile_MAG_Radiant_RadiatingOrb_Explosion",["<b>ApplyStatus(HIDEOUS_LAUGHTER,100, 1,,,,not SavingThrow(Ability.Wisdom,13))</b>"],9,9,["<b>Character() and not Ally() and not Self() and IntelligenceGreaterThan(4)</b>"],1,"f346b284-854e-4dd9-b87c-3938f5178265","Radiant Cap","Inflict <b>Radiating Orb</b> in a [1] radius.","Cast",["IsTrap"]],[0,1,2,32,57,3,65,70,11,12,13,14,15,68,21,23,27,33,34,"","Projectile_EPI_Disintegrate_GaleGod","Projectile","Projectile_Disintegrate",9,["<b>DealDamage(10d6+40,Force,Magical)</b>"],3,100,"f533d9a8-58a8-4cd4-b5bc-66e643b58356","Spell_GodGale_GreaterDisintegrate","Power Word: Ruin","Speak a word of disaster into the Galerian Weave, calling forth three beams of pure destruction that each deal [1].",["<b>DealDamage(30d6+120,Force)</b>"],"Spell_Prepare_Utility_Gale_God",["ActionPoint:1"],["dc1cfff3-521b-45ee-8c44-9b39a3cf284b,dc1cfff3-521b-45ee-8c44-9b39a3cf284b,dc1cfff3-521b-45ee-8c44-9b39a3cf284b","ff297706-5691-49d2-ac38-ea112a7af8ae,ff297706-5691-49d2-ac38-ea112a7af8ae,ff297706-5691-49d2-ac38-ea112a7af8ae","32316d3f-a0fa-42ff-9488-95be454dd707,32316d3f-a0fa-42ff-9488-95be454dd707,32316d3f-a0fa-42ff-9488-95be454dd707","48e1a0b5-a8d2-4f7b-967e-9662947a41d2,48e1a0b5-a8d2-4f7b-967e-9662947a41d2,48e1a0b5-a8d2-4f7b-967e-9662947a41d2","53e07d91-4ba4-4f0e-bd2e-8ee041cca5af,,"],["HasVerbalComponent","HasSomaticComponent","IsHarmful","IsSpell","Temporary"],"51b577f9-e8b6-4e2d-aca5-55775a56e916","4ada3f14-e061-423e-aa6d-123a8e32baa1"],[0,1,2,32,6,7,9,13,14,16,43,25,35,"","Projectile_WYR_WyrmRock_StunTrap","Projectile","Projectile_Explosion_Trap",["not <b>SavingThrow(Ability.Constitution, 15)</b>"],["<b>ApplyStatus(WYR_WyrmRock_Stunned, 100, 3)</b>"],["<b>Character() and not Dead() and not Tagged('STEEL_WATCHER') and not Tagged('ACT3_WYR_GORTASH')</b>"],"Stunner","Inflicts <b>Stunned</b>.",["Constitution"],["<b>ApplyStatus(WYR_WyrmRock_Stunned, 100, 3)</b>"],"Control","None"],[0,1,2,32,23,"","Projectile_MAG_FireBolt_Staff","Projectile","Projectile_FireBolt",["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","38cdb41c-2eec-4e03-bb31-83cff0346c35,,","85414f5f-b448-4dda-9370-1b6c4b38b561,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"]],[0,1,2,32,36,68,69,23,27,41,33,"","Projectile_MAG_WhiteSporeCloud","Projectile","Projectile_WhiteSporeCloud","OncePerRest","Action_Prepare_Druid_SpreadingSpores","Action_Loop_Druid_SpreadingSpores",["cc6063ad-e800-4e2d-baee-6620dae744ca,,","59a9ac6e-ece1-4ab7-8c2a-3fbf8961e554,,","446677f9-b1f1-4cad-9f25-e1779bb9be39,,","a0a15c9e-0cbc-4086-90ff-a932c3027a98,,","c7afcdc2-f42d-4aa7-b400-9794ba1ec84b,,"],["Temporary"],["<b>HasStatus('SYMBIOTIC_ENTITY')</b>"],"6381a064-4df7-4818-b111-042e4d4a8408"],[0,1,2,32,36,68,69,23,27,41,33,"","Projectile_MAG_BlackSporeCloud","Projectile","Projectile_BlackSporeCloud","OncePerRest","Action_Prepare_Druid_SpreadingSpores","Action_Loop_Druid_SpreadingSpores",["cc6063ad-e800-4e2d-baee-6620dae744ca,,","59a9ac6e-ece1-4ab7-8c2a-3fbf8961e554,,","446677f9-b1f1-4cad-9f25-e1779bb9be39,,","a0a15c9e-0cbc-4086-90ff-a932c3027a98,,","c7afcdc2-f42d-4aa7-b400-9794ba1ec84b,,"],["Temporary"],["<b>HasStatus('SYMBIOTIC_ENTITY')</b>"],"6381a064-4df7-4818-b111-042e4d4a8408"],[0,1,2,32,36,68,69,23,27,41,33,"","Projectile_MAG_GreenSporeCloud","Projectile","Projectile_GreenSporeCloud","OncePerRest","Action_Prepare_Druid_SpreadingSpores","Action_Loop_Druid_SpreadingSpores",["cc6063ad-e800-4e2d-baee-6620dae744ca,,","59a9ac6e-ece1-4ab7-8c2a-3fbf8961e554,,","446677f9-b1f1-4cad-9f25-e1779bb9be39,,","a0a15c9e-0cbc-4086-90ff-a932c3027a98,,","c7afcdc2-f42d-4aa7-b400-9794ba1ec84b,,"],["Temporary"],["<b>HasStatus('SYMBIOTIC_ENTITY')</b>"],"6381a064-4df7-4818-b111-042e4d4a8408"],[0,1,2,32,42,14,35,"","Projectile_MOO_BookSpikeTrap","Projectile","Projectile_TWN_MasonsGuild_Grating",2,"The iron spikes rises up, piercing anyone standing on the trap, and pushing them back [1].","Piercing"],[0,1,2,32,36,21,"","Projectile_MOO_BloodPotion_Fireball","Projectile","Projectile_Fireball","OncePerRest",["ActionPoint:1"]],[0,1,2,32,36,21,"","Projectile_MOO_BloodPotion_AcidArrow","Projectile","Projectile_AcidArrow_3","OncePerRest",["ActionPoint:1"]],[0,1,2,32,36,21,"","Projectile_MOO_BloodPotion_RayOfSickness","Projectile","Projectile_RayOfSickness_3","OncePerRest",["ActionPoint:1"]],[0,1,2,32,6,7,15,27,"","Projectile_GuidingBolt4_Trap","Projectile","Projectile_GuidingBolt_Trap",["not <b>SavingThrow(Ability.Dexterity, 15)</b>"],["<b>DealDamage(7d6,Radiant,Magical)</b>"," <b>ApplyStatus(GUIDING_BOLT, 100, 2)</b>"],["<b>DealDamage(7d6,Radiant)</b>"],["HasSomaticComponent","HasVerbalComponent","IsSpell","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","IsTrap","ImmediateCast"]],[0,1,2,32,5,27,"","Projectile_MOO_Jump_Ghoul_Flying","Projectile","Projectile_Jump_Ghoul_Flying",20,["IsJump","HasHighGroundRangeExtension","IgnoreVisionBlock","RangeIgnoreVerticalThreshold","CannotTargetCharacter","CannotTargetItems","ChasmRecovery"]],[0,1,2,32,57,36,21,"","Projectile_MAG_LightningArrow_Shot","Projectile","Projectile_LightningArrow_4",4,"OncePerRestPerItem",["ActionPoint:1"]],[0,1,2,32,36,27,"","Projectile_LOW_RayOfSickness_Trap","Projectile","Projectile_RayOfSickness_5","None",["HasVerbalComponent","IsSpell","HasHighGroundRangeExtension","HasSomaticComponent","RangeIgnoreVerticalThreshold","IsHarmful","ImmediateCast","IsTrap"]],[0,1,2,32,13,14,15,27,"","Projectile_LOW_RamazithArtilleryFlavour_Trap","Projectile","Projectile_Fireball_Trap","Fire Shot","Shoot a bright flame that explodes upon contact, torching everything in the vicinity.",["<b>DealDamage(14d6,Fire)</b>"],["RangeIgnoreVerticalThreshold","IsHarmful","CanAreaDamageEvade","HasSomaticComponent","RangeIgnoreTargetBounds","RangeIgnoreSourceBounds","IsTrap","ImmediateCast"]],[0,1,2,32,3,7,13,"","Projectile_WYR_Circus_MumblingStaff_FireBolt","Projectile","Projectile_FireBolt",["GROUND:<b>SurfaceChange(Ignite)</b>","GROUND:<b>SurfaceChange(Melt)</b>","GROUND:<b>IF(RollDieAgainstDC(DiceType.d20,20))</b>:<b>CreateExplosion(Projectile_Fireball)</b>"],["<b>DealDamage(1d10,Fire,Magical)</b>"],"Firebolt?"],[0,1,2,32,57,36,21,"","Projectile_MAG_IceKnife_MonkGloves","Projectile","Projectile_IceKnife_3",3,"OncePerRestPerItem",["ActionPoint:1"]],[0,1,2,32,57,36,21,"","Projectile_MAG_GuidingBolt_MonkGloves","Projectile","Projectile_GuildingBolt_4",4,"OncePerRestPerItem",["ActionPoint:1"]],[0,1,2,32,5,11,27,"","Projectile_END_Levitate_Emperor","Projectile","Projectile_Levitate_Mindflayer",100,"305906c1-b685-492b-a442-87934e24922e",["IsJump","HasHighGroundRangeExtension","IgnoreVisionBlock","CannotTargetCharacter","CannotTargetItems"]],[0,1,2,32,13,"","Projectile_CONS_Elixir_Blood_Human_Destroy","Projectile","Projectile_Potion_Destroy_Healing","Elixir of Human Versatility"],[0,1,2,32,13,"","Projectile_CONS_Elixir_Blood_Gnome_Destroy","Projectile","Projectile_Potion_Destroy_Healing","Elixir of Gnomish Ingenuity"],[0,1,2,32,13,"","Projectile_CONS_Elixir_Blood_HalfOrc_Destroy","Projectile","Projectile_Potion_Destroy_Healing","Elixir of Half-Orcish Fury"],[0,1,2,32,13,"","Projectile_CONS_Elixir_Blood_Halfling_Destroy","Projectile","Projectile_Potion_Destroy_Healing","Elixir of Halfling Luck"],[0,1,2,32,7,11,39,"","Projectile_LOW_EastwayWizards_FireBolt","Projectile","Projectile_FireBolt",["<b>DealDamage(1,Fire,Magical)</b>"],"241dc8dd-537c-4324-a877-a12662bf671d","Spell_Cast_EastwayWizards_Fire_FireBolt_L1to3"],[0,1,2,32,7,11,39,"","Projectile_LOW_EastwayWizards_RayOfFrost","Projectile","Projectile_RayOfFrost",["<b>DealDamage(1,Cold,Magical)</b>","<b>ApplyStatus(RAY_OF_FROST,100,1)</b>"],"acd6f673-489a-4dec-9016-8331c83a9188","Spell_Cast_EastwayWizards_Ice_RayOfFrost_L0"],[0,1,2,32,3,4,5,47,85,42,6,7,8,10,74,89,11,13,14,45,15,71,18,92,23,27,28,66,"","ProjectileStrike_END_HighHallInterior_NautiloidStrike","ProjectileStrike","ProjectileStrike_TUT_UpperDeck_Bombardment",["GROUND:<b>SurfaceChange(Ignite)</b>","GROUND:<b>SurfaceChange(Melt)</b>","<b>Force(6, TargetToEntity)</b>","<b>ApplyStatus(BURNING, 100, 1)</b>"],"-1",0,5,"Incinerate",5,["not <b>SavingThrow(Ability.Dexterity, 16)</b>"],["<b>DealDamage(5d6,Force,Magical)</b>","<b>DealDamage(5d6,Fire,Magical)</b>"],["<b>DealDamage((5d6)/2,Force,Magical)</b>","<b>DealDamage((5d6)/2,Fire,Magical)</b>"],1,0,30,"e8301dc4-e383-47b0-91f3-9734f0102975","Nautiloid Airstrike","A devastating airstrike from the illithid nautiloid in a [3] radius.",["<b>DealDamage(5d6,Force)</b>","<b>DealDamage(5d6,Fire)</b>","<b>Distance(5)</b>"],["<b>DealDamage(5d6,Force)</b>","<b>DealDamage(5d6,Fire)</b>"],"Dexterity","Cast","EdgeCenter",["8b8bb757-21ce-4e02-a2f3-97d55cf2f90b,,","6606c30b-be1c-4f17-ae6b-1a591c80b18c,366693ee-d97f-4294-a4dd-a2145ddc4e6a,9f2d32b9-529a-4b75-b3df-6e1ae1395280","f4ac302b-1569-404f-bd52-1fe443e265df,479ee5da-2967-41e1-b7d1-a94e864a5f25,79323098-edb3-4993-ba50-9b5f705e9878","e8a5c57f-855b-4227-acaa-11e8ce8d7d64,b5cb923d-0c08-4c20-89a9-44b9bf98c6cb,6282d127-0c06-4365-9d53-6f32ef350127","7bb52cd4-0b1c-4926-9165-fa92b75876a3,,","2b81c18b-9698-4262-a623-932c2bb1296d,ecbf9949-3b33-432c-b735-e47aaed0924a,e71a7c08-fdc1-4a0b-9a90-1c793c58553c","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],["AddFallDamageOnLand","IsEnemySpell","RangeIgnoreVerticalThreshold","IsHarmful","CanAreaDamageEvade"],"MagicalDamage_External","41de42e1-56d0-4336-8b44-99fc38281525"],[0,1,2,57,3,4,5,47,42,6,7,10,74,89,90,11,12,13,18,92,23,27,28,25,"","ProjectileStrike_END_HighHallInterior_IntDevPodStrike","ProjectileStrike",1,["GROUND:<b>Spawn(03e27be2-fbbf-4724-80a7-d41d91528258, ,END_NAUTILOID_POD_INTELLECT_DEVOURER)</b>","GROUND:<b>Spawn(880c04e1-ed67-4233-b10f-163d007c8083, ,END_NAUTILOID_POD_INTELLECT_DEVOURER)</b>","GROUND:<b>Spawn(880c04e1-ed67-4233-b10f-163d007c8083, ,END_NAUTILOID_POD_INTELLECT_DEVOURER)</b>","<b>Force(6, TargetToEntity)</b>"],"-1",0,2,2,["not <b>SavingThrow(Ability.Dexterity, 16)</b>"],["<b>DealDamage(5d6,Bludgeoning)</b>"],1,0,30,"348013df-7958-4ca9-ac9f-80337e054bee","1c2c6375-d1c5-447d-8c92-a21e77ed9f9e","","Intellect Devourer Reinforcements","Cast","EdgeCenter",["8b8bb757-21ce-4e02-a2f3-97d55cf2f90b,,","6606c30b-be1c-4f17-ae6b-1a591c80b18c,366693ee-d97f-4294-a4dd-a2145ddc4e6a,9f2d32b9-529a-4b75-b3df-6e1ae1395280","f4ac302b-1569-404f-bd52-1fe443e265df,479ee5da-2967-41e1-b7d1-a94e864a5f25,79323098-edb3-4993-ba50-9b5f705e9878","e8a5c57f-855b-4227-acaa-11e8ce8d7d64,b5cb923d-0c08-4c20-89a9-44b9bf98c6cb,6282d127-0c06-4365-9d53-6f32ef350127","7bb52cd4-0b1c-4926-9165-fa92b75876a3,,","2b81c18b-9698-4262-a623-932c2bb1296d,ecbf9949-3b33-432c-b735-e47aaed0924a,e71a7c08-fdc1-4a0b-9a90-1c793c58553c","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],["IsHarmful","CanAreaDamageEvade","RangeIgnoreVerticalThreshold"],"PhysicalDamage","Summon"],[0,1,2,32,3,13,14,45,15,71,"","ProjectileStrike_END_HighHallInterior_IntDevMindFlayerPodStrike","ProjectileStrike","ProjectileStrike_END_HighHallInterior_IntDevPodStrike",["GROUND:<b>Spawn(03e27be2-fbbf-4724-80a7-d41d91528258, ,END_NAUTILOID_POD_INTELLECT_DEVOURER_DETONATOR)</b>","GROUND:<b>Spawn(03e27be2-fbbf-4724-80a7-d41d91528258, ,END_NAUTILOID_POD_INTELLECT_DEVOURER_DETONATOR)</b>","GROUND:<b>Spawn(c18cc156-f016-4505-9eb7-e09d29183f3b, ,END_NAUTILOID_POD_MIND_FLAYER)</b>","<b>Force(6, TargetToEntity)</b>"],"Mind Flayer Reinforcements","A pod containing a mind flayer plummets from the nautiloid, creating a blast in a [2] radius and spawning one mind flayer and two intellect devourers. ",["<b>DealDamage(5d6,Bludgeoning)</b>","<b>Distance(2)</b>"],["<b>DealDamage(5d6,Bludgeoning)</b>"],"Dexterity"],[0,1,2,32,3,11,13,"","ProjectileStrike_END_HighHallInterior_MindFlayerPodStrike","ProjectileStrike","ProjectileStrike_END_HighHallInterior_IntDevPodStrike",["GROUND:<b>Spawn(c18cc156-f016-4505-9eb7-e09d29183f3b, ,END_NAUTILOID_POD_MIND_FLAYER)</b>"],"1c2c6375-d1c5-447d-8c92-a21e77ed9f9e","Mind Flayer Reinforcements"],[0,1,2,32,89,23,"","ProjectileStrike_END_HighHallInterior_NautiloidWarningStrike","ProjectileStrike","ProjectileStrike_END_HighHallInterior_NautiloidStrike",2,["8b8bb757-21ce-4e02-a2f3-97d55cf2f90b,,","6606c30b-be1c-4f17-ae6b-1a591c80b18c,366693ee-d97f-4294-a4dd-a2145ddc4e6a,9f2d32b9-529a-4b75-b3df-6e1ae1395280","f4ac302b-1569-404f-bd52-1fe443e265df,479ee5da-2967-41e1-b7d1-a94e864a5f25,79323098-edb3-4993-ba50-9b5f705e9878","e8a5c57f-855b-4227-acaa-11e8ce8d7d64,b5cb923d-0c08-4c20-89a9-44b9bf98c6cb,6282d127-0c06-4365-9d53-6f32ef350127","7bb52cd4-0b1c-4926-9165-fa92b75876a3,,","2b81c18b-9698-4262-a623-932c2bb1296d,ecbf9949-3b33-432c-b735-e47aaed0924a,e71a7c08-fdc1-4a0b-9a90-1c793c58553c","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"]],[0,1,2,32,3,5,47,7,8,74,89,11,27,"","ProjectileStrike_IRN_IronThrone_FloodStrike","ProjectileStrike","ProjectileStrike_TUT_UpperDeck_Bombardment",["GROUND:<b>CreateSurface(6,3,Water)</b>"],12,6,["<b>DealDamage(3d6,Cold,Magical)</b>"," <b>Force(8)</b>"],["<b>DealDamage((3d6)/2,Cold,Magical)</b>"],0,0,"f5d9ebda-56f7-4158-81ce-cd78dc18bf79",["AddFallDamageOnLand","IsTrap"]],[0,1,2,32,3,89,90,"","ProjectileStrike_IRN_IronThrone_FallingRubble","ProjectileStrike","ProjectileStrike_Placeholder",["GROUND:<b>Spawn(717a063b-9517-438e-8804-865ee259f320,,)</b>"],3,"29a79c79-64ab-45f0-88f5-9d4f94bef4cb"],[0,1,2,32,4,42,6,7,8,9,10,89,11,12,13,15,28,"","ProjectileStrike_WYR_LightningStrike","ProjectileStrike","ProjectileStrike_Placeholder","-1",3,["not <b>SavingThrow(Ability.Dexterity, 18)</b>"],["<b>DealDamage(6d10,Lightning,Magical)</b>"],["<b>DealDamage((6d10)/2,Lightning,Magical)</b>"],["not (<b>Tagged('DRAGON') and Tagged('UNDEAD'))</b>"],1,12,"402baa99-c237-4a24-b6e2-295c162f5c08","Spell_Conjuration_CallLightning","Call Lightning",["<b>DealDamage(6d10,Lightning)</b>"],"MagicalDamage_Electric"],[0,1,2,57,86,3,4,5,47,85,42,137,87,10,88,74,89,138,11,18,92,27,"","ProjectileStrike_END_BrainBattle_NautiloidStrike","ProjectileStrike",1,["CanNotUse"],["GROUND:<b>Spawn(796fc705-b7e8-4bd3-b3c8-915c8c1a86b1)</b>"],"-1",0,22,"None",0,9,"Yes",1,1,0,1,"Yes","f346b284-854e-4dd9-b87c-3938f5178265","Cast","Normal",["CanAreaDamageEvade","RangeIgnoreVerticalThreshold","ImmediateCast"]],[0,1,2,32,3,5,47,42,137,9,10,89,138,139,11,13,14,15,92,27,"","ProjectileStrike_WYR_LightningStrike_Spawner","ProjectileStrike","ProjectileStrike_Placeholder",["GROUND:<b>Spawn(0febed02-0ae8-4076-9f7b-65bff3b4121d,,)</b>"],99,16,16,3,["not <b>Character()</b>"],1,4,"No",0,"f346b284-854e-4dd9-b87c-3938f5178265","Bout of Storms","Ansur calls down tines of lightning that strike all around him in wild erratic patterns.",["<b>DealDamage(6d10,Lightning)</b>"],"Normal",["IsTrap","ImmediateCast"]],[0,1,2,32,3,5,47,42,"","ProjectileStrike_LOW_WaterQueensHouse_UmberleeWrath","ProjectileStrike","ProjectileStrike_IRN_IronThrone_FloodStrike",["GROUND:<b>CreateSurface(6,3,Water)</b>","<b>ApplyStatus(WET,100, 3)</b>"],12,6,3],[0,1,2,32,36,6,7,41,"","Rush_InfernalTrample","Rush","Rush_Primal_Stampede","OncePerShortRest",["not <b>SavingThrow(Ability.Dexterity, 13)</b>"],["<b>DealDamage(1d4,Fire,Magical)</b>"],["<b>CanUseWeaponActions()</b>"]],[0,1,2,32,3,5,94,6,7,8,12,13,14,45,15,16,43,71,23,98,35,31,"","Rush_MAG_ZephyrFlash","Rush","Rush_SpringAttack",["GROUND:<b>SurfaceClearLayer(Cloud)</b>"],12,60000,["not <b>SavingThrow(Ability.Dexterity, 15)</b>"],["<b>DealDamage(6d8, Thunder,Magical)</b>","<b>ApplyStatus(BLEEDING, 100, 3)</b>","<b>Force(2)</b>"],["<b>DealDamage(3d8, Thunder,Magical)</b>"],"Action_Mag_ZephyrFlash","Zephyr Flash","Rush forward, creating an air vortex that blasts foes and possibly inflicts <b>Bleeding</b>. ",["<b>DealDamage(6d8, Force)</b>"],["<b>DealDamage(6d8, Thunder)</b>"],["Dexterity"],["<b>ApplyStatus(BLEEDING, 100, 3)</b>"],"f762efbb-f8f1-493e-b248-2de1567b4bd2",["8b8bb757-21ce-4e02-a2f3-97d55cf2f90b,,","7bfeb9dd-1348-45c7-bff9-ed42f8cd43a1,,","b780092c-cc12-43d5-b60e-acbac3fdceed,,","abbeb7de-2128-4b16-95e5-7b9d7b1af2f9,,","7bb52cd4-0b1c-4926-9165-fa92b75876a3,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],0,"Thunder","Melee"],[0,1,2,32,7,15,43,"","Rush_LOW_RaphaelBoar_Rush","Rush","Rush_Rush_Boar",["<b>DealDamage(1d6+UnarmedMeleeAbilityModifier,Slashing)</b>","TARGET:<b>IF(not SavingThrow(Ability.Strength,SourceSpellDC()))</b>:<b>ApplyStatus(HAMSTRING,100,2)</b>"],["<b>DealDamage(1d6+UnarmedMeleeAbilityModifier,Slashing)</b>"],["<b>ApplyStatus(HAMSTRING,100,2)</b>"]],[0,1,2,32,36,6,7,8,12,13,14,45,16,41,33,"","Rush_MAG_Barbarian_Armor_Trample","Rush","Rush_Primal_Stampede","OncePerTurn",["not <b>SavingThrow(Ability.Strength, ManeuverSaveDC())</b>"],["<b>Force(3)</b>"],["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL, 100, 0)</b>"],"Action_Monster_Minotaur_Charge","Bull Rush","Charge forward and possibly knock your foes back [1].",["<b>Distance(3)</b>"],["Strength"],["<b>CanUseWeaponActions()</b>"],"9342eaf4-6a20-44c6-a740-863b0f9c2475"],[0,1,2,36,3,12,13,14,43,39,99,18,23,27,28,29,41,33,34,31,"","Shout_MOO_Nightsong_RadiantConsumption","Shout","OncePerCombat",["<b>ApplyStatus(SELF,MOO_NIGHTSONG_MOONBEAM,100,10)</b>","AI_ONLY:<b>ApplyStatus(AI_HELPER_BUFF,100,4)</b>"],"GenericIcon_DamageType_Radiant","Lunar Blessing","Surround yourself in a pillar of Selûne's light, inflicting <b>Moonbeam</b> on nearby foes.",["<b>ApplyStatus(MOO_NIGHTSONG_MOONBEAM,100,1)</b>"],"CrSpell_Cast_Nightsong_LunarBlessing","CrSpell_Impact_Nightsong_LunarBlessing","Cast",["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","39daf365-ec06-49a8-81f3-9032640699d7,,","5c400e93-0266-499c-a2e1-75d53358460f,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],["HasSomaticComponent"],"MagicalDamage_External","Aggressive",["not <b>HasStatus('MOO_NIGHTSONG_MOONBEAM') and not HasStatus('LOW_RAMAZITHSTOWER_NIGHTSONG_GLOBE_FUNCTIONAL_AURA')</b>"],"3044bca0-7b0e-4d65-9b15-f586f5d58388","2b656a6d-9180-484f-8a75-c37afb857d97","DontChange"],[0,1,2,3,9,12,13,18,21,27,"","Shout_SHA_Nightsong_StartKissCombat","Shout",["AI_ONLY:TARGET:<b>ApplyStatus(AI_STATUS_FAKE,100)</b>"],["<b>Self()</b>"],"GenericIcon_Intent_Utility","%%% DEPRECATED - Nightsong","Cast",["ActionPoint:0"],["ImmediateCast"]],[0,1,2,32,57,58,36,3,47,9,12,13,14,15,43,21,27,"","Shout_SHA_Skeleton_DarkCelebration","Shout","Shout_ActionSurge",4,"Necromancy","OncePerTurn",["<b>IF(not Tagged('SKELETON'))</b>:<b>DealDamage(1d4,Necrotic,Magical)</b>"," <b>IF(Tagged('SKELETON'))</b>:<b>ApplyStatus(SHA_SKELETON_CRUELTY, 100, 4)</b>"],4,["<b>Character() and not Self()</b>"],"GenericIcon_DamageType_Necrotic","Dark Celebration","Wound nearby foes and heal nearby skeletons.",["<b>DealDamage(1d4,Necrotic)</b>","<b>RegainHitPoints(1d4)</b>"],["<b>ApplyStatus(SHA_SKELETON_CRUELTY,100,4)</b>"],["BonusActionPoint:1"],["IsSpell","IsEnemySpell","HasVerbalComponent","IsHarmful"]],[0,1,2,32,58,36,3,47,9,12,13,14,45,43,39,99,21,23,27,33,34,"","Shout_SHA_Justiciar_UmbralFury","Shout","Shout_ActionSurge","Necromancy","OncePerCombat",["AI_IGNORE:GROUND:<b>ApplyStatus(SELF,SHA_JUSTICIAR_UMBRAL_FORM,100,-1)</b>","AI_ONLY:GROUND:<b>ApplyStatus(SELF,AI_HELPER_BUFF_LARGE,100,-1)</b>","<b>RemoveStatus(BURNING)</b>"],14,["<b>Item()</b>"],"PassiveFeature_Generic_Darkness","Subsume Shadow","The Justiciar assumes their <b>Umbral Form</b>.",["<b>DealDamage(1d8,Necrotic)</b>","<b>DealDamage(1d6,Necrotic)</b>"],["<b>ApplyStatus(SHA_UMBRAL_FORM,100,1)</b>"],"CrSpell_Cast_UmbralFury","CrSpell_Impact_UmbralFury",["BonusActionPoint:1"],["590a3527-9e4d-4c89-b0d3-859be9220f0b,,","31f22eab-d802-46f6-94c6-9ccc05e0f94b,,","0bbb46f3-5ef7-427b-9759-18754930e73f,,","b2efd182-ac85-4fc2-ada6-eac2c0c6f106,,","8a38f1c4-7ab2-4e70-9ca9-024c3af8a47e,,","329f7ea0-3c1f-4ba3-9950-5fdd459c7380,,"],["IsEnemySpell"],"afb49bda-c6b8-4995-991e-71652e272693","971398d8-f13c-4243-8e2b-1866d248e460"],[0,1,2,55,13,18,23,27,"","Shout_MOO_SendingStone_CallJaheira","Shout","Target_MOO_SendingStone_Beacon","%%% Call Jaheira","Cast",["dd86aa43-8189-4d9f-9a5c-454b5fe4a197,,","bcc3b0d9-f04f-4448-aab0-e0ad641167cc,,"],["ImmediateCast"]],[0,1,2,58,86,7,9,12,13,14,68,69,39,99,17,18,21,23,25,27,29,83,33,34,84,101,30,31,"","Shout_SHA_GolemBell_Summon","Shout","Necromancy",["GrantsResources","UseAsSupportingActionOnly","CanNotUse"],["<b>UseActionResource(ActionPoint, 1)</b>"],["<b>Self()</b>"],"GenericIcon_Intent_Summon","Summon Golem","As long as you are in Shar's Temple, call forth a golem to fight alongside you.","Spell_Prepare_Summon_Golem_Bell_L0","Spell_Prepare_Summon_Golem_Bell_Loop_L0","Spell_Cast_Summon_Golem_Bell_L0","Spell_Impact_Summon_Golem_Bell_L0","Cast","Cast",["ActionPoint:1"],["5e57443f-284e-47b2-915e-5b6417db269c,,","925779e7-8bf6-4d56-8c4d-42c3bc01c60c,,","50398f4e-dd82-4d6a-ad43-aedd578543d9,,","1c343e00-7e6c-4f53-b588-074a3cdb9c7d,,","5bcdefbb-2194-46c2-ac77-0b2d8472a5f7,,","5fdb66be-7506-411a-a7ea-c4783288aac8,,"],"Utility",["HasVerbalComponent","HasSomaticComponent"],"Aggressive","Combat","ae569a16-41db-43ee-94cf-770e101841cd","a9894b81-aeab-49c7-a457-b0e0a6d8376f","054f894c-52e9-476b-bee2-f4d388ad318c","Ignore","Small","DontChange"],[0,1,2,86,104,12,13,14,18,23,27,"","Shout_GLO_Pixie_InspectMoonlantern","Shout",["CanNotUse"],"Yes","Action_InspectMoonLantern","Inspect Moonlantern","Looks like there is something inside the lantern. Inspect it closely.","Cast",["dd86aa43-8189-4d9f-9a5c-454b5fe4a197,,","bcc3b0d9-f04f-4448-aab0-e0ad641167cc,,"],["ImmediateCast"]],[0,1,2,32,36,3,9,12,13,14,45,43,21,25,40,41,"","Shout_MAG_ChargedLightning_Discharge","Shout","Shout_ActionSurge","OncePerTurn",["<b>ApplyStatus(MAG_CHARGED_LIGHTNING_DISCHARGE,100,3)</b>","<b>SetStatusDuration(MAG_CHARGED_LIGHTNING,-2,Add)</b>"],["<b>Self()</b>"],"GenericIcon_DamageType_Lightning","Discharge Voltage","Consume [1] of your <b>Lightning Charges</b> to deal additional damage on your strikes.",["2","<b>DealDamage(1d4,Lightning)</b>"],["<b>ApplyStatus(MAG_CHARGED_LIGHTNING_DISCHARGE,100,3)</b>"],["BonusActionPoint:1"],"Buff","Intent",["<b>HasStatus('MAG_CHARGED_LIGHTNING') and not HasStatus('MAG_CHARGED_LIGHTNING_DISCHARGE')</b>"]],[0,1,2,58,36,3,47,85,9,12,13,14,45,15,43,18,21,23,25,26,27,29,33,34,31,"","Shout_DEPRECATED_HAV_PsychicPlague","Shout","None","OncePerTurn","<b>DealDamage(1d4,Psychic,Magical)</b>;<b>ApplyStatus(SELF,HAV_PSYCHIC_BOON,100,2)</b>",8,"Psychic","<b>Enemy() and not Dead() and not Tagged('ACT2_HAV_ISOBEL') and not Item()</b>","","%%% Psychic Plague","%%% Deal [1] damage to enemies around you. For each enemy, gain a status.","<b>DealDamage(1d4,Psychic)</b>","<b>DealDamage(1d4,Psychic)</b>","<b>ApplyStatus(HAV_PSYCHIC_BOON,100,2)</b>","Cast","BonusActionPoint:1","5e57443f-284e-47b2-915e-5b6417db269c,,;7570969c-2639-4298-810d-7fed13ad0bbf,,;af4a74d1-a4cb-4ec9-9811-6c69fd6ee510,,;26c2cc48-104a-4366-ac09-7b512db4c639,,;5bcdefbb-2194-46c2-ac77-0b2d8472a5f7,,;,,;,,;,,;,,","Damage","None","IsEnemySpell;HasVerbalComponent;HasSomaticComponent;IsHarmful","Aggressive","4c525a3b-17d2-4636-a26f-6cf8282eb879","2ca60442-a034-4da4-ac6d-52954c231b20","DontChange"]])