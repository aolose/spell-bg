loadSpell([{"Name":"Shout_Dash_NPC","SpellType":"Shout","Using":"Shout_Dash","SpellAnimationIntentType":"Aggressive","RequirementConditions":"not <b>HasStatus('DASH')</b>"},{"Name":"Shout_Dash_BonusAction","SpellType":"Shout","Using":"Shout_Dash","Icon":"Action_Dash_Bonus","DisplayName":"Dash: Bonus Action","CastTextEvent":"Cast","UseCosts":["BonusActionPoint:1"],"SpellFlags":["IgnoreSilence","Stealth","Invisible","Temporary","NoCameraMove"]},{"Name":"Shout_Dash_CunningAction","SpellType":"Shout","Using":"Shout_Dash_BonusAction","DisplayName":"Cunning Action: Dash","SpellFlags":["IgnoreSilence","Stealth","Invisible","NoCameraMove"]},{"Name":"Shout_Dash_CunningAction_NPC_OncePerTurn","SpellType":"Shout","Using":"Shout_Dash_CunningAction","Cooldown":"OncePerTurn"},{"Name":"Shout_BootsOfSpeed","SpellType":"Shout","Using":"Shout_Dash_BonusAction","SpellProperties":["<b>ApplyStatus(CLICK_HEELS,100,1)</b>"],"DisplayName":"Click Heels","Description":"Click the heels of your boots to gain speed and freedom of movement. ","ExtraDescription":["ha17a6ea5g8276g472dg8624g3f4188bc4ec7","1"],"TooltipStatusApply":["<b>ApplyStatus(CLICK_HEELS,100,1)</b>"],"SpellFlags":["IgnoreSilence","Stealth","Invisible","NoCameraMove"]},{"Name":"Shout_DetectEvilAndGood","SpellType":"Shout","Level":1,"SpellSchool":"Divination","SpellProperties":["<b>ApplyStatus(DETECT_EVIL_GOOD,100,-1)</b>"],"TargetConditions":["<b>Self()</b>"],"Icon":"Spell_Divination_DetectEvilAndGood","DisplayName":"Detect Evil and Good","Description":"%%% Detect supernatural creatures.","VocalComponentSound":"Vocal_Component_DetectGeneric","CastTextEvent":"Cast","UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:1"],"SpellAnimation":["dd86aa43-8189-4d9f-9a5c-454b5fe4a197,,","09ae2f11-f5b4-42f5-ae16-687a5b57d500,,","10caea0e-c949-4d91-8ab7-3b50019dd054,,","cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a,,","1715b877-4512-472e-9bd0-fd568a112e90,,"],"VerbalIntent":"Utility","SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","IsConcentration"],"HitAnimationType":"None","PrepareEffect":"7121a488-7c9a-4ba1-a585-f79aaa77e97c","CastEffect":"a32e391e-05f3-45d1-9575-dfb99a0ca4d2","TargetEffect":"3660074d-d0ca-44c6-aaa3-803d892c1757"},{"Name":"Shout_DetectThoughts","SpellType":"Shout","Level":2,"SpellSchool":"Divination","AIFlags":["CanNotUse"],"SpellProperties":["<b>ApplyStatus(DETECT_THOUGHTS,100,-1)</b>"],"TargetConditions":["<b>Self()</b>"],"Icon":"Spell_Divination_DetectThoughts","DisplayName":"Detect Thoughts","Description":"Focus your mind to read the thoughts of certain creatures while talking to them.","TooltipStatusApply":["<b>ApplyStatus(DETECT_THOUGHTS,100,-1)</b>"],"TooltipUpcastDescription":"No benefit<br>Casting this spell at a higher level doesn't grant any additional benefits.","PrepareSound":"Spell_Prepare_Buff_Gen_L1to3_01","PrepareLoopSound":"Spell_Prepare_Buff_Gen_L1to3_01_Loop","CastSound":"Spell_Cast_Utility_DetectThoughts_L1to3","VocalComponentSound":"Vocal_Component_DetectGeneric","CastTextEvent":"Cast","UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:2"],"SpellAnimation":["dd86aa43-8189-4d9f-9a5c-454b5fe4a197,,","236087a5-5597-4ee7-ab06-75b01147f596,,","ee0b6a78-c6b6-4852-aecb-d7c474a37d68,,","cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a,,","1715b877-4512-472e-9bd0-fd568a112e90,,"],"VerbalIntent":"Utility","SpellFlags":["HasVerbalComponent","HasSomaticComponent","IsSpell","IsConcentration"],"SpellCategory":"SC_DetectThoughts","HitAnimationType":"None","PrepareEffect":"33302a46-4a12-41dd-8845-6b7314d50022","CastEffect":"1a4b0423-005b-4577-b376-815a08809675","RitualCosts":"ActionPoint:1"},{"Name":"Shout_DetectThoughts_3","SpellType":"Shout","Using":"Shout_DetectThoughts","UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:3"],"RootSpellID":"Shout_DetectThoughts","PowerLevel":3},{"Name":"Shout_Disengage","SpellType":"Shout","SpellProperties":["AI_IGNORE:<b>ApplyStatus(DISENGAGE,100,1)</b>","AI_ONLY:<b>IF(HasStatus('FLANKED'))</b>:<b>ApplyStatus(DISENGAGE,100,1)</b>"],"TargetConditions":["<b>Self()</b>"],"Icon":"Action_Disengage","DisplayName":"Disengage","Description":"Retreat safely: moving won't provoke <b>Opportunity Attacks</b>.","TooltipStatusApply":["<b>ApplyStatus(DISENGAGE,100,1)</b>"],"PrepareSound":"Generic_GeneralAction_Start","PrepareLoopSound":"Generic_GeneralAction_Loop","CastSound":"Action_Cast_Disengage","TargetSound":"Action_Impact_Disengage","CastTextEvent":"Cast","UseCosts":["ActionPoint:1"],"SpellAnimation":["5e57443f-284e-47b2-915e-5b6417db269c,,","925779e7-8bf6-4d56-8c4d-42c3bc01c60c,,","50398f4e-dd82-4d6a-ad43-aedd578543d9,,","1c343e00-7e6c-4f53-b588-074a3cdb9c7d,,","5bcdefbb-2194-46c2-ac77-0b2d8472a5f7,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"VerbalIntent":"Utility","SpellFlags":["NoCameraMove"],"SpellActionType":"Disengage","SpellAnimationIntentType":"Aggressive","RequirementConditions":"not <b>Immobilized()</b>","PrepareEffect":"f56fb8e0-815b-41e0-9071-3c2305c93660","CastEffect":"08ecdc25-31ea-4f32-8787-19b97971a9f1","CinematicArenaFlags":"Ignore","Sheathing":"DontChange"},{"Name":"Shout_Disengage_BonusAction","SpellType":"Shout","Using":"Shout_Disengage","Icon":"Action_Disengage_Bonus","DisplayName":"Disengage: Bonus Action","Description":"Retreat safely: moving won't provoke <b>Opportunity Attacks</b>.","UseCosts":["BonusActionPoint:1"]},{"Name":"Shout_Disengage_CunningAction","SpellType":"Shout","Using":"Shout_Disengage_BonusAction","DisplayName":"Cunning Action: Disengage","Description":"Retreat safely: moving won't provoke <b>Opportunity Attacks</b>."},{"Name":"Shout_Disengage_StepOfTheWind","SpellType":"Shout","Using":"Shout_Disengage_BonusAction","SpellProperties":["<b>ApplyStatus(DISENGAGE,100,1)</b>"," <b>ApplyStatus(STEP_OF_THE_WIND,100,1)</b>"],"DisplayName":"Step of the Wind: Disengage","Description":"Spend [1] ki point to gain the <b>Disengage</b> action as a <b>bonus action</b> this turn.","DescriptionParams":1,"SpellAnimation":["4f0a01e4-761d-4236-b789-33c1e7532023,,","9dec9d1f-ac78-4e2d-9095-1e0c8351144c,,","bd7104f0-6bb8-413c-8a38-ca0b2072a624,,","e3dd360c-2bc6-470b-aa4a-6b6a64e8e215,,","e85be5a8-6e48-4da4-8486-0d168159df4e,,","5fdb66be-7506-411a-a7ea-c4783288aac8,,"],"Sheathing":"Sheathed"},{"Name":"Shout_DisguiseSelf","SpellType":"Shout","Level":1,"SpellSchool":"Illusion","ContainerSpells":["Shout_DisguiseSelf_Tiefling_Male","Shout_DisguiseSelf_Tiefling_Female","Shout_DisguiseSelf_Drow_Male","Shout_DisguiseSelf_Drow_Female","Shout_DisguiseSelf_Human_Male","Shout_DisguiseSelf_Human_Female","Shout_DisguiseSelf_Githyanki_Male","Shout_DisguiseSelf_Githyanki_Female","Shout_DisguiseSelf_Dwarf_Male","Shout_DisguiseSelf_Dwarf_Female","Shout_DisguiseSelf_Elf_Male","Shout_DisguiseSelf_Elf_Female","Shout_DisguiseSelf_HalfElf_Male","Shout_DisguiseSelf_HalfElf_Female","Shout_DisguiseSelf_Halfling_Male","Shout_DisguiseSelf_Halfling_Female","Shout_DisguiseSelf_Dragonborn_Male","Shout_DisguiseSelf_Dragonborn_Female","Shout_DisguiseSelf_HalfOrc_Male","Shout_DisguiseSelf_HalfOrc_Female","Shout_DisguiseSelf_Gnome_Male","Shout_DisguiseSelf_Gnome_Female","Shout_DisguiseSelf_Human_Strong_Male","Shout_DisguiseSelf_Human_Strong_Female","Shout_DisguiseSelf_Drow_Strong_Male","Shout_DisguiseSelf_Drow_Strong_Female","Shout_DisguiseSelf_Elf_Strong_Male","Shout_DisguiseSelf_Elf_Strong_Female","Shout_DisguiseSelf_HalfElf_Strong_Male","Shout_DisguiseSelf_HalfElf_Strong_Female","Shout_DisguiseSelf_Tiefling_Strong_Male","Shout_DisguiseSelf_Tiefling_Strong_Female"],"AIFlags":["CanNotUse"],"TargetConditions":["<b>Self()</b>"],"Icon":"Spell_Illusion_DisguiseSelf","DisplayName":"Disguise Self","Description":"Magically change all aspects of your appearance.","TooltipUpcastDescription":"No benefit<br>Casting this spell at a higher level doesn't grant any additional benefits.","CastSound":"Spell_Cast_Utility_DisguiseSelf_L1to3","TargetSound":"Spell_Impact_Utility_DisguiseSelf_L1to3","VocalComponentSound":"Vocal_Component_PolymorphGeneric","CastTextEvent":"Cast","UseCosts":["ActionPoint:1","SpellSlotsGroup:1:1:1"],"SpellAnimation":["dd86aa43-8189-4d9f-9a5c-454b5fe4a197,,","bcc3b0d9-f04f-4448-aab0-e0ad641167cc,,","bf924cc6-8b39-4c3b-b1c0-eda264cf6150,,","cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a,,","1715b877-4512-472e-9bd0-fd568a112e90,,"],"VerbalIntent":"Utility","SpellFlags":["IsSpell","HasVerbalComponent","HasSomaticComponent","IsLinkedSpellContainer"],"MemoryCost":1,"PrepareEffect":"9e7ec23c-4b13-4a88-b3d6-1df1782e4359","CastEffect":"c33c578f-fc5c-4a9d-a961-78b7bfff73d7","HitEffect":"ebcd0860-3695-4762-b9f5-4e441c4bf888","RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Tiefling_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Tiefling_Male","DisplayName":"Disguise Self: Masc Tiefling","Description":"Disguise yourself as a tiefling with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_MALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Tiefling_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Tiefling_Female","DisplayName":"Disguise Self: Femme Tiefling","Description":"Disguise yourself as a tiefling with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_FEMALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Drow_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DROW_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Drow_Male","DisplayName":"Disguise Self: Masc Drow","Description":"Disguise yourself as a drow with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DROW_MALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Drow_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DROW_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Drow_Female","DisplayName":"Disguise Self: Femme Drow","Description":"Disguise yourself as a drow with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DROW_FEMALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Human_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Human_Male","DisplayName":"Disguise Self: Masc Human","Description":"Disguise yourself as a human with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_MALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Human_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Human_Female","DisplayName":"Disguise Self: Femme Human","Description":"Disguise yourself as a human with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_FEMALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Githyanki_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_GITHYANKI_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Githyanki_Male","DisplayName":"Disguise Self: Masc Githyanki","Description":"Disguise yourself as a githyanki with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_GITHYANKI_MALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Githyanki_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_GITHYANKI_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Githyanki_Female","DisplayName":"Disguise Self: Femme Githyanki","Description":"Disguise yourself as a githyanki with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_GITHYANKI_FEMALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Dwarf_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DWARF_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Dwarf_Male","DisplayName":"Disguise Self: Masc Dwarf","Description":"Disguise yourself as a dwarf with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DWARF_MALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Dwarf_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DWARF_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Dwarf_Female","DisplayName":"Disguise Self: Femme Dwarf","Description":"Disguise yourself as a dwarf with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DWARF_FEMALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Elf_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_ELF_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Elf_Male","DisplayName":"Disguise Self: Masc Elf","Description":"Disguise yourself as an elf with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_ELF_MALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Elf_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_ELF_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Elf_Female","DisplayName":"Disguise Self: Femme Elf","Description":"Disguise yourself as an elf with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_ELF_FEMALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_HalfElf_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_HalfElf_Male","DisplayName":"Disguise Self: Masc Half-Elf","Description":"Disguise yourself as a half-elf with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_MALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_HalfElf_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_HalfElf_Female","DisplayName":"Disguise Self: Femme Half-Elf","Description":"Disguise yourself as a half-elf with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_FEMALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Halfling_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFLING_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Halfling_Male","DisplayName":"Disguise Self: Masc Halfling","Description":"Disguise yourself as a halfling with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFLING_MALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Halfling_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFLING_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Halfling_Female","DisplayName":"Disguise Self: Femme Halfling","Description":"Disguise yourself as a halfling with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFLING_FEMALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Gnome_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_GNOME_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Gnome_Male","DisplayName":"Disguise Self: Masc Gnome","Description":"Disguise yourself as a gnome with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_GNOME_MALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Gnome_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_GNOME_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Gnome_Female","DisplayName":"Disguise Self: Femme Gnome","Description":"Disguise yourself as a gnome with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_GNOME_FEMALE,100,-1)</b>"],"RitualCosts":"ActionPoint:1"},{"Name":"Shout_DisguiseSelf_Dragonborn_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DRAGONBORN_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Dragonborn_Male","DisplayName":"Disguise Self: Masc Dragonborn","Description":"Disguise yourself as a dragonborn with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DRAGONBORN_MALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_Dragonborn_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DRAGONBORN_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Dragonborn_Female","DisplayName":"Disguise Self: Femme Dragonborn","Description":"Disguise yourself as a dragonborn with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DRAGONBORN_FEMALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_HalfOrc_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFORC_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_HalfOrc_Male","DisplayName":"Disguise Self: Masc Half-Orc","Description":"Disguise yourself as a half-orc with a masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFORC_MALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_HalfOrc_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFORC_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_HalfOrc_Female","DisplayName":"Disguise Self: Femme Half-Orc","Description":"Disguise yourself as a half-orc with a feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFORC_FEMALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_Human_Strong_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_STRONG_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Human_Strong_Male","DisplayName":"Disguise Self: Masc Strong Human","Description":"Disguise yourself as a human with a strong masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_STRONG_MALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_Human_Strong_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_STRONG_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Human_Strong_Female","DisplayName":"Disguise Self: Femme Strong Human","Description":"Disguise yourself as a human with a strong feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_STRONG_FEMALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_Drow_Strong_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DROW_STRONG_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Drow_Strong_Male","DisplayName":"Disguise Self: Masc Strong Drow","Description":"Disguise yourself as a drow with a strong masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DROW_STRONG_MALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_Drow_Strong_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DROW_STRONG_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Drow_Strong_Female","DisplayName":"Disguise Self: Femme Strong Drow","Description":"Disguise yourself as a drow with a strong feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DROW_STRONG_FEMALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_Elf_Strong_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_ELF_STRONG_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Elf_Strong_Male","DisplayName":"Disguise Self: Masc Strong Elf","Description":"Disguise yourself as an elf with a strong masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_ELF_STRONG_MALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_Elf_Strong_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_ELF_STRONG_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Elf_Strong_Female","DisplayName":"Disguise Self: Femme Strong Elf","Description":"Disguise yourself as an elf with a strong feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_ELF_STRONG_FEMALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_HalfElf_Strong_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_STRONG_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_HalfElf_Strong_Male","DisplayName":"Disguise Self: Masc Strong Half-Elf","Description":"Disguise yourself as a half-elf with a strong masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_STRONG_MALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_HalfElf_Strong_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_STRONG_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_HalfElf_Strong_Female","DisplayName":"Disguise Self: Femme Strong Half-Elf","Description":"Disguise yourself as a half-elf with a strong feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_STRONG_FEMALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_Tiefling_Strong_Male","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_STRONG_MALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Tiefling_Strong_Male","DisplayName":"Disguise Self: Masc Strong Tiefling","Description":"Disguise yourself as a tiefling with a strong masculine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_STRONG_MALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_Tiefling_Strong_Female","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellContainerID":"Shout_DisguiseSelf","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_STRONG_FEMALE,100,-1)</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Tiefling_Strong_Female","DisplayName":"Disguise Self: Femme Strong Tiefling","Description":"Disguise yourself as a tiefling with a strong feminine body type.","TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_STRONG_FEMALE,100,-1)</b>"]},{"Name":"Shout_DisguiseSelf_MaskOfManyFaces","SpellType":"Shout","Using":"Shout_DisguiseSelf","ContainerSpells":["Shout_DisguiseSelf_Tiefling_Male_MOMF","Shout_DisguiseSelf_Tiefling_Female_MOMF","Shout_DisguiseSelf_Drow_Male_MOMF","Shout_DisguiseSelf_Drow_Female_MOMF","Shout_DisguiseSelf_Human_Male_MOMF","Shout_DisguiseSelf_Human_Female_MOMF","Shout_DisguiseSelf_Githyanki_Male_MOMF","Shout_DisguiseSelf_Githyanki_Female_MOMF","Shout_DisguiseSelf_Dwarf_Male_MOMF","Shout_DisguiseSelf_Dwarf_Female_MOMF","Shout_DisguiseSelf_Elf_Male_MOMF","Shout_DisguiseSelf_Elf_Female_MOMF","Shout_DisguiseSelf_HalfElf_Male_MOMF","Shout_DisguiseSelf_HalfElf_Female_MOMF","Shout_DisguiseSelf_Halfling_Male_MOMF","Shout_DisguiseSelf_Halfling_Female_MOMF","Shout_DisguiseSelf_Gnome_Male_MOMF","Shout_DisguiseSelf_Gnome_Female_MOMF","Shout_DisguiseSelf_Dragonborn_Male_MOMF","Shout_DisguiseSelf_Dragonborn_Female_MOMF","Shout_DisguiseSelf_HalfOrc_Male_MOMF","Shout_DisguiseSelf_HalfOrc_Female_MOMF","Shout_DisguiseSelf_Human_Strong_Male_MOMF","Shout_DisguiseSelf_Human_Strong_Female_MOMF","Shout_DisguiseSelf_Drow_Strong_Male_MOMF","Shout_DisguiseSelf_Drow_Strong_Female_MOMF","Shout_DisguiseSelf_Elf_Strong_Male_MOMF","Shout_DisguiseSelf_Elf_Strong_Female_MOMF","Shout_DisguiseSelf_HalfElf_Strong_Male_MOMF","Shout_DisguiseSelf_HalfElf_Strong_Female_MOMF","Shout_DisguiseSelf_Tiefling_Strong_Male_MOMF","Shout_DisguiseSelf_Tiefling_Strong_Female_MOMF"],"DisplayName":"Shapeshift","UseCosts":["ActionPoint:1"]},{"Name":"Shout_DisguiseSelf_Tiefling_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Tiefling_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1"]},{"Name":"Shout_DisguiseSelf_Tiefling_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Tiefling_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Drow_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Drow_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DROW_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DROW_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Drow_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Drow_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DROW_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DROW_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Human_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Human_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Human_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Human_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Githyanki_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Githyanki_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_GITHYANKI_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_GITHYANKI_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Githyanki_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Githyanki_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_GITHYANKI_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_GITHYANKI_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Dwarf_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Dwarf_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DWARF_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DWARF_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Dwarf_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Dwarf_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DWARF_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DWARF_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Elf_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Elf_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_ELF_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_ELF_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Elf_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Elf_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_ELF_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_ELF_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_HalfElf_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_HalfElf_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_HalfElf_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_HalfElf_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Halfling_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Halfling_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFLING_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFLING_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Halfling_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Halfling_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFLING_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFLING_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Gnome_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Gnome_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_GNOME_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_GNOME_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Gnome_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Gnome_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_GNOME_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_GNOME_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Dragonborn_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Dragonborn_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DRAGONBORN_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DRAGONBORN_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1"]},{"Name":"Shout_DisguiseSelf_Dragonborn_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Dragonborn_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DRAGONBORN_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DRAGONBORN_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_HalfOrc_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_HalfOrc_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFORC_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFORC_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_HalfOrc_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_HalfOrc_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFORC_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFORC_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Human_Strong_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Human_Strong_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_STRONG_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_STRONG_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Human_Strong_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Human_Strong_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_STRONG_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HUMAN_STRONG_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Drow_Strong_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Drow_Strong_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DROW_STRONG_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DROW_STRONG_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Drow_Strong_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Drow_Strong_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_DROW_STRONG_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_DROW_STRONG_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Elf_Strong_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Elf_Strong_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_ELF_STRONG_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_ELF_STRONG_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Elf_Strong_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Elf_Strong_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_ELF_STRONG_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_ELF_STRONG_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_HalfElf_Strong_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_HalfElf_Strong_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_STRONG_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_STRONG_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_HalfElf_Strong_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_HalfElf_Strong_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_STRONG_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_HALFELF_STRONG_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Tiefling_Strong_Male_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Tiefling_Strong_Male","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_STRONG_MALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_STRONG_MALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1"]},{"Name":"Shout_DisguiseSelf_Tiefling_Strong_Female_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Tiefling_Strong_Female","SpellContainerID":"Shout_DisguiseSelf_MaskOfManyFaces","SpellProperties":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_STRONG_FEMALE_MOMF,100,-1)</b>"],"TooltipStatusApply":["<b>ApplyStatus(DISGUISE_SELF_TIEFLING_STRONG_FEMALE_MOMF,100,-1)</b>"],"UseCosts":["ActionPoint:1\t"]},{"Name":"Shout_DisguiseSelf_Cancel","SpellType":"Shout","Using":"Shout_DisguiseSelf","SpellProperties":["<b>RemoveStatus(SG_Disguise)</b>"],"TargetConditions":["<b>Self()</b>"],"Icon":"Spell_Illusion_DisguiseSelf_Dispel","DisplayName":"Dispel Disguise","Description":"Dispel your disguise and revert to your original form.","CastTextEvent":"Cast","UseCosts":["ActionPoint:1"],"SpellAnimation":["dd86aa43-8189-4d9f-9a5c-454b5fe4a197,,","bcc3b0d9-f04f-4448-aab0-e0ad641167cc,,","bf924cc6-8b39-4c3b-b1c0-eda264cf6150,,","cc5b0caf-3ed1-4711-a50d-11dc3f1fdc6a,,","1715b877-4512-472e-9bd0-fd568a112e90,,"],"SpellFlags":["Temporary"],"FollowUpOriginalSpell":["Shout_DisguiseSelf"]},{"Name":"Shout_DisguiseSelf_Cancel_MOMF","SpellType":"Shout","Using":"Shout_DisguiseSelf_Cancel","DisplayName":"End Shapeshift","Description":"Revert to your original form.","FollowUpOriginalSpell":"Shout_DisguiseSelf_MaskOfManyFaces"}])