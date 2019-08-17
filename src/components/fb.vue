
<script>
import { CubDBRef } from '../services/firebase'
export default {
  name: 'firebaseDB',
  props: [form],
  firebase: {
    formscubs: CubDBRef
  },
  data () {
    return {
      localFB: []
    }
  },
  methods: {
    getCub () {
      console.log('Ejecutando')
      // Obtener información
      CubDBRef.once('value')
        .then(res => {
          this.localFB = res.val()
          console.log(' Con datos. ', this.localFB)
        })
        .catch(error => {
          console.log('Error sin datos ')
        })
    },
    pushcubform2db () {
      CubDBRef.child(this.form.cub.id).set(this.form)
    }
  }
}
</script>
