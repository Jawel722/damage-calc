const PROJECTILES = [
  {
    "id": "Bullet10x20mm",
    "name": "BaseBullet",
    "damage": 34,
    "damageTypes": {
      "Piercing": 34
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "Bullet10x20mmAP",
    "name": "BaseBullet",
    "damage": 26,
    "damageTypes": {
      "Piercing": 26
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "Bullet10x20mmRubber",
    "name": "BaseBullet",
    "damage": 3,
    "damageTypes": {
      "Blunt": 3
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "Bullet9x21mmUZI",
    "name": "BaseBullet",
    "damage": 35,
    "damageTypes": {
      "Piercing": 35
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle10x24mm",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle10x24mmAP",
    "name": "BaseBullet",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 40,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle10x24mmHT",
    "name": "BaseBullet",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle10x24mmRubber",
    "name": "BaseBullet",
    "damage": 3,
    "damageTypes": {
      "Blunt": 3
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle556x45mm",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle556x45mmAP",
    "name": "BaseBullet",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 40,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle556x45mmHEAP",
    "name": "BaseBullet",
    "damage": 65,
    "damageTypes": {
      "Piercing": 65
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle556x45mmIncendiary",
    "name": "BaseBullet",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle7x43mm",
    "name": "BaseBullet",
    "damage": 50,
    "damageTypes": {
      "Piercing": 50
    },
    "ap": 10,
    "pellets": 1,
    "falloffStart": 10,
    "falloffPerTile": 4,
    "cutRange": 30,
    "minRemainingMult": 0.05,
    "accuracy": 120,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 20,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle7x43mmAP",
    "name": "BaseBullet",
    "damage": 35,
    "damageTypes": {
      "Piercing": 35
    },
    "ap": 40,
    "pellets": 1,
    "falloffStart": 10,
    "falloffPerTile": 4,
    "cutRange": 30,
    "minRemainingMult": 0.05,
    "accuracy": 120,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 20,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle7x43mmHEAP",
    "name": "BaseBullet",
    "damage": 70,
    "damageTypes": {
      "Piercing": 70
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 10,
    "falloffPerTile": 4,
    "cutRange": 30,
    "minRemainingMult": 0.05,
    "accuracy": 120,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 20,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle7x43mmIncendiary",
    "name": "BaseBullet",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 10,
    "pellets": 1,
    "falloffStart": 10,
    "falloffPerTile": 4,
    "cutRange": 30,
    "minRemainingMult": 0.05,
    "accuracy": 120,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 20,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle888x51mm",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 10,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle888x51mmAP",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle888x51mmHEAP",
    "name": "BaseBullet",
    "damage": 65,
    "damageTypes": {
      "Piercing": 65
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle888x51mmIncendiary",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 10,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleAR10",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM4SPRA19",
    "name": "BaseBullet",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 35,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM4SPRA19Impact",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 75,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM4SPRA19Incendiary",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 25,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM5SPRHVHIP",
    "name": "BaseBullet",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 35,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM5SPRHVP",
    "name": "BaseBullet",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 35,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleMAR40",
    "name": "BaseBullet",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBullet9mmSMG",
    "name": "BaseBullet",
    "damage": 34,
    "damageTypes": {
      "Piercing": 34
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistol22mm",
    "name": "пуля (.22)",
    "damage": 20,
    "damageTypes": {
      "Piercing": 20
    },
    "ap": 10,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistol45ACP",
    "name": "пуля (.45 ACP)",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 15,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistol9mm",
    "name": "пуля (9 мм)",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 10,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistolM77AP",
    "name": "пуля (9 мм ББ)",
    "damage": 25,
    "damageTypes": {
      "Piercing": 25
    },
    "ap": 40,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistolMK45",
    "name": "мощная пистолетная пуля (.45)",
    "damage": 36,
    "damageTypes": {
      "Piercing": 36
    },
    "ap": 25,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSniper10x28mm",
    "name": "пуля (10x28 мм)",
    "damage": 70,
    "damageTypes": {
      "Piercing": 70
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32,
    "minRemainingMult": 0.05,
    "accuracy": 125,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSniper10x28mmIncendiary",
    "name": "зажигательная пуля (10x28 мм)",
    "damage": 60,
    "damageTypes": {
      "Piercing": 50,
      "Heat": 10
    },
    "ap": 20,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32,
    "minRemainingMult": 0.05,
    "accuracy": 125,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSniper10x99mm",
    "name": "сверхзвуковая снайперская пуля (10x99мм)",
    "damage": 300,
    "damageTypes": {
      "Piercing": 300
    },
    "ap": 75,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32,
    "minRemainingMult": 0.05,
    "accuracy": 125,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunBeanbag",
    "name": "бейсбольная пуля",
    "damage": 0,
    "damageTypes": {},
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 12,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunBuckshot",
    "name": "дробь",
    "damage": 65,
    "damageTypes": {
      "Piercing": 65
    },
    "ap": 5,
    "pellets": 4,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 4,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunFlechette",
    "name": "дротик",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 35,
    "pellets": 4,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 12,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunIncendiary",
    "name": "зажигательная дробовая пуля",
    "damage": 55,
    "damageTypes": {
      "Heat": 55
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 12,
    "minRemainingMult": 0.05,
    "accuracy": 95,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 8,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunIncendiaryBuckshot",
    "name": "зажигательная дробь",
    "damage": 65,
    "damageTypes": {
      "Piercing": 65
    },
    "ap": 5,
    "pellets": 4,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 4,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunSlug",
    "name": "дробовая пуля",
    "damage": 70,
    "damageTypes": {
      "Piercing": 70
    },
    "ap": 20,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 8,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 8,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RCMBulletPistol9mmSquashHead",
    "name": "пуля (9 мм Squash-Head)",
    "damage": 45,
    "damageTypes": {
      "Piercing": 45
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 6,
    "falloffPerTile": 5,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet10x20mmHEAP",
    "name": "BaseBullet",
    "damage": 45,
    "damageTypes": {
      "Piercing": 45
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet10x20mmIncendiary",
    "name": "BaseBullet",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet10x20mmWP",
    "name": "BaseBullet",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet458SOCOM",
    "name": "BaseBullet",
    "damage": 80,
    "damageTypes": {
      "Piercing": 80
    },
    "ap": 10,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 14,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet46x30mm",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 5,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet57x28mm",
    "name": "BaseBullet",
    "damage": 26,
    "damageTypes": {
      "Piercing": 26
    },
    "ap": 10,
    "pellets": 1,
    "falloffStart": 8,
    "falloffPerTile": 5,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet57x28mmAP",
    "name": "BaseBullet",
    "damage": 20,
    "damageTypes": {
      "Piercing": 20
    },
    "ap": 20,
    "pellets": 1,
    "falloffStart": 8,
    "falloffPerTile": 5,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet57x28mmFP9000",
    "name": "BaseBullet",
    "damage": 26,
    "damageTypes": {
      "Piercing": 26
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet762x25mm",
    "name": "BaseBullet",
    "damage": 35,
    "damageTypes": {
      "Piercing": 35
    },
    "ap": 20,
    "pellets": 1,
    "falloffStart": 10,
    "falloffPerTile": 5,
    "cutRange": 20,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet9x20mm",
    "name": "пуля (9 мм)",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 15,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletAutoPistol",
    "name": "BaseBullet",
    "damage": 24,
    "damageTypes": {
      "Piercing": 24
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 3,
    "falloffPerTile": 7,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 115,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 2,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletAutoPistolAP",
    "name": "BaseBullet",
    "damage": 18,
    "damageTypes": {
      "Piercing": 18
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 3,
    "falloffPerTile": 7,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 115,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 2,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletHMG10x28mm",
    "name": "пуля (10x28мм)",
    "damage": 36,
    "damageTypes": {
      "Piercing": 36
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 1,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 8,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletHMG10x28mmTungsten",
    "name": "пуля (10x28 мм, вольфрам)",
    "damage": 50,
    "damageTypes": {
      "Piercing": 50
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 1,
    "falloffPerTile": 3,
    "cutRange": 15,
    "minRemainingMult": 0.05,
    "accuracy": 75,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 6,
        "falloff": 15,
        "buildup": false
      },
      {
        "range": 7,
        "falloff": -15,
        "buildup": false
      },
      {
        "range": 10,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletLMGM60",
    "name": "BaseBullet",
    "damage": 45,
    "damageTypes": {
      "Piercing": 45
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 95,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 12,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletLMGQYJ72",
    "name": "BaseBullet",
    "damage": 35,
    "damageTypes": {
      "Piercing": 35
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 95,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 14,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistol45ACP",
    "name": "пуля (.45 ACP)",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 20,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 125,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistol9mmElectrostatic",
    "name": "электростатическая пуля (9 мм)",
    "damage": 0,
    "damageTypes": {
      "Blunt": 0
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 125,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistol9mmHP",
    "name": "пуля (9 мм с полой головной частью)",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistol9mmRubber",
    "name": "резиновая пуля (9 мм)",
    "damage": 3,
    "damageTypes": {
      "Blunt": 3
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolHandcannon",
    "name": "пуля ( .50 )",
    "damage": 45,
    "damageTypes": {
      "Piercing": 45
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 85,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolHandcannonHI",
    "name": "пуля ( Повышенной мощности .50 )",
    "damage": 45,
    "damageTypes": {
      "Piercing": 45
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 70,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolHandcannonHIAP",
    "name": "пуля ( Бронебойная повышенной мощности .50 )",
    "damage": 45,
    "damageTypes": {
      "Piercing": 45
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 70,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolNP92",
    "name": "пуля (9 мм)",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolT73",
    "name": "пуля (7,62x25 мм)",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolT74Impact",
    "name": "пуля (7,62x25 мм, ударная)",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle10x24mmHEAP",
    "name": "BaseBullet",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 40,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle10x24mmIncendiary",
    "name": "BaseBullet",
    "damage": 33,
    "damageTypes": {
      "Piercing": 33
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle10x24mmWP",
    "name": "BaseBullet",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 40,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle545x39mm",
    "name": "BaseBullet",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 15,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle545x39mmAP",
    "name": "BaseBullet",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle545x39mmHEAP",
    "name": "BaseBullet",
    "damage": 65,
    "damageTypes": {
      "Piercing": 65
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle545x39mmRubber",
    "name": "BaseBullet",
    "damage": 3,
    "damageTypes": {
      "Blunt": 3
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifleHunting",
    "name": "BaseBullet",
    "damage": 42,
    "damageTypes": {
      "Piercing": 42
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSMG9mmSquashHead",
    "name": "пуля (9 мм Squash-Head)",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 15,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 8,
    "cutRange": 14,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSniper10x99mmAntiMateriel",
    "name": "антиматериальная пуля (10x99 мм)",
    "damage": 125,
    "damageTypes": {
      "Piercing": 125,
      "Structural": 1275
    },
    "ap": 75,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32,
    "minRemainingMult": 0.05,
    "accuracy": 125,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSniper77x56mmR",
    "name": "пуля (7.7x56mmR)",
    "damage": 40,
    "damageTypes": {
      "Piercing": 40
    },
    "ap": 10,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSniper77x56mmRSH",
    "name": "пуля Squash-Head (7.7x56mmR)",
    "damage": 60,
    "damageTypes": {
      "Piercing": 60
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSniperType88",
    "name": "пуля (7,62x54 мм R)",
    "damage": 80,
    "damageTypes": {
      "Piercing": 80
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32,
    "minRemainingMult": 0.05,
    "accuracy": 125,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletType64",
    "name": "BaseBullet",
    "damage": 34,
    "damageTypes": {
      "Piercing": 34
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletType64Rubber",
    "name": "BaseBullet",
    "damage": 3,
    "damageTypes": {
      "Blunt": 3
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCNail7x45mm",
    "name": "BaseBullet",
    "damage": 25,
    "damageTypes": {
      "Piercing": 25
    },
    "ap": 25,
    "pellets": 1,
    "falloffStart": 4,
    "falloffPerTile": 6,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletHeavyShotgunBeanbag",
    "name": "тяжелая пуля-мешок",
    "damage": 0,
    "damageTypes": {},
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 12,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletHeavyShotgunBuckshot",
    "name": "тяжелая картечь",
    "damage": 75,
    "damageTypes": {
      "Piercing": 75
    },
    "ap": 5,
    "pellets": 4,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 3,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 3,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletHeavyShotgunFlechette",
    "name": "тяжелый снаряд для ружья",
    "damage": 45,
    "damageTypes": {
      "Piercing": 45
    },
    "ap": 50,
    "pellets": 3,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 12,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletHeavyShotgunIncendiaryBuckshot",
    "name": "снаряд картечи \"дыхание дракона\"",
    "damage": 60,
    "damageTypes": {
      "Piercing": 60
    },
    "ap": 5,
    "pellets": 3,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 3,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 3,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletHeavyShotgunSlug",
    "name": "Тяжелая пуля",
    "damage": 90,
    "damageTypes": {
      "Piercing": 90
    },
    "ap": 30,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 8,
    "minRemainingMult": 0.05,
    "accuracy": 100,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 7,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletShotgunBreaching",
    "name": "легкий разрывной снаряд",
    "damage": 55,
    "damageTypes": {
      "Blunt": 55
    },
    "ap": 5,
    "pellets": 4,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletShotgunL49B",
    "name": "дробь L49B",
    "damage": 5,
    "damageTypes": {
      "Blunt": 5,
      "Structural": 245
    },
    "ap": 5,
    "pellets": 4,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 4,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet458SOCOMMaxStacks",
    "name": ".458 SOCOM (макс. стаки)",
    "damage": 80,
    "damageTypes": {
      "Piercing": 80
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 14,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSmartGun10x30mm",
    "name": "пуля (10x30 мм)",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 12,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSmartGun10x30mmHT",
    "name": "ГТ пуля (10x30mm)",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 12,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSmartGun10x30mmirradiated",
    "name": "облученная пуля (10x30 мм)",
    "damage": 30,
    "damageTypes": {
      "Piercing": 30
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 7,
    "falloffPerTile": 4,
    "cutRange": 12,
    "minRemainingMult": 0.05,
    "accuracy": 105,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSniper10x28mmFlak",
    "name": "пуля \"воздушный удар\" (10x28 мм)",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32,
    "minRemainingMult": 0.05,
    "accuracy": 125,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32,
        "falloff": 10,
        "buildup": false
      },
      {
        "range": 4,
        "falloff": 10,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolver38",
    "name": "пуля (.38)",
    "damage": 45,
    "damageTypes": {
      "Piercing": 45
    },
    "ap": 15,
    "pellets": 1,
    "falloffStart": 22,
    "falloffPerTile": 1,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletRevolver44",
    "name": "пуля (.44)",
    "damage": 72,
    "damageTypes": {
      "Piercing": 72
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolver44Marksman",
    "name": "пуля (.44 снайперская)",
    "damage": 55,
    "damageTypes": {
      "Piercing": 55
    },
    "ap": 35,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 12,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletMateba",
    "name": "пуля (.454)",
    "damage": 60,
    "damageTypes": {
      "Piercing": 60
    },
    "ap": 20,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletMatebaHighImpact",
    "name": "пуля (.454) \"Ударная волна\"",
    "damage": 60,
    "damageTypes": {
      "Piercing": 60
    },
    "ap": 5,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletMatebaHighImpactArmorPiercing",
    "name": "пуля (.454) БП",
    "damage": 50,
    "damageTypes": {
      "Piercing": 50
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletMatebaHighExplosive",
    "name": "пуля (.454) РЗ",
    "damage": 100,
    "damageTypes": {
      "Piercing": 100
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRsh9",
    "name": "пуля (9x39)",
    "damage": 65,
    "damageTypes": {
      "Piercing": 65
    },
    "ap": 35,
    "pellets": 1,
    "falloffStart": 0,
    "falloffPerTile": 1,
    "cutRange": 22,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolver357",
    "name": "пуля (.357)",
    "damage": 69,
    "damageTypes": {
      "Piercing": 69
    },
    "ap": 15,
    "pellets": 1,
    "falloffStart": 22,
    "falloffPerTile": 1,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolver357Hollowpoint",
    "name": "пуля (.357) экспансивная",
    "damage": 86,
    "damageTypes": {
      "Piercing": 86
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 22,
    "falloffPerTile": 5,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 12,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolverZHNK72",
    "name": "пуля (7,62 мм)",
    "damage": 70,
    "damageTypes": {
      "Piercing": 70
    },
    "ap": 20,
    "pellets": 1,
    "falloffStart": 22,
    "falloffPerTile": 1,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 60,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5,
        "falloff": 10,
        "buildup": false
      }
    ],
    "forceHit": false
  }
];
