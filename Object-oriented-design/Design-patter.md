Pattern - a pattern is a reusable solution template, not a one-size-fits-all blueprint — you apply the same underlying idea differently each time depending on context.

Four elements of pattern:-
Pattern name — A short, memorable label (like "Observer" or "Singleton"). This matters because it builds a shared vocabulary — instead of describing a whole design problem/solution from scratch, you can just say "use a Factory here" and other engineers instantly know what you mean.

Problem — Describes when to use the pattern: what situation, what symptoms in your design (e.g., rigid class structures) signal that this pattern applies, and any preconditions.

Solution — Describes the general structure (classes/objects, their relationships and responsibilities) that solves the problem. Importantly, this is abstract — a pattern isn't literal code you copy-paste, it's a template you adapt to your specific situation.

Consequences — The tradeoffs of using the pattern: what you gain and what you give up (e.g., effects on flexibility, performance, portability). This is included because no design choice is free, and understanding costs/benefits helps you decide whether the pattern is worth applying in your case.

MVC splits a user interface into three separate pieces instead of jumbling everything into one object:

Model — the actual application data/logic (e.g., a list of phone numbers)
View — how that data is displayed on screen (e.g., a listbox showing the numbers)
Controller — the glue that handles user input and connects the View to the Model (e.g., what happens when you click or type)

You can redesign the look of your UI (View) without touching the business logic (Model) or how the input is handled (Controller).
You can change how a value is calculated (business logic) without touching the UI.
You can swap out how/where data is stored without affecting the UI or logic.