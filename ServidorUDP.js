var dgram = require('dgram');
var server = dgram.createSocket("udp4");
const v = process.argv;

var usuario = " ";
var password = " ";
ID1 = " Dan Israel Copa Lupe";
ID2 = " Jorge Andres Alanoca Quino ";
ID3 = " Ana Condori Quispe";
// C = 0
server.on("message", function (msg, client) {
    // console.log("cliente conectado: " + msg.toString());
    //const ans = 'Saludos ' + msg + " desde el servidor";
    separador = "/";
    vectorcadena = msg.toString().split(separador);
    if ( msg.toString()== "Usuario/Password") {
        const respuesta = 'Bienvenido al sistema LAB 273';
        server.send(respuesta, 0, respuesta.length,
            client.port, client.address, function () {

                // console.log('enviando mensaje')

            });
        // C = 1;
    } else {
        usuario = vectorcadena[0];
        password = vectorcadena[1];
        // console.log('usuario: ' + usuario);
        // console.log('password: ' + password);
        iniusuario = usuario.split("", 1);
        // console.log(iniusuario[0]);

        switch (iniusuario[0]) {
            case 'd':

                if (usuario == "dcopalupe" & password == "123456") {
                    console.log("cliente conectado: " + msg.toString());
                    respuesta = "Bienvenido" + ID1 + "!!!!!";
                    server.send(respuesta, 0, respuesta.length,
                        client.port, client.address, function () {
        
                            //console.log('enviando mensaje')
                        });
                } else {
                    if (usuario != "dcopalupe" & password == "123456") {
                        respuesta = "El usuario " + usuario + " es incorrecto o no existe";
                        server.send(respuesta, 0, respuesta.length,
                            client.port, client.address, function () {
        
                                //console.log('enviando mensaje')
                            });
                    } else {
                        if (usuario == "dcopalupe" & password != "123456") {
                            respuesta = "La contraseña para " + usuario + " es incorrecta ";
                            server.send(respuesta, 0, respuesta.length,
                                client.port, client.address, function () {
        
                                    //console.log('enviando mensaje')
                                });
                        } else {
                            respuesta = "Error en usuario y password";
                            server.send(respuesta, 0, respuesta.length,
                                client.port, client.address, function () {
        
                                    //console.log('enviando mensaje')
                                });
                        }
                    }
                }

               break ;

            case 'j':

                if (usuario == "jalanocaquino" & password == "1q2w3e4") {
                    console.log("cliente conectado: " + msg.toString());
                    respuesta = "Bienvenido" + ID2 + "!!!!!";
                    server.send(respuesta, 0, respuesta.length,
                        client.port, client.address, function () {
        
                            //console.log('enviando mensaje')
                        });
                } else {
                    if (usuario != "jalanocaquino" & password == "1q2w3e4") {
                        respuesta = "El usuario " + usuario + " es incorrecto o no existe";
                        server.send(respuesta, 0, respuesta.length,
                            client.port, client.address, function () {
        
                                //console.log('enviando mensaje')
                            });
                    } else {
                        if (usuario == "jalanocaquino" & password != "1q2w3e4") {
                            respuesta = "La contraseña para " + usuario + " es incorrecta ";
                            server.send(respuesta, 0, respuesta.length,
                                client.port, client.address, function () {
        
                                    //console.log('enviando mensaje')
                                });
                        } else {
                            respuesta = "Error en usuario y password";
                            server.send(respuesta, 0, respuesta.length,
                                client.port, client.address, function () {
        
                                    //console.log('enviando mensaje')
                                });
                        }
                    }
                }

               break ;
            case 'a':

                if (usuario == "acondoriquispe" & password == "54321") {
                    console.log("cliente conectado: " + msg.toString());
                    respuesta = "Bienvenido" + ID3 + "!!!!!";
                    server.send(respuesta, 0, respuesta.length,
                        client.port, client.address, function () {
        
                            //console.log('enviando mensaje')
                        });
                } else {
                    if (usuario != "acondoriquispe" & password == "54321") {
                        respuesta = "El usuario " + usuario + " es incorrecto o no existe";
                        server.send(respuesta, 0, respuesta.length,
                            client.port, client.address, function () {
        
                                //console.log('enviando mensaje')
                            });
                    } else {
                        if (usuario == "acondoriquispe" & password != "54321") {
                            respuesta = "La contraseña para " + usuario + " es incorrecta ";
                            server.send(respuesta, 0, respuesta.length,
                                client.port, client.address, function () {
        
                                    //console.log('enviando mensaje')
                                });
                        } else {
                            respuesta = "Error en usuario y password";
                            server.send(respuesta, 0, respuesta.length,
                                client.port, client.address, function () {
        
                                    //console.log('enviando mensaje')
                                });
                        }
                    }
                }
        

               break ;
            default:
                respuesta = "ErRror en usuario y password";
                server.send(respuesta, 0, respuesta.length,
                    client.port, client.address, function () {

                        // console.log('enviando mensaje')
                    });
        }

    }

});
server.on('listening', function () {
    const address = server.address();
    console.log(
        'servvidor corriendo en puerto: ' + address.port);
    // const ans = 'Bienvenidos al sistema Lab273'; 
    //  server.send(ans, 0, ans.length,
    //      8887, '127.0.0.1', function () {
    //          console.log('enviando mensaje')
});

server.bind(v[2]);