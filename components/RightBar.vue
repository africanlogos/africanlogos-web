<template>
  <section class="bg-secondary w-[272px] p-6">
    <h4 class="text-[16px] text-center mt-[22px]">Branch ∙ NG ∙ Bank</h4>

    <div class="h-[2px] bg-[#E4E4E4] mt-[22px] mb-[16px]"></div>

    <div v-if="categorie" class="bg-white grid place-items-center mb-6">
      <img :src="require(`@/assets/icons/${categorie}/${logo}`)" alt="" srcset="" />
    </div>

    <div class="flex items-center">
      <h6 class="text-primary mr-4 whitespace-nowrap">Variantes :</h6>

      <span
        v-for="(variant, index) in variantes"
        :key="index"
        class="border w-10 h-10 grid place-items-center ml-4 text-2xl"
      >
        {{ variant }}
      </span>
    </div>

    <div class="flex mt-8">
      <h6 class="text-primary mr-4 whitespace-nowrap">Categories :</h6>

      <div class="flex">
        <div class="ml-3" v-for="(category, index) in categories" :key="index">
          <span class="text-[#211F16] opacity-[0.5] underline">
            {{ category.name }}
          </span>
        </div>
      </div>
    </div>

    <div class="h-[2px] bg-[#E4E4E4] mt-[22px] mb-[16px]"></div>

    <div>
      <h6 class="text-black font-semibold mb-5">Télécharger</h6>

      <div class="flex">
        <span
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
    <!-- {{ currentSvg }} -->
    <!-- <MonacoEditor class="editor" v-model="code" language="javascript" /> -->

    <div>
      <pre>
        <code :key="currentSvg" v-highlight class="html p-5 whitespace-pre-wrap max-h-[300px]" id="content">{{ (currentSvg) }}
        </code>
      </pre>
    </div>
  </section>
</template>

<script>

export default {
      components: {
  },
  props: {
    categorie: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    currentSvg: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      variantes: [1, 2, 3],
      categories: [
        {
          name: "Banking",
        },
        {
          name: "Verified",
        },
      ],
      code: 'const noop = () => {}',
      // currentSvg: `<svg width="704" height="200" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M55.7 12.9v174.2h4.98V12.9h-5.06.09Zm30.86 124.3c4.5 0 8.8-1.8 11.98-5a17.15 17.15 0 0 0 0-24.16 16.88 16.88 0 0 0-23.96 0 17.15 17.15 0 0 0 0 24.16c3.18 3.2 7.49 5 11.98 5Zm16.9-59.32a17.21 17.21 0 0 1-4.63 12.65 16.94 16.94 0 0 1-12.3 5.32 16.83 16.83 0 0 1-12.28-5.32 17.1 17.1 0 0 1-4.64-12.65c.23-4.37 2.11-8.49 5.26-11.5a16.87 16.87 0 0 1 23.33 0 17.15 17.15 0 0 1 5.26 11.5Zm-73.58 38.2c4.5 0 8.8-1.8 11.98-5a17.15 17.15 0 0 0 0-24.16 16.88 16.88 0 0 0-23.96 0 17.15 17.15 0 0 0 0 24.16c3.17 3.2 7.48 5 11.98 5Z" fill="#1DAFEC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M612.79 35.26v129.37h21.04V120.3c0-11.28 1.43-19.26 4.38-23.9 2.99-4.6 8.15-6.88 15.47-6.88 5.75 0 9.9 1.68 12.43 4.97 2.63 3.25 3.91 8.59 3.91 15.92v54.22h21.05v-56.17c0-12.8-2.63-22.14-7.83-27.99a32 32 0 0 0-24.68-10.07 36.04 36.04 0 0 0-24.77 10.21V32.66l-21 2.55v.05ZM142.3 164.63V35.26l21.05-2.55v50.87a39.05 39.05 0 0 1 59.21.65c8.15 9.2 12.25 20.61 12.25 34.26 0 14.16-4.15 25.81-12.34 35.05-8.15 9.14-18.47 13.74-30.9 13.74a39.06 39.06 0 0-12.64 10.43Z" fill="#20365C"/></svg>`,
    };
  },

  methods: {

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