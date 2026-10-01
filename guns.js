const GUNS = [
  {
    "id": "CMM96CSniperRifle",
    "name": "модифицированная снайперская винтовка M96C",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/m96c_sniper.yml",
    "fireRate": 0.333,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 0,
      "scatterUnwielded": 20,
      "baseFireRate": 0.333,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineSniperM96C"
    ],
    "accuracyMult": 3.0,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 0.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "CMM96SSniperRifle",
    "name": "снайперская винтовка M96S",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/m96s_sniper.yml",
    "fireRate": 0.667,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 0,
      "scatterUnwielded": 20,
      "baseFireRate": 0.667,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineSniperM96S",
      "CMMagazineSniperM96SFlak",
      "CMMagazineSniperM96SIncendiary"
    ],
    "accuracyMult": 3.0,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 0.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "CMWeaponPistolM1911",
    "name": "M1911 service pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m1911_pistol.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.25,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 4,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMMagazinePistolM1911"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "CMWeaponPistolM1984",
    "name": "служебный пистолет M4A3",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m1984_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 10,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMMagazinePistolM1984",
      "RMCMagazinePistolM1984AP",
      "RMCMagazinePistolM1984HP",
      "RMCMagazinePistolM1984Rubber"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "CMWeaponPistolM1984Custom",
    "name": "индивидуальный служебный пистолет M4A3",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m1984_custom_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 10,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMMagazinePistolM1984",
      "RMCMagazinePistolM1984AP",
      "RMCMagazinePistolM1984HP",
      "RMCMagazinePistolM1984Rubber"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCAttachmentL90GL",
    "name": "L90U3 подствольный гранатомет",
    "category": "Подствольные",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Attachments/under_attachments.yml",
    "fireRate": 0.417,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 0.417
    },
    "magazines": [
      "RMC40MMGrenadeM74AGMF",
      "RMC40MMGrenadeM74AGMI",
      "RMC40MMGrenadeM74AGMS",
      "RMCHornetShellM74AGMS",
      "RMCStarShellM74AGMS"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCAttachmentL90UBS",
    "name": "L90U1 подствольный дробовик",
    "category": "Подствольные",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Attachments/under_attachments.yml",
    "fireRate": 0.66,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 0.66,
    "falloffMult": 1.5,
    "rangeFlat": -1.5,
    "selectiveFire": {
      "baseFireRate": 0.66,
      "scatterWielded": 10,
      "scatterUnwielded": 10
    },
    "magazines": [
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunSlugs",
      "RMCShellShotgunL49B"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCAttachmentM203GrenadeLauncher",
    "name": "подствольный гранатомет M203",
    "category": "Подствольные",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Attachments/under_attachments.yml",
    "fireRate": 0.334,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 0.334
    },
    "magazines": [
      "RMC40MMGrenadeM74AGMF",
      "RMC40MMGrenadeM74AGMI",
      "RMC40MMGrenadeM74AGMS",
      "RMCHornetShellM74AGMS",
      "RMCStarShellM74AGMS"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCAttachmentMK1GrenadeLauncher",
    "name": "подствольный гранатомет MK1",
    "category": "Подствольные",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Attachments/under_attachments.yml",
    "fireRate": 0.334,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 0.334
    },
    "magazines": [
      "RMC40MMGrenadeM74AGMF",
      "RMC40MMGrenadeM74AGMI",
      "RMC40MMGrenadeM74AGMS",
      "RMCHornetShellM74AGMS",
      "RMCStarShellM74AGMS"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCAttachmentU1GrenadeLauncher",
    "name": "подствольный гранатомет U1",
    "category": "Подствольные",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Attachments/under_attachments.yml",
    "fireRate": 0.417,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 0.417
    },
    "magazines": [
      "RMC40MMGrenadeM74AGMF",
      "RMC40MMGrenadeM74AGMI",
      "RMC40MMGrenadeM74AGMS",
      "RMCHornetShellM74AGMS",
      "RMCStarShellM74AGMS"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCAttachmentU7UnderbarrelShotgun",
    "name": "подствольный дробовик U7",
    "category": "Подствольные",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Attachments/under_attachments.yml",
    "fireRate": 0.476,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 0.85,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 0.476
    },
    "magazines": [
      "CMShellShotgunBuckshot"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCL112SniperRifle",
    "name": "L112A2 designated marksman rifle",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/l112_sniper.yml",
    "fireRate": 3.8,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 4,
      "scatterUnwielded": 20,
      "baseFireRate": 3.8,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSniperL112",
      "RMCMagazineSniperL112SH"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCL112SniperRifleSuppressed",
    "name": "L112A1 designated marksman rifle",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/l112_sniper.yml",
    "fireRate": 3.8,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 4,
      "scatterUnwielded": 20,
      "baseFireRate": 3.8,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSniperL112",
      "RMCMagazineSniperL112SH"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCM96SBSniperRifle",
    "name": "винтовка M96S-B с глушителем и оптическим прицелом",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/m96sb_sniper.yml",
    "fireRate": 0.667,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 0,
      "scatterUnwielded": 20,
      "baseFireRate": 0.667,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineSniperM96S",
      "CMMagazineSniperM96SFlak",
      "CMMagazineSniperM96SIncendiary"
    ],
    "accuracyMult": 3.0,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 0.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCMK80",
    "name": "пистолет VP78",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/mk80_pistol.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 2,
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 2,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.08,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "CMMagazinePistolMK80"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.08,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCMK80RCM",
    "name": "L189 offensive handgun",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/mk80_pistol.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 2,
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 2,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.08,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "CMMagazinePistolMK80"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.08,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCMachineGunM2C",
    "name": "станковый пулемет M2C",
    "category": "Станковые пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/HMGs/m2c.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilUnwielded": 0,
      "scatterUnwielded": 0,
      "baseFireRate": 10,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 0,
          "useBurstScatterMult": false,
          "unwieldedScatterMultiplier": 0,
          "shotsToMaxScatter": 125
        }
      }
    },
    "magazines": [
      "RMCMagazineM2C"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 0.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": 125
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCRoyalGrenadeLauncher",
    "name": "L989A2 multiple grenade launcher",
    "category": "Гранатомёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Launchers/l989a2_grenade_launcher.yml",
    "fireRate": 1.43,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "baseFireRate": 1.43
    },
    "magazines": [
      "RMC40MMGrenadeM74AGMF",
      "RMC40MMGrenadeM74AGMI",
      "RMC40MMGrenadeM74AGMS",
      "RMCBatonSlugHIRR",
      "RMCHornetShellM74AGMS",
      "RMCStarShellM74AGMS"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGun",
    "name": "ML66A smart gun",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 5,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunCLF",
    "name": "умная пушка M56B \"Свобода\"",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 5,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunCO",
    "name": "умная пушка M56B \"Кавалер\"",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 5,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunMounted",
    "name": "станковый пулемет M56D",
    "category": "Станковые пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/HMGs/ml66d.yml",
    "fireRate": 3.33,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto",
        "SemiAuto"
      ],
      "recoilUnwielded": 0,
      "scatterUnwielded": 0,
      "baseFireRate": 3.33,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 0,
          "useBurstScatterMult": false,
          "unwieldedScatterMultiplier": 0,
          "shotsToMaxScatter": 700
        }
      }
    },
    "magazines": [
      "RMCMagazineML66D",
      "RMCMagazineML66DLarge"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto",
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 0.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": 700
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunMountedStatic",
    "name": "станковый пулемет M56D (стационарный)",
    "category": "Станковые пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/HMGs/ml66d.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto",
        "SemiAuto"
      ],
      "recoilUnwielded": 0,
      "scatterUnwielded": 0,
      "baseFireRate": 5,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 0,
          "useBurstScatterMult": false,
          "unwieldedScatterMultiplier": 0,
          "shotsToMaxScatter": 700
        }
      }
    },
    "magazines": [
      "RMCMagazineML66DLarge"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto",
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 0.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": 700
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunOvertunedPVE",
    "name": "ML66OT heavy support gun",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 12.0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 6,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunPMC",
    "name": "ML79A smart gun",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 5,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunPMCPVE",
    "name": "ML79A heavy support gun",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 12.0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 6,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunPVE",
    "name": "ML66A heavy support gun",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 12.0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 6,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunRCMPVE",
    "name": "ML66C general purpose machine gun",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 12.0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 6,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunRoyal",
    "name": "умная пушка M56B \"королевский\"",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 5,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCSmartGunWhiteOut",
    "name": "умная пушка M56B",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "recoilWielded": 3,
      "scatterWielded": 10,
      "baseFireRate": 10,
      "burstScatterMult": 1,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 0,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 80
        }
      }
    },
    "magazines": [
      "RMCMagazineSmartGun",
      "RMCMagazineSmartGunHT",
      "RMCMagazineSmartGunirradiated"
    ],
    "accuracyMult": 1.05,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 80
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCType88SniperRifle",
    "name": "снайперская винтовка разведчика Типа 88",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/type88_sniper.yml",
    "fireRate": 1.6675,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 3,
      "scatterUnwielded": 20,
      "baseFireRate": 1.6675,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSniperType88"
    ],
    "accuracyMult": 3.0,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 3.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponBoltActionRifle",
    "name": "охотничья винтовка Басира-Армстронг с продольно-скользящим затвором",
    "category": "Болтовые винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/BoltAction/hunting_rifle.yml",
    "fireRate": 1.25,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.4,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 1.25,
      "burstScatterMult": 5,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleHunting"
    ],
    "accuracyMult": 1.35,
    "accuracyMultUnwielded": 0.35,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponLMGM60",
    "name": "пулемет общего назначения M60",
    "category": "Ручные пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/LMGs/m60_lmg.yml",
    "fireRate": 3.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 5,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 0,
      "recoilUnwielded": 0,
      "scatterWielded": 4,
      "scatterUnwielded": 4,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 0,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0.01,
          "maxScatterModifier": 4,
          "shotsToMaxScatter": 6
        }
      },
      "baseFireRate": 3.5
    },
    "magazines": [
      "RMCMagazineLMGM60"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 4.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.01,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponLMGQYJ72",
    "name": "пулемет общего назначения QYJ-72",
    "category": "Ручные пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/LMGs/qyj_72.yml",
    "fireRate": 3.33,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 6,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 1,
      "scatterUnwielded": 20,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.233,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true
        },
        "FullAuto": {
          "maxScatterModifier": 6
        }
      },
      "baseFireRate": 3.33
    },
    "magazines": [
      "RMCMagazineLMGQYJ72"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 1.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.233,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 6.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponLauncherHJRA12",
    "name": "ручной противотанковый гранатомет СРПГ-12",
    "category": "Гранатомёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Launchers/hjra_12_rocket_launcher.yml",
    "fireRate": 0.83,
    "fireRateSource": "Gun",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {},
    "magazines": [
      "RMCRocketHJRA12AT",
      "RMCRocketHJRA12HE",
      "RMCRocketHJRA12Incen"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": null,
    "scatterSource": "Gun",
    "scatterWielded": 1.0,
    "scatterUnwielded": 1.0,
    "scatterMax": 2.0,
    "scatterIncrease": 0.5,
    "scatterDecay": 4.0,
    "burstScatterMult": null,
    "fireModeMods": {},
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponLauncherM5ATL",
    "name": "M5-ATL",
    "category": "Гранатомёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Launchers/m5_atl_rocket_launcher.yml",
    "fireRate": 0.83,
    "fireRateSource": "Gun",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {},
    "magazines": [
      "RMCRocket84mm",
      "RMCRocket84mmAntiArmor",
      "RMCRocket84mmWhitePhosphorus"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": null,
    "scatterSource": "Gun",
    "scatterWielded": 1.0,
    "scatterUnwielded": 1.0,
    "scatterMax": 2.0,
    "scatterIncrease": 0.5,
    "scatterDecay": 4.0,
    "burstScatterMult": null,
    "fireModeMods": {},
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponLauncherM6HBrute",
    "name": "M6H-BRUTE",
    "category": "Гранатомёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Launchers/m6h_brute_launcher.yml",
    "fireRate": 0.83,
    "fireRateSource": "Gun",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {},
    "magazines": [
      "RMCRocketM5510Brute"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": null,
    "scatterSource": "Gun",
    "scatterWielded": 1.0,
    "scatterUnwielded": 1.0,
    "scatterMax": 2.0,
    "scatterIncrease": 0.5,
    "scatterDecay": 4.0,
    "burstScatterMult": null,
    "fireModeMods": {},
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponLauncherM85A1",
    "name": "гранатомет M79",
    "category": "Гранатомёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Launchers/m85a1_grenade_launcher.yml",
    "fireRate": 0.3125,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "baseFireRate": 0.3125
    },
    "magazines": [
      "RMC40MMGrenadeM74AGMF",
      "RMC40MMGrenadeM74AGMI",
      "RMC40MMGrenadeM74AGMS",
      "RMCBatonSlugHIRR",
      "RMCHornetShellM74AGMS",
      "RMCStarShellM74AGMS"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponMar50LMG",
    "name": "легкий пулемет MAR-50",
    "category": "Ручные пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/LMGs/mar50.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 5,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 5,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1332
        }
      }
    },
    "magazines": [
      "RMCMagazineMar50LMG",
      "RMCMagazineRifleMAR40",
      "RMCMagazineRifleMAR40Ext"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1332,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponPistolB92FS",
    "name": "беретта 92FS",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/b92fs.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 0.9,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 8,
      "scatterUnwielded": 8,
      "baseFireRate": 10
    },
    "magazines": [
      "RMCMagazinePistolB92FS"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 8.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolD18",
    "name": "D18 Колибри",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/hummingbird.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 6,
      "scatterUnwielded": 6,
      "baseFireRate": 10,
      "burstScatterMult": 3
    },
    "magazines": [
      "RMCMagazinePistolD18"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 6.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolHG45Aguila",
    "name": "пистолет HG-45 \"Аквила\"",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/hg45_Aguila_pistol.yml",
    "fireRate": 1.428,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.4,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 10,
      "scatterUnwielded": 14,
      "baseFireRate": 1.428
    },
    "magazines": [
      "RMCMagazinePistolMK45"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.85,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolHG45Marina",
    "name": "пистолет HG-45 \"Марина\"",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/hg45_Marina_pistol.yml",
    "fireRate": 1.428,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.4,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 10,
      "scatterUnwielded": 14,
      "baseFireRate": 1.428
    },
    "magazines": [
      "RMCMagazinePistolMK45"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.85,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolHandcannon",
    "name": "пистолет-пушка \"Перегрин\"",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/peregrine_handcannon.yml",
    "fireRate": 1.43,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
    "damageMult": 1.4,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "scatterWielded": 5,
      "scatterUnwielded": 5,
      "baseFireRate": 1.43,
      "burstScatterMult": 5,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.2,
          "maxScatterModifier": 5,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolHandcannon"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 5.0,
    "scatterUnwielded": 5.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.2,
        "maxScatterModifier": 5.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponPistolHandcannonGold",
    "name": "золотой пистолет-пушка \"Перегрин\"",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/peregrine_handcannon.yml",
    "fireRate": 1.43,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
    "damageMult": 1.4,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "scatterWielded": 5,
      "scatterUnwielded": 8,
      "baseFireRate": 1.43,
      "burstScatterMult": 5,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.2,
          "maxScatterModifier": 7,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolHandcannon",
      "RMCMagazinePistolHandcannonHI",
      "RMCMagazinePistolHandcannonHIAP"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 5.0,
    "scatterUnwielded": 8.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.2,
        "maxScatterModifier": 7.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponPistolHandcannonWinterWyvern",
    "name": "пистолет-пушка \"Зимний виверн\"",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/peregrine_handcannon.yml",
    "fireRate": 1.43,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
    "damageMult": 1.4,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "scatterWielded": 5,
      "scatterUnwielded": 8,
      "baseFireRate": 1.43,
      "burstScatterMult": 5,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.2,
          "maxScatterModifier": 7,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolHandcannon",
      "RMCMagazinePistolHandcannonHI",
      "RMCMagazinePistolHandcannonHIAP"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 5.0,
    "scatterUnwielded": 8.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.2,
        "maxScatterModifier": 7.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponPistolHoldout",
    "name": "пистолет-держатель",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/holdout_pistol.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 4,
      "burstScatterMult": 10
    },
    "magazines": [
      "RMCMagazinePistolHoldout"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 10.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolKT42",
    "name": "автомаг КТ-42",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/kt42_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 5,
      "scatterUnwielded": 6,
      "baseFireRate": 10
    },
    "magazines": [
      "RMCMagazinePistolKT42"
    ],
    "accuracyMult": 0.95,
    "accuracyMultUnwielded": 0.9,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 5.0,
    "scatterUnwielded": 6.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolL14",
    "name": "L14 combat pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/l14_pistol.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 6,
      "scatterUnwielded": 6,
      "baseFireRate": 6,
      "burstScatterMult": 6,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.01,
          "maxScatterModifier": 2,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolL14",
      "RMCMagazinePistolL14AP"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 6.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 6.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.01,
        "maxScatterModifier": 2.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolL14Custom",
    "name": "L14 custom combat pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/l14_pistol.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 6,
      "scatterUnwielded": 6,
      "baseFireRate": 6,
      "burstScatterMult": 6,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.01,
          "maxScatterModifier": 2,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolL14",
      "RMCMagazinePistolL14AP"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 6.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 6.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.01,
        "maxScatterModifier": 2.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolL54",
    "name": "служебный пистолет L54",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/l54_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 10,
      "burstScatterMult": 5
    },
    "magazines": [
      "RMCMagazinePistolL54"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolL54Custom",
    "name": "L54 custom service pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/l54_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.25,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 10,
      "burstScatterMult": 5
    },
    "magazines": [
      "RMCMagazinePistolL54Custom"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolM13",
    "name": "автоматический пистолет M10",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m13_auto_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 0.75,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "FullAuto"
      ],
      "scatterWielded": 6,
      "scatterUnwielded": 7,
      "baseFireRate": 10,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 40
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolM13",
      "RMCMagazinePistolM13AP",
      "RMCMagazinePistolM13Drum",
      "RMCMagazinePistolM13DrumAP",
      "RMCMagazinePistolM13Ext",
      "RMCMagazinePistolM13ExtAP"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 7.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 4.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 40
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolM77",
    "name": "боевой пистолет 88 Мод 4",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m77_pistol.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "scatterWielded": 8,
      "scatterUnwielded": 8,
      "baseFireRate": 4,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "CMMagazinePistolM77AP",
      "RMCMagazinePistolM77Rubber"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 8.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponPistolM82F",
    "name": "сигнальный пистолет M82-F",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m82f.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "scatterWielded": 0,
      "scatterUnwielded": 0,
      "baseFireRate": 10,
      "burstScatterMult": 0
    },
    "magazines": [
      "CMFlare",
      "RMCFlareC18",
      "RMCFlareCAS",
      "RMCFlareL96",
      "RMCFlareR44",
      "RMCStarShellAsh"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 0.0,
    "scatterUnwielded": 0.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 0.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolMK45",
    "name": "MK-45 'мощный' автомагнум",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/mk45_pistol.yml",
    "fireRate": 1.428,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.4,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 10,
      "scatterUnwielded": 14,
      "baseFireRate": 1.428
    },
    "magazines": [
      "RMCMagazinePistolMK45"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.85,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolNP92",
    "name": "пистолет NP92",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/np92_pistol.yml.yml",
    "fireRate": 3.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.15,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "scatterWielded": 5,
      "scatterUnwielded": 5,
      "baseFireRate": 3.5,
      "burstScatterMult": 5,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolNP92",
      "RMCMagazinePistolNP92Extended"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 5.0,
    "scatterUnwielded": 5.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponPistolNPZ92",
    "name": "пистолет NPZ92",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/np92_pistol.yml.yml",
    "fireRate": 3.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.15,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "scatterWielded": 5,
      "scatterUnwielded": 5,
      "baseFireRate": 3.5,
      "burstScatterMult": 5,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolNP92"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 5.0,
    "scatterUnwielded": 5.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponPistolPK7",
    "name": "PK-7 electrostatic pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/pk7.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 4,
      "scatterUnwielded": 4,
      "baseFireRate": 4
    },
    "magazines": [
      "RMCMagazinePistolPK7"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 4.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponPistolSU6",
    "name": "умный пистолет SU-6",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/su6_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 2,
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 10,
      "burstScatterMult": 5,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolSU6"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponPistolT73",
    "name": "пистолет Тип 73",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/t73_pistol.yml",
    "fireRate": 2.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.3,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "scatterWielded": 5,
      "scatterUnwielded": 5,
      "baseFireRate": 2.5,
      "burstScatterMult": 5,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCMagazinePistolT73"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 5.0,
    "scatterUnwielded": 5.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponPistolT74",
    "name": "пистолет Тип 74",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/t73_pistol.yml",
    "fireRate": 2.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.3,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "scatterWielded": 4,
      "scatterUnwielded": 4,
      "baseFireRate": 2.5,
      "burstScatterMult": 5
    },
    "magazines": [
      "RMCMagazinePistolT73",
      "RMCMagazinePistolT74Impact"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 4.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleABR40",
    "name": "охотничья винтовка ABR-40",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/abr40.yml",
    "fireRate": 2.857,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1.3,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 2,
      "scatterWielded": 6,
      "scatterUnwielded": 16,
      "baseFireRate": 2.857,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleABR40"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 16.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleABR40Tactical",
    "name": "тактическая охотничья винтовка ABR-40",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/abr40.yml",
    "fireRate": 3.33,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1.35,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 2,
      "scatterWielded": 6,
      "scatterUnwielded": 16,
      "baseFireRate": 3.33,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleABR40"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 16.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleL24",
    "name": "винтовка L24",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/L24_rifle.yml",
    "fireRate": 2.75,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 3.4,
      "recoilUnwielded": 4,
      "scatterWielded": 2,
      "scatterUnwielded": 20,
      "baseFireRate": 2.75,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.225,
          "maxScatterModifier": 6,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 6,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL24",
      "RMCMagazineRifleL24AP",
      "RMCMagazineRifleL24Extended",
      "RMCMagazineRifleL24HEAP",
      "RMCMagazineRifleL24Incendiary"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 2.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.225,
        "maxScatterModifier": 6.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 6.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleL24B",
    "name": "винтовка L24B",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/L24B_rifle.yml",
    "fireRate": 2.75,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 2,
      "scatterWielded": 3,
      "scatterUnwielded": 10,
      "baseFireRate": 2.75,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.225,
          "maxScatterModifier": 6,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 6,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL24",
      "RMCMagazineRifleL24AP",
      "RMCMagazineRifleL24Extended",
      "RMCMagazineRifleL24HEAP",
      "RMCMagazineRifleL24Incendiary"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.9,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 3.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.225,
        "maxScatterModifier": 6.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 6.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleL42A",
    "name": "L42A battle rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l42a.yml",
    "fireRate": 2.857,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1.3,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 2,
      "scatterWielded": 6,
      "scatterUnwielded": 20,
      "baseFireRate": 2.857,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL42A",
      "RMCMagazineRifleL42AAP",
      "RMCMagazineRifleL42AExtended",
      "RMCMagazineRifleL42AIncendiary",
      "RMCMagazineRifleL42AWP"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleL83A2",
    "name": "винтовка L83A2",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l83a2_rifle.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.3,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 2,
      "scatterUnwielded": 20,
      "baseFireRate": 4,
      "burstScatterMult": 2,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL83A2",
      "RMCMagazineRifleL83A2AP",
      "RMCMagazineRifleL83A2Extended",
      "RMCMagazineRifleL83A2HEAP",
      "RMCMagazineRifleL83A2Incendiary"
    ],
    "accuracyMult": 1.35,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 2.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 2.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleL83A3",
    "name": "винтовка L83A3",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/L83A3.yml",
    "fireRate": 2.85,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.7,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 3.5,
      "recoilUnwielded": 4,
      "scatterWielded": 6,
      "scatterUnwielded": 20,
      "baseFireRate": 2.85,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL83A3",
      "RMCMagazineRifleL83A3AP",
      "RMCMagazineRifleL83A3Extended",
      "RMCMagazineRifleL83A3HEAP",
      "RMCMagazineRifleL83A3Incendiary"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponRifleL83A3F",
    "name": "винтовка L83A3F",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/L83A3.yml",
    "fireRate": 2.85,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.5,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 3.5,
      "recoilUnwielded": 4,
      "scatterWielded": 2,
      "scatterUnwielded": 20,
      "baseFireRate": 2.85,
      "burstScatterMult": 1.17,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL83A3",
      "RMCMagazineRifleL83A3AP",
      "RMCMagazineRifleL83A3Extended",
      "RMCMagazineRifleL83A3HEAP",
      "RMCMagazineRifleL83A3Incendiary"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 2.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.17,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleL88A1",
    "name": "L88A1 bullpup rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l88.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "FullAuto"
      ],
      "recoilWielded": 4,
      "recoilUnwielded": 4,
      "scatterWielded": 3,
      "scatterUnwielded": 10,
      "baseFireRate": 4.0,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL88",
      "RMCMagazineRifleL88AP"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 3.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleL88A2",
    "name": "L88A2 bullpup rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l88.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "FullAuto"
      ],
      "recoilWielded": 4,
      "recoilUnwielded": 4,
      "scatterWielded": 3,
      "scatterUnwielded": 10,
      "baseFireRate": 4.0,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL88",
      "RMCMagazineRifleL88AP"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 3.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleL89A1",
    "name": "L89A1 marksman rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l89.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.6,
    "falloffMult": 0.0,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 4,
      "recoilUnwielded": 4,
      "scatterWielded": 3,
      "scatterUnwielded": 10,
      "baseFireRate": 4.0,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL88",
      "RMCMagazineRifleL88AP"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 3.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleL89A2",
    "name": "L89A2 marksman rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l89.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.6,
    "falloffMult": 0.0,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 4,
      "recoilUnwielded": 4,
      "scatterWielded": 3,
      "scatterUnwielded": 10,
      "baseFireRate": 4.0,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL88",
      "RMCMagazineRifleL88AP"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 3.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleL90A1",
    "name": "пехотный карабин L90A1",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l90.yml",
    "fireRate": 2.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 3,
      "recoilUnwielded": 3,
      "scatterWielded": 8,
      "scatterUnwielded": 24,
      "baseFireRate": 2.5,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL90",
      "RMCMagazineRifleL90AP",
      "RMCMagazineRifleL90Drum",
      "RMCMagazineRifleL90DrumAP",
      "RMCMagazineRifleL90DrumHEAP",
      "RMCMagazineRifleL90DrumIncendiary",
      "RMCMagazineRifleL90HEAP",
      "RMCMagazineRifleL90Incendiary"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 24.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleL90A2",
    "name": "пехотный карабин L90A2",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l90.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "FullAuto"
      ],
      "recoilWielded": 2.5,
      "recoilUnwielded": 2.5,
      "scatterWielded": 6,
      "scatterUnwielded": 18,
      "baseFireRate": 4,
      "burstScatterMult": 0.23,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL90",
      "RMCMagazineRifleL90AP",
      "RMCMagazineRifleL90Drum",
      "RMCMagazineRifleL90DrumAP",
      "RMCMagazineRifleL90DrumHEAP",
      "RMCMagazineRifleL90DrumIncendiary",
      "RMCMagazineRifleL90HEAP",
      "RMCMagazineRifleL90Incendiary"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 18.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 0.23,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleL91SWS",
    "name": "L91 СП",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l90.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.4,
    "falloffMult": 0.0,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "FullAuto"
      ],
      "recoilWielded": 3,
      "recoilUnwielded": 4.5,
      "scatterWielded": 4,
      "scatterUnwielded": 16,
      "baseFireRate": 2,
      "burstScatterMult": 1.54,
      "modifiers": {
        "FullAuto": {
          "fireDelay": -0.25,
          "maxScatterModifier": 10.4,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 3
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL90",
      "RMCMagazineRifleL90AP",
      "RMCMagazineRifleL90Drum",
      "RMCMagazineRifleL90DrumAP",
      "RMCMagazineRifleL90DrumHEAP",
      "RMCMagazineRifleL90DrumIncendiary",
      "RMCMagazineRifleL90HEAP",
      "RMCMagazineRifleL90Incendiary"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 16.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.54,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": -0.25,
        "maxScatterModifier": 10.4,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 3
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponRifleM16A5",
    "name": "M16A5 Rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m16_rifle.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.3,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 2,
      "scatterUnwielded": 20,
      "baseFireRate": 4,
      "burstScatterMult": 2,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleM16"
    ],
    "accuracyMult": 1.35,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 2.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 2.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleM54C",
    "name": "штурмовая винтовка M41A MK2",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m54c_rifle.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 6,
      "scatterUnwielded": 20,
      "baseFireRate": 4,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineRifleM54C",
      "CMMagazineRifleM54CAP",
      "CMMagazineRifleM54CExt",
      "RMCMagazineRifleM54CHEAP",
      "RMCMagazineRifleM54CIncendiary",
      "RMCMagazineRifleM54CRubber",
      "RMCMagazineRifleM54CWP"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleM54C2",
    "name": "штурмовая винтовка M41A/2 MK2",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m54c2_rifle.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
    "damageMult": 1.25,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 2,
      "scatterUnwielded": 14,
      "baseFireRate": 4,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0666
        }
      }
    },
    "magazines": [
      "CMMagazineRifleM54C",
      "CMMagazineRifleM54CAP",
      "CMMagazineRifleM54CExt",
      "RMCMagazineRifleM54CHEAP",
      "RMCMagazineRifleM54CIncendiary",
      "RMCMagazineRifleM54CRubber",
      "RMCMagazineRifleM54CWP"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 2.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0666,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleM54CE2",
    "name": "тяжёлая штурмовая винтовка M41AE2",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m54c_heavy_rifle.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 5,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 5,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 5,
      "burstScatterMult": 6,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1332,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 14,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 30
        }
      }
    },
    "magazines": [
      "CMMagazineRifleM54CE2",
      "CMMagazineRifleM54CE2AP",
      "CMMagazineRifleM54CE2HT",
      "RMCMagazineRifleM54CE2HEAP",
      "RMCMagazineRifleM54CE2Incendiary",
      "RMCMagazineRifleM54CE2WP"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 6.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1332,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 14.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 30
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleM54CMK1",
    "name": "штурмовая винтовка M41A MK1",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m54c_mk1_rifle.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 4,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 4,
      "scatterUnwielded": 20,
      "baseFireRate": 4,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineRifleM54CMK1",
      "CMMagazineRifleM54CMK1AP",
      "RMCMagazineRifleM54CMK1HEAP",
      "RMCMagazineRifleM54CMK1Incendiary",
      "RMCMagazineRifleM54CMK1Rubber",
      "RMCMagazineRifleM54CMK1WP"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleM59A",
    "name": "импульсная винтовка M46C",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m59a_prototype_rifle.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 4,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 4,
      "scatterUnwielded": 20,
      "baseFireRate": 4,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineRifleM54C",
      "CMMagazineRifleM54CAP",
      "CMMagazineRifleM54CExt",
      "CMMagazineRifleM54CMK1",
      "CMMagazineRifleM54CMK1AP",
      "RMCMagazineRifleM54CHEAP",
      "RMCMagazineRifleM54CIncendiary",
      "RMCMagazineRifleM54CMK1Incendiary",
      "RMCMagazineRifleM54CMK1Rubber",
      "RMCMagazineRifleM54CRubber",
      "RMCMagazineRifleM54CWP"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleMAR30",
    "name": "штурмовая винтовка MAR-30",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/mar30_carbine.yml",
    "fireRate": 2.9,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 0.9,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 10,
      "scatterUnwielded": 14,
      "baseFireRate": 2.9,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleMAR40",
      "RMCMagazineRifleMAR40Ext"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.1665
  },
  {
    "id": "RMCWeaponRifleSSG45",
    "name": "штурмовая винтовка SSG-45",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/ssg45.yml",
    "fireRate": 3.25,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.25,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 2,
      "scatterUnwielded": 20,
      "baseFireRate": 3.25,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 6,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 6,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleSSG45",
      "RMCMagazineRifleSSG45AP",
      "RMCMagazineRifleSSG45Extended",
      "RMCMagazineRifleSSG45HEAP",
      "RMCMagazineRifleSSG45Incend"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 2.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 6.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 6.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleType71",
    "name": "штурмовая винтовка Тип 71",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/type71.yml",
    "fireRate": 2.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 4,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 10,
      "scatterUnwielded": 14,
      "baseFireRate": 2.5,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.2331
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleType71",
      "RMCMagazineRifleType71AP",
      "RMCMagazineRifleType71HEAP",
      "RMCMagazineRifleType71Rubber"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.2331,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleType71PVE",
    "name": "штурмовая винтовка Тип 71 (PVE)",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/type71.yml",
    "fireRate": 3.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 4,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 10,
      "scatterUnwielded": 14,
      "baseFireRate": 3.5,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.2331
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleType71",
      "RMCMagazineRifleType71AP",
      "RMCMagazineRifleType71HEAP",
      "RMCMagazineRifleType71Rubber"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.2331,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleType71C",
    "name": "штурмовая винтовка Тип 71C",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/type71c.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 4,
    "damageMult": 0.8,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 10,
      "scatterUnwielded": 12,
      "baseFireRate": 4,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.2331
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleType71",
      "RMCMagazineRifleType71AP",
      "RMCMagazineRifleType71HEAP",
      "RMCMagazineRifleType71Rubber"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 12.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.2331,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleType71Flamer",
    "name": "штурмовая винтовка Тип 71-F",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/type71.yml",
    "fireRate": 2.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 4,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 10,
      "scatterUnwielded": 14,
      "baseFireRate": 2.5,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.2331
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleType71",
      "RMCMagazineRifleType71AP",
      "RMCMagazineRifleType71HEAP",
      "RMCMagazineRifleType71Rubber"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.2331,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleType73",
    "name": "штурмовая винтовка Тип 71 'Коммандос'",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/type73.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 4,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 0.1,
      "recoilUnwielded": 2,
      "scatterWielded": 6,
      "scatterUnwielded": 14,
      "baseFireRate": 4,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0666
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleType71",
      "RMCMagazineRifleType71AP",
      "RMCMagazineRifleType71HEAP",
      "RMCMagazineRifleType71Rubber"
    ],
    "accuracyMult": 1.35,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0666,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleType77",
    "name": "штурмовая винтовка Тип 77",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/Type77_rifle.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 4,
      "scatterUnwielded": 11,
      "baseFireRate": 4,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleType77",
      "RMCMagazineRifleType77AP",
      "RMCMagazineRifleType77HEAP",
      "RMCMagazineRifleType77Incendiary",
      "RMCMagazineRifleType77Rubber"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 11.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponRifleXM40",
    "name": "штурмовая винтовка XM40",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/xm40.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 2,
      "scatterUnwielded": 14,
      "baseFireRate": 4,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0666
        }
      }
    },
    "magazines": [
      "CMMagazineRifleM54C",
      "CMMagazineRifleM54CAP",
      "CMMagazineRifleM54CExt",
      "RMCMagazineRifleM54CHEAP",
      "RMCMagazineRifleM54CRubber",
      "RMCMagazineRifleM54CWP",
      "RMCMagazineRifleXM40AP",
      "RMCMagazineRifleXM40HEAP"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 2.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0666,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGFP9000",
    "name": "пистолет-пулемет FN FP9000",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/fp9000.yml",
    "fireRate": 6.66,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.05,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 10,
      "scatterUnwielded": 14,
      "baseFireRate": 6.66,
      "burstScatterMult": 7,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGFP9000"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 7.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGFP9000PMC",
    "name": "пистолет-пулемет FN FP9000/2",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/fp9000.yml",
    "fireRate": 6.66,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 8,
      "scatterUnwielded": 14,
      "baseFireRate": 6.66,
      "burstScatterMult": 7,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 2,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 20
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGFP9000"
    ],
    "accuracyMult": 1.35,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 7.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 2.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 20
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGL7A3",
    "name": "L7A3 Submachine Gun",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/L7A3.yml",
    "fireRate": 8.333,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 4,
    "damageMult": 1.35,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 4,
      "scatterUnwielded": 10,
      "baseFireRate": 8.333,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGL7A3SquashHead"
    ],
    "accuracyMult": 1.35,
    "accuracyMultUnwielded": 1.0,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGM63B2",
    "name": "пистолет-пулемет M39B2",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/m63b2_smg.yml",
    "fireRate": 6.666,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.35,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 4,
      "scatterUnwielded": 10,
      "baseFireRate": 6.666,
      "burstScatterMult": 1,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineSMGM63",
      "CMMagazineSMGM63AP",
      "CMMagazineSMGM63Ext",
      "RMCMagazineSMGM63HEAP",
      "RMCMagazineSMGM63Incendiary",
      "RMCMagazineSMGM63Rubber",
      "RMCMagazineSMGM63WP"
    ],
    "accuracyMult": 1.35,
    "accuracyMultUnwielded": 1.0,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "WeaponSMGM63",
    "name": "пистолет-пулемёт M39",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/m63_smg.yml",
    "fireRate": 6.667,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 14,
      "scatterUnwielded": 14,
      "baseFireRate": 6.667,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineSMGM63",
      "CMMagazineSMGM63AP",
      "CMMagazineSMGM63Ext",
      "RMCMagazineSMGM63HEAP",
      "RMCMagazineSMGM63Incendiary",
      "RMCMagazineSMGM63Rubber",
      "RMCMagazineSMGM63WP"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 14.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGMP27",
    "name": "пистолет-пулемет MP27",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/mp27.yml",
    "fireRate": 6.66,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 0.1,
      "recoilUnwielded": 1,
      "scatterWielded": 15,
      "scatterUnwielded": 16,
      "baseFireRate": 6.66,
      "burstScatterMult": 3.5,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGMP27",
      "RMCMagazineSMGMP27Extend"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.9,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 15.0,
    "scatterUnwielded": 16.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.5,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGMP5Alt",
    "name": "пистолет-пулемет MP5A5",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/mp5alt_smg.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 6,
      "scatterUnwielded": 12,
      "baseFireRate": 4,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineSMGMP5"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 12.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGPDW90",
    "name": "FN PDW90 submachine gun",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/pdw90.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 0.1,
      "recoilUnwielded": 1,
      "scatterWielded": 14,
      "scatterUnwielded": 16,
      "baseFireRate": 10,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.098,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGPDW90",
      "RMCMagazineSMGPDW90AP"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.9,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 14.0,
    "scatterUnwielded": 16.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.098,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGPDW90TSE",
    "name": "L57 submachine gun",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/pdw90.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 0.1,
      "recoilUnwielded": 1,
      "scatterWielded": 14,
      "scatterUnwielded": 16,
      "baseFireRate": 10,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.098,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGPDW90",
      "RMCMagazineSMGPDW90AP"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.9,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 14.0,
    "scatterUnwielded": 16.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.098,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGType19",
    "name": "пистолет-пулемет Тип-19",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/type19.yml",
    "fireRate": 6.666,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 0.1,
      "recoilUnwielded": 1,
      "scatterWielded": 10,
      "scatterUnwielded": 16,
      "baseFireRate": 6.666,
      "burstScatterMult": 7,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.098,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGType19",
      "RMCMagazineSMGType19Drum"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 16.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 7.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.098,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGType64",
    "name": "пистолет-пулемет Тип 64",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/type64.yml",
    "fireRate": 6.667,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 14,
      "scatterUnwielded": 14,
      "baseFireRate": 6.667,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGType64",
      "RMCMagazineSMGType64Rubber"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 14.0,
    "scatterUnwielded": 14.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "RMCWeaponSMGUZI",
    "name": "УЗИ",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/uzi.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "FullAuto"
      ],
      "recoilWielded": 0,
      "recoilUnwielded": 1,
      "scatterWielded": 10,
      "scatterUnwielded": 16,
      "baseFireRate": 4,
      "burstScatterMult": 3,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 12,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 50
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGUZI",
      "RMCMagazineSMGUZIExt"
    ],
    "accuracyMult": 1.1,
    "accuracyMultUnwielded": 0.9,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 16.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 12.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 50
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponShotgunL49",
    "name": "L49 assault shotgun",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/l49_combat.yml",
    "fireRate": 0.75,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 0.66,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 8,
      "scatterUnwielded": 16,
      "baseFireRate": 0.75,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs",
      "RMCShellShotgunL49B"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 16.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponShotgunM12",
    "name": "Model 12 pump shotgun",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/model_12.yml",
    "fireRate": 0.625,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 0.625,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponShotgunM3717",
    "name": "помповое ружье M37-17",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m3717.yml",
    "fireRate": 0.625,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1.15,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 0.625,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponShotgunM42A2",
    "name": "помповый дробовик M42A2",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m42a2_shotgun.yml",
    "fireRate": 0.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 0.5,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponShotgunM890",
    "name": "тактический дробовик M890",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m890_shotgun.yml",
    "fireRate": 0.7,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 5,
      "scatterUnwielded": 10,
      "baseFireRate": 0.7,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs",
      "RMCShellShotgunBreaching",
      "RMCShellShotgunHeavyBeanbag",
      "RMCShellShotgunHeavyBuckshot",
      "RMCShellShotgunHeavyFlechette",
      "RMCShellShotgunHeavySlugs",
      "RMCShellShotgunIncendiaryHeavyBuckshot",
      "RMCShellShotgunL49B"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 5.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponShotgunSyracuse",
    "name": "Syracuse pump-action shotgun",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/syracuse_shotgun.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 2,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponShotgunType23",
    "name": "дробовик Тип 23",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/type23.yml",
    "fireRate": 0.4,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 5,
      "recoilUnwielded": 5,
      "scatterWielded": 14,
      "scatterUnwielded": 30,
      "baseFireRate": 0.4,
      "burstScatterMult": 5
    },
    "magazines": [
      "RMCShellShotgunHeavyBeanbag",
      "RMCShellShotgunHeavyBuckshot",
      "RMCShellShotgunHeavyFlechette",
      "RMCShellShotgunHeavySlugs",
      "RMCShellShotgunIncendiaryHeavyBuckshot"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 14.0,
    "scatterUnwielded": 30.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponShotgunXM38",
    "name": "тактический дробовик XM38",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/xm38_shotgun.yml",
    "fireRate": 1.666,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "FullAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 1.666,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs",
      "RMCShellShotgunBreaching",
      "RMCShellShotgunHeavyBeanbag",
      "RMCShellShotgunHeavyBuckshot",
      "RMCShellShotgunHeavyFlechette",
      "RMCShellShotgunHeavySlugs",
      "RMCShellShotgunIncendiaryHeavyBuckshot",
      "RMCShellShotgunL49B"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.95,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCWeaponShotgunXM51",
    "name": "разрывное ружьё XM51",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/xm51_shotgun.yml",
    "fireRate": 0.625,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 30,
      "baseFireRate": 0.625,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      },
      "burstFireRateMultiplier": 25
    },
    "magazines": [
      "RMCMagazineShotgunXM51"
    ],
    "accuracyMult": 1.8,
    "accuracyMultUnwielded": 0.6,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 25.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 30.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": null
  },
  {
    "id": "RMCXM43E1AntiMaterielRifle",
    "name": "антиматериальная винтовка XM43E1",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/xm43e1_anti_materiel_rifle.yml",
    "fireRate": 0.335,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 0,
      "scatterUnwielded": 20,
      "baseFireRate": 0.335,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSniperXM43E1AntiMateriel"
    ],
    "accuracyMult": 3.0,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 0.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "STWeaponSharpRifle",
    "name": "винтовка P9 SHARP",
    "category": "SHARP",
    "file": "_Stories/Entities/Objects/Weapons/Guns/Sharp/sharp_weapon.yml",
    "fireRate": 0.3425,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "baseFireRate": 0.3425,
      "recoilWielded": 0.1,
      "scatterWielded": 0.1,
      "burstScatterMult": 4
    },
    "magazines": [
      "STMagazineSharpRifleExplosive",
      "STMagazineSharpRifleFlechette",
      "STMagazineSharpRifleIncendiary"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 0.1,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponLauncherM83",
    "name": "гранатомет M83",
    "category": "Гранатомёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Launchers/m83_grenade_launcher.yml",
    "fireRate": 0.675,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": null,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "baseFireRate": 0.675
    },
    "magazines": [
      "RMC40MMGrenadeM74AGMF",
      "RMC40MMGrenadeM74AGMI",
      "RMC40MMGrenadeM74AGMS",
      "RMCBatonSlugHIRR",
      "RMCHornetShellM74AGMS",
      "RMCStarShellM74AGMS"
    ],
    "accuracyMult": 1,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponNailgun",
    "name": "гвоздомёт",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/nailgun.yml",
    "fireRate": 2.4,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 6,
      "scatterUnwielded": 12,
      "baseFireRate": 2.4,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGNailgun"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 1.2,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 12.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "WeaponRifleAR10",
    "name": "штурмовая винтовка AR10",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/ar10_rifle.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.4,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 4,
      "scatterUnwielded": 20,
      "baseFireRate": 2,
      "burstScatterMult": 2,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleAR10"
    ],
    "accuracyMult": 1.4,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 2.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "WeaponRifleL83A3M",
    "name": "винтовка L83A3M",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/L83A3.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 1.7,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 3.5,
      "recoilUnwielded": 4,
      "scatterWielded": 6,
      "scatterUnwielded": 20,
      "baseFireRate": 4,
      "burstScatterMult": 4,
      "modifiers": {
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleL83A3",
      "RMCMagazineRifleL83A3AP",
      "RMCMagazineRifleL83A3Extended",
      "RMCMagazineRifleL83A3HEAP",
      "RMCMagazineRifleL83A3Incendiary"
    ],
    "accuracyMult": 1.3,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponRifleM16",
    "name": "винтовка M16",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m16_rifle.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.3,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 2,
      "scatterUnwielded": 20,
      "baseFireRate": 4,
      "burstScatterMult": 2,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "fireDelay": 0,
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleM16"
    ],
    "accuracyMult": 1.35,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 2.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 2.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "WeaponRifleM4SPR",
    "name": "боевая винтовка M4RA",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m4spr_rifle.yml",
    "fireRate": 2.86,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 0.0,
    "damageMult": 1.4,
    "falloffMult": 0.0,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 2,
      "scatterWielded": 6,
      "scatterUnwielded": 20,
      "baseFireRate": 2.86,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineRifleM4SPR",
      "CMMagazineRifleM4SPRAP",
      "CMMagazineRifleM4SPRExt",
      "RMCMagazineRifleM4SPRHEAP",
      "RMCMagazineRifleM4SPRIncendiary",
      "RMCMagazineRifleM4SPRRubber",
      "RMCMagazineRifleM4SPRWP"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 0.6,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponRifleM4SPRCustom",
    "name": "модифицированная боевая винтовка M4RA",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m4spr_scout_rifle.yml",
    "fireRate": 1.8,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2.0,
    "damageMult": 1.1,
    "falloffMult": 0.0,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 2.5,
      "scatterUnwielded": 8,
      "baseFireRate": 1.8,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      },
      "burstFireRateMultiplier": 15
    },
    "magazines": [
      "CMMagazineRifleM4SPR",
      "CMMagazineRifleM4SPRAP",
      "CMMagazineRifleM4SPRExt",
      "RMCMagazineRifleM4SPRA19",
      "RMCMagazineRifleM4SPRA19Impact",
      "RMCMagazineRifleM4SPRA19Incendiary",
      "RMCMagazineRifleM4SPRRubber"
    ],
    "accuracyMult": 1.1,
    "accuracyMultUnwielded": 0.6,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 15.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 2.5,
    "scatterUnwielded": 8.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponRifleM5SPR",
    "name": "Боевая винтовка M5RA",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m4spr_rifle.yml",
    "fireRate": 2.86,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
    "damageMult": 1.4,
    "falloffMult": 0.0,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 2,
      "scatterWielded": 6,
      "scatterUnwielded": 20,
      "baseFireRate": 2.86,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      },
      "burstFireRateMultiplier": 5
    },
    "magazines": [
      "CMMagazineRifleM4SPR",
      "CMMagazineRifleM4SPRAP",
      "CMMagazineRifleM4SPRExt",
      "RMCMagazineRifleM4SPRHEAP",
      "RMCMagazineRifleM4SPRIncendiary",
      "RMCMagazineRifleM4SPRRubber",
      "RMCMagazineRifleM4SPRWP",
      "RMCMagazineRifleM5SPRHVHIP",
      "RMCMagazineRifleM5SPRHVP"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 0.6,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 5.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.75
  },
  {
    "id": "WeaponRifleM5SPR2",
    "name": "M5SPR/2 battle rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m4spr_rifle.yml",
    "fireRate": 2.8,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
    "damageMult": 1.4,
    "falloffMult": 0.0,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 4,
      "scatterUnwielded": 20,
      "baseFireRate": 2.8,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      },
      "burstFireRateMultiplier": 5
    },
    "magazines": [
      "CMMagazineRifleM4SPR",
      "CMMagazineRifleM4SPRAP",
      "CMMagazineRifleM4SPRExt",
      "RMCMagazineRifleM4SPRHEAP",
      "RMCMagazineRifleM4SPRIncendiary",
      "RMCMagazineRifleM4SPRRubber",
      "RMCMagazineRifleM4SPRWP",
      "RMCMagazineRifleM5SPRHVHIP",
      "RMCMagazineRifleM5SPRHVP"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 0.6,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 5.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.75
  },
  {
    "id": "WeaponRifleMAR40",
    "name": "боевая винтовка MAR-40",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/mar40_rifle.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 4,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 2,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCMagazineRifleMAR40",
      "RMCMagazineRifleMAR40Ext"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.65,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.1665
  },
  {
    "id": "WeaponRifleXM88",
    "name": "тяжелая винтовка XM88",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/xm88_rifle.yml",
    "fireRate": 1.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 3,
      "recoilUnwielded": 5,
      "scatterWielded": 6,
      "scatterUnwielded": 20,
      "baseFireRate": 1,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 13,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "RMCCartridge458SOCOM"
    ],
    "accuracyMult": 1.25,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 13.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponSMGMAC15",
    "name": "пистолет-пулемет MAC-15",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/mac15.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3.0,
    "damageMult": 0.9,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "FullAuto"
      ],
      "recoilWielded": 0,
      "recoilUnwielded": 0,
      "scatterWielded": 12,
      "scatterUnwielded": 10,
      "baseFireRate": 10,
      "burstScatterMult": 3,
      "modifiers": {
        "FullAuto": {
          "maxScatterModifier": 16,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 70
        }
      }
    },
    "magazines": [
      "RMCMagazineSMGMAC15",
      "RMCMagazineSMGMAC15Ext"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 1.0,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 12.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 16.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 70
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponSMGMP5",
    "name": "пистолет-пулемёт MP5",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/mp5_smg.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst",
        "FullAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 1,
      "scatterWielded": 6,
      "scatterUnwielded": 12,
      "baseFireRate": 4,
      "burstScatterMult": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.0999,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        },
        "FullAuto": {
          "maxScatterModifier": 3,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 4
        }
      }
    },
    "magazines": [
      "CMMagazineSMGMP5"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.8,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst",
      "FullAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
    "scatterUnwielded": 12.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 3.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.0999,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 3.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "WeaponShotgunCustomBuilt",
    "name": "изготовленное на заказ ружье",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/custombuilt.yml",
    "fireRate": 0.85,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto",
        "Burst"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 0.85,
      "burstScatterMult": 4,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1665
        }
      }
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs",
      "RMCShellShotgunBreaching",
      "RMCShellShotgunHeavyBeanbag",
      "RMCShellShotgunHeavyBuckshot",
      "RMCShellShotgunHeavyFlechette",
      "RMCShellShotgunHeavySlugs",
      "RMCShellShotgunIncendiaryHeavyBuckshot",
      "RMCShellShotgunL49B"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 4.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1665,
        "maxScatterModifier": 0.0,
        "useBurstScatterMult": false,
        "unwieldedScatterMultiplier": 0.0,
        "shotsToMaxScatter": null
      }
    },
    "burstCooldown": 0.0
  },
  {
    "id": "WeaponShotgunM357",
    "name": "конкурент M357",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m357_shotgun.yml",
    "fireRate": 0.7,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 0.7,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs",
      "RMCShellShotgunBreaching",
      "RMCShellShotgunHeavyBeanbag",
      "RMCShellShotgunHeavyBuckshot",
      "RMCShellShotgunHeavyFlechette",
      "RMCShellShotgunHeavySlugs",
      "RMCShellShotgunIncendiaryHeavyBuckshot",
      "RMCShellShotgunL49B"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponShotgunM357Sawn",
    "name": "распиленный конкурент M357",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m357_sawn_off_shotgun.yml",
    "fireRate": 0.7,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2.0,
    "damageMult": 0.8,
    "falloffMult": 2.0,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 3,
      "recoilUnwielded": 5,
      "scatterWielded": 10,
      "scatterUnwielded": 20,
      "baseFireRate": 0.7,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs",
      "RMCShellShotgunBreaching",
      "RMCShellShotgunHeavyBeanbag",
      "RMCShellShotgunHeavyBuckshot",
      "RMCShellShotgunHeavyFlechette",
      "RMCShellShotgunHeavySlugs",
      "RMCShellShotgunIncendiaryHeavyBuckshot",
      "RMCShellShotgunL49B"
    ],
    "accuracyMult": 0.9,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponShotgunM42A1",
    "name": "дробовик M42A1",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m42a1_shotgun.yml",
    "fireRate": 0.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 10,
      "scatterUnwielded": 10,
      "baseFireRate": 0.5,
      "burstScatterMult": 5
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunBuckshot",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunIncendiaryBuckshot",
      "CMShellShotgunSlugs"
    ],
    "accuracyMult": 1.15,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 10.0,
    "scatterUnwielded": 10.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  },
  {
    "id": "WeaponShotgunMOU53",
    "name": "разборный дробовик MOU53",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/mou53_shotgun.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1.0,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 2,
      "recoilUnwielded": 4,
      "scatterWielded": 9,
      "scatterUnwielded": 18,
      "baseFireRate": 4,
      "burstScatterMult": 1
    },
    "magazines": [
      "CMShellShotgunBeanbag",
      "CMShellShotgunFlechette",
      "CMShellShotgunIncendiary",
      "CMShellShotgunSlugs"
    ],
    "accuracyMult": 1.0,
    "accuracyMultUnwielded": 0.5,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 9.0,
    "scatterUnwielded": 18.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 1.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      },
      "FullAuto": {
        "fireDelay": 0.0,
        "maxScatterModifier": 26.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 4
      }
    },
    "burstCooldown": null
  }
];
