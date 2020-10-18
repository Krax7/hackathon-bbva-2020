<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CIcon name="cil-leaf"/> <strong> Eventos próximos </strong>
          </CCardHeader>
          <CCardBody>
            <CJumbotron header="Bootstrap 4" lead="" class="bonos">
              <h1 class="display-3" style="color: white">México Carbon Forum</h1>
              <CButton style="background-color: #04678f !important; color: white" href="https://www.bbva.com/es/bonos-verdes-que-son-que-financian/">Ir al Artículo</CButton>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CIcon name="cil-leaf"/> <strong> Eventos próximos </strong>
          </CCardHeader>
          <CCardBody>
            <CJumbotron header="Bootstrap 4" lead="" class="event_image_finances">
              <h1 class="display-3" style="color: #04c39a">Finanzas Sustentables</h1>
              <CButton style="background-color: #04678f !important; color: white" href="https://www.bbva.com/es/es/bbva-busca-a-los-mejores-productores-sostenibles-de-espana/">Ir al Artículo</CButton>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CIcon name="cil-leaf"/> <strong> Eventos próximos </strong>
          </CCardHeader>
          <CCardBody>
            <CJumbotron header="Bootstrap 4" lead="" class="portafolio">
              <h1 class="display-3" style="color: #04c39a">Finanzas Sustentables</h1>
              <CButton style="background-color: #04678f !important; color: white" href="https://www.bbva.com/es/co/bbva-lanza-un-portafolio-de-productos-sostenibles-en-colombia/">Ir al Artículo</CButton>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
export default {
  name: 'FinanciamientoVerde',
  data() {
    return {

    }
  }
}
</script>
<style scoped>
.bonos{
  background-image: url('../../../public/img/bonos_verdes.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
  height: 440px;
}
.event_image_finances {
  background-image: url('../../../public/img/productores.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
  height: 440px;
}
.portafolio {
  background-image: url('../../../public/img/portafolio_colombia.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
  height: 440px;
}
</style>