<template>
    <div>
        <!-- <div class="container text-center pt-3 d-none d-md-block">
            <img class="img-fluid" :src="require('../assets/images/partners.jpg')" alt="">
        </div> -->
        <div class="hero mt-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 p-0">
                        <div class="hero__container">
                            <h1 class="hero__title d-none d-md-block">
                                Get Quotes from the Best Medicare Insurance Providers Under 2 Minutes
                            </h1>
                            <h1 class="hero__title d-md-none text-center pt-3">Affordable Life<br>Insurance Quotes<br><span class="hero__titleHighlight">Coverage as low as $15 a Month!</span></h1>
                            <!-- <div class="hero__subtitle d-none d-md-block">Coverage as low as $10 a month!</div> -->
                            <div class="hero__mobileBackground">
                              <div class="hero__subtitle d-md-none">Enter your Zip Code</div>
                              <form method="get" @submit.prevent="submit()">
                                <div class="zip_form">
                                    <input type="tel" maxlength="6" @keyup="checkVal($event)" placeholder="Enter your Zip Code" class="zip_code text-center" name="zip_code" id="zip_code" >
                                    <button type="submit" class="zip_submit">
                                      <span class="d-none d-md-block">Get Quotes</span>
                                      <span class="d-md-none">Next Step
                                        <svg version="1.1" class="zipInput__arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 512" style="enable-background:new 0 0 330 512;" xml:space="preserve">
                                          <g>
                                            <polygon points="0,72 72,0 330,256 74,512 0,438 186,256 "></polygon>
                                          </g>
                                        </svg>
                                        </span>
                                    </button>
                                    <label v-if="showError" class="zip_error">Please enter a valid US ZIP code</label>
                                </div>
                              </form>
                            </div>
                            <div class="heroText">
                                <div class="heroText__title">Quick & No-Obligation Quotes</div>
                                <!-- <div class="heroText__subtitle">100% Free, Safe, and Secure!</div> -->
                            </div>
                            <!-- <img class="hero__rates d-none d-md-block" :src="require('../assets/images/rates.png')" alt=""> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="iframe mt-5" v-if="showAdds">
          <iframe src="https://aspquote.com/medicare-adds.php" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showError: false,
      showAdds: false
    }
  },
  created () {
    document.title = 'Get Cheap & Fast Insurance Quotes | ASPQuote.com'
    // if (window.location.href.search('medicare')) {
    //   console.log('aho')
    // }
  },
  methods: {
    checkVal (e) {
      var zip = e.target.value
      var formData = {
        code: zip
      }
      if ((zip === null || zip === '') && isNaN(e.target.value)) {
        this.showError = true
      } else {
        this.showError = false
        this.axios.post('https://aspquote.com/backend/api/check-zip', formData).then((response) => {
          if (response.data.error === 'true') {
            this.showError = true
            this.showAdds = false
          } else {
            this.showError = false
            var zipp = response.data.state_info.Zip
            localStorage.setItem('zip', JSON.stringify(zipp))
            this.showAdds = true
          }
        }).catch((error) => {
          console.log('error' + error)
        })
      }
    },
    submit () {
      var zip = document.getElementById('zip_code')
      var formData = {
        code: zip.value
      }
      if (zip === null || zip === '' || isNaN(zip.value)) {
        this.showError = true
      } else {
        this.axios.post('https://aspquote.com/backend/api/check-zip', formData).then((response) => {
          if (response.data.error === 'true') {
            this.showError = true
          } else {
            localStorage.setItem('zip', JSON.stringify(zip.value))
            if (window.location.search !== '') {
              if (this.$route.query.zip_code) {
                var newSrc = new URL(window.location)
                newSrc.searchParams.set('zip_code', zip.value)
                this.$router.push('/medicare/lp' + newSrc.search)
              } else {
                this.$router.push('/medicare/lp?' + window.location.search)
              }
            } else {
              this.$router.push('/medicare/lp?' + zip.name + '=' + zip.value)
            }
          }
        }).catch((error) => {
          this.showError = true
          console.log('error' + error)
        })
      }
    }
  },
  mounted () {
    if (this.$route.query.zip_code) {
      var zip = document.getElementById('zip_code')
      zip.value = this.$route.query.zip_code
      var formData = {
        code: this.$route.query.zip_code
      }
      this.axios.post('https://aspquote.com/backend/api/check-zip', formData).then((response) => {
        if (response.data.error === 'true') {
          this.showError = true
        } else {
          this.showAdds = true
          this.showError = false
        }
      }).catch((error) => {
        console.log('error' + error)
      })
    }
  }
}
</script>

