<template>
  <q-page class="q-pa-md page-default">
    <div class="row justify-center">
      <div class="col-12 doc-heading text-h6 q-pb-md text-center">
        <span v-if="locale === 'ko-KR'">{{ title_ko }}</span>
        <span v-else>{{ title }}</span>
      </div>
    </div>

    <!-- view recruit apply list -->
    <div class="row justify-center q-pb-md">
      <!-- <div class="text-left">
        <q-btn class="btn" color="primary" size="md" style="width: 130px;" outline @click="goRecruitApplyList" tabindex="0">
          <b>{{ $t('view_apply_list') }}</b>
        </q-btn>
      </div>
      &nbsp;&nbsp;&nbsp; -->
      <div class="text-left">
        <q-btn class="btn" color="primary" size="md" style="width: 130px;" outline @click="shareUrlCopy" no-caps tabindex="1">
          <b>{{ $t('share') }}</b>
        </q-btn>
      </div>
      &nbsp;&nbsp;&nbsp;
      <div v-if="project_seq" class="text-right">
        <q-btn class="btn" color="primary" size="md" style="width: 130px;" outline @click="showProject" no-caps tabindex="2">
          <b>{{ $t('recruit_project_information') }}</b>
        </q-btn>
      </div>
    </div>

    <q-separator color="primary" style="height: 3px;" />

    <div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td colspan="3">
            <div class="q-pt-sm"></div>
          </td>
        </tr>
        <tr>
          <td width="33%" align="center"><span class="">{{ $t('recruit_applied_yn') }}</span></td>
          <td width="33%" align="center"><span class="">{{ $t('recruit_total_applied') }}</span></td>
          <td width="33%" align="center"><span class="">{{ $t('recruit_remain_time') }}</span></td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="q-pt-sm"></div>
            <q-separator color="primary" />
            <div class="q-pt-sm"></div>
          </td>
        </tr>
        <tr>
          <td align="center">
            <q-icon v-if="isApplied" name="check" color="green" size="sm" />
            <q-icon v-else name="close" color="black" size="sm" />
          </td>
          <td align="center">{{ total_applied }}</td>
          <!-- <td align="center">
            {{ remain_time }}
            {{ $t('recruit_remain_hour') }}
          </td> -->
          <td align="center">
            <VueCountdown :time="remain_time" :interval="1000" @end="onCountdownEnd">
              <!-- <template v-slot="props">{{ props.days }} Days {{ zerofill(props.hours + (props.days * 24)) }} : {{ zerofill(props.minutes) }} : {{ zerofill(props.seconds) }}</template> -->
              <template v-slot="props">{{ zerofill(props.hours + (props.days * 24)) }} : {{ zerofill(props.minutes) }} : {{ zerofill(props.seconds) }}</template>
            </VueCountdown>
          </td>


        </tr>
        <tr>
          <td colspan="3">
            <div class="q-pt-sm"></div>
          </td>
        </tr>
      </table>
    </div>

    <q-separator color="primary" style="height: 3px;" />

    <div v-if="main_image" class="row justify-center q-pt-md">
      <div class="col-12">
        <img :src="main_image" style="width: 100%;">
      </div>
    </div>

    <!-- <q-separator color="primary" style="height: 1px;" /> -->

    <!-- contents -->
    <div class="row justify-center q-pt-md q-pb-md">
      <div class="col-12">
        <div v-if="locale === 'ko-KR'" class="col-12" v-html="contents_ko"></div>
        <div v-else class="col-12" v-html="contents"></div>
      </div>
    </div>

    <q-separator color="primary" style="height: 3px;" />
    
    <div class="q-pt-lg"></div>

    <q-toolbar class="bg-primary text-left">
      <q-icon name="edit" size="sm" color="white" />
      <q-toolbar-title class="text-white text-subtitle1">
        <strong>{{ $t('input_field') }}</strong>
      </q-toolbar-title>
    </q-toolbar>
    <q-list bordered class="q-pa-md">
      <!-- ??? input field list START -->
      <div v-for="(item, index) in rows" :key="item.seq">
        <div class="row justify-center q-pt-md">
          <div class="col-12">
            <span v-if="locale === 'ko-KR'" class="text-weight-bold text-subtitle1">{{ index + 1 }}. {{ item.name_ko }}<span v-if="item.required === 'Y'" class="text-red"> *</span></span>
            <span v-else class="text-weight-bold text-subtitle1">{{ index + 1 }}. {{ item.name }}<span v-if="item.required === 'Y'" class="text-red"> *</span></span>
          </div>
        </div>
        <!-- if - FILE TYPE -->
        <div v-if="item.type === 'FILE'">
          <div class="row justify-center q-pb-md">
            <div class="col-12">
              <q-uploader
                field-name="file"
                ref="uploaderObj"
                url="/api/common/uploadImage"
                hide-upload-btn
                color="grey-3"
                text-color="black"
                :multiple="false"
                accept="*"
                :filter="filterFiles"
                max-files="1"
                :auto-upload="true"
                :tabindex="index + 3"
                @added="fileAdded(index)"
                @uploaded="fileUploaded"
              />
            </div>
          </div>
          <!-- FILE TYPE uploaded -->
          <div class="row justify-center q-pb-md">
            <div class="col-12">
              <div v-if="item.value">
                <a @click="openUrl(item.value)" style="cursor: pointer;">
                  <q-icon name="file_download" size="sm" color="black" />
                  {{ $t('file_download') }}
                </a>
              </div>
              <div v-else>{{ $t('no_file') }}</div>
            </div>
          </div>
        </div>

        <!-- else - TEXT TYPE -->
        <div v-else>
          <div class="row justify-center">
            <div class="col-12">
              <q-input v-model="item.value" v-if="item.required === 'Y'" :rules="[required]" clearable standout :tabindex="index + 3" :readonly="applyTimeOver" />
              <q-input v-model="item.value" v-else clearable standout :tabindex="index + 3" class="q-pb-lg" :readonly="applyTimeOver" />
            </div>
          </div>
        </div>

      </div>
      <!-- ??? input field list END -->
    </q-list>

    <div class="row justify-center q-pb-xl"></div>

    <!-- buttons -->
    <div class="row justify-center q-pt-lg">
      <div class="col-6 text-left">
        <q-btn class="btn" color="grey-3" text-color="black" size="lg" style="width: 98%;" @click="goBack" tabindex="32">
          <b>{{ $t('go_back') }}</b>
        </q-btn>
      </div>
      <div class="col-6 text-right">

        <div v-if="applyTimeOver">
          <q-btn v-if="!isApplied" class="btn" color="secondary" text-color="black" size="lg" style="width: 98%;" disable tabindex="31">
            <b>{{ $t('recruit_apply') }}</b>
          </q-btn>
          <q-btn v-else class="btn" color="primary" text-color="black" size="lg" style="width: 98%;" disable tabindex="31">
            <b>{{ $t('modify') }}</b>
          </q-btn>
        </div>

        <div v-else>
          <q-btn v-if="!isApplied" class="btn" color="secondary" text-color="black" size="lg" style="width: 98%;" @click="insertRecruitApply" tabindex="31">
            <b>{{ $t('recruit_apply') }}</b>
          </q-btn>
          <q-btn v-else class="btn" color="primary" text-color="black" size="lg" style="width: 98%;" @click="updateRecruitApply" tabindex="31">
            <b>{{ $t('modify') }}</b>
          </q-btn>
        </div>

      </div>
    </div>

    <!-- ?????? ?????? ?????? -->
    <div class="row justify-center q-pa-xl">
    </div>

  </q-page>
  <!-- <LoginModal ref="refLoginModal" @callback-login="callbackLogin" /> -->
  <WalletModal ref="refWalletModal" @callback-wallet="callbackWallet" />
  <TokenDetailModal ref="refTokenDetailModal"/>
  <!-- <q-dialog v-model="confirmGoBack">
    <q-card>
      <q-card-section class="row items-center" style="min-width: 200px;">
        <q-icon name="warning" color="primary" size="md" />
        <span class="q-ml-sm">{{ $t('confirm_go_back') }}</span>
      </q-card-section>
      <q-separator />
      <q-card-actions align="around">
        <q-btn flat style="width: 45%;" :label="$t('cancel')" color="black" v-close-popup />
        <q-btn flat style="width: 45%;" :label="$t('go_back')" color="black" v-close-popup @click="doGoBack" />
      </q-card-actions>
    </q-card>
  </q-dialog> -->

