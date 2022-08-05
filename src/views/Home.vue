<template>
    <div>
        <div class="bg-img"></div>
        <div class="hero mt-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 p-0">
                        <div class="hero__container">
                            <h1 class="hero__title d-none d-md-block">
                                Get Quotes from the Best Health Insurance Providers Under 2 Minutes
                            </h1>
                            <!-- <div class="hero__subtitle d-none d-md-block">Coverage as low as $10 a month!</div> -->
                            <div class="hero__mobileBackground">
                              <h1 class="hero__title d-md-none text-center pt-3">Affordable Health<br>Insurance Quotes<br><span class="hero__titleHighlight">Coverage as low as $15 a Month!</span></h1>
                              <div class="hero__subtitle d-md-none">Enter your Zip Code</div>
                              <form method="get" @submit.prevent="submit()">
                                <div class="zip_form">
                                    <input type="tel" maxlength="6" @keyup="checkVal($event)" placeholder="Enter your Zip Code" class="zip_input" name="zip_code" id="zip_input" >
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
                                </div>
                                <label v-if="showError" class="zip_error">Please enter a valid US ZIP code</label>
                              </form>
                              <div class="heroText">
                                <div class="heroText__title">Quick & No-Obligation Quotes</div>
                                <!-- <div class="heroText__subtitle">100% Free, Safe, and Secure!</div> -->
                              </div>
                            </div>
                            <!-- <img class="hero__rates d-none d-md-block" :src="require('../assets/images/rates.png')" alt=""> -->
                        </div>
                        <div class="hero__container block">
                          <p>At ASPQuote, we provide our users with an easy tool to get the best health quotes from the top health insurance providers in the market. It's easy to get a quote on ASPQuote. You only need to fill out a simple form, and then you'll be all set. We'll find the cheapest quotes suitable for your needs, and then you can decide if you want to proceed with the offers. There's no obligation for you to go ahead with any of the quotes. So fill out the form with peace of mind.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="iframe mt-5" v-if="showAdds">
          <iframe id="adds" src="https://aspquote.com/adds.php" frameborder="0"></iframe>
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
      var zip = document.getElementById('zip_input')
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
                // this.$router.push('/lp' + newSrc.search)
                this.$router.push('/questions' + newSrc.search)
              } else {
                // this.$router.push('/lp?' + window.location.search)
                this.$router.push('/questions?' + window.location.search + '&' + zip.name + '=' + zip.value)
              }
            } else {
              // this.$router.push('/lp?' + zip.name + '=' + zip.value)
              this.$router.push('/questions?' + zip.name + '=' + zip.value)
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
    this.$store.commit('setheaderColor', '#ffffff')
    this.$store.commit('setappBg', '#000')
    document.body.style.backgroundColor = this.$store.state.appBg
    if (this.$route.query.utm_source) {
      localStorage.setItem('sub_1', JSON.stringify(this.$route.query.utm_source))
    } else {
      localStorage.setItem('sub_1', '')
    }
    if (this.$route.query.utm_campaign) {
      localStorage.setItem('sub_2', JSON.stringify(this.$route.query.utm_campaign))
    } else {
      localStorage.setItem('sub_2', '')
    }
    if (this.$route.query.utm_content) {
      localStorage.setItem('sub_3', JSON.stringify(this.$route.query.utm_content))
    } else {
      localStorage.setItem('sub_3', '')
    }
    if (this.$route.query.zip_code) {
      var zip = document.getElementById('zip_input')
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
.bg-img{
    width: 100%;
    position: absolute;
    background-image: url('../assets/images/happy_family.jpg');
    min-height: 670px;
    background-size: cover;
    background-position: center bottom 40%;
    z-index: 0;
    background-repeat: no-repeat;
    top: 0;
}
form{
  position: relative;
}
.zip_input:focus{
  outline: none;
}
input.zip_input:-internal-autofill-selected{
  background-color: transparent !important;
}
.site-title a.router-link-active, .site-title a.router-link-active:hover{
  font-weight: 900;
}
/* .hero{
  background-image: url('../assets/images/happy_family.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom 110%;
} */
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
.block p{
  margin: 0px;
}
.block{
    margin-top: 1rem !important;
    color: white;
    margin-bottom: 1rem !important;
}
label.zip_error {
    color: #fff;
    margin-bottom: 0;
    margin-top: 5px;
    font-size: 14px;
    display: block;
    position: absolute;
    bottom: -17px;
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
    /* background-image: url('../assets/images/happy_family.png');
    background-repeat: no-repeat;
    height: 455px;
    background-position: center -160px;
    border-bottom: 5px solid #9cc4e3; */
    margin: 0 auto;
    /* background-size: cover; */
}
.hero__titleHighlight {
    font-size: 14px;
    color: #eaf6ff;
    text-transform: none;
}
.zip_form{
  position: relative;
}
.zip_form {
    background-color: #fff;
    padding: 7px;
    border-radius: 35px;
    width: 100%;
    height: 60px;
    display: inline-block;
    overflow: hidden;
}
button.zip_submit {
    float: right;
    color: #fff;
    background: linear-gradient(
315.83deg
,#072260,#1c4194);
    outline: 0;
    box-shadow: 0 1px 5px 0 #ea5190;
    border-radius: 30px;
    position: absolute;
    right: 3px;
    top: 3px;
    height: 54px;
    width: 180px;
    font-size: 18px;
    border: 0px;
    font-weight: 700;
}
.hero__title {
    text-shadow: 0 2px 4px rgba(0,0,0,.1);
    font-size: 20px;
    color: #eaf6ff;
    text-transform: uppercase;
}
.hero__container{
  background-color: rgba(0,0,0,0.5);
}
.hero__container.block {
    padding: 15px;
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
    .zip_input{
        width: 100%;
        border: none;
        outline: none;
        padding: 0 0 0 20px;
        color: #666;
        font-size: 20px;
        border-radius: 0;
        height: 45px;
        box-shadow: none;
        font-family: inherit;
    }
    .hero__subtitle {
        color: #fff;
        text-shadow: 2px 2px 8px #333;
        font-size: 26px;
        text-transform: none;
    }
    .hero{
        /* background-image: url('../assets/images/happy_family.png');
        background-repeat: no-repeat;
        height: 455px;
        background-position: center -160px;
        border-bottom: 5px solid #9cc4e3; */
        max-width: 1270px;
        margin: 0 auto;
        /* background-size: cover; */
    }
    .hero__container{
        width: 600px;
        margin: 75px 0 0;
        background-color: rgba(0,0,0,0.5);
        padding: 20px;
        border-radius: 7px;
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
  .zip_form{
    width: 90%;
    height: 46px;
  }
  .hero__mobileBackground {
    background-color: rgba(0,0,0,0.5);
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .hero__container{
    text-align: center;
  }
  .zip_input {
    height: 35px;
    width: 100% !important;
    border: 0;
    padding: 0 0 0 10px;
    font-size: 20px !important;
  }
  button.zip_submit{
    height: 40px;
  }
  .heroText__title {
    font-size: 22px;
    color: #eaf6ff;
  }
  label.zip_error{
    color: white;
    position: relative;
    bottom: 0px;
  }
  .zip_submit {
    font-size: 20px;
  }
  .heroText__subtitle {
    font-size: 18px;
  }
}
.zipInput__arrow {
    width: 13px;
    height: 15px;
    fill: #fff;
}
.iframe{
  height: 1500px;
  max-height: 1400px;
}
.iframe iframe{
  width: 100%;
  height: 100%;
  background-color: white;
}
@media screen and (max-width: 500px) {
  button.zip_submit{
    color: #fff;
    background: linear-gradient(
315.83deg
 ,#072260,#1c4194);
    outline: 0;
    box-shadow: 0 1px 5px 0 #ea5190;
    border-radius: 30px;
    position: absolute;
    right: 4px;
    top: unset;
    bottom: 3px;
    height: 54px;
    width: 98%;
    font-size: 18px;
    border: 0px;
    font-weight: 700;
  }
  .zip_form{
    border-radius: 30px;
  }
  .zip_form {
    height: 115px;
  }
  .zip_input{
    height: 45px;
  }
  /* body{
    background-position: center left 85%;
  } */
}
</style>
