<template>
  <div>
    <div class="steps-bar mt-3" :class="{ hide: formSubmitted || UrlForm }">
      <div class="step-1">
        <div class="step">
          <div class="step-title active text-center">Step 1</div>
          <div class="step-subtitle active text-center">
            Your Policy Information
          </div>
          <div class="corner">
            <span></span>
          </div>
        </div>
      </div>
      <div class="step-2" :class="{ active: !firstPart }">
        <div class="step">
          <div :class="{ active: !firstPart }" class="step-title text-center">
            Step 2
          </div>
          <div
            :class="{ active: !firstPart }"
            class="step-subtitle text-center"
          >
            Applicant Information
          </div>
          <div v-if="!firstPart" class="corner">
            <span></span>
          </div>
        </div>
      </div>
      <div class="step-3" :class="{ active: thirdPart }">
        <div class="step">
          <div :class="{ active: thirdPart }" class="step-title text-center">
            Step 3
          </div>
          <div :class="{ active: thirdPart }" class="step-subtitle text-center">
            Contact Information
          </div>
        </div>
      </div>
    </div>
    <div
      class="container justify-content-center d-mobiles mt-4"
      :class="{ hide: formSubmitted || UrlForm }"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="stepPercent__number">
            Step
            <span class="js-percent-stepNumber">
              {{
                firstPart && !thirdPart
                  ? '1'
                  : !firstPart && !thirdPart
                  ? '2'
                  : '3'
              }}
            </span>
            .
          </div>
          <div class="percentBar">
            <div class="percentBar__bg">
              <div
                class="percentBar__topBar js-percent-bar"
                :class="{
                  'width-50': firstPart && !thirdPart,
                  'width-80': !firstPart && !thirdPart,
                  'width-95': thirdPart,
                }"
              ></div>
            </div>
            <div class="percentBar__text js-percent-progress">
              {{
                firstPart && !thirdPart
                  ? '50%'
                  : !firstPart && !thirdPart
                  ? '80%'
                  : '95%'
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="resultsHeader" v-if="showST && firstPart">
      <div class="container text-left">
        <div class="col-12 text-center">
          <div class="results__lbHolder">
            Your Health Insurance search in
            <span class="resultsHeader__highlight js-lb-location">
              {{ stName }}
            </span>
            returned pre-qualified insurance providers.
          </div>
        </div>
      </div>
    </div>
    <div class="d-sm-block d-md-none container fixed-bottom" v-if="showCallTxt">
      <svg
        @click="showCallTxt = false"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 352 512"
        class="mx-2 cross"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        ></path>
      </svg>
      <b>
        <a href="tel:+1-855-903-1145">
          <span>
            <span class="text-danger">(855) 903-1145</span>
            : Exclusive Call-Only Quotes
            <span v-if="stName !== ''">
              for
              <span class="text-danger">{{ stName }}</span>
            </span>
          </span>
        </a>
      </b>
    </div>
    <a class="d-sm-block d-md-none" href="tel:+1-855-903-1145">
      <div class="call-btn fixed-bottom float-right">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="phone-icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
          ></path>
        </svg>
      </div>
    </a>
    <h3 v-if="formSubmitted" align="center">Form submitted successfully!</h3>
    <h4 v-if="UrlForm" align="center">We have some special deals for you.</h4>
    <h4 v-if="UrlForm || formSubmitted" align="center">
      We will contact you back soon. Thank you!
    </h4>
    <!-- <div class="d-sm-block d-md-none" v-if="formSubmitted || !thirdPart">
          <div class="container">
            <div class="col-12 p-0 text-center pt-3">
              <a href="tel:+1-855-903-1145">
                <img class="img-fluid" :src="require('../assets/images/phn-number.png')" alt="" srcset="">
                <div class="grl-call-box">
                  <span class="number">+1-855-903-1145<br/>Call now</span>
                </div>
              </a>
            </div>
          </div>
        </div> -->
    <div class="iframe mt-5" v-if="formSubmitted || UrlForm">
      <iframe src="https://aspquote.com/adds.php" frameborder="0"></iframe>
    </div>
    <p class="d-none">API data</p>
    <pre id="code" class="container d-none" align="left"></pre>
    <p class="d-none">Response data</p>
    <pre id="response-code" class="container d-none" align="left"></pre>
    <form
      method="post"
      @submit.prevent="formData()"
      class="main-form mt-4 mb-5rem"
    >
      <input id="leadid_token" name="universal_leadid" type="hidden" value="" />
      <input
        id="xxTrustedFormToken"
        name="xxTrustedFormToken"
        type="hidden"
        value=""
      />
      <input
        id="xxTrustedFormCertUrl"
        name="xxTrustedFormCertUrl"
        type="hidden"
        value=""
      />
      <div class="container" v-if="!formSubmitted && !UrlForm">
        <div class="main-frame">
          <div class="img-rounded"></div>
          <div class="step_1" v-if="firstPart && !thirdPart">
            <div
              class="row justify-content-center"
              v-if="!$route.query.household_income"
            >
              <div class="col-md-10 pt-3">
                <label class="question-label">Household Income</label>
                <div class="formdiv">
                  <select name="" id="policy-amount">
                    <option value="75000" selected>Under $75k</option>
                    <option value="100000">Between $75k to $125k</option>
                    <option value="125000">Above $125k</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              class="row justify-content-center"
              v-if="!$route.query.coverage_type"
            >
              <div class="col-md-10 pt-3">
                <label class="question-label">
                  <!-- Length of Term -->
                  Type of coverage
                </label>
                <div class="formdiv">
                  <select name="term-length" id="term-length">
                    <option value="Individual Family" selected="">
                      Individual Family
                    </option>
                    <option value="Short Term">Short Term</option>
                    <option value="COBRA">COBRA</option>
                    <option value="Discount Plan">Discount Plan</option>
                    <option value="Medicaid">Medicaid</option>
                    <option value="Maternity Only">Maternity Only</option>
                    <option value="Dental Only">Dental Only</option>
                    <option value="Vision Only">Vision Only</option>
                    <option value="Prescription Only">Prescription Only</option>
                    <option value="Other Health">Other Health</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              class="row justify-content-center"
              v-if="!$route.query.health_check"
            >
              <div class="col-md-10 pt-3">
                <label class="question-label">
                  Do you have any of the following health conditions?
                </label>
                <div class="formdiv">
                  <div class="formButtonGrid">
                    <label
                      class="formButtonGrid__label formButtonGrid__label--left"
                    >
                      <input
                        v-model="healthVal"
                        type="radio"
                        name="health_condition"
                        value="1"
                        class="hlth-cond formButtonGrid__input"
                      />
                      <span class="indication"></span>
                      <span class="formButtonGrid__text">Yes</span>
                    </label>
                    <label
                      class="formButtonGrid__label formButtonGrid__label--right"
                    >
                      <input
                        v-model="healthVal"
                        type="radio"
                        name="health_condition"
                        value="0"
                        class="hlth-cond formButtonGrid__input"
                        checked=""
                      />
                      <span class="indication"></span>
                      <span
                        class="formButtonGrid__text formButtonGrid__text--right"
                      >
                        No
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row justify-content-center"
              v-if="!$route.query.health_check"
            >
              <div class="col-md-10 pt-3">
                <div class="conditions-list">
                  <ul class="conditions">
                    <li>AIDS/HIV</li>
                    <li>Diabetes Type 1</li>
                    <li>Diabetes Type 2</li>
                    <li>Liver Disease</li>
                    <li>Alzheimer's Disease</li>
                    <li>Lung Disease</li>
                    <li>Drug Abuse</li>
                    <li>Mental Illness</li>
                    <li>Cancer</li>
                    <li>Heart Disease</li>
                    <li>Stroke</li>
                    <li>Depression</li>
                    <li>Kidney Disease</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="row justify-content-center"
              v-if="!$route.query.tobacco_user"
            >
              <div class="col-md-10 pt-3">
                <label class="question-label">Are you a tobacco user?</label>
                <div class="formdiv">
                  <div class="formButtonGrid">
                    <label
                      class="formButtonGrid__label formButtonGrid__label--left"
                    >
                      <input
                        v-model="tobaccoVal"
                        type="radio"
                        name="tobacco"
                        value="1"
                        class="tobacco-usr formButtonGrid__input"
                      />
                      <span class="indication"></span>
                      <span
                        @click="tobaccoUsr = false"
                        class="formButtonGrid__text"
                      >
                        Yes
                      </span>
                    </label>
                    <label
                      class="formButtonGrid__label formButtonGrid__label--right"
                    >
                      <input
                        v-model="tobaccoVal"
                        type="radio"
                        name="tobacco"
                        checked=""
                        value="0"
                        class="tobacco-usr formButtonGrid__input"
                      />
                      <span class="indication"></span>
                      <span
                        @click="tobaccoUsr = false"
                        class="formButtonGrid__text formButtonGrid__text--right"
                      >
                        No
                      </span>
                    </label>
                    <label v-if="tobaccoUsr" class="tobacco-err">
                      Please select any option above.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-10 pt-3">
                <div class="pt-3 formDisclaimer" v-if="showOnlySubmit">
                  <input
                    type="checkbox"
                    v-model="agreed"
                    id="leadid_tcpa_disclosure"
                  />
                  <label for="leadid_tcpa_disclosure">
                    I acknowledge that I'm over 18 years old, and I agree with
                    ASPQuote's
                    <a
                      href="https://aspquote.com/privacy-policy.html"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                    and
                    <a
                      href="https://aspquote.com/terms-of-services.html"
                      target="_blank"
                    >
                      Terms of Services
                    </a>
                    . I authorize ASPQuote and its partners to contact me for
                    marketing/telemarketing purposes at the number and address
                    provided above, including my wireless number if provided,
                    using live operators, automated telephone dialing systems,
                    pre-recorded messages, text messages and/or emails, even if
                    the number I provide is on a Do Not Call registry. Message
                    and data rates may apply. By calling the phone numbers
                    listed on ASPQuote I agree with the
                    <a
                      href="https://aspquote.com/privacy-policy.html"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                    and
                    <a
                      href="https://aspquote.com/terms-of-services.html"
                      target="_blank"
                    >
                      Terms of Services
                    </a>
                    . See our marketing partners
                    <a
                      href="https://aspquote.com/organizations.html"
                      target="_blank"
                    >
                      here
                    </a>
                    .
                  </label>
                </div>
                <button
                  :disabled="!enableSubmit || !agreed"
                  v-if="showOnlySubmit"
                  id="submit-form"
                  class="mainForm__button"
                  type="submit"
                >
                  <span class="mobileOnly show-in-mob">Submit</span>
                  <span class="desktopOnly hide-in-mob">Submit »</span>
                  <svg
                    version="1.1"
                    class="mainForm__buttonArrow icon-caret-left show-in-mob"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 330 512"
                    style="enable-background: new 0 0 330 512;"
                    xml:space="preserve"
                  >
                    <g>
                      <polygon
                        points="0,72 72,0 330,256 74,512 0,438 186,256"
                      ></polygon>
                    </g>
                  </svg>
                </button>
                <button
                  class="mainForm__button"
                  v-else
                  @click.prevent="goNext()"
                >
                  <!-- <span class="mobileOnly">Next Step</span> -->
                  <span class="desktopOnly">Continue</span>
                  <svg
                    version="1.1"
                    class="mainForm__buttonArrow icon-caret-left show-in-mob"
                    :class="{ 'top-26px': firstPart && !thirdPart }"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 330 512"
                    style="enable-background: new 0 0 330 512;"
                    xml:space="preserve"
                  >
                    <g>
                      <polygon
                        points="0,72 72,0 330,256 74,512 0,438 186,256"
                      ></polygon>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="step_2" v-else-if="!firstPart && !thirdPart">
            <div class="row justify-content-center" v-if="!$route.query.gender">
              <div class="col-md-10">
                <label class="question-label">Gender</label>
                <div
                  class="formdiv formButtonGrid formButtonGrid--fullWidthFor3 gender"
                >
                  <label
                    class="formButtonGrid__label formButtonGrid__label--left"
                    @click="setGen(false, 'M')"
                  >
                    <input
                      type="radio"
                      name="gender"
                      v-model="genVal"
                      value="M"
                      class="gender formButtonGrid__input"
                    />
                    <span class="indication"></span>
                    <span @click="gndrErr = false" class="formButtonGrid__text">
                      Male
                    </span>
                  </label>
                  <label
                    class="formButtonGrid__label"
                    @click="setGen(true, 'F')"
                  >
                    <input
                      type="radio"
                      name="gender"
                      v-model="genVal"
                      value="F"
                      class="gender formButtonGrid__input"
                    />
                    <span class="indication"></span>
                    <span
                      @click="gndrErr = false"
                      class="formButtonGrid__text formButtonGrid__text--left"
                    >
                      Female
                    </span>
                  </label>
                  <label
                    class="formButtonGrid__label formButtonGrid__label--right"
                    @click="setGen(false, 'X')"
                  >
                    <input
                      type="radio"
                      name="gender"
                      v-model="genVal"
                      value="X"
                      class="gender formButtonGrid__input"
                    />
                    <span class="indication"></span>
                    <span
                      @click="gndrErr = false"
                      class="formButtonGrid__text formButtonGrid__text--right"
                    >
                      Nonbinary
                    </span>
                  </label>
                  <label v-if="gndrErr" class="gen-err">
                    Please select any option above.
                  </label>
                </div>
              </div>
            </div>
            <div class="row justify-content-center" v-if="!$route.query.height">
              <div class="col-md-10 pt-3">
                <label class="question-label">Height</label>
                <div class="formdiv">
                  <div class="row">
                    <div class="col-md-6 col-6">
                      <select
                        v-model="feet"
                        :class="{ error: htErr }"
                        @change="htErr = false"
                        class="mainForm__select"
                        id="height"
                        name="height_ft"
                        aria-label="height: feet"
                      >
                        <option value="" disabled="" selected="">FT</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-6">
                      <select
                        v-model="inch"
                        :class="{ error: htErr }"
                        class="mainForm__select"
                        id="incs"
                        name="height_in"
                        aria-label="height: inches"
                      >
                        <option value="" selected="" disabled="">IN</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                      </select>
                    </div>
                    <label v-if="htErr" class="col-12 ht-err">
                      Please select any number.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center" v-if="!$route.query.weight">
              <div class="col-md-10 pt-3">
                <label class="question-label">Weight</label>
                <div class="formdiv">
                  <input
                    v-model="weight"
                    :class="{ error: wtErr }"
                    @keyup="checkWt($event)"
                    class="mainForm__input text-left js-nextField"
                    name="weight"
                    id="weight"
                    type="tel"
                    placeholder="Lbs"
                    maxlength="3"
                  />
                  <label v-if="wtErr" class="wt-err">
                    Please enter your weight.
                  </label>
                </div>
              </div>
            </div>
            <div class="row justify-content-center" v-if="!$route.query.dob">
              <div class="col-md-10 pt-3">
                <label class="question-label">Birth Date</label>
                <div class="row">
                  <div class="col-4" style="padding-right: 4px;">
                    <input
                      v-model="month"
                      :class="{ error: dobErr }"
                      id="mnth"
                      @keyup="checkMnth($event)"
                      class="mainForm__input js-nextField"
                      type="tel"
                      name="dob_mm"
                      value=""
                      placeholder="MM"
                      maxlength="2"
                      aria-label="month"
                      aria-invalid="true"
                    />
                  </div>
                  <div
                    class="col-4"
                    style="padding-right: 4px; padding-left: 4px;"
                  >
                    <input
                      v-model="day"
                      :class="{ error: dobErr }"
                      id="day"
                      @keyup="checkDay($event)"
                      class="mainForm__input js-nextField"
                      type="tel"
                      name="dob_dd"
                      value=""
                      placeholder="DD"
                      maxlength="2"
                      aria-label="day"
                      aria-invalid="true"
                    />
                  </div>
                  <div class="col-4" style="padding-left: 4px;">
                    <input
                      v-model="year"
                      :class="{ error: dobErr }"
                      id="year"
                      @keyup="checkYr($event)"
                      class="mainForm__input js-nextField"
                      type="tel"
                      name="dob_yyyy"
                      value=""
                      placeholder="YYYY"
                      maxlength="4"
                      aria-label="year"
                      aria-invalid="true"
                    />
                  </div>
                  <label class="col-12 dob-err"></label>
                </div>
              </div>
            </div>
            <div class="row justify-content-center" v-if="showPreg">
              <div class="col-md-10 pt-3">
                <label class="question-label">Are you pregnant?</label>
                <div class="formdiv">
                  <div class="formButtonGrid">
                    <label
                      class="formButtonGrid__label formButtonGrid__label--left"
                    >
                      <input
                        type="radio"
                        name="pregnant"
                        value="1"
                        class="pregnant formButtonGrid__input"
                      />
                      <span class="indication"></span>
                      <span
                        @click="showPregErr = false"
                        class="formButtonGrid__text"
                      >
                        Yes
                      </span>
                    </label>
                    <label
                      class="formButtonGrid__label formButtonGrid__label--right"
                    >
                      <input
                        type="radio"
                        checked=""
                        name="pregnant"
                        value="0"
                        class="pregnant formButtonGrid__input"
                      />
                      <span class="indication"></span>
                      <span
                        @click="showPregErr = false"
                        class="formButtonGrid__text formButtonGrid__text--right"
                      >
                        No
                      </span>
                    </label>
                    <label v-if="showPregErr" class="tobacco-err">
                      Please select any option above.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row justify-content-center"
              :class="{ hide: formSubmitted || UrlForm }"
            >
              <div class="col-md-10 pt-3">
                <div class="row" v-if="!checkOnlyPreg">
                  <div class="col-md-4 hide-in-mob" style="align-self: center;">
                    <span v-if="showBack" class="goBack" @click="goBack()">
                      « Back
                    </span>
                  </div>
                  <div class="col-md-8">
                    <button
                      class="mainForm__button"
                      v-if="!showOnlySubmit"
                      @click.prevent="goToLast()"
                    >
                      <span class="mobileOnly show-in-mob">Almost Done</span>
                      <span class="desktopOnly hide-in-mob">Almost Done »</span>
                      <svg
                        version="1.1"
                        class="mainForm__buttonArrow icon-caret-left show-in-mob"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 330 512"
                        style="enable-background: new 0 0 330 512;"
                        xml:space="preserve"
                      >
                        <g>
                          <polygon
                            points="0,72 72,0 330,256 74,512 0,438 186,256"
                          ></polygon>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-md-12 pt-3 formDisclaimer"
                    v-if="showOnlySubmit"
                  >
                    <input
                      type="checkbox"
                      v-model="agreed"
                      id="leadid_tcpa_disclosure"
                    />
                    <label for="leadid_tcpa_disclosure">
                      I acknowledge that I'm over 18 years old, and I agree with
                      ASPQuote's
                      <a
                        href="https://aspquote.com/privacy-policy.html"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                      and
                      <a
                        href="https://aspquote.com/terms-of-services.html"
                        target="_blank"
                      >
                        Terms of Services
                      </a>
                      . I authorize ASPQuote and its partners to contact me for
                      marketing/telemarketing purposes at the number and address
                      provided above, including my wireless number if provided,
                      using live operators, automated telephone dialing systems,
                      pre-recorded messages, text messages and/or emails, even
                      if the number I provide is on a Do Not Call registry.
                      Message and data rates may apply. By calling the phone
                      numbers listed on ASPQuote I agree with the
                      <a
                        href="https://aspquote.com/privacy-policy.html"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                      and
                      <a
                        href="https://aspquote.com/terms-of-services.html"
                        target="_blank"
                      >
                        Terms of Services
                      </a>
                      . See our marketing partners
                      <a
                        href="https://aspquote.com/organizations.html"
                        target="_blank"
                      >
                        here
                      </a>
                      .
                    </label>
                  </div>
                  <div class="col-12" v-if="showOnlySubmit">
                    <button
                      :disabled="!enableSubmit || !agreed"
                      id="submit-form"
                      class="mainForm__button"
                      type="submit"
                    >
                      <span class="mobileOnly show-in-mob">Submit</span>
                      <span class="desktopOnly hide-in-mob">Submit »</span>
                      <svg
                        version="1.1"
                        class="mainForm__buttonArrow icon-caret-left show-in-mob"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 330 512"
                        style="enable-background: new 0 0 330 512;"
                        xml:space="preserve"
                      >
                        <g>
                          <polygon
                            points="0,72 72,0 330,256 74,512 0,438 186,256"
                          ></polygon>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div class="col-12" v-if="checkOnlyPreg">
                    <button
                      :disabled="!enableSubmit"
                      v-if="showOnlySubmit"
                      id="submit-form"
                      class="mainForm__button"
                      type="submit"
                    >
                      <span class="mobileOnly show-in-mob">Submit</span>
                      <span class="desktopOnly hide-in-mob">Submit »</span>
                      <svg
                        version="1.1"
                        class="mainForm__buttonArrow icon-caret-left show-in-mob"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 330 512"
                        style="enable-background: new 0 0 330 512;"
                        xml:space="preserve"
                      >
                        <g>
                          <polygon
                            points="0,72 72,0 330,256 74,512 0,438 186,256"
                          ></polygon>
                        </g>
                      </svg>
                    </button>
                    <button
                      :disabled="!enableSubmit"
                      v-else
                      id="submit-form"
                      class="mainForm__button"
                      type="submit"
                    >
                      <span class="mobileOnly show-in-mob">Submit</span>
                      <span class="desktopOnly hide-in-mob">Submit »</span>
                      <svg
                        version="1.1"
                        class="mainForm__buttonArrow icon-caret-left show-in-mob"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 330 512"
                        style="enable-background: new 0 0 330 512;"
                        xml:space="preserve"
                      >
                        <g>
                          <polygon
                            points="0,72 72,0 330,256 74,512 0,438 186,256"
                          ></polygon>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="step_3" v-else-if="thirdPart">
            <div
              class="row justify-content-center"
              v-if="!$route.query.first_name || !$route.query.last_name"
            >
              <div class="col-md-10">
                <label class="question-label">Name</label>
                <div class="formdiv">
                  <div class="row">
                    <div
                      v-if="!$route.query.first_name"
                      :class="{
                        'col-12': $route.query.last_name,
                        'col-6': !$route.query.last_name,
                      }"
                    >
                      <input
                        v-model="fName"
                        :class="{ error: nameErr }"
                        class="mainForm__input text-left"
                        @keyup="checkFname($event)"
                        type="text"
                        id="first_name"
                        value=""
                        placeholder="First Name"
                      />
                    </div>
                    <div
                      v-if="!$route.query.last_name"
                      :class="{
                        'col-12': $route.query.first_name,
                        'col-6': !$route.query.first_name,
                      }"
                    >
                      <input
                        v-model="lName"
                        :class="{ error: nameErr }"
                        class="mainForm__input text-left"
                        type="text"
                        @keyup="checkLname($event)"
                        id="last_name"
                        value=""
                        placeholder="Last Name"
                      />
                    </div>
                    <div v-if="nameErr" class="col-12">
                      <label class="nameErr">Please enter your Name.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row justify-content-center"
              v-if="!$route.query.street_address"
            >
              <div class="col-md-10 pt-3">
                <label class="question-label">Street Address</label>
                <div class="formdiv">
                  <input
                    v-model="stAddress"
                    :class="{ error: addressErr }"
                    class="mainForm__input text-left"
                    @keyup="checkStreet($event)"
                    type="text"
                    id="street_address"
                    value=""
                  />
                  <label v-if="addressErr" class="streetErr">
                    Please enter your Street Address.
                  </label>
                </div>
              </div>
            </div>
            <div
              class="row justify-content-center"
              v-if="!$route.query.state || !$route.query.zip_code"
            >
              <div class="col-md-10 pt-3">
                <div class="formdiv">
                  <div class="row">
                    <div
                      v-if="!$route.query.zip_code || showZip"
                      class="col-12"
                    >
                      <label class="question-label">Zip Code</label>
                      <div class="formdiv">
                        <input
                          type="tel"
                          @keyup="checkZip($event)"
                          class="zip_code pl-3"
                          placeholder="Zip Code"
                          :class="{ error: zipCode }"
                          name="zip_code"
                          id="zip"
                        />
                        <label v-if="zipCode" class="zip-code">
                          Please enter valid zip code.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center" v-if="!$route.query.phone">
              <div class="col-md-10 pt-3">
                <div class="row">
                  <div class="col-12">
                    <label class="mainForm__label question-label">
                      Phone Number
                    </label>
                  </div>
                  <div class="col-4" style="padding-right: 4px;">
                    <input
                      v-model="phn1"
                      :class="{ error: phoneErr }"
                      class="mainForm__input phone_number"
                      @keyup="checkPhone($event)"
                      type="tel"
                      name="phone_1"
                      placeholder="###"
                      maxlength="3"
                    />
                  </div>
                  <div
                    class="col-4"
                    style="padding-right: 4px; padding-left: 4px;"
                  >
                    <input
                      v-model="phn2"
                      :class="{ error: phoneErr }"
                      class="mainForm__input phone_number"
                      @keyup="checkPhone($event)"
                      type="tel"
                      name="phone_2"
                      placeholder="###"
                      maxlength="3"
                    />
                  </div>
                  <div class="col-4" style="padding-left: 4px;">
                    <input
                      v-model="phn3"
                      :class="{ error: phoneErr }"
                      class="mainForm__input phone_number"
                      @keyup="checkPhone($event)"
                      type="tel"
                      name="phone_3"
                      placeholder="####"
                      maxlength="4"
                    />
                  </div>
                  <div class="col-12" v-if="phoneErr">
                    <label class="phoneErr">
                      Please enter valid Phone Number.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center" v-if="!$route.query.email">
              <div class="col-md-10 pt-3">
                <label class="question-label">Email</label>
                <div class="formdiv">
                  <input
                    v-model="email"
                    class="mainForm__input text-left"
                    :class="{ error: emailErr }"
                    @keyup="checkEmail($event)"
                    type="text"
                    id="email"
                    value=""
                  />
                  <label v-if="emailErr" class="mailErr">
                    Please enter valid Email.
                  </label>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-10 pt-3 formDisclaimer">
                <input
                  type="checkbox"
                  v-model="agreed"
                  id="leadid_tcpa_disclosure"
                />
                <label for="leadid_tcpa_disclosure">
                  I acknowledge that I'm over 18 years old, and I agree with
                  ASPQuote's
                  <a
                    href="https://aspquote.com/privacy-policy.html"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                  and
                  <a
                    href="https://aspquote.com/terms-of-services.html"
                    target="_blank"
                  >
                    Terms of Services
                  </a>
                  . I authorize ASPQuote and its partners to contact me for
                  marketing/telemarketing purposes at the number and address
                  provided above, including my wireless number if provided,
                  using live operators, automated telephone dialing systems,
                  pre-recorded messages, text messages and/or emails, even if
                  the number I provide is on a Do Not Call registry. Message and
                  data rates may apply. By calling the phone numbers listed on
                  ASPQuote I agree with the
                  <a
                    href="https://aspquote.com/privacy-policy.html"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                  and
                  <a
                    href="https://aspquote.com/terms-of-services.html"
                    target="_blank"
                  >
                    Terms of Services
                  </a>
                  . See our marketing partners
                  <a
                    href="https://aspquote.com/organizations.html"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </label>
              </div>
            </div>
            <div
              class="row justify-content-center"
              :class="{ hide: formSubmitted || UrlForm }"
            >
              <div class="col-md-10 pt-3">
                <div class="row">
                  <div class="col-md-4 hide-in-mob" style="align-self: center;">
                    <span v-if="showBack" class="goBack" @click="goBack()">
                      « Back
                    </span>
                  </div>
                  <div class="col-md-8">
                    <button
                      :disabled="!enableSubmit || !agreed"
                      id="submit-form"
                      class="mainForm__button"
                      type="submit"
                    >
                      <span class="mobileOnly show-in-mob">Submit</span>
                      <span class="desktopOnly hide-in-mob">Submit »</span>
                      <svg
                        version="1.1"
                        class="mainForm__buttonArrow icon-caret-left show-in-mob"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 330 512"
                        style="enable-background: new 0 0 330 512;"
                        xml:space="preserve"
                      >
                        <g>
                          <polygon
                            points="0,72 72,0 330,256 74,512 0,438 186,256"
                          ></polygon>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      showCallTxt: true,
      zipCode: false,
      agreed: false,
      showPreg: false,
      showPregErr: false,
      firstPart: true,
      thirdPart: false,
      enableSubmit: false,
      tobaccoUsr: false,
      gndrErr: false,
      htErr: false,
      wtErr: false,
      dobErr: false,
      fName: '',
      lName: '',
      email: '',
      day: '',
      month: '',
      year: '',
      feet: '',
      inch: '',
      phn1: '',
      phn2: '',
      phn3: '',
      pregVal: '',
      ip: '',
      zipVal: '',
      policyVal: '',
      tobaccoVal: 0,
      termVal: '',
      healthVal: 0,
      genVal: '',
      stAddress: '',
      weight: '',
      htVal: '',
      wtVal: '',
      dobVal: '',
      requestID: '',
      showOnlySubmit: false,
      formSubmitted: false,
      UrlForm: false,
      phoneErr: false,
      nameErr: false,
      addressErr: false,
      emailErr: false,
      phoneVal: '',
      showST: '',
      stName: '',
      showZip: false,
      showBack: true,
      checkOnlyPreg: false,
      trustedID: '',
    }
  },
  methods: {
    setGen(pregnent, setGenVal) {
      this.showPreg = pregnent
      this.genVal = setGenVal
    },
    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate()
    },
    DateNtime() {
      var date = new Date()
      var month = date.getMonth()
      var dt = date.getDate()
      var mints = date.getMinutes()
      var seconds = date.getSeconds()
      parseInt(month)
      parseInt(dt)
      parseInt(mints)
      parseInt(seconds)
      month++
      month = ('0' + month).slice(-2)
      dt = ('0' + dt).slice(-2)
      mints = ('0' + mints).slice(-2)
      seconds = ('0' + seconds).slice(-2)
      return (
        date.getFullYear() +
        '-' +
        month +
        '-' +
        dt +
        ' ' +
        date.getHours() +
        ':' +
        mints +
        ':' +
        seconds
      )
    },
    validDob() {
      var yr = this.year
      var mnth = this.month
      var day = this.day
      if (yr == '' || mnth == '' || day == '') {
        this.dobErr = true
        var errTxt = document.getElementsByClassName('dob-err')
        errTxt[0].style.display = 'block'
        errTxt[0].innerHTML = 'Please enter valid date.'
        return false
      } else {
        if (parseInt(day) > this.daysInMonth(mnth, yr)) {
          this.dobErr = true
          var errTxt = document.getElementsByClassName('dob-err')
          errTxt[0].style.display = 'block'
          errTxt[0].innerHTML = 'Please enter valid date.'
          return false
        } else if (parseInt(mnth) > 12) {
          this.dobErr = true
          var errTxt = document.getElementsByClassName('dob-err')
          errTxt[0].style.display = 'block'
          errTxt[0].innerHTML = 'Please enter valid date.'
          return false
        } else {
          parseInt(day)
          parseInt(mnth)
          mnth = ('0' + mnth).slice(-2)
          day = ('0' + day).slice(-2)
          this.dobVal = yr + '-' + mnth + '-' + day
          var today = new Date()
          var dob = new Date(this.dobVal)
          if (today.getFullYear() < parseInt(yr)) {
            this.dobErr = true
            var errTxt = document.getElementsByClassName('dob-err')
            errTxt[0].style.display = 'block'
            errTxt[0].innerHTML = 'Please enter valid date.'
            return false
          } else if (dob > today) {
            this.dobErr = true
            var errTxt = document.getElementsByClassName('dob-err')
            errTxt[0].style.display = 'block'
            errTxt[0].innerHTML = 'Please enter valid date.'
            return false
          } else {
            this.dobErr = false
            return true
          }
        }
      }
    },
    checkYr(e) {
      var yr = e.target.value
      if (yr === null || yr === '' || yr <= 1900 || yr > 4000 || isNaN(yr)) {
        this.dobErr = true
        var errTxt = document.getElementsByClassName('dob-err')
        errTxt[0].style.display = 'block'
        errTxt[0].innerHTML = 'Please enter valid Year.'
      } else {
        this.dobErr = false
        errTxt = document.getElementsByClassName('dob-err')
        errTxt[0].style.display = 'none'
      }
    },
    checkDay(e) {
      var day = e.target.value
      if (day === null || day === '' || day <= 0 || day > 31 || isNaN(day)) {
        this.dobErr = true
        var errTxt = document.getElementsByClassName('dob-err')
        errTxt[0].style.display = 'block'
        errTxt[0].innerHTML = 'Please enter valid Day.'
      } else {
        errTxt = document.getElementsByClassName('dob-err')
        errTxt[0].style.display = 'none'
        this.dobErr = false
      }
    },
    checkMnth(e) {
      var mnth = e.target.value
      if (
        mnth === null ||
        mnth === '' ||
        mnth <= 0 ||
        mnth > 12 ||
        isNaN(mnth)
      ) {
        this.dobErr = true
        var errTxt = document.getElementsByClassName('dob-err')
        errTxt[0].style.display = 'block'
        errTxt[0].innerHTML = 'Please enter valid Month.'
      } else {
        errTxt = document.getElementsByClassName('dob-err')
        errTxt[0].style.display = 'none'
        this.dobErr = false
      }
    },
    checkFname(e) {
      if (e.target.value === '' || e.target.value === null) {
        this.nameErr = true
      } else {
        this.nameErr = false
      }
    },
    checkStreet(e) {
      if (e.target.value === '' || e.target.value === null) {
        this.addressErr = true
      } else {
        this.addressErr = false
      }
    },
    checkEmail(e) {
      if (e.target.value === '' || e.target.value === null) {
        this.emailErr = true
      } else {
        this.emailErr = false
      }
    },
    checkPhone(e) {
      if (e.target.value === '' || e.target.value === null) {
        this.phoneErr = true
      } else {
        this.phoneErr = false
      }
    },
    checkLname(e) {
      if (e.target.value === '' || e.target.value === null) {
        this.nameErr = true
      } else {
        this.nameErr = false
      }
    },
    checkZip(e) {
      var zip = e.target.value
      var formData = {
        code: zip,
      }
      if ((zip === null || zip === '') && isNaN(e.target.value)) {
        this.zipCode = true
      } else {
        this.axios
          .post('https://aspquote.com/backend/api/check-zip', formData)
          .then((response) => {
            if (response.data.error === 'true') {
              this.zipCode = true
              this.showZip = true
            } else {
              this.showZip = true
              this.zipCode = false
              this.zipVal = response.data.state_info.Zip
            }
          })
          .catch((error) => {
            this.zipCode = false
            console.log('error' + error)
          })
      }
    },
    formData() {
      this.trustedID =
        document.getElementById('xxTrustedFormToken') !== null
          ? document.getElementById('xxTrustedFormToken').value
          : document.getElementById('xxTrustedFormToken_0').value
      if (this.checkOnlyPreg) {
        var pregnant = document.getElementsByClassName('pregnant')
        for (let index = 0; index < pregnant.length; index++) {
          if (pregnant[index].checked) {
            this.pregVal = pregnant[index].defaultValue
          }
        }
        this.$route.query.pregnancy = this.pregVal
        this.$route.query.LeadiD = document.getElementById('leadid_token').value
        this.$route.query.trusted_form = this.trustedID
        this.UrlForm = true
        this.axios
          .post('https://aspquote.com/backend/api/get-form', this.$route.query)
          .then((response) => {
            if (response.data.success === 'true') {
              this.UrlForm = true
              this.formSubmitted = true
              this.requestID = response.data.id
              var code = document.getElementById('code')
              var responsecode = document.getElementById('response-code')
              var sampleAPI = {
                address: this.$route.query.street_address,
                // birth_date: this.dobVal,
                contact:
                  this.$route.query.first_name +
                  ' ' +
                  this.$route.query.last_name,
                // coverage_amount: this.policyVal,
                email: this.$route.query.email,
                household_income: parseInt(this.$route.query.household_income),
                leadid_id: document.getElementById('leadid_token').value,
                pregnant: parseInt(this.pregVal),
                coverage_type: this.$route.query.coverage_type, // 'COBRA',
                // gender: this.genVal,
                // height: this.htVal,
                currently_insured: 0,
                current_company: 'Other',
                major_condition_aids_hiv: '0',
                major_condition_alcohol_drug_abuse: '0',
                major_condition_alzheimers_dementia: '0',
                major_condition_asthma: '0',
                major_condition_cancer: '0',
                major_condition_clinical_depression: '0',
                major_condition_diabetes: '0',
                major_condition_emphysema: '0',
                major_condition_epilepsy: '0',
                major_condition_heart_attack: '0',
                major_condition_heart_disease: '0',
                major_condition_hepatitis_liver: '0',
                major_condition_high_blood_pressure: '0',
                major_condition_high_cholesterol: '0',
                major_condition_kidney_disease: '0',
                major_condition_mental_illness: '0',
                major_condition_multiple_sclerosis: '0',
                major_condition_other: this.$route.query.health_check,
                major_condition_pulmonary_disease: '0',
                major_condition_stroke: '0',
                major_condition_ulcers: '0',
                major_condition_vascular_disease: '0',
                phone: this.$route.query.phone,
                qualifying_life_event: 'none',
                primary: {
                  name:
                    this.$route.query.first_name +
                    ' ' +
                    this.$route.query.last_name,
                  birth_date: this.$route.query.dob,
                  gender: this.$route.query.gender,
                  height: this.$route.query.height,
                  weight: this.$route.query.weight,
                  tobacco: parseInt(this.$route.query.tobacco_user),
                },
                tcpa: {
                  call_consent: 1,
                  email_consent: 1,
                  sms_consent: 1,
                  text:
                    "I acknowledge that I'm over 18 years old, and I agree with ASPQuote's Privacy Policy and Terms of Services. I authorize ASPQuote and its partners to contact me for marketing/telemarketing purposes at the number and address provided above, including my wireless number if provided, using live operators, automated telephone dialing systems, pre-recorded messages, text messages and/or emails, even if the number I provide is on a Do Not Call registry. Message and data rates may apply. By calling the phone numbers listed on ASPQuote I agree with the Privacy Policy and Terms of Services. See our marketing partners here.",
                  url: 'https://aspquote.com/questions',
                },
                // tobacco: this.tobaccoVal,
                // weight: this.wtVal,
                trusted_form_certificate_id: this.trustedID
                  .split('/')
                  .slice(-1)[0],
                zip: this.$route.query.zip_code,
              }
              var sub_1 = localStorage.getItem('sub_1')
                ? localStorage.getItem('sub_1')
                : ''
              var sub_2 = localStorage.getItem('sub_2')
                ? localStorage.getItem('sub_2')
                : ''
              var sub_3 = localStorage.getItem('sub_3')
                ? localStorage.getItem('sub_3')
                : ''
              var data = {
                api_token: 'YBZLc26JLnlS-iV_kovIl3-UH4m2l_Vo',
                placement_id: '23J26NbOyPkDpHiwVc1zVCQ8KUI92A',
                version: 18,
                // ping_id: 'bDLrzppj0RJS6e7jMmZkO50Gwax7EQ',
                // bid_ids: ['J3XxRLRGGaGW_w8up3zr_wOQeKCxXA', 'iwovcNuY2qMa2akQ5DtECjQdjAxj0A'],
                ua: navigator.userAgent,
                ip: this.ip,
                url: 'https://aspquote.com/questions',
                sub_1: sub_1 ? JSON.parse(sub_1) : '',
                sub_2: sub_2 ? JSON.parse(sub_2) : '',
                sub_3: sub_3 ? JSON.parse(sub_3) : '',
                data: sampleAPI,
                // local_hour: 1,
                date_time: this.DateNtime(),
              }
              delete data.data.zip_code
              // https://cors-anywhere.herokuapp.com/
              code.textContent = JSON.stringify(data, '', 2)
              localStorage.setItem('data', JSON.stringify(data))
              this.axios
                .post(
                  'https://cors.bridged.cc/https://insurance-leads.mediaalpha.com/post.json',
                  data,
                )
                .then((response) => {
                  responsecode.textContent = JSON.stringify(
                    response.data,
                    '',
                    2,
                  )
                  var self = this
                  setTimeout(function () {
                    var rspnse = {
                      id: self.requestID,
                      data: response.data,
                    }
                    self.axios
                      .post(
                        'https://aspquote.com/backend/api/save-response',
                        rspnse,
                      )
                      .then((message) => {
                        console.log(message)
                      })
                      .catch((error) => {
                        console.log(error)
                      })
                  }, 5000)
                })
                .catch((error) => {
                  console.log('error' + error)
                  responsecode.textContent = error
                })
            }
          })
          .catch((error) => {
            console.log('error' + error)
          })
        // console.log(this.$route.query);
        // console.log(this.pregVal);
      } else {
        var code = document.getElementById('code')
        var responsecode = document.getElementById('response-code')
        if (!this.$route.query.zip_code && this.showZip) {
          if (this.zipVal === null || this.zipVal === '') {
            this.zipCode = true
          } else {
            this.zipVal = this.zipVal
              ? this.zipVal
              : document.getElementById('zip').value
            this.zipCode = false
          }
        } else {
          this.zipVal = this.$route.query.zip_code
        }
        if (!this.$route.query.first_name) {
          if (this.fName === null || this.fName === '') {
            this.nameErr = true
          } else {
            var fName = this.fName
          }
        } else {
          this.nameErr = false
          fName = this.$route.query.first_name
        }
        if (!this.$route.query.last_name) {
          if (this.lName === null || this.lName === '') {
            this.nameErr = true
          } else {
            var lName = this.lName
          }
        } else {
          lName = this.$route.query.last_name
        }
        if (!this.$route.query.street_address) {
          if (this.stAddress === null || this.stAddress === '') {
            this.addressErr = true
          } else {
            var stAdress = this.stAddress
          }
        } else {
          stAdress = this.$route.query.street_address
        }
        if (!this.$route.query.phone) {
          if (this.phn1 !== '' || this.phn2 !== '' || this.phn3 !== '') {
            var phn = '(' + this.phn1 + ') ' + this.phn2 + '-' + this.phn3
          } else {
            this.phoneErr = true
          }
        } else {
          phn = this.$route.query.phone
        }
        if (!this.$route.query.email) {
          var mail = this.email
        } else {
          mail = this.$route.query.email
        }
        var zipformData = {
          code: this.zipVal
            ? this.zipVal
            : document.getElementById('zip').value,
        }
        if (this.zipVal === null || this.zipVal === '' || isNaN(this.zipVal)) {
          this.zipCode = true
        } else {
          if (this.genVal == '') {
            this.gndrErr = true
          }
          if (this.htVal == '') {
            this.htErr = true
          }
          if (this.wtVal == '') {
            this.wtErr = true
          }
          if (this.dobVal == '') {
            this.dobErr = true
          }
          if (fName == '' || lName == '') {
            this.nameErr = true
          }
          if (stAdress == '') {
            this.addressErr = true
          }
          if (phn == '') {
            this.phoneErr = true
          }
          if (mail == '') {
            this.emailErr = true
          }
          if (!this.$route.query.dob) {
            if (this.validDob()) {
              this.dobErr = false
            } else {
              this.dobErr = true
            }
          }
          var sampleAPI = {
            address: stAdress,
            // birth_date: this.dobVal,
            contact: fName + ' ' + lName,
            // coverage_amount: this.policyVal,
            email: mail,
            household_income: parseInt(this.policyVal),
            pregnant: this.pregVal ? parseInt(this.pregVal) : 0,
            leadid_id: document.getElementById('leadid_token').value,
            coverage_type: this.termVal, // 'COBRA',
            // gender: this.genVal,
            // height: this.htVal,
            currently_insured: 0,
            current_company: 'Other',
            major_condition_aids_hiv: '0',
            major_condition_alcohol_drug_abuse: '0',
            major_condition_alzheimers_dementia: '0',
            major_condition_asthma: '0',
            major_condition_cancer: '0',
            major_condition_clinical_depression: '0',
            major_condition_diabetes: '0',
            major_condition_emphysema: '0',
            major_condition_epilepsy: '0',
            major_condition_heart_attack: '0',
            major_condition_heart_disease: '0',
            major_condition_hepatitis_liver: '0',
            major_condition_high_blood_pressure: '0',
            major_condition_high_cholesterol: '0',
            major_condition_kidney_disease: '0',
            major_condition_mental_illness: '0',
            major_condition_multiple_sclerosis: '0',
            major_condition_other: this.healthVal,
            major_condition_pulmonary_disease: '0',
            major_condition_stroke: '0',
            major_condition_ulcers: '0',
            major_condition_vascular_disease: '0',
            phone: phn,
            qualifying_life_event: 'none',
            primary: {
              name: fName + ' ' + lName,
              birth_date: this.dobVal,
              gender: this.genVal,
              height: this.feetToIncs(this.htVal),
              weight: this.wtVal,
              tobacco: parseInt(this.tobaccoVal),
            },
            tcpa: {
              call_consent: 1,
              email_consent: 1,
              sms_consent: 1,
              text:
                "I acknowledge that I'm over 18 years old, and I agree with ASPQuote's Privacy Policy and Terms of Services. I authorize ASPQuote and its partners to contact me for marketing/telemarketing purposes at the number and address provided above, including my wireless number if provided, using live operators, automated telephone dialing systems, pre-recorded messages, text messages and/or emails, even if the number I provide is on a Do Not Call registry. Message and data rates may apply. By calling the phone numbers listed on ASPQuote I agree with the Privacy Policy and Terms of Services. See our marketing partners here.",
              url: 'https://aspquote.com/questions',
            },
            // tobacco: this.tobaccoVal,
            // weight: this.wtVal,
            trusted_form_certificate_id: this.trustedID.split('/').slice(-1)[0],
            zip: this.zipVal
              ? this.zipVal
              : document.getElementById('zip').value,
          }
          var sub_1 = localStorage.getItem('sub_1')
            ? localStorage.getItem('sub_1')
            : ''
          var sub_2 = localStorage.getItem('sub_2')
            ? localStorage.getItem('sub_2')
            : ''
          var sub_3 = localStorage.getItem('sub_3')
            ? localStorage.getItem('sub_3')
            : ''
          var data = {
            api_token: 'YBZLc26JLnlS-iV_kovIl3-UH4m2l_Vo',
            placement_id: '23J26NbOyPkDpHiwVc1zVCQ8KUI92A',
            version: 18,
            // ping_id: 'bDLrzppj0RJS6e7jMmZkO50Gwax7EQ',
            // bid_ids: ['J3XxRLRGGaGW_w8up3zr_wOQeKCxXA', 'iwovcNuY2qMa2akQ5DtECjQdjAxj0A'],
            ua: navigator.userAgent,
            ip: this.ip,
            url: 'https://aspquote.com/questions',
            sub_1: sub_1 ? JSON.parse(sub_1) : '',
            sub_2: sub_2 ? JSON.parse(sub_2) : '',
            sub_3: sub_3 ? JSON.parse(sub_3) : '',
            data: sampleAPI,
            // local_hour: 1,
            date_time: this.DateNtime(),
          }
          var formData = {
            zip_code: this.zipVal
              ? this.zipVal
              : document.getElementById('zip').value,
            LeadiD: document.getElementById('leadid_token').value,
            household_income: this.policyVal,
            health_check: this.healthVal,
            coverage_type: this.termVal,
            tobacco_user: parseInt(this.tobaccoVal),
            gender: this.genVal,
            pregnancy: parseInt(this.pregVal),
            height: this.htVal,
            weight: this.wtVal,
            dob: this.dobVal,
            first_name: fName,
            last_name: lName,
            street_address: stAdress,
            phone: phn,
            email: mail,
            request: data,
            trusted_form: this.trustedID,
          }
          var finalFormData = { ...this.$route.query, ...formData }
          if (
            !this.zipCode &&
            !this.gndrErr &&
            !this.htErr &&
            !this.wtErr &&
            !this.dobErr &&
            !this.showPregErr &&
            !this.nameErr &&
            !this.phoneErr &&
            !this.addressErr &&
            !this.emailErr
          ) {
            this.axios
              .post('https://aspquote.com/backend/api/check-zip', zipformData)
              .then((response) => {
                if (response.data.error === 'true') {
                  this.zipCode = true
                } else {
                  var zipp = this.zipVal
                    ? this.zipVal
                    : document.getElementById('zip').value
                  localStorage.setItem('zip', JSON.stringify(zipp))
                  this.axios
                    .post(
                      'https://aspquote.com/backend/api/get-form',
                      finalFormData,
                    )
                    .then((response) => {
                      if (response.data.success === 'true') {
                        this.formSubmitted = true
                        this.requestID = response.data.id
                      }
                    })
                    .catch((error) => {
                      console.log('error' + error)
                    })
                }
              })
              .catch((error) => {
                this.zipCode = true
                console.log('error' + error)
              })
            delete data.data.zip_code
            var config = {
              headers: {
                'Content-type': 'Application/json',
              },
            }
            // https://cors-anywhere.herokuapp.com/
            code.textContent = JSON.stringify(data, '', 2)
            localStorage.setItem('data', JSON.stringify(data))
            this.axios
              .post(
                'https://cors.bridged.cc/https://insurance-leads.mediaalpha.com/post.json',
                data,
              )
              .then((response) => {
                responsecode.textContent = JSON.stringify(response.data, '', 2)
                var self = this
                setTimeout(function () {
                  var rspnse = {
                    id: self.requestID,
                    data: response.data,
                  }
                  self.axios
                    .post(
                      'https://aspquote.com/backend/api/save-response',
                      rspnse,
                    )
                    .then((message) => {
                      console.log(message)
                    })
                    .catch((error) => {
                      console.log(error)
                    })
                }, 5000)
              })
              .catch((error) => {
                console.log(typeof error)
                responsecode.textContent = error
              })
          }
          // zip.value ? zip.value : this.zipVal
        }
      }
    },
    feetToIncs(feets) {
      var inches = feets * 12
      return inches.toString().split('.')[0]
    },
    goToLast() {
      if (
        this.$route.query.gender == 'f' ||
        this.$route.query.gender == 'F' ||
        this.$route.query.pregnancy
      ) {
        this.showPregErr = false
        this.pregVal = this.$route.query.pregnancy
      } else {
        var pregnant = document.getElementsByClassName('pregnant')
        if (
          this.showPreg &&
          (this.pregVal === '' || this.pregVal === null || this.pregVal === '0')
        ) {
          for (let index = 0; index < pregnant.length; index++) {
            if (pregnant[index].checked) {
              this.pregVal = pregnant[index].defaultValue
            }
          }
          if (!pregnant[0].checked && !pregnant[1].checked) {
            this.showPregErr = true
          }
        }
      }
      if (this.$route.query.gender) {
        this.genVal = this.$route.query.gender
      } else {
        var gen = document.getElementsByClassName('gender')
        if (!gen[1].checked && !gen[2].checked && !gen[3].checked) {
          this.gndrErr = true
          this.thirdPart = false
        } else {
          for (let index = 0; index < gen.length; index++) {
            if (gen[index].checked) {
              this.genVal = gen[index].defaultValue
            }
          }
        }
      }
      if (this.$route.query.height) {
        this.htVal = this.$route.query.height
      } else {
        if (this.feet === null || this.feet === '') {
          this.htErr = true
          this.thirdPart = false
        } else {
          this.htVal = this.feet + '.' + (this.inch ? this.inch : '0')
        }
      }
      if (this.$route.query.weight) {
        this.wtVal = this.$route.query.weight
      } else {
        if (this.weight === null || this.weight === '') {
          this.wtErr = true
          this.thirdPart = false
        } else {
          this.wtVal = this.weight
        }
      }
      if (this.$route.query.dob) {
        this.dobVal = this.$route.query.dob
      } else {
        var mnth = this.month
        var day = this.day
        var year = this.year
        if (
          year === null ||
          year === '' ||
          day === null ||
          day === '' ||
          mnth === null ||
          mnth === ''
        ) {
          if (
            year === null ||
            year === '' ||
            day === null ||
            day === '' ||
            mnth === null ||
            mnth === ''
          ) {
            this.dobErr = true
            var errTxt = document.getElementsByClassName('dob-err')
            errTxt[0].style.display = 'block'
            errTxt[0].innerHTML = 'Please enter valid birth date.'
          }
          this.thirdPart = false
        } else if (isNaN(mnth) && isNaN(day) && isNaN(year)) {
          this.dobErr = true
          errTxt = document.getElementsByClassName('dob-err')
          errTxt[0].style.display = 'block'
          errTxt[0].innerHTML = 'Please enter valid birth date.'
          this.thirdPart = false
        } else {
          this.dobVal = year + '-' + mnth + '-' + day
        }
      }
      if (
        this.genVal !== '' &&
        this.htVal !== '' &&
        this.wtVal !== '' &&
        this.dobVal !== ''
      ) {
        if (!this.$route.query.dob) {
          if (!this.validDob()) {
            this.thirdPart = false
          } else {
            this.thirdPart = true
          }
        } else {
          this.thirdPart = true
        }
      } else {
        this.thirdPart = false
      }
    },
    goNext() {
      if (
        this.$route.query.first_name &&
        this.$route.query.last_name &&
        this.$route.query.street_address &&
        this.$route.query.email &&
        this.$route.query.phone
      ) {
        this.showOnlySubmit = true
        this.showBack = false
      }
      if (this.$route.query.gender == 'm' || this.$route.query.gender == 'M') {
        this.pregVal = 0
      } else if (
        this.$route.query.gender == 'f' ||
        this.$route.query.gender == 'F'
      ) {
        if (!this.$route.query.pregnancy) {
          this.showPreg = true
        } else {
          this.pregVal = this.$route.query.pregnancy
        }
      }
      if (!this.$route.query.household_income) {
        var policyDrp = document.getElementById('policy-amount')
        this.policyVal = policyDrp.value
      } else {
        this.policyVal = this.$route.query.household_income
      }
      if (!this.$route.query.coverage_type) {
        var trmDrp = document.getElementById('term-length')
        this.termVal = trmDrp.value
      } else {
        this.termVal = this.$route.query.coverage_type
      }
      if (this.$route.query.health_check) {
        this.healthVal = this.$route.query.health_check
      } else {
        var hlthCond = document.getElementsByClassName('hlth-cond')
        for (let index = 0; index < hlthCond.length; index++) {
          if (hlthCond[index].checked) {
            this.healthVal = hlthCond[index].defaultValue
          }
        }
      }
      if (!this.$route.query.tobacco_user) {
        var dd = document.getElementsByClassName('tobacco-usr')
        if (!dd[0].checked && !dd[1].checked) {
          this.tobaccoUsr = true
          this.firstPart = true
        } else {
          if (dd[0].checked || dd[1].checked) {
            if (dd[0].checked) {
              this.tobaccoVal = dd[0].defaultValue
            } else if (dd[1].checked) {
              this.tobaccoVal = dd[1].defaultValue
            }
          }
        }
      } else {
        this.tobaccoVal = this.$route.query.tobacco_user
      }
      if (
        this.tobaccoVal !== '' &&
        this.healthVal !== '' &&
        this.termVal !== '' &&
        this.policyVal !== ''
      ) {
        if (
          this.$route.query.dob &&
          this.$route.query.weight &&
          this.$route.query.height &&
          this.$route.query.gender
        ) {
          if (
            (this.$route.query.gender == 'f' ||
              this.$route.query.gender == 'F') &&
            !this.$route.query.pregnancy
          ) {
            this.firstPart = false
            this.showPreg = true
          } else {
            this.firstPart = false
            this.thirdPart = true
          }
        } else {
          this.firstPart = false
        }
      } else {
        this.firstPart = true
      }
    },
    goBack() {
      if (this.thirdPart) {
        if (
          this.$route.query.gender &&
          this.$route.query.height &&
          this.$route.query.weight &&
          this.$route.query.dob
        ) {
          this.thirdPart = false
          if (
            (this.$route.query.gender == 'f' ||
              this.$route.query.gender == 'F') &&
            !this.$route.query.pregnancy
          ) {
            this.firstPart = false
          } else {
            this.firstPart = true
          }
        } else {
          this.thirdPart = false
          this.firstPart = false
        }
        this.pregVal = this.$route.query.pregnancy
          ? this.$route.query.pregnancy
          : '0'
      } else {
        this.thirdPart = false
        this.firstPart = true
        this.showPreg = false
      }
    },
    checkWt(e) {
      var wt = e.target.value
      if (wt.value === null || wt.value === '' || isNaN(wt)) {
        this.wtErr = true
      } else {
        this.wtErr = false
      }
    },
  },
  mounted() {
    this.$store.commit('setheaderColor', '#1B315F')
    this.$store.commit('setappBg', '#fff')
    if (this.$route.query.utm_source) {
      localStorage.setItem(
        'sub_1',
        JSON.stringify(this.$route.query.utm_source),
      )
    } else {
      localStorage.setItem('sub_1', '')
    }
    if (this.$route.query.utm_campaign) {
      localStorage.setItem(
        'sub_2',
        JSON.stringify(this.$route.query.utm_campaign),
      )
    } else {
      localStorage.setItem('sub_2', '')
    }
    if (this.$route.query.utm_content) {
      localStorage.setItem(
        'sub_3',
        JSON.stringify(this.$route.query.utm_content),
      )
    } else {
      localStorage.setItem('sub_3', '')
    }
    document.body.style.backgroundColor = this.$store.state.appBg
    var uniqcode = document.getElementById('leadid_token')
    var self = this
    setTimeout(function () {
      if (uniqcode.value !== '') {
        self.enableSubmit = true
      }
    }, 4000)
    var self = this
    this.axios
      .get('https://www.cloudflare.com/cdn-cgi/trace')
      .then((response) => {
        var agnt = response.data.split('=')[3]
        agnt = agnt.substring(0, agnt.length - 2)
        self.ip = agnt.trim()
      })
      .catch((error) => {
        console.log('error' + error)
      })
    if (this.$route.query.zip_code) {
      this.zipVal = this.$route.query.zip_code
      var zip = this.$route.query.zip_code
      var formData = {
        code: zip,
      }
      if ((zip === null || zip === '') && isNaN(zip)) {
        this.zipCode = true
      } else {
        this.zipCode = false
        this.axios
          .post('https://aspquote.com/backend/api/check-zip', formData)
          .then((response) => {
            if (response.data.error === 'true') {
              this.zipCode = true
              this.showZip = true
            } else {
              this.showST = true
              this.stName =
                response.data.state_info.City +
                ', ' +
                response.data.state_info.State
            }
          })
          .catch((error) => {
            this.showZip = true
            console.log('error' + error)
          })
      }
    }
    if (this.$route.query.household_income) {
      this.policyVal = this.$route.query.household_income
    } else {
      this.policyVal = document.getElementById('policy-amount').value
    }
    if (this.$route.query.coverage_type) {
      this.termVal = this.$route.query.coverage_type
    } else {
      this.termVal = document.getElementById('term-length').value
    }
    if (this.$route.query.health_check) {
      this.healthVal = this.$route.query.health_check
    }
    if (this.$route.query.tobacco_user) {
      this.tobaccoVal = this.$route.query.tobacco_user
    }
    if (this.$route.query.gender) {
      this.genVal = this.$route.query.gender
    }
    if (this.$route.query.weight) {
      this.wtVal = this.$route.query.weight
    }
    if (this.$route.query.height) {
      this.htVal = this.$route.query.height
    }
    if (this.$route.query.dob) {
      this.dobVal = this.$route.query.dob
    }
    if (this.$route.query.pregnancy) {
      this.pregVal = this.$route.query.pregnancy
    }
    if (
      !this.$route.query.household_income ||
      !this.$route.query.coverage_type ||
      !this.$route.query.health_check ||
      !this.$route.query.tobacco_user
    ) {
      if (
        this.$route.query.gender &&
        this.$route.query.height &&
        this.$route.query.weight &&
        this.$route.query.dob &&
        this.$route.query.first_name &&
        this.$route.query.last_name &&
        this.$route.query.street_address &&
        this.$route.query.phone &&
        this.$route.query.zip_code &&
        this.$route.query.email
      ) {
        if (
          (this.$route.query.gender == 'f' ||
            this.$route.query.gender == 'F') &&
          !this.$route.query.pregnancy
        ) {
          this.firstPart = true
        } else {
          this.showOnlySubmit = true
        }
      }
      this.firstPart = true
    }
    if (
      !this.$route.query.gender ||
      !this.$route.query.height ||
      !this.$route.query.weight ||
      !this.$route.query.dob
    ) {
      this.firstPart = false
      this.showPreg = false
      if (
        this.$route.query.first_name &&
        this.$route.query.last_name &&
        this.$route.query.phone &&
        this.$route.query.street_address &&
        this.$route.query.email
      ) {
        this.showOnlySubmit = true
      }
    }
    if (
      this.$route.query.household_income &&
      this.$route.query.coverage_type &&
      this.$route.query.health_check &&
      this.$route.query.tobacco_user
    ) {
      this.firstPart = false
    }
    if (
      (this.$route.query.gender == 'f' || this.$route.query.gender == 'F') &&
      !this.$route.query.pregnancy
    ) {
      this.showPreg = true
    }
    if (
      this.$route.query.household_income &&
      this.$route.query.coverage_type &&
      this.$route.query.health_check &&
      this.$route.query.tobacco_user &&
      this.$route.query.gender &&
      this.$route.query.height &&
      this.$route.query.weight &&
      this.$route.query.dob
    ) {
      this.thirdPart = true
    }
    if (
      !this.$route.query.household_income ||
      !this.$route.query.coverage_type ||
      !this.$route.query.health_check ||
      !this.$route.query.tobacco_user ||
      !this.$route.query.gender ||
      !this.$route.query.height ||
      !this.$route.query.weight ||
      !this.$route.query.dob ||
      !this.$route.query.first_name ||
      !this.$route.query.last_name ||
      !this.$route.query.street_address ||
      !this.$route.query.phone ||
      !this.$route.query.zip_code ||
      !this.$route.query.email
    ) {
      if (
        this.$route.query.pregnancy &&
        (this.$route.query.gender == 'f' || this.$route.query.gender == 'F') &&
        this.$route.query.household_income &&
        this.$route.query.coverage_type &&
        this.$route.query.health_check &&
        this.$route.query.tobacco_user &&
        this.$route.query.gender &&
        this.$route.query.height &&
        this.$route.query.weight &&
        this.$route.query.dob &&
        this.$route.query.first_name &&
        this.$route.query.last_name &&
        this.$route.query.street_address &&
        this.$route.query.phone &&
        this.$route.query.zip_code &&
        this.$route.query.email
      ) {
        this.pregVal = this.$route.query.pregnancy
        setTimeout(function () {
          self.$route.query.LeadiD = document.getElementById(
            'leadid_token',
          ).value
          self.trustedID =
            document.getElementById('xxTrustedFormToken') !== null
              ? document.getElementById('xxTrustedFormToken').value
              : document.getElementById('xxTrustedFormToken_0').value
          self.$route.query.trusted_form = self.trustedID
          self.showPreg = false
          self.UrlForm = true
          self.axios
            .post(
              'https://aspquote.com/backend/api/get-form',
              self.$route.query,
            )
            .then((response) => {
              if (response.data.success === 'true') {
                self.UrlForm = true
                self.formSubmitted = true
                self.requestID = response.data.id
                var code = document.getElementById('code')
                var responsecode = document.getElementById('response-code')
                var sampleAPI = {
                  address: self.$route.query.street_address,
                  // birth_date: this.dobVal,
                  contact:
                    self.$route.query.first_name +
                    ' ' +
                    self.$route.query.last_name,
                  // coverage_amount: this.policyVal,
                  email: self.$route.query.email,
                  household_income: parseInt(
                    self.$route.query.household_income,
                  ),
                  pregnant: parseInt(self.pregVal),
                  leadid_id: document.getElementById('leadid_token').value,
                  coverage_type: self.$route.query.coverage_type, // 'COBRA',
                  // gender: this.genVal,
                  // height: this.htVal,
                  currently_insured: 0,
                  current_company: 'Other',
                  major_condition_aids_hiv: '0',
                  major_condition_alcohol_drug_abuse: '0',
                  major_condition_alzheimers_dementia: '0',
                  major_condition_asthma: '0',
                  major_condition_cancer: '0',
                  major_condition_clinical_depression: '0',
                  major_condition_diabetes: '0',
                  major_condition_emphysema: '0',
                  major_condition_epilepsy: '0',
                  major_condition_heart_attack: '0',
                  major_condition_heart_disease: '0',
                  major_condition_hepatitis_liver: '0',
                  major_condition_high_blood_pressure: '0',
                  major_condition_high_cholesterol: '0',
                  major_condition_kidney_disease: '0',
                  major_condition_mental_illness: '0',
                  major_condition_multiple_sclerosis: '0',
                  major_condition_other: self.$route.query.health_check,
                  major_condition_pulmonary_disease: '0',
                  major_condition_stroke: '0',
                  major_condition_ulcers: '0',
                  major_condition_vascular_disease: '0',
                  phone: self.$route.query.phone,
                  qualifying_life_event: 'none',
                  primary: {
                    name:
                      self.$route.query.first_name +
                      ' ' +
                      self.$route.query.last_name,
                    birth_date: self.$route.query.dob,
                    gender: self.$route.query.gender,
                    height: self.$route.query.height,
                    weight: self.$route.query.weight,
                    tobacco: self.$route.query.tobacco_user,
                  },
                  tcpa: {
                    call_consent: 1,
                    email_consent: 1,
                    sms_consent: 1,
                    text:
                      "I acknowledge that I'm over 18 years old, and I agree with ASPQuote's Privacy Policy and Terms of Services. I authorize ASPQuote and its partners to contact me for marketing/telemarketing purposes at the number and address provided above, including my wireless number if provided, using live operators, automated telephone dialing systems, pre-recorded messages, text messages and/or emails, even if the number I provide is on a Do Not Call registry. Message and data rates may apply. By calling the phone numbers listed on ASPQuote I agree with the Privacy Policy and Terms of Services. See our marketing partners here.",
                    url: 'https://aspquote.com/questions',
                  },
                  // tobacco: this.tobaccoVal,
                  // weight: this.wtVal,
                  trusted_form_certificate_id: this.trustedID
                    .split('/')
                    .slice(-1)[0],
                  zip: self.$route.query.zip_code,
                }
                var sub_1 = localStorage.getItem('sub_1')
                  ? localStorage.getItem('sub_1')
                  : ''
                var sub_2 = localStorage.getItem('sub_2')
                  ? localStorage.getItem('sub_2')
                  : ''
                var sub_3 = localStorage.getItem('sub_3')
                  ? localStorage.getItem('sub_3')
                  : ''
                var data = {
                  api_token: 'YBZLc26JLnlS-iV_kovIl3-UH4m2l_Vo',
                  placement_id: '23J26NbOyPkDpHiwVc1zVCQ8KUI92A',
                  version: 18,
                  // ping_id: 'bDLrzppj0RJS6e7jMmZkO50Gwax7EQ',
                  // bid_ids: ['J3XxRLRGGaGW_w8up3zr_wOQeKCxXA', 'iwovcNuY2qMa2akQ5DtECjQdjAxj0A'],
                  ua: navigator.userAgent,
                  ip: self.ip,
                  url: 'https://aspquote.com/questions',
                  sub_1: sub_1 ? JSON.parse(sub_1) : '',
                  sub_2: sub_2 ? JSON.parse(sub_2) : '',
                  sub_3: sub_3 ? JSON.parse(sub_3) : '',
                  data: sampleAPI,
                  // local_hour: 1,
                  date_time: self.DateNtime(),
                }
                delete data.data.zip_code
                var config = {
                  headers: {
                    'Content-type': 'Application/json',
                  },
                }
                // https://cors-anywhere.herokuapp.com/
                code.textContent = JSON.stringify(data, '', 2)
                localStorage.setItem('data', JSON.stringify(data))
                self.axios
                  .post(
                    'https://cors.bridged.cc/https://insurance-leads.mediaalpha.com/post.json',
                    data,
                  )
                  .then((response) => {
                    responsecode.textContent = JSON.stringify(
                      response.data,
                      '',
                      2,
                    )
                    var self = this
                    setTimeout(function () {
                      var rspnse = {
                        id: self.requestID,
                        data: response.data,
                      }
                      self.axios
                        .post(
                          'https://aspquote.com/backend/api/save-response',
                          rspnse,
                        )
                        .then((message) => {
                          console.log(message)
                        })
                        .catch((error) => {
                          console.log(error)
                        })
                    }, 5000)
                  })
                  .catch((error) => {
                    console.log('error' + error)
                    responsecode.textContent = error
                  })
              }
            })
            .catch((error) => {
              console.log('error' + error)
            })
        }, 4000)
      } else {
        if (
          this.$route.query.household_income &&
          this.$route.query.health_check &&
          this.$route.query.coverage_type &&
          this.$route.query.tobacco_user
        ) {
          this.showBack = false
        }
        if (
          !this.$route.query.household_income ||
          !this.$route.query.health_check ||
          !this.$route.query.coverage_type ||
          !this.$route.query.tobacco_user
        ) {
          this.firstPart = true
        } else if (
          this.$route.query.gender &&
          this.$route.query.height &&
          this.$route.query.weight &&
          this.$route.query.dob
        ) {
          if (
            this.$route.query.first_name &&
            this.$route.query.last_name &&
            this.$route.query.street_address &&
            this.$route.query.email &&
            this.$route.query.phone
          ) {
            this.showOnlySubmit = true
          }
          if (
            this.showPreg &&
            (this.$route.query.gender == 'f' || this.$route.query.gender == 'F')
          ) {
            this.thirdPart = false
            this.firstPart = false
          } else {
            this.showBack = false
            this.firstPart = false
            this.thirdPart = true
          }
        } else {
          this.thirdPart = false
          this.firstPart = false
          this.showPreg = true
          this.checkOnlyPreg = false
        }
      }
    } else if (
      this.$route.query.household_income &&
      this.$route.query.coverage_type &&
      this.$route.query.health_check &&
      this.$route.query.tobacco_user &&
      this.$route.query.gender &&
      this.$route.query.height &&
      this.$route.query.weight &&
      this.$route.query.dob &&
      this.$route.query.first_name &&
      this.$route.query.last_name &&
      this.$route.query.street_address &&
      this.$route.query.phone &&
      this.$route.query.zip_code &&
      this.$route.query.email
    ) {
      if (this.$route.query.gender == 'f' || this.$route.query.gender == 'F') {
        if (this.$route.query.pregnancy) {
          this.pregVal = this.$route.query.pregnancy
          setTimeout(function () {
            self.$route.query.LeadiD = document.getElementById(
              'leadid_token',
            ).value
            self.trustedID =
              document.getElementById('xxTrustedFormToken') !== null
                ? document.getElementById('xxTrustedFormToken').value
                : document.getElementById('xxTrustedFormToken_0').value
            self.$route.query.trusted_form = self.trustedID
            self.showPreg = false
            self.UrlForm = true
            self.axios
              .post(
                'https://aspquote.com/backend/api/get-form',
                self.$route.query,
              )
              .then((response) => {
                if (response.data.success === 'true') {
                  self.UrlForm = true
                  self.formSubmitted = true
                  self.requestID = response.data.id
                  var code = document.getElementById('code')
                  var responsecode = document.getElementById('response-code')
                  var sampleAPI = {
                    address: self.$route.query.street_address,
                    // birth_date: this.dobVal,
                    contact:
                      self.$route.query.first_name +
                      ' ' +
                      self.$route.query.last_name,
                    // coverage_amount: this.policyVal,
                    email: self.$route.query.email,
                    household_income: parseInt(
                      self.$route.query.household_income,
                    ),
                    pregnant: parseInt(self.pregVal),
                    leadid_id: document.getElementById('leadid_token').value,
                    coverage_type: self.$route.query.coverage_type, // 'COBRA',
                    // gender: this.genVal,
                    // height: this.htVal,
                    currently_insured: 0,
                    current_company: 'Other',
                    major_condition_aids_hiv: '0',
                    major_condition_alcohol_drug_abuse: '0',
                    major_condition_alzheimers_dementia: '0',
                    major_condition_asthma: '0',
                    major_condition_cancer: '0',
                    major_condition_clinical_depression: '0',
                    major_condition_diabetes: '0',
                    major_condition_emphysema: '0',
                    major_condition_epilepsy: '0',
                    major_condition_heart_attack: '0',
                    major_condition_heart_disease: '0',
                    major_condition_hepatitis_liver: '0',
                    major_condition_high_blood_pressure: '0',
                    major_condition_high_cholesterol: '0',
                    major_condition_kidney_disease: '0',
                    major_condition_mental_illness: '0',
                    major_condition_multiple_sclerosis: '0',
                    major_condition_other: self.$route.query.health_check,
                    major_condition_pulmonary_disease: '0',
                    major_condition_stroke: '0',
                    major_condition_ulcers: '0',
                    major_condition_vascular_disease: '0',
                    phone: self.$route.query.phone,
                    qualifying_life_event: 'none',
                    primary: {
                      name:
                        self.$route.query.first_name +
                        ' ' +
                        self.$route.query.last_name,
                      birth_date: self.$route.query.dob,
                      gender: self.$route.query.gender,
                      height: self.$route.query.height,
                      weight: self.$route.query.weight,
                      tobacco: self.$route.query.tobacco_user,
                    },
                    tcpa: {
                      call_consent: 1,
                      email_consent: 1,
                      sms_consent: 1,
                      text:
                        "I acknowledge that I'm over 18 years old, and I agree with ASPQuote's Privacy Policy and Terms of Services. I authorize ASPQuote and its partners to contact me for marketing/telemarketing purposes at the number and address provided above, including my wireless number if provided, using live operators, automated telephone dialing systems, pre-recorded messages, text messages and/or emails, even if the number I provide is on a Do Not Call registry. Message and data rates may apply. By calling the phone numbers listed on ASPQuote I agree with the Privacy Policy and Terms of Services. See our marketing partners here.",
                      url: 'https://aspquote.com/questions',
                    },
                    // tobacco: this.tobaccoVal,
                    // weight: this.wtVal,
                    trusted_form_certificate_id: this.trustedID
                      .split('/')
                      .slice(-1)[0],
                    zip: self.$route.query.zip_code,
                  }
                  var sub_1 = localStorage.getItem('sub_1')
                    ? localStorage.getItem('sub_1')
                    : ''
                  var sub_2 = localStorage.getItem('sub_2')
                    ? localStorage.getItem('sub_2')
                    : ''
                  var sub_3 = localStorage.getItem('sub_3')
                    ? localStorage.getItem('sub_3')
                    : ''
                  var data = {
                    api_token: 'YBZLc26JLnlS-iV_kovIl3-UH4m2l_Vo',
                    placement_id: '23J26NbOyPkDpHiwVc1zVCQ8KUI92A',
                    version: 18,
                    // ping_id: 'bDLrzppj0RJS6e7jMmZkO50Gwax7EQ',
                    // bid_ids: ['J3XxRLRGGaGW_w8up3zr_wOQeKCxXA', 'iwovcNuY2qMa2akQ5DtECjQdjAxj0A'],
                    ua: navigator.userAgent,
                    ip: self.ip,
                    url: 'https://aspquote.com/questions',
                    sub_1: sub_1 ? JSON.parse(sub_1) : '',
                    sub_2: sub_2 ? JSON.parse(sub_2) : '',
                    sub_3: sub_3 ? JSON.parse(sub_3) : '',
                    data: sampleAPI,
                    // local_hour: 1,
                    date_time: self.DateNtime(),
                  }
                  delete data.data.zip_code
                  var config = {
                    headers: {
                      'Content-type': 'Application/json',
                    },
                  }
                  // https://cors-anywhere.herokuapp.com/
                  code.textContent = JSON.stringify(data, '', 2)
                  localStorage.setItem('data', JSON.stringify(data))
                  self.axios
                    .post(
                      'https://cors.bridged.cc/https://insurance-leads.mediaalpha.com/post.json',
                      data,
                    )
                    .then((response) => {
                      responsecode.textContent = JSON.stringify(
                        response.data,
                        '',
                        2,
                      )
                      var self = this
                      setTimeout(function () {
                        var rspnse = {
                          id: self.requestID,
                          data: response.data,
                        }
                        self.axios
                          .post(
                            'https://aspquote.com/backend/api/save-response',
                            rspnse,
                          )
                          .then((message) => {
                            console.log(message)
                          })
                          .catch((error) => {
                            console.log(error)
                          })
                      }, 5000)
                    })
                    .catch((error) => {
                      console.log('error' + error)
                      responsecode.textContent = error
                    })
                }
              })
              .catch((error) => {
                console.log('error' + error)
              })
          }, 4000)
        } else {
          if (this.showPreg && this.pregVal !== '') {
            this.firstPart = false
          } else {
            this.thirdPart = false
            this.firstPart = false
            this.showPreg = true
            this.checkOnlyPreg = true
          }
        }
      } else {
        this.UrlForm = true
        this.pregVal = 0
        setTimeout(function () {
          self.$route.query.LeadiD = document.getElementById(
            'leadid_token',
          ).value
          self.trustedID =
            document.getElementById('xxTrustedFormToken') !== null
              ? document.getElementById('xxTrustedFormToken').value
              : document.getElementById('xxTrustedFormToken_0').value
          self.$route.query.trusted_form = self.trustedID
          self.axios
            .post(
              'https://aspquote.com/backend/api/get-form',
              self.$route.query,
            )
            .then((response) => {
              if (response.data.success === 'true') {
                self.UrlForm = true
                self.formSubmitted = true
                self.requestID = response.data.id
                var code = document.getElementById('code')
                var responsecode = document.getElementById('response-code')
                var sampleAPI = {
                  address: self.$route.query.street_address,
                  // birth_date: this.dobVal,
                  contact:
                    self.$route.query.first_name +
                    ' ' +
                    self.$route.query.last_name,
                  // coverage_amount: this.policyVal,
                  email: self.$route.query.email,
                  household_income: parseInt(
                    self.$route.query.household_income,
                  ),
                  pregnant: parseInt(self.pregVal),
                  leadid_id: document.getElementById('leadid_token').value,
                  coverage_type: self.$route.query.coverage_type, // 'COBRA',
                  // gender: this.genVal,
                  // height: this.htVal,
                  currently_insured: 0,
                  current_company: 'Other',
                  major_condition_aids_hiv: '0',
                  major_condition_alcohol_drug_abuse: '0',
                  major_condition_alzheimers_dementia: '0',
                  major_condition_asthma: '0',
                  major_condition_cancer: '0',
                  major_condition_clinical_depression: '0',
                  major_condition_diabetes: '0',
                  major_condition_emphysema: '0',
                  major_condition_epilepsy: '0',
                  major_condition_heart_attack: '0',
                  major_condition_heart_disease: '0',
                  major_condition_hepatitis_liver: '0',
                  major_condition_high_blood_pressure: '0',
                  major_condition_high_cholesterol: '0',
                  major_condition_kidney_disease: '0',
                  major_condition_mental_illness: '0',
                  major_condition_multiple_sclerosis: '0',
                  major_condition_other: self.$route.query.health_check,
                  major_condition_pulmonary_disease: '0',
                  major_condition_stroke: '0',
                  major_condition_ulcers: '0',
                  major_condition_vascular_disease: '0',
                  phone: self.$route.query.phone,
                  qualifying_life_event: 'none',
                  primary: {
                    name:
                      self.$route.query.first_name +
                      ' ' +
                      self.$route.query.last_name,
                    birth_date: self.$route.query.dob,
                    gender: self.$route.query.gender,
                    height: self.$route.query.height,
                    weight: self.$route.query.weight,
                    tobacco: self.$route.query.tobacco_user,
                  },
                  tcpa: {
                    call_consent: 1,
                    email_consent: 1,
                    sms_consent: 1,
                    text:
                      "I acknowledge that I'm over 18 years old, and I agree with ASPQuote's Privacy Policy and Terms of Services. I authorize ASPQuote and its partners to contact me for marketing/telemarketing purposes at the number and address provided above, including my wireless number if provided, using live operators, automated telephone dialing systems, pre-recorded messages, text messages and/or emails, even if the number I provide is on a Do Not Call registry. Message and data rates may apply. By calling the phone numbers listed on ASPQuote I agree with the Privacy Policy and Terms of Services. See our marketing partners here.",
                    url: 'https://aspquote.com/questions',
                  },
                  // tobacco: this.tobaccoVal,
                  // weight: this.wtVal,
                  trusted_form_certificate_id: this.trustedID
                    .split('/')
                    .slice(-1)[0],
                  zip: self.$route.query.zip_code,
                }
                var sub_1 = localStorage.getItem('sub_1')
                  ? localStorage.getItem('sub_1')
                  : ''
                var sub_2 = localStorage.getItem('sub_2')
                  ? localStorage.getItem('sub_2')
                  : ''
                var sub_3 = localStorage.getItem('sub_3')
                  ? localStorage.getItem('sub_3')
                  : ''
                var data = {
                  api_token: 'YBZLc26JLnlS-iV_kovIl3-UH4m2l_Vo',
                  placement_id: '23J26NbOyPkDpHiwVc1zVCQ8KUI92A',
                  version: 18,
                  // ping_id: 'bDLrzppj0RJS6e7jMmZkO50Gwax7EQ',
                  // bid_ids: ['J3XxRLRGGaGW_w8up3zr_wOQeKCxXA', 'iwovcNuY2qMa2akQ5DtECjQdjAxj0A'],
                  ua: navigator.userAgent,
                  ip: self.ip,
                  url: 'https://aspquote.com/questions',
                  sub_1: sub_1 ? JSON.parse(sub_1) : '',
                  sub_2: sub_2 ? JSON.parse(sub_2) : '',
                  sub_3: sub_3 ? JSON.parse(sub_3) : '',
                  data: sampleAPI,
                  // local_hour: 1,
                  date_time: self.DateNtime(),
                }
                delete data.data.zip_code
                code.textContent = JSON.stringify(data, '', 2)
                localStorage.setItem('data', JSON.stringify(data))
                self.axios
                  .post(
                    'https://cors.bridged.cc/https://insurance-leads.mediaalpha.com/post.json',
                    data,
                  )
                  .then((response) => {
                    responsecode.textContent = JSON.stringify(
                      response.data,
                      '',
                      2,
                    )
                    var self = this
                    setTimeout(function () {
                      var rspnse = {
                        id: self.requestID,
                        data: response.data,
                      }
                      self.axios
                        .post(
                          'https://aspquote.com/backend/api/save-response',
                          rspnse,
                        )
                        .then((message) => {
                          console.log(message)
                        })
                        .catch((error) => {
                          console.log(error)
                        })
                    }, 5000)
                  })
                  .catch((error) => {
                    console.log('error' + error)
                    responsecode.textContent = error
                  })
              }
            })
            .catch((error) => {
              console.log('error' + error)
            })
        }, 4000)
      }
    }
  },
}
</script>

