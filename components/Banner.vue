<template>
  <section
    :class="index === 0 ? 'banner-first-slide-bg' : 'banner-second-slide-bg'"
    class="bg-[#C5A811] banner h-60 p-4 justify-between"
  >
    <span class="close absolute right-[50px] top-[40px] cursor-pointer z-30" @click="toggleBanner">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.41406 0L0 1.41406L7.29297 8.70703L0 16L1.41406 17.4141L8.70703 10.1211L16 17.4141L17.4141 16L10.1211 8.70703L17.4141 1.41406L16 0L8.70703 7.29297L1.41406 0Z"
          fill="white"
        />
      </svg>
    </span>

    <div class="relative h-[86px]">
      <h1
        class="
          transition-all
          duration-[.6s]
          text-4xl
          font-normal
          text-white
          max-w-[752px]
          absolute
        "
        :class="index === 0 ? ' opacity-100' : ' opacity-0'"
      >
        Retrouvez les logos de vos entreprises favorites de partouts en afrique
      </h1>

      <h1
        class="
          text-4xl
          transition-all
          duration-[.6s]
          font-normal
          text-white
          max-w-[752px]
          absolute
        "
        :class="index === 1 ? ' opacity-100' : ' opacity-0'"
      >
        Telecharger gratuitement les logos de vos entreprises dans les meilleurs
        qualités
      </h1>
    </div>

    <div class="flex justify-between mt-7">
      <div class="relative">
        <p
          :class="index === 0 ? ' opacity-100' : ' opacity-0'"
          class="
            text-white
            absolute
            whitespace-nowrap
            transition-all
            duration-[.6s]
          "
        >
          De nouveaux logos chaques semaines ∙ 54 Pays ∙ 750 Logos + En cours
        </p>

        <p
          :class="index === 1 ? ' opacity-100' : ' opacity-0'"
          class="
            text-white
            absolute
            whitespace-nowrap
            transition-all
            duration-[.6s]
          "
        >
          Exporter vers le format de votre choix ∙ SVG ∙ PNG ∙ EPS
        </p>
      </div>

      <div class="relative left-[25px]">
        <p class="text-white countries-title relative top-[-10px]">
          {{ index === 0 ? "Pays disponibles" : "Contributeurs" }}
        </p>
        <div
          class="flex relative transition-all duration-[.8s]"
          :class="
            index === 0 ? ' opacity-100' : ' opacity-0 translate-x-[-30px]'
          "
        >
          <span
            :style="`left:${index * -32}px`"
            v-for="(flag, index) in flagsList"
            :key="flag"
            class="absolute"
          >
            <component :is="flag" />
          </span>

          <span class="text-white font-bold rest-countries"> + 2 </span>
        </div>

        <div
          class="
            flex
            relative
            z-20
            contributors
            opacity-0
            transition-all
            duration-[.8s]
            translate-x-[50px]
          "
          :class="index === 0 ? '' : 'active-banner'"
        >
          <span
            :style="`left:${index * -32}px`"
            v-for="(avatar, index) in avatarList"
            :key="avatar"
            class="absolute"
          >
            <img
              :src="avatar"
              class="w-10 h-10 rounded-full border border-[#C4C4C4]"
            />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import BeninFlags from "./countriesFlags/BeninFlags.vue";
import IvoryCoastFlags from "./countriesFlags/IvoryCoastFlags.vue";
import GhanaFlags from "./countriesFlags/GhanaFlags.vue";
import SouthAfricaFlags from "./countriesFlags/SouthAfricaFlags.vue";
import NigeriaFlags from "./countriesFlags/NigeriaFlags.vue";
import AlgeriaFlags from "./countriesFlags/AlgeriaFlags.vue";
import TogoFlags from "./countriesFlags/TogoFlags.vue";
export default {
  components: {
    BeninFlags,
    IvoryCoastFlags,
    GhanaFlags,
    SouthAfricaFlags,
    NigeriaFlags,
    AlgeriaFlags,
    TogoFlags,
  },
  data() {
    return {
      index: 1,
      flagsList: [
        "benin-flags",
        "ivory-coast-flags",
        "ghana-flags",
        "south-africa-flags",
        "nigeria-flags",
        "algeria-flags",
        "togo-flags",
      ].reverse(),

      avatarList: [
        "https://www.generatormix.com/images/anime-character/kushina-uzumaki.jpg",
        "https://www.generatormix.com/images/anime-character/hisoka.jpg",
        "https://www.generatormix.com/images/anime-character/killua-zaoldyeck.jpg",
        "https://www.generatormix.com/images/anime-character/mikasa.jpg",
        "https://www.generatormix.com/images/anime-character/sai.jpg",
        "https://www.generatormix.com/images/anime-character/monkey-d.-luffy.jpg",
        "https://www.generatormix.com/images/anime-character/minato-namikaze.jpg",
      ].reverse(),
    };
  },

  mounted() {
    setInterval(() => {
      this.index = this.index === 0 ? 1 : 0;
    }, 3000);
  },


  methods: {
    toggleBanner(){
       this.$store.commit('toggleBanner')
    }
  }
};
</script>


<style scoped>
/* #336234 rgba(51, 98, 52, 0.05)
#5C7531 rgba(92, 117, 49, 1)
#AA951B rgba(170, 149, 27, 1) */
.banner {
  /* background: linear-gradient(to right, #336234, #aa951b),
    url("../assets/images/banner.png"); */
  background-blend-mode: screen, normal;
  background-size: cover;
}

.banner-first-slide-bg {
  background: linear-gradient(to right, #aa951b, #aa951b, #336234),
    url("../assets/images/banner.png");
}

.banner-second-slide-bg {
  background: linear-gradient(to right, #336234, #aa951b),
    url("../assets/images/banner.png");
}

.countries-title {
  margin-top: -35px;
  left: -183px;
  position: relative;
}

.rest-countries {
  position: absolute;
  right: 30px;
  top: 8px;
}

.contributors.active-banner {
  transform: translateX(0px);
  opacity: 1;
  /* transition: all 5s; */
}
</style>