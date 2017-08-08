function Foo(name){
	this.name = name;
}

function Bar(name,surname){
	this.name = name;
	this.surname = surname;
}

function createFactory(){
    var type = window[arguments[0]],
        instance,
        arg = Array.prototype.slice.call(arguments,1);
    if(!type){
        throw new Error("El objeto no existe");
    }
    instance = Object.create(type.prototype);
    //var arg = Array.prototype.slice.call(arguments,1); Las variables han de definirse en el principio de la función.

    type.apply(instance,arg);

    return instance;
}