State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

In the State pattern, the particular
states may be aware of each other and initiate transitions from
one state to another, whereas strategies almost never know
about each other.


Context stores a reference to one of the concrete state objects
anddelegatestoitallstate-specificwork

The State interface declares the state-specific methods. These
methods should make sense for all concrete states

Concrete States provide their own implementations for the
state-specific methods.

interface State {
  clickLock(): void;
  clickPlay(): void;
  clickNext(): void;
  clickPrevious(): void;
}

class AudioPlayer {
  private state: State;

  constructor() {
    this.state = new ReadyState(this); // starts in the "Ready" state
  }

  changeState(state: State): void {
    this.state = state; // swap the active state object
  }

  // UI methods just delegate to whatever state is currently active
  clickLock(): void { this.state.clickLock(); }
  clickPlay(): void { this.state.clickPlay(); }
  clickNext(): void { this.state.clickNext(); }
  clickPrevious(): void { this.state.clickPrevious(); }

  // Service methods the states can call on the context
  startPlayback(): void { console.log("Playback started"); }
  stopPlayback(): void { console.log("Playback stopped"); }
  nextSong(): void { console.log("Next song"); }
  previousSong(): void { console.log("Previous song"); }
}

abstract class BaseState implements State {
  constructor(protected player: AudioPlayer) {}
  abstract clickLock(): void;
  abstract clickPlay(): void;
  abstract clickNext(): void;
  abstract clickPrevious(): void;
}

class LockedState extends BaseState {
  clickLock(): void {
    // Unlocking can go to one of TWO different states — depends on context
    this.player.changeState(new ReadyState(this.player));
  }
  clickPlay(): void { /* locked, do nothing */ }
  clickNext(): void { /* locked, do nothing */ }
  clickPrevious(): void { /* locked, do nothing */ }
}

class ReadyState extends BaseState {
  clickLock(): void {
    this.player.changeState(new LockedState(this.player));
  }
  clickPlay(): void {
    this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
  }
  clickNext(): void { this.player.nextSong(); }
  clickPrevious(): void { this.player.previousSong(); }
}

class PlayingState extends BaseState {
  clickLock(): void {
    this.player.changeState(new LockedState(this.player));
  }
  clickPlay(): void {
    this.player.stopPlayback();
    this.player.changeState(new ReadyState(this.player));
  }
  clickNext(): void { this.player.nextSong(); }
  clickPrevious(): void { this.player.previousSong(); }
}

const player = new AudioPlayer();

player.clickPlay();   // ReadyState → starts playback → becomes PlayingState
player.clickPlay();   // PlayingState → stops playback → becomes ReadyState
player.clickLock();   // ReadyState → becomes LockedState
player.clickPlay();   // LockedState → does nothing, still locked
player.clickLock();   // LockedState → becomes ReadyState (or PlayingState, if it was playing)