<template>
  <section>
    <Banner />
    <Header />

    <section class="flex">
      <LeftBar
        @filter-by-category="filterBycategories"
        :categories="categories"
      />
      <Main @get-svg="getSvg" :results="filteredResults" />
      <RightBar
        :currentSvg="currentSvg"
        :name="selectedName"
        :categorie="selectedCategory"
        :logo="selectedLogo"
      />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      categories: [],
      selectedCategory: "",
      selectedLogo: "",
      currentSvg: "",
      selectedName: "",

      filterCategory: "",
    };
  },
  async mounted() {
    const response = await fetch("http://localhost:3000/api/categories");

    const data = await response.json();

    let results = data.results;

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
    console.log(this.results);
  },
  computed: {
    filteredResults() {
      return this.results.filter((result) => {
        return result.categorie
          .toLowerCase()
          .includes(this.filterCategory.toLowerCase());
      });
    },
  },
  methods: {
    downloadURI(uri, name) {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // delete link;
    },
    getSvg(result) {
      console.log(result);
      this.selectedCategory = result.categorie;
      this.selectedLogo = result.logo;
      this.selectedName = result.name;

      fetch(require(`@/assets/icons/${result.categorie}/${result.logo}/${result.logo}.svg`))
        .then((response) => response.text())
        .then((text) => {
          this.currentSvg = text;
        });




        // fetch(require(`@/assets/icons/${result.categorie}/${result.logo}/${result.logo}.svg`))
        // .then( res => res.blob() )
        // .then( blob => {
        //   var file = window.URL.createObjectURL(blob);
        //   window.location.assign(file);
        // });

        // this.downloadURI(require(`@/assets/icons/${result.categorie}/${result.logo}/${result.logo}.svg`), result.name);




    },
    filterBycategories(categorie) {
      this.filterCategory = categorie.name;
      this.selectedCategory = "";
      this.selectedLogo = "";
      this.currentSvg = "";
      this.selectedName = "";
    },
  },
};
</script>
