# Time & Space Complexity — Interview Notes

---

## 1. Core Rules

**Big-O = growth rate, not speed.** If input grows 10×, how much more work?

| Complexity | Work when n → 10n |
|---|---|
| O(1) | same |
| O(log n) | +3 steps |
| O(n) | 10× |
| O(n log n) | ~13× |
| O(n²) | 100× |
| O(2ⁿ) | dead |

**Two rules (both follow from f(n) ≤ c·g(n) for n ≥ n₀):**
1. **Drop constants** — O(5n) = O(n/2) = O(n)
2. **Drop lower terms** — O(n² + 1000n) = O(n²)

**O vs Θ vs Ω**
- O = upper bound (≤), Ω = lower bound (≥), Θ = tight (=)
- Everyone writes O, means Θ. Give the **tight** bound.

**Case ≠ Bound.** Case = which input. Bound = O/Θ/Ω. Independent axes.
- Default answer = **worst case**, unless average is famously different (quicksort, hashmap).

| | Best | Avg | Worst |
|---|---|---|---|
| Quicksort | n log n | n log n | **n²** |
| Hashmap lookup | 1 | 1 | **n** |
| Merge sort | n log n | n log n | n log n |

---

## 2. Loop Counting — 3 Steps

> 1. Write how many times the innermost line runs, **as a sum**
> 2. Evaluate to closed form
> 3. Drop constants + lower terms

**Never skip to step 3.**

| Code | Count | Answer |
|---|---|---|
| `for i in range(n)` | n | O(n) |
| nested, independent | n² | O(n²) |
| `for j in range(i, n)` | n(n+1)/2 | **O(n²)** |
| `while i < n: i *= 2` | log₂n | O(log n) |
| two loops **sequential** | 2n | **O(n)** |
| `for i in range(n//2)` | n/2 | O(n) |
| inner loop bound = 26 | 26n | **O(n)** |
| `for i in n: for j in m` | nm | **O(n·m)** not n² |
| `if i%2: <n² work>` | n²/2 | O(n²) |

**Key traps**
- Nested = multiply. Sequential = **add**.
- Half of n² is still n². Never write "O(n²/2)" — not valid notation.
- Grid problems → O(rows × cols), not O(n²).

**Derive log, don't recite it**
```
i *= 2  →  after k steps i = 2^k  →  2^k = n  →  k = log₂n
binary search → n/2^k = 1 → 2^k = n → k = log₂n
```
Base doesn't matter (log₃n = log₂n / const).

---

## 3. Amortized / Aggregate — THE key idea

> Don't ask how many times the inner loop runs **per** outer iteration.
> Ask how many times it can run **in total, over the whole run**.

**Sliding window / two pointer → O(n)**
```python
left = 0
for right in range(n):
    while left < right and bad():
        left += 1        # left only increases, capped at n
```
`left` moves ≤ n times TOTAL → O(n), not O(n²).

**Counter-example — the reset kills it**
```python
for right in range(n):
    left = 0             # ← RESET → O(n²)
```
👉 **Look for the reset.** Monotonic pointer across whole run = O(n).

**Monotonic stack → O(n)** — each element pushed once, popped once.

**Dynamic array append = O(1) amortized**
- Resize doubles: copies cost 1+2+4+…+n < 2n → O(1) per op
- If it grew by +1 instead → O(n²) total

**Amortized ≠ average case**
- Average = over random inputs (bad input can be slow)
- Amortized = over a sequence of ops (**always** holds)

---

## 4. Recursion

### Step 1 — Write the recurrence
Read off the code: (a) how many calls, (b) how much smaller, (c) non-recursive work.

### Step 2 — Classify the family
| Family | Shrink | **Depth** |
|---|---|---|
| **Subtract** | n → n−1 | **n** |
| **Divide** | n → n/2 | **log n** |

Nodes = b^depth → subtract gives **bⁿ**, divide gives **n^(log₂b)**.
Same branching, totally different world.

### Step 3 — Work per level → 3 patterns
Ask: going down, does per-level work stay **flat**, **shrink**, or **grow**?

| Pattern | Result | Example |
|---|---|---|
| **Flat** (nodes double, work halves) | work × log n | `2T(n/2)+n` → n log n |
| **Shrinking** (geometric ↓) | **root wins** | `T(n/2)+n` → **O(n)** |
| **Growing** (geometric ↑) | **leaves win** | `2T(n/2)+1` → O(n) |

*This IS the Master Theorem.* Formal: `T(n)=aT(n/b)+O(n^d)`, compare **d** vs **log_b a**.

### Master table — cover answers, re-derive

| Recurrence | Time | Space | Example |
|---|---|---|---|
| T(n−1) + O(1) | O(n) | O(n) | factorial |
| T(n−1) + O(n) | O(n²) | O(n) | recursive reverse w/ slice |
| 2T(n−1) + O(1) | O(2ⁿ) | O(n) | Hanoi |
| T(n−1)+T(n−2) | O(1.618ⁿ) | O(n) | naive fib |
| n·T(n−1) | O(n!) | O(n) | permutations |
| T(n/2) + O(1) | O(log n) | O(log n) | binary search |
| T(n/2) + O(n) | **O(n)** | O(log n) | quickselect avg |
| 2T(n/2) + O(1) | O(n) | O(log n) | tree traversal |
| 2T(n/2) + O(n) | O(n log n) | O(log n) | merge sort |
| 4T(n/2) + O(n) | O(n²) | O(log n) | naive matmul |

