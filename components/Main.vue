<template>
  <section
    class="p-3 overflow-scroll content h-screen"
    v-if="results.length > 0"
  >
    <div
      v-for="(result, index) in results"
      @click="getSvg(result)"
      :key="index"
      :class="{ active: result.icon === current }"
      class="
        bg-secondary
        w-[200px]
        h-[200px]
        cursor-pointer
        border-image
        card
        flex flex-col
        items-center
        justify-center
      "
    >
      <img
        :src="
          require(`@/assets/icons/${result.country}/${result.categorie}/${result.icon}/${result.icon}_variant1.svg`)
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
    return {
      current: "",
    };
  },
  async mounted() {},
  methods: {
    getSvg(result) {
      if (this.current == result.icon) {
        this.current = "";
        this.$emit("get-svg", null);
        return;
      }
      this.current = result.icon;
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
  /* justify-content: center; */
  overflow: auto;
  z-index: 3;
  height: 90vh;
  margin-bottom: 100px;
}

.card:hover {
  border-image-source: linear-gradient(to left, #3d6f35, #c5a811) !important;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
}

.card.active {
  border-image-source: linear-gradient(to left, #c5a811, #3d6f35) !important;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
}
</style>
