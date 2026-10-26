/* Physics 7 mini-lessons from course documents and source study packets. */
window.PHYSICS7_LESSONS = [
  {
    "id": "measurements",
    "unit": 1,
    "title": "Measurements, units & accuracy",
    "lead": "Physical quantities need numbers and units. Accuracy means closeness to the accepted value; precision means repeatability.",
    "points": [
      "SI commonly uses m for length, kg for mass, s for time, and K for temperature.",
      "Force is measured in newtons (N), a derived unit: N = kg × m/s².",
      "Always show a unit with each physical answer, and check the measurement's magnitude.",
      "A measurement may be consistent (precise) without being close to the true value (accurate)."
    ],
    "formula": "1 N = 1 kg × m/s²",
    "example": "A 3.2 km measurement cannot be treated as 3.2 m; the numeric value and unit work together.",
    "pitfall": "Mixing up force (N) and mass (kg).",
    "workbookId": "schoollab2",
    "practiceIds": [
      "p01"
    ]
  },
  {
    "id": "lab-variables",
    "unit": 1,
    "title": "Lab design & variables",
    "lead": "Change one factor deliberately and measure how the outcome responds.",
    "points": [
      "Independent variable: factor the experimenter changes; typically plotted on the horizontal axis.",
      "Dependent variable: measured response; typically plotted on the vertical axis.",
      "Constants: conditions intended to stay the same for a fair comparison.",
      "Look for confounding factors, such as comparing different cats when also changing their diets."
    ],
    "formula": null,
    "example": "In the class cat-feeding exercise, food amount is the planned independent variable and measured weight is the dependent variable.",
    "pitfall": "Calling a measured outcome the independent variable.",
    "workbookId": "schoollab4",
    "practiceIds": []
  },
  {
    "id": "prefixes",
    "unit": 1,
    "title": "Metric prefixes",
    "lead": "Metric prefixes show powers of ten added to a base unit.",
    "points": [
      "kilo = 10^3; hecto = 10^2; deca = 10^1.",
      "deci = 10^-1; centi = 10^-2; milli = 10^-3; micro = 10^-6.",
      "Mega (M) = 10^6 is different from milli (m) = 10^-3.",
      "Convert units by replacing prefixes with their numerical multipliers."
    ],
    "formula": "1 mm = 0.001 m",
    "example": "From the school review: 54 mm = 54 × 0.001 m = 0.054 m.",
    "pitfall": "Confusing uppercase M with lowercase m or reversing the conversion multiplier.",
    "workbookId": "w1e",
    "practiceIds": [
      "p01",
      "p02",
      "p03",
      "p04",
      "p05",
      "p06",
      "p07"
    ]
  },
  {
    "id": "conversions",
    "unit": 1,
    "title": "Unit conversions & analysis",
    "lead": "A conversion factor changes the unit, not the underlying measurement.",
    "points": [
      "Write the given value and desired target unit.",
      "Choose a factor that cancels the starting unit: the denominator must contain the unit being removed.",
      "Multiply through; the final unit must be the one requested.",
      "Metric multipliers can be 10, 100, 1000, 0.1, 0.01, 0.001, and more."
    ],
    "formula": "54 mm × (0.001 m / 1 mm) = 0.054 m",
    "example": "The school's 54 mm problem cancels 'mm' and leaves 'm' after multiplication.",
    "pitfall": "Writing the conversion factor upside down, so the original unit does not cancel.",
    "workbookId": "schoolunits1",
    "practiceIds": [
      "p08",
      "p09",
      "p10"
    ]
  },
  {
    "id": "notation",
    "unit": 1,
    "title": "Scientific notation",
    "lead": "Write very large and very small numbers as a coefficient times a power of ten.",
    "points": [
      "Write the coefficient between 1 and 10 in magnitude.",
      "Count decimal places: moving the decimal left yields a positive exponent for large values.",
      "Moving it right to enlarge a small number yields a negative exponent.",
      "Check that your rewritten value has the same magnitude as the original."
    ],
    "formula": "123,000,000 = 1.23 × 10^8",
    "example": "The school's summer packet gives 123,000,000 = 1.23 × 10^8.",
    "pitfall": "Using a positive exponent for a number much smaller than 1.",
    "workbookId": "schoollab3",
    "practiceIds": [
      "p03",
      "p10"
    ]
  },
  {
    "id": "proportions",
    "unit": 1,
    "title": "Direct & inverse relationships",
    "lead": "Use proportional reasoning to predict how one quantity changes when another changes.",
    "points": [
      "Direct: if one quantity doubles, the other doubles when the remaining conditions are fixed.",
      "Inverse: if one doubles, the other halves when the product stays constant.",
      "At constant speed, distance = speed × time, so distance rises directly with time.",
      "At constant net force, a = Fnet / m, so acceleration is inversely related to mass."
    ],
    "formula": "a = Fnet / m",
    "example": "If force stays fixed, greater mass means less acceleration.",
    "pitfall": "Claiming acceleration grows when mass grows while net force stays the same.",
    "workbookId": "w1h",
    "practiceIds": [
      "p26",
      "p27"
    ]
  },
  {
    "id": "graphs",
    "unit": 1,
    "title": "Reading and making graphs",
    "lead": "Graphs connect two quantities so you can interpret trends and calculate slope.",
    "points": [
      "Time is normally on the horizontal axis for motion graphs.",
      "Slope of a position-time graph gives velocity: slope = change in position / change in time.",
      "Horizontal lines on position-time graphs mean an object is at rest.",
      "Always label both axes with the quantity and its units."
    ],
    "formula": "slope = (xf - xi) / (tf - ti)",
    "example": "The class plant-growth data plot Week on x and Height (cm) on y.",
    "pitfall": "Confusing the height of the line with the slope of the line.",
    "workbookId": "schoollab5",
    "practiceIds": []
  },
  {
    "id": "distance",
    "unit": 2,
    "title": "Distance vs. displacement",
    "lead": "Distance measures the complete path; displacement compares the final and initial positions.",
    "points": [
      "Distance is a scalar: a total length, with no direction.",
      "Displacement is a vector: final position - initial position.",
      "In straight-line motion, choose a positive direction and assign signs.",
      "A round trip may have positive distance but zero displacement."
    ],
    "formula": "Δx = xf - xi",
    "example": "From the workbook: 2 m left then 3 m right gives distance 5 m and displacement +1 m.",
    "pitfall": "Adding signed changes when asked for total distance.",
    "workbookId": "w2c",
    "practiceIds": []
  },
  {
    "id": "speed",
    "unit": 2,
    "title": "Speed & velocity",
    "lead": "Speed uses distance; average velocity uses displacement and includes direction.",
    "points": [
      "Average speed = distance / time.",
      "Average velocity = displacement / time.",
      "Convert time first if the requested units require seconds rather than minutes.",
      "A positive or negative velocity depends on the chosen direction convention."
    ],
    "formula": "speed = distance / time",
    "example": "The summer packet asks for 180 km over 3 h: 180 / 3 = 60 km/h.",
    "pitfall": "Dividing in reverse or dropping the direction for a velocity.",
    "workbookId": "w2d",
    "practiceIds": [
      "p11",
      "p12",
      "p13",
      "p14",
      "p15",
      "p16",
      "p17"
    ]
  },
  {
    "id": "acceleration",
    "unit": 2,
    "title": "Acceleration & signs",
    "lead": "Acceleration is the change in velocity over time.",
    "points": [
      "Use a = (vf - vi) / t, with final velocity written first.",
      "A negative answer refers to the chosen coordinate direction, not automatically 'slowing down'.",
      "Velocity may change in speed, direction, or both.",
      "Always use time in the unit expected by the calculation."
    ],
    "formula": "a = (vf - vi) / t",
    "example": "The summer packet's scooter goes from 3 to 9 m/s in 3 s: (9 - 3) / 3 = 2 m/s².",
    "pitfall": "Reversing final and initial velocity or forgetting the minus sign.",
    "workbookId": "num12",
    "practiceIds": [
      "p18",
      "p19",
      "p20",
      "p21"
    ]
  },
  {
    "id": "instantaneous",
    "unit": 2,
    "title": "Velocity at a moment",
    "lead": "With constant acceleration, find velocity after a specified time using initial velocity.",
    "points": [
      "Identify the starting velocity vi.",
      "Find acceleration a and elapsed time t.",
      "Calculate a × t before adding vi.",
      "If upward is positive, gravity near Earth's surface is a = -9.8 m/s²."
    ],
    "formula": "vf = vi + at",
    "example": "From the summer packet: a skateboarder starts from rest at 2 m/s² for 4 s, giving vf = 0 + 2 × 4 = 8 m/s.",
    "pitfall": "Using the speed equation instead of constant-acceleration velocity.",
    "workbookId": "num12",
    "practiceIds": [
      "p22",
      "p23"
    ]
  },
  {
    "id": "motion-graphs",
    "unit": 2,
    "title": "Position-time & velocity-time graphs",
    "lead": "The axes determine what a graph means.",
    "points": [
      "Position-time slope gives velocity; positive slope and negative slope indicate direction.",
      "A horizontal position-time section means no movement during that interval.",
      "Velocity-time slope gives acceleration; a horizontal velocity-time section means constant velocity.",
      "Velocity changing direction does not necessarily mean speed is increasing."
    ],
    "formula": "velocity = slope of position-time graph",
    "example": "The 2023 review's position-time graph has horizontal sections for rest and diagonal sections for motion.",
    "pitfall": "Interpreting a flat velocity-time line as rest when it is above zero.",
    "workbookId": "w2graph",
    "practiceIds": []
  },
  {
    "id": "forces",
    "unit": 3,
    "title": "Forces & free-body diagrams",
    "lead": "A free-body diagram shows the forces acting on one object.",
    "points": [
      "Gravity (Fg) acts downward; surface normal force (Fn) acts perpendicular to the surface.",
      "Applied force, tension, and friction are contact forces.",
      "Draw and label arrows on the object; never include forces that act on another object.",
      "For a stationary object on a flat surface with no other vertical forces, Fn = Fg."
    ],
    "formula": "Fg = mg",
    "example": "A book resting on a table has gravity down and normal force up.",
    "pitfall": "Drawing the action-reaction pair on a single object's diagram.",
    "workbookId": "w3a",
    "practiceIds": [
      "p33"
    ]
  },
  {
    "id": "net",
    "unit": 3,
    "title": "Net force & equilibrium",
    "lead": "The net force is the signed sum of all forces on an object.",
    "points": [
      "Choose a positive direction before combining opposing forces.",
      "In horizontal examples, right can be positive and left negative.",
      "If Fnet = 0, acceleration is zero; an object might be resting or moving at constant velocity.",
      "Direction follows the sign of the total force."
    ],
    "formula": "Fnet = Fright + Fleft (signed)",
    "example": "The summer packet has 60 N right and 20 N left: 60 + (-20) = 40 N right.",
    "pitfall": "Adding opposing force magnitudes instead of subtracting them.",
    "workbookId": "w3b",
    "practiceIds": [
      "p24",
      "p25"
    ]
  },
  {
    "id": "newton1",
    "unit": 3,
    "title": "Newton's First Law",
    "lead": "Without a net external force, velocity stays constant.",
    "points": [
      "An object at rest remains at rest without a net force.",
      "An object moving at constant velocity continues with that velocity unless acted on by a net force.",
      "Inertia is the resistance to changes in motion and increases with mass.",
      "Zero net force does not mean zero velocity."
    ],
    "formula": "Fnet = 0 → a = 0",
    "example": "A puck crossing frictionless ice keeps its velocity after the push ends.",
    "pitfall": "Assuming motion always requires an ongoing force.",
    "workbookId": "w3b",
    "practiceIds": [
      "p33"
    ]
  },
  {
    "id": "newton2",
    "unit": 3,
    "title": "Newton's Second Law",
    "lead": "Net force, mass and acceleration are related by Fnet = ma.",
    "points": [
      "Choose which quantity is unknown.",
      "For net force: Fnet = m × a.",
      "For mass: m = Fnet / a. For acceleration: a = Fnet / m.",
      "Force has units N; mass kg; acceleration m/s²."
    ],
    "formula": "Fnet = ma",
    "example": "The summer packet's 10 kg sled accelerating at 2 m/s² has Fnet = 20 N.",
    "pitfall": "Dividing when solving for force, or multiplying when solving for mass.",
    "workbookId": "num14",
    "practiceIds": [
      "p26",
      "p27",
      "p30"
    ]
  },
  {
    "id": "newton3",
    "unit": 3,
    "title": "Newton's Third Law",
    "lead": "When two objects interact, they exert forces on each other.",
    "points": [
      "The two forces have equal magnitudes.",
      "They point in opposite directions and act on different objects.",
      "The forces happen at the same time.",
      "They do not cancel within one object's free-body diagram."
    ],
    "formula": "F(A on B) = -F(B on A)",
    "example": "In the review, the bowling ball and pin experience equal force magnitudes during their collision.",
    "pitfall": "Thinking the heavier object exerts the larger interaction force.",
    "workbookId": "w3a",
    "practiceIds": []
  },
  {
    "id": "gravity",
    "unit": 3,
    "title": "Mass, weight & gravity",
    "lead": "Mass is measured in kilograms; weight is gravitational force measured in newtons.",
    "points": [
      "Mass does not change merely because you move from Earth to the Moon.",
      "Weight depends on the local gravitational acceleration g.",
      "Use Fg = m × g. Solve for g using g = Fg / m.",
      "On Earth g ≈ 9.8 m/s²; some classroom problems round it to 10 m/s²."
    ],
    "formula": "Fg = mg",
    "example": "From the review: 54 kg × 9.8 m/s² = 529.2 N on Earth.",
    "pitfall": "Answering weight in kilograms or swapping 9.8 with a mass value.",
    "workbookId": "num13",
    "practiceIds": [
      "p28",
      "p31",
      "p32"
    ]
  },
  {
    "id": "friction",
    "unit": 3,
    "title": "Friction & coefficients",
    "lead": "For sliding surfaces, friction opposes relative sliding; its magnitude depends on normal force.",
    "points": [
      "For the class's flat-surface examples, Fn = mg.",
      "Find frictional force using Ff = μFn.",
      "μ is unitless; normal force and friction are both in newtons.",
      "Treat static friction carefully: it adjusts up to a limit, rather than always equaling μFn."
    ],
    "formula": "Ff = μFn",
    "example": "The summer packet has m = 5 kg and μ = 0.4: Fn = 49 N, then Ff = 19.6 N.",
    "pitfall": "Using the coefficient without calculating normal force first.",
    "workbookId": "w3e",
    "practiceIds": [
      "p29"
    ]
  },
  {
    "id": "fbd",
    "unit": 3,
    "title": "Drawing free-body diagrams",
    "lead": "Represent all real forces acting on one chosen object with labeled arrows, then use the diagram to reason about motion.",
    "points": [
      "Choose one object: in our worksheet, it's always the rock.",
      "List the interactions: weight points vertically down, tension follows the rope, normal force points perpendicular to the contact surface, and friction opposes relative sliding or the tendency to slide.",
      "Draw each real force as an arrow starting at the chosen object; longer arrows indicate greater magnitude when that information is known.",
      "Never add separate 'velocity,' 'acceleration,' or 'force of motion' arrows: these are not additional interactions.",
      "Check whether the force arrows balance. If the net force is zero the object has zero acceleration, even when moving at constant velocity.",
      "Use the net force direction to explain the object's acceleration; a force diagram does not automatically point in the direction of its velocity."
    ],
    "formula": "Fnet = sum of signed forces along the chosen axis",
    "example": "Original worksheet LM-2: a rock hanging at rest needs upward tension (T) and downward weight (Fg) of equal size. LM-9: a frictionless incline has gravity down and a normal force perpendicular to the slope; the resultant points downhill.",
    "pitfall": "Confusing velocity with a force, drawing friction when the problem says frictionless, or pointing a normal force vertically upward on an inclined surface.",
    "workbookId": "w3a",
    "practiceIds": []
  }
];
