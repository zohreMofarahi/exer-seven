//.................تمرین اول........

// function Univercity (className,classUnit,classCapasity) {
// this.className=className;
// this.classUnit=classUnit;
// this.classCapasity=classCapasity;

// }

//  const softEngineeringClass= new Univercity ("softEngineeringClass",3,50)
//  softEngineeringClass.book= "clean code"
//  const networkClass= new Univercity ("networkClass",7,55)
//  networkClass.project= "true"

//  console.log(   JSON.stringify(softEngineeringClass))
//  console.log( JSON.stringify(networkClass) )

//.................تمرین دوم........

class Media {
    constructor (name,content,Creator) {
        this.name=name;
        this.content=content;
        this.Creator=Creator;
    }
    logMedia () {
    console.log `(name: ${this.name} , content: ${this.content} , creator: ${this.Creator} )`
}
}

class Book extends Media {
    constructor (nameBook="", contentBook ="", authorBook=""  ) {
    super (nameBook,contentBook,authorBook)
}}

const cleancode= new Book  ("Clean Code: A Handbook of Agile Software Craftsmanship","programming","Robert C. Martin")
console.log (JSON.stringify(cleancode))


class Film extends Media {
    constructor (namefilm="", contentfilm ="", authorfilm=""  ) {
    super (namefilm,contentfilm,authorfilm)
}}

const TheSocialNetwork= new Film  ("The Social Network","FACEBoOK"," David Andrew Leo Fincher")
console.log (JSON.stringify(TheSocialNetwork))
