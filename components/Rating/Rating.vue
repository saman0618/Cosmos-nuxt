<template>
  <div class="rating">
    <div
      v-for="star in stars"
      :key="star.id"
      @mouseover="hoverRating(star.value)"
      @click="setRating(star.value)"
    >
      <img
        v-if="star.value <= filledStars"
        src="~/assets/icon/ratestar.svg"
        alt="Filled Star"
        class="star-image"
      />
      <img
        v-else
        src="~/assets/icon/unratedstar.svg" 
        alt="Empty Star"
        class="star-image"
      />
    </div>
    <span class="rating-value">{{ rating }}</span>
  </div>
</template>

<script>
export default {
  props: {
    maxStars: {
      type: Number,
      default: 5,
    },
    initialRating: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      rating: this.initialRating,
      filledStars: Math.floor(this.initialRating),
      hasHalfStar: this.initialRating % 1 !== 0,
      stars: Array.from({ length: this.maxStars }, (_, index) => ({ id: index, value: index + 1 })),
    };
  },
  methods: {
    hoverRating(value) {
      this.filledStars = value;
      this.hasHalfStar = false;
    },
    setRating(value) {
      this.rating = value;
      this.$emit('input', this.rating);
    },
  },
};
</script>

<style scoped>
.rating {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.star-image {
  width: 1.5rem; /* Установите размеры изображения по вашему усмотрению */
  height: 1.5rem;
}

.rating-value {
  margin-left: 10px;
  font-size: 1rem;
  color: #333;
}
</style>
