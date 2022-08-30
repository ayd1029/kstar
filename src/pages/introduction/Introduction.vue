<template>
  <q-page class="justify justify-center" style="background-image: url(images/star1.jpg)">
    <div class="page-main">

      <!-- 1. 슬로건 -->
      <div class="row">
        <div class="col-12 text-center text-white">
          <br />
          <br />
          <br />
          <div class="text-bold"><font size="7rem">KLAYSTAR</font></div>
          <div class="">
            <img src="images/logo-128x128.png" style="width: 50px;" />
          </div>
          <br />
          <div class="text-bold"><font size="5rem">BEYOND</font></div>
          <div class="text-bold"><font size="5rem">BLOCKCHAIN</font></div>
          <div class="text-bold"><font size="6rem">FRAMEWORK</font></div>
        </div>
        <!-- <div style="text-align: center; width: 100%;">
          <br />
          <q-btn color="secondary" text-color="black" style="width: 250px;" size="xl" @click="goRegisterToken" rounded>
            <b>{{ $t('register_new_token') }}</b>
          </q-btn>
        </div> -->
      </div>
      <br />
      <br />

      <!-- 2.2 간단 매뉴얼 - Mobile 버전 -->
      <div class="row" v-if="$q.platform.is.cordova || $q.platform.is.mobile">
        <div class="col-12 col-md">
          <div class="q-pa-md">
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">{{ $t('main_menual_overline') }} ①</div>
                  <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_menual_title_1') }}</div>
                  <div class="text-caption">
                    {{ $t('main_menual_content_1') }}
                  </div>
                </q-card-section>
                <q-card-section class="col-5 flex flex-center">
                  <q-img v-if="locale === 'ko-KR'" class="rounded-borders" src="images/main_manual_1_ko.png"></q-img>
                  <q-img v-else class="rounded-borders" src="images/main_manual_1_en.png"></q-img>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-12 col-md">
          <div class="q-pa-md">
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">{{ $t('main_menual_overline') }} ②</div>
                  <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_menual_title_2') }}</div>
                  <div class="text-caption">
                    {{ $t('main_menual_content_2') }}
                  </div>
                </q-card-section>
                <q-card-section class="col-5 flex flex-center">
                  <q-img v-if="locale === 'ko-KR'" class="rounded-borders" src="images/main_manual_2_ko.png"></q-img>
                  <q-img v-else class="rounded-borders" src="images/main_manual_2_en.png"></q-img>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-12 col-md">
          <div class="q-pa-md">
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">{{ $t('main_menual_overline') }} ③</div>
                  <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_menual_title_3') }}</div>
                  <div class="text-caption">
                    {{ $t('main_menual_content_3') }}
                  </div>
                </q-card-section>
                <q-card-section class="col-5 flex flex-center">
                  <q-img v-if="locale === 'ko-KR'" class="rounded-borders" src="images/main_manual_3_ko.png"></q-img>
                  <q-img v-else class="rounded-borders" src="images/main_manual_3_en.png"></q-img>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <!-- 2.1 간단 매뉴얼 - PC 버전 -->
      <div class="row" v-else>
        <div class="col-6 col-md">
          <div class="q-pa-md">
            <q-card class="my-card bg-black text-white" flat bordered>
              <q-img v-if="locale === 'ko-KR'" class="rounded-borders" src="images/main_manual_1_ko.png"></q-img>
              <q-img v-else class="rounded-borders" src="images/main_manual_1_en.png"></q-img>
              <q-card-section horizontal>
                <q-card-section class="q-pt-lg">
                  <div class="text-overline">{{ $t('main_menual_overline') }} ①</div>
                  <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_menual_title_1') }}</div>
                  <div class="text-caption">
                    {{ $t('main_menual_content_1') }}
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-6 col-md">
          <div class="q-pa-md">
            <q-card class="my-card bg-black text-white" flat bordered>
              <q-img v-if="locale === 'ko-KR'" class="rounded-borders" src="images/main_manual_2_ko.png"></q-img>
              <q-img v-else class="rounded-borders" src="images/main_manual_2_en.png"></q-img>
              <q-card-section horizontal>
                <q-card-section class="q-pt-lg">
                  <div class="text-overline">{{ $t('main_menual_overline') }} ②</div>
                  <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_menual_title_2') }}</div>
                  <div class="text-caption">
                    {{ $t('main_menual_content_2') }}
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-6 col-md">
          <div class="q-pa-md">
            <q-card class="my-card bg-black text-white" flat bordered>
              <q-img v-if="locale === 'ko-KR'" class="rounded-borders" src="images/main_manual_3_ko.png"></q-img>
              <q-img v-else class="rounded-borders" src="images/main_manual_3_en.png"></q-img>
              <q-card-section horizontal>
                <q-card-section class="q-pt-lg">
                  <div class="text-overline">{{ $t('main_menual_overline') }} ③</div>
                  <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_menual_title_3') }}</div>
                  <div class="text-caption">
                    {{ $t('main_menual_content_3') }}
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>


      <!-- 클레이스타 소개 -->
      <div class="row">
        <div class="col-12 col-md">
          <div class="q-pa-md">
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">{{ $t('main_introduction_overline') }}</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">{{ $t('main_introduction_title') }}</div>
                  <div class="text-caption text-grey">
                    {{ $t('main_introduction_content') }}
                  </div>
                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                  <q-img
                    class="rounded-borders"
                    src="images/star2.jpg"
                  />
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <!-- 프롤로그 -->
      <div class="row">
        <div class="col-12 text-center text-white">
          <br />
          <br />
          <br />
          <!-- <div class="text-bold"><font size="7rem">프롤로그</font></div> -->
          <div class="">
            <img src="images/logo-128x128.png" style="width: 50px;" />
          </div>
          <br />
          <div class="text-bold">
            <font size="6rem" v-if="locale === 'ko-KR'">
              {{ $t('main_simple_and_fast') }}
              <br />
              {{ $t('main_create_token') }}
            </font>
            <font size="6rem" v-else>
              {{ $t('main_create_token') }}
              <br />
              {{ $t('main_simple_and_fast') }}
            </font>
          </div>
          <br />
        </div>
        <div style="text-align: center; width: 100%;">
          <q-btn color="secondary" text-color="black" style="width: 250px;" size="xl" @click="goRegisterToken" rounded>
            <b>{{ $t('main_register_new_token') }}</b>
          </q-btn>
        </div>
      </div>
      <br />



    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="row">
      <div class="col-12 text-center text-white">
        <div class="">
          <img src="images/logo-128x128.png" style="width: 50px;" />
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <!-- 사업자정보 -->
    <div class="absolute-bottom" style="background-color: white; text-align: left;">
      <font size="1" color="grey">
      <div class="row">
        <div class="col-12 q-pa-md">
          <img src="images/logo-128x128.png" style="width: 9px;" />
          <font size="2" color="grey"><b>&nbsp;KLAYSTAR</b></font>
          <br />
          주식회사 클레이스타
          | 대표이사 : 안영대
          | 주소 : 서울특별시 마포구 마포대로 196
          | 사업자등록번호 : 863-87-01186
          <a @click="goBusinessInfo" style="cursor: pointer;"><b>사업자정보확인</b></a>
          | 통신판매업신고번호 : 2019-서울마포-0979
          | 이메일 : contact@klaystar.com
        </div>
      </div>
      </font>
    </div>


    <!-- <div style="background-color: white; height: 85px; text-align: center">
      <br />
      <img src="images/logo-128x128.png" style="width: 10px;" />
      <font color="grey">
        <b>&nbsp;KLAYSTAR</b>
      </font>
      &nbsp;&nbsp;
      <font color="grey">
        OneOn Inc.
        &nbsp;
        contact@klaystar.com
      </font>
    </div> -->

  </q-page>

  <q-dialog v-model="msgBox">
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="images/logo-128x128.png" style="width: 24px; height: 24px;" />
        </q-avatar>

        <q-toolbar-title>
          <span class="text-weight-bold">KLAYSTAR</span>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section>
        {{ $t('under_construction')}}
      </q-card-section>
    </q-card>
  </q-dialog>

