# Physics 7 — November 14, 2026 Question/Answer Audit Changes

**Scope:** Targeted corrections against *Physics_7_Question_Answer_Audit (1).docx* and available course/worksheet sources. All unchanged question records, unit groupings, and navigation sections remain available. This report records implementation; it does **not** certify the questions are identical to the forthcoming exam.

## Files updated

- `questions.js` — clarified question stems and directions for s06, s12, s17, s38, s39, s41, s42, s44, s70 choice A, s71, s72, w1b, w1d, w1h, w3b, schoollab2–5, num11–14. Answer keys for otherwise-correct single-select questions were preserved.
- `math-problems.js` — clarified speed, sign conventions, kinetic-friction assumptions, and rounding for p16, p19, p20, p21, p29, and p30.
- `fbd-exercises.js` — adjusted steep vs. shallow rope directions in LM-5; made LM-7 explicitly frictionless; corrected LM-17 to include normal force; set LM-18 tension direction to approximately 26.6° above horizontal and schematic arrow lengths.
- `fbd-studio.js` — supports additional angle choices; draws contact surface for LM-17; labels diagrams *not to scale*; invalidates previously saved answers for changed LM-5, LM-17, LM-18 only.
- `checks.js` — improved concept explanations and added Earth **529.2 N** and Moon **86.4 N** as separate numerical checks for num13. Added accepted 2-sig-fig rounding for num14.
- `steps.js` — aligned staged explanations with the corrected assumptions and question wording.
- `app.js` — prominent multiple-answer instructions, progressive final-step unlock after an attempt, guided-solution unlock after written work, correct units checking when a student types them, and helpful feedback on multi-select errors.
- `math-tutor.js` — accepts specified rounding alternatives for the relevant 3.6 kg × 7.1 m/s² problem.
- `styles.css` — minor formatting for the multiple-answer instructions.

## High-priority audit findings

**s70:** The answer data was already `[1,2,3]` (B, C, D), which is correct. It was flagged by a scalar-only audit rule, not because the site's answer data was incorrect. The website's multiple-selection interaction has been tested for both correct and incorrect submissions.

**p29:** The wording now explicitly says sliding, a level surface, and *coefficient of kinetic friction*. With `Fn = 5 × 9.8 = 49 N`, `Ff = 0.4 × 49 = 19.6 N` remains correct.

**LM-17:** Contact with the surface and its **Fn** have been restored. Constant velocity requires horizontal and vertical balance. The diagram now rejects an answer omitting Fn.

**LM-18:** The rope angle and relative length have been corrected to be consistent with `Fnet,x = 2mg` and `Fnet,y = 0`. Since arrow lengths are not an independently graded skill in the current builder, the interface explicitly states that diagrams are schematic rather than exact scale.

## Validated without changing the original answer

The source position–time graph in the uploaded 2023 packet was visually compared with the displayed graph: movement 1–3 s and 4.5–6 s, rest 0–1 s and 3–4.5 s, final displacement **0 m**, total distance **80 m**. Existing answer values are retained.

Direction-select fields for p14 (south), p24–p25 (right), and p33 (up) are present. p30 and num14 accept **25.56 N**, **25.6 N**, or **26 N** when entered as an appropriately rounded result.

## Regression checks conducted

- All website JavaScript files passed syntax checks.
- 29 multiple-choice/selection questions, 40 workbook exercises, 33 math problems, 18 force-diagram cases, and 20 mini-lessons remained present.
- All 200 individual math-workshop answer-field expected values passed validation.
- s70: B, C, D selected together passes; an incorrect combination fails; final explanation is held until an attempted answer.
- num13: Earth/Moon values each pass separately; a weight input using kg instead of N fails.
- LM-17: missing normal-force arrow fails; all 18 cases accept their correct force/direction combination.
- The original 2023 graph and the workbook solution were compared visually.

## Boundaries

This is a repository/code and source-document check, **not a confirmed live GitHub Pages browser test**. GitHub Pages could not be independently retrieved during this session. The existing visual design and routing were left intact.

The original audit file remains outside the public website repository; this file records only the changes made.
