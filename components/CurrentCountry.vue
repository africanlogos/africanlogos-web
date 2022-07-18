<template>
  <component class=" h-7 w-7" :is="country" />
</template>

<script>
import Benin from "./countriesFlags/BeninFlags.vue";
import IvoryCoast from "./countriesFlags/IvoryCoastFlags.vue";
import Ghana from "./countriesFlags/GhanaFlags.vue";
import SouthAfrica from "./countriesFlags/SouthAfricaFlags.vue";
import Nigeria from "./countriesFlags/NigeriaFlags.vue";
import Algeria from "./countriesFlags/AlgeriaFlags.vue";
import Togo from "./countriesFlags/TogoFlags.vue";
export default {
  props: {
    country: {
      type: String,
      required: true,
    },
  },

  components: {
    bj: Benin,
    ci: IvoryCoast,
    gh: Ghana,
    za: SouthAfrica,
    ng: Nigeria,
    dz: Algeria,
    tg: Togo,
  },
};
</script>

<style></style>
