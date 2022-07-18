<template>
  <section
    class="p-3 overflow-scroll content h-screen"
    v-if="results.length > 0"
  >
    <div
      v-for="(result, index) in results"
      @click="getSvg(result)"
      :key="index"
      class="bg-secondary w-[200px] h-[200px] cursor-pointer flex flex-col items-center justify-center"
    >
      <img
        :src="
          require(`@/assets/icons/${result.country}/${result.categorie}/${result.icon}/${result.icon}.svg`)
        "
        class="w-[140px] h-[110px] mb-8"
      />
      <span class="capitalize"> {{ result.name }} </span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  async mounted() {},
  methods: {
    getSvg(result) {
      this.$emit("get-svg", result);
    },
  },
  computed: {
    leftBarIsOpen() {
      return this.$store.state.leftBarIsOpen;
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: auto;
  gap: 30px;
  grid-template-rows: 200px 200px;
}
</style>
