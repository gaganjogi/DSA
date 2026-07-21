//mainly in observer pattern we have subject and observer
//subject is the object that is being observed
//observer is the object that is observing the subject
//when subject changes its state then it will notify all the observers
//observers will update their state according to the subject's state

//both observable and observer are interfaces
//observable has attach, detach, notify methods
//observer has update method

//defintion :- defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

interface Observable {
    subscribe(observer:Observer):void
    unsubscribe(observer:Observer):void
    notify():void
}

interface Observer {
    update():void
}

class Channel implements Observable {
    subscribers:Observer[] = []
    name:string
    constructor(name:string) {
        this.name = name
    }
    subscribe(observer:Observer):void {
        this.subscribers.push(observer)
    }
    unsubscribe(observer:Observer):void {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer)
    }
    notify():void {
        this.subscribers.forEach(subscriber => subscriber.update())
    }
    
    uploadVideo():void {
        console.log("Video uploaded")
        this.notify()
    }
    getVideo():void {
        console.log("Video details")
    }
}

class Subscriber implements Observer {
    channel:Channel
    name:string
    constructor(channel:Channel, name:string) {
        this.channel = channel
        this.name = name
    }
    update():void {
        console.log(`${this.name} received notification from ${this.channel.name}`)
        this.channel.getVideo()
    }
}

const youtubeChannel = new Channel("Youtube")
const youtubeSubscriberOne = new Subscriber(youtubeChannel, "John")
const youtubeSubscriberTwo = new Subscriber(youtubeChannel, "Tom")


youtubeChannel.subscribe(youtubeSubscriberOne)
youtubeChannel.subscribe(youtubeSubscriberTwo)

youtubeChannel.uploadVideo()


youtubeChannel.unsubscribe(youtubeSubscriberTwo)

youtubeChannel.uploadVideo()
