<template>
  <section>
    <Banner />
    <Header />

    <section class="flex">
      <LeftBar :categories="categories" />
      <Main :results="results" />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      categories: [],
    };
  },
  async mounted() {
    const response = await fetch("http://localhost:58803/api/categories");

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
};
</script>
