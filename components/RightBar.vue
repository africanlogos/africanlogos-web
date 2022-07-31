<template>
  <section class="bg-secondary w-[272px] p-6 ml-auto flex-shrink-0">
    <div v-if="categorie">
      <h4 class="text-[16px] text-center mt-[22px]">
        <span class="capitalize">{{ name }} </span> ∙ {{ country }} ∙
        {{ categorie }}
      </h4>

      <div class="h-[2px] bg-[#E4E4E4] mt-[22px] mb-[16px]"></div>

      <div v-if="categorie" class="bg-white grid place-items-center mb-6"></div>

      <div class="bg-white flex justify-center items-center h-32 mb-6">
        <img
          :src="
            require(`@/assets/icons/${this.country}/${this.categorie}/${this.logo}/${this.logo}_${currentVariant}.svg`)
          "
          class=""
        />
      </div>

      <div class="flex items-center">
        <h6 class="text-primary mr-4 whitespace-nowrap">Variantes :</h6>

        <span
          v-for="(variant, index) in variants"
          :key="index"
          @click="setVariant(variant)"
          class="border w-8 h-8 grid place-items-center ml-4 cursor-pointer"
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
            class="
              inline-block
              px-4
              py-2
              border-primary border-2
              text-primary
              font-medium
              mr-2
              cursor-pointer
            "
          >
            SVG
          </span>

          <span
            @click="download('png')"
            class="
              inline-block
              px-4
              py-2
              border-primary border-2
              text-primary
              font-medium
              mr-2
              cursor-pointer
            "
          >
            PNG
          </span>

          <span
            @click="download('eps')"
            class="
              inline-block
              px-4
              py-2
              border-primary border-2
              text-primary
              font-medium
              cursor-pointer
            "
          >
            EPS
          </span>
        </div>
      </div>

      <div class="h-[2px] bg-[#E4E4E4] mt-[22px] mb-[16px]"></div>
      <div>
        <pre>
        <code :key="currentSvg" v-highlight class="html p-5 whitespace-pre-wrap max-h-[300px]" id="content">{{ (currentSvg) }}
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

  methods: {
    download(type) {
      const link = document.createElement("a");
      link.download = this.name;
      link.href = require(`@/assets/icons/${this.country}/${this.categorie}/${this.logo}/${this.logo}.${type}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    setVariant(variant) {
      this.currentVariant = variant;
    },
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
</style>
