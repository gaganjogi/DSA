when you're modeling something that other things will point to (a shared entity), use a foreign key. When you're modeling something that's genuinely private to one parent record and never reused, embedding is fine. The mistake to avoid is assuming upfront that something will stay self-contained forever without actually thinking about whether it represents a real-world entity with independent identity — that's the trap the book is warning about, not a blanket rule against document models.

ne-line summary: "Embedding" = Option 2 (native JSON type), used for nested data that's genuinely private to its parent. Option 3 (plain text) is essentially a legacy fallback with no real advantages — always prefer Option 2 if you're going to embed at all.


CREATE TABLE positions (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    org_id INTEGER REFERENCES organizations(id),  -- foreign key
    title VARCHAR(255)
); foreign key relational model 


{
  "name": "Bill Gates",
  "positions": [
    { "title": "CEO", "org_id": 3 }
  ]
} document reference


What is the best rule of thumb for deciding whether to embed nested data (as JSON) versus normalizing it into its own table with a foreign key?

Embed it if it has no independent identity and won't be referenced elsewhere; normalize it if other records need to reference the same entity