</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      filterType: 'now', // 랭킹타입 now, total
      msgBox: false,
    }
  },
  components: {
  },
  created: function () {

    // CORDOVA APP인 경우, /app/loginApp 화면으로 이동
    if ((this.$q.platform.is.cordova === true || this.$q.platform.is.name === 'webkit') && location.origin !== this.$frontDomain
      // && this.$q.platform.is.mobile === true && (this.$q.platform.is.platform === 'andriod' || this.$q.platform.is.platform === 'ios')
    ) {
      this.$router.push('/app/loginApp')
      // https://klaystar.com WEB으로 이동
      // alert('move to https://klaystar.com')
      // if (location.origin !== this.$domain) {
      //   location.href = this.$domain
      // }
    }

  },
  mounted: function () {},
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
    }
  },
  methods: {
    // WEB으로 이동
    moveToWeb () {
      // let targetPath = this.$cookie.get('LOGIN_REDIRECT_URL')
      // // APP이면 WEB으로 이동, WEB이면 Push
      // if (this.$store.state.device === 'android' || this.$store.state.device === 'ios') { // APP인 경우 - 푸시 토큰 저장
      //   location.href = this.$store.state.DOMAIN + '/#' + targetPath + '?uid=' + uid + '&auth_key=' + authKey
      // } else {
      //   this.$router.push(targetPath)
      // }
      location.href = this.$domain
    },
    // 토큰 등록으로 이동
    goRegisterToken() {
      this.$router.push('/token/register')
    },
    // 사업자정보확인
    goBusinessInfo () {
      /*
      this.$refs.redirectModal.title = '사업자정보'
      this.$refs.redirectModal.url = this.$store.state.BUSINESS_SITE_INFO
      this.$refs.redirectModal.icon = 'play_arrow'
      this.$refs.redirectModal.show()
      */
      // window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=8638701186', '_system')
      window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=8638701186', '_system')
    },
  }
})
</script>
