var dgram = require('dgram');
var data = new Buffer.from("Usuario/Password");
var client = dgram.createSocket("udp4");
client.send(data, 0, data.length, 7000, "localhost", function (err,
 bytes) {
if (err)
console.error('error: ' + err);
//else
// console.log('OK');
// client.close();
});

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//var c=0;
client.on('message', function(msg){
    v=msg.toString().split(" ", 1);
    
        if(msg.toString() != "Bienvenido al sistema LAB 273" & v[0] == "Bienvenido"){
        console.log(msg.toString());
        client.close(); 
        rl.close();
  //      c=1;
      }else{
        console.log(msg.toString()); 
        console.log(
        'Ingrese '+'su usuario '
        +'y contraseña'
        +'(user/pass)');
    }
});
rl.on('line', function(mensaje)  {
    if(mensaje == 'ADIOS'){
        client.close();
        rl.close();
    }else{
        client.send(mensaje, 0, mensaje.length, 7000, "localhost", function (err,
            bytes) {});
    }
});
client.on('close', function (){
    // console.log('conexión terminada');
})
