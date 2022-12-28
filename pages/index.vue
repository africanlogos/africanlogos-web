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
        :key="variants"
        v-if="rightBarIsOpen"
        :currentSvg="currentSvg"
        :name="selectedName"
        :categorie="selectedCategory"
        :logo="selectedLogo"
        :countryCode="countryCode"
        :country="selectedCountry"
        :variants="variants"
      />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      variants: [],
      results: [],
      categories: [],
      filterCountry: "",
      selectedCategory: "",
      selectedLogo: "",
      currentSvg: "",
      selectedName: "",
      countryCode: "",
      filterCategory: "",
      selectedCountry: "",
    };
  },
  async mounted() {
    const response = await fetch(`/api/categories`);

    const data = await response.json();

    let results = data.datas;

    let categorie = {};

    results.forEach((element) => {
      if (categorie[element.categorie]) {
        categorie[element.categorie]++;
      } else {
        categorie[element.categorie] = 1;
      }
    });

    this.categories = Object.keys(categorie).map((key) => {
      return {
        name: key,
        count: categorie[key],
      };
    });

    this.results = results;
  },
  computed: {
    filteredResults() {
      return this.results.filter((result) => {
        const filterByCategorie = result.categorie
          .toLowerCase()
          .includes(this.filterCategory.toLowerCase());

        const filterByCountryes = result.country
          .toLowerCase()
          .includes(this.countryCode.toLowerCase());

        const filterBySearch = result.icon
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());

        return filterByCountryes && filterByCategorie && filterBySearch;
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
      if (!result) {
        this.selectedCategory = "";
        this.selectedLogo = "";
        this.selectedName = "";
        this.selectedCountry = "";
        this.variants = "";

        return;
      }
      this.selectedCategory = result.categorie;
      this.selectedLogo = result.icon;
      this.selectedName = result.icon;
      this.selectedCountry = result.country;
      this.variants = result.variants;

      fetch(
        require(`@/assets/icons/${result.country}/${result.categorie}/${result.icon}/${result.icon}_variant1.svg`)
      )
        .then((response) => response.text())
        .then((text) => {
          this.currentSvg = text;
        });
    },
    filterBycategories(categorie) {
      console.log(categorie);
      this.filterCategory = categorie.name;
      this.selectedCategory = "";
      this.selectedLogo = "";
      this.currentSvg = "";
      this.selectedName = "";
    },
    filterByCountryes(countryCode) {
      console.log(countryCode);
      this.countryCode = countryCode;
      this.filterCategory = "";
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


<style>
body {
  height: 100%;
  /* overflow-y: hidden; */
}
</style>
