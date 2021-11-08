
<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../assets/Carousel/hamburger.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../../assets/Carousel/salad.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../../assets/Carousel/salmon.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Carousel"
};
</script>

<style scoped>
.signout {
  margin-left: 1080px;
}
</style>