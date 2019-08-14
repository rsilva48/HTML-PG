<template>
  <div class="Cub">
      <div class="container"><hr><hr>
        <h2 v-if="$route.params.id == 'all'">Lista de Cubiculos</h2>
        <h3 v-else>Cubiculo #{{ $route.params.id }}</h3>
      </div><!--Disponibilidad -->
 <div class="container">
  <div class="row">
    <div class="col-md-6"><p><h3 style="color:green">VERDE</h3>si esta disponible el cubiculo</div><hr>
    <div class="col-md-6">  <h3 style="color:red">ROJO</h3> rojo con uno que no esta disponible.</div>
  </div>
</div>
<div class="container"> <!--COMIENZA EL CONTENIDO DEL PISO 2-->
  <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-default">Cub. 01</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">Cub. 02</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">Cub. 03</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">Cub. 04</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">Cub. 05</li>00:00:00<hr>
				</div>
				<div class="col-md-2"><br>
              <li class="list-group-item list-group-item-success">Cub. 06</li>00:00:00<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2">
              <li class="list-group-item list-group-item-success">Cub. 07</li>00:00:00<hr>
				</div>
				<div class="col-md-2">
              <li class="list-group-item list-group-item-success">Cub. 08</li>00:00:00<hr>
				</div>
				<div class="col-md-2">
            <li class="list-group-item list-group-item-success">Cub. 09</li>00:00:00<hr>
				</div>
				<div class="col-md-2">
              <li class="list-group-item list-group-item-success">Cub. 10</li>00:00:00<hr>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
<div class="footer">
  <p>UIP CRAI</p>
</div>
</div>
   
    <!--DIV principal-->
</template>

<script>
export default {
  name: "Lista de Cubiculos"
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #0da1db;
  color: white;
  text-align: center;
}
</style>

