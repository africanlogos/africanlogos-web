<template>
  <section
    class="bg-secondary fixed right-0 pt-28 w-[272px] p-6 ml-auto flex-shrink-0 h-screen overflow-scroll z-10"
  >
    <div v-if="categorie">
      <h4 class="text-[16px] text-center mt-[22px]">
        <span class="capitalize">{{ getCompanyName(name) }} </span> ∙
        {{ country }} ∙
        {{ categorie }}
      </h4>

      <div class="h-[2px] bg-[#E4E4E4] mt-[22px] mb-[16px]"></div>

      <div v-if="categorie" class="bg-white grid place-items-center mb-6"></div>

      <div class="bg-white flex justify-center items-center h-32 mb-6">
        <img
          :src="
            require(`@/assets/icons/${this.country}/${this.categorie}/${this.logo}/${this.logo}_${currentVariant}.svg`)
          "
          class="h-[100px] w-[100px]"
        />
      </div>

      <div class="flex items-center">
        <h6
          v-show="variants.length > 1"
          class="text-primary mr-4 whitespace-nowrap"
        >
          Variantes :
        </h6>

        <span
          v-show="variants.length > 1"
          v-for="(variant, index) in variants"
          :key="index"
          @click="setVariant(variant)"
          :class="{ active: currentVariant === variant }"
          class="border w-8 h-8 variant grid place-items-center ml-4 cursor-pointer"
        >
          {{ index + 1 }}
        </span>
      </div>

      <div class="flex mt-8">
        <h6 class="text-primary mr-4 whitespace-nowrap">Categories :</h6>

        <div class="flex">
          <div class="ml-3">
            <span class="text-[#211F16] opacity-[0.5] underline capitalize">
              {{ categorie }}
            </span>
          </div>
        </div>
      </div>

      <div class="h-[2px] bg-[#E4E4E4] mt-[22px] mb-[16px]"></div>

      <div>
        <h6 class="text-black font-semibold mb-5">Télécharger</h6>

        <div class="flex">
          <span
            @click="download('svg')"
            class="inline-block px-4 py-2 border-primary border text-primary font-medium mr-2 cursor-pointer"
          >
            SVG
          </span>

          <span
            @click="download('png')"
            class="inline-block px-4 py-2 border-primary border text-primary font-medium mr-2 cursor-pointer"
          >
            PNG
          </span>

          <span
            @click="download('eps')"
            class="inline-block px-4 py-2 border-primary border text-primary font-medium cursor-pointer"
          >
            EPS
          </span>
        </div>
      </div>

      <div class="h-[2px] bg-[#E4E4E4] mt-[22px] mb-[16px]"></div>
      <div class="flex">
        <span @click="copySvg"
          class="inline-block px-4 py-2 mr-6 border-primary border text-primary font-medium cursor-pointer"
        >
          Copier
        </span>

        <div class="flex items-center">
          <div
            @click="setPrettify"
            class="prettify mr-2"
            :class="{ active: isPrettyfy }"
          >
            <span></span>
          </div>
          <span class="font-bold text-[#A6A296] text-sm">Prettify</span>
        </div>
      </div>
      <div>
        <pre>
        <code :key="svgFormatted" v-highlight class="html p-5 max-h-[300px]" id="content">{{ (svgFormatted) }}
        </code>
      </pre>
      </div>
    </div>

  

    <div v-else class="flex flex-col items-center mt-36 justify-center">
      <span>
        <svg
          width="20"
          height="78"
          viewBox="0 0 20 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.25 0V52H19.75V0H0.25ZM6.75 6.5H13.25V45.5H6.75V6.5ZM0.25 58.5V78H19.75V58.5H0.25ZM6.75 65H13.25V71.5H6.75V65Z"
            fill="#A6A296"
          />
        </svg>
      </span>

      <span class="text-center inline-block text-xl mt-9 text-[#A6A296]">
        Select a logo to download 
      </span>
    </div>
  </section>
</template>

<script>
import prettier from "prettier";
import htmlParser from "prettier/parser-html";

export default {
  components: {},
  props: {
    variants: {
      type: Array,
      default: () => [],
    },
    categorie: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    currentSvg: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isPrettyfy: false,
      rawSvg: "",
      currentVariant: "variant1",
      categories: [
        {
          name: "Banking",
        },
        {
          name: "Verified",
        },
      ],
      code: "const noop = () => {}",
    };
  },

  computed: {
    svgFormatted(){
        if (this.isPrettyfy) {
        return prettier.format(this.currentSvg, {
          parser: "html",
          plugins: [htmlParser],
        });
      } else {
        return this.currentSvg;
      }
    }
  },
  methods: {
    copySvg(){
        navigator.clipboard.writeText(this.svgFormatted);
    },
    setPrettify() {
      this.isPrettyfy = !this.isPrettyfy;
    },
    getCompanyName(name) {
      return name.replace("_", " ");
    },
    download(type) {
      const link = document.createElement("a");
      link.download = this.name;
      link.href = require(`@/assets/icons/${this.country}/${this.categorie}/${this.logo}/${this.logo}_variant1.${type}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    setVariant(variant) {
      this.currentVariant = variant;
    },
  },

  mounted() {
    this.rawSvg = this.currentSvg
  },
};
</script>

<style>
.hljs {
  background: #2b2b2b;
  color: #f8f8f2;
}

/* Comment */
.hljs-comment,
.hljs-quote {
  color: #d4d0ab;
}

/* Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #ffa07a;
}

/* Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #f5ab35;
}

/* Yellow */
.hljs-attribute {
  color: #ffd700;
}

/* Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #abe338;
}

/* Blue */
.hljs-title,
.hljs-section {
  color: #00e0e0;
}

/* Purple */
.hljs-keyword,
.hljs-selector-tag {
  color: #dcc6e0;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

@media screen and (-ms-high-contrast: active) {
  .hljs-addition,
  .hljs-attribute,
  .hljs-built_in,
  .hljs-bullet,
  .hljs-comment,
  .hljs-link,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-string,
  .hljs-symbol,
  .hljs-type,
  .hljs-quote {
    color: highlight;
  }

  .hljs-keyword,
  .hljs-selector-tag {
    font-weight: bold;
  }
}

.variant.active {
  border-image-source: linear-gradient(to left, #c5a811, #3d6f35) !important;
  border: 5px solid;
  border-image-slice: 1;
  border-width: 3px;
  color: black;
  background: unset;
}

.prettify {
  border: #a6a296 8px solid;
  border-radius: 3px;
  width: 45px;
  height: 32px;
  padding: 2px;
  cursor: pointer;
}

.prettify > span {
  background: #a6a296;
  display: block;
  width: 12px;
  height: 12px;
  transition: all 0.5s;
}

.prettify.active {
  border: #3d6f35 8px solid;
}

.prettify.active > span {
  transform: translateX(12px);
  background: #3d6f35;
}
</style>
