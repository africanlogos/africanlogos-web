<template>
  <section
    class="p-3 overflow-scroll content" v-if="results.length > 0"
  >
  <!-- gap-[34px] -->

    <div
      v-for="(result, index) in results" @click="getSvg(result)"
      :key="index"
      class="
        bg-secondary
        w-[200px]
        h-[200px] cursor-pointer
        flex flex-col
        items-center
        justify-center
      "
    >

    <!-- {{ result }} -->

    <!-- './agritech/fluttervawe/fluttervawe.svg' -->

  <!-- /assets/icons/analytics/sobebra/sobebra.svg -->

    <!-- /agritech/branch/branch -->

    <!-- './agritech/flutterwave/flutterwave.svg' -->

    <!-- {{ `@/assets/icons/${result.categorie}/${result.name}/${result.logo}.svg` }} -->
    <!-- agritech/flutterwave/flutterwave.svg -->

    <!-- {{ require(`@/assets/icons/${result.categorie}/${result.name}/${result.logo}.svg`) }} -->
    <!-- @/assets/icons/agritech/flutterwave/flutterwave.svg -->
      <img
        :src="require(`@/assets/icons/${result.categorie}/${result.name}/${result.logo}.svg`)"
        class="w-[140px] h-[110px] mb-8"
      />
      <span class=" capitalize"> {{ result.name }} </span>
    </div>
  </section>
</template>

<script>
export default {
    props:{
        results: {
            type: Array,
            required: true
        }
    },
  data() {
    return {
    //   results: [],
    };
  },
  async mounted() {

  },
  methods: {
    getSvg(result) {
      this.$emit('get-svg', result);
      // console.log(result);
    }
  }
};
</script>

<style scoped>
.content {
  width: calc(100% - 535px);

    display: grid;
    grid-template-columns: repeat(auto-fill,200px);
    grid-auto-rows: auto;
    gap: 30px;
    grid-template-rows: 200px 200px;
}
</style>