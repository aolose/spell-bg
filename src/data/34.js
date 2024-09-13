export default [{"_flag":"","Name":"Projectile_AiHelper_BlackHole","SpellType":"Projectile","Using":"Projectile_AI_HELPERS","SpellProperties":["<b>ApplyStatus(TAD_BLACK_HOLE_SLOW,100,1)</b>","<b>Force(-3)</b>"],"AreaRadius":6,"ExplodeRadius":6},{"_flag":"","Name":"Projectile_AiHelper_Fly_SkeletalDragon","SpellType":"Projectile","Using":"Projectile_AI_HELPERS","SpellProperties":["AI_ONLY:<b>IF(Enemy())</b>:<b>DealDamage(1,Force,Magical)</b>"],"TargetRadius":18,"AreaRadius":12,"ExplodeRadius":12},{"_flag":"","Name":"Projectile_AiHelper_KiResonation_Blast","SpellType":"Projectile","Using":"Projectile_AI_HELPERS","ExplodeRadius":5,"SpellRoll":["<b>Attack(AttackType.RangedWeaponAttack)</b>"],"SpellSuccess":["<b>DealDamage(1,Force)</b>","<b>IF(Self())</b>:<b>DealDamage(3d6, Force,Magical)</b>"],"TargetConditions":["not <b>Dead()</b>"]},{"_flag":"","Name":"Projectile_Sunflash","SpellType":"Projectile","Using":"Projectile_Fireball","SpellProperties":["<b>IF(Tagged('STEEL_WATCHER'))</b>:<b>ApplyStatus(SUNFLASHED,100,2)</b>","<b>RemoveStatus(BULWARK_MODE)</b>"],"AreaRadius":6,"ExplodeRadius":6,"SpellRoll":["not <b>SavingThrow(Ability.Constitution,16)</b>"],"SpellSuccess":["<b>ApplyStatus(BLINDNESS,100,10)</b>"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL, 100, 0)</b>"],"TargetConditions":["<b>Character()</b>"],"Trajectories":"63abe862-138f-40e0-8564-05a7fd281b50","DisplayName":"Flashblinder","Description":"Fling a Flashblinder bomb that <b>Blinds</b> foes.","DescriptionParams":["<b>Distance(6)</b>"],"TooltipAttackSave":["Constitution"],"UseCosts":["BonusActionPoint:1"],"VerbalIntent":"Debuff","SpellFlags":["IsHarmful","IgnoreSilence"],"DamageType":"None"},{"_flag":"","Name":"Projectile_Shadowblend_Effect","SpellType":"Projectile","Using":"Projectile_MainHandAttack","Trajectories":"78c0719c-7b8b-4eaa-941b-e5e6b25e6616"},{"_flag":"","Name":"Projectile_Shadowblend_Effect_End","SpellType":"Projectile","Using":"Projectile_Shadowblend_Effect","Trajectories":"3f3b559d-905c-4d3c-82b9-db613237d17d"},{"_flag":"","Name":"Projectile_Wraith_Douse_Technical","SpellType":"Projectile","SpellProperties":["GROUND:<b>SurfaceChange(Douse)</b>"],"TargetFloor":"-1","ExplodeRadius":8,"Trajectories":"f346b284-854e-4dd9-b87c-3938f5178265","CastTextEvent":"Cast","SpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","7e67bfd0-2fc2-4d10-bed5-cfda9e660de5,,","eb054308-7fce-4b85-bf4c-7a0031fda7ac,,","0b0dc35b-4953-45c0-a9eb-8d3fef5e798a,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","b2e9c771-3497-444c-b360-23b4441985a1,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"HitAnimationType":"None","SpellSoundMagnitude":"None","Sheathing":"Ranged"},{"_flag":"","Name":"Projectile_CrystalWall_Buff","SpellType":"Projectile","Using":"Projectile_AirBlast_Elemental_Air","SpellProperties":["<b>ApplyStatus(CRYSTALSKIN,100,2)</b>"],"AreaRadius":3,"ExplodeRadius":3,"TargetConditions":["<b>Character() and not (Tagged('DRAGON') or Tagged('HIT_PROXY'))</b>"],"Trajectories":"5409730e-fa46-4958-8317-5fbfdbe34040","DisplayName":"Crystalline Mist","Description":"Grant nearby creatures <b>Crystal Skin</b>.","TooltipStatusApply":["<b>ApplyStatus(CRYSTALSKIN,100,2)</b>"]},{"_flag":"","Name":"Projectile_TRAPS","SpellType":"Projectile","Using":"Projectile_Fireball"},{"_flag":"","Name":"Projectile_LightningBolt_Trap","SpellType":"Projectile","Using":"Projectile_ChainLightning","SpellRoll":["not <b>SavingThrow(Ability.Dexterity, 15)</b>"],"SpellSuccess":["<b>DealDamage(5d8,Lightning,Magical)</b>"],"SpellFail":["<b>DealDamage((5d8)/2,Lightning,Magical)</b>"],"Trajectories":"491e0a36-d709-4825-a081-c6b7cbaa4775","DisplayName":"Lightning Bolt Trap","Description":"Create a trap that goes off when an enemy crosses it. Lightning engulfs them.","TooltipDamageList":["<b>DealDamage(5d8,Lightning)</b>"],"SpellFlags":["HasHighGroundRangeExtension","IsSpell","IsTrap","IsHarmful","ImmediateCast","CanAreaDamageEvade"]},{"_flag":"","Name":"Projectile_ChainLightning_Trap","SpellType":"Projectile","Using":"Projectile_ChainLightning","SpellRoll":["not <b>SavingThrow(Ability.Dexterity, 15)</b>"],"SpellSuccess":["<b>DealDamage(10d8,Lightning,Magical)</b>","<b>SpawnExtraProjectiles(Projectile_ChainLightning_Explosion_Trap)</b>"],"SpellFail":["<b>DealDamage((10d8)/2,Lightning,Magical)</b>","<b>SpawnExtraProjectiles(Projectile_ChainLightning_Explosion_Trap)</b>"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","HasHighGroundRangeExtension","IsSpell","IsTrap","ImmediateCast"]},{"_flag":"","Name":"Projectile_ChainLightning_Explosion_Trap","SpellType":"Projectile","Using":"Projectile_ChainLightning_Explosion","SpellRoll":["not <b>SavingThrow(Ability.Dexterity, 15)</b>"],"TargetConditions":["not <b>Self() and not Dead() and Character()</b>"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","HasHighGroundRangeExtension","IsSpell","IsTrap","ImmediateCast"]},{"_flag":"","Name":"Projectile_Disintegrate_Trap","SpellType":"Projectile","Using":"Projectile_Disintegrate","SpellRoll":["not <b>SavingThrow(Ability.Dexterity, 15)</b>"],"TargetConditions":["<b>Character() and not Dead()</b> "],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsHarmful","IsSpell","IsTrap","ImmediateCast"]},{"_flag":"","Name":"Projectile_ALCHEMY_PROJECTILES","SpellType":"Projectile","Using":"Projectile_AlchemistFire","Trajectories":"c8a75108-1413-4f64-bba7-dbd0cf8800a5,ffe45127-be2b-47ab-b434-c9a7e2906027,5da23a33-164c-4769-8056-33ebc0cd4000","PrepareSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3","PrepareLoopSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3_Loop","CastSound":"Action_Cast_Item_SorcSunTome_ArtistryOfWar"},{"_flag":"","Name":"Projectile_ALCH_Oil_Combustion_Explosion","SpellType":"Projectile","Using":"Projectile_Fireball_Trap","SpellProperties":["GROUND:<b>SurfaceChange(Ignite)</b>","GROUND:<b>SurfaceChange(Melt)</b>","<b>DealDamage(3d6,Fire)</b>"],"TargetRadius":4,"AreaRadius":4,"ExplodeRadius":4,"TooltipDamageList":["<b>DealDamage(3d6,Fire)</b>"]},{"_flag":"","Name":"Projectile_ALCH_Solution_Grenade_Light","SpellType":"Projectile","Using":"Projectile_AlchemistFire","SpellProperties":["GROUND:<b>Summon(2064328c-a090-454f-b3b8-b488bbe64567, 10,,,,DANCING_LIGHTS)</b>"],"DisplayName":"Hearthlight Bomb","Description":"Illuminates [1] radius.","DescriptionParams":["<b>Distance(9)</b>"],"SpellFlags":["DisplayInItemTooltip"]},{"_flag":"","Name":"Projectile_ALCH_Solution_Grenade_Web","SpellType":"Projectile","Using":"Projectile_AlchemistFire","SpellProperties":["GROUND:<b>CreateSurface(3,10,Web)</b>"],"DisplayName":"Web Grenade","Description":"Explodes into a tangly mess that <b>Enwebs</b> creatures caught within.","PrepareSound":"Projectiles_Grn_Prepare_WebGrenade","PrepareLoopSound":"Projectiles_Grn_Loop_WebGrenade","CastSound":"Projectiles_Grn_Cast_WebGrenade"},{"_flag":"","Name":"Projectile_Potion_Destroy_Remedy","SpellType":"Projectile","Using":"Projectile_Potion_Destroy_Antitoxin","SpellProperties":["<b>ApplyStatus(ALCH_POTION_REMEDY, 100, 1)</b>"],"Trajectories":"26c20c57-bdf8-4bc1-99ec-e8582a04daef,a4ea97d3-83eb-6bb5-fda7-d784160dc836","DisplayName":"Remedial Potion","VerbalIntent":"Utility"},{"_flag":"","Name":"Projectile_Potion_Destroy_Flying","SpellType":"Projectile","Using":"Projectile_Potion_Destroy_Antitoxin","SpellProperties":["<b>ApplyStatus(ALCH_POTION_FLYING, 100, 10)</b>"],"Trajectories":"26c20c57-bdf8-4bc1-99ec-e8582a04daef,a4ea97d3-83eb-6bb5-fda7-d784160dc836","DisplayName":"Potion of Flying","VerbalIntent":"Utility"},{"_flag":"","Name":"Projectile_Potion_Destroy_Featherfall","SpellType":"Projectile","Using":"Projectile_Potion_Destroy_Antitoxin","SpellProperties":["<b>ApplyStatus(FEATHER_FALL, 100, 10)</b>"],"Trajectories":"26c20c57-bdf8-4bc1-99ec-e8582a04daef,a4ea97d3-83eb-6bb5-fda7-d784160dc836","DisplayName":"Potion of Feather Fall","VerbalIntent":"Utility"},{"_flag":"","Name":"Projectile_Potion_Destroy_Jump","SpellType":"Projectile","Using":"Projectile_Potion_Destroy_Antitoxin","SpellProperties":["<b>ApplyStatus(ALCH_POTION_JUMP, 100, 10)</b>"],"Trajectories":"26c20c57-bdf8-4bc1-99ec-e8582a04daef,a4ea97d3-83eb-6bb5-fda7-d784160dc836","DisplayName":"Potion of Glorious Vaulting","VerbalIntent":"Utility"},{"_flag":"","Name":"Projectile_Solution_Oil_AttackBuff_Destroy","SpellType":"Projectile","Using":"Projectile_Potion_Destroy_Antitoxin","DisplayName":"Oil of Accuracy","TooltipStatusApply":["<b>ApplyStatus(ALCH_OIL_ATTACKBUFF_DIPPED,100,10)</b>"],"VerbalIntent":"Utility"},{"_flag":"","Name":"Projectile_Solution_Oil_DamageAttackBuff_Destroy","SpellType":"Projectile","Using":"Projectile_Solution_Oil_AttackBuff_Destroy","DisplayName":"Diluted Oil of Sharpness","TooltipStatusApply":["<b>ApplyStatus(ALCH_OIL_DAMAGEATTACKBUFF_DIPPED,100,10)</b>"]},{"_flag":"","Name":"Projectile_Solution_Oil_RemoveResistanceFire_Destroy","SpellType":"Projectile","Using":"Projectile_Solution_Oil_AttackBuff_Destroy","DisplayName":"Arsonist's Oil","TooltipStatusApply":["<b>ApplyStatus(ALCH_OIL_REMOVERESISTANCEFIRE_DIPPED,100,10)</b>"]},{"_flag":"","Name":"Projectile_Solution_Oil_Wizardsbane_Destroy","SpellType":"Projectile","Using":"Projectile_Solution_Oil_AttackBuff_Destroy","DisplayName":"Wizardsbane Oil","TooltipStatusApply":["<b>ApplyStatus(ALCH_OIL_WIZARDSBANE_DIPPED,100,10)</b>"]},{"_flag":"","Name":"Projectile_Solution_Oil_Reduce_Destroy","SpellType":"Projectile","Using":"Projectile_Solution_Oil_AttackBuff_Destroy","DisplayName":"Oil of Diminution","TooltipStatusApply":["<b>ApplyStatus(ALCH_OIL_REDUCE_DIPPED,100,10)</b>"]},{"_flag":"","Name":"Projectile_Solution_Oil_Combustion_Destroy","SpellType":"Projectile","Using":"Projectile_Solution_Oil_AttackBuff_Destroy","DisplayName":"Oil of Combustion","TooltipStatusApply":["<b>ApplyStatus(ALCH_OIL_COMBUSTION_DIPPED,100,10)</b>"]},{"_flag":"","Name":"Projectile_Solution_Oil_Bane_Destroy","SpellType":"Projectile","Using":"Projectile_Solution_Oil_AttackBuff_Destroy","DisplayName":"Oil of Bane","TooltipStatusApply":["<b>ApplyStatus(ALCH_OIL_BANE_DIPPED,100,10)</b>"]},{"_flag":"","Name":"Projectile_Solution_Oil_Frost_Destroy","SpellType":"Projectile","Using":"Projectile_Solution_Oil_AttackBuff_Destroy","DisplayName":"Oil of Freezing","TooltipStatusApply":["<b>ApplyStatus(ALCH_OIL_FROST_DIPPED,100,10)</b>"]},{"_flag":"","Name":"Projectile_TADPOLE","SpellType":"Projectile","Using":"Projectile_MainHandAttack"},{"_flag":"","Name":"Projectile_TAD_ShieldOfThralls_Explosion","SpellType":"Projectile","ExplodeRadius":3,"SpellRoll":["not <b>SavingThrow(Ability.Intelligence, 15)</b>"],"SpellSuccess":["<b>ApplyStatus(STUNNED,100,1)</b>"],"TargetConditions":["<b>Character() and Enemy()</b>"],"Trajectories":"5ae6a22b-cca2-4712-aff5-06a02aacfda2","Icon":"TadpoleSuperPower_ShieldOfThralls","DisplayName":"Shield of Thralls Blast","CastTextEvent":"Cast","SpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","7e67bfd0-2fc2-4d10-bed5-cfda9e660de5,,","eb054308-7fce-4b85-bf4c-7a0031fda7ac,,","0b0dc35b-4953-45c0-a9eb-8d3fef5e798a,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","b2e9c771-3497-444c-b360-23b4441985a1,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"VerbalIntent":"Utility"},{"_flag":"","Name":"Projectile_TAD_Levitate","SpellType":"Projectile","Using":"Projectile_Fly","TargetCeiling":18,"Icon":"TadpoleSuperPower_Levitate","PrepareSound":"Spell_Prepare_Tadpole_Buff_Gen_Levitate","PrepareLoopSound":"Spell_Loop_Tadpole_Buff_Gen_L1to3","CastSound":"Spell_Cast_Tadpole_Fly_L1to3","SpellAnimation":["b94b9184-9bd0-4840-be7d-003700173b37,,","5df11e35-f081-44f7-bd6f-7049d0e533cd,,","8dccb0f6-24e3-44b7-a60b-1f217b7db523,,","066f8e0e-b3e1-4b76-a473-d1e23a3b7230,,","7a28f440-1b0b-4a18-96a8-3767959b601a,,"],"RequirementConditions":["not <b>Tagged('TADPOLE_POWERS_BLOCKED')</b>"],"PrepareEffect":"c8cb3922-b4d6-4122-ac39-f6a0fa36020c","CastEffect":"516519af-84bf-4a97-bdb3-afa14522156a"},{"_flag":"","Name":"Projectile_TAD_CullTheWeak","SpellType":"Projectile","SpellProperties":["<b>DealDamage(1d4,Psychic)</b>"],"ExplodeRadius":3,"TargetConditions":["<b>Character() and Enemy()</b>"],"Trajectories":"5ae6a22b-cca2-4712-aff5-06a02aacfda2","Icon":"TadpoleSuperPower_CullTheWeak","DisplayName":"Cull the Weak","CastTextEvent":"Cast","SpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","7e67bfd0-2fc2-4d10-bed5-cfda9e660de5,,","eb054308-7fce-4b85-bf4c-7a0031fda7ac,,","0b0dc35b-4953-45c0-a9eb-8d3fef5e798a,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","b2e9c771-3497-444c-b360-23b4441985a1,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"DamageType":"Psychic"},{"_flag":"","Name":"Projectile_CursedTome_CurriculumofStrategy","SpellType":"Projectile","Using":"Projectile_MagicMissile_4","Level":5,"Cooldown":"OncePerShortRest","SpellProperties":["<b>DealDamage(2d6+6,Force)</b>"],"Trajectories":"ce94a9a7-b063-4390-bdd0-a3ad17009c7b,b4397df9-1164-47c1-9524-a4b6ddf66e13","Icon":"Spell_CurriculumOfStrategy_ArtistryOfWar","DisplayName":"Curriculum of Strategy: Artistry of War","Description":"Summon the apparitions of [2] master strategists. Each apparition strikes a target of your choosing, dealing [1] on a hit.","DescriptionParams":["<b>DealDamage(2d6+6,Force)</b>","6"],"TooltipDamageList":["<b>DealDamage(12d6+6,Force)</b>"],"PrepareSound":"Spell_Loop_Damage_Force_Artistry_Of_War","PrepareLoopSound":"Spell_Loop_Damage_Force_Artistry_Of_War_Stop","UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","IsSpell"],"PrepareEffect":"50f3a7ac-2cea-4001-a127-1f458815d612","CastEffect":"459193f7-1660-4b94-bda8-67779fc42e0c"},{"_flag":"","Name":"Projectile_CursedTome_Dethrone","SpellType":"Projectile","Using":"Projectile_FingerOfDeath_Apostle","Level":5,"Cooldown":"OncePerRest","SpellRoll":["not <b>SavingThrow(Ability.Constitution, 18)</b>"],"SpellSuccess":["<b>DealDamage(10d6+20,Necrotic,Magical)</b>"],"SpellFail":["<b>DealDamage((10d6+20)/2,Necrotic,Magical)</b>"],"Icon":"Spell_Dethrone","DisplayName":"Dethrone","Description":"Shred a foe's very essence by pulling on strands of the Weave. ","DescriptionParams":["<b>DealDamage(10d6+20,Necrotic)</b>"],"TooltipDamageList":["<b>DealDamage(10d6+20,Necrotic)</b>"],"TooltipAttackSave":["Constitution"],"PrepareSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3","PrepareLoopSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3_Loop","CastSound":"Action_Cast_Item_SorcSunTome_Dethrone","UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","3e441d3f-11f9-432d-877c-c0ba4d92c74a,,","8b7ae969-2a04-4720-9685-3bde54c18ffe,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","AddFallDamageOnLand","IsSpell"],"PrepareEffect":"6b2a861b-a5d1-466b-bee9-95131e8e73ba","CastEffect":"c8464eda-530a-4cad-b5c6-8e21f76fcd38","DamageType":"Necrotic"},{"_flag":"","Name":"Projectile_EnsnaringStrike_5","SpellType":"Projectile","Using":"Projectile_EnsnaringStrike","SpellSuccess":["<b>IF(not SavingThrow(Ability.Strength,SourceSpellDC(),AdvantageOnRestrained(),DisadvantageOnRestrained()))</b>:<b>ApplyStatus(ENSNARING_STRIKE_5,100,10)</b>","<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>ExecuteWeaponFunctors(MainHand)</b>"],"TooltipStatusApply":["<b>ApplyStatus(ENSNARING_STRIKE_5,100,10)</b>"],"HitCosts":["BonusActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_EnsnaringStrike","PowerLevel":5},{"_flag":"","Name":"Projectile_EnsnaringStrike_6","SpellType":"Projectile","Using":"Projectile_EnsnaringStrike","SpellSuccess":["<b>IF(not SavingThrow(Ability.Strength,SourceSpellDC(),AdvantageOnRestrained(),DisadvantageOnRestrained()))</b>:<b>ApplyStatus(ENSNARING_STRIKE_6,100,10)</b>","<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>ExecuteWeaponFunctors(MainHand)</b>"],"TooltipStatusApply":["<b>ApplyStatus(ENSNARING_STRIKE_6,100,10)</b>"],"HitCosts":["BonusActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_EnsnaringStrike","PowerLevel":6},{"_flag":"","Name":"Projectile_Smite_Branding_5","SpellType":"Projectile","Using":"Projectile_Smite_Branding","SpellSuccess":["<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>ExecuteWeaponFunctors(MainHand)</b>","<b>DealDamage(5d6,Radiant)</b>","AOE:<b>ApplyStatus(BRANDING_SMITE,100,10)</b>"],"TooltipDamageList":["<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>DealDamage(5d6,Radiant)</b>"],"HitCosts":["BonusActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_Smite_Branding","PowerLevel":5,"DamageType":"Radiant"},{"_flag":"","Name":"Projectile_Smite_Branding_6","SpellType":"Projectile","Using":"Projectile_Smite_Branding","SpellSuccess":["<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>ExecuteWeaponFunctors(MainHand)</b>","<b>DealDamage(6d6,Radiant)</b>","AOE:<b>ApplyStatus(BRANDING_SMITE,100,10)</b>"],"TooltipDamageList":["<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>DealDamage(6d6,Radiant)</b>"],"HitCosts":["BonusActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_Smite_Branding","PowerLevel":6,"DamageType":"Radiant"},{"_flag":"","Name":"Projectile_AcidArrow_5","SpellType":"Projectile","Using":"Projectile_AcidArrow","SpellSuccess":["<b>ApplyStatus(ACID_ARROW_5,100,1)</b>","<b>DealDamage(7d4,Acid,Magical)</b>"],"SpellFail":["<b>DealDamage((7d4)/2,Acid,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(7d4,Acid)</b>","<b>DealDamage(5d4,Acid,,,,1575c661-c7a1-44c7-b07d-d47b57164841)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_AcidArrow","PowerLevel":5},{"_flag":"","Name":"Projectile_AcidArrow_6","SpellType":"Projectile","Using":"Projectile_AcidArrow","SpellSuccess":["<b>ApplyStatus(ACID_ARROW_6,100,1)</b>","<b>DealDamage(8d4,Acid,Magical)</b>"],"SpellFail":["<b>DealDamage((8d4)/2,Acid,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(8d4,Acid)</b>","<b>DealDamage(6d4,Acid,,,,1575c661-c7a1-44c7-b07d-d47b57164841)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_AcidArrow","PowerLevel":6},{"_flag":"","Name":"Projectile_ChromaticOrb_Acid_5","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Acid","SpellSuccess":["<b>DealDamage(6d8,Acid,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(6d8,Acid)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_ChromaticOrb_Acid","PowerLevel":5},{"_flag":"","Name":"Projectile_ChromaticOrb_Acid_6","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Acid","SpellSuccess":["<b>DealDamage(7d8,Acid,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(7d8,Acid)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_ChromaticOrb_Acid","PowerLevel":6},{"_flag":"","Name":"Projectile_ChromaticOrb_Cold_5","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Cold","SpellSuccess":["<b>DealDamage(6d8,Cold,Magical)</b>","<b>RemoveStatus(BURNING)</b>"],"TooltipDamageList":["<b>DealDamage(6d8,Cold)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_ChromaticOrb_Cold","PowerLevel":5},{"_flag":"","Name":"Projectile_ChromaticOrb_Cold_6","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Cold","SpellSuccess":["<b>DealDamage(7d8,Cold,Magical)</b>","<b>RemoveStatus(BURNING)</b>"],"TooltipDamageList":["<b>DealDamage(7d8,Cold)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_ChromaticOrb_Cold","PowerLevel":6},{"_flag":"","Name":"Projectile_ChromaticOrb_Fire_5","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Fire","SpellSuccess":["<b>DealDamage(6d8,Fire,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(6d8,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_ChromaticOrb_Fire","PowerLevel":5},{"_flag":"","Name":"Projectile_ChromaticOrb_Fire_6","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Fire","SpellSuccess":["<b>DealDamage(7d8,Fire,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(7d8,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_ChromaticOrb_Fire","PowerLevel":6},{"_flag":"","Name":"Projectile_ChromaticOrb_Lightning_5","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Lightning","SpellSuccess":["<b>DealDamage(6d8,Lightning,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(6d8,Lightning)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_ChromaticOrb_Lightning","PowerLevel":5},{"_flag":"","Name":"Projectile_ChromaticOrb_Lightning_6","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Lightning","SpellSuccess":["<b>DealDamage(7d8,Lightning,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(7d8,Lightning)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_ChromaticOrb_Lightning","PowerLevel":6},{"_flag":"","Name":"Projectile_ChromaticOrb_Poison_5","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Poison","SpellSuccess":["<b>DealDamage(6d8,Poison,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(6d8,Poison)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_ChromaticOrb_Poison","PowerLevel":5},{"_flag":"","Name":"Projectile_ChromaticOrb_Poison_6","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Poison","SpellSuccess":["<b>DealDamage(7d8,Poison,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(7d8,Poison)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_ChromaticOrb_Poison","PowerLevel":6},{"_flag":"","Name":"Projectile_ChromaticOrb_Thunder_5","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Thunder","SpellSuccess":["<b>DealDamage(7d8,Thunder,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(7d8,Thunder)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_ChromaticOrb_Thunder","PowerLevel":5},{"_flag":"","Name":"Projectile_ChromaticOrb_Thunder_6","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Thunder","SpellSuccess":["<b>DealDamage(8d8,Thunder,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(8d8,Thunder)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_ChromaticOrb_Thunder","PowerLevel":6},{"_flag":"","Name":"Projectile_ChromaticOrb_BookOfAncientSecrets","SpellType":"Projectile","Using":"Projectile_ChromaticOrb","ContainerSpells":["Projectile_ChromaticOrb_Acid_BookOfAncientSecrets","Projectile_ChromaticOrb_Cold_BookOfAncientSecrets","Projectile_ChromaticOrb_Fire_BookOfAncientSecrets","Projectile_ChromaticOrb_Lightning_BookOfAncientSecrets","Projectile_ChromaticOrb_Poison_BookOfAncientSecrets","Projectile_ChromaticOrb_Thunder_BookOfAncientSecrets"],"Cooldown":"OncePerRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Projectile_ChromaticOrb_Acid_BookOfAncientSecrets","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Acid","SpellContainerID":"Projectile_ChromaticOrb_BookOfAncientSecrets","Cooldown":"OncePerRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Projectile_ChromaticOrb_Cold_BookOfAncientSecrets","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Cold","SpellContainerID":"Projectile_ChromaticOrb_BookOfAncientSecrets","Cooldown":"OncePerRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Projectile_ChromaticOrb_Fire_BookOfAncientSecrets","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Fire","SpellContainerID":"Projectile_ChromaticOrb_BookOfAncientSecrets","Cooldown":"OncePerRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Projectile_ChromaticOrb_Lightning_BookOfAncientSecrets","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Lightning","SpellContainerID":"Projectile_ChromaticOrb_BookOfAncientSecrets","Cooldown":"OncePerRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Projectile_ChromaticOrb_Poison_BookOfAncientSecrets","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Poison","SpellContainerID":"Projectile_ChromaticOrb_BookOfAncientSecrets","Cooldown":"OncePerRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Projectile_ChromaticOrb_Thunder_BookOfAncientSecrets","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Thunder","SpellContainerID":"Projectile_ChromaticOrb_BookOfAncientSecrets","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Projectile_HailOfThorns_5","SpellType":"Projectile","Using":"Projectile_HailOfThorns","SpellSuccess":["TARGET:<b>IF(Attack(AttackType.RangedWeaponAttack))</b>:<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","TARGET:AOE:<b>IF(not HasStatus('SHIELD_MASTER')or not HasActionResource('ReactionActionPoint',1,0,false))</b>:<b>DealDamage(5d10,Piercing,Magical)</b>","TARGET:AOE:<b>IF(HasStatus('SHIELD_MASTER')and HasActionResource('ReactionActionPoint',1,0,false))</b>:<b>DealDamage(5d10/2,Piercing,Magical)</b>","TARGET:AOE:<b>IF(HasStatus('SHIELD_MASTER')and HasActionResource('ReactionActionPoint',1,0,false))</b>:<b>RemoveStatus(SHIELD_MASTER)</b>"],"SpellFail":["TARGET:<b>IF(Attack(AttackType.RangedWeaponAttack))</b>:<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","TARGET:AOE:<b>IF(not HasStatus('SHIELD_MASTER')or not HasActionResource('ReactionActionPoint',1,0,false))</b>:<b>DealDamage((5d10/2),Piercing,Magical)</b>"],"DescriptionParams":["<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>DealDamage(5d10,Piercing)</b>"],"ExtraDescriptionParams":["<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>DealDamage(5d10,Piercing)</b>"],"TooltipDamageList":["<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>DealDamage(5d10,Piercing)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5","BonusActionPoint:1"],"RootSpellID":"Projectile_HailOfThorns","PowerLevel":5},{"_flag":"","Name":"Projectile_HailOfThorns_6","SpellType":"Projectile","Using":"Projectile_HailOfThorns","SpellSuccess":["TARGET:<b>IF(Attack(AttackType.RangedWeaponAttack))</b>:<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","TARGET:AOE:<b>IF(not HasStatus('SHIELD_MASTER')or not HasActionResource('ReactionActionPoint',1,0,false))</b>:<b>DealDamage(6d10,Piercing,Magical)</b>","TARGET:AOE:<b>IF(HasStatus('SHIELD_MASTER')and HasActionResource('ReactionActionPoint',1,0,false))</b>:<b>DealDamage(6d10/2,Piercing,Magical)</b>","TARGET:AOE:<b>IF(HasStatus('SHIELD_MASTER')and HasActionResource('ReactionActionPoint',1,0,false))</b>:<b>RemoveStatus(SHIELD_MASTER)</b>"],"SpellFail":["TARGET:<b>IF(Attack(AttackType.RangedWeaponAttack))</b>:<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","TARGET:AOE:<b>IF(not HasStatus('SHIELD_MASTER')or not HasActionResource('ReactionActionPoint',1,0,false))</b>:<b>DealDamage((6d10/2),Piercing,Magical)</b>"],"ExtraDescriptionParams":["<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>DealDamage(6d10,Piercing)</b>"],"TooltipDamageList":["<b>DealDamage(MainRangedWeapon,MainRangedWeaponDamageType)</b>","<b>DealDamage(6d10,Piercing)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6","BonusActionPoint:1"],"RootSpellID":"Projectile_HailOfThorns","PowerLevel":6},{"_flag":"","Name":"Projectile_GuidingBolt_5","SpellType":"Projectile","Using":"Projectile_GuidingBolt","SpellSuccess":["<b>DealDamage(8d6,Radiant,Magical)</b>"," <b>ApplyStatus(GUIDING_BOLT, 100, 2)</b>"],"TooltipDamageList":["<b>DealDamage(8d6,Radiant)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_GuidingBolt","PowerLevel":5},{"_flag":"","Name":"Projectile_GuidingBolt_6","SpellType":"Projectile","Using":"Projectile_GuidingBolt","SpellSuccess":["<b>DealDamage(9d6,Radiant,Magical)</b>"," <b>ApplyStatus(GUIDING_BOLT, 100, 2)</b>"],"TooltipDamageList":["<b>DealDamage(9d6,Radiant)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_GuidingBolt","PowerLevel":6},{"_flag":"","Name":"Projectile_WitchBolt_5","SpellType":"Projectile","Using":"Projectile_WitchBolt","SpellSuccess":["<b>ApplyStatus(WITCH_BOLT,100,10)</b>","<b>DealDamage(5d12,Lightning,Magical)</b>","<b>ApplyStatus(AI_HELPER_WITCHBOLT,100,2)</b>"],"TooltipDamageList":["<b>DealDamage(5d12,Lightning)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_WitchBolt","PowerLevel":5},{"_flag":"","Name":"Projectile_WitchBolt_6","SpellType":"Projectile","Using":"Projectile_WitchBolt","SpellSuccess":["<b>ApplyStatus(WITCH_BOLT,100,10)</b>","<b>DealDamage(6d12,Lightning,Magical)</b>","<b>ApplyStatus(AI_HELPER_WITCHBOLT,100,2)</b>"],"TooltipDamageList":["<b>DealDamage(6d12,Lightning)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_WitchBolt","PowerLevel":6},{"_flag":"","Name":"Projectile_RayOfEnfeeblement_5","SpellType":"Projectile","Using":"Projectile_RayOfEnfeeblement","UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_RayOfEnfeeblement","PowerLevel":5},{"_flag":"","Name":"Projectile_RayOfEnfeeblement_6","SpellType":"Projectile","Using":"Projectile_RayOfEnfeeblement","UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_RayOfEnfeeblement","PowerLevel":6},{"_flag":"","Name":"Projectile_RayOfSickness_5","SpellType":"Projectile","Using":"Projectile_RayOfSickness","SpellSuccess":["<b>IF(not SavingThrow(Ability.Constitution,SourceSpellDC(),AdvantageOnPoisoned()))</b>:<b>ApplyStatus(POISONED,100,2)</b>","<b>DealDamage(6d8,Poison,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(6d8,Poison)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_RayOfSickness","PowerLevel":5},{"_flag":"","Name":"Projectile_RayOfSickness_6","SpellType":"Projectile","Using":"Projectile_RayOfSickness","SpellSuccess":["<b>IF(not SavingThrow(Ability.Constitution,SourceSpellDC(),AdvantageOnPoisoned()))</b>:<b>ApplyStatus(POISONED,100,2)</b>","<b>DealDamage(7d8,Poison,Magical)</b>"],"TooltipDamageList":["<b>DealDamage(7d8,Poison)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_RayOfSickness","PowerLevel":6},{"_flag":"","Name":"Projectile_RayOfSickness_BookOfAnceintSecrets","SpellType":"Projectile","Using":"Projectile_RayOfSickness","Cooldown":"OncePerRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Projectile_ScorchingRay_5","SpellType":"Projectile","Using":"Projectile_ScorchingRay","AmountOfTargets":6,"DescriptionParams":["<b>DealDamage(2d6,Fire)</b>","6"],"TooltipDamageList":["<b>DealDamage(12d6,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_ScorchingRay","PowerLevel":5},{"_flag":"","Name":"Projectile_ScorchingRay_6","SpellType":"Projectile","Using":"Projectile_ScorchingRay","AmountOfTargets":7,"DescriptionParams":["<b>DealDamage(2d6,Fire)</b>","7"],"TooltipDamageList":["<b>DealDamage(14d6,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_ScorchingRay","PowerLevel":6},{"_flag":"","Name":"Projectile_ScorchingRay_7","SpellType":"Projectile","Using":"Projectile_ScorchingRay","AmountOfTargets":8,"DescriptionParams":["<b>DealDamage(2d6,Fire)</b>","8"],"TooltipDamageList":["<b>DealDamage(16d6,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:7"],"RootSpellID":"Projectile_ScorchingRay","PowerLevel":7},{"_flag":"","Name":"Projectile_ScorchingRay_8","SpellType":"Projectile","Using":"Projectile_ScorchingRay","AmountOfTargets":9,"DescriptionParams":["<b>DealDamage(2d6,Fire)</b>","9"],"TooltipDamageList":["<b>DealDamage(18d6,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:8"],"RootSpellID":"Projectile_ScorchingRay","PowerLevel":8},{"_flag":"","Name":"Projectile_ScorchingRay_9","SpellType":"Projectile","Using":"Projectile_ScorchingRay","AmountOfTargets":10,"DescriptionParams":["<b>DealDamage(2d6,Fire)</b>","10"],"TooltipDamageList":["<b>DealDamage(20d6,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:9"],"RootSpellID":"Projectile_ScorchingRay","PowerLevel":9},{"_flag":"","Name":"Projectile_Fireball_5","SpellType":"Projectile","Using":"Projectile_Fireball","SpellSuccess":["<b>DealDamage(10d6,Fire,Magical)</b>"],"SpellFail":["<b>DealDamage((10d6)/2,Fire,Magical)</b>"],"DescriptionParams":["<b>Distance(6)</b>","<b>DealDamage(10d6,Fire)</b>"],"TooltipDamageList":["<b>DealDamage(10d6,Fire)</b>"],"TooltipUpcastDescription":"Additional damage<br>Deals an additional [1] per level.","TooltipUpcastDescriptionParams":["<b>DealDamage(1d6,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:5"],"RootSpellID":"Projectile_Fireball","PowerLevel":5},{"_flag":"","Name":"Projectile_Fireball_6","SpellType":"Projectile","Using":"Projectile_Fireball","SpellSuccess":["<b>DealDamage(11d6,Fire,Magical)</b>"],"SpellFail":["<b>DealDamage((11d6)/2,Fire,Magical)</b>"],"DescriptionParams":["<b>Distance(6)</b>","<b>DealDamage(11d6,Fire)</b>"],"TooltipDamageList":["<b>DealDamage(11d6,Fire)</b>"],"TooltipUpcastDescription":"Additional damage<br>Deals an additional [1] per level.","TooltipUpcastDescriptionParams":["<b>DealDamage(1d6,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:6"],"RootSpellID":"Projectile_Fireball","PowerLevel":6},{"_flag":"","Name":"Projectile_Fireball_7","SpellType":"Projectile","Using":"Projectile_Fireball","SpellSuccess":["<b>DealDamage(12d6,Fire,Magical)</b>"],"SpellFail":["<b>DealDamage((12d6)/2,Fire,Magical)</b>"],"DescriptionParams":["<b>Distance(6)</b>","<b>DealDamage(12d6,Fire)</b>"],"TooltipDamageList":["<b>DealDamage(12d6,Fire)</b>"],"TooltipUpcastDescription":"Additional damage<br>Deals an additional [1] per level.","TooltipUpcastDescriptionParams":["<b>DealDamage(1d6,Fire)</b>"],"UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:7"],"RootSpellID":"Projectile_Fireball","PowerLevel":7},{"_flag":"","Name":"Projectile_Fireball_8","SpellType":"Projectile","Using":"Projectile_Fireball","SpellSuccess":"<b>DealDamage(13d6,Fire,Magical)</b>","SpellFail":"<b>DealDamage((13d6)/2,Fire,Magical)</b>","DescriptionParams":"<b>Distance(6)</b>;<b>DealDamage(13d6,Fire)</b>","TooltipDamageList":"<b>DealDamage(13d6,Fire)</b>","TooltipUpcastDescription":"Additional damage<br>Deals an additional [1] per level.","TooltipUpcastDescriptionParams":"<b>DealDamage(1d6,Fire)</b>","UseCosts":"ActionPoint:1;SpellSlotsGroup:1:1:8","RootSpellID":"Projectile_Fireball","PowerLevel":8}]