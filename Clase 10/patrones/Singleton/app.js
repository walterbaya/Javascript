const miConexion = BDTIGRE.crearBD("localhost", "root", "123", "limon");
miConexion.conectar();
miConexion.consultar("select 1");

//Se duplica la capacidad del servidor

const miConexion2 = BDTIGRE.crearBD("localhost", "root", "123", "limon");
miConexion2.conectar();
miConexion2.consultar("select 1");