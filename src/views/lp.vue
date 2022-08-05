<template>
    <div>
        <div class="resultsHeader" v-if="showMsg">
          <div class="container text-left">
            <div class="col-12 text-center">
              <div class="results__lbHolder">
                Your {{ mediCare ? 'Medicare' : 'Health' }} Insurance search in <span class="resultsHeader__highlight js-lb-location">{{ stName }}</span> returned these pre-qualified insurance providers.
              </div>
            </div>
          </div>
        </div>
        <div class="iframe" v-if="showAdds && mediCare">
          <iframe src="https://aspquote.com/medicare-adds.php" frameborder="0"></iframe>
        </div>
        <div class="iframe" v-else-if="showAdds">
          <iframe src="https://aspquote.com/adds.php" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showAdds: false,
      showMsg: false,
      mediCare: false,
      stName: ''
    }
  },
  created () {
    if (window.location.pathname.includes('medicare')) {
      this.mediCare = true
    }
    if (window.location.pathname.includes('medicare')) {
      document.title = 'Cheap Medicare Insurance Providers in '
    } else {
      document.title = 'Cheap Health Insurance Providers in '
    }
    if (this.$route.query.utm_source) {
      localStorage.setItem('sub_1', JSON.stringify(this.$route.query.utm_source))
    }
    if (this.$route.query.utm_campaign) {
      localStorage.setItem('sub_2', JSON.stringify(this.$route.query.utm_campaign))
    }
    if (this.$route.query.utm_content) {
      localStorage.setItem('sub_3', JSON.stringify(this.$route.query.utm_content))
    }
  },
  mounted () {
    if (this.$route.query.zip_code) {
      var formData = {
        code: this.$route.query.zip_code
      }
      this.axios.post('https://aspquote.com/backend/api/check-zip', formData).then((response) => {
        if (response.data.error !== 'true') {
          var zipp = response.data.state_info.Zip
          this.stName = response.data.state_info.City + ', ' + response.data.state_info.State
          if (window.location.pathname.includes('medicare')) {
            document.title = 'Cheap Medicare Insurance Providers in ' + this.stName
          } else {
            document.title = 'Cheap Health Insurance Providers in ' + this.stName
          }
          localStorage.setItem('zip', JSON.stringify(zipp))
          this.showAdds = true
          this.showMsg = true
        }
      }).catch((error) => {
        // this.showError = true
        console.log('error' + error)
      })
      // this.$router.push('/questions?zip_code=' + this.$route.query.zip_code)
    }
  }
}
</script>
<style>
.resultsHeader__highlight {
    color: #003057;
}
.results__lbHolder {
    /* max-width: 800px; */
    margin: 0 auto;
}
.resultsHeader {
    background: #71b2c9;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
}
@media screen and (max-width: 767px) {
  .resultsHeader {
    display: inline-block;
  }
}
.iframe{
  height: 1500px;
  max-height: 1350px;
}
.iframe iframe{
  width: 100%;
  height: 100%;
}
</style>