<style>
.hero__subtitle {
    text-shadow: 0 2px 4px rgba(0,0,0,.1);
    font-size: 16px;
    color: #fff;
    margin: 5px 0;
    text-transform: uppercase;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
label.zip_error {
    color: #c00;
    margin-bottom: 0;
    margin-top: 5px;
    font-size: 13px;
    display: block;
}
.hero__rates {
    position: absolute;
    top: 0;
    right: -40px;
}
.hero__subtitle {
    text-shadow: 0 2px 4px rgba(0,0,0,.1);
    font-size: 16px;
    color: #fff;
    margin: 5px 0;
    text-transform: uppercase;
}
.hero{
    background-image: url('../assets/images/happy_family.jpg');
    background-repeat: no-repeat;
    height: 455px;
    background-position: center -160px;
    border-bottom: 5px solid #9cc4e3;
    margin: 0 auto;
    background-size: cover;
}
.hero__titleHighlight {
    font-size: 14px;
    color: #3a497c;
    text-transform: none;
}
.hero__title {
    text-shadow: 0 2px 4px rgba(0,0,0,.1);
    font-size: 20px;
    color: #003057;
    text-transform: uppercase;
}
@media screen and (min-width: 768px){
    .heroText__subtitle, .heroText__title {
        color: #fff;
        text-shadow: 2px 2px 8px #333;
        font-size: 19px;
        display: inline;
    }
    .heroText {
        text-align: left;
        width: 100%;
        margin: 15px 0 0;
    }
    .zip_submit{
        width: 138px;
        height: 45px;
        margin-left: 5px;
        font-weight: 700;
        box-shadow: none;
        margin-top: 0;
        /* background: linear-gradient(180deg,#f79240,#da6923); */
        background: lightgreen;
        border: 1px solid #da6923;
        font-size: 18px;
    }
    .zip_code{
        width: 210px;
        border: 1px solid #b4c4d1;
        color: #666;
        font-size: 20px;
        border-radius: 0;
        height: 45px;
        box-shadow: none;
        font-family: inherit;
    }
    .zip_form {
        background-color: #e7eff4;
        padding: 7px;
        border-radius: 3px;
        width: auto;
        display: inline-block;
    }
    .hero__subtitle {
        color: #fff;
        text-shadow: 2px 2px 8px #333;
        font-size: 26px;
        text-transform: none;
    }
    .hero{
        background-image: url('../assets/images/happy_family.jpg');
        background-repeat: no-repeat;
        height: 455px;
        background-position: center -160px;
        border-bottom: 5px solid #9cc4e3;
        max-width: 1270px;
        margin: 0 auto;
        background-size: cover;
    }
    .hero__container{
        width: 430px;
        margin: 75px 0 0;
        background: none;
        padding: 0;
        text-align: inherit;
    }
    .hero__title{
        font-size: 38px;
        text-shadow: 2px 2px 8px #333;
        font-weight: 700;
        text-transform: none;
        color: #eaf6ff;
    }
}
@media screen and (max-width: 767px) {
  .hero{
    background-image: none;
    background-repeat: none;
    height: 455px;
    background-position: none;
    border-bottom: 0px;
    max-width: 1270px;
    margin: 0 auto;
  }
  .hero__mobileBackground {
    background: #003057;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .hero__container{
    text-align: center;
  }
  .zip_submit, .zip_code {
    display: block !important;
    margin: 15px auto !important;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    display: inline-block;
    height: 50px;
    width: 228px !important;
  }
  .zip_code {
    font-size: 35px !important;
    border-radius: 8px !important;
  }
  .heroText__title {
    font-size: 22px;
    color: #041d4f;
  }
  label.zip_error{
    color: white;
  }
  .zip_submit {
    /* background: #eb8533; */
    background: lightgreen;
    border: 1px solid #eb8533;
    color: #333;
    font-size: 20px;
    margin-top: 15px;
  }
  .heroText__subtitle {
    font-size: 18px;
  }
}
.zipInput__arrow {
    width: 13px;
    height: 15px;
    fill: #333;
}
button.zip_submit {
    color: #333;
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
