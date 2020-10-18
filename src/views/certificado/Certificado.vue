<template>
<div class="container">
<div class="container-cert">
  <div class="border">
    <div class="header-cert">
          <h1>Certificado de Reducciones de Emisiones por parte de la Empresa:</h1>
          <img src="img/haga0.png" alt="logo"/>
      </div>
      <div class="info">
          <h3><span class="hunderline enterprise">Smartfish</span></h3>
      </div>
      <div class="info">
          <h2>Wallet de la Empresa: </h2>
          <h3><span class="hunderline">{{hash}}</span></h3>
      </div>
      <div class="info">
          <h2>Dirección:</h2>
          <h3><span class="hunderline">{{ubicacion}}</span></h3>
      </div>
      <br/>
      <div class="info">
          <h3 style="color: #01808f">Reconocemos a las organizaciones que demuestran un compromiso integral frente al cambio climático.</h3>
      </div>
      <br/>
      <div class="info">
          <h3 style="color: #00aa96">El certificado de Mitigación de Huella de Carbono es un distintivo que se ofrece a las entidades que demuestran un compromiso integral frente al cambio climático. Este se obtiene a las empresas que calculan y compensan todas sus emisiones, de un alcance definido y concreto, y que, además, adquiere un compromiso de reducción de las mismas.
          </h3>
          <p style="text-align: left; width: 100%">Este distintivo ofrece:</p>
          <ul style="text-align: left; width: 100%">
            <li>Un distintivo que podrán lucir entidades, sedes o edificios con el objetivo de mostrar su implicación ante la problemática del cambio climático.</li>
            <li>Una vía de concienciación y sensibilización tangible, de acción práctica y concreta, tanto a nivel interno de la organización, como de cara a su público y clientes</li>
          </ul>
      </div>
      <br/>
      <div class="info">
          <h3 style="color: #04c39a">El certificado de cero emisiones ha sido registrado en la red blockchain de Ethereum; Se puede consultar su transacción en el siguiente enlace:</h3>
          <qrcode-vue
            :value="'http://bfascan.com.ar/tx/0xa7c8fd82a35155ec752c65edc972df4dd672dfafe2081ec51636e76a8f9243b9'"
            size="70"
            level="L"
          ></qrcode-vue>
      </div>
  </div>
  </div>
</div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'Profilex',
  components: {
    QrcodeVue
  },
  data() {
    return {
      hash: '0xA709404A397Ee77dA468149de76EcD2816CbCd63',
      nombreEmpresa: "Spectadrone",
      ubicacion: "Av. Juan de Dios Bátiz S/N, Nueva Industrial Vallejo, Gustavo A. Madero, 07738 Ciudad de México, CDMX"
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
.container-cert{
    padding: 26px 40px;
    margin-bottom: 60px;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border: 1px solid #eaeaea;
    position: relative;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

}

.border {
    border: solid 3px #bbbbbb;
    padding: 10px 30px;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 10%;
    background-size: 40vw;
}

.header-cert{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 2em auto;
    margin-bottom: 10%;
}

.header-cert h1{
    width: 60%;
    text-align: center;
    font-size: 2em;
    font-weight: bolder;
    color: #063b7c;
    text-transform: uppercase;
}

.header-cert img{
    width: 200px;
}

.info{
    margin: 1em auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.info h2{
    font-weight: 700;
}
h3 {
  font-size: 1.2em;
  margin-bottom: 5%;
}
.enterprise {
  font-size: 3em;
  color: #04678f;
}
.hunderline{
    text-decoration: underline #04678f; 
}

.qrTransContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 1.5%;
    padding: .5%;
}

.qrTransContainer canvas {
    width: 70px !important;
    height: 70px !important;
}
</style>