loadSpell([{"Name":"Projectile_LOW_GreaseWizard_Mephit_Fling","SpellType":"Projectile","Using":"Projectile_MudFling_MudMephit","DisplayName":["h21850454g665eg45ecg896ag9c90712fd998","2"],"Description":["h57c0410cg0d21g4f53ga7a9g3b810556b499","2"]},{"Name":"Projectile_LOW_GreaseWizard_Ooze_Spit","SpellType":"Projectile","Using":"Projectile_ToxicSpit_Ooze","SpellProperties":["GROUND:CreateSurface(1,3,Grease)"]},{"Name":"Projectile_LOW_GreaseWizard_Fireball_5","SpellType":"Projectile","Using":"Projectile_Fireball_5"},{"Name":"Projectile_LOW_GreaseWizard_Fireball_Dummy","SpellType":"Projectile","Using":"Projectile_Fireball_4","Cooldown":"OncePerCombat","SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","AI_ONLY:ApplyStatus(SELF,AI_HELPER_BUFF_LARGE, 100, 5)"],"TargetRadius":10,"TargetConditions":["Ally() or Enemy() or Self() or Surface('SurfaceGrease')"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","RangeIgnoreVerticalThreshold","IsHarmful","CanAreaDamageEvade"]},{"Name":"Projectile_LOW_RaphaelImp_EldritchBlast","SpellType":"Projectile","Using":"Projectile_EldritchBlast","SpellAnimation":["20bc8606-6406-4f04-a0f7-ec458125b663,,","8f5c3b68-2383-4470-bb15-ca3e9b6c5819,,","36fcebc4-6813-48f0-81f0-c473b79782b7,,","6e5625e7-7912-450f-9375-d42491d31335,,","7a4db7bc-d962-4e4c-9ac8-c2f03b96a370,,","f2849708-05fa-405a-ba15-3bacbe1a3d56,,"]},{"Name":"Projectile_LOW_Raphael_DancingFlame","SpellType":"Projectile","Using":"Projectile_FireBolt","Level":4,"SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","GROUND:IF(HasStatus('LOW_RAPHAEL_MONSTER_FORM',context.Source)):CreateSurface(1, 2,Hellfire)"],"AmountOfTargets":1,"SpellRoll":["not SavingThrow(Ability.Dexterity, SourceSpellDC()) "],"SpellSuccess":["DealDamage(6d6,Fire,Magical)","ApplyStatus(BURNING,100,2)"],"SpellFail":["DealDamage((6d6)/2,Fire,Magical)"],"TargetConditions":["not Self() and not Dead() and Enemy()"],"DisplayName":["hd60d072dg1f2fg45baga914g9fe2fc671a15","4"],"Description":["hfc09dc2eg98f2g4c42gac43g2757292bc409","3"],"DescriptionParams":["DealDamage(6d6, Fire)"],"TooltipDamageList":["DealDamage(6d6,Fire)"],"TooltipAttackSave":["Dexterity"]},{"Name":"Projectile_LOW_Raphael_DancingFlame_BA","SpellType":"Projectile","Using":"Projectile_LOW_Raphael_DancingFlame","UseCosts":["BonusActionPoint:1","SpellSlotsGroup:1:1:1"]},{"Name":"Projectile_LOW_Raphael_LavaChains","SpellType":"Projectile","Using":"Projectile_ScorchingRay","Level":6,"SpellProperties":["GROUND:CreateSurface(1, 2,Hellfire)","SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)"],"AmountOfTargets":3,"SpellRoll":["not SavingThrow(Ability.Dexterity, SourceSpellDC()) "],"SpellSuccess":["DealDamage(6d6,Fire,Magical)","IF(not SavingThrow(Ability.Strength,SourceSpellDC())):Force(5)"],"SpellFail":["DealDamage((6d6)/2,Fire,Magical)","IF(not SavingThrow(Ability.Strength,SourceSpellDC())):Force(5)"],"TargetConditions":["not Self() and not Dead() and Enemy()"],"DisplayName":["h6d32ce11g65cag4ef8ga2b3g2b4d2ceace9d","4"],"Description":["hc322babegf3e2g48cdgb218g96a9c301dbc8","8"],"DescriptionParams":["3","2","Distance(5)"],"TooltipDamageList":["DealDamage(6d6,Fire)"],"TooltipAttackSave":["Dexterity"],"CastSound":"CrSpell_Cast_LavaChain","UseCosts":["ActionPoint:1","SpellSlotsGroup:2:2:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","b8240b32-2691-42d9-8889-90394682e6f5,,","17eea8c4-cf1e-4609-87c3-2179c3ebcca8,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellAnimationIntentType":"Aggressive","RequirementConditions":"HasStatus('LOW_RAPHAEL_MONSTER_FORM')","CastEffect":"b45e8bc8-c2ba-46df-91ee-ac63d9e256c5","Sheathing":"DontChange"},{"Name":"Projectile_LOW_Raphael_Jump","SpellType":"Projectile","Using":"Projectile_Jump_NPC","SpellProperties":["GROUND:CreateExplosion(Projectile_MAG_Infernal_MistyStep_Fireball)","GROUND:TeleportSource()"]},{"Name":"Projectile_MAG_ZOC_ForceConduit_ForceBlast","SpellType":"Projectile","SpellProperties":["DealDamage(1d4, Force,Magical)"],"AreaRadius":3,"ExplodeRadius":3,"TargetConditions":["not Self() and not Dead()"],"Trajectories":"0be6e4d7-55fe-4ee0-8acc-94fc3b474817,78f998fb-2bb4-c8bd-c170-fcd899abc905,a62c27e3-86c0-db69-8f04-0ea3074cae7a","SpellFlags":["IsTrap","ImmediateCast"],"TargetEffect":"b460b24b-23e4-4f8f-a533-4d82512bedeb"},{"Name":"Projectile_MAG_WeaponAction_BlindingShot","SpellType":"Projectile","Using":"Projectile_PiercingShot","SpellSuccess":["IF(Character() and not SavingThrow(Ability.Constitution, ManeuverSaveDC()+2)):ApplyStatus(BLINDED,100,2)","DealDamage(MainRangedWeapon+ProficiencyBonus, MainRangedWeaponDamageType)","ExecuteWeaponFunctors(MainHand)"],"Trajectories":"4a4e6c59-0942-491f-87b1-a4392f3b83d5","Icon":"Action_Mag_BlindingShot","DisplayName":["h6005bcf0g00abg4cd0ga97bg0fd6fef3383d","2"],"Description":["hb6659a10g0a0dg4e39gb515g5edd49975319","4"],"TooltipDamageList":["DealDamage(MainRangedWeapon+ProficiencyBonus, MainRangedWeaponDamageType)"],"TooltipStatusApply":["ApplyStatus(BLINDED,100,2)"],"CastEffect":"d8134ee0-add9-449f-8934-c6ef8dbee199"},{"Name":"Projectile_HAV_InfernalFire","SpellType":"Projectile","Using":"Projectile_Bomb","SpellRoll":["not SavingThrow(Ability.Dexterity, 13)"],"SpellSuccess":["DealDamage(3d6, Fire,Magical)","ApplyStatus(HAV_MAG_INFERNAL_FIRE, 100, 3)"],"SpellFail":["DealDamage((3d6)/2, Fire,Magical)"],"Trajectories":"8df78ae7-25f5-492b-b419-a806f7f387a7,1f7eb39c-e211-479e-bf6b-4cd428b9d3ac,af7a4673-7e5a-4a79-8eb2-e22a78ed85ed","Icon":"","DisplayName":["he132e077g227ag4e29g9728g74a9b0b5474b","2"],"Description":["h78bc267cg5955g4004g9e9ag70cecc5ee97f","3"],"TooltipDamageList":["DealDamage(3d6, Fire)"],"TooltipStatusApply":["ApplyStatus(HAV_MAG_INFERNAL_FIRE, 100, 3)"],"SpellAnimation":["e8075d90-9018-4b4a-8b2e-bab0cffe2fbd,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,","e1726462-6f35-4551-af40-5247a314f38d,,","9673b7c5-9928-44ce-ae4f-a85be2683981,,","de9ab201-2e8d-4385-84e3-1a77c22861d1,,"]},{"Name":"Projectile_HAV_Souleater","SpellType":"Projectile","Using":"Projectile_Bomb","SpellRoll":["not SavingThrow(Ability.Dexterity, 13)"],"SpellSuccess":["DealDamage(3d6, Necrotic,Magical)"],"SpellFail":["DealDamage((3d6)/2, Necrotic,Magical)"],"Icon":"","DisplayName":["h954f32f0g55bcg4367g92cdgd3ce665fceb8","2"],"Description":["h5e300366g4645g4e8dga820g50ba20ea8566","2"],"DescriptionParams":0,"TooltipDamageList":["DealDamage(3d6,Force)"]},{"Name":"Projectile_LOW_IronThrone_Mizora_ExplodingSpiderlings_Explosion","SpellType":"Projectile","Using":"Projectile_CRE_BreweryKobolds_FirewineBelly_Explosion","SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","GROUND:CreateSurface(1,2,Fire)"],"TargetFloor":"-1","TargetRadius":2,"AreaRadius":2,"ExplodeRadius":2,"SpellRoll":["not SavingThrow(Ability.Dexterity, 15) "],"SpellSuccess":["DealDamage(3d6,Fire)"],"SpellFail":["DealDamage((3d6)/2,Fire)"],"Trajectories":"92a18159-016b-4608-93fe-89f865195189","DisplayName":["h53046d69g601ag46dfgafacg2a989c3af43e","7"],"Description":["h51bb0b13g8ceeg4277g9796g52458f2fa657","8"],"TooltipDamageList":["DealDamage(3d6,Fire)"],"TooltipOnSave":"f762efbb-f8f1-493e-b248-2de1567b4bd2"},{"Name":"Projectile_LOW_MephitLiquid_Strike","SpellType":"Projectile","Using":"Projectile_POTIONS","SpellProperties":["ApplyStatus(LOW_SERIALKILLER_MEPHITLILQUID, 100, 10)"],"DisplayName":["h271a4fa4g7c05g416egb839gd9edc385c0db","1"],"SpellFlags":["IsTrap"]},{"Name":"Projectile_TWN_LOW_Potion_Destroy_KarabasansGift","SpellType":"Projectile","Using":"Projectile_Potion_Destroy_Paralysis","SpellProperties":["ApplyStatus(TWN_LOW_PARALYZING_POISON,100,2,,,,not SavingThrow(Ability.Constitution,15))"],"DisplayName":["h2fc9930egab6eg4ca3ga223g22988e048ef4","1"]},{"Name":"Projectile_END_NetherIllusion_Explosion","SpellType":"Projectile","Using":"Projectile_UND_Runepowder_Barrel_Explosion"},{"Name":"Projectile_END_MolBuff_FireRay","SpellType":"Projectile","Using":"Projectile_FireRay_Cambion","Level":4,"Cooldown":"OncePerShortRest","AmountOfTargets":5,"DescriptionParams":["DealDamage(3d6,Fire)","5"],"TooltipDamageList":["DealDamage(3d6,Fire)","DealDamage(3d6,Fire)","DealDamage(3d6,Fire)","DealDamage(3d6,Fire)","DealDamage(3d6,Fire)"]},{"Name":"Projectile_MAG_ScorchingRay_3","SpellType":"Projectile","Using":"Projectile_ScorchingRay_3","Level":3,"Cooldown":"OncePerRestPerItem","TooltipDamageList":["DealDamage(8d6,Fire)"],"UseCosts":["ActionPoint:1"]},{"Name":"Projectile_END_Jump_Ghoul_Flying","SpellType":"Projectile","Using":"Projectile_Jump_Ghoul_Flying","TargetRadius":18},{"Name":"Projectile_END_Underground_WebMine","SpellType":"Projectile","Using":"Projectile_SCL_SpikeTrap","SpellProperties":["GROUND:CreateSurface(4,10,Web,true)"],"DisplayName":["h5afda7bdg9878g4dbcgbc7bg34808bf52d36","2"],"SpellFlags":["IsTrap","ImmediateCast"]},{"Name":"Projectile_END_Emperor_ChainLightning","SpellType":"Projectile","Using":"Projectile_ChainLightning","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"]},{"Name":"Projectile_END_LightningArrow_Harper","SpellType":"Projectile","Using":"Projectile_ArrowOfLightning","SpellFlags":["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","DisplayInItemTooltip","IsSwarmAttack","IsAttack"]},{"Name":"Projectile_MAG_Technical_Blast","SpellType":"Projectile","TargetConditions":["not Self() and not Dead()"],"Trajectories":"0be6e4d7-55fe-4ee0-8acc-94fc3b474817,78f998fb-2bb4-c8bd-c170-fcd899abc905,a62c27e3-86c0-db69-8f04-0ea3074cae7a","Icon":"","DisplayName":["hd7cbfab4gde92g4a82g84e6g896ca6594923","2"],"SpellFlags":["IsTrap","ImmediateCast"],"HitEffect":"41de42e1-56d0-4336-8b44-99fc38281525"},{"Name":"Projectile_POTION_OfTheGreatArcher_ExtraAttack","SpellType":"Projectile","Using":"Projectile_MainHandAttack","Cooldown":"OncePerTurn","SpellFlags":["IsAttack","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","CanDualWield","Temporary"]},{"Name":"Projectile_SCL_FishermansHut_KuoToaNet","SpellType":"Projectile","Using":"Projectile_Net_Kuotoa","TargetConditions":["Character() and not Self() and not HasStatus('NET') and not Tagged('ACT2_SCL_FISHERMANSHUT_NETIGNORETARGET')"],"SpellFlags":["IsSwarmAttack"]},{"Name":"Projectile_LOW_FatherCarrion_PutridExplosion_Explosion","SpellType":"Projectile","SpellProperties":["GROUND:CreateSurface(3,10,CloudkillCloud,true)"],"ExplodeRadius":3,"SpellRoll":["not SavingThrow(Ability.Dexterity, SourceSpellDC())"],"SpellSuccess":["DealDamage(4d6, Slashing)"],"SpellFail":["DealDamage((4d6/2), Slashing)"],"TargetConditions":["not Dead() and Character()"],"ProjectileCount":1,"Trajectories":"c7cd4b0a-2b2e-47ae-a4e8-849ad5d448f8","Icon":"GenericIcon_DamageType_Poison","DisplayName":["h823d746ag95aag4c2aga132g3b9348600db7","2"],"Description":["hf8af093dga122g41cdg9fdbg2e0aafa6c8f2","2"],"TooltipDamageList":["DealDamage(4d6, Slashing)"],"TooltipAttackSave":["Dexterity"],"TooltipOnSave":"f762efbb-f8f1-493e-b248-2de1567b4bd2","CastTextEvent":"Cast","UseCosts":["ActionPoint:1"],"SpellAnimation":["e57221a1-8648-4642-a8a5-49bdb97e3113,,","c51eb8c4-cc16-4ac9-a190-bb0f5fc1451e,,","e4701a8f-e0a5-4ebb-9ec6-587d18bfd397,,","b90c5c8e-8b38-4031-8ef8-93064fd9adb9,,","25b4af43-109f-47db-b9ac-5f8d7887e52d,,"],"SpellFlags":["CanAreaDamageEvade"]},{"Name":"Projectile_LOW_FatherCarrion_PutridExplosion_Explosion_Hardcore","SpellType":"Projectile","Using":"Projectile_LOW_FatherCarrion_PutridExplosion_Explosion","SpellProperties":["GROUND:CreateSurface(6,10,CloudkillCloud,true)"],"DisplayName":["ha886043eg08f0g4e4ag997eg5699aac28fad","1"],"Description":["h835bb73dg6253g4524gb969g8c4e229b73ea","1"]},{"Name":"Projectile_LOW_AiHelper_PutridExplosion","SpellType":"Projectile","Using":"Projectile_Fireball","SpellProperties":["DealDamage(5d8,Poison)"],"ExplodeRadius":3,"TargetConditions":["Character() and not Ally()"],"ProjectileCount":1,"Trajectories":"c7cd4b0a-2b2e-47ae-a4e8-849ad5d448f8","CastTextEvent":"Cast","UseCosts":["ActionPoint:1"],"SpellAnimation":["e57221a1-8648-4642-a8a5-49bdb97e3113,,","c51eb8c4-cc16-4ac9-a190-bb0f5fc1451e,,","e4701a8f-e0a5-4ebb-9ec6-587d18bfd397,,","b90c5c8e-8b38-4031-8ef8-93064fd9adb9,,","25b4af43-109f-47db-b9ac-5f8d7887e52d,,"],"SpellFlags":["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful"]},{"Name":"Projectile_LOW_Fireball_Cazador","SpellType":"Projectile","Using":"Projectile_Fireball","SpellSuccess":["DealDamage(10d6,Fire,Magical)"],"SpellFail":["DealDamage((10d6)/2,Fire,Magical)"],"DescriptionParams":["DealDamage(10d6,Fire)"],"TooltipDamageList":["DealDamage(10d6,Fire)"]},{"Name":"Projectile_LOW_Dolor_Jump","SpellType":"Projectile","Using":"Projectile_Jump_NPC","SpellProperties":["ApplyStatus(SELF,LOW_DOLOR_BONUS,100,1)"],"RequirementConditions":"not HasStatus('LOW_DOLOR_BONUS')"},{"Name":"Projectile_MAG_Githborn_MageHandsCombatBuff","SpellType":"Projectile","Using":"Projectile_CRE_GithyankiInquisitor_Mindsteal_Link","Cooldown":"OncePerShortRestPerItem","SpellProperties":["ApplyStatus(MAG_GITHBORN_COMBAT_HAND_BUFF, 100, -1)","ApplyStatus(SELF, MAG_GITHBORN_COMBAT_HAND_BUFF_OWNER, 100, -1)","ApplyStatus(CRE_MINDSTEAL_LINK,100,-1)","ApplyStatus(MAG_GITHBORN_COMBAT_HAND_TEMP_HP, 100, -1)"],"TargetConditions":["Summon()"],"DisplayName":["hdeb2ecc2ge0c2g4fb6gafa0gd030d259583e","2"],"Description":["h697c845cg2951g4cfbgbc57g629572f3cf53","2"],"TooltipStatusApply":["ApplyStatus(MAG_GITHBORN_COMBAT_HAND_BUFF, 100, -1)"],"TooltipPermanentWarnings":["796ef93c-bc79-4363-bc16-3185e1fd927e","8892b93b-721f-4b99-b9b4-05ac25aadb33"],"CycleConditions":"Summon()","UseCosts":["BonusActionPoint:1"],"VerbalIntent":"Buff","SpellFlags":["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold"]},{"Name":"Projectile_MAG_DevoteesMace_HealingExplosion","SpellType":"Projectile","SpellProperties":["RegainHitPoints(1d4)"],"AreaRadius":9,"ExplodeRadius":9,"TargetConditions":["not Self() and not Dead() and not Enemy() and HasStatus('MAG_DEVOTEES_MACE_HEALING_AURA_CRREATURE')"],"Trajectories":"0be6e4d7-55fe-4ee0-8acc-94fc3b474817,78f998fb-2bb4-c8bd-c170-fcd899abc905,a62c27e3-86c0-db69-8f04-0ea3074cae7a","SpellFlags":["IsTrap"],"TargetEffect":"b460b24b-23e4-4f8f-a533-4d82512bedeb"},{"Name":"Projectile_LOW_BloodMerchant_ExplosionsWithAsh","SpellType":"Projectile","Using":"Projectile_Fireball","SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","GROUND:CreateSurface(3,10,Fire)","ApplyStatus(BURNING,100,1)"],"AreaRadius":4,"ExplodeRadius":4,"TooltipDamageList":["DealDamage(8d6,Fire)"]},{"Name":"Projectile_LOW_BloodMerchant_ExplodeSelf","SpellType":"Projectile","Using":"Projectile_LOW_BloodMerchant_ExplosionsWithAsh","TargetRadius":1,"AreaRadius":2,"ExplodeRadius":2,"SpellSuccess":["DealDamage(1d6,Fire)"],"SpellFail":["DealDamage((1d6)/2,Fire)"],"TargetConditions":["not Dead() and not Self()"]},{"Name":"Projectile_MAG_BG_OfSpeed_LightCrossbow_BonusAttack","SpellType":"Projectile","Using":"Projectile_MainHandAttack","Cooldown":"OncePerTurn","DisplayName":["h1eb4a116g1e71g4bbbgb343gb1125c02f74a","3"],"UseCosts":["BonusActionPoint:1"],"SpellFlags":["IsAttack","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","CanDualWield","Temporary"]},{"Name":"Projectile_MAG_WYRM_Commander_Longsword_Inspiration_Explosion","SpellType":"Projectile","SpellProperties":["ApplyStatus(MAG_TEMP_HP_CHARISMA, 100, -1)"],"TargetFloor":"-1","TargetRadius":9,"AreaRadius":9,"ExplodeRadius":9,"TargetConditions":["Character() and not Self() and not Dead() and not Enemy()"],"Trajectories":"f346b284-854e-4dd9-b87c-3938f5178265","CastTextEvent":"Cast","SpellFlags":["IsTrap"],"HitAnimationType":"MagicalNonDamage"},{"Name":"Projectile_END_Underground_ForceTrap","SpellType":"Projectile","Using":"Projectile_Force_Trap","SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","DealDamage(4d10,Force,Magical)"],"SpellSuccess":["Force(5, TargetToEntity)"],"DamageType":"Force"},{"Name":"Projectile_END_Underground_PoisonTrap","SpellType":"Projectile","Using":"Projectile_PoisonCloud_Trap","SpellSuccess":["DealDamage(6d6,Poison)"],"SpellFail":["DealDamage((6d6)/2,Poison)"],"TooltipDamageList":["DealDamage(6d6,Poison)"],"SpellFlags":["IsTrap","CanAreaDamageEvade","ImmediateCast"]},{"Name":"Projectile_END__Underground_AcidTrap","SpellType":"Projectile","Using":"Projectile_AcidArrow_4","SpellRoll":["not SavingThrow(Ability.Dexterity, 14)"],"Icon":"PassiveAction_WardingFlare","TooltipAttackSave":["Dexterity"],"PreviewCursor":"Cast","UseCosts":["ActionPoint:1"],"SpellFlags":["IsTrap","ImmediateCast","CanAreaDamageEvade"]},{"Name":"Projectile_END_Underground_LightningTrap","SpellType":"Projectile","Using":"Projectile_LightningBolt_Trap","SpellSuccess":["DealDamage(6d8,Lightning,Magical)"],"SpellFail":["DealDamage((6d8)/2,Lightning,Magical)"],"Icon":"PassiveAction_WardingFlare","TooltipDamageList":["DealDamage(6d8,Lightning)"],"SpellFlags":["IsSpell","IsTrap","ImmediateCast"]},{"Name":"Projectile_MAG_Victory_Longbow_RoaringShot","SpellType":"Projectile","Using":"Projectile_MenacingAttack","Cooldown":"OncePerShortRest","SpellProperties":["ApplyEquipmentStatus(SELF, RangedMainHand, MAG_RADIANT_RADIANCE_WEAPON,100,10)","GROUND:DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)","GROUND:ExecuteWeaponFunctors(MainHand)","IF(not Player(context.Source)):ApplyStatus(SELF,AI_HELPER_EXTRAATTACK,100,1)","CastOffhand[GROUND:DealDamage(OffhandRangedWeapon,OffhandRangedWeaponDamageType)","GROUND:ExecuteWeaponFunctors(OffHand)]"],"SpellSuccess":["IF(not SavingThrow(Ability.Wisdom, ManeuverSaveDC(),AdvantageOnFrightened())):ApplyStatus(FRIGHTENED,100,2)","DealDamage(MainRangedWeapon+ProficiencyBonus, MainRangedWeaponDamageType)","ExecuteWeaponFunctors(MainHand)","DealDamage(1d8, Radiant)","ApplyStatus(MAG_CELESTIAL_BOW_IMPACT, 100, 0)"],"Icon":"Action_Mag_BoltOfCelestialLight","DisplayName":["h76741c27g4ff0g43c5ga82eg1dc1cc7db056","3"],"Description":["h7464584dgbdd1g4080g83d7gdf3b63300777","5"],"DescriptionParams":["DealDamage(1d4, Radiant)"],"TooltipDamageList":["DealDamage(MainRangedWeapon+ProficiencyBonus, MainRangedWeaponDamageType)","DealDamage(1d8, Radiant)"],"SpellFlags":["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","IsDefaultWeaponAction"],"DamageType":"Radiant"},{"Name":"Projectile_MAG_Legendary_Chromatic_Fireball","SpellType":"Projectile","Using":"Projectile_Fireball","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","CanAreaDamageEvade","Temporary"]},{"Name":"Projectile_MAG_Legendary_Chromatic_ChainLightning","SpellType":"Projectile","Using":"Projectile_ChainLightning","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","HasHighGroundRangeExtension","IsSpell","Temporary"]},{"Name":"Projectile_MAG_Legendary_Chromatic_RayOfSickness","SpellType":"Projectile","Using":"Projectile_RayOfSickness_5","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","IsSpell","HasHighGroundRangeExtension","HasSomaticComponent","RangeIgnoreVerticalThreshold","IsHarmful","Temporary"]},{"Name":"Projectile_MAG_Legendary_Chromatic_MelfAcidArrow","SpellType":"Projectile","Using":"Projectile_AcidArrow_5","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"],"SpellFlags":["IsSpell","HasHighGroundRangeExtension","HasVerbalComponent","HasSomaticComponent","RangeIgnoreVerticalThreshold","IsHarmful","Temporary"]},{"Name":"Projectile_LightningBlade_Explosion","SpellType":"Projectile","Using":"Projectile_ChainLightning_Explosion","Level":0,"TargetRadius":3,"SpellSuccess":["DealDamage(1d8,Lightning,Magical)"],"SpellFail":["DealDamage((1d8)/2,Lightning,Magical)"],"ProjectileCount":1,"TooltipDamageList":["DealDamage(1d8,Lightning)"],"UseCosts":["ActionPoint:1"]},{"Name":"Projectile_MAG_Infernal_MistyStep_Fireball","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Fire","AreaRadius":3,"ExplodeRadius":3,"SpellRoll":["not SavingThrow(Ability.Dexterity, 15)"],"SpellSuccess":["DealDamage(2d8,Fire,Magical)"],"SpellFail":["DealDamage(1d8,Fire,Magical)"],"Trajectories":"c07540e0-9581-42e0-8f4f-f2698957d171","SpellFlags":["IsSpell","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","CanAreaDamageEvade"]},{"Name":"Projectile_MAG_Infernal_FireOrb","SpellType":"Projectile","Using":"Projectile_MAG_Infernal_MistyStep_Fireball","AreaRadius":2,"ExplodeRadius":2},{"Name":"Projectile_LOW_CountingHouse_AiHelper_UseUpperAlarmTrigger","SpellType":"Projectile","Using":"Projectile_AiHelper_UseItem_Large","SpellProperties":["CAST:ApplyStatus(SELF,AI_HELPER_BUFF_MASSIVE,100,4)"],"TargetConditions":["DistanceToTargetLessThan(20) and Tagged('ACT3_LOW_COUNTINGHOUSE_AI_UPPERALARM_TRIGGER') and Tagged('ACT3_LOW_COUNTINGHOUSE_CASHGUARD', context.Source) and not HasStatus('SILENCED')"]},{"Name":"Projectile_LOW_CountingHouse_AiHelper_UseLowerAlarmTrigger","SpellType":"Projectile","Using":"Projectile_AiHelper_UseItem_Large","SpellProperties":["CAST:ApplyStatus(SELF,AI_HELPER_BUFF_MASSIVE,100,4)"],"TargetConditions":["DistanceToTargetLessThan(20) and Tagged('ACT3_LOW_COUNTINGHOUSE_AI_LOWERALARM_TRIGGER') and Tagged('ACT3_LOW_COUNTINGHOUSE_CASHGUARD', context.Source) and not HasStatus('SILENCED')"]},{"Name":"Projectile_LOW_CountingHouse_AiHelper_UseVaultTrapDisarmButton","SpellType":"Projectile","Using":"Projectile_AiHelper_UseItem_Large","SpellProperties":["CAST:ApplyStatus(SELF,AI_HELPER_BUFF_MASSIVE,100,4)"],"TargetConditions":["DistanceToTargetLessThan(20) and Tagged('ACT3_LOW_COUNTINGHOUSE_AI_DISARMVAULTTRAP') and Tagged('ACT3_LOW_COUNTINGHOUSE_CASHGUARD', context.Source)"]},{"Name":"Projectile_LOW_HouseOfHope_DebtorExplode","SpellType":"Projectile","Using":"Projectile_Fireball","SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","GROUND:CreateSurface(4,,Fire)","ApplyStatus(BURNING,100,1)"],"TargetRadius":1,"AreaRadius":2,"ExplodeRadius":5,"SpellSuccess":["DealDamage(4d6,Fire)"],"SpellFail":["DealDamage((4d6)/2,Fire)"],"TargetConditions":["not Dead() and not Self() and not Tagged('FIEND')"],"DisplayName":["hbf104c17g29cbg4723gb410g4aaf189c0bcf","1"],"Description":["hdf859fd8gb17fg4a06g953cg0d227a246422","2"],"TooltipDamageList":["DealDamage(4d6,Fire)"],"SpellFlags":["IsHarmful","CanAreaDamageEvade"]},{"Name":"Projectile_LOW_HouseOfHope_DebtorExplode_Imp","SpellType":"Projectile","Using":"Projectile_LOW_HouseOfHope_DebtorExplode","SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","GROUND:CreateSurface(4,,Fire)","ApplyStatus(BURNING,100,1)","GROUND:Spawn(57c030d7-e5a9-445e-ad74-9ed6573d538e)"]},{"Name":"Projectile_LOW_HouseOfHope_DebtorExplode_Merregon","SpellType":"Projectile","Using":"Projectile_LOW_HouseOfHope_DebtorExplode_Imp","SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","GROUND:CreateSurface(4,,Fire)","ApplyStatus(BURNING,100,1)","GROUND:Spawn(48a2d0cd-cb46-4165-ac13-977283ee5320)"]},{"Name":"Projectile_LOW_HouseOfHope_DebtorExplode_Boar","SpellType":"Projectile","Using":"Projectile_LOW_HouseOfHope_DebtorExplode_Imp","SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","GROUND:CreateSurface(4,,Fire)","ApplyStatus(BURNING,100,1)","GROUND:Spawn(3d4fd805-9b88-4a71-843b-1457d96f4235)"]},{"Name":"Projectile_LOW_Raphael_PrimordialHell","SpellType":"Projectile","Using":"Projectile_ChainLightning","SpellProperties":["GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","GROUND:CreateSurface(5,,Fire)","ApplyStatus(BURNING,100,1)"],"AreaRadius":5,"DeathType":"Incinerate","ExplodeRadius":5,"SpellRoll":["not SavingThrow(Ability.Dexterity, 15)"],"SpellSuccess":["DealDamage(15d8,Fire,Magical)","SpawnExtraProjectiles(Projectile_LOW_Raphael_PrimordialHell_Chain)"],"SpellFail":["DealDamage(15d8/2,Fire,Magical)"],"TargetConditions":["not Self() and not Dead() and Enemy()"],"Trajectories":"001ce817-932e-4d8c-bf86-7097178a7806","Icon":"Spell_Evocation_Fireball","DisplayName":["hffafc26egb68fg422bgb0a4g272d32405b00","4"],"Description":["h21f7be7agbd60g4bddgbc7eg175e4a393bcb","5"],"DescriptionParams":["DealDamage(15d8, Fire)","DealDamage(4d6, Fire)"],"TooltipDamageList":["DealDamage(15d8, Fire)"],"TooltipOnSave":"23bf0c8d-a594-4f4c-9571-412af59cb434","CastSound":"CrSpell_Cast_PrimordialHell","UseCosts":["ActionPoint:1","SpellSlotsGroup:3:3:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","6444d598-3e0e-4a14-902a-c067905a0b87,,","97f8db1e-e873-490a-9c33-8dbb4b97e583,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["HasSomaticComponent","HasHighGroundRangeExtension","IsSpell"],"HitAnimationType":"MagicalDamage_External","RechargeValues":"3-6","RequirementConditions":"HasStatus('LOW_RAPHAEL_MONSTER_FORM')","PrepareEffect":"fdbf8e88-c3a5-4151-a81d-429985de422c","CastEffect":"6d134da0-3f09-4bfd-928b-70443b382498","HitEffect":"41de42e1-56d0-4336-8b44-99fc38281525","DamageType":"Fire","Sheathing":"DontChange"},{"Name":"Projectile_LOW_Raphael_HellfireOrb","SpellType":"Projectile","Using":"Projectile_HellfireOrb_DeathKnight","Cooldown":"OncePerTurn","SpellProperties":["GROUND:CreateSurface(4, 2,Hellfire)","SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)"],"DeathType":"Incinerate","TargetConditions":["Enemy() and not Dead()"],"DisplayName":["h2d34ff19g19f0g41c5gaaeegd5cd1ba01d7b","2"],"Description":["h02aac633gf30cg4713g956cg55caf1009dfd","3"],"DescriptionParams":2,"CastSound":"CrSpell_Cast_PrimordialHell","UseCosts":["ActionPoint:1","SpellSlotsGroup:2:2:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","6444d598-3e0e-4a14-902a-c067905a0b87,,","97f8db1e-e873-490a-9c33-8dbb4b97e583,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"RechargeValues":"3-6","MemoryCost":1,"RequirementConditions":"HasStatus('LOW_RAPHAEL_MONSTER_FORM')","CastEffect":"6d134da0-3f09-4bfd-928b-70443b382498","Sheathing":"DontChange"},{"Name":"Projectile_LOW_Raphael_PrimordialHell_Chain","SpellType":"Projectile","Using":"Projectile_LOW_Raphael_DancingFlame","AmountOfTargets":3,"TargetConditions":["not Self() and not Dead() and Enemy()"],"ProjectileCount":3},{"Name":"Projectile_LOW_Raphael_Soul_Explosion","SpellType":"Projectile","Using":"Projectile_DeathBurst_IntellectDevourer","Level":4,"AreaRadius":3,"DeathType":"Necrotic","ExplodeRadius":3,"SpellRoll":["not SavingThrow(Ability.Constitution, 15)"],"SpellSuccess":["DealDamage(5d8, Fire,Magical)"],"SpellFail":["DealDamage(5d8/2, Fire,Magical)"],"TargetConditions":["not Dead() and Enemy()"],"DisplayName":["h59758e13ge7beg430dg9b42g026f74dd3d44","2"],"Description":["ha5d49749ga5ceg4a5fgaf91g0c1de191a3d2","1"],"TooltipDamageList":["DealDamage(5d8, Fire)"]},{"Name":"Projectile_LOW_CountingHouse_AiHelper_UseDocksAlarmTrigger","SpellType":"Projectile","Using":"Projectile_AiHelper_UseItem_Large","SpellProperties":["CAST:ApplyStatus(SELF,AI_HELPER_BUFF_MASSIVE,100,4)"],"TargetConditions":["DistanceToTargetLessThan(20) and Tagged('ACT3_LOW_COUNTINGHOUSE_AI_DOCKSALARM_TRIGGER') and Tagged('ACT3_LOW_COUNTINGHOUSE_CASHGUARD', context.Source) and not HasStatus('SILENCED')"]},{"Name":"Projectile_LOW_WatcherTitan_DummyHellfireMissiles","SpellType":"Projectile","Using":"Projectile_Fireball","Cooldown":"OncePerTurn","SpellProperties":["AI_IGNORE:ApplyStatus(SELF,LOW_STEELWATCHFOUNDRY_TITAN_APBLOCK,100,2)"],"SpellSuccess":["AI_ONLY:DealDamage(8d6,Fire)"],"SpellFail":["AI_ONLY:DealDamage((8d6)/2,Fire)"],"TargetConditions":["Character() and not Self()"],"Trajectories":"f346b284-854e-4dd9-b87c-3938f5178265","Icon":"PassiveFeature_Generic_Explosion","DisplayName":["h4a35a0dag0a61g489bg9eb2g5b32ad54792b","2"],"Description":["hd3c7c40bgf1f4g4d25g9f52g9950bb6e6273","1"],"TooltipPermanentWarnings":["0695feaa-7a95-4216-a292-c0eef5b5c3d0"],"UseCosts":["ActionPoint:1"],"SpellAnimation":["8f8d9961-db99-469b-86af-a468a454387e,,","736f94db-091b-46e7-8d90-ea73ad26a970,,","74b75cd3-7013-4e58-bb10-8c8ffa6c264b,,"],"SpellFlags":["IsHarmful","CannotRotate"],"SpellAnimationIntentType":"Aggressive","RequirementConditions":"HasStatus('BULWARK_MODE')","CastEffect":"d7350c2e-6539-462f-9c9e-a87febd2fb19","TargetEffect":"8c141a70-5db3-4cb6-a1e0-2d1568543165","Sheathing":"WeaponSet"},{"Name":"Projectile_LOW_RamazithTower_TurretArcane","SpellType":"Projectile","Using":"Projectile_Turret_Arcane","SpellProperties":["DealDamage(3d10,Force,Magical)"],"AmountOfTargets":1,"DisplayName":["hfcfd53f2g37b3g46dcg99d3g9c5c8823593c","2"],"TooltipDamageList":["DealDamage(3d10,Force)"]},{"Name":"Projectile_MAG_FireRay","SpellType":"Projectile","Using":"Projectile_FireRay_Cambion","Cooldown":"OncePerShortRestPerItem"},{"Name":"Projectile_END_ThunderTrap","SpellType":"Projectile","Using":"Projectile_ChromaticOrb_Thunder_3","SpellRoll":["not SavingThrow(Ability.Constitution, 10)"],"SpellFail":["DealDamage((5d8)/2,Thunder)"],"TooltipAttackSave":["Constitution"],"CastSound":"Spell_Cast_Damage_Thunder_Thunderwave_L1to3_01","UseCosts":["ActionPoint:1"],"SpellFlags":["IsHarmful","IsTrap","AddFallDamageOnLand"],"HitAnimationType":"MagicalDamage_External","SpellSoundMagnitude":"Big"},{"Name":"Projectile_LOW_SorcerousSundries_ArtistryOfWar","SpellType":"Projectile","Using":"Projectile_MagicMissile_5","DisplayName":["h0dde4b3fg70abg483egadfdg450c483e1255","1"],"Description":["h7ad7b586gfabbg4bdag973dgdb210a8eebb2","2"]},{"Name":"Projectile_MAG_SarevoksArmor_WitheringBarrier_Explosion","SpellType":"Projectile","Using":"Projectile_MOO_DeathBloom_Explosion","SpellProperties":["DealDamage(1d6, Piercing,Magical)"],"TargetConditions":["(Character() and Enemy() and not Dead()) or Item()"],"DescriptionParams":["DealDamage(1d6,Necrotic)"],"TooltipDamageList":["DealDamage(1d6,Necrotic)"],"SpellFlags":["CanAreaDamageEvade","IsTrap"]},{"Name":"Projectile_MAG_Automaton_FireballShot","SpellType":"Projectile","Using":"Projectile_Fireball","Cooldown":"OncePerShortRestPerItem","SpellProperties":["GROUND:CreateSurface(6, 2,Hellfire)","GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","ApplyStatus(SELF, MAG_AUTOMATON_FIREBALL_SHOT_OWNER,100,10)"],"SpellSuccess":["DealDamage(4d6,Fire,Magical)"],"SpellFail":["DealDamage((4d6)/2,Fire,Magical)"],"Icon":"Action_Monster_GortashMachine_FlameThrower","DisplayName":["h01c1b86bge1f5g461fg920eg08b3607a6010","3"],"Description":["h58096498g4691g4778g867agf87437fb2e15","2"],"ExtraDescription":["hd2aed529ge9deg4bbdg8ea3g0b3c4f2fba53","2"],"TooltipDamageList":["DealDamage(4d6,Fire)"],"UseCosts":["ActionPoint:1"],"SpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","9583ecee-cf6c-4735-86db-7ebf1df15eae,,","de006e3f-70fb-4eb7-a98d-d845d15b20e8,,","50696db7-d931-4734-915d-32d038ba99a5,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"DualWieldingSpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","7e67bfd0-2fc2-4d10-bed5-cfda9e660de5,,","eb054308-7fce-4b85-bf4c-7a0031fda7ac,,:4a789a60-04b8-4a26-b476-65cf26ca558b,,","a11b8bcb-ba24-417a-aa86-4e4379c41ee2,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","b2e9c771-3497-444c-b360-23b4441985a1,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"WeaponTypes":"Ammunition","SpellFlags":["HasSomaticComponent","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","CanAreaDamageEvade","IsDefaultWeaponAction","IsConcentration"],"PrepareEffect":"ab9a9a13-7ceb-46ee-bd9e-74c044516fb1","CastEffect":"b26abd87-14b7-4ed0-93d1-f424bc4fa236","Sheathing":"Ranged"},{"Name":"Projectile_MAG_Automaton_FireballShot_Recreate","SpellType":"Projectile","Using":"Projectile_MAG_Automaton_FireballShot","SpellProperties":["GROUND:CreateSurface(6, 2,Hellfire)","GROUND:SurfaceChange(Ignite)","GROUND:SurfaceChange(Melt)","ApplyStatus(SELF, MAG_FIRE_HEAT,100, 2)"],"DisplayName":["h193e0e16gde05g4aaag8dc7g210e32dbf6d9","2"],"Description":["h63406df1gd9b8g4bfcg8ec7g87f8c0630c11","1"],"ExtraDescription":["hb63b2c29g54fcg4de8g861bg38c9667e90cd","2"],"SpellFlags":["HasSomaticComponent","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","CanAreaDamageEvade","IsDefaultWeaponAction"]},{"Name":"Projectile_MAG_Automaton_LightTagging_Shot","SpellType":"Projectile","Using":"Projectile_MainHandAttack","SpellSuccess":["DealDamage(1d4, MainRangedWeaponDamageType)"," ExecuteWeaponFunctors(MainHand)","ApplyStatus(MAG_RADIANT_RADIATING_ORB, 100, 1)"],"Trajectories":"c63c4527-1bdf-4635-ad59-7d7e2f666fa3","Icon":"Action_Monster_GortashMachine_GrenadeLauncher","DisplayName":["h3a1cb81fge541g4da7g93f1g0175f429b4eb","2"],"Description":["h1a0cfc1ag18f1g4bafg9947gf88d8b302873","2"],"TooltipDamageList":["DealDamage(1d4, MainRangedWeaponDamageType)"],"UseCosts":["BonusActionPoint:1"]},{"Name":"Projectile_MAG_IceKnife","SpellType":"Projectile","Using":"Projectile_IceKnife","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Projectile_MAG_MagicMissile_Shot","SpellType":"Projectile","Using":"Projectile_MagicMissile_3","Level":3,"Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"],"SpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","9583ecee-cf6c-4735-86db-7ebf1df15eae,,","de006e3f-70fb-4eb7-a98d-d845d15b20e8,,","50696db7-d931-4734-915d-32d038ba99a5,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"Sheathing":"Ranged"},{"Name":"Projectile_MAG_MelfsMagicArrow","SpellType":"Projectile","Using":"Projectile_AcidArrow","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Projectile_MAG_PushingAttack","SpellType":"Projectile","Using":"Projectile_PushingAttack","Cooldown":"OncePerShortRest","SpellSuccess":["IF(not SavingThrow(Ability.Strength, ManeuverSaveDC())):Force(5)","DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)"," ExecuteWeaponFunctors(MainHand)"],"TooltipDamageList":["DealDamage(MainMeleeWeapon, MainRangedWeaponDamageType)"],"SpellFlags":["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","AddFallDamageOnLand","IsDefaultWeaponAction"]},{"Name":"Projectile_MAG_DivingStrike","SpellType":"Projectile","Using":"Projectile_DivingStrike","Cooldown":"OncePerShortRest","SpellFlags":["IsJump","IsHarmful","HasHighGroundRangeExtension","CombatLogSetSingleLineRoll","IsDefaultWeaponAction"],"PrepareEffect":"9342eaf4-6a20-44c6-a740-863b0f9c2475","Sheathing":"Melee"},{"Name":"Projectile_MAG_Barbarian_Rage_EmotionalDamage_Explosion","SpellType":"Projectile","AreaRadius":3,"ExplodeRadius":3,"SpellSuccess":["IF(not SavingThrow(Ability.Wisdom, ManeuverSaveDC())):DealDamage(2d4, Psychic,Magical)"],"SpellFail":["DealDamage(1d4, Psychic,Magical)"],"TargetConditions":["not Self() and not Dead() and Enemy()"],"Trajectories":"f346b284-854e-4dd9-b87c-3938f5178265,78f998fb-2bb4-c8bd-c170-fcd899abc905,a62c27e3-86c0-db69-8f04-0ea3074cae7a","DisplayName":["h80b663fag8e9dg4b0dg8160gfb5853803ab8","1"],"SpellFlags":["IsTrap"]},{"Name":"Projectile_MAG_Barbarian_BrutalLeap","SpellType":"Projectile","Using":"Projectile_Jump_Minotaur","SpellFlags":["IsJump","AddFallDamageOnLand","HasHighGroundRangeExtension","IgnoreVisionBlock","Stealth","Invisible","CannotTargetCharacter","CannotTargetItems","Temporary"]},{"Name":"Projectile_Fireball_Trap_VeryHard","SpellType":"Projectile","Using":"Projectile_Fireball_Trap","AreaRadius":3,"ExplodeRadius":3,"SpellRoll":["not SavingThrow(Ability.Dexterity, 15)"],"SpellSuccess":["DealDamage(8d6,Fire)"],"SpellFail":["DealDamage((8d6)/2,Fire)"],"TooltipDamageList":["DealDamage(8d6,Fire)"]},{"Name":"Projectile_MAG_RayOfEnfeeblement","SpellType":"Projectile","Using":"Projectile_RayOfEnfeeblement","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Projectile_LOW_KurwinCoffin_ExplodingBody","SpellType":"Projectile","Using":"Projectile_SCL_Distillery_PoisonCloud_Trap","SpellProperties":"SwitchDeathType(Explode);GROUND:CreateSurface(3,3,PoisonCloud);","HitAnimationType":"MagicalDamage_External"}])