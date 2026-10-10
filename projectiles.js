const PROJECTILES = [
  {
    "id": "Bullet10x20mm",
    "name": "BaseBullet",
    "damage": 34.0,
    "damageTypes": {
      "Piercing": 34.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "Bullet10x20mmAP",
    "name": "BaseBullet",
    "damage": 26.0,
    "damageTypes": {
      "Piercing": 26.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "Bullet10x20mmRubber",
    "name": "BaseBullet",
    "damage": 3.0,
    "damageTypes": {
      "Blunt": 3.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "Bullet9x21mmUZI",
    "name": "BaseBullet",
    "damage": 35.0,
    "damageTypes": {
      "Piercing": 35.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle10x24mm",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle10x24mmAP",
    "name": "BaseBullet",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 40.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle10x24mmHT",
    "name": "BaseBullet",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle10x24mmRubber",
    "name": "BaseBullet",
    "damage": 3.0,
    "damageTypes": {
      "Blunt": 3.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle556x45mm",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle556x45mmAP",
    "name": "BaseBullet",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 40.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle556x45mmHEAP",
    "name": "BaseBullet",
    "damage": 65.0,
    "damageTypes": {
      "Piercing": 65.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle556x45mmIncendiary",
    "name": "BaseBullet",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle7x43mm",
    "name": "BaseBullet",
    "damage": 50.0,
    "damageTypes": {
      "Piercing": 50.0
    },
    "ap": 10.0,
    "pellets": 1,
    "falloffStart": 10.0,
    "falloffPerTile": 4.0,
    "cutRange": 30.0,
    "minRemainingMult": 0.05,
    "accuracy": 120.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 20.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle7x43mmAP",
    "name": "BaseBullet",
    "damage": 35.0,
    "damageTypes": {
      "Piercing": 35.0
    },
    "ap": 40.0,
    "pellets": 1,
    "falloffStart": 10.0,
    "falloffPerTile": 4.0,
    "cutRange": 30.0,
    "minRemainingMult": 0.05,
    "accuracy": 120.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 20.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle7x43mmHEAP",
    "name": "BaseBullet",
    "damage": 70.0,
    "damageTypes": {
      "Piercing": 70.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 10.0,
    "falloffPerTile": 4.0,
    "cutRange": 30.0,
    "minRemainingMult": 0.05,
    "accuracy": 120.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 20.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle7x43mmIncendiary",
    "name": "BaseBullet",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 10.0,
    "pellets": 1,
    "falloffStart": 10.0,
    "falloffPerTile": 4.0,
    "cutRange": 30.0,
    "minRemainingMult": 0.05,
    "accuracy": 120.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 20.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle888x51mm",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 10.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle888x51mmAP",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle888x51mmHEAP",
    "name": "BaseBullet",
    "damage": 65.0,
    "damageTypes": {
      "Piercing": 65.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifle888x51mmIncendiary",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 10.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleAR10",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM4SPRA19",
    "name": "BaseBullet",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 35.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM4SPRA19Impact",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 75.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM4SPRA19Incendiary",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 25.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM5SPRHVHIP",
    "name": "BaseBullet",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 35.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleM5SPRHVP",
    "name": "BaseBullet",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 35.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "BulletRifleMAR40",
    "name": "BaseBullet",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBullet9mmSMG",
    "name": "BaseBullet",
    "damage": 34.0,
    "damageTypes": {
      "Piercing": 34.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistol22mm",
    "name": "пуля (.22)",
    "damage": 20.0,
    "damageTypes": {
      "Piercing": 20.0
    },
    "ap": 10.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistol45ACP",
    "name": "bullet (.45 ACP)",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 15.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistol9mm",
    "name": "пуля (9 мм)",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 10.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistolM77AP",
    "name": "пуля (9 мм ББ)",
    "damage": 25.0,
    "damageTypes": {
      "Piercing": 25.0
    },
    "ap": 40.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletPistolMK45",
    "name": "мощная пистолетная пуля (.45)",
    "damage": 36.0,
    "damageTypes": {
      "Piercing": 36.0
    },
    "ap": 25.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSniper10x28mm",
    "name": "пуля (10x28 мм)",
    "damage": 70.0,
    "damageTypes": {
      "Piercing": 70.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32.0,
    "minRemainingMult": 0.05,
    "accuracy": 125.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSniper10x28mmIncendiary",
    "name": "зажигательная пуля (10x28 мм)",
    "damage": 60.0,
    "damageTypes": {
      "Piercing": 50.0,
      "Heat": 10.0
    },
    "ap": 20.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32.0,
    "minRemainingMult": 0.05,
    "accuracy": 125.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSniper10x99mm",
    "name": "сверхзвуковая снайперская пуля (10x99мм)",
    "damage": 300.0,
    "damageTypes": {
      "Piercing": 300.0
    },
    "ap": 75.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32.0,
    "minRemainingMult": 0.05,
    "accuracy": 125.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
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
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunBuckshot",
    "name": "дробь",
    "damage": 65.0,
    "damageTypes": {
      "Piercing": 65.0
    },
    "ap": 5.0,
    "pellets": 4,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 4.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunFlechette",
    "name": "дротик",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 35.0,
    "pellets": 4,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunIncendiary",
    "name": "зажигательная дробовая пуля",
    "damage": 55.0,
    "damageTypes": {
      "Heat": 55.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 95.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 8.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunIncendiaryBuckshot",
    "name": "зажигательная дробь",
    "damage": 65.0,
    "damageTypes": {
      "Piercing": 65.0
    },
    "ap": 5.0,
    "pellets": 4,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 4.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMPelletShotgunSlug",
    "name": "дробовая пуля",
    "damage": 70.0,
    "damageTypes": {
      "Piercing": 70.0
    },
    "ap": 20.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 8.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 8.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RCMBulletPistol9mmSquashHead",
    "name": "пуля (9 мм Squash-Head)",
    "damage": 45.0,
    "damageTypes": {
      "Piercing": 45.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 6.0,
    "falloffPerTile": 5.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet10x20mmHEAP",
    "name": "BaseBullet",
    "damage": 45.0,
    "damageTypes": {
      "Piercing": 45.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet10x20mmIncendiary",
    "name": "BaseBullet",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet10x20mmWP",
    "name": "BaseBullet",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet458SOCOM",
    "name": "BaseBullet",
    "damage": 80.0,
    "damageTypes": {
      "Piercing": 80.0
    },
    "ap": 10.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 14.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet46x30mm",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 0.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 5.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet57x28mm",
    "name": "BaseBullet",
    "damage": 26.0,
    "damageTypes": {
      "Piercing": 26.0
    },
    "ap": 10.0,
    "pellets": 1,
    "falloffStart": 8.0,
    "falloffPerTile": 5.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet57x28mmAP",
    "name": "BaseBullet",
    "damage": 20.0,
    "damageTypes": {
      "Piercing": 20.0
    },
    "ap": 20.0,
    "pellets": 1,
    "falloffStart": 8.0,
    "falloffPerTile": 5.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet57x28mmFP9000",
    "name": "BaseBullet",
    "damage": 26.0,
    "damageTypes": {
      "Piercing": 26.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet762x25mm",
    "name": "BaseBullet",
    "damage": 35.0,
    "damageTypes": {
      "Piercing": 35.0
    },
    "ap": 20.0,
    "pellets": 1,
    "falloffStart": 10.0,
    "falloffPerTile": 5.0,
    "cutRange": 20.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet9x20mm",
    "name": "пуля (9 мм)",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 15.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletAutoPistol",
    "name": "BaseBullet",
    "damage": 24.0,
    "damageTypes": {
      "Piercing": 24.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 3.0,
    "falloffPerTile": 7.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 115.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 2.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletAutoPistolAP",
    "name": "BaseBullet",
    "damage": 18.0,
    "damageTypes": {
      "Piercing": 18.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 3.0,
    "falloffPerTile": 7.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 115.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 2.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletHMG10x28mm",
    "name": "пуля (10x28мм)",
    "damage": 36.0,
    "damageTypes": {
      "Piercing": 36.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 1.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 8.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletHMG10x28mmTungsten",
    "name": "пуля (10x28 мм, вольфрам)",
    "damage": 50.0,
    "damageTypes": {
      "Piercing": 50.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 1.0,
    "falloffPerTile": 3.0,
    "cutRange": 15.0,
    "minRemainingMult": 0.05,
    "accuracy": 75.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 6.0,
        "falloff": 15.0,
        "buildup": false
      },
      {
        "range": 7.0,
        "falloff": -15.0,
        "buildup": false
      },
      {
        "range": 10.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletLMGM60",
    "name": "BaseBullet",
    "damage": 45.0,
    "damageTypes": {
      "Piercing": 45.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 95.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 12.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletLMGQYJ72",
    "name": "BaseBullet",
    "damage": 35.0,
    "damageTypes": {
      "Piercing": 35.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 95.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 14.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistol45ACP",
    "name": "пуля (.45 ACP)",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 20.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 125.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistol9mmElectrostatic",
    "name": "electrostatic bullet (9mm)",
    "damage": 0.0,
    "damageTypes": {
      "Blunt": 0.0
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 125.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistol9mmHP",
    "name": "пуля (9 мм с полой головной частью)",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistol9mmRubber",
    "name": "резиновая пуля (9 мм)",
    "damage": 3.0,
    "damageTypes": {
      "Blunt": 3.0
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolHandcannon",
    "name": "пуля ( .50 )",
    "damage": 45.0,
    "damageTypes": {
      "Piercing": 45.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 85.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolHandcannonHI",
    "name": "пуля ( Повышенной мощности .50 )",
    "damage": 45.0,
    "damageTypes": {
      "Piercing": 45.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 70.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolHandcannonHIAP",
    "name": "пуля ( Бронебойная повышенной мощности .50 )",
    "damage": 45.0,
    "damageTypes": {
      "Piercing": 45.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 70.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolNP92",
    "name": "пуля (9 мм)",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolT73",
    "name": "пуля (7,62x25 мм)",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletPistolT74Impact",
    "name": "пуля (7,62x25 мм, ударная)",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle10x24mmHEAP",
    "name": "BaseBullet",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 40.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle10x24mmIncendiary",
    "name": "BaseBullet",
    "damage": 33.0,
    "damageTypes": {
      "Piercing": 33.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle10x24mmWP",
    "name": "BaseBullet",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 40.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle545x39mm",
    "name": "BaseBullet",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 15.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle545x39mmAP",
    "name": "BaseBullet",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle545x39mmHEAP",
    "name": "BaseBullet",
    "damage": 65.0,
    "damageTypes": {
      "Piercing": 65.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifle545x39mmRubber",
    "name": "BaseBullet",
    "damage": 3.0,
    "damageTypes": {
      "Blunt": 3.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRifleHunting",
    "name": "BaseBullet",
    "damage": 42.0,
    "damageTypes": {
      "Piercing": 42.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 16.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSMG9mmSquashHead",
    "name": "9mmSquash-HeadBullet",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 15.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 8.0,
    "cutRange": 14.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSniper10x99mmAntiMateriel",
    "name": "антиматериальная пуля (10x99 мм)",
    "damage": 125.0,
    "damageTypes": {
      "Piercing": 125.0,
      "Structural": 1275.0
    },
    "ap": 75.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32.0,
    "minRemainingMult": 0.05,
    "accuracy": 125.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSniper77x56mmR",
    "name": "bullet (7.7x56mmR)",
    "damage": 40.0,
    "damageTypes": {
      "Piercing": 40.0
    },
    "ap": 10.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSniper77x56mmRSH",
    "name": "squash-head bullet (7.7x56mmR)",
    "damage": 60.0,
    "damageTypes": {
      "Piercing": 60.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 24.0,
    "minRemainingMult": 0.05,
    "accuracy": 90,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSniperType88",
    "name": "пуля (7,62x54 мм R)",
    "damage": 80.0,
    "damageTypes": {
      "Piercing": 80.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32.0,
    "minRemainingMult": 0.05,
    "accuracy": 125.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletType64",
    "name": "BaseBullet",
    "damage": 34.0,
    "damageTypes": {
      "Piercing": 34.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletType64Rubber",
    "name": "BaseBullet",
    "damage": 3.0,
    "damageTypes": {
      "Blunt": 3.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCNail7x45mm",
    "name": "BaseBullet",
    "damage": 25.0,
    "damageTypes": {
      "Piercing": 25.0
    },
    "ap": 25.0,
    "pellets": 1,
    "falloffStart": 4.0,
    "falloffPerTile": 6.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
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
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletHeavyShotgunBuckshot",
    "name": "тяжелая картечь",
    "damage": 75.0,
    "damageTypes": {
      "Piercing": 75.0
    },
    "ap": 5.0,
    "pellets": 4,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 3.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 3.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletHeavyShotgunFlechette",
    "name": "тяжелый снаряд для ружья",
    "damage": 45.0,
    "damageTypes": {
      "Piercing": 45.0
    },
    "ap": 50.0,
    "pellets": 3,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletHeavyShotgunIncendiaryBuckshot",
    "name": "снаряд картечи \"дыхание дракона\"",
    "damage": 60.0,
    "damageTypes": {
      "Piercing": 60.0
    },
    "ap": 5.0,
    "pellets": 3,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 3.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 3.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletHeavyShotgunSlug",
    "name": "Тяжелая пуля",
    "damage": 90.0,
    "damageTypes": {
      "Piercing": 90.0
    },
    "ap": 30.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 8.0,
    "minRemainingMult": 0.05,
    "accuracy": 100.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 7.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletShotgunBreaching",
    "name": "легкий разрывной снаряд",
    "damage": 55.0,
    "damageTypes": {
      "Blunt": 55.0
    },
    "ap": 5.0,
    "pellets": 4,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCPelletShotgunL49B",
    "name": "L49B pellets",
    "damage": 5.0,
    "damageTypes": {
      "Blunt": 5.0,
      "Structural": 245.0
    },
    "ap": 5.0,
    "pellets": 4,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 4.0,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBullet458SOCOMMaxStacks",
    "name": ".458 SOCOM (макс. стаки)",
    "damage": 80.0,
    "damageTypes": {
      "Piercing": 80.0
    },
    "ap": 50,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 14.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSmartGun10x30mmMode0",
    "name": "пуля (10x30 мм) (высокоточный режим)",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 0.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSmartGun10x30mmHTMode0",
    "name": "ГТ пуля (10x30mm) (высокоточный режим)",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 0.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSmartGun10x30mmirradiatedMode0",
    "name": "облученная пуля (10x30 мм) (высокоточный режим)",
    "damage": 30.0,
    "damageTypes": {
      "Piercing": 30.0
    },
    "ap": 0.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSmartGun10x30mmMode1",
    "name": "пуля (10x30 мм) (бронебойный режим)",
    "damage": 20.0,
    "damageTypes": {
      "Piercing": 20.0
    },
    "ap": 40.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSmartGun10x30mmHTMode1",
    "name": "ГТ пуля (10x30mm) (бронебойный режим)",
    "damage": 20.0,
    "damageTypes": {
      "Piercing": 20.0
    },
    "ap": 40.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletSmartGun10x30mmirradiatedMode1",
    "name": "облученная пуля (10x30 мм) (бронебойный режим)",
    "damage": 20.0,
    "damageTypes": {
      "Piercing": 20.0
    },
    "ap": 40.0,
    "pellets": 1,
    "falloffStart": 7.0,
    "falloffPerTile": 4.0,
    "cutRange": 12.0,
    "minRemainingMult": 0.05,
    "accuracy": 105.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletSniper10x28mmFlak",
    "name": "пуля \"воздушный удар\" (10x28 мм)",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 0.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 32.0,
    "minRemainingMult": 0.05,
    "accuracy": 125.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 32.0,
        "falloff": 10.0,
        "buildup": false
      },
      {
        "range": 4.0,
        "falloff": 10.0,
        "buildup": true
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolver38",
    "name": "пуля (.38)",
    "damage": 45.0,
    "damageTypes": {
      "Piercing": 45.0
    },
    "ap": 15.0,
    "pellets": 1,
    "falloffStart": 22.0,
    "falloffPerTile": 1.0,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "CMBulletRevolver44",
    "name": "пуля (.44)",
    "damage": 72.0,
    "damageTypes": {
      "Piercing": 72.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolver44Marksman",
    "name": "пуля (.44 снайперская)",
    "damage": 55.0,
    "damageTypes": {
      "Piercing": 55.0
    },
    "ap": 35.0,
    "pellets": 1,
    "falloffStart": null,
    "falloffPerTile": null,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 12.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletMateba",
    "name": "пуля (.454)",
    "damage": 60.0,
    "damageTypes": {
      "Piercing": 60.0
    },
    "ap": 20.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletMatebaHighImpact",
    "name": "пуля (.454) \"Ударная волна\"",
    "damage": 60.0,
    "damageTypes": {
      "Piercing": 60.0
    },
    "ap": 5.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletMatebaHighImpactArmorPiercing",
    "name": "пуля (.454) БП",
    "damage": 50.0,
    "damageTypes": {
      "Piercing": 50.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletMatebaHighExplosive",
    "name": "пуля (.454) РЗ",
    "damage": 100.0,
    "damageTypes": {
      "Piercing": 100.0
    },
    "ap": 50.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRsh9",
    "name": "пуля (9x39)",
    "damage": 65.0,
    "damageTypes": {
      "Piercing": 65.0
    },
    "ap": 35.0,
    "pellets": 1,
    "falloffStart": 0.0,
    "falloffPerTile": 1.0,
    "cutRange": 22.0,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolver357",
    "name": "пуля (.357)",
    "damage": 69.0,
    "damageTypes": {
      "Piercing": 69.0
    },
    "ap": 15.0,
    "pellets": 1,
    "falloffStart": 22.0,
    "falloffPerTile": 1.0,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolver357Hollowpoint",
    "name": "пуля (.357) экспансивная",
    "damage": 86.0,
    "damageTypes": {
      "Piercing": 86.0
    },
    "ap": 0.0,
    "pellets": 1,
    "falloffStart": 22.0,
    "falloffPerTile": 5.0,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 90.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 12.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  },
  {
    "id": "RMCBulletRevolverZHNK72",
    "name": "пуля (7,62 мм)",
    "damage": 70.0,
    "damageTypes": {
      "Piercing": 70.0
    },
    "ap": 20.0,
    "pellets": 1,
    "falloffStart": 22.0,
    "falloffPerTile": 1.0,
    "cutRange": null,
    "minRemainingMult": 0.05,
    "accuracy": 60.0,
    "minAccuracy": 5,
    "accuracyThresholds": [
      {
        "range": 5.0,
        "falloff": 10.0,
        "buildup": false
      }
    ],
    "forceHit": false
  }
];
