<template>
  <section>
    <Banner />
    <Header />

    <section class="flex">
      <LeftBar :categories="categories" />
      <Main @get-svg="getSvg" :results="results" />
      <RightBar :currentSvg="currentSvg" :categorie="selectedCategory" :logo="selectedLogo" />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      categories: [],
      selectedCategory: '',
      selectedLogo: '',
      currentSvg: '',
    };
  },
  async mounted() {
    const response = await fetch("http://localhost:3000/api/categories");

    const data = await response.json();

    let results = data.results;

    console.log(data.datas, "list");

    // this.categories = 
    //data.datas;

    let finalResult = [];

    for (const key in results) {
      if (Object.hasOwnProperty.call(results, key)) {
        const logos = results[key];
        this.categories.push({
          name: key,
          count: logos.length,
        });
        logos.forEach((logo) => {
          finalResult.push({
            categorie: key,
            logo,
            name: logo.split(".")[0],
          });
        });
      }
    }

    this.results = finalResult;
  },
  methods: {
    getSvg(result) {
      console.log(result);
      this.selectedCategory = result.categorie;
      this.selectedLogo = result.logo;


      fetch(require(`@/assets/icons/${result.categorie}/${result.logo}`))
        .then((response) => response.text())
        .then((text) => {
          this.currentSvg = text;
          console.log(text);
          // this.$emit("get-svg", text);
        });
      // this.$emit("get-svg", result);
    },
  }
};
</script>
