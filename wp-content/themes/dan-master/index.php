<?php  get_header();?>
<!-- redes sociales-->
<div id="red">
    <div id="Home"><a href="index.html"><i class="fa fa-home" aria-hidden="true"></i></a></div>
    <div id="facebook"><a href="https://www.facebook.com/bluuweb/" target="none" class="fa fa-facebook" title="Facebook"></a></div>
    <div id="youtube"><a href="#" class="fa fa-youtube-play"></a></div>
    <div id="twitter"><a href="#" class="fa fa-twitter"></a></div>
    <div id="correo"><a href="#" class="fa fa-envelope"></a></div>
     </div>
    <!-- -->

  <!-- bot -->
 <iframe class="ventana" id="boot" src="https://webchat.snatchbot.me/1e98937c832a9b96941bb0c154765d236c83da927e220e836e4878d99d49215f">
        <div id="cerrar"><a href="javascript:cerrar()"> Cerrar </a></div>
        
    </iframe>
    <div class="botonsub">

        <div id="subir"><a href="javascript:abrir()" class="icono"><img title=" ! Hola .... " src="<?php bloginfo ('template_directory'); ?>/img/bot.png" alt="50" width="80"></a>
          <a href="javascript:cerrar()"><img title="Gracias por preguntar" src="<?php bloginfo ('template_directory'); ?>/img/delete2.png" alt="30" width="30"></a>
        </div><br>
    </div>
    <script>
        function abrir(){
            document.getElementById("boot").style.display="block";            
        }
        function cerrar(){
            document.getElementById("boot").style.display="none";
        }
    </script>
     <section class="textos-header">
            <h1 >CIBERTEL S.R.L</h1>
            <h2 >REVOLUCIONANDO CON LA TECNOLOGIA</h2>
        </section>
          <div class="wave" style="height: 150px; overflow: hidden;">

            <svg viewBox="0 0 150 120" preserveAspectRatio="none"
                 style="height: 150%; width: 100%;">
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                 style="stroke: none; fill: #FDFDFD;">                     
                 </path>
            </svg>

        </div>
 </header>
<!-- fin bo-->
<main>
  <!-- productos -->
<section class="wap">
  <section class="bienvenidos"> 
    <h2 id="servicios">Oferta de Productos</h2>
    
  </section>
  <section class="contenedor-columnas">
    <div class="columnasx3">
      <img src="<?php bloginfo ('template_directory'); ?>/img/a1.jpg" alt="">
      
      <h5>CONTROL DE ASISTENCIA</h5>
      <div class="informacion">
        <a id="boton2"  onclick="vermas('dos','boton2')"> Ver Mas</a>
      </div>       
        <div id="dos" style="display:none">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, totam, itaque. Molestiae eaque alias, inventore eos reiciendis, repellat ullam culpa dolor maxime nihil eius quaerat veniam excepturi ducimus earum totam?</p>        
         <!--<div class="informacion">
        <a href="#" title="ver mas informacion....">Informacion</a> 
      </div> -->
        </div>      

     
    </div>
    <div class="columnasx3">
      <img src="<?php bloginfo ('template_directory'); ?>/img/c4.jpg" alt="">
      <h4></h4>
      <h5> CAMARA CCTV</h5>
      <div class="informacion">
        <a id="boton1" onclick="vermas('uno','boton1')"> Ver Mas</a>
      </div>
      <div id="uno" style="display:none">   
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, totam, itaque. Molestiae eaque alias, inventore eos reiciendis, repellat ullam culpa dolor maxime nihil eius quaerat veniam excepturi ducimus earum totam?</p>

      
      </div> 

    </div>
    <div class="columnasx3">
      <img src="<?php bloginfo ('template_directory'); ?>/img/r1.jpg" alt="">
      <h4></h4>
      <h5>ROUTER</h5>
      <div class="informacion">
        <a id="boton3" onclick="vermas('tres','boton3')"> Ver Mas</a>
      </div>
      <div id="tres" style="display:none"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, totam, itaque. Molestiae eaque alias, inventore eos reiciendis, repellat ullam culpa dolor maxime nihil eius quaerat veniam excepturi ducimus earum totam?</p>
      </div>

    </div>
      <div class="columnasx3">
      <img src="<?php bloginfo ('template_directory'); ?>/img/t5.jpg" alt="">
      <h4></h4>
      <h5>LLAVE COMBINADA</h5>
      <div class="informacion">
        <a id="boton4" onclick="vermas('cuatro','boton4')"> Ver Mas</a>
      </div>
      <div id="cuatro" style="display:none"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, totam, itaque. Molestiae eaque alias, inventore eos reiciendis, repellat ullam culpa dolor maxime nihil eius quaerat veniam excepturi ducimus earum totam?</p>
      </div>
      

    </div>
      <div class="columnasx3">
      <img src="<?php bloginfo ('template_directory'); ?>/img/t5.jpg" alt="">
      <h4></h4>
      <h5>LLAVE COMBINADA</h5>
      <div class="informacion">
        <a id="boton5" onclick="vermas('cinco','boton5')"> Ver Mas</a>
      </div>
      <div id="cinco" style="display:none"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, totam, itaque. Molestiae eaque alias, inventore eos reiciendis, repellat ullam culpa dolor maxime nihil eius quaerat veniam excepturi ducimus earum totam?</p>
      </div>
      

    </div>
      <div class="columnasx3">
      <img src="<?php bloginfo ('template_directory'); ?>/img/t5.jpg" alt="">
      <h4></h4>
      <h5>LLAVE COMBINADA</h5>
      <div class="informacion">
        <a id="boton6" onclick="vermas('seis','boton6')"> Ver Mas</a>
      </div>
      <div id="seis" style="display:none"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, totam, itaque. Molestiae eaque alias, inventore eos reiciendis, repellat ullam culpa dolor maxime nihil eius quaerat veniam excepturi ducimus earum totam?</p>
      </div>
      

    </div>
     <script>
        function vermas(parrafo,boton){
            if(document.getElementById(parrafo).style.display=='block'){
                document.getElementById(parrafo).style.display='none';
                document.getElementById(boton).innerHTML='Ver mas';
           }else{
            document.getElementById(parrafo).style.display='block';
                document.getElementById(boton).innerHTML='Ver menos';
           }
        }
    </script>
  </section>
