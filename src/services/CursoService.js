export const CursoService = {

    getCursos : async (email)  => {
        let response = await fetch("http://localhost:8080/cursos/" + email);
        let cursosList = await response.json();
        console.log('cursosList ');
        console.log(cursosList);
        return cursosList;
    },

    guardarAsistencias : async (id, asistenciasCurso) => {

        if (!asistenciasCurso || !id) return;

        let response = await fetch("http://localhost:8080/cursos/" + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(asistenciasCurso)
        })
        console.log('res ' + response);
        return response;
    },

    agregarAlumnos: async (id, alumnos) => {

        if (!alumnos || !id) return;

        let response = await fetch("http://localhost:8080/cursosAlumnos/" + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alumnos)
        })
        console.log('res ' + response);
        return response;
    },

    eliminarAsistencias : async (asistenciasAEliminar) => {

        if (!asistenciasAEliminar) return;

        let response = await fetch("http://localhost:8080/asistencias", {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(asistenciasAEliminar)
        })
        console.log('res ' + response);
    },

    crearCurso : async (nuevoCurso) => {
        console.log('Crear curso ' + nuevoCurso)
        if (!nuevoCurso) return;

        console.log('Crear curso ' + nuevoCurso)
        let response = await fetch("http://localhost:8080/cursos/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoCurso)
        })
        console.log('res ' + response);
        return response;
    }
}