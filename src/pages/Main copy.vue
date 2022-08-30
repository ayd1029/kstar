<template>
  <!-- <q-page class="justify justify-center" style="background-image: url(images/star1.jpg)"> -->
  <q-page class="justify justify-center">
    <div class="page-default">

      <div class="q-pt-lg text-center text-h6 text-bold">
        <!-- {{ $t('get_klaystar') }} -->
      </div>

      <!-- <div class="row justify justify-center">
          <SwapToKstar ref="refSwapToKstar" />
      </div> -->

      <div class="row">
        <div class="col text-center">
          <br />
          <q-img src="images/klaystar_loadmap.png" style="max-width: 550px;">
            <div class="absolute-bottom text-h6 text-center">
              {{ $t('main_klaystar_platform') }}
            </div>
          </q-img>
          <q-card class="my-card text-left q-pa-sm">
            <q-card-section class="text-h6" style="word-break: break-word;">
              <br />{{ $t('main_description_1') }}
              <br />
              <br />{{ $t('main_description_2') }}
              <!-- <br />
              <br />
              <br />'1인 1토큰의 시대를 열다’
              <br />
              <br />클레이스타 플랫폼에서 토큰의 생성, 계약 검증, 사전 판매, 유동성 풀 생성(IDO), 그리고 에어드랍 관리 등의 모든 업무를 간편하게 처리할 수 있습니다.
              클레이스타는 기업 뿐만 아니라 각종 단체, 인플루언서, 그리고 개인까지 누구나 쉽고 빠르게 토큰을 발행할 수 있는 시대를 열어 갈 것입니다.
              <br />
              <br />그 어떤 별 보다 밝게 빛나는 '스타'가 될 수 있도록 클레이스타가 함께 하겠습니다. -->
              <!-- <q-img src="images/star2.jpg" width="300px" class="text-center">
                <div class="absolute-bottom text-h7 text-center">
                  {{ $t('분명 저 수많은 별들 중에 하나는 당신의 별일 것입니다.') }}
                </div>
              </q-img> -->
              <br />
              <br />
               
            </q-card-section>

            <!-- 링크 -->
            <q-list>
              <q-item clickable @click="openUrl('https://linktr.ee/klaystar')">
                <q-item-section avatar>
                  <img src="logo/logo_kstar.png" width="45">
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ $t('main_everything_about_klaystar') }}</q-item-label>
                  <q-item-label caption>{{ $t('main_more_information') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            
          </q-card>
        </div>
      </div>

      <!-- 1. 슬로건 -->
      <div class="row">
        <div class="col-12 text-center text-white">
          <br />
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
            <q-card class="my-card" flat>
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
            <q-card class="my-card" flat>
              <q-img v-if="locale === 'ko-KR'" class="rounded-borders" src="images/main_manual_2_ko.png"></q-img>
              <q-img v-else class="rounded-borders" src="images/main_manual_2_en.png"></q-img>
              <q-card-section horizontal>
                <q-card-section class="q-pt-lg">
                  <div class="text-overline">{{ $t('main_menual_overline') }} ②</div>
                  <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_menual_title_2') }}</div>
                  <div class="text-caption">
                    {{ $t('main_menual_content_2') }}
                  </div>
                  <br />
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="col-6 col-md">
          <div class="q-pa-md">
            <q-card class="my-card" flat>
              <q-img v-if="locale === 'ko-KR'" class="rounded-borders" src="images/main_manual_3_ko.png"></q-img>
              <q-img v-else class="rounded-borders" src="images/main_manual_3_en.png"></q-img>
              <q-card-section horizontal>
                <q-card-section class="q-pt-lg">
                  <div class="text-overline">{{ $t('main_menual_overline') }} ③</div>
                  <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_menual_title_3') }}</div>
                  <div class="text-caption">
                    {{ $t('main_menual_content_3') }}
                  </div>
                  <br />
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center text-white">
          <br />
          <div class="text-bold"><font size="7rem">KLAYSTAR</font></div>
          <div class="">
            <img src="images/logo-128x128.png" style="width: 50px;" />
          </div>
          <br />
          <br />
        </div>
        <!-- <div style="text-align: center; width: 100%;">
          <br />
          <q-btn color="secondary" text-color="black" style="width: 250px;" size="xl" @click="goRegisterToken" rounded>
            <b>{{ $t('register_new_token') }}</b>
          </q-btn>
        </div> -->
      </div>

      <div class="q-pt-xl" style="">
        <div class="row justify-center">
          <q-img src="images/idea.png" style="width: 60%;" />
        </div>
        <div class="row justify-center q-pt-md">
          <span class="text-h6">
            {{ $t('investment_partnership_inquiries') }}
          </span>
        </div>
        <div class="row justify-center q-pt-xs">
          <span class="text-h5">
            contact@klaystar.com
          </span>
        </div>
      </div>

    </div>

    <br />
    <br />
    <br />
    <br />

    <!-- links -->
    <div class="text-caption text-white flex flex-center" style="background: rgb(29, 29, 29);">
      <div class="row flex flex-center q-pt-md">
        <div class="q-pl-md q-pr-md q-pb-sm flex flex-center">
          <img src="logo/icons-social-gitbook.svg" style="width: 35px; cursor: pointer;" @click="openUrl('https://docs.klaystar.com')" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="logo/icons-social-telegram.svg" style="width: 35px; cursor: pointer;" @click="openUrl('https://t.me/klaystar')" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="logo/icons-social-twitter.svg" style="width: 35px; cursor: pointer;" @click="openUrl('https://twitter.com/klaystar_offici')" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="logo/icons-social-medium.svg" style="width: 35px; cursor: pointer;" @click="openUrl('https://klaystar.medium.com')" />
        </div>
      </div>
    </div>

    <div class="text-caption text-white flex flex-center q-pt-xs" style="background: rgb(29, 29, 29);">
      Copyright © 2022 Klaystar All rights reserved.
    </div>

    <!-- 사업자정보 -->
    <!-- OneOn Inc. | Representive : Youngdae Ahn | Address : 1707, 196, Mapo-daero, Mapo-gu, Seoul | Business Number : 863-87-01186 Verification | Mail-order-sales registration number : 2019-서울마포-0979 | E-mail : contact@klaystar.com  Terms  Privacy Policy -->
    <div class="text-caption text-white flex flex-center" style="background: rgb(29, 29, 29);">
        <div class="row">
          <div class="col-12 q-pa-md">
            {{ $t('company_name') }}
            | {{ $t('company_representive') }} : {{ $t('company_representive_value') }}
            | {{ $t('company_address') }} : {{ $t('company_address_value') }}
            | {{ $t('company_business_number') }} : 139-87-02383
            <a @click="openUrl('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1398702383')" style="cursor: pointer;"><b>{{ $t('company_verification') }}</b></a>
            | {{ $t('company_mail_order_sales_registration_number') }} : {{ $t('company_mail_order_sales_registration_number_value') }}
            | {{ $t('company_email') }} : contact@klaystar.com
            &nbsp;<a style="cursor: pointer;" @click="showTerms">{{ $t('company_show_terms') }}</a>
            &nbsp;<a style="cursor: pointer;" @click="showPrivacy">{{ $t('company_show_privacy') }}</a>
          </div>
        </div>
    </div>

  </q-page>

  <TermsModal ref="refTermsModal" />
  <PrivacyModal ref="refPrivacyModal" />
  <IframeModal ref="refIframeModal" />

</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      // msgBox: false,
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
    // // WEB으로 이동
    // moveToWeb () {
    //   // let targetPath = this.$cookie.get('LOGIN_REDIRECT_URL')
    //   // // APP이면 WEB으로 이동, WEB이면 Push
    //   // if (this.$store.state.device === 'android' || this.$store.state.device === 'ios') { // APP인 경우 - 푸시 토큰 저장
    //   //   location.href = this.$store.state.DOMAIN + '/#' + targetPath + '?uid=' + uid + '&auth_key=' + authKey
    //   // } else {
    //   //   this.$router.push(targetPath)
    //   // }
    //   location.href = this.$domain
    // },
    // 토큰 등록으로 이동
    goRegisterToken() {
      this.$router.push('/token/register')
    },
    // 이용약관 모달 표시
    showTerms() {
      this.$refs.refTermsModal.show()
    },
    // 개인정보처리방침 모달 표시
    showPrivacy() {
      this.$refs.refPrivacyModal.show()
    },
    openUrl(url) {
      // cordova인 경우 IframeModal 표시
      // if (this.$q.platform.is.cordova || this.$q.platform.is.name === 'webkit') {
      //   this.$refs.refIframeModal.url = url
      //   this.$refs.refIframeModal.show()
      // } else {
        window.open(url, '_system')
      // }
    },
    showConstructionMessage() {
      this.$noti(this.$q, this.$t('coming_soon'))
    },
    downloadIpa() {
      window.open('https://klaystar.com/files/ipa/klaystar.ipa')
    }
  }
})
</script>
