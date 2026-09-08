enum LogLevel{
    INFO=0,
    WARN=1,
    ERROR=2
}
interface LogDestination{
    writeMessage(formattedMessage:string):void
}

interface Formatter{
    format(level:LogLevel,info:string,date:Date):string
}
class Logger {
    private formatter:Formatter
   private static instance:Logger | null=null
   private destinations:LogDestination[]=[]
   private minLevel:LogLevel
   private constructor(){
    this.minLevel=LogLevel.INFO
    this.formatter=new PlainTextFormatter()
   }

   static getInstance():Logger{
         if(!Logger.instance){
            Logger.instance=new Logger()
         }
       return Logger.instance
    }


    setMinLevel(level:LogLevel):void{
        this.minLevel=level
    }

    log(level:LogLevel,message:string):void{
        if(level>=this.minLevel){
        

           let formatted_message= this.formatter.format(level,message,new Date())
            this.destinations.forEach((destination)=>{
                destination.writeMessage(formatted_message)
            })  
        }
    }
    addDestination(destination:LogDestination):void{
        this.destinations.push(destination)
    }

   setFormatter(format:Formatter){
    this.formatter=format
   }
}


class ConsoleLogger implements LogDestination{
    constructor(){}
    writeMessage(formattedMessage:string):void{
        console.log(formattedMessage)
    }
}

class FileLogger implements LogDestination{
    constructor(){}
    writeMessage(formattedMessage:string):void{
        console.log(`written to file  ${formattedMessage}`)
    }
}

class PlainTextFormatter implements Formatter{
    constructor(){}
    format(level:LogLevel,info:string,date:Date):string{
        let val=LogLevel[level]
        return `[${date.toISOString()}] [${val}] ${info}`
    }
}

class JsonFormatter implements Formatter{
    constructor(){}
    format(level:LogLevel,info:string,date:Date):string{
        let val=LogLevel[level]
        let object={
            timestamp: date.toISOString(),
            level:val,
            message:info
        }
        return JSON.stringify(object)
    }
}

let console_logger= new ConsoleLogger()

const logger=Logger.getInstance()

logger.addDestination(console_logger)
logger.log(LogLevel.INFO,'hello info')
logger.log(LogLevel.WARN,'hello warn')
logger.log(LogLevel.ERROR,'hello error')

logger.setFormatter(new JsonFormatter())

logger.log(LogLevel.INFO,'hello info')
logger.log(LogLevel.WARN,'hello warn')
logger.log(LogLevel.ERROR,'hello error')
