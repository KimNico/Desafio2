const fs = require("fs");
const { parse } = require("path/posix");




class Contenedor {
    constructor(url){
        this.url= url;
    }
    async save(producto){
        try{
                return await fs.promises.appendFile(this.url, obj) 
        }catch(error){
            console.log(error);
        }
    }
      getById(id){
        try{
            if(id==true){
                fs.readFileSync(`${this.url}`,"utf-8");
                let obj= producto.find(obj=> obj.id== id);
                return JSON,parse(obj);
                }else{
                    return null;
                }
        }catch(error){
            console.log(error);
        }
    }
    getAll(){
    }

    deleteById(id){
        try{
                fs.readFileSync(`${this.url}`,"utf-8");
                let obj= producto.find(obj=> obj.id== id);
                fs.writeFileSync(`${this.url}`,)
                
        }catch(error){
            console.log(error);


    }
    }
     deleteAll(){
        try{
            return  fs.writeFileSync(`${this.url}`,"");
        }catch(error){
            console.log(error);
        }
    }

}


