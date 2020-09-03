<!DOCTYPE html>
<html lang="es">

<head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <script src="<?php bloginfo ('template_directory'); ?>/https://use.fontawesome.com/502b7294a9.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php   wp_head(); ?>
    <title><?php   bloginfo ('name'); echo " | "; bloginfo ('description');?></title>
    <!-- footer -->
    <link rel="stylesheet" href="<?php bloginfo ('template_directory'); ?>/css/estilo-footer/style.css">

    <!-- menu -->
    <link rel="stylesheet" href="<?php bloginfo ('template_directory'); ?>/css/menu.css">
    <!-- animaciones -->
    <link rel="stylesheet" href="<?php bloginfo ('template_directory'); ?>/css/animate.css">
    <!-- logo parte de la direccion -->
    <link rel="shortcut icon" href="<?php bloginfo ('template_directory'); ?>/img/logo.png" type="image/x-icon">
    <!--bot-->
    <link rel="stylesheet" href="<?php bloginfo ('template_directory'); ?>/css/bot.css"> 
     <link rel="stylesheet" href="<?php bloginfo ('template_directory'); ?>/css/redbot.css">
     <!--index-->
     <link rel="stylesheet" href="<?php bloginfo ('template_directory'); ?>/css/index.css">
     <!-- redes sociales-- -->
     <link rel="stylesheet" href="<?php bloginfo ('template_directory'); ?>/css/red.css">   
     
</head>

<body>
 <header>
      <nav class="sub">

            <div class="logo"><img src="<?php bloginfo ('template_directory'); ?>/img/logoani.png"  height="60px" width="200px"></div>
       
            <label for="btn" class="icon">
            <span class="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="btn">
          <ul>
            <li class="animate__animated animate__rubberBand"><a href="index.html">Inicio</a></li>
              <li class="animate__animated animate__rubberBand">
                  <label for="btn-1" class="show"><a href="#">Desarrollo</a></label>
                  <a href="#">Desarrollo</a>
                  <input type="checkbox" id="btn-1">
                  <ul>
                    <li class="animate__animated animate__rubberBand" class="animate__animated animate__rubberBand"><a href="<?php bloginfo ('template_directory'); ?>/vistas/servicios/page.php"> Paginas Web</a> </li>
                    
                  </ul>
              </li>
              <li class="animate__animated animate__rubberBand">
                  <label for="btn-2" class="show"><a href="#">Productos</a></label>
                  <a href="vistas/productos.html">Productos</a>
                  <input type="checkbox" id="btn-2">
                                 
              </li>
              <li class="animate__animated animate__rubberBand">
                  <label for="btn-3" class="show">Servicios +</label>
                <a href="#">Servicios</a>
                 <input type="checkbox" id="btn-3">
                <ul>
                    <li class="animate__animated animate__rubberBand"><a href="vistas/servicios/telecomunicaciones.html"> Telecomunicacion</a> </li>
                    <li class="animate__animated animate__rubberBand"><a href="vistas/servicios/cpd.html"> Centro de Procesamiento de Datos</a> </li>
                    <!--<li class="animate__animated animate__rubberBand"><label for="btn-3" class="show">Mas +</label>
                        <a href="#"> Mas
                        <span class="fa fa-plus"></span>
                        </a>
                        <input type="checkbox" id="btn-3">
                        <ul>
                            <li class="animate__animated animate__rubberBand"><a href="#"> submenu</a> </li>
                            <li class="animate__animated animate__rubberBand"><a href="#"> submenu</a> </li>
                            <li class="animate__animated animate__rubberBand"><a href="#"> submenu</a> </li>
                        </ul>
                    </li>-->
                    <li class="animate__animated animate__rubberBand" class="animate__animated animate__rubberBand"><a href="vistas/servicios/sistemas-electricos"> Sistemas Electricos</a> </li>
                    <li class="animate__animated animate__rubberBand" class="animate__animated animate__rubberBand"><a href="vistas/servicios/alarmaCctv-acceso.html"> Alarmas CCTV y Acceso</a> </li>
                </ul>
              </li>
              <li class="animate__animated animate__rubberBand" class="animate__animated animate__rubberBand"><a href="vistas/nosotros.html"> Nosotros</a> </li>
              <li class="animate__animated animate__rubberBand"><a href="#">Contactos</a></li>
            </ul>
          </nav>