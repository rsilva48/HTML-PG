<template>
  <div class="PC">
    <div class="jumbotron jumbotron-fluid font">
      <div class="container">
        <h1 v-if="$route.params.id == 'all'">Lista de Computadoras</h1>
        <h3 v-else>Computadora #{{ $route.params.id }}</h3>
      </div>
      <div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<div class="container align-content-center">
  <div class="row-flex">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              @change="!status"
              v-model="status"
              class="custom-control-input"
              id="customSwitch1"
            />
            <label class="custom-control-label" for="customSwitch1">Vista Admin/ Vista Usuario</label>
          </div>
          <div v-if="status">
            <!--vista de admin -->
            <div class="container">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cedula del encargado</th>
                    <th scope="col">Fecha de Inicio</th>
                    <th scope="col">Fecha de Fin</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cubiculo, index) in listado" :key="index" scope="row">
                    <td>{{ cubiculo.id }}</td>
                    <td>{{ cubiculo.user.ced }}</td>
                    <td>{{ cubiculo.date_start }}</td>
                    <td>{{ cubiculo.date_end }}</td>
                    <td>{{ cubiculo.status }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-else>
           <vistaUsuario></vistaUsuario>
          </div></div>
  <div class="container">
  <div class="row">
    <div class="col-md-6"><p><h3 style="color:green">VERDE</h3>si esta disponible el cubiculo</div><hr>
    <div class="col-md-6">  <h3 style="color:red">ROJO</h3> rojo con uno que no esta disponible.</div>
  </div>
</div>
    <p class="lead"></p></div>
          <!--Aqui iniciara el contenido de las computadoras -->
          <div class="container"> <!--COMIENZA EL CONTENIDO DEL PISO 2-->
  <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
        <div class="col-md-12">
          <h5>Piso1</h5>
        </div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">PC. 01</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">PC. 02</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">PC. 03</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">PC. 04</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">PC. 05</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">PC. 06</li>00:00:00<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2">
              <li class="list-group-item list-group-item-success">PC. 07</li>00:00:00<hr>
				</div>
				<div class="col-md-2">
              <li class="list-group-item list-group-item-success">PC. 08</li>00:00:00<hr>
				</div><hr>
        <div class="col-md-12">
          <h5>Piso2</h5>
        </div>
        
				<div class="col-md-2">
            <li class="list-group-item list-group-item-success">PC. 09</li>00:00:00<hr>
				</div>
				<div class="col-md-2">
              <li class="list-group-item list-group-item-success">PC. 10</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">PC. 11</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">PC. 12</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">PC. 13</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">PC.14</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">PC. 15</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">PC. 16</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 17</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 18</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 19</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 20</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 21</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 22</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 23</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 24</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc.25</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 26</li>00:00:00<hr>
				</div>
        <div class="col-md-2">
              <li class="list-group-item list-group-item-success">Pc. 27</li>00:00:00<hr>
				</div>
			</div>
		</div>
	</div>
</div>
          </div>
          </div>
  </div><hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "PCList"
};
</script>