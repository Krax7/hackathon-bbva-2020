<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CIcon name="cil-leaf"/> <strong> Eventos próximos </strong>
          </CCardHeader>
          <CCardBody>
            <CJumbotron header="Bootstrap 4" lead="" class="event_image">
              <h1 class="display-3" style="color: #293234">México Carbon Forum</h1>
              <p class="lead" style="color: #293234">
                Lorem Ipsum
              </p>
              <hr class="my-4" style="color: #293234">
              <p>
                Lorem Ipsum
              </p>
              <CButton style="background-color: #04678f !important; color: white" href="#">Más Información</CButton>
              <CButton color="#04c39a"  class="ml-2" style="background-color: #04c39a !important; color: white" href="#">Asistir</CButton>
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
              <h1 class="display-3" style="color: #04678f">Finanzas Sustentables</h1>
              <p class="lead" style="color: #04678f">
                Lorem Ipsum
              </p>
              <hr class="my-4" style="color: #04678f">
              <p>
                Lorem Ipsum
              </p>
              <CButton style="background-color: #04678f !important; color: white" href="#">Más Información</CButton>
              <CButton color="#04c39a"  class="ml-2" style="background-color: #04c39a !important; color: white" href="#">Asistir</CButton>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
export default {
  name: 'Eventos',
  data() {
    return {

    }
  }
}
</script>
<style scoped>
.event_image {
  background-image: url('../../../public/img/forum.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.event_image_finances {
  background-image: url('../../../public/img/finances.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>