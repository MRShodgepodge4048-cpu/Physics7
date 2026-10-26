/* Teacher-reviewable answer checks for original school exercises.
   Source: school-provided workbooks, curriculum explanations, and verified calculations.
   Numeric subparts are machine-checkable; explanations are guided self-checks. */
window.PHYSICS7_CHECKS = {
 w1a:{guide:"Variable: a factor that can change. Constant: a factor kept unchanged. Unit: a standard used to describe a measurement. Physical quantity: a measurable property expressed with a number and unit."},
 w1b:{guide:"Sunlight exposure is the intentionally changed variable (12, 6, and 2 hours). Amount of water, soil type, and pot size are controlled conditions."},
 w1c:{guide:"An equation states that two expressions are equal. A formula is an equation expressing a mathematical relationship, often used to calculate a quantity."},
 w1d:{guide:"The SI base units in the list are m, kg, s, and K. m/s and m² are derived units."},
 w1e:{guide:"Smallest to largest: micro, milli, centi, kilo, mega."},
 w1f:{guide:"Metric prefixes: Mega = 10^6, kilo = 10^3, hecto = 10^2, deci = 10^-1, centi = 10^-2, milli = 10^-3, micro = 10^-6. Keep all units in the final results.",fields:[
 {label:"a. 2 Mm → cm",value:200000000,display:"200,000,000 cm"},
 {label:"b. 5 m → dm",value:50,display:"50 dm"},
 {label:"c. 1,000,000 μm → m",value:1,display:"1 m"},
 {label:"d. 2 hm → mm",value:200000,display:"200,000 mm"},
 {label:"e. 1 km → dam",value:100,display:"100 dam"}
 ]},
 w1g:{guide:"Directly proportional: at constant speed, doubling distance doubles the travel time."},
 w1h:{guide:"Inversely proportional: when net force stays the same, acceleration decreases as mass increases."},
 w2a:{guide:"With east positive, negative displacement indicates west, and positive displacement indicates east.",fields:[
 {label:"a. -5 m direction",text:["west","w"],display:"west"},
 {label:"b. +15 m direction",text:["east","e"],display:"east"}]},
 w2b:{guide:"From an initial position of 0 m, a 3 m move to the right gives a positive displacement.",fields:[
 {label:"a. Final position (m)",value:3,display:"+3 m"},
 {label:"b. Displacement (m)",value:3,display:"+3 m"},
 {label:"c. Direction",text:["positive","right","positive right","positive to the right"],display:"positive / right"}]},
 w2c:{guide:"Distance adds every part of the path: 2 m + 3 m = 5 m. Displacement depends only on start and finish: -2 m + 3 m = +1 m.",fields:[
 {label:"a. Distance (m)",value:5,display:"5 m"},
 {label:"b. Displacement (m)",value:1,display:"+1 m"}]},
 w2d:{guide:"Average speed and velocity have equal magnitudes for motion in one direction; velocity also gives direction. 4 m / 2 s = 2 m/s.",fields:[
 {label:"a. Speed (m/s)",value:2,display:"2 m/s"},
 {label:"b. Velocity (m/s, right positive)",value:2,display:"+2 m/s (right)"}]},
 w2e:{guide:"Distance = speed × time = 3 m/s × 4 s.",fields:[{label:"Distance (m)",value:12,display:"12 m"}]},
 w2f:{guide:"Displacement = final - initial position = 6 m - 0 m. Average velocity = 6 m / 3 s.",fields:[
 {label:"a. Displacement (m)",value:6,display:"+6 m"},
 {label:"b. Average velocity (m/s)",value:2,display:"+2 m/s"}]},
 w2graph:{guide:"a. Positive velocity: 1–3 s. b. Negative velocity: about 4.5–6 s. c. At rest: 0–1 s and 3–4.5 s. d. Displacement from 0 to 6 s: 0 m (start/end both 20 m). e. Total distance: 80 m (40 m outward, 40 m back). The graph comes from the school’s 2023 packet.",fields:[
 {label:"d. Displacement (m)",value:0,display:"0 m"},
 {label:"e. Total distance (m)",value:80,display:"80 m"}]},
 w3a:{guide:"The book experiences gravity (downward, non-contact) and a normal force from the table (upward, contact)."},
 w3b:{guide:"Applied push to the right; kinetic friction to the left; gravity downward; normal force upward. With constant velocity, the net force is zero."},
 w3c:{guide:"Weight acts downward; tension from the taut strap acts upward. The support supplies the upward force."},
 w3d:{guide:"Ignoring air resistance, only the gravitational force acts on the airborne ball, downward, even while it is moving upward."},
 w3e:{guide:"Kinetic friction acts toward the right, opposite the box’s relative sliding motion to the left."},
 schoollab1:{guide:"Match original choices in their listed order: B, H, C, A, G, I, D. Confirm that prefix symbols differ in capitalization: m = milli; M = Mega.",fields:[
 {label:"0.003 m → choice",text:["b"],display:"B (3 mm)"},
 {label:"3,000 m → choice",text:["h"],display:"H (3 km)"},
 {label:"0.03 m → choice",text:["c"],display:"C (3 cm)"},
 {label:"0.000003 m → choice",text:["a"],display:"A (3 µm)"},
 {label:"300 m → choice",text:["g"],display:"G (3 hm)"},
 {label:"3,000,000 m → choice",text:["i"],display:"I (3 Mm)"},
 {label:"0.3 m → choice",text:["d"],display:"D (3 dm)"}]},
 schoollab2:{guide:"Qualitative: descriptive/non-numerical observations (such as texture, color or shape). Quantitative: a numerical measurement with a unit. Check that you supplied two genuinely different examples for each category."},
 schoollab3:{guide:"Use unit multipliers and cancel the original unit before calculating. Prefix multipliers: milli = 10^-3; kilo = 10^3; deci = 10^-1; Mega = 10^6; centi = 10^-2; micro = 10^-6.",fields:[
 {label:"14 mm → m",value:0.014,display:"0.014 m"},
 {label:"51.8 kg → g",value:51800,display:"51,800 g"},
 {label:"23,567 dm → Mm",value:0.0023567,display:"0.0023567 Mm"},
 {label:"6.64 cs → μs",value:66400,display:"66,400 μs"}]},
 schoollab4:{guide:"Independent variable: amount of food given per cat. Dependent variable: measured change in cat weight. Possible controls include same observation period, frequency of feeding and regular weighing schedule. Graph: food amount on horizontal axis, cat weight (or weight change) on vertical axis. Different cats can be a confounding factor; review with teacher."},
 schoollab5:{guide:"Graph week on the x-axis and height (cm) on the y-axis. Plot (1,2), (2,5), (3,8), (4,11), (5,14) from the school-provided table. Connect them in week order to show increasing height. Check axes have units."},

 num01:{guide:"milli = 10^-3: 978.42 mL × (1 L / 1000 mL) = 0.97842 L.",fields:[{label:"Volume (L)",value:0.97842,display:"0.97842 L"}]},
 num02:{guide:"centi = 10^-2 and Mega = 10^6: 14.57 cs = 0.1457 s = 1.457 × 10^-7 Ms.",fields:[{label:"Time (Ms)",value:1.457e-7,display:"0.0000001457 Ms"}]},
 num03:{guide:"1 day = 24 h; 1 h = 3600 s. 60 days × 24 × 3600 = 5,184,000 seconds.",fields:[{label:"Time (s)",value:5184000,display:"5,184,000 s"}]},
 num04:{guide:"1 m = 1,000,000 μm.",fields:[{label:"Length (μm)",value:24000,display:"24,000 μm"}]},
 num05:{guide:"1 hm = 100 m.",fields:[{label:"Length (m)",value:157.4,display:"157.4 m"}]},
 num06:{guide:"1 km = 1000 m.",fields:[{label:"Length (km)",value:0.00754,display:"0.00754 km"}]},
 num07:{guide:"1 meter = 10 decimeters.",fields:[{label:"Length (dm)",value:15240,display:"15,240 dm"}]},
 num08:{guide:"Mega = 10^6.",fields:[{label:"Time (s)",value:87000000,display:"87,000,000 s"}]},
 num09:{guide:"micro = 10^-6. 1 A = 1,000,000 µA.",fields:[{label:"Current (µA)",value:520000,display:"520,000 µA"}]},
 num10:{guide:"10 mm = 1 cm.",fields:[{label:"Length (cm)",value:3.14,display:"3.14 cm"}]},
 num11:{guide:"1 hm = 100 m, and 1 m = 10 dm.",fields:[{label:"Length (dm)",value:4650,display:"4,650 dm"}]},
 num12:{guide:"a = (vf - vi) / t = (2 - 10) / 6 = -1.33 m/s². The negative sign means acceleration opposite the chosen positive direction.",fields:[{label:"Acceleration (m/s²)",value:-1.333333333,tolerance:0.02,display:"-1.33 m/s²"}]},
 num13:{guide:"On Earth Fg = mg: 54 × 9.8 = 529.2 N (about 529 N). Some original class slides use g = 10 m/s² for mental arithmetic, giving 540 N. On the Moon, 54 × 1.6 = 86.4 N.",fields:[{label:"B. Weight on Moon (N)",value:86.4,display:"86.4 N"}]},
 num14:{guide:"Fnet = ma = 3.6 × 7.1 = 25.56 N, or 25.6 N rounded to one decimal place.",fields:[{label:"Net force (N)",value:25.56,tolerance:0.05,display:"25.56 N ≈ 25.6 N"}]},
 schoolunits1:{guide:"1 mm = 0.001 m, so 54 mm = 54 × 0.001 m.",fields:[{label:"54 mm → m",value:0.054,display:"0.054 m"}]}
};
