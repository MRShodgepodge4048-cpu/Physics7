/* Free-body cases transcribed from Linear Motion worksheet LM-1–LM-18. Arrow directions and lengths schematic. */
window.PHYSICS7_FBD = [
  {
    "id": "LM-1",
    "title": "Two supports in equilibrium",
    "question": "A rock rests under an angled rope attached overhead on the left and a horizontal rope pulling right.",
    "scene": "one-rope-side",
    "arrows": [
      {
        "force": "T1",
        "dir": "NW",
        "length": 66
      },
      {
        "force": "T2",
        "dir": "E",
        "length": 48
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 52
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "Draw both distinct tension forces along the ropes and the weight vertically down.",
    "page": "p1"
  },
  {
    "id": "LM-2",
    "title": "Vertical rope, rock at rest",
    "question": "A rock hangs motionless from a vertical rope.",
    "scene": "hanging",
    "arrows": [
      {
        "force": "T",
        "dir": "N",
        "length": 68
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 68
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "In equilibrium, the upward tension and downward weight match.",
    "page": "p1"
  },
  {
    "id": "LM-3",
    "title": "Static friction on an incline",
    "question": "A rock rests on a sloping surface; static friction prevents it from sliding.",
    "scene": "down-slope",
    "arrows": [
      {
        "force": "Ff",
        "dir": "NW",
        "length": 42
      },
      {
        "force": "Fn",
        "dir": "NE",
        "length": 62
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 71
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "Static friction points uphill, the normal force is perpendicular to the slope, and weight is vertically downward.",
    "page": "p1"
  },
  {
    "id": "LM-4",
    "title": "Two angled ropes",
    "question": "A rock is motionless, suspended by two ropes from different points overhead.",
    "scene": "v-ropes",
    "arrows": [
      {
        "force": "T1",
        "dir": "NW",
        "length": 70
      },
      {
        "force": "T2",
        "dir": "NE",
        "length": 70
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 90
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "Both ropes pull away from the rock toward their anchors; weight acts down.",
    "page": "p1"
  },
  {
    "id": "LM-5",
    "title": "Unequal rope angles",
    "question": "A rock hangs at rest from a steep left-hand rope and a shallower right-hand rope.",
    "scene": "unequal-ropes",
    "arrows": [
      {
        "force": "T1",
        "dir": "NWsteep",
        "length": 90
      },
      {
        "force": "T2",
        "dir": "NE26",
        "length": 53
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 100
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "The steeper left rope exerts a force pointing up-left; the shallower right rope points up-right. The horizontal components cancel, and the upward components balance weight. Arrow lengths are schematic.",
    "page": "p1"
  },
  {
    "id": "LM-6",
    "title": "Rock on a level floor",
    "question": "A rock sits motionless on a level surface.",
    "scene": "floor",
    "arrows": [
      {
        "force": "Fn",
        "dir": "N",
        "length": 67
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 67
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "The floor's normal force balances weight. Friction is absent because no horizontal force is trying to slide the rock.",
    "page": "p1"
  },
  {
    "id": "LM-7",
    "title": "Rock tethered on an incline",
    "question": "A rock is held at rest on a frictionless incline by a rope parallel to the incline.",
    "scene": "tethered-slope",
    "arrows": [
      {
        "force": "T",
        "dir": "NW",
        "length": 43
      },
      {
        "force": "Fn",
        "dir": "NE",
        "length": 62
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 72
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "On the frictionless incline, tension pulls uphill, the normal force is perpendicular to the slope, and weight points vertically down. No friction acts.",
    "page": "p1"
  },
  {
    "id": "LM-8",
    "title": "Rock between two sloping surfaces",
    "question": "A rock is at rest between two frictionless inclined contact surfaces.",
    "scene": "vee",
    "arrows": [
      {
        "force": "Fn1",
        "dir": "NW",
        "length": 70
      },
      {
        "force": "Fn2",
        "dir": "NE",
        "length": 68
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 96
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "Each surface applies its own normal force perpendicular to its surface; there is no friction.",
    "page": "p1"
  },
  {
    "id": "LM-9",
    "title": "Sliding down a smooth incline",
    "question": "A rock slides down a frictionless slope.",
    "scene": "down-slope",
    "arrows": [
      {
        "force": "Fn",
        "dir": "NE",
        "length": 63
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 76
      }
    ],
    "balance": "unbalanced",
    "net": "SE",
    "why": "Only the normal force and weight act. Their resultant points downhill, even though no 'motion force' arrow belongs on the rock.",
    "page": "p1"
  },
  {
    "id": "LM-10",
    "title": "Falling rock",
    "question": "A rock falls with negligible air resistance.",
    "scene": "falling",
    "arrows": [
      {
        "force": "Fg",
        "dir": "S",
        "length": 77
      }
    ],
    "balance": "unbalanced",
    "net": "S",
    "why": "Once released, there is only gravity downward. Motion itself is not a force.",
    "page": "p2"
  },
  {
    "id": "LM-11",
    "title": "Constant speed on a frictionless floor",
    "question": "A rock slides at constant speed on a frictionless horizontal surface.",
    "scene": "floor-moving",
    "arrows": [
      {
        "force": "Fn",
        "dir": "N",
        "length": 70
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 70
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "At constant velocity the net force is zero; there is no continuing horizontal push.",
    "page": "p2"
  },
  {
    "id": "LM-12",
    "title": "Terminal-speed fall",
    "question": "A rock falls at constant terminal speed, with air resistance.",
    "scene": "terminal",
    "arrows": [
      {
        "force": "Fair",
        "dir": "N",
        "length": 72
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 72
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "At terminal velocity, upward drag balances downward weight.",
    "page": "p2"
  },
  {
    "id": "LM-13",
    "title": "Slowing due to kinetic friction",
    "question": "A rock slides to the right on a horizontal floor and slows due to kinetic friction.",
    "scene": "floor-moving",
    "arrows": [
      {
        "force": "Fn",
        "dir": "N",
        "length": 72
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 72
      },
      {
        "force": "Ff",
        "dir": "W",
        "length": 54
      }
    ],
    "balance": "unbalanced",
    "net": "W",
    "why": "Vertical forces balance; kinetic friction points opposite the rightward sliding motion.",
    "page": "p2"
  },
  {
    "id": "LM-14",
    "title": "Rock moving upward after launch",
    "question": "A rock is rising along a parabolic path, after it has left the launching surface. Ignore air resistance.",
    "scene": "projectile-up",
    "arrows": [
      {
        "force": "Fg",
        "dir": "S",
        "length": 75
      }
    ],
    "balance": "unbalanced",
    "net": "S",
    "why": "The upward velocity is not an upward force. Only gravity acts after release.",
    "page": "p2"
  },
  {
    "id": "LM-15",
    "title": "Rock at the top of its path",
    "question": "A rock is at the highest point of its parabolic trajectory. Ignore air resistance.",
    "scene": "projectile-top",
    "arrows": [
      {
        "force": "Fg",
        "dir": "S",
        "length": 75
      }
    ],
    "balance": "unbalanced",
    "net": "S",
    "why": "Gravity still acts downward even where the vertical component of velocity is momentarily zero.",
    "page": "p2"
  },
  {
    "id": "LM-16",
    "title": "Pulled upward with acceleration g",
    "question": "A rope pulls a rock vertically upward with acceleration 9.8 m/s², without resistance.",
    "scene": "pulled-up",
    "arrows": [
      {
        "force": "T",
        "dir": "N",
        "length": 94
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 47
      }
    ],
    "balance": "unbalanced",
    "net": "N",
    "why": "Tension is twice the rock's weight: T = 2Fg, so the net force points upward.",
    "page": "p2"
  },
  {
    "id": "LM-17",
    "title": "Angled rope, constant horizontal speed",
    "question": "A rock slides along a horizontal surface at constant speed while a rope pulls upward and to the right. Kinetic friction acts at the surface, which remains in contact with the rock.",
    "scene": "angled-pull",
    "arrows": [
      {
        "force": "T",
        "dir": "NE26",
        "length": 70
      },
      {
        "force": "Ff",
        "dir": "W",
        "length": 63
      },
      {
        "force": "Fn",
        "dir": "N",
        "length": 69
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 100
      }
    ],
    "balance": "balanced",
    "net": "none",
    "why": "The surface exerts an upward normal force, gravity acts downward, friction left, and angled tension up-right. For constant velocity, horizontal and vertical components balance. Directions and lengths here are schematic.",
    "page": "p2"
  },
  {
    "id": "LM-18",
    "title": "Angled rope, horizontal acceleration",
    "question": "A rock is pulled by a rope angled upward and right so that it accelerates horizontally right at 2g, with zero vertical acceleration. Neglect friction.",
    "scene": "angled-pull",
    "arrows": [
      {
        "force": "T",
        "dir": "NE26",
        "length": 100
      },
      {
        "force": "Fg",
        "dir": "S",
        "length": 45
      }
    ],
    "balance": "unbalanced",
    "net": "E",
    "why": "Tension points about 26.6° above horizontal: its horizontal component is 2mg while its upward component equals mg. Thus the horizontal net force is 2mg to the right and the vertical net force is zero. The diagram arrows are schematic (not exact scale).",
    "page": "p2"
  }
];
