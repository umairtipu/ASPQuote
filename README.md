# insurance-front

## Project Description

This project is live at https://aspquote.com/. This project is to register customers for insurance in USA only. The system is affiliated with the API provided by https://mediaalpha.com and all of the information is sent to the API using advanced form in this project.

The form is divided in three steps and each field of the form is linked with the URL parameter. If any question's answer is coming in URL then the respective field will be hidden taking the answer from URL. In this way if a user lands on the project having pre-answered URL, he/she don't need to answer that question again in form.

As there are three steps in the form. If the URL contains all answers of the first step, then the user will be landed on the second step of the form and if any user land with the pre-answers of first two steps then the user will be landed on the third step. If any user landed on the website having all the answers of the form then the system will collect all of the answers and submit the form automatically.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
