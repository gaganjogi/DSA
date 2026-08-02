Step 1 — Requirements clarification (2–3 min)
Before touching classes: list functional requirements, non-functional requirements, and explicitly state assumptions/edge cases you're excluding. This alone fixes half the "I don't know where to start" feeling.

Step 2 — Identify actors and use cases
Who interacts with the system, and what are they trying to do? Write these as short verb phrases (e.g., "User places order", "Admin cancels booking").

Step 3 — Identify core entities/nouns and their responsibilities
Pull nouns from the use cases. For each, ask: what data does it own, what behavior does it own. This is basic OOP analysis — no patterns yet.

Step 4 — Draw relationships
Association, aggregation, composition, inheritance. Sketch this on paper/whiteboard before code. If you can't explain in one sentence why class A relates to class B, you don't understand your own design yet.

Step 5 — Now look for pattern fit — don't force it
Ask: is there a family of interchangeable algorithms? → Strategy. Do multiple objects need to react to a state change? → Observer. Is object creation logic getting complex or varying by type? → Factory. Do I need to add behavior without touching the base class? → Decorator. If nothing fits, don't force a pattern in — plain OOP is a valid answer.

Step 6 — Code the skeleton
Interfaces first, then concrete classes. Don't write every method body — the goal is to show structure and extensibility, not a working app.

Step 7 — Validate against SOLID
Walk through your own design and ask: if a new requirement came in, would I be modifying existing classes or extending? This is where SOLID stops being theory and becomes a design test.