(function(scope){
    
var Foo = function(name){
    this.name = name
}
Foo.prototype.write = function(){
    console.log(this.name +" from public methods");
}
Foo.prototype._write = function(){
    console.log(this.name +" from private methods");
}
Foo.write = function(){
    console.log(" method static");
}

scope.Foo = Foo;

}(window.myNamespace));




