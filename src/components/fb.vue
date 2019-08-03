
<script>
import { CubDBRef } from "../services/firebase";
export default {
  name: "firebaseDB",
  props: [form],
  firebase: {
    formscubs: CubDBRef
  },
  data() {
    return {
      localfb: []
    };
  },
  methods: {
    getCub() {
      console.log("Ejecutando");
      // Obtener información
      CubDBRef.once("value")
        .then(res => {
          this.formCubs = res.val();
          console.log(" Con datos. ", this.CubDBRef);
        })
        .catch(error => {
          console.log("Error sin datos ");
        });
    },
    pushcubform2db() {
      CubDBRef.child(this.cub.id).set(this.form);
    }
  }
};
</script>

