const MAGAZINES = [
  {
    "id": "CMMagazinePistolM1911",
    "name": "M1911 magazine (.45 ACP)",
    "projectile": "CMBulletPistol45ACP",
    "capacity": 8.0
  },
  {
    "id": "CMMagazinePistolM1984",
    "name": "магазин M4A3 (9 мм)",
    "projectile": "CMBulletPistol9mm",
    "capacity": 12.0
  },
  {
    "id": "CMMagazinePistolM77AP",
    "name": "магазин 88 Мод 4 ББ (9 мм)",
    "projectile": "CMBulletPistolM77AP",
    "capacity": 19.0
  },
  {
    "id": "CMMagazinePistolMK80",
    "name": "магазин VP78 (9 мм Squash-Head)",
    "projectile": "RCMBulletPistol9mmSquashHead",
    "capacity": 18.0
  },
  {
    "id": "CMMagazineRifleM4SPR",
    "name": "магазин M4RA (10x24 мм)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 25.0
  },
  {
    "id": "CMMagazineRifleM4SPRAP",
    "name": "бронебойный магазин M4RA (10x24 мм)",
    "projectile": "BulletRifle10x24mmAP",
    "capacity": 25.0
  },
  {
    "id": "CMMagazineRifleM4SPRExt",
    "name": "расширенный магазин M4RA (10x24 мм)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 35.0
  },
  {
    "id": "CMMagazineRifleM54C",
    "name": "магазин M41A (10x24 мм)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 40.0
  },
  {
    "id": "CMMagazineRifleM54CAP",
    "name": "бронебойный магазин M41A (10x24 мм)",
    "projectile": "BulletRifle10x24mmAP",
    "capacity": 40.0
  },
  {
    "id": "CMMagazineRifleM54CE2",
    "name": "магазин M41AE2 (10x24 мм)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 300.0
  },
  {
    "id": "CMMagazineRifleM54CE2AP",
    "name": "бронебойный магазин M41AE2 (10x24мм)",
    "projectile": "BulletRifle10x24mmAP",
    "capacity": 300.0
  },
  {
    "id": "CMMagazineRifleM54CE2HT",
    "name": "магазин M41AE2 HT (10x24мм)",
    "projectile": "BulletRifle10x24mmHT",
    "capacity": 200.0
  },
  {
    "id": "CMMagazineRifleM54CExt",
    "name": "расширенный магазин M41A (10x24 мм)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 60.0
  },
  {
    "id": "CMMagazineRifleM54CMK1",
    "name": "магазин M41A MK1 (10x24 мм)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 95.0
  },
  {
    "id": "CMMagazineRifleM54CMK1AP",
    "name": "магазин M41A MK1 ББ (10x24 мм)",
    "projectile": "BulletRifle10x24mmAP",
    "capacity": 95.0
  },
  {
    "id": "CMMagazineSMGM63",
    "name": "магазин M39 (10x20мм)",
    "projectile": "Bullet10x20mm",
    "capacity": 48.0
  },
  {
    "id": "CMMagazineSMGM63AP",
    "name": "бронебойный магазин M39 (10x20мм)",
    "projectile": "Bullet10x20mmAP",
    "capacity": 48.0
  },
  {
    "id": "CMMagazineSMGM63Ext",
    "name": "удлинённый магазин M39 (10x20мм)",
    "projectile": "Bullet10x20mm",
    "capacity": 72.0
  },
  {
    "id": "CMMagazineSMGMP5",
    "name": "магазин MP5 (9 мм)",
    "projectile": "CMBullet9mmSMG",
    "capacity": 30.0
  },
  {
    "id": "CMMagazineSniperM96C",
    "name": "модифицированный магазин M96C (10x99мм)",
    "projectile": "CMBulletSniper10x99mm",
    "capacity": 6.0
  },
  {
    "id": "CMMagazineSniperM96S",
    "name": "магазин M96S (10x28 мм)",
    "projectile": "CMBulletSniper10x28mm",
    "capacity": 15.0
  },
  {
    "id": "CMMagazineSniperM96SIncendiary",
    "name": "магазин M96S зажигательный (10x28 мм)",
    "projectile": "CMBulletSniper10x28mmIncendiary",
    "capacity": 15.0
  },
  {
    "id": "CMShellShotgunBeanbag",
    "name": "горсть бобовых пуль",
    "projectile": "CMPelletShotgunBeanbag",
    "capacity": null
  },
  {
    "id": "CMShellShotgunBuckshot",
    "name": "горсть дробовых патронов",
    "projectile": "CMPelletShotgunBuckshot",
    "capacity": null
  },
  {
    "id": "CMShellShotgunFlechette",
    "name": "горсть флешетт",
    "projectile": "CMPelletShotgunFlechette",
    "capacity": null
  },
  {
    "id": "CMShellShotgunIncendiary",
    "name": "горсть зажигательных пуль",
    "projectile": "CMPelletShotgunIncendiary",
    "capacity": null
  },
  {
    "id": "CMShellShotgunIncendiaryBuckshot",
    "name": "горсть зажигательной дроби",
    "projectile": "CMPelletShotgunIncendiaryBuckshot",
    "capacity": null
  },
  {
    "id": "CMShellShotgunSlugs",
    "name": "горсть пуль",
    "projectile": "CMPelletShotgunSlug",
    "capacity": null
  },
  {
    "id": "RMCCartridge458SOCOM",
    "name": "горсть пуль .458 SOCOM",
    "projectile": "RMCBullet458SOCOM",
    "capacity": null
  },
  {
    "id": "RMCMagazineLMGM60",
    "name": "ящик для патронов M60 (7.62x51 NATO)",
    "projectile": "RMCBulletLMGM60",
    "capacity": 100.0
  },
  {
    "id": "RMCMagazineLMGQYJ72",
    "name": "коробка с боеприпасами QYJ-72 (7,62x54 ммR)",
    "projectile": "RMCBulletLMGQYJ72",
    "capacity": 250.0
  },
  {
    "id": "RMCMagazineM2C",
    "name": "короб для патронов M2C (10x28мм вольфрамовые сердечники)",
    "projectile": "RMCBulletHMG10x28mmTungsten",
    "capacity": 125.0
  },
  {
    "id": "RMCMagazineML66D",
    "name": "короб для патронов M56D (10x28мм)",
    "projectile": "RMCBulletHMG10x28mm",
    "capacity": 700.0
  },
  {
    "id": "RMCMagazineML66DLarge",
    "name": "огромный короб для патронов M56D (10x28мм)",
    "projectile": "RMCBulletHMG10x28mm",
    "capacity": 1500.0
  },
  {
    "id": "RMCMagazineMar50LMG",
    "name": "барабанный магазин MAR (7,62x39 мм)",
    "projectile": "BulletRifleMAR40",
    "capacity": 100.0
  },
  {
    "id": "RMCMagazinePistolB92FS",
    "name": "магазин беретта M92FS (9 мм)",
    "projectile": "CMBulletPistol9mm",
    "capacity": 15.0
  },
  {
    "id": "RMCMagazinePistolD18",
    "name": "магазин D18 (9 мм)",
    "projectile": "CMBulletPistol9mm",
    "capacity": 7.0
  },
  {
    "id": "RMCMagazinePistolHandcannon",
    "name": "магазин для пистолета-пушки \"Перегрин\" ( .50 )",
    "projectile": "RMCBulletPistolHandcannon",
    "capacity": 7.0
  },
  {
    "id": "RMCMagazinePistolHandcannonHI",
    "name": "магазин повышенной мощности для пистолета-пушки \"Перегрин\" ( .50 )",
    "projectile": "RMCBulletPistolHandcannonHI",
    "capacity": 7.0
  },
  {
    "id": "RMCMagazinePistolHandcannonHIAP",
    "name": "бронебойный магазин повышенной мощности для пистолета-пушки \"Перегрин\" ( .50 )",
    "projectile": "RMCBulletPistolHandcannonHIAP",
    "capacity": 7.0
  },
  {
    "id": "RMCMagazinePistolHoldout",
    "name": "магазин миниатюрного пистолета (.22)",
    "projectile": "CMBulletPistol22mm",
    "capacity": 5.0
  },
  {
    "id": "RMCMagazinePistolKT42",
    "name": "магазин для пистолета КТ-42 (.44)",
    "projectile": "CMBulletPistol45ACP",
    "capacity": 16.0
  },
  {
    "id": "RMCMagazinePistolL14",
    "name": "L14 magazine (9mm)",
    "projectile": "CMBulletPistol9mm",
    "capacity": 16.0
  },
  {
    "id": "RMCMagazinePistolL14AP",
    "name": "L14 AP magazine (9mm)",
    "projectile": "CMBulletPistolM77AP",
    "capacity": 16.0
  },
  {
    "id": "RMCMagazinePistolL54",
    "name": "магазин L54 (9 мм)",
    "projectile": "CMBulletPistol9mm",
    "capacity": 12.0
  },
  {
    "id": "RMCMagazinePistolL54Custom",
    "name": "L54-S magazine (9x20mm)",
    "projectile": "RMCBullet9x20mm",
    "capacity": 12.0
  },
  {
    "id": "RMCMagazinePistolM13",
    "name": "магазин M10 HV (10x20 мм)",
    "projectile": "RMCBulletAutoPistol",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazinePistolM13AP",
    "name": "магазин M10 ББ (10x20мм БПК)",
    "projectile": "RMCBulletAutoPistolAP",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazinePistolM13Drum",
    "name": "барабанный магазин M10 HV (10x20 мм)",
    "projectile": "RMCBulletAutoPistol",
    "capacity": 84.0
  },
  {
    "id": "RMCMagazinePistolM13DrumAP",
    "name": "барабанный магазин M10 ББ (10x20мм БПК)",
    "projectile": "RMCBulletAutoPistolAP",
    "capacity": 84.0
  },
  {
    "id": "RMCMagazinePistolM13Ext",
    "name": "увеличенный магазин M10 HV (10x20 мм)",
    "projectile": "RMCBulletAutoPistol",
    "capacity": 62.0
  },
  {
    "id": "RMCMagazinePistolM13ExtAP",
    "name": "удлинённый магазин M10 ББ (10x20мм БПК)",
    "projectile": "RMCBulletAutoPistolAP",
    "capacity": 62.0
  },
  {
    "id": "RMCMagazinePistolM1984AP",
    "name": "магазин M4A3 ББ (9 мм)",
    "projectile": "CMBulletPistolM77AP",
    "capacity": 12.0
  },
  {
    "id": "RMCMagazinePistolM1984HP",
    "name": "магазин M4A3 с полой головной частью (9 мм)",
    "projectile": "RMCBulletPistol9mmHP",
    "capacity": 12.0
  },
  {
    "id": "RMCMagazinePistolM1984Rubber",
    "name": "резиновый магазин M4A3 (9 мм)",
    "projectile": "RMCBulletPistol9mmRubber",
    "capacity": 12.0
  },
  {
    "id": "RMCMagazinePistolM77Rubber",
    "name": "резиновый магазин 88 Мод 4 (9 мм)",
    "projectile": "RMCBulletPistol9mmRubber",
    "capacity": 19.0
  },
  {
    "id": "RMCMagazinePistolMK45",
    "name": "магазин MK-45 автомагнум (.45)",
    "projectile": "CMBulletPistolMK45",
    "capacity": 13.0
  },
  {
    "id": "RMCMagazinePistolNP92",
    "name": "магазин NP92 (9 мм)",
    "projectile": "RMCBulletPistolNP92",
    "capacity": 12.0
  },
  {
    "id": "RMCMagazinePistolNP92Extended",
    "name": "увеличенный магазин NP92 (9 мм)",
    "projectile": "RMCBulletPistolNP92",
    "capacity": 36.0
  },
  {
    "id": "RMCMagazinePistolPK7",
    "name": "PK-7 electrostatic magazine (9mm)",
    "projectile": "RMCBulletPistol9mmElectrostatic",
    "capacity": 19.0
  },
  {
    "id": "RMCMagazinePistolSU6",
    "name": "магазин SU-6 (.45 ACP)",
    "projectile": "RMCBulletPistol45ACP",
    "capacity": 15.0
  },
  {
    "id": "RMCMagazinePistolT73",
    "name": "магазин для пистолета Тип 73 (7,62x25 мм)",
    "projectile": "RMCBulletPistolT73",
    "capacity": 9.0
  },
  {
    "id": "RMCMagazinePistolT74Impact",
    "name": "ударный магазин для пистолета Тип 74 (7,62x25 мм)",
    "projectile": "RMCBulletPistolT74Impact",
    "capacity": 9.0
  },
  {
    "id": "RMCMagazineRifleABR40",
    "name": "магазин ABR-40 (10x24 мм)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 12.0
  },
  {
    "id": "RMCMagazineRifleAR10",
    "name": "магазин винтовки AR10 (7,62x51 мм)",
    "projectile": "BulletRifleAR10",
    "capacity": 20.0
  },
  {
    "id": "RMCMagazineRifleHunting",
    "name": "магазин Басира-Армстронга (6,5 мм)",
    "projectile": "RMCBulletRifleHunting",
    "capacity": 10.0
  },
  {
    "id": "RMCMagazineRifleL24",
    "name": "магазин для винтовки L24 (8.88x51мм)",
    "projectile": "BulletRifle888x51mm",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleL24AP",
    "name": "магазин AP для винтовки L24 (8.88x51мм)",
    "projectile": "BulletRifle888x51mmAP",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleL24Extended",
    "name": "расширенный магазин для винтовки L24 (8.88x51мм)",
    "projectile": "BulletRifle888x51mm",
    "capacity": 45.0
  },
  {
    "id": "RMCMagazineRifleL24HEAP",
    "name": "магазин HEAP для винтовки L24 (8.88x51мм)",
    "projectile": "BulletRifle888x51mmHEAP",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleL24Incendiary",
    "name": "магазин с зажигательными патронами для винтовки L24 (8.88x51мм)",
    "projectile": "BulletRifle888x51mmIncendiary",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleL42A",
    "name": "L42A magazine (10x24mm)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL42AAP",
    "name": "L42A AP magazine (10x24mm)",
    "projectile": "BulletRifle10x24mmAP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL42AExtended",
    "name": "L42A Extended magazine (10x24mm)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 35.0
  },
  {
    "id": "RMCMagazineRifleL42AIncendiary",
    "name": "L42A incendiary magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmIncendiary",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL42AWP",
    "name": "L42A WP magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmWP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL83A2",
    "name": "магазин L83A2 (5.56x45 мм)",
    "projectile": "BulletRifle556x45mm",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL83A2AP",
    "name": "бронебойный магазин L83A2 (5.56x45 мм)",
    "projectile": "BulletRifle556x45mmAP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL83A2Extended",
    "name": "L83A2 extended Magazine (5.56x45mm)",
    "projectile": "BulletRifle556x45mm",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleL83A2HEAP",
    "name": "магазин HEAP L83A2 (5.56x45 мм)",
    "projectile": "BulletRifle556x45mmHEAP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL83A2Incendiary",
    "name": "зажигательный магазин L83A2 (5.56x45 мм)",
    "projectile": "BulletRifle556x45mmIncendiary",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL83A3",
    "name": "магазин L83A3 (5.56x45 мм)",
    "projectile": "BulletRifle556x45mm",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL83A3AP",
    "name": "магазин L83A3 AP (5.56x45 мм)",
    "projectile": "BulletRifle556x45mmAP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL83A3Extended",
    "name": "расширенный магазин L83A3 (5.56x45мм)",
    "projectile": "BulletRifle556x45mm",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleL83A3HEAP",
    "name": "магазин L83A3 HEAP (5.56x45 мм)",
    "projectile": "BulletRifle556x45mmHEAP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL83A3Incendiary",
    "name": "зажигательный магазин L83A3 (5.56x45 мм)",
    "projectile": "BulletRifle556x45mmIncendiary",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleL88",
    "name": "L88 magazine (10x24mm)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleL88AP",
    "name": "L88 AP magazine (10x24mm)",
    "projectile": "BulletRifle10x24mmAP",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleL90",
    "name": "магазин L90 (7x43 мм)",
    "projectile": "BulletRifle7x43mm",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleL90AP",
    "name": "бронебойный магазин L90 (7x43мм)",
    "projectile": "BulletRifle7x43mmAP",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleL90Drum",
    "name": "барабанный магазин L90 (7x43 мм)",
    "projectile": "BulletRifle7x43mm",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleL90DrumAP",
    "name": "бронебойный барабанный магазин L90 (7x43 мм)",
    "projectile": "BulletRifle7x43mmAP",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleL90DrumHEAP",
    "name": "барабанный магазин L90 HEAP (7x43 мм)",
    "projectile": "BulletRifle7x43mmHEAP",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleL90DrumIncendiary",
    "name": "барабанный зажигательный магазин L90 (7x43 мм)",
    "projectile": "BulletRifle7x43mmIncendiary",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleL90HEAP",
    "name": "магазин L90 HEAP (7x43 мм)",
    "projectile": "BulletRifle7x43mmHEAP",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleL90Incendiary",
    "name": "зажигательный магазин L90 (7x43 мм)",
    "projectile": "BulletRifle7x43mmIncendiary",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleM16",
    "name": "магазин для винтовки M16 (5,56x45 мм)",
    "projectile": "BulletRifle556x45mm",
    "capacity": 20.0
  },
  {
    "id": "RMCMagazineRifleM4SPRA19",
    "name": "высокоскоростной магазин M4RA A19",
    "projectile": "BulletRifleM4SPRA19",
    "capacity": 18.0
  },
  {
    "id": "RMCMagazineRifleM4SPRA19Impact",
    "name": "ударный магазин M4RA A19",
    "projectile": "BulletRifleM4SPRA19Impact",
    "capacity": 18.0
  },
  {
    "id": "RMCMagazineRifleM4SPRA19Incendiary",
    "name": "зажигательный магазин M4RA A19",
    "projectile": "BulletRifleM4SPRA19Incendiary",
    "capacity": 18.0
  },
  {
    "id": "RMCMagazineRifleM4SPRHEAP",
    "name": "M4SPR HEAP magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmHEAP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleM4SPRIncendiary",
    "name": "M4SPR incendiary magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmIncendiary",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleM4SPRRubber",
    "name": "резиновый магазин M4RA (10x24 мм)",
    "projectile": "BulletRifle10x24mmRubber",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleM4SPRWP",
    "name": "M4SPR WP magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmWP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleM54CE2HEAP",
    "name": "M54CE2 HEAP magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmHEAP",
    "capacity": 300.0
  },
  {
    "id": "RMCMagazineRifleM54CE2Incendiary",
    "name": "M54CE2 incendiary magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmIncendiary",
    "capacity": 300.0
  },
  {
    "id": "RMCMagazineRifleM54CE2WP",
    "name": "M54CE2 WP magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmWP",
    "capacity": 300.0
  },
  {
    "id": "RMCMagazineRifleM54CHEAP",
    "name": "HEAP магазин M41C (10x24 мм)",
    "projectile": "RMCBulletRifle10x24mmHEAP",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleM54CIncendiary",
    "name": "зажигательный магазин M41A (10x24 мм)",
    "projectile": "RMCBulletRifle10x24mmIncendiary",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleM54CMK1HEAP",
    "name": "магазин M41C MK1 HEAP (10x24 мм)",
    "projectile": "RMCBulletRifle10x24mmHEAP",
    "capacity": 95.0
  },
  {
    "id": "RMCMagazineRifleM54CMK1Incendiary",
    "name": "зажигательный магазин M41A MK1 (10x24 мм)",
    "projectile": "RMCBulletRifle10x24mmIncendiary",
    "capacity": 95.0
  },
  {
    "id": "RMCMagazineRifleM54CMK1Rubber",
    "name": "M54C MK1 rubber magazine (10x24mm)",
    "projectile": "BulletRifle10x24mmRubber",
    "capacity": 95.0
  },
  {
    "id": "RMCMagazineRifleM54CMK1WP",
    "name": "M54C MK1 WP magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmWP",
    "capacity": 95.0
  },
  {
    "id": "RMCMagazineRifleM54CRubber",
    "name": "резиновый магазин M41A (10x24 мм)",
    "projectile": "BulletRifle10x24mmRubber",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleM54CWP",
    "name": "M54C WP magazine (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmWP",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleM5SPRHVHIP",
    "name": "магазин M5SPR HVHI-Пробивающий (10x24 мм)",
    "projectile": "BulletRifleM5SPRHVHIP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleM5SPRHVP",
    "name": "бронебойный магазин M5RA (10x24 мм)",
    "projectile": "BulletRifleM5SPRHVP",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineRifleMAR40",
    "name": "магазин MAR (7,62x39 мм)",
    "projectile": "BulletRifleMAR40",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleMAR40Ext",
    "name": "удлиненный магазин MAR (7,62x39 мм)",
    "projectile": "BulletRifleMAR40",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleSSG45",
    "name": "магазин SSG45 (7x62 мм)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleSSG45AP",
    "name": "бронебойный магазин SSG45 (7x62 мм)",
    "projectile": "BulletRifle10x24mmAP",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleSSG45Extended",
    "name": "расширенный магазин SSG45 (7x62 мм)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 45.0
  },
  {
    "id": "RMCMagazineRifleSSG45HEAP",
    "name": "HEAP магазин SSG45 (7x62 мм)",
    "projectile": "RMCBulletRifle10x24mmHEAP",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleSSG45Incend",
    "name": "зажигательный магазин SSG45 (7x62 мм)",
    "projectile": "RMCBulletRifle10x24mmIncendiary",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineRifleType71",
    "name": "магазин Типа 71 (5,45x39 мм)",
    "projectile": "RMCBulletRifle545x39mm",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleType71AP",
    "name": "магазин Типа 71 AP (5.45x39 мм)",
    "projectile": "RMCBulletRifle545x39mmAP",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleType71HEAP",
    "name": "HEAP магазин Типа 71 (5.45x39 мм)",
    "projectile": "RMCBulletRifle545x39mmHEAP",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleType71Rubber",
    "name": "Type 71 rubber magazine (5.45x39mm)",
    "projectile": "RMCBulletRifle545x39mmRubber",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleType77",
    "name": "магазин Типа 77 (10x24mm)",
    "projectile": "BulletRifle10x24mm",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleType77AP",
    "name": "бронебойный магазин Типа 77 (10x24mm)",
    "projectile": "BulletRifle10x24mmAP",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleType77HEAP",
    "name": "HEAP магазин Типа 77 (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmHEAP",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleType77Incendiary",
    "name": "зажигательный магазин Типа 77 (10x24mm)",
    "projectile": "RMCBulletRifle10x24mmIncendiary",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleType77Rubber",
    "name": "резиновый магазин Типа 77 (10x24mm)",
    "projectile": "BulletRifle10x24mmRubber",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineRifleXM40AP",
    "name": "бронебойный магазин XM40 (10x24 мм)",
    "projectile": "BulletRifle10x24mmAP",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineRifleXM40HEAP",
    "name": "HEAP магазин XM40 (10x24 мм)",
    "projectile": "RMCBulletRifle10x24mmHEAP",
    "capacity": 60.0
  },
  {
    "id": "RMCMagazineSMGFP9000",
    "name": "магазин FN FP9000 (5,7x28 мм)",
    "projectile": "RMCBullet57x28mmFP9000",
    "capacity": 50.0
  },
  {
    "id": "RMCMagazineSMGL7A3SquashHead",
    "name": "L7A3 Magazine Squash-Head (9mm)",
    "projectile": "RMCBulletSMG9mmSquashHead",
    "capacity": 48.0
  },
  {
    "id": "RMCMagazineSMGM63HEAP",
    "name": "HEAP магазин (10x20мм)",
    "projectile": "RMCBullet10x20mmHEAP",
    "capacity": 48.0
  },
  {
    "id": "RMCMagazineSMGM63Incendiary",
    "name": "M63 incendiary magazine (10x20mm)",
    "projectile": "RMCBullet10x20mmIncendiary",
    "capacity": 48.0
  },
  {
    "id": "RMCMagazineSMGM63Rubber",
    "name": "резиновый магазин M39 (10x20 мм)",
    "projectile": "Bullet10x20mmRubber",
    "capacity": 48.0
  },
  {
    "id": "RMCMagazineSMGM63WP",
    "name": "M63 WP magazine (10x20mm)",
    "projectile": "RMCBullet10x20mmWP",
    "capacity": 48.0
  },
  {
    "id": "RMCMagazineSMGMAC15",
    "name": "магазин MAC-15 (9 мм)",
    "projectile": "Bullet10x20mm",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineSMGMAC15Ext",
    "name": "удлиненный магазин MAC-15 (9 мм)",
    "projectile": "Bullet10x20mm",
    "capacity": 50.0
  },
  {
    "id": "RMCMagazineSMGMP27",
    "name": "магазин MP27 (4,6x30 мм)",
    "projectile": "RMCBullet46x30mm",
    "capacity": 30.0
  },
  {
    "id": "RMCMagazineSMGMP27Extend",
    "name": "расширенный магазин MP27 (4,6x30 мм)",
    "projectile": "RMCBullet46x30mm",
    "capacity": 40.0
  },
  {
    "id": "RMCMagazineSMGNailgun",
    "name": "магазин для гвоздомёта (7x45 мм)",
    "projectile": "RMCNail7x45mm",
    "capacity": 48.0
  },
  {
    "id": "RMCMagazineSMGPDW90",
    "name": "PDW90 magazine (5.7×28mm)",
    "projectile": "RMCBullet57x28mm",
    "capacity": 50.0
  },
  {
    "id": "RMCMagazineSMGPDW90AP",
    "name": "PDW90 AP magazine (5.7×28mm)",
    "projectile": "RMCBullet57x28mmAP",
    "capacity": 50.0
  },
  {
    "id": "RMCMagazineSMGType19",
    "name": "коробчатый магазин Тип-19 (7.62x25мм)",
    "projectile": "RMCBullet762x25mm",
    "capacity": 35.0
  },
  {
    "id": "RMCMagazineSMGType19Drum",
    "name": "барабанный магазин Тип-19 (7.62x25мм)",
    "projectile": "RMCBullet762x25mm",
    "capacity": 71.0
  },
  {
    "id": "RMCMagazineSMGType64",
    "name": "магазин для пистолета-пулемета Тип 64 (10x20 мм)",
    "projectile": "RMCBulletType64",
    "capacity": 64.0
  },
  {
    "id": "RMCMagazineSMGType64Rubber",
    "name": "Type 64 rubber magazine (10x20mm)",
    "projectile": "RMCBulletType64Rubber",
    "capacity": 64.0
  },
  {
    "id": "RMCMagazineSMGUZI",
    "name": "магазин УЗИ (9x21 мм)",
    "projectile": "Bullet9x21mmUZI",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineSMGUZIExt",
    "name": "расширенный магазин УЗИ (9x21 мм)",
    "projectile": "Bullet9x21mmUZI",
    "capacity": 32.0
  },
  {
    "id": "RMCMagazineShotgunXM51",
    "name": "магазин XM51 (16г)",
    "projectile": "RMCPelletShotgunBreaching",
    "capacity": 12.0
  },
  {
    "id": "RMCMagazineSniperL112",
    "name": "L112 magazine (7.7x56mmR)",
    "projectile": "RMCBulletSniper77x56mmR",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineSniperL112SH",
    "name": "L112 squash-head magazine (7.7x56mmR)",
    "projectile": "RMCBulletSniper77x56mmRSH",
    "capacity": 25.0
  },
  {
    "id": "RMCMagazineSniperType88",
    "name": "магазин снайперской винтовки Типа 88 (7,62x54 мм R)",
    "projectile": "RMCBulletSniperType88",
    "capacity": 12.0
  },
  {
    "id": "RMCMagazineSniperXM43E1AntiMateriel",
    "name": "антиматериальный магазин XM43E1 (10x99 мм)",
    "projectile": "RMCBulletSniper10x99mmAntiMateriel",
    "capacity": 8.0
  },
  {
    "id": "RMCShellShotgunBreaching",
    "name": "горсть разрывной дроби",
    "projectile": "RMCPelletShotgunBreaching",
    "capacity": null
  },
  {
    "id": "RMCShellShotgunHeavyBeanbag",
    "name": "горсть тяжелых пуль из бобового мешка",
    "projectile": "RMCPelletHeavyShotgunBeanbag",
    "capacity": null
  },
  {
    "id": "RMCShellShotgunHeavyBuckshot",
    "name": "горсть тяжелых картечных снарядов",
    "projectile": "RMCPelletHeavyShotgunBuckshot",
    "capacity": null
  },
  {
    "id": "RMCShellShotgunHeavyFlechette",
    "name": "горсть тяжелых флешетных снарядов",
    "projectile": "RMCPelletHeavyShotgunFlechette",
    "capacity": null
  },
  {
    "id": "RMCShellShotgunHeavySlugs",
    "name": "горсть тяжелых дробовых пуль",
    "projectile": "RMCPelletHeavyShotgunSlug",
    "capacity": null
  },
  {
    "id": "RMCShellShotgunIncendiaryHeavyBuckshot",
    "name": "горсть тяжелых картечных снарядов \"дыхание дракона\"",
    "projectile": "RMCPelletHeavyShotgunIncendiaryBuckshot",
    "capacity": null
  },
  {
    "id": "RMCShellShotgunL49B",
    "name": "handful of L49B shells",
    "projectile": "RMCPelletShotgunL49B",
    "capacity": null
  },
  {
    "id": "RMCCartridge458SOCOMMaxStacks",
    "name": "горсть пуль .458 SOCOM (макс. стаки)",
    "projectile": "RMCBullet458SOCOMMaxStacks",
    "capacity": null
  },
  {
    "id": "RMCMagazineSmartGunMode0",
    "name": "боевой магазин M56B (10x30 мм) (высокоточный режим)",
    "projectile": "CMBulletSmartGun10x30mmMode0",
    "capacity": 500.0
  },
  {
    "id": "RMCMagazineSmartGunHTMode0",
    "name": "голотаргетинг магазин M56B (10x30mm) (высокоточный режим)",
    "projectile": "RMCBulletSmartGun10x30mmHTMode0",
    "capacity": 500.0
  },
  {
    "id": "RMCMagazineSmartGunirradiatedMode0",
    "name": "облученный магазин M56B (10x30 мм) (высокоточный режим)",
    "projectile": "RMCBulletSmartGun10x30mmirradiatedMode0",
    "capacity": 500.0
  },
  {
    "id": "RMCMagazineSmartGunMode1",
    "name": "боевой магазин M56B (10x30 мм) (бронебойный режим)",
    "projectile": "CMBulletSmartGun10x30mmMode1",
    "capacity": 500.0
  },
  {
    "id": "RMCMagazineSmartGunHTMode1",
    "name": "голотаргетинг магазин M56B (10x30mm) (бронебойный режим)",
    "projectile": "RMCBulletSmartGun10x30mmHTMode1",
    "capacity": 500.0
  },
  {
    "id": "RMCMagazineSmartGunirradiatedMode1",
    "name": "облученный магазин M56B (10x30 мм) (бронебойный режим)",
    "projectile": "RMCBulletSmartGun10x30mmirradiatedMode1",
    "capacity": 500.0
  },
  {
    "id": "CMMagazineSniperM96SFlak",
    "name": "магазин M96S противовоздушный (10x28 мм)",
    "projectile": "CMBulletSniper10x28mmFlak",
    "capacity": 15.0
  },
  {
    "id": "RMCSpeedLoader38",
    "name": "спидлоадер (.38)",
    "projectile": "RMCBulletRevolver38",
    "capacity": 6.0
  },
  {
    "id": "RMCSpeedLoader357",
    "name": "скоростной патрон (.357)",
    "projectile": "RMCBulletRevolver357",
    "capacity": 6.0
  },
  {
    "id": "RMCSpeedLoaderM44",
    "name": "спидлоадер M44 (.44)",
    "projectile": "CMBulletRevolver44",
    "capacity": 7.0
  },
  {
    "id": "RMCSpeedLoaderRsh9",
    "name": "спидлоадер РШ-9 (9x39)",
    "projectile": "RMCBulletRsh9",
    "capacity": 6.0
  },
  {
    "id": "RMCSpeedLoaderMateba",
    "name": "Mateba speed loader (.454)",
    "projectile": "RMCBulletMateba",
    "capacity": 6.0
  },
  {
    "id": "RMCSpeedLoaderZHNK72",
    "name": "спидлоадер ZHNK-72 (7,62 мм)",
    "projectile": "RMCBulletRevolverZHNK72",
    "capacity": 7.0
  },
  {
    "id": "RMCSpeedLoaderMatebaHE",
    "name": "разрывной скоростной патрон Матебы (.454).",
    "projectile": "RMCBulletMatebaHighExplosive",
    "capacity": 6.0
  },
  {
    "id": "RMCSpeedLoader44Marksman",
    "name": "спидлоадер M44 снайперский (.44)",
    "projectile": "RMCBulletRevolver44Marksman",
    "capacity": 7.0
  },
  {
    "id": "RMCSpeedLoaderMatebaHIAP",
    "name": "бронебойный скоростной патрон Матебы \"Ударная волна\" (.454).",
    "projectile": "RMCBulletMatebaHighImpactArmorPiercing",
    "capacity": 6.0
  },
  {
    "id": "RMCSpeedLoader357Hollowpoint",
    "name": "скоростной патрон с экспансивными пулями (.357)",
    "projectile": "RMCBulletRevolver357Hollowpoint",
    "capacity": 6.0
  },
  {
    "id": "RMCSpeedLoaderMatebaHighImpact",
    "name": "скоростной патрон Матебы \"Ударная волна\" (.454).",
    "projectile": "RMCBulletMatebaHighImpact",
    "capacity": 6.0
  }
];
