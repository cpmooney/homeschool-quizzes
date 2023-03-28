// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as vDataTableComponents from 'vuetify/labs/VDataTable'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components: Object.assign({}, components, vDataTableComponents),
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})
