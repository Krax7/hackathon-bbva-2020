<template>
  <div>
    <CRow>
        <CCol sm="12" lg="6">
        <CCard>
          <CCardHeader>
            Selecciona tus compromisos
          </CCardHeader>
          <CCardBody>
            <CTabs variant="pills" vertical>
              <CTab active>
                <template slot="title">
                  <CIcon name="cil-calculator"/> {{tabs[0]}}
                </template>
                <CCol md="12">
                    <CCard>
                        <CCardBody class="p-0">
                            <CDataTable
                            hover
                            striped
                            class="table-align-middle mb-0"
                            :items="items"
                            :fields="fields"
                            no-sorting
                            >
                            <template #example="{item}">
                                <td>
                                <CSwitch
                                    :variant="item.example.variant"
                                    :color="item.example.color"
                                    :size="item.example.size"
                                    :checked="item.example.checked"
                                />
                                </td>
                            </template>
                            <template #size_prop="{item}">
                                <td>
                                <span v-html="item.size_prop"></span>
                                </td>
                            </template>
                            </CDataTable>
                        </CCardBody>
                    </CCard>
                </CCol>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-basket"/> {{tabs[1]}}
                </template>
                <CCard>
                    <CCardBody class="p-0">
                        <CDataTable
                        hover
                        striped
                        class="table-align-middle mb-0"
                        :items="items"
                        :fields="fields"
                        no-sorting
                        >
                        <template #example="{item}">
                            <td>
                            <CSwitch
                                :variant="item.example.variant"
                                :color="item.example.color"
                                :size="item.example.size"
                                :checked="item.example.checked"
                            />
                            </td>
                        </template>
                        <template #size_prop="{item}">
                            <td>
                            <span v-html="item.size_prop"></span>
                            </td>
                        </template>
                        </CDataTable>
                    </CCardBody>
                </CCard>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> {{tabs[2]}}
                </template>
                <CCard>
                    <CCardBody class="p-0">
                        <CDataTable
                        hover
                        striped
                        class="table-align-middle mb-0"
                        :items="items"
                        :fields="fields"
                        no-sorting
                        >
                        <template #example="{item}">
                            <td>
                            <CSwitch
                                :variant="item.example.variant"
                                :color="item.example.color"
                                :size="item.example.size"
                                :checked="item.example.checked"
                            />
                            </td>
                        </template>
                        <template #size_prop="{item}">
                            <td>
                            <span v-html="item.size_prop"></span>
                            </td>
                        </template>
                        </CDataTable>
                    </CCardBody>
                </CCard>
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="12" lg="6">
        <CCard>
            <CCardHeader>Con tus compromisos, estás contribuyendo a estas áreas</CCardHeader>
            <CCardBody><CChartPolarAreaExample/></CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      
    </CRow>
  </div>
</template>

<script>
import * as Charts from '../charts/index.js'

export default {
  name: 'Progress',
  components: {
      ...Charts,
  },
  data () {
    return {
      tabs: [
        'Alcance 1',
        'Alcance 2',
        'Alcance 3'
      ],
      activeTab: 1,
      fields: [
        { key: 'example' },
        { key: 'size_prop', label: 'Size prop' }
      ],
      items: [
        { 
          example: {  variant: '3d', color: 'primary', size: 'lg', checked: true }, 
          size_prop: 'Instaurar medidas que fomenten el uso de medios de transporte más eficientes'
        },
        { 
          example: {  variant: '3d', color: 'primary', size: 'lg', checked: true }, 
          size_prop: 'Impulsar el uso de combustibles alternativos: -Introducir una flota de vehículos eléctricos, la pila de hidrógeno, los biocombustibles o el biometano.'
        },
        {
          example: { variant: '3d', color: 'primary', size: 'lg', checked: true}, 
          size_prop: 'Ofrecer beneficios a trabajadores que deseen usar en transporte público o colectivo, en bicicleta o andando para ir al trabajo.'
        }
      ],
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
