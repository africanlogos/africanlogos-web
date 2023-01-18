<template>
  <section class="bg-secondary left-0 fixed pt-28 w-[272px] flex-shrink-0 z-10">
    <div>
      <span
        @click="activeSection = 0"
        :class="activeSection === 0 ? 'active text-white' : ' text-primary'"
        class="flex justify-between px-5 py-[5px] cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.95312 0 1 4.95312 1 11V16H3V11C3 6.04688 7.04688 2 12 2C16.9531 2 21 6.04688 21 11V16H23V11C23 4.95312 18.0469 0 12 0ZM12 4C8.15625 4 5 7.15625 5 11V16H7V11C7 8.24609 9.24609 6 12 6C14.7539 6 17 8.24609 17 11V16H19V11C19 7.15625 15.8438 4 12 4ZM12 8C10.3555 8 9 9.35547 9 11V16H11V11C11 10.4453 11.4453 10 12 10C12.5547 10 13 10.4453 13 11V16H15V11C15 9.35547 13.6445 8 12 8ZM1 17L0 21H24L23 17H1ZM0 22V24H24V22H0Z"
            fill="#3D6F35"
          />
        </svg>
        Ajout récents
      </span>

      <span
        @click="activeSection = 1"
        :class="activeSection === 1 ? 'active text-white' : ' text-primary'"
        class="flex justify-between px-5 py-[5px] cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5938 2.48438L11.4609 4.73438L10.9688 5.25L11.4609 5.76562L13.5938 8.01562L14.6719 6.98438L13.7344 6H14.25C15.501 6 16.5 6.99902 16.5 8.25V16.6406C15.6328 16.9541 15 17.7803 15 18.75C15 19.9834 16.0166 21 17.25 21C18.4834 21 19.5 19.9834 19.5 18.75C19.5 17.7803 18.8672 16.9541 18 16.6406V8.25C18 6.1875 16.3125 4.5 14.25 4.5H13.7344L14.6719 3.51562L13.5938 2.48438ZM6.75 3C5.5166 3 4.5 4.0166 4.5 5.25C4.5 6.21973 5.13281 7.0459 6 7.35938V16.6406C5.13281 16.9541 4.5 17.7803 4.5 18.75C4.5 19.9834 5.5166 21 6.75 21C7.9834 21 9 19.9834 9 18.75C9 17.7803 8.36719 16.9541 7.5 16.6406V7.35938C8.36719 7.0459 9 6.21973 9 5.25C9 4.0166 7.9834 3 6.75 3ZM6.75 4.5C7.17188 4.5 7.5 4.82812 7.5 5.25C7.5 5.67188 7.17188 6 6.75 6C6.32812 6 6 5.67188 6 5.25C6 4.82812 6.32812 4.5 6.75 4.5ZM6.75 18C7.17188 18 7.5 18.3281 7.5 18.75C7.5 19.1719 7.17188 19.5 6.75 19.5C6.32812 19.5 6 19.1719 6 18.75C6 18.3281 6.32812 18 6.75 18ZM17.25 18C17.6719 18 18 18.3281 18 18.75C18 19.1719 17.6719 19.5 17.25 19.5C16.8281 19.5 16.5 19.1719 16.5 18.75C16.5 18.3281 16.8281 18 17.25 18Z"
            fill="#3D6F35"
          />
        </svg>

        Contributeurs
      </span>

      <span
        @click="activeSection = 2"
        :class="activeSection === 2 ? 'active text-white' : ' text-primary'"
        class="flex justify-between px-5 py-[5px] cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4001 1.6C17.3656 1.6 16.484 2.27414 16.1501 3.2H5.6001C4.28412 3.2 3.2001 4.28402 3.2001 5.6V5.75C2.27423 6.08389 1.6001 6.96547 1.6001 8C1.6001 9.03453 2.27423 9.91611 3.2001 10.25V10.4C3.2001 11.716 4.28412 12.8 5.6001 12.8H18.4001C18.8521 12.8 19.2001 13.148 19.2001 13.6V13.75C18.2742 14.0839 17.6001 14.9655 17.6001 16C17.6001 17.0345 18.2742 17.9161 19.2001 18.25V18.4C19.2001 18.852 18.8521 19.2 18.4001 19.2H7.8501C7.51621 18.2741 6.63462 17.6 5.6001 17.6C4.28409 17.6 3.2001 18.684 3.2001 20C3.2001 21.316 4.28409 22.4 5.6001 22.4C6.63462 22.4 7.51621 21.7259 7.8501 20.8H18.4001C19.7161 20.8 20.8001 19.716 20.8001 18.4V18.25C21.726 17.9161 22.4001 17.0345 22.4001 16C22.4001 14.9655 21.726 14.0839 20.8001 13.75V13.6C20.8001 12.284 19.7161 11.2 18.4001 11.2H5.6001C5.14807 11.2 4.8001 10.852 4.8001 10.4V10.25C5.72596 9.91611 6.4001 9.03453 6.4001 8C6.4001 6.96547 5.72596 6.08389 4.8001 5.75V5.6C4.8001 5.14798 5.14807 4.8 5.6001 4.8H16.1501C16.484 5.72586 17.3656 6.4 18.4001 6.4C19.7161 6.4 20.8001 5.31601 20.8001 4C20.8001 2.68399 19.7161 1.6 18.4001 1.6ZM18.4001 3.2C18.8514 3.2 19.2001 3.5487 19.2001 4C19.2001 4.4513 18.8514 4.8 18.4001 4.8C17.965 4.8 17.6334 4.47295 17.6095 4.04531C17.6112 4.01461 17.6112 3.98383 17.6095 3.95313C17.6341 3.52627 17.9656 3.2 18.4001 3.2ZM3.95479 7.20937C3.98549 7.21115 4.01627 7.21115 4.04697 7.20937C4.47382 7.23401 4.8001 7.56547 4.8001 8C4.8001 8.43506 4.47305 8.76674 4.04541 8.79063C4.02616 8.78941 4.00688 8.78889 3.9876 8.78906C3.97613 8.78934 3.96467 8.78986 3.95322 8.79063C3.52637 8.76599 3.2001 8.43453 3.2001 8C3.2001 7.56494 3.52715 7.23326 3.95479 7.20937ZM19.9548 15.2094C19.9855 15.2111 20.0163 15.2111 20.047 15.2094C20.4738 15.234 20.8001 15.5655 20.8001 16C20.8001 16.4351 20.473 16.7667 20.0454 16.7906C20.0262 16.7894 20.0069 16.7889 19.9876 16.7891C19.9761 16.7893 19.9647 16.7899 19.9532 16.7906C19.5264 16.766 19.2001 16.4345 19.2001 16C19.2001 15.5649 19.5271 15.2333 19.9548 15.2094ZM5.6001 19.2C6.03516 19.2 6.36684 19.5271 6.39072 19.9547C6.38895 19.9854 6.38895 20.0162 6.39072 20.0469C6.36609 20.4737 6.03462 20.8 5.6001 20.8C5.14879 20.8 4.8001 20.4513 4.8001 20C4.8001 19.5487 5.14879 19.2 5.6001 19.2Z"
            fill="#3D6F35"
          />
        </svg>

        Ajout récents
      </span>
    </div>
    <div>
      <h4 class="px-5 py-[10px] text-primary opacity-50">Catégories</h4>

      <div class="overflow-scroll h-screen">
        <div
          :class="
            activeCategories === -1 ? 'active text-white' : 'text-primary'
          "
          @click="getCategories({name:''}, -1)"
          class="flex justify-between px-5 py-[5px] cursor-pointer category"
        >
          <span class=""> All </span>
          <span class=""> {{ total}} </span>
        </div>

        <div
          :class="
            activeCategories === index ? 'active text-white' : 'text-primary'
          "
          @click="getCategories(cat, index)"
          class="flex justify-between px-5 py-[5px] cursor-pointer category"
          v-for="(cat, index) in categories"
          :key="index"
        >
          <span class="">
            {{ cat.name }}
          </span>
          <span class=""> {{ cat.count }} </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      activeCategories: -1,
      activeSection: -1,
    };
  },

  methods: {
    getCategories(categorie, index) {
      this.activeCategories = index;
      console.log(categorie);
      this.$emit("filter-by-category", categorie);
      // this.$store.dispatch('getCategories');
    },
  },

  computed:{
    total(){
      return this.categories.reduce((a,b)=>a + b.count,0)
    }
  }
};
</script>

<style scoped>



.active {
  background: linear-gradient(91.16deg, #3d6f35 0%, #c5a811 100%);
}

.active.category {
  border-image-source: linear-gradient(to left, #c5a811, #3d6f35) !important;
  border: 5px solid;
  border-image-slice: 1;
  border-width: 3px;
  color: black;
  background: unset;
}

.active svg {
  fill: white;
}

.active svg path {
  fill: white;
}
</style>