<style>
#submit-form:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.mb-5rem {
  margin-bottom: 5rem;
}
@-webkit-keyframes jumper {
  0% {
    opacity: 0;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  5% {
    opacity: 1;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
  }

  100% {
    -webkit-transform: scale(1.8);
    transform: scale(1.8);
    opacity: 0;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  }
}
@keyframes jumper {
  0% {
    opacity: 0;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  5% {
    opacity: 1;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
  }

  100% {
    -webkit-transform: scale(1.8);
    transform: scale(1.8);
    opacity: 0;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  }
}
.call-btn {
  height: 50px;
  width: 50px;
}
.call-btn.fixed-bottom {
  left: unset;
  right: 5px;
  bottom: 10px;
}
.cross {
  cursor: pointer;
}
.call-btn svg {
  background: #28a745;
  color: #fff;
  z-index: 999;
  padding: 0.8em 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  margin: auto;
}
.call-btn:before {
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: block;
  background: #5eb855;
  border-radius: 50%;
  animation: jumper 1.8s ease-out 0s infinite;
  -webkit-animation: jumper 1.8s ease-out 0s infinite;
  height: 50px;
  width: 50px;
  position: absolute;
}
.fixed-bottom.container {
  padding: 10px 0px;
  border-top: 2px dashed #5eb855;
  background-color: white;
  display: flex;
}
.fixed-bottom.container a {
  color: #000;
  text-decoration: none;
}
.fixed-bottom svg {
  align-self: center;
}
.fixed-bottom b {
  width: 70%;
  font-size: 14px;
}
span.number {
  font-weight: bolder;
  color: white;
  position: absolute;
  top: 25px;
  line-height: 1;
  right: 42px;
  font-size: 22px;
}
.img-rounded {
  height: 100px;
  width: 100px;
  position: absolute;
  border-radius: 50%;
  border: solid 10px #fff;
  left: 42%;
  top: 0px;
  background-image: url('../assets/images/health-icon.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;
}
.main-frame {
  width: 60%;
  margin: auto;
  position: relative;
  background-color: white;
  box-shadow: 0 3px 9px rgb(0 0 0 / 10%);
  border-radius: 6.8px;
  padding: 80px 20px 25px 20px;
  background-image: url('../assets/images/form-header-bg.png');
  background-size: auto 50px;
  background-position: center top 25px;
  background-repeat: no-repeat;
}
.site-title a.router-link-active,
.site-title a.router-link-active:hover {
  font-weight: 900;
}
.width-50 {
  width: 50%;
}
.width-80 {
  width: 80%;
}
.width-95 {
  width: 95%;
}
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
.formDisclaimer {
  display: flex;
}
.formDisclaimer label {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
  margin-left: 10px;
}
.zip_code {
  width: 210px;
  border: 1px solid #b4c4d1;
  color: #666;
  font-size: 20px;
  border-radius: 0;
  height: 45px;
  box-shadow: none;
  font-family: inherit;
}
.tobacco-err,
.zip-code,
.gen-err,
.ht-err,
.wt-err,
.dob-err,
.nameErr,
.streetErr,
.phoneErr,
.mailErr {
  color: #c00;
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 13px;
  display: block;
}
.goBack {
  cursor: pointer;
}
.formButtonGrid--fullWidthFor3 .formButtonGrid__label {
  width: 33%;
}
#zip {
  border-color: #979797;
  width: 100%;
}
ul.conditions li {
  width: 45%;
  margin-right: 4%;
  color: #041d4f;
  float: left;
  list-style: none;
  font-size: 11px;
}
ul.conditions {
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  background: #cfd0d2;
  overflow: auto;
}
ul.conditions {
  width: 100%;
  background: transparent;
  padding-left: 20px;
  line-height: 1.6;
}
.formButtonGrid__label--right .formButtonGrid__text {
  border-right: 1px solid #979797;
}
.formButtonGrid__input:checked ~ .formButtonGrid__text {
  /* background: #fd8814; */
  box-shadow: none;
  font-weight: 400;
  color: #333;
}
.formButtonGrid__input:checked ~ .indication::after {
  height: 15px;
  width: 15px;
  background-color: #1fa4cf;
  border-radius: 50%;
  position: absolute;
  content: '';
  top: 2px;
  display: block;
  left: 2px;
}
.formButtonGrid__input:checked ~ .indication {
  height: 21px;
  width: 21px;
  display: block;
  position: absolute;
  top: 15px;
  left: 15px;
  border: solid 1px #a9b3c6;
}
.indication {
  border: solid 1px #a9b3c6;
  height: 21px;
  width: 21px;
  display: block;
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 50%;
}
.gender .formButtonGrid__input:checked ~ .indication::after {
  height: 10px;
  width: 10px;
  background-color: #1fa4cf;
  border-radius: 50%;
  position: absolute;
  content: '';
  top: 1px;
  display: block;
  left: 1px;
}
.gender .indication,
.gender .formButtonGrid__input:checked ~ .indication {
  border: solid 1px #a9b3c6;
  height: 14px;
  width: 14px;
  display: block;
  position: absolute;
  top: 18px;
  left: 3px;
  border-radius: 50%;
}
.formButtonGrid__input:checked ~ .formButtonGrid__text {
  /* background: #db6923; */
  /* border-color: #db6923 #db6923 #db6923 #979797; */
  /* background: linear-gradient(180deg,#db6923,#ea8f47); */
}
.formButtonGrid__input {
  position: absolute;
  opacity: 0;
  top: 10px;
  left: 10px;
}
input[type='checkbox'],
input[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}
.formButtonGrid__text {
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  height: 40px;
  display: flex;
  outline: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-right: none;
  align-items: center;
  justify-content: center;
}
.formButtonGrid__text {
  height: 50px;
  border-color: #979797;
  color: #353535;
}
.main-form {
  font-size: 15px;
  color: #1a2d5d;
}
.formButtonGrid__label {
  display: inline-block;
  width: 49%;
  float: left;
  width: 50%;
  margin-bottom: 0;
  position: relative;
}
.formdiv select {
  font-size: 16px;
  height: 50px;
  border: 1px solid #979797;
  background: #fff;
  color: #555;
  width: 100%;
  border-radius: 0;
  background-image: url('../assets/images/dropdown.png');
  background-repeat: no-repeat;
  background-position: 97% center;
  padding: 2px 10px 0px;
  -webkit-appearance: none;
  -moz-appearance: window;
}
.formdiv {
  font-size: 15px;
  color: #1a2d5d;
}
.question-label {
  font-size: 18px;
  text-transform: none;
  color: #1fa4cf;
  margin-bottom: 8px;
}
.step-title,
.step-subtitle {
  color: #212529;
}
.form-subtitle {
  font-size: 16px;
  margin-bottom: 30px;
  color: #333;
}
.form-title {
  font-weight: 700;
  font-size: 24px;
  color: #192d56;
  margin: 25px 0 20px;
  text-transform: uppercase;
}
.step-subtitle,
.step-title {
  line-height: 18px;
}
.corner span {
  right: -39px;
  border-top: 29px solid transparent;
  border-bottom: 29px solid transparent;
  border-left: 29px solid rgb(27, 49, 95);
  width: 0px;
  height: 0px;
  top: -46px;
  position: absolute;
}
div.corner {
  position: relative;
}
.step {
  height: 100%;
  padding: 10px;
}
.step-subtitle.active {
  color: white;
}
.step-title.active {
  color: rgb(255, 255, 255);
}
.step-title {
  font-weight: 700;
  font-size: 16px;
}
.steps-bar {
  height: 58px;
  display: flex;
  background-color: #f4f5f7;
}
.stepPercent__number {
  text-transform: uppercase;
  color: #567f06;
  float: left;
}
.step-2 {
  height: 100%;
  top: 0px;
  width: 33%;
}
.step-3 {
  height: 100%;
  top: 0px;
  width: 34% !important;
}
.mainForm__button {
  display: block;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  width: 100%;
  text-align: center;
  padding: 7px;
  border: none;
  height: 45px;
  border-radius: 2px;
  cursor: pointer;
  background: #fd8814;
  box-shadow: none;
  font-weight: 400;
}
.step-1,
.step-2.active,
.step-3.active {
  height: 100%;
  top: 0px;
  background: rgb(27, 49, 95);
  width: 33%;
}
.percentBar {
  float: right;
  width: 60%;
}
.show-in-mob,
.hide {
  display: none !important;
}
.percentBar__bg {
  width: calc(100% - 40px);
  height: 18px;
  background: #ccc;
  background: linear-gradient(180deg, #ccc, #eee);
  border-radius: 10px;
  position: relative;
  float: left;
}
.percentBar__topBar {
  /* width: 30%; */
  background: #645ae9;
  background: linear-gradient(180deg, #645ae9, #4e47b4);
  border-radius: 10px;
  height: 100%;
  position: absolute;
  top: 0;
}
@media screen and (max-width: 991px) {
  .img-rounded {
    left: 37.5%;
  }
}
@media screen and (min-width: 767px) {
  .mainForm__input,
  .mainForm__select {
    font-size: 16px;
    height: 50px;
    border: 1px solid #979797;
    background: #fff;
    color: #555;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    padding: 15px;
  }
  .mainForm__button {
    font-size: 18px;
    height: 50px;
    background: #db6923;
    background: linear-gradient(180deg, #db6923, #ea8f47);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    font-weight: 700;
  }
  ul.conditions li {
    color: #555;
    list-style: disc;
    font-size: 14px;
  }
  .d-mobiles {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .main-frame {
    width: 85%;
  }
  .img-rounded {
    left: 33%;
  }
  .resultsHeader {
    display: block;
  }
  .steps-bar,
  .hide-in-mob {
    display: none !important;
  }
  .main-form label {
    text-transform: uppercase;
  }
  .formdiv select {
    box-shadow: none !important;
    text-shadow: 0 0 0 #fff !important;
    overflow: hidden;
    border-radius: 0;
    background: #f5f7f7;
    background-image: url('../assets/images/dropdown.png');
    background-repeat: no-repeat;
    background-position: 97% center;
    border: 1px solid #ccc;
    margin: 0 10px 0 0 !important;
    padding-top: 2px;
    -webkit-appearance: none;
  }
  .d-mobiles,
  .show-in-mob {
    display: block !important;
  }
  .show-in-mob {
    display: inline;
  }
  .conditions-list {
    background-color: #cfd0d2;
  }
  .mainForm__input,
  .mainForm__select {
    height: 40px;
    border: 1px solid #979797;
    width: 100%;
    font-size: 16px;
    margin: 0 auto;
    display: block;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    background: transparent;
  }
  .mainForm__input {
    background: #f9f9f9;
    border-radius: 3px;
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid #979797;
  }
}
@media screen and (max-width: 500px) {
  .main-frame {
    width: 100%;
  }
  .img-rounded {
    left: 39%;
  }
  .gender.formButtonGrid--fullWidthFor3 .formButtonGrid__label {
    width: 100%;
  }
  .gender .formButtonGrid__text {
    border-right: 1px solid #ccc;
  }
}
@media screen and (max-width: 350px) {
  .img-rounded {
    left: 34%;
  }
}
@media screen and (max-width: 300px) {
  .img-rounded {
    left: 30%;
  }
}
.mainForm__title {
  font-size: 15px;
  font-weight: 400;
  color: #002d72;
  margin-top: 0;
  margin-bottom: 5px;
  display: inline-block;
}
.partnerLogo__title {
  margin-top: 10px;
  display: block;
}
.mainForm__slideTitle {
  color: #1a2d5d;
  font-size: 21px;
  margin: 15px 0 14px;
  text-align: center;
}
.mainForm__buttonArrow {
  position: absolute;
  right: 23px;
  top: 12px;
}
svg:not(:root) {
  overflow: hidden;
}
.mainForm__buttonArrow {
  fill: #333;
}
.icon-caret-left {
  width: 13px;
  height: 15px;
}
input.error,
select.error {
  border: 1px solid #c00;
  border-color: #c00 !important;
}
.iframe {
  height: 1500px;
}
.iframe iframe {
  width: 100%;
  height: 100%;
}
.top-26px {
  top: 30px !important;
}
</style>
