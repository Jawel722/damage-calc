const GUNS = [
  {
    "id": "CMM96CSniperRifle",
    "name": "модифицированная снайперская винтовка M96C",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/m96c_sniper.yml",
    "fireRate": 0.333,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": true,
        "starting": "RMCM96SIntegratedScope",
        "allowed": [
          "RMCM96SIntegratedScope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBipod"
        ]
      }
    },
    "tags": [
      "CMM96CSniperRifle"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "CMM96SSniperRifle",
    "name": "снайперская винтовка M96S",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/m96s_sniper.yml",
    "fireRate": 0.667,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
      "CMMagazineSniperM96SIncendiary",
      "CMMagazineSniperM96SFlak"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": true,
        "starting": "RMCM96SIntegratedScope",
        "allowed": [
          "RMCM96SIntegratedScope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBipod"
        ]
      }
    },
    "tags": [
      "CMM96SSniperRifle"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "CMWeaponPistolM1911",
    "name": "M1911 service pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m1911_pistol.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "CMWeaponPistolM1911"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "CMWeaponPistolM1984",
    "name": "служебный пистолет M4A3",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m1984_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "CMWeaponPistolM1984"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "CMWeaponPistolM1984Custom",
    "name": "индивидуальный служебный пистолет M4A3",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m1984_custom_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "CMWeaponPistolM1984"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCAttachmentL90UBS",
    "name": "L90U1 подствольный дробовик",
    "category": "Подствольные",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Attachments/under_attachments.yml",
    "fireRate": 0.66,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.25,
    "attachmentSlots": {},
    "tags": [
      "RMCAttachmentUnderbarrel",
      "RMCAttachmentL90UBS"
    ],
    "skillAccuracyPerLevel": 0,
    "unskilledPenalty": null,
    "gunBurstFireRate": 8,
    "internalCapacity": 5,
    "wieldable": false
  },
  {
    "id": "RMCAttachmentU7UnderbarrelShotgun",
    "name": "подствольный дробовик U7",
    "category": "Подствольные",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Attachments/under_attachments.yml",
    "fireRate": 0.476,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.25,
    "attachmentSlots": {},
    "tags": [
      "RMCAttachmentUnderbarrel",
      "RMCAttachmentU7UnderbarrelShotgun"
    ],
    "skillAccuracyPerLevel": 0,
    "unskilledPenalty": null,
    "gunBurstFireRate": 8,
    "internalCapacity": 5,
    "wieldable": false
  },
  {
    "id": "RMCL112SniperRifle",
    "name": "L112A2 designated marksman rifle",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/l112_sniper.yml",
    "fireRate": 3.8,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": true,
        "starting": "RMCL112IntegratedScope",
        "allowed": [
          "RMCL112IntegratedScope"
        ]
      },
      "barrel": {
        "locked": false,
        "starting": "RMCAttachmentExtendedBarrel",
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [
      "RMCL112SniperRifle"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCL112SniperRifleSuppressed",
    "name": "L112A1 designated marksman rifle",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/l112_sniper.yml",
    "fireRate": 3.8,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": true,
        "starting": "RMCL112IntegratedScope",
        "allowed": [
          "RMCL112IntegratedScope"
        ]
      },
      "barrel": {
        "locked": true,
        "starting": "RMCAttachmentSuppressorL112",
        "allowed": [
          "RMCAttachmentSuppressorL112"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBipod"
        ]
      }
    },
    "tags": [
      "RMCL112SniperRifle",
      "RMCL112SniperRifleSuppressed"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCM96SBSniperRifle",
    "name": "винтовка M96S-B с глушителем и оптическим прицелом",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/m96sb_sniper.yml",
    "fireRate": 0.667,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
      "CMMagazineSniperM96SIncendiary",
      "CMMagazineSniperM96SFlak"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": true,
        "starting": "RMCM96SIntegratedScope",
        "allowed": [
          "RMCM96SIntegratedScope"
        ]
      },
      "barrel": {
        "locked": true,
        "starting": "RMCAttachmentSuppressorM96SB",
        "allowed": [
          "RMCAttachmentSuppressorM96SB"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBipod"
        ]
      }
    },
    "tags": [
      "CMM96SSniperRifle"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": true,
        "starting": "RMCAttachmentLaserLightModule",
        "allowed": [
          "RMCAttachmentLaserLightModule"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCMK80"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": true,
        "starting": "RMCAttachmentLaserLightModule",
        "allowed": [
          "RMCAttachmentLaserLightModule"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCMK80"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCMachineGunM2C",
    "name": "станковый пулемет M2C",
    "category": "Станковые пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/HMGs/m2c.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {},
    "tags": [
      "RMCMachineGunM2C"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 0,
      "accuracyAddMult": 0.0,
      "scatterFlat": 0.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": false
  },
  {
    "id": "RMCSmartGunMode0",
    "name": "ML66A smart gun (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunMode1",
    "name": "ML66A smart gun (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunCLFMode0",
    "name": "умная пушка M56B \"Свобода\" (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunCLFMode1",
    "name": "умная пушка M56B \"Свобода\" (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunCOMode0",
    "name": "умная пушка M56B \"Кавалер\" (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunCOMode1",
    "name": "умная пушка M56B \"Кавалер\" (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunMounted",
    "name": "станковый пулемет M56D",
    "category": "Станковые пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/HMGs/ml66d.yml",
    "fireRate": 3.33,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {},
    "tags": [
      "RMCSmartGunMounted"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 0,
      "accuracyAddMult": 0.0,
      "scatterFlat": 0.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": false
  },
  {
    "id": "RMCSmartGunMountedStatic",
    "name": "станковый пулемет M56D (стационарный)",
    "category": "Станковые пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/HMGs/ml66d.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {},
    "tags": [
      "RMCSmartGunMounted"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 0,
      "accuracyAddMult": 0.0,
      "scatterFlat": 0.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": false
  },
  {
    "id": "RMCSmartGunOvertunedPVEMode0",
    "name": "ML66OT heavy support gun (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunOvertunedPVEMode1",
    "name": "ML66OT heavy support gun (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunPMCMode0",
    "name": "ML79A smart gun (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunPMCMode1",
    "name": "ML79A smart gun (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunPMCPVEMode0",
    "name": "ML79A heavy support gun (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunPMCPVEMode1",
    "name": "ML79A heavy support gun (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunPVEMode0",
    "name": "ML66A heavy support gun (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunPVEMode1",
    "name": "ML66A heavy support gun (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunRCMPVEMode0",
    "name": "ML66C general purpose machine gun (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunRCMPVEMode1",
    "name": "ML66C general purpose machine gun (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun_pve.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunRoyalMode0",
    "name": "умная пушка M56B \"королевский\" (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunRoyalMode1",
    "name": "умная пушка M56B \"королевский\" (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 5.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunWhiteOutMode0",
    "name": "умная пушка M56B (высокоточный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode0",
      "RMCMagazineSmartGunHTMode0",
      "RMCMagazineSmartGunirradiatedMode0"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCSmartGunWhiteOutMode1",
    "name": "умная пушка M56B (бронебойный режим)",
    "category": "Смартганы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SmartGuns/smart_gun.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
      "RMCMagazineSmartGunMode1",
      "RMCMagazineSmartGunHTMode1",
      "RMCMagazineSmartGunirradiatedMode1"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCType88SniperRifle",
    "name": "снайперская винтовка разведчика Типа 88",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/type88_sniper.yml",
    "fireRate": 1.6675,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": true,
        "starting": "RMCType88IntegratedScope",
        "allowed": [
          "RMCType88IntegratedScope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBipod",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [
      "RMCType88SniperRifle"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponBoltActionRifle",
    "name": "охотничья винтовка Басира-Армстронг с продольно-скользящим затвором",
    "category": "Болтовые винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/BoltAction/hunting_rifle.yml",
    "fireRate": 1.25,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": "RMCAttachmentMiniscopeHunting",
        "allowed": [
          "RMCAttachmentHuntingScope",
          "RMCAttachmentMiniscopeHunting",
          "RMCAttachmentS84xTelescopicScope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentHuntingStock",
        "allowed": [
          "RMCAttachmentHuntingStock"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "underbarrel": {
        "locked": false,
        "starting": "RMCAttachmentBipod",
        "allowed": [
          "RMCAttachmentBipod"
        ]
      }
    },
    "tags": [
      "RMCWeaponLMGM60"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "underbarrel": {
        "locked": true,
        "starting": "RMCAttachmentBipodQYJ",
        "allowed": [
          "RMCAttachmentBipodQYJ"
        ]
      }
    },
    "tags": [
      "RMCWeaponLMGQYJ72"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": true,
        "starting": "RMCAttachmentBarrelMar50",
        "allowed": [
          "RMCAttachmentBarrelMar50"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      }
    },
    "tags": [
      "RMCWeaponMar50LMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolB92FS",
    "name": "беретта 92FS",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/b92fs.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCb92fs"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolD18",
    "name": "D18 Колибри",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/hummingbird.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      }
    },
    "tags": [
      "Holdout",
      "RMCWeaponPistolD18"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolHG45Aguila",
    "name": "пистолет HG-45 \"Аквила\"",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/hg45_Aguila_pistol.yml",
    "fireRate": 1.428,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight",
          "RMCAttachmentGyroscopicStabilizer"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCMK45"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolHG45Marina",
    "name": "пистолет HG-45 \"Марина\"",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/hg45_Marina_pistol.yml",
    "fireRate": 1.428,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight",
          "RMCAttachmentGyroscopicStabilizer"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCMK45"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolHandcannon"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolHandcannonGold"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolHandcannonWyvern"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": false
  },
  {
    "id": "RMCWeaponPistolHoldout",
    "name": "пистолет-держатель",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/holdout_pistol.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Holdout"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolKT42",
    "name": "автомаг КТ-42",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/kt42_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolKT42"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolL14",
    "name": "L14 combat pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/l14_pistol.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
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
    "burstCooldown": 0.33,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolL14"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolL14Custom",
    "name": "L14 custom combat pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/l14_pistol.yml",
    "fireRate": 6.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
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
    "burstCooldown": 0.33,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolL14"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolL54",
    "name": "служебный пистолет L54",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/l54_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolL54"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolL54Custom",
    "name": "L54 custom service pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/l54_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolL54"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolM13",
    "name": "автоматический пистолет M10",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/m13_auto_pistol.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentRecoilCompensatorM13"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5MicroRedDotSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMicroLaserSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM13StockCollapsible",
          "RMCAttachmentM13StockSolid"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolM13"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolM77"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolMK45",
    "name": "MK-45 'мощный' автомагнум",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/mk45_pistol.yml",
    "fireRate": 1.428,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight",
          "RMCAttachmentGyroscopicStabilizer"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCMK45"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolNP92"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": true,
        "starting": "RMCAttachmentSuppressorNPZ92",
        "allowed": [
          "RMCAttachmentSuppressorNPZ92"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolNPZ92"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolPK7",
    "name": "PK-7 electrostatic pistol",
    "category": "Пистолеты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Pistols/pk7.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolPK7"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCSmartPistol"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolT73"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponPistolT74",
    "name": "пистолет Тип 74",
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCWeaponPistolT74"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleABR40",
    "name": "охотничья винтовка ABR-40",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/abr40.yml",
    "fireRate": 2.857,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleABR40Tactical",
    "name": "тактическая охотничья винтовка ABR-40",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/abr40.yml",
    "fireRate": 3.33,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentL24Stock",
        "allowed": [
          "RMCAttachmentL24Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentU1GrenadeLauncher"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentL24BStock",
        "allowed": [
          "RMCAttachmentL24BStock"
        ]
      },
      "underbarrel": {
        "locked": true,
        "starting": "RMCAttachmentU7UnderbarrelShotgun",
        "allowed": [
          "RMCAttachmentU7UnderbarrelShotgun"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleL42A",
    "name": "L42A battle rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l42a.yml",
    "fireRate": 2.857,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentB8SmartScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentL83A2Stock",
        "allowed": [
          "RMCAttachmentL83A2Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentBipod",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentLaserSight",
          "RMCAttachmentM203GrenadeLauncher"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleL83A3",
    "name": "винтовка L83A3",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/L83A3.yml",
    "fireRate": 2.85,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentRecoilCompensator",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentL83A3Stock",
        "allowed": [
          "RMCAttachmentL83A3Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentBipod",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentLaserSight",
          "RMCAttachmentM203GrenadeLauncher"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentL83A3Stock",
        "allowed": [
          "RMCAttachmentL83A3Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentBipod",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentLaserSight",
          "RMCAttachmentM203GrenadeLauncher"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleL88A1",
    "name": "L88A1 bullpup rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l88.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": true,
        "starting": "RMCAttachmentL88Grip",
        "allowed": [
          "RMCAttachmentL88Grip"
        ]
      }
    },
    "tags": [
      "RMCRifleL88",
      "RMCRifleL88A1"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleL88A2",
    "name": "L88A2 bullpup rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l88.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentBipod",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentLaserSight",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun"
        ]
      }
    },
    "tags": [
      "RMCRifleL88",
      "RMCRifleL88A2"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleL89A1",
    "name": "L89A1 marksman rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l89.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": true,
        "starting": "RMCAttachmentL89Scope",
        "allowed": [
          "RMCAttachmentL89Scope"
        ]
      },
      "underbarrel": {
        "locked": true,
        "starting": "RMCAttachmentL88Grip",
        "allowed": [
          "RMCAttachmentL88Grip"
        ]
      }
    },
    "tags": [
      "RMCRifleL89",
      "RMCRifleL89A1"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleL89A2",
    "name": "L89A2 marksman rifle",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l89.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": true,
        "starting": "RMCAttachmentL89Scope",
        "allowed": [
          "RMCAttachmentL89Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "RMCRifleL89",
      "RMCRifleL89A2"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleL90A1",
    "name": "пехотный карабин L90A1",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l90.yml",
    "fireRate": 2.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": "RMCAttachmentL90GL",
        "allowed": [
          "RMCAttachmentL90GL",
          "RMCAttachmentL90UBS",
          "RMCAttachmentL90UBF"
        ]
      }
    },
    "tags": [
      "RMCRifleL90",
      "RMCRifleL90A1"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleL90A2",
    "name": "пехотный карабин L90A2",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l90.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": "RMCAttachmentL90GL",
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentBipod",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentLaserSight",
          "RMCAttachmentL90GL",
          "RMCAttachmentL90UBS",
          "RMCAttachmentL90UBF"
        ]
      }
    },
    "tags": [
      "RMCRifleL90",
      "RMCRifleL90A2"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRifleL91SWS",
    "name": "L91 СП",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/l90.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentSASOS"
        ]
      },
      "underbarrel": {
        "locked": true,
        "starting": "RMCAttachmentL91Bipod",
        "allowed": [
          "RMCAttachmentL91Bipod"
        ]
      }
    },
    "tags": [
      "RMCRifleL91SWS"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentM16A5Stock",
        "allowed": [
          "RMCAttachmentM16A5Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentBipod",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentLaserSight",
          "RMCAttachmentM203GrenadeLauncher"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentM54CStockCollapsible",
        "allowed": [
          "RMCAttachmentM54CStockSolid",
          "RMCAttachmentM54CStockCollapsible"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": "RMCAttachmentU1GrenadeLauncher",
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleM54CMK2"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentM54CStockCollapsible",
        "allowed": [
          "RMCAttachmentM54CStockCollapsible"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleM54C2"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": "RMCAttachmentBipod",
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleM54CE2"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentM54CStockCollapsible",
        "allowed": [
          "RMCAttachmentM54CStockCollapsible"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": "RMCAttachmentMK1GrenadeLauncher",
        "allowed": [
          "RMCAttachmentMK1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleM54CMK1"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentM54CStockCollapsible",
        "allowed": [
          "RMCAttachmentM54CStockCollapsible"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleM59A"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.1665,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentS84xTelescopicScope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": "RMCAttachmentMiniFlamethrower",
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleSSG45"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentType71Stock",
        "allowed": [
          "RMCAttachmentType71Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentBurstFireAssembly"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleType71"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentType71Stock",
        "allowed": [
          "RMCAttachmentType71Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentBurstFireAssembly"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleType71PVE"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentExtendedCompensator",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentBurstFireAssembly"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleType71C"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentType71Stock",
        "allowed": [
          "RMCAttachmentType71Stock"
        ]
      },
      "underbarrel": {
        "locked": true,
        "starting": "RMCAttachmentMiniFlamethrower",
        "allowed": [
          "RMCAttachmentMiniFlamethrower"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleType71"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": true,
        "starting": "RMCAttachmentSuppressor",
        "allowed": [
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40"
        ]
      },
      "rail": {
        "locked": true,
        "starting": "RMCAttachmentS42xTelescopicMiniscope",
        "allowed": [
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentBurstFireAssembly"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleType73"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentType77StockCollapsible",
        "allowed": [
          "RMCAttachmentType77StockCollapsible"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleType77"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": true,
        "starting": "RMCAttachmentSuppressorXM40",
        "allowed": [
          "RMCAttachmentSuppressorXM40"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleXM40"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentRecoilCompensator"
        ]
      },
      "rail": {
        "locked": true,
        "starting": "RMCAttachmentFP9000Scope",
        "allowed": [
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentM63StockCollapsible",
        "allowed": [
          "RMCAttachmentM63StockCollapsible"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG",
      "RMCWeaponSMGL7A3"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": "RMCAttachmentExtendedBarrel",
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": "RMCAttachmentMagneticHarness",
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentM63Stock",
        "allowed": [
          "RMCAttachmentM63ArmBrace",
          "RMCAttachmentM63Stock",
          "RMCAttachmentM63StockCollapsible"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": "RMCAttachmentAngledGrip",
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG",
      "RMCWeaponSMGM63B2"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentM63StockCollapsible",
        "allowed": [
          "RMCAttachmentM63ArmBrace",
          "RMCAttachmentM63Stock",
          "RMCAttachmentM63StockCollapsible"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG",
      "RMCWeaponSMGM63"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentBipod",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentBipod",
          "RMCAttachmentM203GrenadeLauncher",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentMP5AltStockCollapsible",
        "allowed": [
          "RMCAttachmentMP5AltStockCollapsible"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentRailFlashlight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG",
      "RMCWeaponSMGType64"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponSMGUZI",
    "name": "УЗИ",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/uzi.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBurstFireAssembly"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCWeaponShotgunL49",
    "name": "L49 assault shotgun",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/l49_combat.yml",
    "fireRate": 0.75,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": true,
        "starting": "RMCAttachmentL49Barrel",
        "allowed": [
          "RMCAttachmentL49Barrel"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentL49Stock",
        "allowed": [
          "RMCAttachmentL49Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunL49",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 5,
    "wieldable": true
  },
  {
    "id": "RMCWeaponShotgunM12",
    "name": "Model 12 pump shotgun",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/model_12.yml",
    "fireRate": 0.625,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentRecoilCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentModel12Stock",
        "allowed": [
          "RMCAttachmentModel12Stock"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunModel12",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 8,
    "wieldable": true
  },
  {
    "id": "RMCWeaponShotgunM3717",
    "name": "помповое ружье M37-17",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m3717.yml",
    "fireRate": 0.625,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentRecoilCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunM3717",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 10,
    "wieldable": true
  },
  {
    "id": "WeaponShotgunM42A2",
    "name": "помповый дробовик M42A2",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m42a2_shotgun.yml",
    "fireRate": 0.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentShotgunChoke",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM42A2CollapsibleStock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunM42A2",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 10,
    "wieldable": true
  },
  {
    "id": "WeaponShotgunM890",
    "name": "тактический дробовик M890",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m890_shotgun.yml",
    "fireRate": 0.7,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentM890Stock",
        "allowed": [
          "RMCAttachmentM890Stock"
        ]
      },
      "underbarrel": {
        "locked": true,
        "starting": "RMCAttachmentU1GrenadeLauncher",
        "allowed": [
          "RMCAttachmentU1GrenadeLauncher"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 8,
    "wieldable": true
  },
  {
    "id": "RMCWeaponShotgunSyracuse",
    "name": "Syracuse pump-action shotgun",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/syracuse_shotgun.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentShotgunChoke",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM42A1WoodenStock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunSyracuse",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 5,
    "wieldable": true
  },
  {
    "id": "RMCWeaponShotgunType23",
    "name": "дробовик Тип 23",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/type23.yml",
    "fireRate": 0.4,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentRecoilCompensator",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentType23Stock",
        "allowed": [
          "RMCAttachmentType23Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentBurstFireAssembly"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunType23",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 5,
    "wieldable": true
  },
  {
    "id": "RMCWeaponShotgunXM38",
    "name": "тактический дробовик XM38",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/xm38_shotgun.yml",
    "fireRate": 1.666,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedBarrel",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentMK221Stock",
        "allowed": [
          "RMCAttachmentMK221Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 10,
    "wieldable": true
  },
  {
    "id": "RMCWeaponShotgunXM51",
    "name": "разрывное ружьё XM51",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/xm51_shotgun.yml",
    "fireRate": 0.625,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
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
    "burstCooldown": 1.5,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentXM51Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentAngledGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgun",
      "RMCWeaponShotgunXM51",
      "RMCXM51StockBurst"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "RMCXM43E1AntiMaterielRifle",
    "name": "антиматериальная винтовка XM43E1",
    "category": "Снайперские винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Snipers/xm43e1_anti_materiel_rifle.yml",
    "fireRate": 0.335,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": true,
        "starting": "RMCXM43E1IntegratedScope",
        "allowed": [
          "RMCXM43E1IntegratedScope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBipod"
        ]
      }
    },
    "tags": [
      "RMCXM43E1AntiMaterielRifle"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {},
    "tags": [
      "RMCWeaponSMGNailgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "WeaponRifleL83A3M",
    "name": "винтовка L83A3M",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/L83A3.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": "RMCAttachmentSuppressor",
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": true,
        "starting": "RMCAttachmentS84xTelescopicScope",
        "allowed": [
          "RMCAttachmentS84xTelescopicScope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentL83A3Stock",
        "allowed": [
          "RMCAttachmentL83A3Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": "RMCAttachmentBipod",
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentBipod",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentLaserSight",
          "RMCAttachmentM203GrenadeLauncher"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": true,
        "starting": "RMCAttachmentM16Stock",
        "allowed": [
          "RMCAttachmentM16Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentBipod",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentMiniFlamethrower",
          "RMCAttachmentU1GrenadeLauncher",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentLaserSight",
          "RMCAttachmentM203GrenadeLauncher"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "WeaponRifleM4SPR",
    "name": "боевая винтовка M4RA",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m4spr_rifle.yml",
    "fireRate": 2.86,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 0,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentB8SmartScope",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleM4SPR"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "WeaponRifleM4SPRCustom",
    "name": "модифицированная боевая винтовка M4RA",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/m4spr_scout_rifle.yml",
    "fireRate": 1.8,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
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
    "burstCooldown": 0.75,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleM4SPR"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.75,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentB8SmartScope",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleM5SPR"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.75,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentB8SmartScope",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponRifleM5SPR2"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.1665,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBipod",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentU7UnderbarrelShotgun",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec",
          "RMCAttachmentBurstFireAssembly",
          "RMCAttachmentMiniFlamethrower"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
  },
  {
    "id": "WeaponRifleXM88",
    "name": "тяжелая винтовка XM88",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/xm88_rifle.yml",
    "fireRate": 1.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentBarrelCharger"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentXS-9"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentXM88Stock"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 9,
    "wieldable": true
  },
  {
    "id": "WeaponRifleXM88MaxStacks",
    "name": "тяжелая винтовка XM88 (макс. стаки)",
    "category": "Винтовки",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Rifles/xm88_rifle.yml",
    "fireRate": 1.4285,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
    "damageMult": 1.2,
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
      "RMCCartridge458SOCOMMaxStacks"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentBarrelCharger"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentXS-9"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentXM88Stock"
        ]
      }
    },
    "tags": [],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 9,
    "wieldable": true
  },
  {
    "id": "WeaponSMGMAC15",
    "name": "пистолет-пулемет MAC-15",
    "category": "Пистолеты-пулемёты",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/SMGs/mac15.yml",
    "fireRate": 10.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentLaserSight",
          "RMCAttachmentBipod",
          "RMCAttachmentM203GrenadeLauncher",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponSMG"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 20.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": null,
    "wieldable": true
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRecoilCompensator"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 6,
    "wieldable": true
  },
  {
    "id": "WeaponShotgunM357",
    "name": "конкурент M357",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m357_shotgun.yml",
    "fireRate": 0.7,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentDoubleBarrelShotgunStock",
        "allowed": [
          "RMCAttachmentDoubleBarrelShotgunStock",
          "RMCAttachmentHJRA12Back"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentGyroscopicStabilizer"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunM357",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 2,
    "wieldable": true
  },
  {
    "id": "WeaponShotgunM357Sawn",
    "name": "распиленный конкурент M357",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m357_sawn_off_shotgun.yml",
    "fireRate": 0.7,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 2,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": "RMCAttachmentDoubleBarrelShotgunStock",
        "allowed": [
          "RMCAttachmentDoubleBarrelShotgunStock",
          "RMCAttachmentHJRA12Back"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentGyroscopicStabilizer"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunM357",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 2,
    "wieldable": true
  },
  {
    "id": "WeaponShotgunM42A1",
    "name": "дробовик M42A1",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/m42a1_shotgun.yml",
    "fireRate": 0.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentShotgunChoke",
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM42A1WoodenStock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentAngledGrip",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunM42A1",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 10,
    "wieldable": true
  },
  {
    "id": "WeaponShotgunMOU53",
    "name": "разборный дробовик MOU53",
    "category": "Дробовики",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Shotguns/mou53_shotgun.yml",
    "fireRate": 4.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 1,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentMagneticHarness",
          "RMCAttachmentTwoPointSling",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentMOU53Stock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentGyroscopicStabilizer",
          "RMCAttachmentFlashlightGrip",
          "RMCAttachmentAngledGrip",
          "RMCAttachmentVerticalGrip",
          "RMCAttachmentLaserSight",
          "RMCAttachmentUnderbarrelExtinguisher",
          "RMCAttachmentUnderbarrelExtinguisherSpec"
        ]
      }
    },
    "tags": [
      "RMCWeaponShotgunMOU53",
      "RMCWeaponShotgun"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 75.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 3,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverM44",
    "name": "боевой револьвер M44",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/m44_revolver.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 2,
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 6,
      "scatterUnwielded": 14
    },
    "magazines": [
      "RMCSpeedLoader44Marksman",
      "RMCSpeedLoaderM44"
    ],
    "accuracyMult": 0.85,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentB8SmartScope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM44MagnumSharpshooterStock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolverM44"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 7,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverMkX",
    "name": "Warwick MkX TBR",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/mkx.yml",
    "fireRate": 1.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 4,
      "recoilUnwielded": 4,
      "scatterWielded": 4,
      "scatterUnwielded": 16,
      "baseFireRate": 1.5,
      "burstScatterMult": 4
    },
    "magazines": [
      "RMCSpeedLoaderMateba",
      "RMCSpeedLoaderMatebaHE",
      "RMCSpeedLoaderMatebaHIAP",
      "RMCSpeedLoaderMatebaHighImpact"
    ],
    "accuracyMult": 1.5,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 4.0,
    "scatterUnwielded": 16.0,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {},
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolverMkX"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 6,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverRSh9",
    "name": "штурмовой револьвер РШ-9",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/rs9.yml",
    "fireRate": 1.2,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 1.2,
      "scatterWielded": 8,
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterUnwielded": 14
    },
    "magazines": [
      "RMCSpeedLoaderRsh9"
    ],
    "accuracyMult": 1.1,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentBarrelCharger"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolverRSh9"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 6,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverMateba",
    "name": "пользовательский авторевольвер матеба",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/mateba.yml",
    "fireRate": 1.111,
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
      "recoilWielded": 4,
      "recoilUnwielded": 4,
      "baseFireRate": 1.111,
      "scatterWielded": 8,
      "scatterUnwielded": 20,
      "burstScatterMult": 5,
      "burstFireRateMultiplier": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1332,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCSpeedLoaderMateba",
      "RMCSpeedLoaderMatebaHE",
      "RMCSpeedLoaderMatebaHIAP",
      "RMCSpeedLoaderMatebaHighImpact"
    ],
    "accuracyMult": 1.1,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 3.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1332,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentBarrelCharger"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCMateba"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 6,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverZHNK72",
    "name": "револьвер ZHNK-72",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/zhnk72.yml",
    "fireRate": 3.5,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.2,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 0,
      "recoilUnwielded": 3,
      "scatterWielded": 5,
      "scatterUnwielded": 12,
      "baseFireRate": 3.5,
      "burstScatterMult": 4
    },
    "magazines": [
      "RMCSpeedLoaderZHNK72"
    ],
    "accuracyMult": 0.85,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 5.0,
    "scatterUnwielded": 12.0,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolverZHNK72"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 7,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolver38Empty",
    "name": "револьвер .38 магнум",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/38magnum.yml",
    "fireRate": 1.67,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 2.0,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 8,
      "scatterUnwielded": 12,
      "baseFireRate": 1.67,
      "burstScatterMult": 4
    },
    "magazines": [
      "RMCSpeedLoader38"
    ],
    "accuracyMult": 0.85,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 12.0,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": []
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolver38Magnum"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 6,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverM44Custom",
    "name": "пользовательский боевой револьвер M44",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/m44_custom_revolver.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 2,
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 6,
      "scatterUnwielded": 14
    },
    "magazines": [
      "RMCSpeedLoader44Marksman",
      "RMCSpeedLoaderM44"
    ],
    "accuracyMult": 0.85,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 6.0,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentB8SmartScope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM44MagnumSharpshooterStock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolverM44"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 7,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverSpearhead",
    "name": "авторевольвер БКМ \"Острие Копья\"",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/spearhead.yml",
    "fireRate": 1.67,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 8,
      "scatterUnwielded": 12,
      "baseFireRate": 1.67,
      "burstScatterMult": 4
    },
    "magazines": [
      "RMCSpeedLoader357",
      "RMCSpeedLoader357Hollowpoint"
    ],
    "accuracyMult": 0.85,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 12.0,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM44MagnumSharpshooterStock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight",
          "RMCAttachmentGyroscopicStabilizer"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolverSpearhead"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 6,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverMatebaGold",
    "name": "позолоченный пользовательский авторевольвер Матеба",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/mateba.yml",
    "fireRate": 1.111,
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
      "recoilWielded": 4,
      "recoilUnwielded": 4,
      "baseFireRate": 1.111,
      "scatterWielded": 8,
      "scatterUnwielded": 20,
      "burstScatterMult": 5,
      "burstFireRateMultiplier": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1332,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCSpeedLoaderMateba",
      "RMCSpeedLoaderMatebaHE",
      "RMCSpeedLoaderMatebaHIAP",
      "RMCSpeedLoaderMatebaHighImpact"
    ],
    "accuracyMult": 1.1,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 3.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1332,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentBarrelCharger"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCMateba"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 6,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverWarwickMkVII",
    "name": "Warwick MkVII service revolver",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/warwick.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 2,
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 6,
      "scatterUnwielded": 14
    },
    "magazines": [
      "RMCSpeedLoader44Marksman",
      "RMCSpeedLoaderM44"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentB8SmartScope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM44MagnumSharpshooterStock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolverWarwickMkVII"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 7,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverMatebaSpecial",
    "name": "револьвер матеба специальный",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/mateba.yml",
    "fireRate": 1.111,
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
      "recoilWielded": 4,
      "recoilUnwielded": 4,
      "baseFireRate": 1.111,
      "scatterWielded": 8,
      "scatterUnwielded": 20,
      "burstScatterMult": 5,
      "burstFireRateMultiplier": 3,
      "modifiers": {
        "Burst": {
          "fireDelay": 0.1332,
          "maxScatterModifier": 10,
          "useBurstScatterMult": true,
          "unwieldedScatterMultiplier": 2,
          "shotsToMaxScatter": 6
        }
      }
    },
    "magazines": [
      "RMCSpeedLoaderMateba",
      "RMCSpeedLoaderMatebaHE",
      "RMCSpeedLoaderMatebaHIAP",
      "RMCSpeedLoaderMatebaHighImpact"
    ],
    "accuracyMult": 1.2,
    "accuracyMultUnwielded": 0.75,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto",
      "Burst"
    ],
    "burstFireRateMult": 3.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 20.0,
    "scatterIncrease": 0.0,
    "scatterDecay": 0.0,
    "burstScatterMult": 5.0,
    "fireModeMods": {
      "Burst": {
        "fireDelay": 0.1332,
        "maxScatterModifier": 10.0,
        "useBurstScatterMult": true,
        "unwieldedScatterMultiplier": 2.0,
        "shotsToMaxScatter": 6
      }
    },
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentBarrelCharger"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCMateba"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 6,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverSpearheadCustom",
    "name": "авторевольвер БКМ \"Острие Копья\" (кастомная версия)",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/spearhead.yml",
    "fireRate": 1.67,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 8,
      "scatterUnwielded": 12,
      "baseFireRate": 1.67,
      "burstScatterMult": 4
    },
    "magazines": [
      "RMCSpeedLoader357",
      "RMCSpeedLoader357Hollowpoint"
    ],
    "accuracyMult": 0.85,
    "accuracyMultUnwielded": 1,
    "accuracyRangeFlat": 0,
    "fireModes": [
      "SemiAuto"
    ],
    "burstFireRateMult": 2.0,
    "scatterSource": "RMCSelectiveFire",
    "scatterWielded": 8.0,
    "scatterUnwielded": 12.0,
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentExtendedCompensator",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentSuppressor",
          "RMCAttachmentSuppressorXM40",
          "RMCAttachmentSuppressorCompact"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM44MagnumSharpshooterStock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight",
          "RMCAttachmentGyroscopicStabilizer"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolverSpearheadCustom"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 6,
    "wieldable": true
  },
  {
    "id": "RMCWeaponRevolverWarwickMkVIISnub",
    "name": "Warwick MkVII snubnose revolver",
    "category": "Револьверы",
    "file": "_RMC14/Entities/Objects/Weapons/Guns/Revolvers/warwick.yml",
    "fireRate": 2.0,
    "fireRateSource": "RMCSelectiveFire",
    "shotsPerBurst": 3,
    "damageMult": 1.1,
    "falloffMult": 1,
    "rangeFlat": 0,
    "selectiveFire": {
      "baseFireRate": 2,
      "baseFireModes": [
        "SemiAuto"
      ],
      "recoilWielded": 1,
      "recoilUnwielded": 3,
      "scatterWielded": 6,
      "scatterUnwielded": 14
    },
    "magazines": [
      "RMCSpeedLoader44Marksman",
      "RMCSpeedLoaderM44"
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
    "burstCooldown": 0.0,
    "attachmentSlots": {
      "barrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCM5Bayonet",
          "RMCCombatUtilityKnifeA",
          "RMCTantoA",
          "RMCSawtoothDaggerA",
          "RMCAttachmentRecoilCompensator",
          "RMCAttachmentBarrelCharger",
          "RMCAttachmentExtendedBarrel",
          "RMCAttachmentExtendedCompensator"
        ]
      },
      "rail": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentRailFlashlight",
          "RMCAttachmentS5RedDotSight",
          "RMCAttachmentS5MicroRedDotSight",
          "RMCAttachmentS6ReflexSight",
          "RMCAttachmentS84xTelescopicScope",
          "RMCAttachmentS42xTelescopicMiniscope",
          "RMCAttachmentFP9000Scope",
          "RMCAttachmentB8SmartScope"
        ]
      },
      "stock": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentM44MagnumSharpshooterStock"
        ]
      },
      "underbarrel": {
        "locked": false,
        "starting": null,
        "allowed": [
          "RMCAttachmentLaserSight"
        ]
      }
    },
    "tags": [
      "Sidearm",
      "RMCRevolver",
      "RMCWeaponRevolverWarwickMkVII"
    ],
    "skillAccuracyPerLevel": 0.15,
    "unskilledPenalty": {
      "minSkill": 1,
      "accuracyAddMult": -0.15,
      "scatterFlat": 5.0
    },
    "gunBurstFireRate": 8,
    "internalCapacity": 7,
    "wieldable": true
  }
];
