<template>
  <section>
    <Banner v-if="bannerIsOpen" />
    <Header @filter-by-countryes="filterByCountryes" />
 
    <section class="flex">
      <LeftBar
        v-if="leftBarIsOpen"
        @filter-by-category="filterBycategories"
        :categories="categories"
      />
      <Main @get-svg="getSvg" :results="filteredResults" />
      <RightBar
        v-if="rightBarIsOpen"
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
      countryCode: "",
      filterCategory: "",
    };
  },
  async mounted() {
    const response = await fetch(`${process.env.baseUrl}/api/categories`);

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
        
        const filterByCategorie = result.categorie
          .toLowerCase()
          .includes(this.filterCategory.toLowerCase());

        
        const filterByCountryes = result.name
          .toLowerCase()
          .includes(this.countryCode.toLowerCase());


        const filterBySearch = result.name
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());

      

        return (filterByCategorie || filterByCountryes) && filterBySearch;
      });
    },
    leftBarIsOpen() {
      return this.$store.state.leftBarIsOpen;
    },
    rightBarIsOpen() {
      return this.$store.state.rightBarIsOpen;
    },
    bannerIsOpen() {
      return this.$store.state.bannerIsOpen;
    },
    searchValue() {
      return this.$store.state.searchValue;
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

      fetch(
        require(`@/assets/icons/${result.categorie}/${result.logo}/${result.logo}.svg`)
      )
        .then((response) => response.text())
        .then((text) => {
          this.currentSvg = text;
        });
    },
    filterBycategories(categorie) {
      this.filterCategory = categorie.name;
      this.selectedCategory = "";
      this.selectedLogo = "";
      this.currentSvg = "";
      this.selectedName = "";
    },
    filterByCountryes(countryCode) {
      this.filterCountry = countryCode;
      this.filterCategory = "";
      this.selectedCategory = "";
      this.selectedLogo = "";
      this.currentSvg = "";
      this.selectedName = "";
    },
  },
  watch: {
    setSearchValue(value) {
      console.log(value);
    },
  },
};
</script>
