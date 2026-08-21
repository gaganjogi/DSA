interesting state is subject as it will notify events so it is called publisher and one objects that listen to these objects are called subscribers 

manily in publisher class we will be having list of subscribers and a way to add or remove subscriber

Two things:-
an array field for storinga list of references to subscriber objects

several public methods which allow adding subscribers to and removing them from thatlist.

and one more thing publisher class will not be tightly coupled to any subscriber class 

both publisher and subscriber both talk with interface to make there work done

subscribers implement the same interface and that th epublisher communicates with them only
via that interface


interface Observer {
  update(temp: number): void; // one shared method name, ANY subscriber can implement
}

class WeatherStation {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  setTemperature(temp: number) {
    for (const observer of this.observers) {
      observer.update(temp); // WeatherStation doesn't know or care WHO these are
    }
  }
}

class MobileAppNotifier implements Observer {
  update(temp: number) {
    console.log(`Push notification: it's ${temp}°`);
  }
}

const station = new WeatherStation();
station.subscribe(new MobileAppNotifier()); // works, even though WeatherStation
                                              // never heard of this class before
station.setTemperature(30);

The publisher shouldn't need to know its subscribers' names — it should only need to know they all speak the same "update" language, so anyone (even code written later, by someone else) can plug in.

IMPORTANT
In Observer, the publisher directly holds references to and calls its observers; in pub-sub, a broker/message channel sits between publisher and subscriber, and they never reference each other directly