</section>

  <!-- fin productos -->
  <!-- portafolio servicios -->
  <section class="portafolio">
      <div class="contenedor">
           <h2 id="servicios">Nuestros Servicios</h2>
          <div class="galeria-port">
              <div class="imagen-port">
                  <img src="<?php bloginfo ('template_directory'); ?>/img/telecomunicaiones.jpg" alt="">
                  <div class="hover-galeria">
                      <a href="#"><img src="<?php bloginfo ('template_directory'); ?>/img/icono1.png" alt=""></a>
                      <p>Telecomunicaciones</p>
                  </div>
              </div>
              <div class="imagen-port">
                  <img src="<?php bloginfo ('template_directory'); ?>/img/cpd.png" alt="">
                  <div class="hover-galeria">
                    <a href="#"><img src="<?php bloginfo ('template_directory'); ?>/img/icono1.png" alt=""></a>
                      <p>Centro de Procesamiento de Datos</p>
                  </div>
              </div>
              <div class="imagen-port">
                  <img src="<?php bloginfo ('template_directory'); ?>/img/electrico.jpg" alt="">
                  <div class="hover-galeria">
                    <a href="#"><img src="<?php bloginfo ('template_directory'); ?>/img/icono1.png" alt=""></a>
                      <p>Sistemas Electricos</p>
                  </div>
              </div>
              <div class="imagen-port">
                  <img src="<?php bloginfo ('template_directory'); ?>/img/alarma.jpg" alt="">
                  <div class="hover-galeria">
                      <a href="#"> <img src="<?php bloginfo ('template_directory'); ?>/img/icono1.png" alt=""></a>
                      <p>Alarmas CCTV y Acesso</p>
                  </div>
              </div>
              
          </div>
      </div>
  </section>
  <!-- fin servicios -->
</main>
  

<!-- ##### Footer comienzo##### -->
<footer class="footer-area">
  <div class="main-footer-area section-padding-100-0">
      <div class="container">
          <div class="row">
              <!-- Footer Widget Area -->
              <div class="col-12 col-sm-6 col-lg-3">
                  <div class="footer-widget mb-100">
                      <div class="widget-title">
                          <a href="#"><img src="<?php bloginfo ('template_directory'); ?>/css/estilo-footer/img/logo-footer.png" alt=""></a>
                      </div>
                      <p>Somos una empresa orientada a la integración de tecnologías, especializada en ingeniería. CIBERTEL S.R.L.</p>
                      <div class="footer-social-info">
                          <a href="#"><i class="fa fa-facebook"></i></a>
                          <a href="#"><i class="fa fa-twitter"></i></a>
                          
                          <a href="#"><i class="fa fa-instagram"></i></a>
                      </div>
                  </div>
              </div>
              <!-- Footer Widget Area -->
              <div class="col-12 col-sm-6 col-lg-3">
                  <div class="footer-widget mb-100">
                      <div class="widget-title">
                          <h6>Revolucionando la tecnología</h6>
                      </div>
                      
                          <p>Somos una empresa responsable, con la capacidad de afrontar cualquier reto en solución de problemas e implementación de nuevas tecnologías.</p> <br>
                          <p> Ser una de las mejores empresas reconocidas a nivel nacional en servicios y tecnología.</p>

                      
                  </div>
              </div>
            <?php  get_footer();?>