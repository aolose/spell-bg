loadSpell([{"Name":"Target_MAG_CommanderStrike","SpellType":"Target","Using":"Target_CommandersStrike","Cooldown":"OncePerShortRestPerItem","UseCosts":["ActionPoint:1"," BonusActionPoint:1"]},{"Name":"Target_MAG_Knock","SpellType":"Target","Using":"Target_Knock","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Drow_EnsnaringStrike","SpellType":"Target","Using":"Target_EnsnaringStrike","Cooldown":"OncePerShortRestPerItem","SpellSuccess":["<b>IF(not SavingThrow(Ability.Strength, SourceSpellDC(),AdvantageOnRestrained(),DisadvantageOnRestrained()))</b>:<b>ApplyStatus(WEB,100,10)</b>","<b>DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>"],"Icon":"Action_Mag_EnsnaringStrands","DisplayName":"Ensnaring Strands","Description":"Your attack conjures thick sticky webbing that possibly <b>Enwebs</b> your target(s).","TooltipStatusApply":["<b>ApplyStatus(WEB,100,10)</b>"],"CastSound":"Action_Cast_Item_EnsnaringWeb","TargetSound":"Action_Impact_Item_EnsnaringWeb","SpellFlags":["HasVerbalComponent","IsSpell","IsMelee","IsHarmful"],"PrepareEffect":"7e50664b-053d-423b-9a18-f326d126a7a9","CastEffect":"6feffb50-dcb7-4bcf-8122-781914ccacb2","TargetEffect":"5e186a18-1de1-4e0b-a1cf-3648c688dbd2"},{"Name":"Target_MAG_Drow_Web_Pull","SpellType":"Target","Using":"Target_ThornWhip","Cooldown":"OncePerRestPerItem","Icon":"Action_Mag_PullingWeb","DisplayName":"Pulling Web","Description":"Strike at a creature with a gossamer, skin-adhering web and pull it [1] closer to you.","PrepareSound":"Action_Prepare_Weapon_DrowSpiderGloves_WebPull","PrepareLoopSound":"Action_PrepareLoop_Weapon_DrowSpiderGloves_WebPull_MO","CastSound":"Action_Cast_Weapon_DrowSpiderGloves_WebPull","TargetSound":"Action_Impact_Weapon_DrowSpiderGloves_WebPull","VocalComponentSound":"EMPTY","PrepareEffect":"483161e1-abc9-4da9-b97e-e779d2f742c8","CastEffect":"889dfdce-5921-445e-8b57-6d130955c696","TargetEffect":"b55dc0fe-7ad7-4078-85bf-4e10aa085c83","BeamEffect":"696d0885-1c22-4c43-b87e-f50ac93a714b"},{"Name":"Target_MAG_Drow_Web","SpellType":"Target","Using":"Target_Web","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Vampiric_Touch","SpellType":"Target","Using":"Target_VampiricTouch","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Blight","SpellType":"Target","Using":"Target_Blight","Cooldown":"OncePerRestPerItem","PrepareSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3","PrepareLoopSound":"Spell_Prepare_Damage_Necrotic_Gen_L1to3_Loop","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Command_Container","SpellType":"Target","Using":"Target_Command_Container","ContainerSpells":["Target_MAG_Command_Approach","Target_MAG_Command_Drop","Target_MAG_Command_Halt","Target_MAG_Command_Grovel","Target_MAG_Command_Flee"],"Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","IsHarmful","IsConcentration","IsLinkedSpellContainer"]},{"Name":"Target_MAG_Command_Approach","SpellType":"Target","Using":"Target_Command_Approach","SpellContainerID":"Target_MAG_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Command_Drop","SpellType":"Target","Using":"Target_Command_Drop","SpellContainerID":"Target_MAG_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Command_Halt","SpellType":"Target","Using":"Target_Command_Halt","SpellContainerID":"Target_MAG_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Command_Grovel","SpellType":"Target","Using":"Target_Command_Grovel","SpellContainerID":"Target_MAG_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Command_Flee","SpellType":"Target","Using":"Target_Command_Flee","SpellContainerID":"Target_MAG_Command_Container","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_CrownOfMadness","SpellType":"Target","Using":"Target_CrownOfMadness","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_CombatInstruction","SpellType":"Target","Using":"Target_CRE_Savarsh_CombatInstruction","Cooldown":"OncePerShortRestPerItem","Icon":"Action_Mag_CombatInstruction","DisplayName":"Rallying Encouragement","Description":"Buff your ally, who gains [1] and deals an additional [2] until it loses its <b>temporary hit points</b>.","DescriptionParams":["<b>GainTemporaryHitPoints(20)</b>","<b>DealDamage(2d6, Psychic)</b>"],"UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_SpiritualWeapon","SpellType":"Target","Using":"Target_SpiritualWeapon","Level":6,"ContainerSpells":["Target_MAG_SpiritualWeapon_Greataxe","Target_MAG_SpiritualWeapon_Greatsword","Target_MAG_SpiritualWeapon_Halberd","Target_MAG_SpiritualWeapon_Maul","Target_MAG_SpiritualWeapon_Spear","Target_MAG_SpiritualWeapon_Trident"],"Cooldown":"OncePerRestPerItem","SpellProperties":["GROUND:<b>Summon(63854225-bfb0-4585-a427-ee47fcaabced, 10,,,SpiritualWeaponStack,MAG_SPIRITUAL_WEAPON_6,UNSUMMON_ABLE,SHADOWCURSE_SUMMON_CHECK)</b>"],"DescriptionParams":["<b>DealDamage(3d8+SpellCastingAbilityModifier, Force)</b>"],"TooltipDamageList":["<b>DealDamage(3d8+SpellCastingAbilityModifier, Force)</b>"],"UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_SpiritualWeapon_Greataxe","SpellType":"Target","Using":"Target_SpiritualWeapon_Greataxe_6","Level":6,"SpellContainerID":"Target_MAG_SpiritualWeapon","Cooldown":"OncePerRestPerItem","SpellProperties":["GROUND:<b>Summon(63854225-bfb0-4585-a427-ee47fcaabced, 10,,,SpiritualWeaponStack,MAG_SPIRITUAL_WEAPON_6,UNSUMMON_ABLE,SHADOWCURSE_SUMMON_CHECK)</b>"],"UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_SpiritualWeapon_Greatsword","SpellType":"Target","Using":"Target_SpiritualWeapon_Greatsword_6","Level":6,"SpellContainerID":"Target_MAG_SpiritualWeapon","Cooldown":"OncePerRestPerItem","SpellProperties":["GROUND:<b>Summon(dcb87672-84d5-4d18-9f1d-30ee66a69cc3, 10,,,SpiritualWeaponStack,MAG_SPIRITUAL_WEAPON_6,UNSUMMON_ABLE,SHADOWCURSE_SUMMON_CHECK)</b>"],"UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_SpiritualWeapon_Halberd","SpellType":"Target","Using":"Target_SpiritualWeapon_Halberd_6","Level":6,"SpellContainerID":"Target_MAG_SpiritualWeapon","Cooldown":"OncePerRestPerItem","SpellProperties":["GROUND:<b>Summon(b3b9353a-4b03-4599-bcc2-a0b86807f430, 10,,,SpiritualWeaponStack,MAG_SPIRITUAL_WEAPON_6,UNSUMMON_ABLE,SHADOWCURSE_SUMMON_CHECK)</b>"],"UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_SpiritualWeapon_Maul","SpellType":"Target","Using":"Target_SpiritualWeapon_Maul_6","Level":6,"SpellContainerID":"Target_MAG_SpiritualWeapon","Cooldown":"OncePerRestPerItem","SpellProperties":["GROUND:<b>Summon(d5718e22-445e-4a59-bc5b-cfc239443b01, 10,,,SpiritualWeaponStack,MAG_SPIRITUAL_WEAPON_6,UNSUMMON_ABLE,SHADOWCURSE_SUMMON_CHECK)</b>"],"UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_SpiritualWeapon_Spear","SpellType":"Target","Using":"Target_SpiritualWeapon_Spear_6","Level":6,"SpellContainerID":"Target_MAG_SpiritualWeapon","Cooldown":"OncePerRestPerItem","SpellProperties":["GROUND:<b>Summon(637e4035-0368-44c9-8bce-53a639594fb7, 10,,,SpiritualWeaponStack,MAG_SPIRITUAL_WEAPON_6,UNSUMMON_ABLE,SHADOWCURSE_SUMMON_CHECK)</b>"],"UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_SpiritualWeapon_Trident","SpellType":"Target","Using":"Target_SpiritualWeapon_Trident_6","Level":6,"SpellContainerID":"Target_MAG_SpiritualWeapon","Cooldown":"OncePerRestPerItem","SpellProperties":["GROUND:<b>Summon(6beb5e0e-2557-4be3-854e-e8af7fb7723d, 10,,,SpiritualWeaponStack,MAG_SPIRITUAL_WEAPON_6,UNSUMMON_ABLE,SHADOWCURSE_SUMMON_CHECK)</b>"],"UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_HoldPerson","SpellType":"Target","Using":"Target_HoldPerson","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_Haste","SpellType":"Target","Using":"Target_Haste","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_ElementalWeapon","SpellType":"Target","Using":"Target_ElementalWeapon","ContainerSpells":["Target_MAG_ElementalWeapon_Acid","Target_MAG_ElementalWeapon_Cold","Target_MAG_ElementalWeapon_Fire","Target_MAG_ElementalWeapon_Lightning","Target_MAG_ElementalWeapon_Thunder"],"Cooldown":"OncePerRestPerItem","DisplayName":"Draconic Elemental Weapon","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","IsMelee","IsLinkedSpellContainer"]},{"Name":"Target_MAG_ElementalWeapon_Acid","SpellType":"Target","Using":"Target_ElementalWeapon_Acid","SpellContainerID":"Target_MAG_ElementalWeapon","Cooldown":"OncePerRestPerItem","DisplayName":"Draconic Elemental Weapon: Acid","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","IsMelee"]},{"Name":"Target_MAG_ElementalWeapon_Cold","SpellType":"Target","Using":"Target_ElementalWeapon_Cold","SpellContainerID":"Target_MAG_ElementalWeapon","Cooldown":"OncePerRestPerItem","DisplayName":"Draconic Elemental Weapon: Cold","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","IsMelee"]},{"Name":"Target_MAG_ElementalWeapon_Fire","SpellType":"Target","Using":"Target_ElementalWeapon_Fire","SpellContainerID":"Target_MAG_ElementalWeapon","Cooldown":"OncePerRestPerItem","DisplayName":"Draconic Elemental Weapon: Fire","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","IsMelee"]},{"Name":"Target_MAG_ElementalWeapon_Lightning","SpellType":"Target","Using":"Target_ElementalWeapon_Lightning","SpellContainerID":"Target_MAG_ElementalWeapon","Cooldown":"OncePerRestPerItem","DisplayName":"Draconic Elemental Weapon: Lightning","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","IsMelee"]},{"Name":"Target_MAG_ElementalWeapon_Thunder","SpellType":"Target","Using":"Target_ElementalWeapon_Thunder","SpellContainerID":"Target_MAG_ElementalWeapon","Cooldown":"OncePerRestPerItem","DisplayName":"Draconic Elemental Weapon: Thunder","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","IsMelee"]},{"Name":"Target_MAG_TrueStrike","SpellType":"Target","Using":"Target_TrueStrike","Cooldown":"OncePerShortRestPerItem","UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_Bhaalist_Garrote","SpellType":"Target","Using":"Target_Garrote_Meazel","Cooldown":"OncePerShortRestPerItem","RequirementConditions":"not <b>HasStatus('MAG_GARROTE_SOURCE')</b>","SpellRoll":["not <b>SavingThrow(Ability.Strength, 14,AdvantageOnRestrained(),DisadvantageOnRestrained())</b>"],"SpellSuccess":["<b>ApplyStatus(MAG_GARROTE_TARGET, 100, 3)</b>","<b>DealDamage(1d10, Bludgeoning)</b>","<b>ApplyStatus(SELF, MAG_GARROTE_SOURCE, 100, 3)</b>"],"SpellFail":["<b>ApplyStatus(SAVED_AGAINST_HOSTILE_SPELL, 100, 0)</b>"],"TargetConditions":["not <b>Self() and not Dead() and Tagged('HUMANOID') and not HasStatus('MAG_GARROTE_TARGET')</b>"],"Icon":"Action_Mag_Garrote","Description":"Wrap a shadow rope around a Humanoid creature's throat to start <b>Garrotting</b> it.","TooltipDamageList":["<b>DealDamage(1d10, Bludgeoning)</b>"],"TooltipAttackSave":["Strength"],"TooltipStatusApply":["<b>ApplyStatus(MAG_GARROTE_TARGET,100,3)</b>"],"PrepareSound":"Spell_Prepare_Debuff_Gen_L1to3_01","PrepareLoopSound":"Spell_Prepare_Debuff_Gen_L1to3_01_Loop","SpellAnimation":["9313094a-bae2-454f-9701-f920d0e8e98d,,","3e441d3f-11f9-432d-877c-c0ba4d92c74a,,","8b7ae969-2a04-4720-9685-3bde54c18ffe,,","808fdfab-2e6c-472e-b3c4-19ce4a719d9d,,","ea745d30-eb87-447f-b190-c81298e27d9c,,"],"VerbalIntent":"Debuff","SpellFlags":["IsHarmful","IsConcentration","IsMelee"],"PrepareEffect":"556fd141-698d-4c08-9322-ad155821260a"},{"Name":"Target_ShieldBlow_Riposte","SpellType":"Target","Using":"Target_Bash","DisplayName":"Shield Blow","Description":"When struck by a melee attack, your attacker must succeed a Dexterity <b>Saving Throw</b> or fall <b>Prone</b>.","SpellAnimationIntentType":"Aggressive"},{"Name":"Target_Legendary_ShieldBlow_Riposte","SpellType":"Target","Using":"Target_ShieldBlow_Riposte","SpellSuccess":["<b>DealDamage(2d4, Force)</b>","<b>ApplyStatus(PRONE,100,1)</b>"],"SpellFail":["<b>DealDamage(1d4, Force)</b>"],"DisplayName":"Bulwark Rebuke","Description":"When a creature damages you, deal it [1] and possibly knock it <b>Prone</b>.","DescriptionParams":["<b>DealDamage(2d4, Force)</b>"],"ExtraDescription":"The creature takes half damage on a successful <b>Saving Throws</b>."},{"Name":"Target_MAG_Tyr_SwordAndHammer","SpellType":"Target","Using":"Target_SpiritualWeapon","Cooldown":"OncePerRestPerItem"},{"Name":"Target_MAG_WardingBond","SpellType":"Target","Using":"Target_WardingBond","Cooldown":"OncePerRestPerItem","RequirementConditions":"not <b>HasStatus('LOW_HOUSEOFGRIEF_SH_PRESENCE')</b>","UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_TheClover_TrueStrike_Riposte","SpellType":"Target","Using":"Target_Riposte","SpellSuccess":["<b>DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>"," <b>ApplyStatus(TRUE_STRIKE,100,2)</b>","<b>ApplyStatus(SELF,TRUE_STRIKE_OWNER,100,2)</b>"]},{"Name":"Target_MAG_Legendary_CompelledDuel","SpellType":"Target","Using":"Target_CompelledDuel","SpellRoll":["not <b>SavingThrow(Ability.Wisdom, ManeuverSaveDC())</b>"],"SpellSuccess":["<b>ApplyStatus(MAG_LEGENDARY_COMPELLED_DUEL, 100, 3)</b>"],"DisplayName":"Challenge to Duel","Description":"Challenge an enemy to attack only you, inflicting <b>Bleeding</b> on the target.","TooltipStatusApply":["<b>ApplyStatus(MAG_LEGENDARY_COMPELLED_DUEL, 100, 3)</b>"],"UseCosts":["BonusActionPoint:1"],"SpellStyleGroup":"Intent","SpellFlags":["HasVerbalComponent","IsHarmful"],"Sheathing":"Melee"},{"Name":"Target_MAG_TheDueller_BonusAttack","SpellType":"Target","Using":"Target_MAG_PHB_ScimitarOfSpeed_BonusAttack","RequirementConditions":"<b>IsOffHandSlotEmpty()</b>","DisplayName":"Dueller's Enthusiasm","Description":"While you are not dual-wielding, you can make an additional melee attack with The Dueller. "},{"Name":"Target_MAG_Legendary_Chromatic_IceStorm","SpellType":"Target","Using":"Target_IceStorm","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","Temporary","CanAreaDamageEvade"]},{"Name":"Target_MAG_Legendary_Chromatic_Shatter","SpellType":"Target","Using":"Target_Shatter_5","Level":5,"Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"],"SpellFlags":["IsSpell","HasHighGroundRangeExtension","HasVerbalComponent","HasSomaticComponent","IsHarmful","Temporary"]},{"Name":"Target_MAG_Legendary_Chromatic_CloudKill","SpellType":"Target","Using":"Target_Cloudkill","Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"],"SpellFlags":["IsSpell","IsHarmful","HasVerbalComponent","HasSomaticComponent","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsConcentration","Temporary"]},{"Name":"Target_MAG_Legendary_Chromatic_HungerOfHadar","SpellType":"Target","Using":"Target_HungerOfHadar_5","Level":5,"Cooldown":"OncePerShortRest","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsConcentration","IsSpell","CannotTargetItems","Temporary"]},{"Name":"Target_MAG_CreateUndead","SpellType":"Target","Using":"Target_CreateUndead","Cooldown":"OncePerRestPerItem","SpellProperties":["<b>SwitchDeathType(Explode)</b>","GROUND:<b>Summon(f424693b-13f4-4cce-987b-7d75748c87e0, -1,,,'CreateDeadStack',MAG_CREATE_UNDEAD,UNSUMMON_ABLE,SHADOWCURSE_SUMMON_CHECK)</b>"],"UseCosts":["ActionPoint:1"]},{"Name":"Target_MAG_CounterSpell","SpellType":"Target","Using":"Target_Counterspell_5","Level":5,"Cooldown":"OncePerRestPerItem","UseCosts":["ReactionActionPoint:1"],"InterruptPrototype":"Interrupt_MAG_Counterspell"},{"Name":"Target_MAG_CounterSpell_Success","SpellType":"Target","Using":"Target_Counterspell_Success","UseCosts":["ReactionActionPoint:1"],"InterruptPrototype":"Interrupt_MAG_Counterspell"},{"Name":"Target_MAG_Legendary_ImmolatingGaze","SpellType":"Target","Cooldown":"OncePerShortRestPerItem","TargetRadius":9,"SpellRoll":["not <b>SavingThrow(Ability.Intelligence, SourceSpellDC())</b>"],"SpellSuccess":["<b>ApplyStatus(FEARED,100, 3)</b>","<b>IF(not HasStatus('BURNING'))</b>:<b>DealDamage(2d8, Fire)</b>","<b>IF(HasStatus('BURNING'))</b>:<b>DealDamage(2d8, Fire,Magical)</b>"],"SpellFail":["<b>IF(not HasStatus('BURNING'))</b>:<b>DealDamage((2d8)</b>/2, Fire)","<b>IF(HasStatus('BURNING'))</b>:<b>DealDamage((4d8)</b>/2, Fire,Magical)"],"TargetConditions":["<b>Character() and not Self() and not Dead()</b>"],"Icon":"Action_Mag_ImmolatingGaze","DisplayName":"Immolating Gaze","Description":"Sear and <b>Frighten</b> a target with nothing but your glower. ","DescriptionParams":["<b>DealDamage(2d8, Fire)</b>"],"ExtraDescription":"You deal an additional [1] against <b>Burning</b> creatures. ","ExtraDescriptionParams":["<b>DealDamage(2d8, Fire)</b>"],"TooltipDamageList":["<b>DealDamage(2d8, Fire)</b>"],"TooltipAttackSave":["Intelligence"],"TooltipStatusApply":["<b>ApplyStatus(FEARED,100,3)</b>"],"PrepareSound":"Action_Prepare_Item_HellCrawler","PrepareLoopSound":"Action_Loop_Item_HellCrawler","CastSound":"Action_Cast_Item_ImmolatingGaze","TargetSound":"Action_Impact_Item_ImmolatingGaze","CastTextEvent":"Cast","CycleConditions":"<b>Enemy() and not Dead()</b>","UseCosts":["ActionPoint:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","d2c70def-10ce-46a8-9850-71377892be3f,,","20ac3c32-b461-4f3b-ba30-328e16321436,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"VerbalIntent":"Damage","SpellFlags":["HasSomaticComponent","IsHarmful"],"PrepareEffect":"7efd7809-4a4a-4689-9ecb-65e49518a79d","CastEffect":"ccbb436e-cc35-41e6-9076-99534f7b4d81","TargetEffect":"32111bfc-925e-4e95-9f31-cddc211619fd","BeamEffect":"a76e1745-fca0-46fd-b93b-ac4abc37a598"},{"Name":"Target_MAG_Legendary_HellCrawler","SpellType":"Target","Using":"Target_MistyStep","Cooldown":"OncePerShortRestPerItem","SpellProperties":["GROUND:<b>CreateExplosion(Projectile_MAG_Infernal_MistyStep_Fireball)</b>","GROUND:<b>TeleportSource()</b>"],"Icon":"Action_Mag_Hellcrawler","DisplayName":"Hellcrawler","Description":"Teleport to an area and deal [1] where you land. The impact blast spreads in a [2] zone.","DescriptionParams":["<b>DealDamage(2d8, Fire)</b>","<b>Distance(3)</b>"],"PrepareSound":"Action_Prepare_Item_HellCrawler","PrepareLoopSound":"Action_Loop_Item_HellCrawler","CastSound":"Action_Cast_Item_HellCrawler","TargetSound":"Action_Impact_Item_HellCrawler","CastTextEvent":"Cast","UseCosts":["BonusActionPoint:1"],"SpellAnimation":["3ff87abf-1ea1-4c32-aadf-c822d74c7dc0,,","39daf365-ec06-49a8-81f3-9032640699d7,,","5c400e93-0266-499c-a2e1-75d53358460f,,","d8925ce4-d6d9-400c-92f5-ad772ef7f178,,","eadedcce-d01b-4fbb-a1ae-d218f13aa5d6,,"],"SpellFlags":["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold"],"LineOfSightFlags":"AddSourceHeight","PrepareEffect":"7efd7809-4a4a-4689-9ecb-65e49518a79d","CastEffect":"aa6f85bc-d251-47fa-9ea1-154857d6820e"},{"Name":"Target_MAG_Smite_Wrathful","SpellType":"Target","Using":"Target_Smite_Wrathful","Cooldown":"OncePerShortRestPerItem","HitCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_HuntersMark","SpellType":"Target","Using":"Target_HuntersMark","Cooldown":"OncePerRestPerItem","UseCosts":["BonusActionPoint:1"]},{"Name":"Target_MAG_ThunderousSmite","SpellType":"Target","Using":"Target_Smite_Thunderous","Cooldown":"OncePerShortRestPerItem","HitCosts":["BonusActionPoint:1"]},{"Name":"Target_BoomingBlade","SpellType":"Target","Using":"Target_Slash_New","SpellSchool":"Evocation","SpellSuccess":["<b>ApplyStatus(BOOMING_BLADE,100,1)</b>","<b>DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>"],"Icon":"","DisplayName":"Booming Blade","Description":"Strike with your weapon, afflicting your foe with a  resonance that hurts them for [1] when they move.","DescriptionParams":["<b>DealDamage(1d8, Thunder)</b>"],"TooltipAttackSave":["MeleeWeaponAttack"],"TooltipStatusApply":["<b>ApplyStatus(BOOMING_BLADE,100,1)</b>"],"TargetSound":"Spell_Impact_Damage_Thunder_ThunderousSmite_L1to3","SpellFlags":["IsMelee","IsHarmful","IsDefaultWeaponAction","IsSpell"],"PrepareEffect":"da2ac9fb-af83-4650-acfe-514a425c3a2e","TargetEffect":"288e0f80-7d7c-4f36-b748-17182318180e"},{"Name":"Target_BoomingBladeEx","SpellType":"Target","Using":"Target_BoomingBlade","SpellSuccess":["<b>IF(not SavingThrow(Ability.Strength, ManeuverSaveDC()))</b>:<b>Force(4.5)</b>","<b>ApplyStatus(BOOMING_BLADE,100,1)</b>","<b>DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>"],"DisplayName":"Blasting Blade","Description":"Strike with your weapon, afflicting your foe with a  resonance that hurts them for [1] when they move and possibly pushing them back [2].","DescriptionParams":["<b>Distance(4.5)</b>","<b>DealDamage(1d8, Thunder)</b>"],"TooltipAttackSave":["MeleeWeaponAttack","Strength"]},{"Name":"Target_LightningBlade","SpellType":"Target","Using":"Target_Slash_New","SpellSchool":"Evocation","SpellProperties":["GROUND:<b>SurfaceChange(Electrify)</b>","GROUND:<b>DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)</b>","GROUND:<b>ExecuteWeaponFunctors(MainHand)</b>","CastOffhand[GROUND:<b>DealDamage(OffhandMeleeWeapon, OffhandMeleeWeaponDamageType)</b>","GROUND:<b>ExecuteWeaponFunctors(OffHand)</b>]","<b>IF(not Player(context.Source))</b>:<b>ApplyStatus(SELF,AI_HELPER_EXTRAATTACK,100,1)</b>"],"SpellSuccess":["<b>DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)</b>","<b>DealDamage(max(SpellCastingAbilityModifier,1),Lightning,Magical)</b>","<b>ExecuteWeaponFunctors(MainHand)</b>","<b>SpawnExtraProjectiles(Projectile_LightningBlade_Explosion)</b>"],"Icon":"","DisplayName":"Boltstruck Blade","Description":"Strike a foe and engulf other nearby creatures within [1] to deal [2].","DescriptionParams":["<b>Distance(3)</b>","<b>DealDamage(1d8, Lightning)</b>"],"TooltipDamageList":["<b>DealDamage(MainMeleeWeapon, MainMeleeWeaponDamageType)</b>","<b>DealDamage(max(SpellCastingAbilityModifier,1),Lightning)</b>"],"TooltipAttackSave":["MeleeWeaponAttack","Dexterity"],"SpellFlags":["IsMelee","IsHarmful","IsDefaultWeaponAction","IsSpell"],"PrepareEffect":"460e98c4-4e94-47b9-bd21-75088d0d8e52","TargetEffect":"a3e2368b-f486-4cfc-b04a-b02e23383280"},{"Name":"Target_MAG_SpiritualStand_Greataxe","SpellType":"Target","Using":"Target_MAG_SpiritualWeapon_Greataxe","DisplayName":"Sethan: Spiritual Greataxe","Description":"Summon a spiritual twin of Sethan in a point you can see, dealing [1] on a hit. ","DescriptionParams":["<b>DealDamage(3d8+SpellCastingAbilityModifier, Force)</b>"],"SpellFlags":["IsSpell","HasSomaticComponent","HasVerbalComponent","CannotTargetItems","CannotTargetCharacter"]},{"Name":"Target_MAG_SpiritualStand_Reduce","SpellType":"Target","Using":"Target_Reduce","Cooldown":"OncePerRestPerItem","SpellRoll":["<b>SpellAutoResolveOnAlly(Ability.Constitution, GenericSaveDC(11), true)</b>"],"SpellSuccess":["<b>ApplyStatus(REDUCE,100, 5)</b>"],"TargetConditions":["<b>Character() and not Self()</b>"],"DisplayName":"Sethan: Reduce","UseCosts":["ActionPoint:1"],"SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell"]},{"Name":"Target__WYR","SpellType":"Target","Using":"Target_MainHandAttack"},{"Name":"Target_WYR_Chess_MovePiece1","SpellType":"Target","TargetRadius":35,"TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS1')</b>"],"Icon":"GenericIcon_Intent_Utility","DisplayName":"Move Piece","Description":"Move a piece to the targeted square. ","SpellAnimation":["dd86aa43-8189-4d9f-9a5c-454b5fe4a197,,","af94aac1-d8eb-4ccb-9520-694ade11b61c,,","cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a,,","1715b877-4512-472e-9bd0-fd568a112e90,,","f5db4001-b136-4c48-9aa4-026c4a7dd3b7,,"],"SpellFlags":["CannotTargetCharacter","CannotTargetTerrain","IgnoreSilence"],"PrepareEffect":"7121a488-7c9a-4ba1-a585-f79aaa77e97c","CastEffect":"d96a454e-eb9b-4be9-bbb3-d21fab4ded25"},{"Name":"Target_WYR_Chess_MovePiece2","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS2')</b>"]},{"Name":"Target_WYR_Chess_MovePiece3","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS3')</b>"]},{"Name":"Target_WYR_Chess_MovePiece4","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS4')</b>"]},{"Name":"Target_WYR_Chess_MovePiece5","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS5')</b>"]},{"Name":"Target_WYR_Chess_MovePiece6","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS6')</b>"]},{"Name":"Target_WYR_Chess_MovePiece7","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS7')</b>"]},{"Name":"Target_WYR_Chess_MovePiece8","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS8')</b>"]},{"Name":"Target_WYR_Chess_MovePiece9","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS9')</b>"]},{"Name":"Target_WYR_Chess_MovePiece10","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS10')</b>"]},{"Name":"Target_WYR_Chess_MovePiece11","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS11')</b>"]},{"Name":"Target_WYR_Chess_MovePiece12","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS12')</b>"]},{"Name":"Target_WYR_Chess_MovePiece13","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS13')</b>"]},{"Name":"Target_WYR_Chess_MovePiece14","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS14')</b>"]},{"Name":"Target_WYR_Chess_MovePiece15","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS15')</b>"]},{"Name":"Target_WYR_Chess_MovePiece16","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS16')</b>"]},{"Name":"Target_WYR_Chess_MovePiece17","SpellType":"Target","Using":"Target_WYR_Chess_MovePiece1","TargetConditions":["<b>Tagged('ACT3_WYR_CHESS_VALIDPOS17')</b>"]},{"Name":"Target_WYR_ExtractBrain_MindFlayer_AlwaysHit","SpellType":"Target","Using":"Target_ExtractBrain_Mindflayer","SpellRoll":["not <b>SavingThrow(Ability.Intelligence, 30)</b>"]},{"Name":"Target_WYR_Tentacles_MindFlayer_NoDamageNoResist","SpellType":"Target","Using":"Target_Tentacles_MindFlayer","SpellRoll":["not <b>SavingThrow(Ability.Intelligence, 30)</b>"],"SpellSuccess":["<b>ApplyStatus(STUNNED,100,1)</b>"],"DescriptionParams":["EMPTY"],"TooltipDamageList":["EMPTY"],"HitAnimationType":"None"},{"Name":"Target_WYR_SentientAmulet_HideousLaughter","SpellType":"Target","Using":"Target_HideousLaughter_3","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"],"SpellFlags":["IsSpell","HasVerbalComponent","HasSomaticComponent","HasHighGroundRangeExtension","IsConcentration","IsHarmful"]},{"Name":"Target_WYR_SentientAmulet_AmuletAfterCombat","SpellType":"Target","Using":"Target_Shatter_3","Cooldown":"OncePerRestPerItem","UseCosts":["ActionPoint:1"]},{"Name":"Target_WYR_SentientAmulet_MonkHeal","SpellType":"Target","Using":"Target_Heal","Cooldown":"OncePerTurn","SpellProperties":["<b>RegainHitPoints(70,Undead)</b>","<b>RemoveStatus(SG_Blinded)</b>","<b>RemoveStatus(SG_Disease)</b>"],"TargetRadius":"0.1","TargetConditions":["<b>Self()</b>"],"UseCosts":["ActionPoint:1"]},{"Name":"Target_WYR_SharessCaress_DapperDrow_Garrote","SpellType":"Target","Using":"Target_Garrote_Meazel","Cooldown":"OncePerTurn","RequirementConditions":"not <b>HasStatus('GARROTE_SOURCE_HUMANOID')</b>","SpellSuccess":"<b>DealDamage(1d6+3, Bludgeoning)</b>; <b>ApplyStatus(GARROTE_TARGET_HUMANOID, 100, 10)</b>; AI_IGNORE:<b>ApplyStatus(SELF, GARROTE_SOURCE_HUMANOID, 100, 10)</b>","TargetConditions":"not <b>Self() and not Dead() and not HasStatus('GARROTE_TARGET_HUMANOID')</b>","Description":"Wrap a rope around a creature's throat to start <b>Garrotting</b> it.","TooltipDamageList":"<b>DealDamage(1d6, Bludgeoning)</b>;","TooltipStatusApply":"<b>ApplyStatus(GARROTE_TARGET_HUMANOID,100,10)</b>"}])