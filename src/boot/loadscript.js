import { boot } from 'quasar/wrappers'
// import { Cookies } from 'quasar'
// import axios from 'axios'
import { loadScript } from 'vue-plugin-load-script'

export default boot(({ app }) => {
  ///////////////////////////////////////////////////////////
  // loadscript
  ///////////////////////////////////////////////////////////
  app.config.globalProperties.$loadscript = loadScript
  // console.log(loadScript)


  // 하기 카카오 https://developers.kakao.com/sdk/js/kakao.js 서 버 다 운 된 적 있 음 극 혐 ㅋ (2022년 02월 03일 오전 10시부터 ㅋ)
  // loadScript('js/kakao.min.js')
  loadScript('https://developers.kakao.com/sdk/js/kakao.min.js')
  .then(() => {
    // Script is loaded, do something
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    // window.Kakao.init(this.$store.state.KAKAO_API_JS_KEY)
    window.Kakao.init('7777777777')
    // console.log(Kakao.isInitialized())
    app.config.globalProperties.$Kakao = window.Kakao
  })
  .catch(() => {
    // Failed to fetch script
    console.log('kakao loadScript failed.')
  })

  //loadScript('https://stdpay.inicis.com/stdjs/INIStdPay_popup.js')
  loadScript('https://stdpay.inicis.com/stdjs/INIStdPay.js')
  .then(() => {
    // Script is loaded, do something
    app.config.globalProperties.$INIStdPay = window.INIStdPay
    app.config.globalProperties.$paymentMid = '7777777777'
    app.config.globalProperties.$paymentSignKey = '7777777777'
    // console.log(app.config.globalProperties.$INIStdPay)
  })
  .catch(() => {
    // Failed to fetch script
    console.log('kakao loadScript failed.')
  })


  // // 카카오 API 스트립트 로드
  // loadScript('https://developers.kakao.com/sdk/js/kakao.js')
  // .then(() => {
  //   // Script is loaded, do something
  //   // 사용할 앱의 JavaScript 키를 설정해 주세요.
  //   // window.Kakao.init(this.$store.state.KAKAO_API_JS_KEY)
  //   window.Kakao.init('7777777777')
  //   // console.log(Kakao.isInitialized())
  //   // window.Kakao.init('7777777777') // REST_API key
    
  //   // window.Kakao.Auth.authorize({
  //   //   redirectUri: 'http://172.30.1.34:8888/api/login/loginKakaoRedirect'
  //   // })
  //   app.config.globalProperties.$Kakao = window.Kakao
  // })
  // .catch(() => {
  //   // Failed to fetch script
  //   console.log('kakao loadScript failed.')
  // })


  // axios.get(
  //   'https://developers.kakao.com/sdk/js/kakao.js',
  //   { 
  //     headers: { 
  //       // 'AuthenticationToken': '7777777777',
  //       // 'Authorization' : '7777777777',
  //       // 'authority': 'developers.kakao.com',
  //       // 'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
  //       'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  //     } 
  //   }
  // )
  // .then((result) => {
  //   console.log(JSON.stringify(result.data))
  //   app.config.globalProperties.Kakao = result.data
  // })

})
