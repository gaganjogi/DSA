

class Movie{
    constructor(private id:number,private name:string,private durations_in_minutes:number){}

    getMovieId():number{
        return this.id
    }
    getMovieName():string{
        return this.name
    }
    getMovieTime():number{
        return this.durations_in_minutes
    }
}


class Seat{
    constructor(private id:number,private price:number,private row:string,private category:'CLASSIC' | 'LUXURY' | 'PREMIUM'){
    }
    getSeatId():number{
return this.id
        }
        getSeatPrice():number{
            return this.price
        }
        getSeatRow():string{
            return this.row
        }
        getCategory(){
            return this.category
        }
        
}
class MovieScreen{
    constructor(private id:number,private seats:Seat[]){}
    getScreenId():number{
        return this.id
    }
    getAllSeats():Seat[]{
return this.seats
    }
    
}

class Show{
    private booked_seats:Seat[]
    constructor(private movie:Movie,private screen:MovieScreen,private start_time:Date){
        this.booked_seats=[]
    }

    getMovieShow():Movie{
        return this.movie
    }
    getMovieScreen():MovieScreen{
        return this.screen
    }
    getMovieStartTime():Date{
return this.start_time
    }
    getBookedSeats():Seat[]{
        return this.booked_seats
    }

    isSeatAvailable(seat:Seat){
     for(let booked_seat of this.booked_seats){
        if(booked_seat.getSeatId()===seat.getSeatId()) return false
     }
     return true
    }
    
    bookSeat(seats:Seat[]):boolean{
        for(let seat of seats){
            if(!this.isSeatAvailable(seat)) return false
        }

        for(let seat of seats){
            this.booked_seats.push(seat)
        }

        return true
    }
    
}
class Theatre{
    private screens:MovieScreen[]
    private shows:Show[]
    constructor(private id:number,private address:string){
        this.screens=[]
        this.shows=[]
    }

    getScreens(){
        return this.screens
    }
    getShows(){
        return this.shows
    }
     addScreens(screen:MovieScreen){
        this.screens.push(screen)
     }
     addShow(show:Show){
        this.shows.push(show)
     }

}

class City{
    private theatres_list:Theatre[]
    constructor(private name:String){
        this.theatres_list=[]
    }

    getCityName(){
        return this.name
    }

    getTheatresList(){
        return this.theatres_list
    }

    addTheatre(theatre:Theatre){
        this.theatres_list.push(theatre)
    }


}
class BookingSystem{
    private cities:City[]
    constructor(){
        this.cities=[]
    }

    addCity(city:City){
        this.cities.push(city)
    }

    getShowsForMovie(city:City,movie:Movie):Show[]{
        let theatres_list=city.getTheatresList()
        let shows:Show[]=[]
        for(let theatre of theatres_list){
            shows.push(...theatre.getShows())
        }
        let result:Show[]=[] 
        for(let show of shows){
            let show_movie=show.getMovieShow()
            if(show_movie===movie){
result.push(show)
            }
        }
     
        return result

    }

    bookSeats(show:Show,seats:Seat[]):boolean{
       return show.bookSeat(seats)
    }




}


In your class design, show that you understand where the atomicity boundary needs to be — e.g., Show.bookSeat(seat) should be the one, single, indivisible operation that both checks-and-marks-booked, rather than two separate steps (isSeatAvailable() then addBookedSeat()) called separately by the caller with a gap in between.

Verbally/in comments, explain that in a real deployment, this method's actual implementation would delegate to an atomic database operation, and that the in-memory TypeScript version here is a simplified stand-in for that guarantee.