**Two comparisons that contain the topic:**
- `2T(n−1)` = O(2ⁿ) vs `2T(n/2)` = O(n) — shrink factor is everything
- `2T(n/2)+n` = n log n vs `T(n/2)+n` = O(n) — one extra call changes it

### Backtracking
```
Time = (number of solutions) × (cost to build each)
```
| Problem | Time | Space |
|---|---|---|
| Subsets | O(2ⁿ · n) | O(n) |
| Permutations | O(n! · n) | O(n) |
| Combinations C(n,k) | O(C(n,k) · k) | O(k) |
| N-Queens | O(n!) | O(n) |
| All grid paths | O(2^(m+n)) | O(m+n) |

### Recursion traps
1. **Hidden work in args** — `solve(arr[1:])` is O(n) per call → O(n²) time AND space. Pass indices.
2. **Time ≠ space** — fib: 2ⁿ calls, but **O(n)** space (only one root→leaf path alive at a time)
3. **Memoization changes the rule** → `Time = (distinct states) × (work per state)`. fib: 2ⁿ → **O(n)**. Grid paths: 2^(m+n) → **O(m·n)**
4. **Balanced split is an assumption** — quicksort worst = T(n−1)+n = O(n²)

---

## 5. Space Complexity

**Asked = auxiliary space** (what YOU allocate). Input doesn't count.

**Counts ✓**
- Extra structures (map, set, array you create)
- **Recursion call stack** ← most-missed
- Hidden copies (slicing!)

**Doesn't count ✗**
- Input array
- Output array *when it is the answer* — say "O(1) excluding output"

> **Time = total number of calls. Space = maximum depth of tree.**

| Structure | Space |
|---|---|
| Recursion depth n | O(n) |
| Binary tree traversal | **O(h)** — log n balanced, n skewed |
| DFS on graph | O(V) |
| Merge sort | O(n) |
| In-place quicksort | **O(log n)** — stack, not O(1) |

"In place" = O(1) auxiliary. Recursive in-place still pays for the stack.

---

## 6. Python Hidden Costs

| Op | Cost | |
|---|---|---|
| `lst[i]`, `append`, `pop()`, `len` | O(1) | |
| **`lst.pop(0)` / `insert(0,x)`** | **O(n)** | use `deque` |
| **`x in lst`** | **O(n)** | use `set` → O(1) |
| `lst[i:j]` | O(j−i) | **copies** |
| `sort()` / `sorted()` | O(n log n) | |
| **`s += c` in loop** | **O(n²)** | use `''.join(list)` |
| `heappush/pop` | O(log n) | |
| **`heapify`** | **O(n)** | not n log n |
| `deque.appendleft/popleft` | O(1) | |
| `Counter(lst)` | O(n) | |
| `set1 & set2` | O(min) | |

**Four that actually TLE you:**
1. `pop(0)` for BFS queue → O(n²)
2. String `+=` in loop → O(n²)
3. `in` on list inside loop → O(n²)
4. `arr[1:]` in recursion → O(n²)

---

## 7. Constraints → Complexity (read BEFORE coding)

~**10⁸ ops/sec**

| n ≤ | Target | Technique |
|---|---|---|
| 10–12 | O(n!) | permutations |
| 20–25 | O(2ⁿ) | subsets, bitmask DP |
| 100–500 | O(n³) | Floyd-Warshall, interval DP |
| 2k–5k | O(n²) | 2D DP |
| 10⁵–10⁶ | O(n log n) | sort, heap, sliding window, binary search |
| 10⁷–10⁸ | O(n) | one pass, prefix sum, hashing |
| 10⁹+ | O(log n)/O(1) | math, binary search on answer |

- n ≤ 10⁵ **eliminates nested loops** before you write a line
- Small n is a **hint**, not mercy — n ≤ 20 means exponential is intended
- Log factors are free: n→n log n at 10⁶ is 20×; n log n→n² is 50,000×

---

## 8. Say-It-Out-Loud Lines

Memorize these phrasings for the interview:

- *Sliding window:* "Each element enters and leaves the window at most once, so total pointer movement is bounded by 2n → O(n)."
- *Binary search:* "After k steps the space is n/2ᵏ; we stop at 1, so 2ᵏ = n, k = log₂n."
- *Recursive space:* "O(n) from the call stack — the frames, not the input."
- *Merge sort:* "log n levels, O(n) merging per level → O(n log n)."
- *Fib memo:* "n distinct states, O(1) each → O(n) time, O(n) space."
- *Append:* "O(1) amortized — doubling makes total copy cost < 2n."
- *Excluding output:* "O(1) auxiliary space, excluding the output array."

---

## 9. Mastery Checklist

- [ ] Write the operation-count **sum** before naming a complexity
- [ ] Explain sliding window O(n) vs the reset version O(n²)
- [ ] State recursive space as **depth**, never call count
- [ ] Derive log from 2ᵏ = n, not "it halves"
- [ ] Spot `arr[1:]` as hidden O(n)
- [ ] Read constraints **before** choosing approach
- [ ] Explain O(1) amortized append via geometric series
- [ ] Never write O(n²/2)

**The habit:** on every problem, before submitting —
```
# Time: O(n) — each element enters and leaves the window once
# Space: O(k) — map holds at most k distinct chars
```
Time, space, one sentence of *why*. Check against editorial. 30 reps = instinct.