</template>

<script>
import { defineComponent } from 'vue';
import { required, requiredNumber, minLength, maxLength, minValue, maxValue} from 'src/validation.js';
// import { shake128 as SHA3 } from 'js-sha3'
import { useI18n } from 'vue-i18n'
// import _ from 'lodash'
import { date } from 'quasar'

export default defineComponent({
  name: 'RecruitDetail',
  data () {
    return {
      seq_recruit_apply: '', // ??????????????? seq
      isApplied: false,
      total_applied: 0,
      remain_time: 86400000, // default 1 day -> 0 ?????? ???????????? @end="onCountdownEnd" ??? ??????????????? ?????? ??????!!!
      applyTimeOver: false, // ?????? ?????? ??????
      seq: '',
      start_time: '',
      end_time: '',
      title: '',
      title_ko: '',
      contents: '',
      contents_ko: '',
      project_seq: '',
      main_image: '',
      rows: [],
      imageFieldIndex: '', // ????????? ?????? ????????? ?????? ????????? ??????, ????????? ????????? ?????? ???????????? value??? ?????????URL??? ??????
      confirmGoBack: false,
    }
  },
  components: {
  },
  setup () {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      locale,
    }
  },
  watch: {
    getUid (newValue) {
      // ?????? ???????????? ??? ???????????? ?????? + ???????????? ?????? ??? ??????
      this.selectRecruitFieldAndActionList()
    },
  },
  computed: {
    getUid () {
      return this.$store.getters.getUid
    },
    getWalletType () {
      return this.$store.getters.getWalletType
    },
    getWalletAddress () {
      return this.$store.getters.getWalletAddress
    },
    // qDate() {
    //   return date
    // },
  },
  created: function () {
    // ??? ??????
    this.seq = this.$route.query.seq

    // locale ???????????? ?????????, ?????? locale ??????
    if (this.$route.query.l === 'ko') {
      this.locale = 'ko-KR'
    } else if (this.$route.query.l === 'en') {
      this.locale = 'en-US'
    } else {
      // klaystar default locale is... ko?
    }

    // ?????? ??????
    this.selectRecruit()

    // ?????? ???????????? ??? ???????????? ?????? + ???????????? ?????? ??? ??????
    this.selectRecruitFieldAndActionList()
  },
  mounted: function () {},
  methods: {
    zerofill (value) {
      if (!value) return '00'
      value = value.toString()
      return (value < 10 && value > -1 ? "0" : "") + value
    },
    async onCountdownEnd() {
      this.applyTimeOver = true
    },
    async selectRecruitFieldAndActionList() {

      // ???????????? ?????? ??? ??????
      this.selectRecruitApplyTotal()

      if (this.getUid) {
        // ????????? ????????? ??????
        // ???????????? ?????? -> recruit_apply??? seq ??????
        this.seq_recruit_apply = await this.selectRecruitApplySeq()
        if (this.seq_recruit_apply) {
          this.isApplied = true
          // ?????? ????????? ??????, ???????????? ?????? ????????? ??????
          this.selectRecruitFieldWithResultList()
          // // ?????? ????????? ??????, ???????????? ?????? ????????? ??????
          // this.selectRecruitActionWithResultList()
        } else {
          this.isApplied = false
          // ?????? ???????????? ??????, ???????????? ????????? ??????
          this.selectRecruitFieldList()
          // // ?????? ???????????? ??????, ???????????? ????????? ??????
          // this.selectRecruitActionList()
        }

      } else {
        // ???????????????, ???????????? ????????? ??????
        this.selectRecruitFieldList()
        // ???????????????, ???????????? ????????? ??????
        this.selectRecruitActionList()
      }
    },
    // ???????????? ??????
    async selectRecruit() {
      const param = {
        uid: this.getUid,
        seq: this.seq,
      }
      const result = await this.$axios.get('/api/recruit/selectRecruit', { params: { ...param } })
      if (result.data) {
        // console.log(result.data)

        // 1. ?????? ??????
        // this.seq = result.data.seq
        this.start_time = result.data.start_time
        this.end_time = result.data.end_time
        this.title = result.data.title
        this.contents = result.data.contents
        this.title_ko = result.data.title_ko
        this.contents_ko = result.data.contents_ko
        this.project_seq = result.data.project_seq
        this.main_image = result.data.main_image

        // 2. ?????? ?????? ??????
        this.setRemainTime(this.end_time)
      } else {
        this.$noti(this.$q, this.$t('request_data_failed'))
      }
    },
    // ???????????? ??????
    async selectRecruitApplyTotal() {
      const param = {
        uid: this.getUid,
        seq_recruit: this.seq,
      }
      const result = await this.$axios.get('/api/recruit/selectRecruitApplyTotal', { params: { ...param } })
      if (result.data) {
        // console.log(result.data)
        this.total_applied = result.data
      } else {
        this.total_applied = 0
      }
    },
    // ???????????? ??????
    async setRemainTime(targetTime) {
      // const today = this.now
      const param = {
        uid: this.getUid,
      }
      const { data: now } = await this.$axios.get('/api/common/getNow', { params: { ...param }})
      // const targetDate = new Date(targetTime)
      // const targetDate = targetTime
      // console.log('now: ' + now)
      // console.log('targetTime: ' + targetTime)
      const diff = date.getDateDiff(targetTime, now, 'seconds')
      // console.log('diff: ' + diff)
      if (diff < 0) {
        this.remain_time = 0
        this.applyTimeOver = true
      } else {
        this.remain_time = diff * 1000
      }
    },
    // ???????????? ?????? -> recruit_apply??? seq ??????, ??????
    async selectRecruitApplySeq() {
      const param = {
        uid: this.getUid,
        seq_recruit: this.seq,
      }
      const result = await this.$axios.get('/api/recruit/selectRecruitApplySeq', { params: { ...param } })
      if (result.data && result.data.seq) {
        // console.log(result.data)
        return result.data.seq
      } else {
        return null
      }
    },
    // ???????????? ????????? ??????
    async selectRecruitFieldList() {
      const param = {
        uid: this.getUid,
        seqRecruit: this.seq,
      }
      const result = await this.$axios.get('/api/recruit/selectRecruitFieldList', { params: { ...param } })
      if (result.data) {
        // console.log(result.data)
        this.rows = result.data

        // set login user wallet address
        if (this.getUid) {
          this.rows[0].value = this.getUid
        }
      } else {
        this.$noti(this.$q, this.$t('request_data_failed'))
      }
    },
    // ???????????? ?????? ????????? ??????
    async selectRecruitFieldWithResultList() {
      const param = {
        uid: this.getUid,
        seqRecruit: this.seq,
      }
      const result = await this.$axios.get('/api/recruit/selectRecruitFieldWithResultList', { params: { ...param } })
      if (result.data) {
        // console.log(result.data)
        this.rows = result.data
      } else {
        this.$noti(this.$q, this.$t('request_data_failed'))
      }
    },
    callbackLogin(userVo) {
      // console.log('callbackLogin!!!')
      this.$store.dispatch('setUid', userVo.uid)
      this.$store.dispatch('setAdcd', userVo.adcd)
      this.$store.dispatch('setName', userVo.name)
      this.$store.dispatch('setNickname', userVo.nickname)
      this.$store.dispatch('setProfileImage', userVo.profile_image)
      this.$store.dispatch('setWalletType', userVo.wallet_type)
      this.$store.dispatch('setWalletAddress', userVo.wallet_address)
      this.$store.dispatch('setMobileNo', userVo.mobile_no)
    },
    ///////////////////////////////////////////////////////////////////////////
    // validation
    ///////////////////////////////////////////////////////////////////////////
    required(val) {
      const message = this.$t('validation_required')
      return required(val, message);
    },
    requiredNumber(val) {
      const message = this.$t('validation_required')
      return required(val, message);
    },
    minLength(val, length) {
      if (!val) {
        return true
      }
      const message = this.$t('validation_min_length') + ': ' + length
      return minLength(val, message, length);
    },
    maxLength(val, length) {
      if (!val) {
        return true
      }
      const message = this.$t('validation_max_length') + ': ' + length
      return maxLength(val, message, length);
    },
    minValue(val, value) {
      const message = this.$t('validation_min_value') + ': ' + value
      return minValue(val, message, value);
    },
    maxValue(val, value) {
      const message = this.$t('validation_max_value') + ': ' + value
      return maxValue(val, message, value);
    },
    ///////////////////////////////////////////////////////////////////////////
    validate() {
      let result = true
      // check field value in rows
      for (let i = 0; i < this.rows.length; i++) {
        const fieldObj = this.rows[i]
        if (fieldObj.required === 'Y' && !fieldObj.value) {
          if (this.locale === 'ko-KR') {
            this.$noti(this.$q, this.$t('validation_failed_recruit_field_value') + ' [' + fieldObj.name_ko + ']')
          } else {
            this.$noti(this.$q, this.$t('validation_failed_recruit_field_value') + ' [' + fieldObj.name + ']')
          }
          result = false
          break
        }
      }
      return result
    },

    // ?????? ????????? ??????
    filterFiles (files) {
      const MAX_FILE_SIZE = 10 * 1024 * 1024
      // this.$store.state.UPLOAD_FILE_SIZE_LIMIT * 1024 * 1024 // = 4M
      // returns an Array containing allowed files
      return files.filter((file) => {
        if (file.size > MAX_FILE_SIZE) {
          this.$noti(this.$q, this.$t('file_size_exceeded'))

        }
        return file.size <= MAX_FILE_SIZE
      })
    },
    fileAdded(index) {
      // console.log('Index is: ' + index)
      this.imageFieldIndex = index
    },
    // ????????? ???????????? ???????????? ???????????? ?????????
    fileUploaded (file, xhr) {
      // this.business_license_image = file.xhr.responseText
      // console.log('File url is : ' + file.xhr.responseText)
      this.rows[this.imageFieldIndex].value = file.xhr.responseText
    },
    // ?????? ?????? ??????
    insertRecruitApply() {

      // ????????? ?????? ??????, ????????? ?????? ??????
      if (!this.getUid || !this.getWalletType || !this.getWalletAddress) {
        this.$refs.refWalletModal.show()
        return
      }

      // Field validation check
      if(!this.validate()) {
        return
      }

      // ?????? ?????? ??????
      if (this.applyTimeOver) {
        this.$noti(this.$q, this.$t('apply_time_over'))
        return
      }

      this.$q.loading.show() // ?????? ?????? ??????

      // ??? rows ??? value ?????? '|'??? ???????????? String values??? ??????
      let fieldValues = ''
      for (let i = 0; i < this.rows.length; i++) {
        if (i === 0) {
          fieldValues = fieldValues + (this.rows[i].value ? this.rows[i].value : '')
        } else {
          fieldValues = fieldValues + '|' + (this.rows[i].value ? this.rows[i].value : '')
        }
      }

      // ?????? ?????? ??????
      const param = {
        uid: this.getUid,
        seq_recruit: this.seq,
        email: this.rows[0].value,
        field_values: fieldValues,
      }
      // console.log(param)
      this.$axios.post('/api/recruit/insertRecruitApply', param)
        .then((result) => {
          // console.log(JSON.stringify(result.data))
          this.$q.loading.hide() // ?????? ?????? ??????
          if (result.data && result.data.resultCd === 'SUCCESS') {
            // console.log(result.data)
            this.$noti(this.$q, this.$t('recruit_apply_success'))

            // ???????????? ??????
            this.selectRecruitFieldAndActionList()

            // ???????????? disabled
            this.isApplied = true

            // 2. ????????? ?????? - ?????? ????????? ??????
            // this.$router.push('/recruit')

          } else {
            this.$noti(this.$q, this.$t('recruit_apply_failed'))
          }
        })
        .catch((err) => {
          this.$q.loading.hide() // ?????? ?????? ??????
          console.log(err)
          this.$noti(this.$q, err)
        })
    },
    // ?????? ?????? ??????
    updateRecruitApply() {

      // ????????? ?????? ??????, ????????? ?????? ??????
      if (!this.getUid || !this.getWalletType || !this.getWalletAddress) {
        this.$refs.refWalletModal.show()
        return
      }
      
      // Field validation check
      if(!this.validate()) {
        return
      }

      // ?????? ?????? ??????
      if (this.applyTimeOver) {
        this.$noti(this.$q, this.$t('apply_time_over'))
        return
      }

      this.$q.loading.show() // ?????? ?????? ??????

      // ??? rows ??? value ?????? '|'??? ???????????? String values??? ??????
      let fieldValues = ''
      for (let i = 0; i < this.rows.length; i++) {
        if (i === 0) {
          fieldValues = fieldValues + (this.rows[i].value ? this.rows[i].value : '')
        } else {
          fieldValues = fieldValues + '|' + (this.rows[i].value ? this.rows[i].value : '')
        }
      }

      // ?????? ?????? ?????? ??????
      const param = {
        // seq_recruit: this.seq,
        uid: this.getUid,
        seq: this.seq_recruit_apply,
        email: this.rows[0].value,
        field_values: fieldValues,
      }
      // console.log(param)
      this.$axios.post('/api/recruit/updateRecruitApply', param)
        .then((result) => {
          // console.log(JSON.stringify(result.data))
          this.$q.loading.hide() // ?????? ?????? ??????
          if (result.data && result.data.resultCd === 'SUCCESS') {
            // console.log(result.data)
            this.$noti(this.$q, this.$t('modify_success'))
          } else {
            this.$noti(this.$q, this.$t('modify_failed'))
          }
        })
        .catch((err) => {
          this.$q.loading.hide() // ?????? ?????? ??????
          console.log(err)
          this.$noti(this.$q, err)
        })
    },
    openUrl(url) {
      window.open(url)
    },
    shareUrlCopy() {
      // API ????????? ????????? og ?????? ?????? ?????? frontPath??? ?????????. path: https://klaystar.com/#/winfo?seq=999&locale=XXX
      const host = location.protocol + '//' + location.host
      const url = host + '/r?s=' + this.seq + '&l=' + this.locale.substring(0, 2) // seq, locale

      // ??????????????? ????????????
      this.$copyText(url).then(this.copyValueSuccess, this.copyValueFail)
    },
    copyValue(value) {
      if (!value) {
        this.$noti(this.$q, 'Value is Empty')
        return
      }
      // ??????????????? ????????????
      this.$copyText(String(value)).then(this.copyValueSuccess, this.copyValueFail)
    },
    copyValueSuccess(e) {
      // console.log(e)
      this.$noti(this.$q, this.$t('copy_success'))
    },
    copyValueFail(e) {
      // console.log(e)
      this.$noti(this.$q, this.$t('copy_failed'))
    },
    callbackWallet(walletVo) {
      // console.log('callbackLogin!!!')
      // this.$store.dispatch('setWalletAddress', walletVo.wallet_address)
    },
    goRecruitApplyList() {
      // ?????? ?????? ?????? ???????????? ??????
      this.$router.push({ path: '/recruit/recruitApplyList', query: { seq: this.seq }})
    },
    showProject() {
      // ???????????? ?????? ?????? ??????
      this.$refs.refTokenDetailModal.tokenSeq = this.project_seq
      this.$refs.refTokenDetailModal.show()
    },
    goBack() {
      // goBack ????????? ??????
      // this.confirmGoBack = true
      this.$router.go(-1)
    },
    // doGoBack() {
    //   this.$router.go(-1)
    //   // this.$router.push('/recruit/myRecruitList')
    // }
  }
})
</script>

<style scoped>
</style>
