<template>
  <div>
    <CRow>
      <CCol xs="12" style="width: 100%; height: auto" >
        <CCard >
          <CCardHeader>
            Directorio de Empresas que pertenecen a la red de Hagámoslo 0
          </CCardHeader>
          <CCardBody>
            <CTabs add-tab-classes="mt-1">
              <CTab>
                <template slot="title">
                  <CIcon name="cil-calculator"/> {{tabs[0]}}
                </template>
                <template>
                  <CRow class="mt-5">
                    <CCol sm="6" v-for="(enterprise, index) in empresas_soluciones" :key="index" class="cards_styles">
                      <CCard accent-color="success">
                        <CCardHeader>{{enterprise.nombre}}</CCardHeader>
                        <CCardBody>
                          <div>
                            <img :src="enterprise.img ? enterprise.img : 'img/ecoempre.jpg'" alt="Empresa" class="empresa_img">
                          </div>
                          <div class="empresa_info mt-3">
                            <p><strong>Email:</strong> {{enterprise.correo}}</p>
                            <span><strong>Página Web:</strong> <a :href="enterprise.web">{{enterprise.web}}</a></span>
                          </div>
                          <div class="empresa_info mt-3">
                            <p><strong>Descripción:</strong> {{enterprise.description}}</p>
                          </div>
                          <div class="empresa_info mt-3">
                            <p><strong>Productos o Servicios que ofrece:</strong> {{enterprise.producto_servicio}}</p>
                          </div>
                          <div class="empresa_info mt-3">
                            <CButton
                              style="background-color: #04678f !important; color: white"
                              v-c-popover="{
                                header: 'Proximamente!',
                                content: `Proximamente`,
                                placement: 'bottom-start'
                              }"
                            >
                            Contactar Empresa
                          </CButton>
                          </div>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </template>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-basket"/> {{tabs[1]}}
                </template>
                <template>
                  <CRow class="mt-5">
                    <CCol sm="6" v-for="(enterprise, index) in empresas_comprometidas" :key="index" class="cards_styles">
                      <CCard accent-color="success">
                        <CCardHeader>{{enterprise.nombre}}</CCardHeader>
                        <CCardBody>
                          <div>
                            <img :src="enterprise.img ? enterprise.img : 'img/ecoempre.jpg'" alt="Empresa" class="empresa_img">
                          </div>
                          <div class="empresa_info mt-3">
                            <p><strong>Email:</strong> {{enterprise.correo}}</p>
                          </div>
                          <div class="empresa_info mt-3">
                            <p><strong>Descripción:</strong> {{enterprise.description}}</p>
                          </div>
                          <div class="empresa_info mt-3">
                            <p><strong>Compromisos:</strong> {{enterprise.compromisos}}</p>
                          </div>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </template>
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
export default {
  name: 'EmpresaSoluciones',
  data() {
    return {
      empresas_soluciones: [
        {
          nombre: 'Biopapel',
          description: 'En Bio Pappel nos adelantamos y decidimos ser parte de la solución al problema del cambio climático, por ello, evolucionamos nuestro ADN e identidad empresarial y desarrollamos un eficiente modelo de sustentabilidad.',
          direccion: 'Av. Mineral de Valenciana 222, Mz 2, lote 10, Parque Industrial Ampliación, Silao, Gto.',
          correo: 'contacto@biopapel.com',
          web: 'http://www.biopappel.com',
          producto_servicio: 'Papel reciclado'
        },
        {
          nombre: 'Comsustenta',
          description: 'Empresa mexicana con más de 20 años de experiencia conjunta en el sector del GNV.(Gas natural vehicular).',
          direccion: 'Avenida, Prol.Puebla 13.56400 Los Reyes Acaquilpan, Méx',
          correo: 'contacto@comustenta.com',
          web: 'https://www.comsustenta.com',
          producto_servicio: 'Estaciones de servicio/suministro de GNV a vehículos, Conversiones de motores convencionales de gasolina a motores alimentados por GNV; Y verificaciones donde se verifican los autos convertidos para que cumplan con las leyes correspondientes en materia de emisiones.',
          img: 'img/comustenta.png'
        },
        {
          nombre: 'Polybion',
          description: 'Polybion® es una empresa mexicana de BioFabricación, que desarrolla nuevos materiales avanzados utilizando los bloques de construcción de la vida, como materiales de producción industrial.',
          direccion: 'Av. Mineral de Valenciana 222, Mz 2, lote 10, Parque Industrial Ampliación, Silao, Gto.',
          correo: 'contacto@polybion.com',
          web: 'https://www.polybion.mx/es/',
          producto_servicio: 'Textiles',
          img: 'img/polybion.png'
        },
        {
          nombre: 'Solben',
          description: 'SOLBEN desarrolla tecnologías para la generación de energía a partir de materias primas renovables cuidando la buena utilización de los recursos.',
          direccion: 'Av. Cuatro 131, Central de Carga 66494 San Nicolás de los Garza, N.L.',
          correo: 'contacto@solben.com',
          web: 'http://www.solben.org.mx/',
          producto_servicio: 'SOLBEN, actualmente ofrece tecnología, maquinaria y capacitación para la producción de BIODIESEL a diferentes escalas.',
          img: 'img/solben.png'
        }
      ],
      empresas_comprometidas: [
        {
          nombre: 'Newen',
          description: 'En Bio Pappel nos adelantamos y decidimos ser parte de la solución al problema del cambio climático, por ello, evolucionamos nuestro ADN e identidad empresarial y desarrollamos un eficiente modelo de sustentabilidad.',
          direccion: 'Av. Mineral de Valenciana 222, Mz 2, lote 10, Parque Industrial Ampliación, Silao, Gto.',
          compromisos: 'Recolección de agua de lluvia para realizar productos',
          correo: 'contacto@newen.com',
          rubro: 'Productos de limpieza',
          img: 'img/newen.png'
        },
        {
          nombre: 'Tierra de monte',
          description: 'Tierra de Monte es una empresa de agricultura que integra avances científicos para regenerar la fertilidad de los suelos y lograr cosechas más productivas y saludables que favorezcan a la prosperidad de las familias del campo.',
          direccion: 'Carretera a Tlacote #186 Plaza Maravillas local 106, Quinta Alicia, 76179 Santiago de Querétaro, Qro.',
          compromisos: 'Reducir el consumo de materias primas, energía o de productos.',
          correo: 'contacto@tierrademonte.com',
          rubro: 'Agricultura',
          img: 'img/tierra_monte.png'
        },
        {
          nombre: 'Buna',
          description: 'BUNA comparte chocolate y café rico para conservar los ecosistemas mexicanos.',
          direccion: 'Orizaba 42 Roma Norte 06700, C. U. Benito Juárez, 06500 Ciudad de México',
          compromisos: 'Apostar por el abastecimiento sostenible: contar con proveedores o intermediarios que también tengan registrada la huella de carbono.',
          correo: 'contacto@smartfish.com',
          rubro: 'Pesca',
          img: 'img/buna.png'
        },
        {
          nombre: 'Crepes & Waffles',
          description: 'Crepes & Waffles es una cadena de restaurantes de origen colombiano, que se ha encargado de brindar un desarrollo personal y laboral a sus empleadas, con programas y cursos inspirados en su filosofía de hacer ARTE a través de la alimentación.',
          direccion: 'Av. Cuauhtémoc 462, Piedad Narvarte, Benito Juárez, 03000 Ciudad de México, CDMX',
          compromisos: 'Reducir o adaptar la movilidad de los trabajadores y el transporte de mercancías. Impulsar el uso de combustibles alternativos',
          correo: 'contacto@crepes&waffles.com',
          rubro: 'Alimentos',
          img: 'img/crepes.png'
        },
        {
          nombre: 'Smartfish',
          description: 'SMARTFISH es la única comercializadora en México que vende exclusivamente productos del mar de origen sustentable, logrando que los pescadores ganen más, pescando menos. Así, rompen el ciclo negativo de sobreexplotación y pobreza, mejoran la calidad de vida de las comunidades pesqueras y la salud de los mares mexicanos.',
          direccion: 'Amsterdam 26, Hipódromo, Cuauhtémoc, 06100 Ciudad de México, CDMX',
          compromisos: 'Emplear bombillas de alta eficiencia energética.Contratar energía procedente de fuentes renovables.Cambiar los gases refrigerantes por otros con menor potencial de calentamiento global.Programar el apagado y desconexión automática de los equipos.romover el trabajo flexible, para reducir el número de horas de los empleados en las instalaciones.',
          correo: 'contacto@smarfish.com',
          rubro: 'Pesca',
          img: 'img/smartfish.png'
        }

      ],
      tabs: [
        'Empresas que ofrecen soluciones',
        'Empresas Comprometidas',
      ],
      activeTab: 0
    }
  }
}
</script>
<style scoped>
.card-body {
  /* padding: 0; */
}
.empresa_img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
a {
  text-decoration: none;
  color: #04c39a;
}
.cards_styles {
  /* height: 300px */
}
/* .empresa_info {
  martg
} */
</style>