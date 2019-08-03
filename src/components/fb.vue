
<script>
import { CubDBRef } from '../services/firebase'
export default {
  name: 'firebaseDB',
  props: [],
  firebase: {
    formscubs: CubDBRef
  },
  data() {
    return {
      localfb: []
    };
  },
  methods:{
    pushcubform2db(form){
      this.ldb.push(form)
      CubDBRef.push(form)
    },
  },
}
</script>

