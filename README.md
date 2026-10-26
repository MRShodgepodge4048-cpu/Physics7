# Physics 7 — Pre-Comp Review

A polished, self-paced study site for Units 1–3 of the Physics 7 curriculum (2026–27).

## Review sections
- **Unit 1 — Math and Lab Skills:** units, metric conversions, proportional reasoning, scientific practices.
- **Unit 2 — Kinematics:** displacement, velocity, acceleration and motion graphs.
- **Unit 3 — Dynamics:** forces, Newton's laws, friction, diagrams and equilibrium.
- **Quick checks:** 29 sourced, auto-graded school review questions. Answers transcribed from the school-supplied 2023 Pre-Comp Review slides.
- **Skill practice:** 40 original school workbook, quiz, lecture-slide and study-packet exercises with 40 guided solution checks. Numeric subparts offer verified checks; written explanations use guided self-review.
- Progress tracking, retry list, notes saved to this device, and printable summary.

## Source fidelity and scope
Practice problems are drawn from the course's workbooks, review packets, instructional slides, and Physics 7 Summer Packet. No new physics question scenarios were invented. The original motion graph from question 21 in the 2023 study packet has been redrawn as an accessible SVG.

The current 2026–27 objectives control scope. Work, power, energy, waves, circuits and electrostatics are outside this version. Numerical universal gravitation between two masses is intentionally omitted because the objective was removed.

All displayed equations are linear (single-line). The reference panel is **not** presented as the official exam equation sheet.

## GitHub Pages
1. Open the repository's **Settings → Pages**.
2. Under Build and deployment, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, and save.
4. Expected site location: https://mrshodgepodge4048-cpu.github.io/Physics7/

This is a static HTML/CSS/JavaScript site. No build tools, secrets, logins or web server database are required.

## Files
- `index.html` — landing screen and study sections
- `styles.css` — responsive visual design
- `questions.js` — authentic question bank, source slides, ungraded workbook prompts, one-line equations
- `app.js` — navigation, local progress, answer checking, practice notes, printable summary
- `math-problems.js` — 33 existing school-authored calculation questions from Units 1–3
- `math-tutor.js` — per-step response validation and diagnostic explanations (signs, conversions, units, setup, arithmetic)
- `mini-lessons.js` — 20 course-based concept refreshers accessible independently or from relevant problems
- `steps.js` and `checks.js` — walkthroughs and solution guides for other review activities
- `assets/position-time-2023.svg` — redrawn school review diagram
- `.nojekyll` — GitHub Pages processing opt-out

## Privacy and use permissions
Quiz progress and free-response notes stay on the student's own browser via localStorage. No name, email or user account is collected. Data will not synchronize across devices; clearing browser data may remove progress.

The educational questions are from school-supplied materials. **Please verify school/district online redistribution permission before sharing the public GitHub Pages site with students.**

## Next iteration
Version 1 deliberately emphasizes confirmed answer-key questions. Auto-graded coverage currently leans heavily toward Unit 3; more Unit 1–2 source-keyed assessment questions and visuals should be added when available. This is a review aid, not a graded assignment or project.

## Additional links
- PhET: five simulation links for graphing, motion, forces, gravity and springs.
- D. A. Garanin, *Introductory Physics: Problem Solving* (Lehman College): optional reference; university-level problems are linked, not republished.
- A. R. King and O. Regev, *Physics with Answers: 500 Problems and Solutions* (Scribd): optional challenging reference. Copyright-protected; linked only.

## Step-by-step explanations
The 29 quick checks and 40 workbook exercises each have an optional three-step explanation. Students reveal the steps individually, or restart them without changing quiz progress. The worked examples follow the classroom approach: identify known and wanted quantities, choose a linear equation, substitute values, and check units or directions. Conceptual and graph questions explain the reasoning instead of inventing calculations. The student-facing walkthroughs are maintained in `steps.js` and are based on the school workbook, pre-comp reviews and the Physics 7 Summer Packet's worked instruction and keys.


## Guided Math Workshop and Mini-Lessons
The **Math Workshop** contains 33 existing school exercises: 10 from Unit 1, 13 from Unit 2, and 10 from Unit 3. The work is checked in consecutive stages: identify givens, choose a formula or conversion, substitute quantities, calculate, and check the final unit/direction. Each incorrect entry receives targeted guidance identifying an incorrect copied value, reversed sign, wrong conversion factor, arithmetic error, or incorrect unit. Correct fields are acknowledged individually; completed steps can be expanded again for review. Work and step progress are saved locally.

The **Mini-Lessons** area contains 20 brief concept refreshers (7 Unit 1, 5 Unit 2, 8 Unit 3). **Students can browse and open lessons at any time without needing to answer a question incorrectly.** Lessons are additionally linked from quick checks, workbook exercises and the Math Workshop. A return button takes the student back to the previous practice screen, with work preserved.

Numeric checking is deterministic with a small precision tolerance where appropriate. It checks the specified stage, not arbitrary equivalent algebra, so a mathematically valid but differently written method might need the student to map their numbers into the labeled boxes. Essay and diagram responses are guided self-checks, not claimed to be reliably auto-graded.


## Source-based free-body diagram practice
The **Force diagrams** section contains all **18 LM-1–LM-18** situations from the uploaded *Free-Body Exercises: Linear Motion* worksheet (J. E. Court, *The Physics Teacher*, October 1999), with original clean SVG redrawings and paraphrased prompts. This includes level surfaces, inclines, ropes, falling objects and projectile-path snapshots because they appear in the worksheet's Linear Motion section. The unrelated Circular Motion, Rotational Equilibrium and Rotational Non-equilibrium sections were excluded. Students add and label force arrows, choose directions, receive feedback for missing/incorrect/duplicate arrows, and classify whether forces balance and the net-force direction. Progress is saved locally. Force-arrow lengths are illustrative relative cues; only force identity and direction, and net-force reasoning, are graded. This is not a copyrighted scan republished in the web page. The site also includes a new independent free-body diagram mini-lesson.

## From the school comprehensive-review resources PDF
The Resources page includes 15 original links from the uploaded *Physics 7 Comp Review Resources* (May 2026), selecting only 1D Kinematics and Newton's Laws / Forces sections relevant to the Units 1–3 pre-comp. Those pages remain externally hosted, without copying copyrighted external material.
