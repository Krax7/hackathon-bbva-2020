<template>
<div>
  <CCol sm="12" class="form-container">
        <CCard>
          <CCardHeader>
            <strong>Por favor llena tus campos </strong>
          </CCardHeader>
          <CCardBody>
            <CInput
              label="Nombre de la empresa"
              placeholder="Escribe el nombre de la empresa"
            />
            <CInput
              label="Rubro de la empresa"
              placeholder="Escribe el rubro de la empresa"
            />
            <CInput
              label="Giro"
              placeholder="Escribe el giro de la empresa"
            />
            <CTextarea
                label="Descripción"
                placeholder="Descripción de la empresa"
                horizontal
                rows="9"
              />
            <CRow>
              <CCol sm="8">
                <CInput
                  label="Ciudad"
                  placeholder="Escribe la ciudad en la que está situada la empresa"
                />
              </CCol>
              <CCol sm="4">
                <CInput
                  label="Código Postal"
                  placeholder="Escribe el código postal"
                />
              </CCol>
            </CRow>
            <CInput
              label="País"
              placeholder="Escribe el paí en la que se encuentra la empresa"
            />
            <CRow>
              <CCol sm="6">
              <CInput
                  label="Email de la empresa"
                  placeholder="Escribe el mail principal de la empresa"
                  type="email"
                  autocomplete="email"
              />
              </CCol>
              <CCol sm="6">
              <CInput
                  label="Email de contacto"
                  placeholder="Escribe un mail adicional de contacto"
                  type="email"
                  autocomplete="email"
              />
            </CCol>
            </CRow>
            <CRow>
              <CCol sm="6">
              <CInput
                  label="Teléfono de la empresa"
                  placeholder="Escribe el teléfono principal de la empresa"
                  type="phone"
              />
              </CCol>
              <CCol sm="6">
              <CInput
                  label="Teléfono de contacto"
                  placeholder="Escribe un teléfono adicional de contacto"
                  type="phone"
              />
            </CCol>
            </CRow>
            <CSwitch v-model="this.isServices" class="mx-1 my-2" color="success" variant="3d" @update:checked="(val) => val ? this.isServices = true : this.isServices = false"/>
            <span>Es una empresa que brinda servicios (Ayuda a otras empresas)</span>
              <CRow v-if="this.isServices">
              <CCol sm="12">
              <CTextarea
                label="Servicios que ofrece"
                placeholder="Escribe brevemente los servicios que ofrece la empresa"
                horizontal
                rows="9"
              />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
</div>
</template>

<script>
export default {
  name: 'Profilex',
  data() {
    return {
      isServices: false
    }
  },
  watch: {
    'isServices'(newVal, oldVal) {
      if (newVal !== oldVal && newVal && newVal.id) {
        console.log(this.isServices)
      }
    },
  },
  mounted() {
  }
}
</script>
<style scoped>
.card-body {
  height: auto !important;
}
</style>