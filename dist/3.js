loadSpell([[0,1,2,32,3,11,13,25,"","Projectile_Potion_Destroy_Speed","Projectile","Projectile_POTIONS",["GROUND:<b>CreateSurface(1,,PotionSpeedCloud)</b>"],"26c20c57-bdf8-4bc1-99ec-e8582a04daef,a4ea97d3-83eb-6bb5-fda7-d784160dc836","Potion of Speed","Buff"],[0,1,2,32,3,11,13,25,"","Projectile_Potion_Destroy_Vitality","Projectile","Projectile_POTIONS",["GROUND:<b>CreateSurface(1,,PotionVitalityCloud)</b>"],"26c20c57-bdf8-4bc1-99ec-e8582a04daef,a4ea97d3-83eb-6bb5-fda7-d784160dc836","Potion of Vitality","Buff"],[0,1,2,32,3,11,13,25,"","Projectile_Potion_Destroy_Oil_Of_The_Basilisk","Projectile","Projectile_POTIONS",["<b>RemoveStatus(SG_Petrified, 100)</b>"],"26c20c57-bdf8-4bc1-99ec-e8582a04daef,a4ea97d3-83eb-6bb5-fda7-d784160dc836","Basilisk Oil","Utility"],[0,1,2,32,13,"","Projectile_Potion_Destroy_Oil_Aloe","Projectile","Projectile_Potion_Destroy_Oil_Of_The_Basilisk","Aloe Oil"],[0,1,2,32,3,11,13,14,25,"","Projectile_Drink_Alcohol","Projectile","Projectile_POTIONS",["GROUND:<b>CreateSurface(1,,Alcohol)</b>","<b>ApplyStatus(DRINK_ALCOHOL,100,2)</b>"],"26c20c57-bdf8-4bc1-99ec-e8582a04daef,a4ea97d3-83eb-6bb5-fda7-d784160dc836","Lovely Jubby Booze","Alcohol. For purposes of: forgetting. Benefit of: everybody.","Utility"],[0,1,2,32,"","Projectile_MONSTERS","Projectile","Projectile_MainHandAttack"],[0,1,2,32,36,5,6,7,9,11,13,14,15,16,23,26,29,31,"","Projectile_ArmCrossbow_Merregon","Projectile","Projectile_ThrowMissile","OncePerTurn",14,["<b>Attack(AttackType.RangedUnarmedAttack)</b>"],["<b>DealDamage(1d6+2,Piercing)</b>"],["not <b>Self() and not Dead() and Character()</b>"],"a456f6ca-ff1b-4182-94c0-40b73b1ad0cb,ad2bc858-fa25-c545-ecc8-f62ca3c625bf,f8aa083d-3e68-1a9b-3f1d-7e49d4085726","Crossbow Shot","Shoot your foe.",["<b>DealDamage(1d6+2,Piercing)</b>"],["RangedWeaponAttack"],["661cae72-6bc9-4e6d-98e2-89db9e03d6b5,,","bf6ea370-a917-45b3-908d-35729c98db10,,","4a789a60-04b8-4a26-b476-65cf26ca558b,,","a11b8bcb-ba24-417a-aa86-4e4379c41ee2,,","5eb39acc-ecbd-4940-84c8-a1e13668b865,,"],"None","Aggressive","DontChange"],[0,1,2,32,36,5,6,7,15,23,26,27,46,31,"","Projectile_ArmCrossbow_Merregon_Detonation","Projectile","Projectile_ArrowOfDetonation","OncePerTurn",14,["<b>Attack(AttackType.RangedUnarmedAttack)</b>"],["<b>DealDamage(1d6+2,Piercing)</b>"],["<b>DealDamage(1d6+2,Piercing)</b>","<b>Distance(5)</b>"],["661cae72-6bc9-4e6d-98e2-89db9e03d6b5,,","bf6ea370-a917-45b3-908d-35729c98db10,,","4a789a60-04b8-4a26-b476-65cf26ca558b,,","a11b8bcb-ba24-417a-aa86-4e4379c41ee2,,","5eb39acc-ecbd-4940-84c8-a1e13668b865,,"],"None",["HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","AddFallDamageOnLand"],"4-6","DontChange"],[0,1,2,36,4,5,6,7,8,9,10,11,12,13,14,15,16,43,71,39,18,21,23,27,29,33,35,31,"","Projectile_BadOmen_Raven","Projectile","OncePerTurn","-1",9,["not <b>SavingThrow(Ability.Wisdom,SourceSpellDC())</b>"],["<b>DealDamage(2d8,Piercing)</b>","<b>ApplyStatus(OMEN_RAVEN,100,2)</b>"],["<b>DealDamage(2d8/2,Piercing)</b>"],["not <b>Self()</b>"],1,"cb71dd7a-756d-4c3a-be0f-b378f84a3f37","Action_Raven_BadOmen","Bad Omen","Hurl one of your feathers at a target to mark it as <b>Cursed</b>.",["<b>DealDamage(2d8,Piercing)</b>"],["Wisdom"],["<b>ApplyStatus(OMEN_RAVEN,100,2)</b>"],"961753f4-c345-4bc4-b408-1d5b87a5ab0c","CrSpell_Cast_Raven_BadOmen","Cast",["ActionPoint:1\t"],["e2323748-1830-4f98-affc-efbdc7c9989e,e2323748-1830-4f98-affc-efbdc7c9989e,e2323748-1830-4f98-affc-efbdc7c9989e","3a1f10b0-1383-4548-bd67-1c7cfb72df7b,,","11cc61af-c872-4bd8-8184-ffd21e6c8e17,,","8312d79a-62dc-434e-8c1f-ddc672973fc9,,","c7ced6cd-6918-44b7-99fc-4a1ec7dfb468,,","3743a439-aaab-4e56-9604-c8d876104253,,","b6d7359a-9d51-4e40-88b8-9a4c13e1e0ec,,"],["IsHarmful","RangeIgnoreVerticalThreshold"],"Aggressive","7ef4de00-ad83-46a9-8f6e-08ad88e3a38b","Piercing","DontChange"],[0,1,2,32,3,47,42,6,7,8,9,11,12,13,14,15,16,27,"","Projectile_DeathBurst_MagmaMephit","Projectile","Projectile_Fireball_Trap",["GROUND:<b>CreateSurface(3,3,Fire)</b>"],2,2,["not <b>SavingThrow(Ability.Dexterity, 11)</b>"],["<b>DealDamage(2d6,Fire)</b>"],["<b>DealDamage((2d6)/2,Fire)</b>"],["<b>Character() and not Dead() and not Tagged('MEPHIT')</b>"],"bc0105a8-da99-4e47-b6d9-a9948fd61990","PassiveFeature_Generic_Explosion","Death Burst","Explode in a burst of fire.",["<b>DealDamage(2d6,Fire)</b>"],["Dexterity"],["IsTrap","CanAreaDamageEvade"]],[0,1,2,32,36,3,9,13,14,29,"","Projectile_ExtraAttack","Projectile","Projectile_MainHandAttack","OncePerTurn",["GROUND:<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>","GROUND:<b>ExecuteWeaponFunctors(MainHand)</b>"],["not <b>Self() and not Dead() and HasStatus('AI_HELPER_EXTRAATTACK',context.Source)</b>"],"Multiattack (Ranged)","Make an additional ranged attack with your equipped weapon.","Aggressive"],[0,1,2,32,"","Projectile_Generic_Gnoll","Projectile","Projectile_MagicMissile"],[0,1,2,32,"","Projectile_Generic_Goblin","Projectile","Projectile_MagicMissile"],[0,1,2,32,"","Projectile_Generic_Hobgoblin","Projectile","Projectile_MagicMissile"],[0,1,2,32,"","Projectile_Generic_Myconid","Projectile","Projectile_MagicMissile"],[0,1,2,32,5,7,9,13,45,15,18,23,29,"","Projectile_Generic_Imp","Projectile","Projectile_FireBolt",8,["<b>DealDamage(1d4,Fire)</b>"],["not <b>Self() and not Dead() and not Item()</b>"],"Fiery Bolt",["<b>DealDamage(1d4,Fire)</b>"],["<b>DealDamage(1d4,Fire)</b>"],"Cast",["38b07239-904d-4494-8a19-f32ac04df589,,","1c448125-b801-4ef8-8ebb-e21ebece26dc,,","3ca74081-2f86-4c11-bb5b-a6c26b9cbafb,,","2ad09ff0-8b24-4da4-acc2-9bb5606f8ebe,,","a5165a2a-3992-4a46-91fd-182a54fd2aff,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"Aggressive"],[0,1,2,32,36,5,6,7,11,13,14,15,16,21,27,29,31,"","Projectile_Javelin","Projectile","Projectile_ThrowMissile","OncePerTurn",18,["<b>Attack(AttackType.RangedUnarmedAttack)</b>"],["<b>DealDamage(2d6+StrengthModifier,Piercing)</b>"],"b64b516c-1afd-4f8d-b624-4c9caf06f1c2,871b18c3-8ac0-1452-b65d-9311fdde32d2,6a3b3a69-a9d8-b8ae-a6e4-81881d254528","Throw Javelin","Throw a Javelin at your foe.",["<b>DealDamage(2d6+StrengthModifier,Piercing)</b>"],["RangedWeaponAttack"],["ActionPoint:1"],["IsEnemySpell","IgnoreSilence","IsHarmful","AddFallDamageOnLand"],"Aggressive","Sheathed"],[0,1,2,32,9,11,23,"","Projectile_Javelin_Duergar","Projectile","Projectile_Javelin",["not <b>HasStatus('FLANKED',context.Source) and not Self() and Enemy() and not Dead()</b>"],"3e983959-7884-4637-b8cb-73efd7490c0d,0822e04a-295a-16a4-2375-f4b946a67451,658494ca-eee1-327e-4f00-705742aaf1a6",["b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,","e1726462-6f35-4551-af40-5247a314f38d,,"]],[0,1,2,32,7,9,11,15,39,18,29,34,"","Projectile_Javelin_Ogre","Projectile","Projectile_Javelin",["<b>DealDamage(2d6+StrengthModifier,Piercing)</b>"," <b>Force(1)</b>"],["not <b>HasStatus('FLANKED',context.Source) and not Self() and Enemy() and not Dead()</b>"],"36f25f9b-60e6-4922-afd9-12cc7eef5fb0,0c489d62-e23b-d4ee-9843-9f4fa4a336c1,835fb1fa-7398-9db0-90b0-50180a611bf2",["<b>DealDamage(2d6+StrengthModifier,Piercing)</b>"],"CrSpell_Cast_OgreThrowJavelin","Cast","Aggressive","f4e0e958-23e0-4c3e-927b-f07bf0235b93"],[0,1,2,32,29,"","Projectile_Javelin_Ogre_NoRecharge","Projectile","Projectile_Javelin_Ogre","Aggressive"],[0,1,2,32,7,9,11,15,39,18,23,29,34,"","Projectile_Javelin_Bugbear","Projectile","Projectile_Javelin",["<b>DealDamage(1d6+StrengthModifier,Piercing)</b>"],["not <b>HasStatus('FLANKED',context.Source) and not Self() and Enemy() and not Dead()</b>"],"3e983959-7884-4637-b8cb-73efd7490c0d,0822e04a-295a-16a4-2375-f4b946a67451,658494ca-eee1-327e-4f00-705742aaf1a6",["<b>DealDamage(1d6+StrengthModifier,Piercing)</b>"],"CrSpell_Cast_BugbearThrowJavelin","Cast",["b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,","e1726462-6f35-4551-af40-5247a314f38d,,"],"Aggressive","b839523e-df6d-48aa-97b9-260ad00c2f7b"],[0,1,2,32,36,3,5,11,12,13,14,16,43,25,27,79,81,33,34,"","Projectile_Jump_HookHorror","Projectile","Projectile_Jump","OncePerTurn",["GROUND:<b>CreateExplosion(Projectile_Jump_Knockdown_AOE)</b>"],14,"4505c63a-cb98-42bb-942b-3a739feecef8,d429d77c-33a8-a362-c38d-3dc446057386,c88fac5e-79c8-3abe-20d5-2dc7c02c9661","Action_Pounce_HookHorror","Pounce","Leap at a target, possibly knocking it <b>Prone</b>.",["Strength"],["<b>ApplyStatus(PRONE,100,2)</b>"],"Damage",["IsJump","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IgnoreVisionBlock","CannotTargetCharacter","CannotTargetItems"],"Jump","Pounce","be6c1930-3cfc-41d4-8e46-b6a91ed48267","d2a8a9aa-6451-411c-90fb-a01236388280"],[0,1,2,32,36,3,9,11,12,13,14,15,71,39,21,23,27,34,"","Projectile_Jump_Bulette","Projectile","Projectile_Jump_HookHorror","OncePerTurn",["GROUND:<b>CreateExplosion(Projectile_Jump_Bulette_Spawn)</b>"],["<b>CanStand('0ea356fc-7a6f-4c60-8017-86349e2777ab')</b>"],"a6154eff-e34d-4f7b-b115-ada400496e97,3ea6c884-d13b-855d-882c-b08fa701f1ee,58a077ad-fa49-05ce-c438-5c74ad9021a6","Action_Jump","Deadly Leap","Leap to your targets, pushing them back, and possibly making them fall <b>Prone</b>.",["<b>DealDamage(3d6+4,Bludgeoning)</b>","<b>DealDamage(3d6+4,Slashing)</b>"],"f6bac56a-c82f-4265-87b4-00a7ff7746eb","CrSpell_Cast_DeadlyLeap",["Movement:6"],["958dd4d6-3ad3-4f58-a4ae-9499743a6dab,,","d7741bd3-2ec9-41aa-803b-39d2be52aac5,,","78da379c-5535-4a07-b650-b695831bab9a,,","1accbc00-728f-44d4-8926-268944ce5f03,,"],["IsJump","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IgnoreVisionBlock","CannotTargetItems","CannotTargetCharacter"],"fb36e39f-1bc9-4421-96ef-0acdd663a0c6"],[0,1,2,32,47,42,6,7,8,9,15,23,27,"","Projectile_Jump_Bulette_Spawn","Projectile","Projectile_Jump_Bulette",4,4,["not <b>SavingThrow(Ability.Strength, 16)</b>"],["<b>DealDamage(3d6+StrengthModifier,Bludgeoning)</b>"," <b>DealDamage(3d6+4,Slashing)</b>"," <b>ApplyStatus(PRONE,100,2)</b>"," <b>Force(4)</b>"],["<b>DealDamage((3d6+4)/2,Bludgeoning)</b>","<b>DealDamage((3d6+4)/2,Slashing)</b>","<b>Force(2)</b>"],["not <b>Self() and not Dead() and Enemy()</b>"],["<b>DealDamage(3d6+4,Bludgeoning)</b>","<b>DealDamage(3d6+4,Slashing)</b>"],["6c816a60-d5e5-45c4-9b4c-27bf3f1cca4e,,"],["IsJump","IgnoreVisionBlock","RangeIgnoreVerticalThreshold","CannotTargetItems"]],[0,1,2,32,36,76,"","Projectile_Jump_IntellectDevourer","Projectile","Projectile_Jump","OncePerTurn","2.5"],[0,1,2,32,5,11,13,27,"","Projectile_Jump_Frog","Projectile","Projectile_Jump",18,"9d893642-654d-41a4-aaad-81f9dc588941,10e3e9e2-82b1-16be-80c3-bba883d01b48,e528a4bd-bc17-d0d1-188c-dbe1d4eda1f0","Jump",["IsJump","HasHighGroundRangeExtension","IgnoreVisionBlock","RangeIgnoreVerticalThreshold","Invisible","CannotTargetCharacter","CannotTargetItems"]],[0,1,2,32,36,5,11,13,18,21,23,27,34,"","Projectile_Jump_Spider","Projectile","Projectile_Jump","OncePerTurn",18,"8daba69c-347d-419e-a9de-efacd82d7e51,6ff3928f-3ec8-48cd-1a61-fc7c0c97c2c7,17772b1c-eed7-a1fc-bc65-082d30f44edd","Arachnid Jump","Cast",["BonusActionPoint:1"],["b6bebde2-ecff-4df6-9d24-cd9fabb9fe79,,","f49c1788-7819-481f-9b83-2344d708e682,,","f8fe2e89-2313-48f7-963c-0907b6306fd1,,"],["IsJump","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IgnoreVisionBlock","Invisible","AddFallDamageOnLand","CannotTargetCharacter","CannotTargetItems"],"a398baac-4b66-4410-82fd-45b2007ff510"],[0,1,2,32,5,"","Projectile_Jump_Spider_WildShape","Projectile","Projectile_Jump_Spider",9],[0,1,2,32,11,"","Projectile_Jump_Spider_Queen","Projectile","Projectile_Jump_Spider","5ac723b1-fbed-4905-bf6c-cd0838d1eaa3,fd4f0d2a-423a-7ab5-da79-d8c0e83c3912,7618d640-bf4c-02f0-c87c-5fea4622b449"],[0,1,2,32,5,11,"","Projectile_Jump_Spider_Summon","Projectile","Projectile_Jump_Spider","4.5","36c7f460-5d81-45ac-bde1-24352dd1761d,8fae5f44-36b6-81ab-e12f-11a31fdef39a,b30b5873-eb59-fe73-2180-669879c8dbc7"],[0,1,2,32,5,11,"","Projectile_Jump_Spider_Tiny","Projectile","Projectile_Jump_Spider","4.5","52c2a22b-72e9-4d19-9a15-afe66c049256,f100430b-ff3e-291b-3b1c-b86cce594910,9d89d761-04eb-0ae4-a27b-d072045525fe"],[0,1,2,32,36,5,10,11,12,13,39,18,78,21,23,25,27,79,83,34,"","Projectile_Jump_Harpy","Projectile","Projectile_Fly","OncePerTurn",18,1,"c5ebd5ba-2e38-45cf-99d5-46980a57e47d,fce1080d-26da-2099-ffbe-15caff0a10a9,6f3ee727-e80f-0682-e16f-e33920c197ad","Action_Jump","Fly","CrSpell_Cast_HarpyFlight","Cast","Yes",["Movement:3"],["b6bebde2-ecff-4df6-9d24-cd9fabb9fe79,,","f49c1788-7819-481f-9b83-2344d708e682,,"],"Utility",["IsJump","HasHighGroundRangeExtension","IgnoreVisionBlock","RangeIgnoreVerticalThreshold","CannotTargetCharacter","CannotTargetItems","NoAOEDamageOnLand"],"Jump","!Immobile","947e7bdc-77b6-42f9-9c6c-69f4608099d2"],[0,1,2,32,5,13,21,25,34,"","Projectile_Jump_Gnoll","Projectile","Projectile_Jump",8,"Leap",["BonusActionPoint:1"],"Utility","5752eb11-7244-4704-9fa1-c6cf7f514a63"],[0,1,2,32,36,"","Projectile_Jump_Imp","Projectile","Projectile_Fly","OncePerTurn"],[0,1,2,32,5,47,42,6,7,9,11,27,"","Projectile_Jump_Knockdown_AOE","Projectile","Projectile_Jump",3,3,3,["not <b>SavingThrow(Ability.Strength, SourceSpellDC())</b>"],["<b>ApplyStatus(PRONE,100,2)</b>"],["not <b>Self() and Enemy() and not Dead()</b>"],"9d893642-654d-41a4-aaad-81f9dc588941,10e3e9e2-82b1-16be-80c3-bba883d01b48,e528a4bd-bc17-d0d1-188c-dbe1d4eda1f0",["None"]],[0,1,2,32,36,3,5,9,12,13,14,16,43,18,21,25,79,81,34,"","Projectile_Jump_Minotaur","Projectile","Projectile_Jump","OncePerTurn",["GROUND:<b>CreateExplosion(Projectile_Jump_Knockdown_AOE)</b>"],9,["<b>DistanceToTargetGreaterThan(2)</b>"],"Action_Monster_Minotaur_Jump","Brutal Leap","Leap at a target and possibly knock it <b>Prone</b>.",["Strength"],["<b>ApplyStatus(PRONE,100,2)</b>"],"Cast",["Movement:3","BonusActionPoint:1"],"Damage","Jump","Pounce","5f99cc1c-a104-418d-ab48-b71d634da2f3"],[0,1,2,32,36,3,5,11,13,14,16,43,18,21,25,27,81,34,"","Projectile_Jump_Owlbear","Projectile","Projectile_Jump_NoFallDamage","OncePerTurn",["GROUND:<b>CreateExplosion(Projectile_Jump_Knockdown_AOE)</b>"],16,"2525a5c9-7d5b-4619-9043-e6431d215c0f,5d8aae7b-e5ce-4ccd-9784-3a02a5ed2373,47e17fe3-92d3-f25c-5a78-00960146d950,182baa94-205d-ed3f-ccb8-74950d7920f5","Crushing Flight","Leap at a target, possibly knocking it <b>Prone</b>.",["Strength"],["<b>ApplyStatus(PRONE,100,2)</b>"],"Cast",["BonusActionPoint:1","Movement:6"],"Damage",["RangeIgnoreVerticalThreshold","HasHighGroundRangeExtension","IgnoreVisionBlock","IsJump","CannotTargetCharacter","CannotTargetItems","NoAOEDamageOnLand"],"Pounce","00858a38-e1eb-416a-99ee-0aa3f5f47d41"],[0,1,2,32,5,11,13,14,25,81,33,34,"","Projectile_Jump_Owlbear_Cub","Projectile","Projectile_Jump_Owlbear","4.5","f87c3ea9-967e-42d6-83be-fe3e68991ebb,b6e31e88-d7d2-7741-20fa-2d8ab8b39fc4,24f7ec71-0659-6538-10d1-b5ee79aa0ba5","Jump","Jump to a destination.","Utility","Jump","bab02cc8-492d-42c4-81d9-73ce2e3a11be","ebdacef5-3224-480d-82f6-e8782ff0f7cd"],[0,1,2,32,36,5,12,13,14,21,25,27,"","Projectile_Jump_Mephit","Projectile","Projectile_Fly","OncePerTurn",15,"Action_Fly","Fly","Fly to a target position.",["BonusActionPoint:1"],"Utility",["IsJump","HasHighGroundRangeExtension","IgnoreVisionBlock","CannotTargetCharacter","CannotTargetItems","RangeIgnoreVerticalThreshold"]],[0,1,2,32,36,76,5,13,39,18,21,25,27,79,29,81,"","Projectile_Jump_Spectator","Projectile","Projectile_Fly","OncePerTurn",24,18,"Fly","CrSpell_Impact_SpectatorFlight","Cast",["Movement:3"],"Utility",["IsJump","HasHighGroundRangeExtension","IgnoreVisionBlock","CannotTargetCharacter","CannotTargetItems"],"Jump","Aggressive","Pounce"],[0,1,2,32,13,14,25,"","Projectile_Jump_Tiny","Projectile","Projectile_Jump","Leap","Jump a short distance.","Utility"],[0,1,2,32,36,76,5,12,13,14,39,21,33,34,"","Projectile_Levitate_Mindflayer","Projectile","Projectile_Fly","OncePerTurn",18,18,"TadpoleSuperPower_Levitate","Levitate","Float effortlessly to a destination.","CrSpell_Cast_Levitate",["Movement:4"],"67709a42-d0ca-4c57-ab12-de411670b32d","629d264b-5a78-46f6-b305-172372f21d8f"],[0,1,2,32,36,5,11,13,14,21,33,34,"","Projectile_Levitate_Beholder","Projectile","Projectile_Jump_NoFallDamage","OncePerTurn",15,"621d24ad-87e1-4de0-9ba3-ce861ced0af2,64b2ee90-d53b-c09a-8f55-a962f0e6fe8c","Levitate","Float effortlessly to a destination.",["ActionPoint:0"],"addd0151-3e75-44ad-b9f2-570a509e066f","29145c03-15d1-4abb-9089-cb806fbffee7"],[0,1,2,32,3,47,42,6,7,9,10,11,12,13,14,43,39,18,21,23,27,29,34,"","Projectile_MephitExplosion_Mud","Projectile","Projectile_Fireball",["GROUND:<b>CreateSurface(1.5,,Mud)</b>"],6,5,["not <b>SavingThrow(Ability.Dexterity, 13,AdvantageOnRestrained(),DisadvantageOnRestrained())</b>"],["<b>ApplyStatus(MEPHIT_MUD_RESTRAINED, 100, 2)</b>"],["<b>Character() and not Self()</b>"],1,"c712c5ae-c873-41fd-9503-77154bc19b22,594c56ff-2ec3-1504-82a3-6eccbb90c4c1","PassiveFeature_Generic_Explosion","Death Burst","Explode in a burst of sticky mud. It dries instantly on any creatures not made of mud, <b>Restraining</b> them.",["<b>ApplyStatus(MEPHIT_MUD_RESTRAINED, 100, 2)</b>"],"CrSpell_Cast_DeathBurst","Cast",["ActionPoint:0"],["de0a782c-14ea-42b2-bdf6-93be5e9387f3,,","20e628a8-8043-453c-8fb0-7021c45e8250,,"],["IsEnemySpell","IgnoreSilence","CanAreaDamageEvade"],"Aggressive","2712075d-7c51-418f-b117-1398b806a887"],[0,1,2,32,36,29,"","Projectile_MenacingAttack_NPC","Projectile","Projectile_MenacingAttack","OncePerCombat","Aggressive"],[0,1,2,32,36,5,6,7,9,12,13,14,15,18,19,21,23,29,"","Projectile_Multiattack","Projectile","Projectile_MainHandAttack","OncePerTurn","RangedMainWeaponRange",["<b>Attack(AttackType.RangedWeaponAttack)</b>"," Cast2[<b>Attack(AttackType.RangedWeaponAttack)</b>]"],["<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>"," Cast2[<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>]"],["not <b>Self() and not Dead()</b>"],"GenericIcon_Intent_Damage","Multiattack (Ranged)","Aim two attacks at a target.",["<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>","<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>"],"Cast",["Cast2"],["ActionPoint:1"],["6d444cbe-28c7-4f69-9409-9b4871851d9b,,","ebd0529b-057e-491f-b124-acfed054728b,,","eeca2c0a-5f81-411e-aad8-b72362322900,,","2b6afcc6-c9c1-4dc1-9904-88bebecb892f,,","caa0d92c-5cd1-4248-9a4a-f2a8e404dac3,,","e6d40932-427f-4699-a0de-66f124d905b1,,"],"Aggressive"],[0,1,2,32,36,29,"","Projectile_PushingAttack_NPC","Projectile","Projectile_PushingAttack","OncePerCombat","Aggressive"],[0,1,2,32,6,7,9,14,15,19,23,29,34,"","Projectile_Multiattack_Gnoll_Flind_Ranged","Projectile","Projectile_Multiattack",["<b>Attack(AttackType.RangedWeaponAttack)</b>"," Cast2[<b>Attack(AttackType.RangedWeaponAttack)</b>]"," Cast3[<b>Attack(AttackType.RangedWeaponAttack)</b>]"],["<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>"," Cast2[<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>]"," Cast3[<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>"," <b>ExecuteWeaponFunctors(MainHand)</b>]"],["not <b>Self() and not Dead() and Enemy() and Character()</b>"],"Aim three attacks at a target.",["<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>","<b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>"," <b>DealDamage(MainRangedWeapon, MainRangedWeaponDamageType)</b>"],["Cast2","Cast3"],["6d444cbe-28c7-4f69-9409-9b4871851d9b,,","ebd0529b-057e-491f-b124-acfed054728b,,","eeca2c0a-5f81-411e-aad8-b72362322900,,","2b6afcc6-c9c1-4dc1-9904-88bebecb892f,,","caa0d92c-5cd1-4248-9a4a-f2a8e404dac3,,","e6d40932-427f-4699-a0de-66f124d905b1,,"],"Aggressive","b646de4d-1a84-4fd8-820c-0dd46dea66db"],[0,1,2,32,36,5,7,9,11,12,13,39,23,29,34,31,"","Projectile_Net_Kuotoa","Projectile","Projectile_ThrowNet","OncePerCombat",8,["<b>ApplyStatus(NET, 100, 2)</b>"],["<b>Character() and not Self() and not HasStatus('NET') and not HasStatus('SANCTUARY')</b>"],"1fcb5fe8-7200-4901-9bb7-7336d45e2f09,9943d654-9e6b-ab8f-846b-20ea43f329bd","Action_Monster_KuoToa_Net","Net","CrSpell_Cast_Net",["b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,","e1726462-6f35-4551-af40-5247a314f38d,,"],"Aggressive","d105d9f9-83c8-4a2e-a505-fd5c52f4d90c","Sheathed"],[0,1,2,32,36,47,6,7,9,11,12,13,14,15,16,43,21,23,25,27,29,"","Projectile_Pounce_Wolf_Summon","Projectile","Projectile_Jump","OncePerTurn",2,["not <b>SavingThrow(Ability.Strength, SourceSpellDC())</b>"],["<b>DealDamage(1d4+UnarmedMeleeAbilityModifier,Bludgeoning)</b>"," <b>ApplyStatus(PRONE,100,2)</b>"],["<b>Character()</b>"],"9d893642-654d-41a4-aaad-81f9dc588941,10e3e9e2-82b1-16be-80c3-bba883d01b48,e528a4bd-bc17-d0d1-188c-dbe1d4eda1f0","GenericIcon_Intent_Damage","Pounce","Leap at a target to bite it and possibly knocks it <b>Prone</b>.",["<b>DealDamage(1d4+UnarmedMeleeAbilityModifier,Piercing)</b>"],["RangedWeaponAttackStrength"],["<b>ApplyStatus(PRONE,100,2)</b>"],["Movement:Distance"," ActionPoint:1"],["b6bebde2-ecff-4df6-9d24-cd9fabb9fe79,,","f49c1788-7819-481f-9b83-2344d708e682,,"],"Control",["IsJump","IgnoreVisionBlock"],"Aggressive"],[0,1,2,32,57,5,47,42,6,7,9,10,11,12,13,14,18,23,25,27,29,61,"","Projectile_Spike_Trap","Projectile","Projectile_Fireball",3,18,6,1,["not <b>SavingThrow(Ability.Dexterity, SourceSpellDC())</b>"],["<b>DealDamage(2d8+4,Piercing)</b>"],["not <b>Self() and not Dead()</b>"],1,"2e9faa4c-79d7-4dc2-ba5f-5c7c4c203496","GenericIcon_Intent_Damage","Trap Spike","Spikes emerge to pierce a target from below.","Cast",["1d832b0a-ccfe-4ca7-8426-10200306921c,,"],"Damage",["IsTrap","CanAreaDamageEvade","ImmediateCast","IsEnemySpell"],"Aggressive",1],[0,1,2,3,5,47,42,6,7,10,11,12,13,14,15,16,39,18,21,23,25,27,28,29,46,34,31,"","Projectile_GreenSporeCloud","Projectile",["GROUND:<b>CreateSurface(2,3,SporeGreenCloud)</b>"],18,2,2,["<b>Attack(AttackType.RangedSpellAttack)</b>"],["<b>DealDamage(2d4+1,Poison)</b>"],1,"81a545c2-f61d-4626-b066-237db154dc13","Action_Glut_GreenSporeCloud","Bibberbang Spores","Eject poisonous bibberbang spores and create a cloud of Noxious Fumes.",["<b>DealDamage(2d4+1,Poison)</b>"],["RangedWeaponAttack","Constitution"],"CrSpell_Cast_SporeCloud","Cast",["ActionPoint:1"],["f029cc32-9718-4e88-9426-d960265b9aa5,,","71602dce-e7a9-4785-98cb-c4d0f68c626d,,","a67886cc-8458-48bf-bd98-3d1541232fe7,,","ce9e9d06-8e08-48dc-8ead-644d6da197e8,,","e53fb7fd-d5cc-4bc7-8956-89af694604b5,,"],"Damage",["IsEnemySpell","IsHarmful","HasSomaticComponent","HasHighGroundRangeExtension"],"MagicalDamage_Internal","Aggressive","3-6","b92610ed-83e1-4343-911c-e2e164e338b1","DontChange"],[0,1,2,32,"","Projectile_GreenSporeCloud_Grenade","Projectile","Projectile_GreenSporeCloud"],[0,1,2,32,3,7,11,12,13,14,15,16,39,25,28,29,46,34,31,"","Projectile_BlackSporeCloud","Projectile","Projectile_GreenSporeCloud",["GROUND:<b>CreateSurface(2,2,SporeBlackCloud)</b>"],["<b>DealDamage(2d4+1,Poison)</b>"],"2c7962ef-b502-4af7-ba34-db34c77b822a","Action_Glut_BlackSporeCloud","Timmask Spores","Eject timmask spores that can <b>Befuddle</b> creatures.",["<b>DealDamage(2d4+1,Poison)</b>"],["RangedWeaponAttack"],"CrSpell_Cast_SporeCloud","Control","MagicalDamage_Internal","Aggressive",6,"e90a6cf3-174d-40ab-918c-1e2df5baf6c6","DontChange"],[0,1,2,32,"","Projectile_BlackSporeCloud_Grenade","Projectile","Projectile_BlackSporeCloud"],[0,1,2,32,3,11,12,13,14,43,39,21,25,28,29,46,34,"","Projectile_WhiteSporeCloud","Projectile","Projectile_GreenSporeCloud",["GROUND:<b>CreateSurface(2,3,SporeWhiteCloud)</b>","<b>ApplyStatus(HASTE_SURFACE,100,1)</b>"],"12026f65-39c5-40d8-9f05-37b5f276e471","Action_Glut_WhiteSporeCloud","Haste Spores","Eject a cloud of white spores that <b>Haste</b> any creature that enters the cloud.",["<b>ApplyStatus(HASTE_SURFACE,100,1)</b>"],"CrSpell_Cast_SporeCloud",["BonusActionPoint:1"],"Buff","MagicalDamage_Internal","Aggressive",6,"f79f88c8-0f66-4972-b9fb-76296f55a6fa"],[0,1,2,32,3,"","Projectile_WhiteSporeCloud_Grenade","Projectile","Projectile_WhiteSporeCloud",["<b>ApplyStatus(HASTE_SURFACE,100,1)</b>"]],[0,1,2,5,6,7,9,10,11,12,13,14,15,16,43,39,18,21,23,27,29,33,34,31,"","Projectile_UrticatingHair_Spider","Projectile",18,["<b>Attack(AttackType.RangedUnarmedAttack)</b>"],["<b>IF(not SavingThrow(Ability.Constitution, 14))</b>:<b>ApplyStatus(BLINDNESS,100,6)</b>"," <b>DealDamage(2d6+DexterityModifier,Piercing)</b>"],["not <b>Self() and not Dead()</b>"],1,"800fd3ea-ebe7-49be-9dc3-dba4bcbbd6db,72238bc9-b7bb-5d28-2da3-52af5316dd81","GenericIcon_Intent_Control","Urticating Hairs","Eject barbed bristles at a target and possibly <b>Blind</b> it.",["<b>DealDamage(2d6+DexterityModifier,Piercing)</b>"],["RangedWeaponAttack","Constitution"],["<b>ApplyStatus(BLINDNESS,100,6)</b>"],"CrSpell_Cast_UrticatingHair","Cast",["ActionPoint:1"],["16dc1646-dc5b-45b4-af62-416800a32303,,","d2eb80ce-59ea-4a91-9e9e-7ea71f323e8b,,","6f973496-a22b-4d78-86ba-b45472af8a77,,","555ebc91-74ee-4f2d-a5f5-484e328fea14,,","9c8899ee-8b12-4889-81ef-0d305aba3d2b,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],["HasSomaticComponent","HasHighGroundRangeExtension"],"Aggressive","cb203185-5c0e-44d2-9cae-9cce52f0000e","62fb6115-4eb9-494b-8747-f54e55a850a3","Ranged"],[0,1,2,32,5,47,42,6,7,9,11,13,14,16,43,29,"","Projectile_SpiderInfestation","Projectile","Projectile_MainHandAttack",3,3,3,["not <b>SavingThrow(Ability.Dexterity, 13)</b>"],["<b>ApplyStatus(SPIDER_INFESTATION,100,4)</b>"],["<b>Character() and not Self() and not Dead() and not (Tagged('SPIDER') or Tagged('SPIDER_PHASE') or HasPassive('SpiderWalk') or HasStatus('SPIDER_INFESTATION') or Tagged('ETTERCAP'))</b>"],"6febfa58-3230-4779-b52e-3df2518c0f85","Spread Infestation","Tiny spiders scurry from the corpse, <b>Infesting</b> nearby creatures.",["Dexterity"],["<b>ApplyStatus(SPIDER_INFESTATION,100,4)</b>"],"Aggressive"],[0,1,2,32,58,5,6,7,9,10,11,13,14,15,16,18,21,23,27,29,34,"","Projectile_StoneThrow","Projectile","Projectile_Javelin","None",9,["<b>Attack(AttackType.RangedUnarmedAttack)</b>"],["<b>DealDamage(1d4+StrengthModifier,Bludgeoning)</b>"],["not <b>Self() and not Dead()</b>"],1,"b3d955f2-33d7-4146-98e8-8b953cbc060d,48c3ebe8-ac38-da5b-ede4-ed0bb706ab2d","Throw Stone","Throw a sharp stone at a foe.",["<b>DealDamage(1d4+StrengthModifier,Bludgeoning)</b>"],["RangedWeaponAttack"],"Cast",["ActionPoint:1"],["e8075d90-9018-4b4a-8b2e-bab0cffe2fbd,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,"],["IsEnemySpell","IgnoreSilence","HasSomaticComponent","HasHighGroundRangeExtension"],"Aggressive","6f646e52-83c4-4166-bd19-b571445ec891"],[0,1,2,32,58,6,7,9,10,11,13,14,15,16,18,21,23,25,27,29,34,31,"","Projectile_StoneThrow_Harpy","Projectile","Projectile_Javelin","None",["<b>Attack(AttackType.RangedWeaponAttack)</b>"],["<b>DealDamage(2d4+StrengthModifier,Bludgeoning)</b>"],["not <b>Self() and not Dead() and not HasStatus('LURING_SONG_AURA',context.Source)</b>"],1,"b3d955f2-33d7-4146-98e8-8b953cbc060d,48c3ebe8-ac38-da5b-ede4-ed0bb706ab2d","Sharp Rock","Throw a sizeable, rugged stone.",["<b>DealDamage(2d4+StrengthModifier,Bludgeoning)</b>"],["RangedWeaponAttack"],"Cast",["ActionPoint:1"],["e8075d90-9018-4b4a-8b2e-bab0cffe2fbd,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,"],"Damage",["IsEnemySpell","IgnoreSilence","HasSomaticComponent"],"Aggressive","4b80b537-3a3b-4079-bd60-398fefff8019","DontChange"],[0,1,2,32,23,"","Projectile_StoneThrow_Duergar","Projectile","Projectile_StoneThrow",["e8075d90-9018-4b4a-8b2e-bab0cffe2fbd,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,"]],[0,1,2,32,7,11,12,13,14,15,34,"","Projectile_StoneThrow_Ogre","Projectile","Projectile_Javelin_Ogre",["<b>DealDamage(2d6+StrengthModifier,Bludgeoning)</b>"," <b>Force(1)</b>"],"b3d955f2-33d7-4146-98e8-8b953cbc060d,48c3ebe8-ac38-da5b-ede4-ed0bb706ab2d","Action_Throw","Throw Stone","Throw a sharp stone at a foe.",["<b>DealDamage(2d6+StrengthModifier,Bludgeoning)</b>"],"6f646e52-83c4-4166-bd19-b571445ec891"],[0,1,2,32,5,47,42,6,7,11,12,13,14,15,16,43,39,18,21,23,28,29,34,31,"","Projectile_ToxicSpit","Projectile","Projectile_UrticatingHair_Spider",12,1,1,["<b>Attack(AttackType.RangedUnarmedAttack)</b>"],["<b>IF(not SavingThrow(Ability.Constitution, SourceSpellDC(),AdvantageOnPoisoned()))</b>:<b>ApplyStatus(POISONED,100,2)</b>","<b>DealDamage(2d6+DexterityModifier,Poison)</b>","<b>CreateSurface(2,10,Poison)</b>"],"02fad746-8981-4bd0-a001-428ccd806e5c","GenericIcon_DamageType_Poison","Venomous Discharge","Spit out a venomous substance and possibly <b>Poison</b> those it hits.",["<b>DealDamage(2d6+DexterityModifier,Poison)</b>"],["RangedWeaponAttack","Constitution"],["<b>ApplyStatus(POISONED,100,2)</b>"],"CrSpell_Cast_VenomousDischarge","Cast",["ActionPoint:1"],["b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,","e1726462-6f35-4551-af40-5247a314f38d,,"],"MagicalDamage_Internal","Aggressive","bd9dbeb6-549a-46d2-ac74-7e3a3e67ae88","DontChange"],[0,1,2,32,47,42,7,11,12,15,18,23,28,29,33,34,"","Projectile_ToxicSpit_Frog","Projectile","Projectile_ToxicSpit",2,2,["<b>IF(not SavingThrow(Ability.Constitution, SourceSpellDC(),AdvantageOnPoisoned()))</b>:<b>ApplyStatus(POISONED,100,2)</b>","<b>DealDamage(3d6+DexterityModifier,Poison)</b>","<b>CreateSurface(2,10,PoisonCloud)</b>"],"1f3b3206-2c95-4d31-9c22-81040b76f01f,ea30c157-5595-a549-e78d-2753c4f18c0c,e2bcf193-b57d-01c2-0059-1dc92ffae1f0","Action_Monster_Frog_ToxicSpit",["<b>DealDamage(3d6+DexterityModifier,Poison)</b>"],"Cast",["8b8bb757-21ce-4e02-a2f3-97d55cf2f90b,,","6606c30b-be1c-4f17-ae6b-1a591c80b18c,,","f4ac302b-1569-404f-bd52-1fe443e265df,,","e8a5c57f-855b-4227-acaa-11e8ce8d7d64,,","7bb52cd4-0b1c-4926-9165-fa92b75876a3,,","2b81c18b-9698-4262-a623-932c2bb1296d,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"MagicalDamage_External","Aggressive","3d332947-4437-44d0-8b95-0a2529a0040e","088ac86f-64d4-40c2-abd2-578fe602e9d1"],[0,1,2,32,5,7,9,23,28,29,"","Projectile_ToxicSpit_PhaseSpider","Projectile","Projectile_ToxicSpit",12,["<b>IF(not SavingThrow(Ability.Constitution, SourceSpellDC(),AdvantageOnPoisoned()))</b>:<b>ApplyStatus(POISONED,100,2)</b>","<b>DealDamage(2d6+DexterityModifier,Poison)</b>","<b>CreateSurface(1,3,Poison)</b>"],["<b>Character() and not Dead() and Enemy()</b>"],["b1befe57-ee3e-4126-8c9d-3b6cec7eb3f4,,","f2803838-31cf-471b-85d1-92fa2d0eb7c2,,","4be0751c-9fca-4c35-9337-6bf8a321c516,,","86b52093-596c-4054-bb1d-2dbdfcdc4347,,","e1726462-6f35-4551-af40-5247a314f38d,,","0b07883a-08b8-43b6-ac18-84dc9e84ff50,,"],"MagicalDamage_External","Aggressive"],[0,1,2,32,5,47,42,7,11,15,28,29,"","Projectile_ToxicSpit_PhaseSpiderQueen","Projectile","Projectile_ToxicSpit_PhaseSpider",20,2,2,["<b>IF(not SavingThrow(Ability.Constitution, SourceSpellDC(),AdvantageOnPoisoned()))</b>:<b>ApplyStatus(POISONED,100,2)</b>","<b>DealDamage(4d6+DexterityModifier,Poison)</b>","AI_IGNORE:<b>CreateSurface(1,3,Poison)</b>"],"fb58165e-389b-4197-ba32-6896fbaccd9c",["<b>DealDamage(4d6+DexterityModifier,Poison)</b>"],"MagicalDamage_External","Aggressive"],[0,1,2,32,3,7,11,12,13,14,15,23,24,34,"","Projectile_ToxicSpit_Ooze","Projectile","Projectile_ToxicSpit",["GROUND:<b>CreateSurface(1,3,Acid)</b>"],["<b>DealDamage(2d6,Acid)</b>"],"463eb279-8884-446b-b385-cffead58efd4","GenericIcon_DamageType_Acid","Ochre Sputum","Spit out an acidic substance and create an <b>Acid</b> surface on impact. ",["<b>DealDamage(2d6,Acid)</b>"],["accc80a3-002d-4236-9343-2e29b7bee5fd,,","5ed9b242-79de-4eca-a884-319b3c139edf,,","eb088193-13f6-44ec-889d-2f1966587697,,","72ee5db6-869d-4a43-9add-8056ab7159e3,,","ea6e0c45-db66-4034-a4eb-4e890d91168e,,","d21075df-3648-4626-b211-84cd99a21cb4,,"],["accc80a3-002d-4236-9343-2e29b7bee5fd,,","5ed9b242-79de-4eca-a884-319b3c139edf,,","eb088193-13f6-44ec-889d-2f1966587697,,","72ee5db6-869d-4a43-9add-8056ab7159e3,,","ea6e0c45-db66-4034-a4eb-4e890d91168e,,","d21075df-3648-4626-b211-84cd99a21cb4,,"],"180ed15d-28b7-45b3-b336-8dd32677a27b"],[0,1,2,32,58,3,5,47,85,42,6,7,8,9,11,12,13,14,15,71,21,23,27,28,29,33,34,31,"","Projectile_ToxicSpit_Bulette","Projectile","Projectile_AcidSplash","None",["GROUND:<b>CreateSurface(2,3,Acid)</b>"],14,2,"Acid",2,["not <b>SavingThrow(Ability.Dexterity, 15)</b>"],["<b>DealDamage(2d8+3,Acid)</b>"],["<b>DealDamage((2d8+3)/2,Acid)</b>"],["not <b>Dead()</b>"],"f1512ea3-8d5d-4320-87ac-6674309bac49","GenericIcon_DamageType_Acid","Corrosive Phlegm","Expectorate on a target.",["<b>DealDamage(2d8+3,Acid)</b>"],"961753f4-c345-4bc4-b408-1d5b87a5ab0c",["ActionPoint:1"],["accc80a3-002d-4236-9343-2e29b7bee5fd,,","5ed9b242-79de-4eca-a884-319b3c139edf,,","eb088193-13f6-44ec-889d-2f1966587697,,","72ee5db6-869d-4a43-9add-8056ab7159e3,,","ea6e0c45-db66-4034-a4eb-4e890d91168e,,","d21075df-3648-4626-b211-84cd99a21cb4,,"],["HasSomaticComponent","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","CanAreaDamageEvade"],"MagicalDamage_External","Aggressive","cc98935b-6ddf-4386-9f10-bd324fc1bd8d","91f536d1-be47-4c7b-812e-4ade8041b77c","DontChange"],[0,1,2,32,36,29,"","Projectile_TripAttack_NPC","Projectile","Projectile_TripAttack","OncePerCombat","Aggressive"],[0,1,2,32,36,5,85,6,7,9,10,11,12,13,14,15,16,39,18,21,23,25,27,28,29,33,34,31,"","Projectile_SynapticDischarge_IntDev","Projectile","Projectile_ThrowMissile","OncePerTurn",18,"Electrocution",["<b>Attack(AttackType.RangedUnarmedAttack)</b>"],["<b>DealDamage(1d6+2,Psychic)</b>"],["<b>Character() and not Self() and not Dead()</b>"],1,"c0cd820b-c32c-4ffa-b4b0-5cde60ecc2ae","Spell_IntellectDevourer_SynapticDischarge","Synaptic Discharge","Expel a wave of telepathic energy. ",["<b>DealDamage(1d6+2,Psychic)</b>"],["RangedWeaponAttack"],"CrSpell_Cast_SypnaticDischarge","Cast",["ActionPoint:1"],["73afb4e5-8cfe-4479-95cf-16889597fee3,,","7e67bfd0-2fc2-4d10-bed5-cfda9e660de5,,","eb054308-7fce-4b85-bf4c-7a0031fda7ac,,","0b0dc35b-4953-45c0-a9eb-8d3fef5e798a,,","6ec808e1-e128-44ef-9361-a713bf86de8f,,","f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,"],"Damage",["IsEnemySpell","IgnoreSilence"],"MagicalDamage_Psychic","Aggressive","4d8b4ab5-04d2-47ee-bcd8-bb3e2c4c8847","58acaf6d-7002-4fa5-8671-d290a7103155","DontChange"],[0,1,2,32,7,15,"","Projectile_SynapticDischarge_IntDev_Colony","Projectile","Projectile_SynapticDischarge_IntDev",["<b>DealDamage(3d8+2,Psychic)</b>"],["<b>DealDamage(3d8+2,Psychic)</b>"]],[0,1,2,32,5,85,6,7,9,10,11,12,13,14,15,16,39,18,21,23,27,29,33,34,31,"","Projectile_MudFling_MudMephit","Projectile","Projectile_ThrowMissile",14,"Physical",["<b>Attack(AttackType.RangedUnarmedAttack)</b>"],["<b>DealDamage(1d4+DexterityModifier,Bludgeoning)</b>"],["not <b>Self() and not Dead()</b>"],1,"13abcccc-6a32-4c4c-9e84-da2550be3b9c,4019fb63-b4f7-98fe-2b97-65b9020d6eec,0a26fa35-72be-a83e-058f-2afde6073c6f","GenericIcon_Intent_Damage","Mud Fling","Throw a hunk of mud.",["<b>DealDamage(1d4+1,Bludgeoning)</b>"],["RangedWeaponAttack"],"CrSpell_Cast_MudFling","Cast",["ActionPoint:1"],["38b07239-904d-4494-8a19-f32ac04df589,,","1c448125-b801-4ef8-8ebb-e21ebece26dc,,","3ca74081-2f86-4c11-bb5b-a6c26b9cbafb,,","2ad09ff0-8b24-4da4-acc2-9bb5606f8ebe,,","a5165a2a-3992-4a46-91fd-182a54fd2aff,,"],["IsEnemySpell","IgnoreSilence"],"Aggressive","67ff1cbe-2e72-4af1-8f8a-77192fadae2d","e3f14922-4855-4287-9a09-0b4e95cc76a7","DontChange"],[0,1,2,32,36,21,27,"","Projectile_WarMagic_Githyanki_Attack","Projectile","Projectile_MainHandAttack","OncePerTurn",["BonusActionPoint:1"],["IsAttack","HasHighGroundRangeExtension","RangeIgnoreVerticalThreshold","IsHarmful","IsEnemySpell"]],[0,1,2,32,"","Projectile_TRAPS","Projectile","Projectile_Fireball"],[0,1,2,32,47,42,6,7,8,11,15,"","Projectile_Fireball_Trap_Easy","Projectile","Projectile_Fireball_Trap",4,4,["not <b>SavingThrow(Ability.Dexterity, 10)</b>"],["<b>DealDamage(1d6,Fire)</b>"],["<b>DealDamage((1d6)/2,Fire)</b>"],"5eaf6a8e-42aa-46b3-89d2-d787e0a5f3a3",["<b>DealDamage(1d6,Fire)</b>"]],[0,1,2,32,47,42,6,7,8,11,15,"","Projectile_Fireball_Trap_Hard","Projectile","Projectile_Fireball_Trap",4,4,["not <b>SavingThrow(Ability.Dexterity, 14)</b>"],["<b>DealDamage(4d6,Fire)</b>"],["<b>DealDamage((4d6)/2,Fire)</b>"],"5eaf6a8e-42aa-46b3-89d2-d787e0a5f3a3",["<b>DealDamage(4d6,Fire)</b>"]],[0,1,2,32,"","Projectile_Fireball_Trap_Chandelier_Drop","Projectile","Projectile_Fireball_Trap"],[0,1,2,32,"","Projectile_Fireball_Trap_Hanging_Bowls_Drop","Projectile","Projectile_Fireball_Trap"],[0,1,2,32,"","Projectile_Fireball_Trap_Thayan_Incense_Burner_Drop","Projectile","Projectile_Fireball_Trap"]])