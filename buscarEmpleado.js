function buscarEmpleado() {
    const rutInput = document.getElementById('rutInput').value.trim().toLowerCase();

    // Realizar la solicitud para obtener el archivo JSON
    fetch('Personal.json')
    .then(response => response.json())
    .then(data => {
        // Buscar al empleado por su RUT
        const empleadoEncontrado = data.find(empleado => empleado.RUT.toLowerCase() === rutInput);

        if (empleadoEncontrado) {
            // Mostrar los datos del empleado encontrado
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `
                <h2>Datos del Empleado</h2>
                <p><strong>Empresa:</strong> ${empleadoEncontrado.EMPRESA}</p>
                <p><strong>RUT:</strong> ${empleadoEncontrado.RUT}</p>
                <p><strong>Nombre:</strong> ${empleadoEncontrado.NOMBRE}</p>
                <p><strong>Cargo:</strong> ${empleadoEncontrado.CARGO}</p>
                <p><strong>Área:</strong> ${empleadoEncontrado.ÁREA}</p>
            `;
        } else {
            // Mostrar mensaje si no se encontró el empleado
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = '<p>No se encontró ningún empleado con ese RUT.</p>';
        }
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '<p>Error al cargar el archivo JSON.</p>';
    });
}
