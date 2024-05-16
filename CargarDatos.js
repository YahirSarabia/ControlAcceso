const models = require('./models');

async function CargarDatos() {
    const departamento1 = await models.Departamento.create({
        Nombre_Dpto: 'Sistemas'
    });

    const departamento2 = await models.Departamento.create({
        Nombre_Dpto: 'Mantenimiento'
    });

    const departamento3 = await models.Departamento.create({
        Nombre_Dpto: 'Hosters'
    });

    const empleado1 = await models.Empleado.create([
        {
            Id_Empleado: 321,
            Nombre: 'Juanito ',
            Apellido: 'Rosas Ala',
            PIN: '1234',
            HuellaD: 'jdiiw2i9',
            Id_Dpto: 1
        },
        {
            Id_Empleado: 213,
            Nombre: 'Pepe',
            Apellido: 'Gutierrez',
            PIN: '1234',
            HuellaD: 'jdiiw2i9',
            Id_Dpto: 1
        },
        {
            Id_Empleado: 321,
            Nombre: 'Juanito ',
            Apellido: 'Rosas Ala',
            PIN: '1234',
            HuellaD: 'jdiiw2i9',
            Id_Dpto: 1
        }
    ]);


}

CargarDatos();