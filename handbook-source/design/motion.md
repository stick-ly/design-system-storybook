# Motion and tile-game animation direction

> Status: current product motion policy, migrated from webapp agent guidance on 2026-10-02.
> Scope: standalone tile game. Inline review is a distinct experience; do not apply game sequencing blindly.

## Tile Game Animation Direction

Treat the tile game as a cast of tiny, quirky characters rather than a grid of
moving controls. Apply Disney animation principles selectively: motion should
make state, causality, and personality instantly legible, but must never slow a
fluent player down.

### Interaction and sequencing

1. **Input latency wins.** A tap must update game state immediately. Never wait
   for a celebration, disappearance, row transition, or sound before activating
   the next playable row.
2. **Move gameplay first; celebrate in parallel.** Retire a completed row and
   move the next row into the thumb's position immediately. Continue the
   correct-tile celebration as a detached, non-interactive visual so it cannot
   cover, move, or block the next target.
3. **Preserve spatial continuity.** A correct tile travels from its tapped
   position into the challenge answer slot and becomes the entered character.
   Do not make it disappear in one place and independently appear in another.
4. **Keep routine feedback short.** Hover/press reactions should feel immediate;
   wrong feedback should resolve in roughly 300ms; a richer correct handoff may
   run around 600 to 650ms only because gameplay proceeds concurrently.
5. **Animations are interruptible decoration.** Rapid taps, a new challenge,
   navigation, or reduced-motion preferences must not leave stale ghosts,
   blocked pointer events, delayed rows, or hidden answer characters.

### Motion language

1. **Anticipation:** use a brief press or crouch before a launch so the direction
   and energy are readable. Keep it small enough that the response still feels
   immediate.
2. **Squash and stretch:** deform along the force of movement, a wide squash on
   press/landing, a narrow stretch on launch, while preserving the tile's volume
   and recognizability.
3. **Arcs:** character motion follows a shallow curved path rather than a linear
   UI tween. Rotation may support the arc, but should settle cleanly.
4. **Follow-through and overshoot:** land slightly past the resting pose, then
   rebound once. Avoid repeated bounces or elastic motion that delays clarity.
5. **Staging:** one action owns attention at a time. The selected tile remains
   readable during flight; inactive rows stay visually subordinate; effects
   remain local and never obscure the active row.
6. **Secondary action:** eyes, mouth, face lift, ripple, and tiny spark accents
   follow the primary body movement. They support the emotion instead of
   competing with the selection.
7. **Timing expresses meaning:** correct motion is confident and buoyant; wrong
   motion is quick, startled, and conclusive; idle motion is occasional,
   curious, and quiet; power-up motion is special but does not constantly demand
   attention.

### Character reactions

- **Hover:** the face rises slightly and looks alert, inviting a tap.
- **Press:** the tile compresses under the pointer/thumb before release.
- **Correct:** the tile crouches, launches with happy eyes/smile, arcs into the
  answer slot, and becomes an ordinary character. The challenge catches it with
  a compact squash to rebound, amber ripple, and restrained sparkle.
- **Wrong:** the tile startles, wiggles with diminishing amplitude, briefly
  reveals its expression, then disappears decisively. Do not leave dead space
  or wait for a long shake.
- **Idle/waiting:** after a meaningful pause, a tile may peek, blink, or glance
  around once. Idle behavior must be sparse, asynchronous, and stop as soon as
  the player interacts.
- **Power-up:** give it a distinct anticipatory/idle personality and a clear
  reaction when used, while preserving the same immediate-input rule.
- **Success:** build from the final correct action into the success state. Use a
  clear visual payoff and emotional release, but keep continuation available
  immediately for impatient players.

### Tile construction and visual invariants

1. Active tiles contain exactly two structural shapes: a dark amber base and a
   bright amber face. Do not simulate depth with an additional amber shadow,
   stripe, or duplicate face layer.
2. The bright face is the moving character surface. It may lift above the
   original tile bounds to reveal the eyes and smile on the base; keep tile
   overflow visible where required.
3. Active tiles are fully opaque. Inactive tiles may be subdued, but their
   translucency must not reveal unintended duplicate layers or break the eye
   animation.
4. Effects should transform and composite existing layers where practical;
   avoid layout-driven animation of the live grid.
5. Provide a coherent `prefers-reduced-motion` path that preserves state and
   feedback without decorative travel, shaking, or repeated idle movement.

Use the working Storybook game flow to judge sequencing, not isolated tile
states alone: `Game/Game Demo -> Working Tile Game`. Also verify mobile, where a
delayed row movement is especially disruptive because the player's thumb
expects the next target to occupy the position just tapped.


## Shared motion foundation

Use the runtime `--motion-fast`, `--motion-normal`, `--ease-standard`, and
`--ease-bounce` tokens for ordinary control feedback. Those tokens do not override
the game-specific durations above. Product controllers own sequence state,
sound, grading and cancellation; components present it. Honor reduced motion
and preserve immediate, keyboard-accessible continuation on every surface.
