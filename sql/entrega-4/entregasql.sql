USE entregasql;

CREATE TABLE vehiculos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
marca VARCHAR (50),
modelo VARCHAR (50),
matricula VARCHAR (50) UNIQUE,
tipo VARCHAR (50)
);

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50),
apellidos VARCHAR(50),
numero_cuenta VARCHAR(20),
dni VARCHAR(20),
telefono VARCHAR(20),
email VARCHAR(50),
id_vehiculos INT UNSIGNED
);

CREATE TABLE aparcamientos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
lugar VARCHAR (50),
hora_inicial DATETIME,
hora_final DATETIME,
tiempo_limite DATETIME,
id_usuarios INT UNSIGNED 
FOREIGN KEY(id_usuarios) REFERENCES usuarios(id)
);

CREATE TABLE camaras(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
multa DECIMAL (4, 2),
fecha_aparcamiento DATETIME,
fecha_salida DATETIME,
tiempo_total VARCHAR (50),
id_aparcamientos INT UNSIGNED
FOREIGN KEY(id_aparcamientos) REFERENCES aparcamientos(id)
);


CREATE TABLE usuario_aparcamientos(
id_usuarios INT UNSIGNED,
id_aparcamiento INT UNSIGNED,
FOREIGN KEY (id_usuarios) REFERENCES usuarios(id),
FOREIGN KEY (id_aparcamientos) REFERENCES aparcamientos(id),
PRIMARY KEY (id_usuarios, id_aparcamientos)
);