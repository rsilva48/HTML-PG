<template>
  <div class="PCSol">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 class="display-4">Solitar computadora</h1>
        <router-link to="/admin/comp" class="btn btn-primary btn-lg ml-2" role="button">Volver</router-link>
        <router-link to="/admin/admin_pcs" class="btn btn-primary btn-lg ml-2" role="button">Ver Computadoras</router-link>        
        <hr />
        <div class="form">
          <div class="container">
            <h2 class="text-left">Datos personales</h2>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <label for="nombre">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    name="nombre"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label for="cedula">Cédula:</label>
                  <input
                    type="string"
                    class="form-control"
                    id="cedula"
                    placeholder="Cédula"
                    name="cedula"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <label for="Facultad">Facultad:</label>
                <select name="facultad" class="custom-select">
                  <option selected disabled value="">Selecione su facultad</option>
                  <option value="derecho">Ciencias Administrativas/ Maritima y Portuaria.</option>
                  <option value="sistema">Ciencias de la salud.</option>
                  <option value="derecho">Derecho y ciencias politicas.</option>
                  <option value="hoteleria">Hoteleria, Gastronomia, Turismo.</option>
                  <option value="ing">Ingenieria, Arquitectura y diseño.</option>
                  <option value="liceje">Licenciatura para ejecutivos.</option>
                  <option value="maest">Maestria y especializacion.</option>
                  <option value="tec">Tecnico Superior Universitario.</option>
                  <option value="colab">Colaborador.</option>
                </select>
              </div>
            </div>

            <div>
              <div class="row">
                <div class="col-lg-4">
                  <label for="Facultad">Genero</label>
                  <select name="genero" class="custom-select">
                    <option selected disabled value="">Selecione su genero</option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="Facultad">Indique que usuario es:</label>
                  <select name="facultad" class="custom-select">
                    <option selected disabled value="">Selecione su usuario</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="profesor">Profesor</option>
                    <option value="colab">Colaborador</option>
                  </select>
                </div>
              </div>
              <hr />
              <button v-on:click="agregar" type="button" class="btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPCsol'
}
</script>
