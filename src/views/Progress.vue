<template>
  <div>
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetProgress
          header="10/20"
          text="Compromisos completados totales"
          footer="Lorem ipsum dolor sit amet enim."
          color="gradient-warning"
          :value="50"
        />
      </CCol>
      <CCol sm="6" lg="4">
        <CWidgetProgress
          header="2/2"
          text="Compromisos completados este mes"
          footer="Lorem ipsum dolor sit amet enim."
          color="gradient-success"
          :value="100"
        />
      </CCol>
      <CCol sm="6" lg="4">
        <CWidgetProgress
          header="30%"
          text="de reducción en este año"
          footer="Lorem ipsum dolor sit amet enim."
          color="gradient-danger"
          :value="30"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            Progreso general con tus compromisos
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="4">
                <CRow>
                  <CCol sm="12">
                    <CCallout color="info">
                      <small class="text-muted">Alcance 1 (Kg de CO2 eq mitigados)</small><br>
                      <strong class="h4">15360</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0">
                <ul class="horizontal-bars type-2">
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon name="cil-globe-alt" class="progress-group-icon"/>
                      <span class="title">Combustión fósil</span>
                      <span class="ml-auto font-weight-bold">
                        191,235<span class="text-muted small">(56%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="56"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-facebook"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Vehículos propiedad de la empresa</span>
                      <span class="ml-auto font-weight-bold">
                        51,223 <span class="text-muted small">(15%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="15"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="divider text-center">
                    <CButton color="link" size="sm" class="text-muted">
                      <CIcon name="cil-options"/>
                    </CButton>
                  </div>
                </ul>
              </CCol>
              <CCol sm="12" lg="4">
                <CRow>
                  <CCol sm="12">
                    <CCallout color="info">
                      <small class="text-muted">Alcance 2 (Kg de CO2 eq mitigados)</small><br>
                      <strong class="h4">9.18</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0">
                <ul class="horizontal-bars type-2">
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon name="cil-globe-alt" class="progress-group-icon"/>
                      <span class="title">Electricidad adquirida para uso propio</span>
                      <span class="ml-auto font-weight-bold">
                        191,235<span class="text-muted small">(56%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="56"
                        color="success"
                      />
                    </div>
                  </div>
                </ul>
              </CCol>
              <CCol sm="12" lg="4">
                <CRow>
                  <CCol sm="12">
                    <CCallout color="info">
                      <small class="text-muted">Alcance 2 (Kg de CO2 eq mitigados)</small><br>
                      <strong class="h4">9.18</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0">
                <ul class="horizontal-bars type-2">
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon name="cil-globe-alt" class="progress-group-icon"/>
                      <span class="title">Viajes de negocios de empleados</span>
                      <span class="ml-auto font-weight-bold">
                        191,235<span class="text-muted small">(56%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="56"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-facebook"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Disposición de residuos</span>
                      <span class="ml-auto font-weight-bold">
                        51,223 <span class="text-muted small">(15%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="15"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-twitter"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">vehículos propios de contratistas</span>
                      <span class="ml-auto font-weight-bold">
                        37,564 <span class="text-muted small">(11%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="11"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-linkedin"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Actividades adquiridas</span>
                      <span class="ml-auto font-weight-bold">
                        27,319 <span class="text-muted small">&nbsp;(8%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="8"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-linkedin"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Uso de productos</span>
                      <span class="ml-auto font-weight-bold">
                        27,319 <span class="text-muted small">&nbsp;(8%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="8"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cib-linkedin"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Producción de materiales adquiridos</span>
                      <span class="ml-auto font-weight-bold">
                        27,319 <span class="text-muted small">&nbsp;(8%)</span>
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="8"
                        color="success"
                      />
                    </div>
                  </div>
                </ul>
              </CCol>
            </CRow>
            <br/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>

export default {
  name: 'Progress',
  components: {
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'user' },
        { key: 'country', _classes: 'text-center' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method', _classes: 'text-center' },
        { key: 'activity' },
      ]
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
