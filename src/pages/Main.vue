<template>
  <!-- <q-page class="justify justify-center" style="background-image: url(images/star1.jpg)"> -->
  <q-page class="justify justify-center">
    <div class="page-default" style="word-break: keep-all;">

      <div class="q-pt-lg text-center text-h6 text-bold">
      </div>

      <!-- 플랫폼 설명 -->
      <div class="text-center text-body q-pl-md q-pr-md" style="word-break: keep-all;">
        <br />
        <div class="text-h3 text-bold">
          KLAYSTAR
          <br />
        </div>
        <div class="text-h5 text-bold q-pt-md">
          [ Blockchain Project Builder ]
          <br />
          <br />
          <br />
        </div>
        <q-img src="images/platform.png" style="max-width: 600px;" />
        <div>
          <br />
          <br />
          {{ $t('main_info_1_1') }}<br />
          {{ $t('main_info_1_2') }}<br />
          {{ $t('main_info_1_3') }}<br />
          {{ $t('main_info_1_4') }}<br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <q-img src="images/idea.png" style="max-width: 600px;" />
        <div>
          <br />
          <br />
          {{ $t('main_info_2_1') }}<br />
          {{ $t('main_info_2_2') }}<br />
          {{ $t('main_info_2_3') }}<br />
          {{ $t('main_info_2_4') }}<br />
          {{ $t('main_info_2_5') }}<br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <!-- 프로젝트 만들기 -->
      <div>
        <!-- 1 NFT 프로젝트 만들기 -->
        <div class="row">
          <!-- 반응형 div 1-->
          <div style="max-width: 450px;">
            <!-- 1.1 NFT 프로젝트 등록 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-red text-bold">{{ $t('main_create_nft_project') }} ①</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_nft_1_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_nft_1_2') }}
                          <br />
                        </div>
                      </q-card-section>
                      <!--
                      <q-card-section class="col-5 flex flex-center">
                        <q-img v-if="locale === 'ko-KR'" class="rounded-borders" src="images/main_manual_1_ko.png"></q-img>
                        <q-img v-else class="rounded-borders" src="images/main_manual_1_en.png"></q-img>
                      </q-card-section>
                      -->
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 1.2 팀원 모집 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-red text-bold">{{ $t('main_create_nft_project') }} ②</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_nft_2_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_nft_2_2') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 1.3 화이트리스트 등록 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-red text-bold">{{ $t('main_create_nft_project') }} ③</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_nft_3_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_nft_3_2') }}
                          <br />
                          {{ $t('main_info_nft_3_3') }}
                          <br />
                          {{ $t('main_info_nft_3_4') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 1.4 화이트리스트 등록 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-red text-bold">{{ $t('main_create_nft_project') }} ④</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_nft_4_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_nft_4_2') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 1.5 NFT 민팅 이미지 및 JSON 파일 등록 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-red text-bold">{{ $t('main_create_nft_project') }} ⑤</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_nft_5_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_nft_5_2') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 1.6 NFT 민팅 상세 정보 등록 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-red text-bold">{{ $t('main_create_nft_project') }} ⑥</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_nft_6_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_nft_6_2') }}
                          <br />
                          {{ $t('main_info_nft_6_3') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 1.7 NFT 민팅 시작, 종료, 출금 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-red text-bold">{{ $t('main_create_nft_project') }} ⑦</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_nft_7_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_nft_7_2') }}
                          <br />
                          {{ $t('main_info_nft_7_3') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </div>

          <!-- 반응형 div 2 -->
          <div style="max-width: 450px;">
            <!-- 2.1 토큰 프로젝트 등록 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-blue text-bold">{{ $t('main_create_token_project') }} ①</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_token_1_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_token_1_2') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 2.2 팀원 모집 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-blue text-bold">{{ $t('main_create_token_project') }} ②</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_token_2_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_token_2_2') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 2.3 화이트리스트 등록 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-blue text-bold">{{ $t('main_create_token_project') }} ③</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_token_3_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_token_3_2') }}
                          <br />
                          {{ $t('main_info_token_3_3') }}
                          <br />
                          {{ $t('main_info_token_3_4') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 2.4 화이트리스트 등록 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-blue text-bold">{{ $t('main_create_token_project') }} ④</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_token_4_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_token_4_2') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 2.5 사전판매 시작, 종료, 출금 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-blue text-bold">{{ $t('main_create_token_project') }} ⑤</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_token_5_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_token_5_2') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 2.6 유동성 풀 생성 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-blue text-bold">{{ $t('main_create_token_project') }} ⑥</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_token_6_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_token_6_2') }}
                          <br />
                          {{ $t('main_info_token_6_3') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
            <!-- 2.7 에어드랍 관리 -->
            <div class="row">
              <div class="col-12 col-md">
                <div class="q-pa-md">
                  <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline"><span class="text-blue text-bold">{{ $t('main_create_token_project') }} ⑦</span></div>
                        <div class="text-h5 q-mt-md q-mb-md">{{ $t('main_info_token_7_1') }}</div>
                        <div class="text-caption">
                          {{ $t('main_info_token_7_2') }}
                          <br />
                          {{ $t('main_info_token_7_3') }}
                          <br />
                        </div>
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <br />
      <br />
      <div class="row">
        <div class="col text-center">
          <q-img src="images/klaystar_platform_tree.png" style="max-width: 600px;">
            <div class="absolute-bottom text-h6 text-center">
              {{ $t('main_klaystar_platform') }}
            </div>
          </q-img>
          
          <div>
            <br />
            {{ $t('main_description_1') }}
          </div>

          <div>
            <br />
            <br />
            <a @click="openUrl('https://linktr.ee/klaystar')" style="cursor: pointer;">
              <q-img src="logo/logo_trees.svg" style="max-width: 40px;" />
              <br />
              {{ $t('main_link_information') }}
            </a>
          </div>
        </div>
      </div>

    </div>

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
