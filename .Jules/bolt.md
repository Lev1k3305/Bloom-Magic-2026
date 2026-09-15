## 2026-03-31 - Canvas Path Batching Performance
**Learning:** Calling `beginPath()` and `fill()` inside a per-particle loop on HTML5 2D canvas causes excessive draw calls and CPU/GPU pipeline context switches per frame. Batching sub-paths into a single path and executing one `fill()` call dramatically reduces frame render times.
**Action:** Always batch canvas shapes sharing identical styles into a single `beginPath()`/`fill()` sequence inside `requestAnimationFrame` render loops.
