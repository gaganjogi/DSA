Decorator is a structural design pattern that lets you attach
new behaviors to objects by placing these objects inside
special wrapper objects that contain the behaviors.


interface DataSource {
  writeData(data: string): void;
  readData(): string;
}


class FileDataSource implements DataSource {
  constructor(private filename: string) {}

  writeData(data: string): void {
    console.log(`Writing raw data to ${this.filename}: ${data}`);
  }

  readData(): string {
    console.log(`Reading raw data from ${this.filename}`);
    return "raw data";
  }
}

abstract class DataSourceDecorator implements DataSource {
  protected wrappee: DataSource;

  constructor(source: DataSource) {
    this.wrappee = source;
  }

  writeData(data: string): void {
    this.wrappee.writeData(data); // default: just delegate, do nothing extra
  }

  readData(): string {
    return this.wrappee.readData(); // default: just delegate, do nothing extra
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const encrypted = `ENCRYPTED(${data})`;
    this.wrappee.writeData(encrypted); // add behavior BEFORE calling wrappee
  }

  readData(): string {
    const raw = this.wrappee.readData(); // call wrappee FIRST
    return raw.replace("ENCRYPTED(", "").replace(")", ""); // then add behavior AFTER
  }
}

class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const compressed = `COMPRESSED(${data})`;
    this.wrappee.writeData(compressed);
  }

  readData(): string {
    const raw = this.wrappee.readData();
    return raw.replace("COMPRESSED(", "").replace(")", "");
  }
}



This matches point 4 in "How to Implement": the base decorator must delegate all work to the wrapped object.

This is exactly what the passage means by "Decorators can execute the added behavior either before or after the call to a wrapped object" — writeData() adds its behavior before calling wrappee.writeData(); readData() adds its behavior after calling wrappee.readData()

Reason 1: Avoiding repeated boilerplate

Every single decorator needs the exact same wrappee field and constructor logic — storing the wrapped object. Without the base class, you retype that field + constructor in every concrete decorator, forever. With ~10 decorators (imagine Logging, Caching, Retry, Auth, etc.), that's 10 copies of identical plumbing code. The base decorator exists purely to write that plumbing once.

Reason 2: A concrete decorator only overrides the ONE method it cares about

This is the real practical payoff. Look at EncryptionDecorator — it overrides both writeData() and readData(). But imagine a decorator that only needs to touch writeData() and wants readData() to behave completely normally:

Reason 3: Interfaces can't have implementation — this is the real technical reason

This is the crux of it. In TypeScript (and most OOP languages), an interface can only declare method signatures — it cannot contain a method body.

The base decorator exists because interfaces can't hold default implementations — it's the one place that "delegate everything by default" logic can live, so concrete decorators only write the method(s) they actually want to change.

this.wrappee isn't magic — it's just a regular object reference, set once in the constructor to whatever object was passed in, and this.wrappee.writeData() is a completely ordinary method call on that stored reference.

1. EncryptionDecorator: encrypt the string           (Line A)
2. EncryptionDecorator: call CompressionDecorator     (Line B — starts, but PAUSES)
3. CompressionDecorator: compress the string           (Line C)
4. CompressionDecorator: call FileDataSource           (Line D — starts, but PAUSES)
5. FileDataSource: ACTUALLY WRITE TO DISK              (Line E — this is the real I/O)
6. CompressionDecorator: nothing left, returns
7. EncryptionDecorator: nothing left, returns

Read raw bytes from disk → decompress → decrypt

Reading still starts at the innermost FileDataSource (that's where the actual disk I/O happens, same as writing) — the decorators only apply their "undo" step on the way back up the call stack, in reverse order of how they wrapped the object.