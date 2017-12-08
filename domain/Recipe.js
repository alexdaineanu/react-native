export class Recipe{
    constructor(name, content){
        this.name = name;
        this.content = content;
        this.id = null;
    }
    getName(){
        return this.name;
    }
    getContent(){
        return this.content;
    }

    setName(name){
        this.name = name;
    }

    setContent(content){
        this.content = content;
    }

    setId(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }
}