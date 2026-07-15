interface DocumentElement{
    render():string
}

class TextElement implements DocumentElement{
    text:string
    constructor(text:string){
        this.text=text
    }
    render(){
        return this.text
    }
}

class ImageElement implements DocumentElement{
    image_text:string
    constructor(text:string){
        this.image_text=text
    }
    render() {
        return this.image_text
    }
}


class NewLine implements DocumentElement{
       render(): string {
           return "\n"
       }     
}

class TabSpace implements DocumentElement{
    render(): string {
        return "\t"
    }
}

class DocumentSheet{
    DocumentElements:DocumentElement[]=[]

    addElement(text:DocumentElement){
        this.DocumentElements.push(text)
    }

    render(){
        let result=""
        for(let i of this.DocumentElements){
            result+=i.render()
        }
        return result
    }
}

interface DBpersistence{
    save(sheet:DocumentSheet):void
}


class SaveToFile implements DBpersistence{
    save(sheet:DocumentSheet): void {
        console.log(sheet)
        return
    }
}

class SaveToMongoDb implements DBpersistence{
    save(sheet:DocumentSheet): void {
        console.log(sheet)
        return
    }
}


class DocumentEditor{
    sheet: DocumentSheet
   peristence:DBpersistence
    constructor(sheet:DocumentSheet,storage:DBpersistence){
        this.sheet=sheet
        this.peristence=storage
    }

   addTextElemet(text:string){
    return  this.sheet.addElement(new TextElement(text))
   }
   addImageElement(text:string){
    return this.sheet.addElement(new ImageElement(text))
   }

   render(){
return this.sheet.render()
}

   save_storage(){
     return this.peristence.save(this.sheet)
   }
}


let first_doc=new DocumentSheet()
let save_file=new SaveToFile()
let first_element=new DocumentEditor(first_doc,save_file)

first_element.addTextElemet('gagan')
first_element.addImageElement('gagan.png')
console.log(first_element.render())
first_element.save_storage()