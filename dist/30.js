loadSpell([{"_flag":"","Name":"Target_END_Thrall_CalmEmotions","SpellType":"Target","Using":"Target_CalmEmotions","UseCosts":["ActionPoint:1"],"RechargeValues":"5-6"},{"_flag":"","Name":"Target_END_Thrall_StaggeringSmite","SpellType":"Target","Using":"Target_StaggeringSmite","HitCosts":["BonusActionPoint:1"]},{"_flag":"","Name":"Target_END_Emperor_Sleep","SpellType":"Target","Using":"Target_Sleep_6","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_END_Emperor_BlackTentacles","SpellType":"Target","Using":"Target_BlackTentacles","Cooldown":"OncePerShortRest","RequirementConditions":["<b>Player()</b>"],"UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_END_Emperor_Slow","SpellType":"Target","Using":"Target_Slow","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_END_Emperor_Counterspell","SpellType":"Target","Using":"Target_Counterspell","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_END_AllyAbility_HagInvisibility","SpellType":"Target","Using":"Target_Invisibility_Greater","Level":0,"SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(GREATER_INVISIBILITY,100,2)</b>","<b>ApplyStatus(SELF,END_ALLYABILITIES_HAGALLYCONSUMED, 100, -1)</b>"],"TargetRadius":24,"Requirements":"Combat","RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_HAGALLYCONSUMED')</b>"],"AmountOfTargets":5,"Icon":"Action_EndGame_HagInvisibility","DisplayName":"Veil of the Weird","Description":"Channel Auntie Ethel's hag magic to render [1] creatures within range <b>Invisible</b>.","DescriptionParams":5,"TooltipStatusApply":["<b>ApplyStatus(GREATER_INVISIBILITY,100,2)</b>"],"TooltipPermanentWarnings":["03dbd204-effe-422f-baa3-440565d6e32f"],"CastSound":"Spell_Cast_Summon_PlanarAlly_L6to8","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell"],"PrepareEffect":"6b1424f5-2b89-4c06-b341-c59fb54bab48","CastEffect":"04f1fd3a-d41b-4aa1-b255-eb96edd2a5f3"},{"_flag":"","Name":"Target_END_AllyAbility_PhasmSummon","SpellType":"Target","Using":"Target_END_AllyAbility_NightsongSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_PHASMALLYINTERDICTED, 100, -1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_SHARALLIESINTERDICTED') and not HasStatus('END_ALLYABILITIES_PHASMALLYCONSUMED')</b>"],"Icon":"GenericIcon_Intent_Summon","DisplayName":"An Apple a Day","Description":"Summon Zlorb - a shapeshifting monstrosity that can adopt the aspect of several monsters and beasts. "},{"_flag":"","Name":"Target_TWN_Tollhouse_FleshToGold","SpellType":"Target","Using":"Target_FleshToStone","SpellSuccess":["<b>ApplyStatus(TWN_TOLLHOUSE_FLESH_TO_GOLD_1,100,1)</b>"],"TargetConditions":["not <b>Self() and not Dead() and not HasFleshToSToneCheck() and not Tagged('ACT2_TWN_TOLLHOUSECOLLECTOR')</b>"],"DisplayName":"Flesh to Gold","Description":"<b>Restrain</b> a target and, after 3 rounds, the target becomes inactive solid gold until the spell ends.","TooltipStatusApply":["<b>ApplyStatus(TWN_TOLLHOUSE_GOLDIFIED,100,3)</b>"],"TargetSound":"Action_Impact_Item_FleshtoGold"},{"_flag":"","Name":"Target_END_VossEncounter_GithMistyStep","SpellType":"Target","Using":"Target_MistyStep","SpellFlags":["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold"]},{"_flag":"","Name":"Target_END_AllyAbility_LorroakanArtillery","SpellType":"Target","Using":"Target_END_AllyAbility_RolanArtillery","TargetRadius":30,"Icon":"Action_EndGame_RolanArtillery","DisplayName":"Lorroakan's Firestorm","Description":"Lorroakan uses all the arcane might of Ramazith's Tower to call down a fiery barrage. ","TooltipPermanentWarnings":["03dbd204-effe-422f-baa3-440565d6e32f"]},{"_flag":"","Name":"Target_END_AllyAbilities_HarperSummon","SpellType":"Target","Using":"Target_END_AllyAbility_NightsongSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_HARPERABILITYINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_HARPERABILITYINTERDICTED') and not HasStatus('END_ALLYABILITIES_HARPERALLIESCONSUMED')</b>"],"Icon":"Action_EndGameAlly_HarperSummon","DisplayName":"Silver Harp Squadron","Description":"Summon elite Harper archers to provide ranged support from your back ranks.","PrepareSound":"Action_Prepare_Jump","PrepareLoopSound":"Action_Loop_Jump","TargetSound":"CrSpell_Impact_EndSummon"},{"_flag":"","Name":"Target_END_AllyAbilities_WatchSummon","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_WATCHALLIESINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_WATCHALLIESINTERDICTED') and not HasStatus('END_ALLYABILITIES_WATCHALLIESCONSUMED')</b>"],"Icon":"Action_EndGameAlly_WatchSummon","DisplayName":"The Watch","Description":"Summon some of the City Watch's great weapon fighters to protect their home. "},{"_flag":"","Name":"Target_END_AllyAbilities_GrenediersSummon","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_GRENADIERALLIESINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_GRENADIERALLIESINTERDICTED') and not HasStatus('END_ALLYABILITIES_GRENADIERALLIESCONSUMED')</b>"],"Icon":"Action_EndGameAlly_GrenadiersSummon","DisplayName":"Ironhand Grenadiers","Description":"Summon the Ironhand Gnomes to damage and debilitate with thrown grenades. "},{"_flag":"","Name":"Target_END_AllyAbilities_KeeneSummon","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILTIES_KEENEALLIESINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILTIES_KEENEALLIESINTERDICTED') and not HasStatus('END_ALLYABILTIES_KEENEALLIESCONSUMED')</b>"],"Icon":"Action_EndGameAlly_KeeneSummon","DisplayName":"Guildmaster Keene's Fixers","Description":"Summon two elite assassin mercenaries from the Guild's ranks. "},{"_flag":"","Name":"Target_END_AllyAbilities_VeteranSummon","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_VETERANALLIESINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_VETERANALLIESINTERDICTED') and not HasStatus('END_ALLYABILITIES_VERTERANALLIESCONSUMED')</b>"],"Icon":"Action_EndGameAlly_VeteranSummon","DisplayName":"Hellrider Platoon","Description":"Summon Zevlor's Hellriders to <b>Smite</b> foes and support frontline allies."},{"_flag":"","Name":"Target_END_AllyAbilities_GurSummon","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_VAMPIREALLIESINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_GURALLIESINTERDICTED') and not HasStatus('END_ALLYABILTIES_GURALLIESCONSUMED')</b>"],"Icon":"Action_EndGameAlly_GurReinforcement","DisplayName":"Gur Huntwardens","Description":"Summon Gur monster hunters to hinder enemies while slipping in and out of the frontlines. "},{"_flag":"","Name":"Target_END_AllyAbilities_VampireCreaturesSummon","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_VAMPIREALLIESINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_VAMPIREALLIESINTERDICTED') and not HasStatus('END_ALLYABILTIES_VAMPIREALLIESCONSUMED')</b>"],"Icon":"Action_EndGameAlly_VampireCreatures","DisplayName":"Retinue of the Vampire Lord","Description":"Summon an undead horde to overwhelm a section of the battlefield. "},{"_flag":"","Name":"Target_END_AllyAbilties_ShadowAdepts","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_SHARALLIESCONSUMED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_SHARALLIESCONSUMED') and not HasStatus('END_ALLYABILITIES_SHARALLIESINTERDICTED')</b>"],"Icon":"Action_EndGameAlly_ShadowAdepts","DisplayName":"Nightbringer's Shadow Adepts","Description":"Summon powerful Sharran clerics and their warrior underlings to battle.","TargetSound":"CrSpell_Impact_EndSummon"},{"_flag":"","Name":"Target_END_AllyAbilities_ZhentarimSummon","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILTIES_ZHENTARIMALLIESINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILTIES_ZHENTARIMALLIESCONSUMED') and not HasStatus('END_ALLYABILTIES_ZHENTARIMALLIESINTERDICTED')</b>"],"Icon":"Action_EndGameAlly_ZhentarimUnits","DisplayName":"Black Fist Enforcers","Description":"Summon two elite assassin mercenaries from the Zhentarim's ranks. ","TargetSound":"CrSpell_Impact_EndSummon"},{"_flag":"","Name":"Target_END_AllyAbilities_KuoToaSummon","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_KUOTOAINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_KUOTOAINTERDICTED') and not HasStatus('END_ALLYABILITIES_KUOTOACONSUMED')</b>"],"Icon":"Action_EndGame_KuoToaSummon","DisplayName":"Kuo-Toa Acolytes","Description":"Call the fishfolk faithful from the Underdark to fight for their god - you. "},{"_flag":"","Name":"Target_END_AllyAbilities_FlamingFistSummon","SpellType":"Target","Using":"Target_END_AllyAbilities_HarperSummon","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>ApplyStatus(SELF,END_ALLYABILITIES_FLAMINGFISTABILITYINTERDICTED,100,-1)</b>","GROUND:<b>CameraWait(3.5)</b>"],"RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_FLAMINGFISTALLYCONSUMED') and not HasStatus('END_ALLYABILITIES_FLAMINGFISTALLYINTERDICTED')</b>"],"Icon":"Action_EndGameAlly_FlamingFistSummon","DisplayName":"Florrick's Cohort","Description":"Summon Florrick's personal guard - highly defensive warriors who can hold their own in melee. ","TargetSound":"CrSpell_Impact_EndSummon"},{"_flag":"","Name":"Target_END_AllyAbilities_StunningGaze","SpellType":"Target","Using":"Target_StunningGaze_DeathsHead_Hardcore","Cooldown":"OncePerShortRest","SpellRoll":["not <b>SavingThrow(Ability.Wisdom, SourceSpellDC())</b>"],"SpellSuccess":["<b>ApplyStatus(STUNNED,100,1)</b>"],"TargetConditions":["<b>Character()</b>"],"Sheathing":"Sheathed"},{"_flag":"","Name":"Target_END_AllyAbility_IsobelHeal","SpellType":"Target","SpellContainerID":"Shout_END_AllyAbilities_MultipleSummon","SpellProperties":["<b>RegainHitPoints(14d6)</b>","<b>ApplyStatus(SELF,END_ALLYABILITIES_ISOBELALLYCONSUMED, 100, -1)</b>"],"TargetRadius":24,"Requirements":"Combat","RequirementConditions":["not <b>HasStatus('END_ALLYABILITIES_ISOBELALLYCONSUMED')</b>"],"TargetConditions":["<b>Ally() and not Dead() and not Tagged('UNDEAD') and not Tagged('CONSTRUCT')</b>"],"AmountOfTargets":6,"Icon":"Action_EndGame_IsobelHeal","DisplayName":"Balm of the Moonmaiden","Description":"Call upon Isobel to offer a furtive prayer to Selûne, healing up to [1] nearby allies. ","DescriptionParams":["6","<b>RegainHitPoints(14d6)</b>"],"TooltipDamageList":["<b>RegainHitPoints(14d6)</b>"],"TooltipPermanentWarnings":["03dbd204-effe-422f-baa3-440565d6e32f"],"PrepareSound":"Action_Prepare_Jump","PrepareLoopSound":"Action_Loop_Jump","CastSound":"Action_Cast_AllySummon","CastTextEvent":"Cast","CycleConditions":"<b>Ally() and not Dead() and not Tagged('UNDEAD')</b>","UseCosts":["ActionPoint:1"],"SpellAnimation":["79f76fb2-89e4-4354-8507-e654f5d8defb,,","d0ac8c11-f154-4590-9d0a-9cd438f2afc3,,","89089626-854f-4d3b-84f9-57cbfa024dc8,,","d93f298f-38b8-40cf-adb7-b83763bf52df,,","fc011021-f38b-4154-ac7f-9aaeff994f04,,"],"VerbalIntent":"Healing","SpellFlags":["HasVerbalComponent","IsLinkedSpellContainer","IgnoreVisionBlock","Wildshape"],"HitAnimationType":"MagicalNonDamage","PrepareEffect":"68441fef-df1c-4622-acba-e79f53edf7e7","CastEffect":"57405255-3c44-4f75-9ece-0dcf5dfcfec7","TargetEffect":"d16a93f4-ddb5-4175-9b3f-22eced19ff02","HitEffect":"5f874fdf-33ad-4a19-a9ed-33abb8e675c7"},{"_flag":"","Name":"Target_EPI_Polymorph_GaleGod","SpellType":"Target","Using":"Target_Polymorph","Level":9,"SpellProperties":["<b>ApplyStatus(EPI_POLYMOPH_TRESSYM,100,5)</b>"],"AmountOfTargets":1,"Icon":"Spell_GodGale_GreaterPolymorph_Tressym","DisplayName":"Formsculpt: Tressym ","Description":"Rearrange a creature's very being into the image of Gale's darling pet. ","ExtraDescription":"If the tressym's hit points drop to 0, the target reverts to its original form with its original hit points. ","TooltipStatusApply":["<b>ApplyStatus(EPI_POLYMOPH_TRESSYM,100,5)</b>"],"PrepareSound":"Spell_Prepare_Utility_Gale_God","CastSound":"Spell_Cast_Control_Tressymise","TargetSound":"Spell_Impact_Control_Tressymise","UseCosts":["BonusActionPoint:1"],"SpellAnimation":["dc1cfff3-521b-45ee-8c44-9b39a3cf284b,dc1cfff3-521b-45ee-8c44-9b39a3cf284b,dc1cfff3-521b-45ee-8c44-9b39a3cf284b","9eb7733a-0a16-4af9-ba2c-6ec3e2cb886d,9eb7733a-0a16-4af9-ba2c-6ec3e2cb886d,9eb7733a-0a16-4af9-ba2c-6ec3e2cb886d","d3ddd0a9-692a-494c-9dd4-be276b73318c,d3ddd0a9-692a-494c-9dd4-be276b73318c,d3ddd0a9-692a-494c-9dd4-be276b73318c","48e1a0b5-a8d2-4f7b-967e-9662947a41d2,48e1a0b5-a8d2-4f7b-967e-9662947a41d2,48e1a0b5-a8d2-4f7b-967e-9662947a41d2","53e07d91-4ba4-4f0e-bd2e-8ee041cca5af,,"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","Temporary"],"PrepareEffect":"ce8bbe41-3864-44a6-b5ad-610468dd2aa1","CastEffect":"67c805a4-56a8-4b6d-a3fb-87d997a805ba","TargetEffect":"d6798c3a-6530-4e61-a9d5-1595b736f98a"},{"_flag":"","Name":"Target_EPI_PartyTime_GaleGod","SpellType":"Target","Using":"Target_IrresistibleDance","Level":9,"SpellProperties":["GROUND:<b>Spawn(79050068-7ce3-43f9-a9a3-1646f5eb39c3)</b>","<b>IF(Character())</b>:<b>ApplyStatus(EPI_GALEGOD_IRRESISTIBLE_DANCE,100,1)</b>"],"TargetRadius":12,"AreaRadius":3,"Icon":"Spell_GodGale_PartyTime","DisplayName":"Divine Revelry","Description":"Conjure forth a barrel of Shadowdark Ale from the Yawning Portal and spread an <b>Irrestible Dance</b> across all nearby creatures. ","TooltipStatusApply":["<b>ApplyStatus(IRRESISTIBLE_DANCE,100,1)</b>"],"PrepareSound":"Spell_Prepare_Utility_Gale_God","TargetSound":"Spell_Impact_Control_PartyTime","UseCosts":["ActionPoint:1"],"SpellAnimation":["dc1cfff3-521b-45ee-8c44-9b39a3cf284b,dc1cfff3-521b-45ee-8c44-9b39a3cf284b,dc1cfff3-521b-45ee-8c44-9b39a3cf284b","48500cfd-8149-4e6c-87cd-d910cc196cb4,48500cfd-8149-4e6c-87cd-d910cc196cb4,48500cfd-8149-4e6c-87cd-d910cc196cb4","145a7e0b-e2b4-436b-9013-31035368da63,145a7e0b-e2b4-436b-9013-31035368da63,145a7e0b-e2b4-436b-9013-31035368da63","48e1a0b5-a8d2-4f7b-967e-9662947a41d2,48e1a0b5-a8d2-4f7b-967e-9662947a41d2,48e1a0b5-a8d2-4f7b-967e-9662947a41d2","53e07d91-4ba4-4f0e-bd2e-8ee041cca5af,,"],"SpellFlags":["HasVerbalComponent","HasHighGroundRangeExtension","IsSpell","Temporary"],"PrepareEffect":"6a6643d1-1fa0-4a42-a734-ef7694284d41","CastEffect":"6842402d-55ac-44dd-9b27-23e1a4168f8a","TargetEffect":"bf0a4f25-766c-42c0-b7ce-a0a0b7ed09c2","PositionEffect":"bf0a4f25-766c-42c0-b7ce-a0a0b7ed09c2"},{"_flag":"","Name":"Target_LOW_VampireBite","SpellType":"Target","Using":"Target_VampireBite_Astarion","TooltipStatusApply":["<b>ApplyStatus(LOW_VAMPIRE_BITE_HAPPY, 100, -1)</b>","<b>ApplyStatus(LOW_VAMPIRE_BITE_WEAK,100,-1)</b>"]},{"_flag":"","Name":"Target_LOW_DarkUrge_PowerWordKill","SpellType":"Target","Using":"Target_PowerWordKill","DisplayName":"Power Word Kill","Description":"Compel an enemy with [1] <b>hit points</b> or fewer to die instantly. Limited to one use only."},{"_flag":"","Name":"Target_MAG_BeckoningDarkness","SpellType":"Target","Using":"Target_SHA_Justiciar_BeckoningDarkness","TargetConditions":["<b>Character() and Enemy() and not HasObscuredState(ObscuredState.Clear)</b>"],"Icon":"PassiveFeature_Generic_Darkness","SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","2f893fad-98eb-47cf-a524-dd4efd42bc2a,,","ca3147a8-2cf6-45a8-ac9a-1ce0fc11305f,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["IsHarmful","IsSpell"],"PrepareEffect":"a0458d31-f8ef-419a-8708-5715c81e91d3"},{"_flag":"","Name":"Target_MAG_HungerOfHadar","SpellType":"Target","Using":"Target_HungerOfHadar","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsConcentration","IsSpell","CannotTargetItems"]},{"_flag":"","Name":"Target_MAG_WhipOfShar","SpellType":"Target","Using":"Target_PsionicPull","SpellSchool":"Necromancy","SpellRoll":["<b>Attack(AttackType.MeleeSpellAttack)</b>"],"SpellSuccess":["TARGET:<b>IF(TargetSizeEqualOrSmaller(Size.Large))</b>:<b>Force(-5, OriginToEntity, Neutral, false, true)</b>"," <b>DealDamage(LevelMapValue(D6Cantrip),Piercing,Magical)</b>"],"TargetConditions":["not <b>Self() and not Grounded() and (Item() or Character() or Dead())</b>"],"DisplayName":"Whip of Shar","Description":"Strike at a creature with a shadow whip and pull it [1] closer to you.","DescriptionParams":["<b>Distance(5)</b>"],"UseCosts":["BonusActionPoint:1"],"PrepareEffect":"4c9f1d91-fcd1-40eb-b704-121d112f7e3b","CastEffect":"456933cc-f8c3-42d9-ae4c-622d83391cc6","TargetEffect":"aafee3d2-0f5b-42b7-a91c-1397fb58dd25"},{"_flag":"","Name":"Target_MAG_MenacingAttack","SpellType":"Target","Using":"Target_MenacingAttack","Cooldown":"OncePerTurn","SpellSuccess":["<b>IF(not SavingThrow(Ability.Wisdom, ManeuverSaveDC(),AdvantageOnFrightened(), DisadvantageOnFrightened()))</b>:<b>ApplyStatus(FRIGHTENED,100,2)</b>","<b>DealDamage(MainMeleeWeapon + ProficiencyBonus, MainMeleeWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>"],"TooltipDamageList":["<b>DealDamage(MainMeleeWeapon + ProficiencyBonus, MainMeleeWeaponDamageType)</b>"]},{"_flag":"","Name":"Target_MAG_HuntersMark_Grymskull","SpellType":"Target","Using":"Target_HuntersMark","Cooldown":"OncePerRestPerItem","UseCosts":["BonusActionPoint:1"]},{"_flag":"","Name":"Target_MAG_TrueStrike_Grymskull","SpellType":"Target","Using":"Target_TrueStrike","Cooldown":"OncePerShortRest","UseCosts":["BonusActionPoint:1"]},{"_flag":"","Name":"Target_ORI_Gale_ShadowSummon","SpellType":"Target","Using":"Target_CreateUndead","Cooldown":"OncePerRestPerItem","SpellProperties":["<b>SwitchDeathType(Explode)</b>","GROUND:<b>Summon(122ce989-2603-4bf4-a3ee-8b2513c39d5e, -1,,,'ShadowSummonStack',MAG_SHADOW_SUMMON,UNSUMMON_ABLE)</b>"],"TargetConditions":["<b>CanStand('122ce989-2603-4bf4-a3ee-8b2513c39d5e')</b>"],"Icon":"Spell_Gale_ShadowSummon","DisplayName":"Conjure Shadow Lantern Wraith","Description":"Pull an undead creature from the depths of the Shadow Lantern's depraved magic to join your side in combat.","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent"]},{"_flag":"","Name":"Target_MAG_ThornWhip_Sorrow","SpellType":"Target","Using":"Target_ThornWhip","Cooldown":"OncePerTurn","SpellSuccess":["TARGET:<b>IF(TargetSizeEqualOrSmaller(Size.Large))</b>:<b>Force(-3, OriginToEntity, Neutral, false, true)</b>"," <b>DealDamage(1d4+max(1,SpellCastingAbilityModifier), Piercing,Magical)</b>"],"DisplayName":"Sorrowful Lash","TooltipDamageList":["<b>DealDamage(1d4+max(1,SpellCastingAbilityModifier), Piercing)</b>"],"UseCosts":["BonusActionPoint:1"],"SpellFlags":["IsSpell","HasVerbalComponent","HasSomaticComponent","AddFallDamageOnLand","Temporary"]},{"_flag":"","Name":"Target_SHA_Apprentice_DaggerOfShar_Spell","SpellType":"Target","Using":"Target_DEN_Apprentice_DaggerOfShar_Spell"},{"_flag":"","Name":"Target_ORI_Wyll_SummonCambion","SpellType":"Target","Using":"Target_PlanarAlly_Cambion","Cooldown":"OncePerRestPerItem","SpellProperties":["Ground:<b>Summon(6708ae4b-8dcf-4812-bdba-fd5fe1c343f6, -1,Projectile_AiHelper_Summon_Strong,,'PlanarAllyStack',MAG_CAMBION_SUMMON,SHADOWCURSE_SUMMON_CHECK,KNOCKED_OUT_SUMMON_DISMISS,UNSUMMON_ABLE)</b>"],"UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_OrphicHammer_ChainBreaker","SpellType":"Target","Using":"Target_DispelMagic","TargetRadius":"MeleeMainWeaponRange","SpellRoll":["<b>Attack(AttackType.MeleeWeaponAttack)</b>"],"SpellSuccess":["<b>RemoveStatus(SG_Paralyzed)</b>","<b>RemoveStatus(SG_Restrained)</b>","<b>RemoveStatus(SG_Paralyzed)</b>","<b>RemoveStatus(SG_Stunned)</b>"],"DisplayName":"Unshackling Strike","Description":"Smite the magical bonds keeping a creature <b>Restrained</b>, <b>Paralysed</b>, and <b>Stunned</b>, freeing it.","PreviewCursor":"Melee","UseCosts":["ActionPoint:1"],"SpellAnimation":["5dbfc67e-a1f4-4a91-b398-4df1ad989c49,,","6f957f78-322e-465f-b314-27299a98add7,,","63c0501c-14aa-467c-8980-45ed023ab15d,,","e6af1757-da0b-4640-8ce5-ea559816d2b0,,","08e862c4-75d3-489d-bdb2-b2f95031373e,,","3ed0eebd-86d0-4902-bcea-e0b039e9ad1f,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"DualWieldingSpellAnimation":["b6a6bde4-f4f3-4f10-bd8b-e642a8da4aa9,,","550c6598-8929-4071-aced-c12f5c9ad8aa,,","da4fb3e1-c9e0-4d16-ba92-aca8def437b3,,","be687d06-cb06-4fca-b977-bd2746cacc91,,","12773179-f31c-4c27-a8d5-0649df16995d,,","7bd69a21-e7f9-4c8b-aaf3-64ad999293b4,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"WeaponTypes":"Melee","SpellFlags":["HasVerbalComponent","HasSomaticComponent"],"Sheathing":"Melee"},{"_flag":"","Name":"Target_MAG_Tyrant_Command_Container","SpellType":"Target","Using":"Target_Command_Container_3","Level":3,"ContainerSpells":["Target_MAG_Tyrant_Command_Halt","Target_MAG_Tyrant_Command_Approach","Target_MAG_Tyrant_Command_Drop","Target_MAG_Tyrant_Command_Flee","Target_MAG_Tyrant_Command_Grovel"],"Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_Tyrant_Command_Halt","SpellType":"Target","Using":"Target_Command_Halt_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_Tyrant_Command_Approach","SpellType":"Target","Using":"Target_Command_Approach_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_Tyrant_Command_Drop","SpellType":"Target","Using":"Target_Command_Drop_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_Tyrant_Command_Flee","SpellType":"Target","Using":"Target_Command_Flee_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_Tyrant_Command_Grovel","SpellType":"Target","Using":"Target_Command_Grovel_3","Level":3,"SpellContainerID":"Target_MAG_Tyrant_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_Bhaalist_Hold_Person","SpellType":"Target","Using":"Target_HoldPerson_3","Level":3,"Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_LOW_MinscHideout_MinscAttacksWall","SpellType":"Target","Using":"Target_UnarmedAttack","SpellProperties":["<b>DealDamage(10, Bludgeoning, Nonmagical)</b>"],"SpellFlags":["IsAttack","IsMelee","IsHarmful","DisableBlood"],"Sheathing":"Sheathed"},{"_flag":"","Name":"Target_MAG_Spectator_ParalyzingRay","SpellType":"Target","Using":"Target_UND_Spectator_Ray_Paralyzing","Level":3,"SpellSchool":"Necromancy","Cooldown":"OncePerRestPerItem","SpellSuccess":["<b>ApplyStatus(PARALYZED_SPECTATOR,100, 2)</b>"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL, 100, 0)</b>"],"Icon":"GenericIcon_Intent_Damage","DisplayName":"Paralyzing Ray","Description":"<b>Paralyzes</b> its target.","TooltipAttackSave":["Constitution"],"TooltipStatusApply":["<b>ApplyStatus(PARALYZED_SPECTATOR,100, 2)</b>"],"UseCosts":["ActionPoint:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90,,","141f48d9-9615-496a-8737-9240f0dba60d,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["IsSpell","HasHighGroundRangeExtension","HasVerbalComponent","HasSomaticComponent","RangeIgnoreVerticalThreshold","IsHarmful"],"PrepareEffect":"d7ff6074-0dee-46eb-84c2-fed6118b0cc3"},{"_flag":"","Name":"Target_MAG_Spectator_FearRay","SpellType":"Target","Using":"Target_UND_Spectator_Ray_Fear","Level":3,"SpellSchool":"Necromancy","Cooldown":"OncePerRestPerItem","SpellSuccess":["<b>ApplyStatus(FRIGHTENED,100, 2)</b>"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL, 100, 0)</b>"],"Icon":"GenericIcon_Intent_Control","DisplayName":"Ray of Fear","Description":"<b>Frightens</b> your target.","TooltipAttackSave":["Wisdom"],"TooltipStatusApply":["<b>ApplyStatus(FRIGHTENED,100, 2)</b>"],"UseCosts":["ActionPoint:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90,,","141f48d9-9615-496a-8737-9240f0dba60d,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["IsSpell","HasHighGroundRangeExtension","HasVerbalComponent","HasSomaticComponent","RangeIgnoreVerticalThreshold","IsHarmful"],"PrepareEffect":"d7ff6074-0dee-46eb-84c2-fed6118b0cc3"},{"_flag":"","Name":"Target_MAG_Spectator_WoundingRay","SpellType":"Target","Using":"Target_UND_Spectator_Ray_Wounding","Level":3,"SpellSchool":"Necromancy","Cooldown":"OncePerRestPerItem","SpellSuccess":["<b>DealDamage(2d8,Necrotic,Magical)</b>"],"SpellFail":["<b>DealDamage((2d8)/2,Necrotic,Magical)</b>"],"Icon":"GenericIcon_DamageType_Necrotic","DisplayName":"Wounding Ray","Description":"Deals [1].","DescriptionParams":["<b>DealDamage(2d8,Necrotic)</b>"],"ExtraDescriptionParams":["<b>DealDamage(2d8,Necrotic)</b>"],"TooltipDamageList":["<b>DealDamage(2d8,Necrotic)</b>"],"TooltipAttackSave":["Constitution"],"UseCosts":["ActionPoint:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","cd5e5d4a-38e1-4d4d-b346-3fbc1e4c3c90,,","141f48d9-9615-496a-8737-9240f0dba60d,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["IsSpell","HasHighGroundRangeExtension","HasVerbalComponent","HasSomaticComponent","RangeIgnoreVerticalThreshold","IsHarmful"],"PrepareEffect":"d7ff6074-0dee-46eb-84c2-fed6118b0cc3"},{"_flag":"","Name":"Target_MAG_EnsnaringStrike_Shield","SpellType":"Target","Using":"Target_EnsnaringStrike","Cooldown":"OncePerShortRestPerItem","AIFlags":["CanNotUse"],"SpellRoll":["not <b>SavingThrow(Ability.Strength, SourceSpellDC(),AdvantageOnRestrained(),DisadvantageOnRestrained())</b>"],"SpellSuccess":["<b>ApplyStatus(ENSNARING_STRIKE,100, 3)</b>","<b>DealDamage(1d4, Bludgeoning,Magical)</b>"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL, 100, 0)</b>"],"DisplayName":"Woad's Ensnaring Strike","TooltipDamageList":["<b>DealDamage(1d4, Bludgeoning)</b>"],"TooltipStatusApply":["<b>ApplyStatus(ENSNARING_STRIKE,100, 3)</b>"],"CastTextEvent":"CastOffhand","UseCosts":["BonusActionPoint:1"],"SpellAnimation":["8b8bb757-21ce-4e02-a2f3-97d55cf2f90b,,","c1df9aea-8be9-4de3-bcbc-4e4c1e44dc37,,","722df2d7-7898-4b0b-b930-5a850b55ccf0,,","a693a7c3-e7e7-4edb-98dd-db5fd700663f,,","7bb52cd4-0b1c-4926-9165-fa92b75876a3,,","35f5cba8-3706-46d5-9a1e-2def9ba22473,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"SpellFlags":["HasVerbalComponent","IsSpell","IsMelee","IsHarmful"]},{"_flag":"","Name":"Target_MAG_Druid_Armor_PlantGrowth","SpellType":"Target","Using":"Target_PlantGrowth","Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_Druid_HallucinationSpores","SpellType":"Target","Using":"Target_HallucinationSpores","PrepareSound":"Action_Prepare_Druid_SpreadingSpores","PrepareLoopSound":"Action_Loop_Druid_SpreadingSpores","SpellAnimation":["cc6063ad-e800-4e2d-baee-6620dae744ca,,","fb6ce5ad-6b56-4695-89c3-9133a44a763d,,","0cdd6ae5-cf8a-4fc6-8ff5-2cdbd5176046,,","a0a15c9e-0cbc-4086-90ff-a932c3027a98,,","c7afcdc2-f42d-4aa7-b400-9794ba1ec84b,,"],"SpellAnimationIntentType":"Peaceful","PrepareEffect":"44b75daa-f458-4c93-aa4f-7d277e356414","Sheathing":"Sheathed"},{"_flag":"","Name":"Target_MAG_Druid_PacifyingSpores","SpellType":"Target","Using":"Target_PacifyingSpores","PrepareSound":"Action_Prepare_Druid_SpreadingSpores","PrepareLoopSound":"Action_Loop_Druid_SpreadingSpores","SpellAnimation":["cc6063ad-e800-4e2d-baee-6620dae744ca,,","59a9ac6e-ece1-4ab7-8c2a-3fbf8961e554,,","446677f9-b1f1-4cad-9f25-e1779bb9be39,,","a0a15c9e-0cbc-4086-90ff-a932c3027a98,,","c7afcdc2-f42d-4aa7-b400-9794ba1ec84b,,"],"SpellAnimationIntentType":"Peaceful","PrepareEffect":"3947edf4-a565-4d82-a4e1-43b64f1c9ef4","Sheathing":"Sheathed"},{"_flag":"","Name":"Target_MAG_Djinni_MageHand","SpellType":"Target","Using":"Target_MageHand","Cooldown":"OncePerShortRestPerItem","SpellProperties":["GROUND:<b>IF(not HasPassive('MageHandLegerdemain', context.Source))</b>:<b>Summon(eddf2b83-21d3-4d6f-b958-c30f00dbbb92, 10,,,,UNSUMMON_ABLE_MAGEHAND,MAG_DJINNI_MAGE_HAND,SHADOWCURSE_SUMMON_CHECK)</b>","GROUND:<b>IF(HasPassive('MageHandLegerdemain', context.Source))</b>:<b>Summon(eddf2b83-21d3-4d6f-b958-c30f00dbbb92, 10,,,,INVISIBLE,UNSUMMON_ABLE_MAGEHAND,MAG_DJINNI_MAGE_HAND,SHADOWCURSE_SUMMON_CHECK)</b>"]},{"_flag":"","Name":"Target_MAG_FindFamiliar_Raven","SpellType":"Target","Using":"Target_FindFamiliar_Raven_3","Level":3,"Cooldown":"OncePerShortRestPerItem","SpellProperties":["GROUND:<b>Summon(ecdffa46-80bd-41d2-8a50-4460a2810672, Permanent,,,'FindFamiliarStack',UNSUMMON_ABLE,MAG_FIND_FAMILIAR_RAVEN,EXTRA_ATTACK_THIRSTING_BLADE,SHADOWCURSE_SUMMON_CHECK, MAG_RAVEN_EXPLOSION)</b>"],"DisplayName":"Summon Quothe the Raven","Description":"Summon a raven familiar that can <b>Blind</b> enemies with its beak. ","ExtraDescription":"When a hostile creature kills the raven familiar, they must succeed a Dexterity <b>Saving Throw</b> or become <b>Ensnared</b>.","UseCosts":["ActionPoint:1"],"SpellFlags":["IsSpell","HasSomaticComponent","HasVerbalComponent","HasHighGroundRangeExtension","CannotTargetCharacter","CannotTargetItems"]},{"_flag":"","Name":"Target_MAG_Resistance","SpellType":"Target","Using":"Target_Resistance"},{"_flag":"","Name":"Target_MAG_GoblinShield_Heroism","SpellType":"Target","Using":"Target_Heroism","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_DominateBeast","SpellType":"Target","Using":"Target_DominateBeast_5","Level":5,"Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"],"PowerLevel":5},{"_flag":"","Name":"Target_MAG_RetrievingShot","SpellType":"Target","Using":"Target_SteelWatcher_Biped_RetrievingShot","TargetRadius":"RangedMainWeaponRange","SpellRoll":["not <b>SavingThrow(Ability.Dexterity,15)</b>"],"SpellSuccess":["<b>Force(-9,TargetToOrigin)</b>","<b>DealDamage(MainRangedWeapon/2, MainRangedWeaponDamageType)</b>"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL,100,0)</b>"],"TargetConditions":["not <b>Self() and not Grounded() and IsMovable()</b>"],"Icon":"Action_Monster_Gortash_ReelIn","Description":"Pulls the creature [1] closer to you.","DescriptionParams":["<b>Distance(9)</b>"],"TooltipDamageList":["<b>DealDamage(MainRangedWeapon/2, MainRangedWeaponDamageType)</b>"],"SpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","9583ecee-cf6c-4735-86db-7ebf1df15eae,,","de006e3f-70fb-4eb7-a98d-d845d15b20e8,,","50696db7-d931-4734-915d-32d038ba99a5,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"DualWieldingSpellAnimation":["73afb4e5-8cfe-4479-95cf-16889597fee3,,","7e67bfd0-2fc2-4d10-bed5-cfda9e660de5,,","eb054308-7fce-4b85-bf4c-7a0031fda7ac,,:4a789a60-04b8-4a26-b476-65cf26ca558b,,","a11b8bcb-ba24-417a-aa86-4e4379c41ee2,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","b2e9c771-3497-444c-b360-23b4441985a1,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"SpellFlags":["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","AddFallDamageOnLand","HasSomaticComponent","IsDefaultWeaponAction"],"PrepareEffect":"4430007f-4300-445c-8f75-977b6a523974","Sheathing":"Ranged"},{"_flag":"","Name":"Target_MAG_Confusion","SpellType":"Target","Using":"Target_Confusion_5","Level":5,"Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsConcentration","IsSpell"]},{"_flag":"","Name":"Target_LOW_Polymorph_Trap","SpellType":"Target","Using":"Target_Polymorph","Cooldown":"None","SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","ImmediateCast","IsTrap"]},{"_flag":"","Name":"Target_LOW_ViciousMockery_Trap","SpellType":"Target","Using":"Target_ViciousMockery","TargetConditions":["<b>Character()</b>"],"SpellFlags":["IsSpell","HasVerbalComponent","IsHarmful","ImmediateCast","IsTrap"]},{"_flag":"","Name":"Target_LOW_Silence_Trap","SpellType":"Target","Using":"Target_Silence_5","SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsConcentration","IsSpell","CannotTargetItems","ImmediateCast","IsTrap"]},{"_flag":"","Name":"Target_LOW_Hex_Dexterity_Trap","SpellType":"Target","Using":"Target_Hex_Dexterity_6","SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsConcentration","IsSpell","IsHarmful","ImmediateCast","IsTrap"]},{"_flag":"","Name":"Target_MAG_HealingWord","SpellType":"Target","Using":"Target_HealingWord","Cooldown":"OncePerRestPerItem","UseCosts":["BonusActionPoint:1"]},{"_flag":"","Name":"Target_WYR_Circus_TeleportBoots_MistyStep","SpellType":"Target","Using":"Target_MistyStep","Cooldown":"OncePerTurn","DisplayName":"Disrobing Blinkstep","Description":"You teleport to an unoccupied space you can see. However, your clothes do not teleport with you.","UseCosts":["BonusActionPoint:1"]},{"_flag":"","Name":"Target_WYR_Circus_AirElemental","SpellType":"Target","Using":"Target_ConjureElemental_Elemental_Air","Cooldown":"OncePerCombat","UseCosts":["ActionPoint:1"],"SpellAnimation":["2c6bdbdc-8059-454f-9683-c63b94a570af,,","cd129fad-3704-4dfd-9547-16b6d3375f61,,","df356ebd-4999-4a2c-b6bc-cfe17ec5dd4d,,","91775390-3afa-4d1a-9587-c31a9a16b89a,,","6177f064-a0fb-4797-a7ef-94aa6565e31d,,"],"PrepareEffect":"11e1cea3-7a6e-4701-948d-3bca206637d6","CastEffect":"a19b8965-d5ef-4626-ae85-ae097f849938"},{"_flag":"","Name":"Target_MAG_Umberlee_CreateDestroyWater","SpellType":"Target","Using":"Target_CreateDestroyWater","ContainerSpells":["Target_MAG_Umberlee_CreateWater","Target_MAG_Umberlee_DestroyWater"],"Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_Umberlee_CreateWater","SpellType":"Target","Using":"Target_CreateWater_4","SpellContainerID":"Target_MAG_Umberlee_CreateDestroyWater","Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_Umberlee_DestroyWater","SpellType":"Target","Using":"Target_DestroyWater_4","SpellContainerID":"Target_MAG_Umberlee_CreateDestroyWater","Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_MAG_InflictWounds_DK","SpellType":"Target","Using":"Target_InflictWounds_4","Level":4,"Cooldown":"OncePerRestPerItem","PrepareSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3","PrepareLoopSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3_Loop","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_LOW_EastwayWizards_MinorIllusion","SpellType":"Target","Using":"Target_MinorIllusion","SpellProperties":["GROUND:<b>Summon(a4d03902-0382-4f88-866d-3bb2225a69a3, 10,,,'MinorIllusionStack',LOW_EASTWAYWIZARD_MINOR_ILLUSION)</b>"],"TargetConditions":["not <b>Character() and not Self()</b>"],"CastSound":"Spell_Cast_EastwayWizards_MinorIllusion_L1to3","TargetSound":"Spell_Impact_EastwayWizards_MinorIllusion_L1to3","SpellFlags":["HasSomaticComponent","IsSpell","IgnoreSilence","Stealth","Invisible"]},{"_flag":"","Name":"Target_LOW_EastwayWizards_DancingLights","SpellType":"Target","Using":"Target_DancingLights","CastSound":"Spell_Cast_EastwayWizards_DancingLights_L0","TargetSound":"Spell_Impact_EastwayWizards_DancingLights_L0"},{"_flag":"","Name":"Target_MAG_BlackTentacle","SpellType":"Target","Using":"Target_BlackTentacles","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"_flag":"","Name":"Target_LOW_SorcerousSundries_MageHandCreateWater","SpellType":"Target","Using":"Target_CreateWater_2","Cooldown":"None","SpellProperties":["<b>ApplyStatus(WET,100, 2)</b>"," GROUND:<b>CreateSurface(2,4, Water)</b>"],"AreaRadius":2,"CastSound":"MageHand_Cast_Utility_CreateWater_L1to3","TargetSound":"MageHand_Impact_Utility_CreateWater_L1to3","UseCosts":["ActionPoint:1"],"SpellAnimation":["b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,","5b4905be-03fd-42fb-9652-c2d1c772f4d3,,","9673b7c5-9928-44ce-ae4f-a85be2683981,,","e81ffae4-6be0-47fd-8502-48b9961004e9,,"],"SpellFlags":["RangeIgnoreVerticalThreshold","IsSpell","HasVerbalComponent","HasSomaticComponent"]},{"_flag":"","Name":"Target_MAG_OutpostJewelry_Guidance","SpellType":"Target","Using":"Target_Guidance"},{"_flag":"","Name":"Target__EPI","SpellType":"Target","Using":"Target_MainHandAttack"},{"_flag":"","Name":"Target_EPI_DivineViciousMockery","SpellType":"Target","Using":"Target_ViciousMockery","TargetRadius":26,"SpellSuccess":["<b>DealDamage(2d8,Psychic,Magical)</b>","<b>DealDamage(2d8,Radiant,Magical)</b>","<b>Force(10)</b>","<b>ApplyStatus(VICIOUSMOCKERY,100,2)</b>"],"TooltipDamageList":["<b>DealDamage(2d8,Psychic)</b>","<b>DealDamage(2d8,Radiant)</b>"],"CastSound":"CrSpell_Cast_ViciousMockery","TargetSound":"CrSpell_Impact_ViciousMockery","PrepareEffect":"2f422ff1-2aba-4b40-ae4e-a5f5d2fab103","CastEffect":"f857a71f-fdcd-415f-89e2-de63192cd86f","TargetEffect":"37e56a3a-d749-4d8e-9d1d-d44ef1001022","BeamEffect":"7a20894a-09a9-45f2-9b9e-c2a824adaad4","Sheathing":"Instrument"},{"_flag":"","Name":"Target_EPI_GhostTouch","SpellType":"Target","Using":"Target_ChillTouch","TargetRadius":"1.5","SpellSuccess":"<b>ApplyStatus(EPI_EPILOGUE_GHOSTTOUCHED,100,1)</b>","DisplayName":"Chilling Touch","Description":"Reach from beyond to a mortal creature, sending shivers down its spine.","TooltipStatusApply":"<b>ApplyStatus(EPI_EPILOGUE_GHOSTTOUCHED,100,1)</b>","SpellFlags":"HasSomaticComponent"}])