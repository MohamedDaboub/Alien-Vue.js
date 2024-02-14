<script setup>
  import { ref, computed, onMounted} from 'vue';
  const menuOuvert = ref(false);

  const toggleMobileMenu = () => {
    menuOuvert.value = !menuOuvert.value;
  };

  const closeMobileMenu = () => {
    menuOuvert.value = false;
  };
  const bugMessage = ref(null);

  const simulerBug = () => {
    bugMessage.value = "Oh no, there seems to be a bug on the site!";
    activerEffetCasseEcran();
    desactiverInteractionsUtilisateur();
    setTimeout(() => {
      window.location.href = "https://5468652053616761206f66207468652058796.netlify.app/";
    }, 3000);
  }

const activerEffetCasseEcran = () => {
  const audio = new Audio('/img/bug.mp3 ');
  audio.play();
}
const desactiverInteractionsUtilisateur = () => {
  document.body.style.overflow = 'hidden';
  const allLinksAndButtons = document.querySelectorAll('a, button, input[type="button"], input[type="submit"]');
  allLinksAndButtons.forEach(element => {
    element.addEventListener('click', stopPropagation, true);
  });
}
const stopPropagation = (event) => {
  event.stopPropagation();
  event.preventDefault();
}
const images = ref([
  { src: 'img/Alien1.jpg', description: 'Profile Alien' },
  { src: 'img/Alien2.jpg', description: 'Alien in his planet' },
  { src: 'img/Alien3.jpg', description: 'Alien' },
]);
const images2 = ref([
  { src: 'img/Space1.jpg', description: 'Galaxie' },
  { src: 'img/Space2.jpg', description: 'Cosmos' },
  { src: 'img/Space3.jpg', description: 'Star' },
  { src: 'img/Space4.jpg', description: 'Galaxie Star' },
]);
const currentIndex = ref(0);
const currentIndex2 = ref(0);

const currentImage = computed(() => images.value[currentIndex.value]);
const currentImage2 = computed(() => images2.value[currentIndex2.value]);

onMounted(() => {
  startCarousel();
  startCarousel2();
});

const startCarousel = () => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 3000); // Change image every 3 seconds (adjust as needed)
};
const startCarousel2 = () => {
  setInterval(() => {
    currentIndex2.value = (currentIndex2.value + 1) % images2.value.length;
  }, 3000); // Change image every 3 seconds (adjust as needed)
};
</script>
<template>
<div class=" sticky top-0 z-10">
      <header class=" bg-Marron-F">
        <div class="flex flex-wrap justify-between items-center p-2">
          <RouterLink to="/" class="flex items-center">
            <img src='/img/Logo.svg' class=" w-20 p-2 " alt="Logo du site">
          </RouterLink>
          <nav class="hidden md:flex items-center">
            <ul class="flex space-x-2">
              <li class="my-5">
                  <router-link @click="simulerBug"  to="/" class="my-3 text-white   focus:ring-4 focus:ring-primary-300 font-bold rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                    Home
                  </router-link>
            </li>
            <li class="my-5">
                  <router-link @click="simulerBug"  to="/" class=" my-3 text-white   focus:ring-4 focus:ring-primary-300 font-bold rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                    Aliens
                  </router-link>
              </li>
            <li class="my-5">
                  <router-link @click="simulerBug" to="/" class=" my-3 text-white   focus:ring-4 focus:ring-primary-300 font-bold rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                    Articles 
                  </router-link>
              </li>
            <li class="my-5">
                <router-link @click="simulerBug" to="/" class=" my-3 text-white   focus:ring-4 focus:ring-primary-300 font-bold rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                    Contact
                </router-link>
            </li>
            </ul>
          </nav>
          <div class="flex md:hidden items-center lg:order-2">
            <i data-collapse-toggle="mobile-menu" type="button" class="" aria-controls="mobile-menu" aria-expanded="false" @click="toggleMobileMenu">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
              <svg v-if="menuOuvert" class="hidden w-6 h-6" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </i>
          </div>
        </div>
        <nav v-if="menuOuvert" class="md:hidden   w-full h-full border-gray-200 px-4 py-2.5 transition-transform transform  ">
          <ul class="flex flex-col mt-4 z-10 font-medium justify-center text-white text-center my-10 ">
            <li class="my-5">
              <router-link @click="simulerBug" to="/" class="text-xs my-3">
                Home
              </router-link>
            </li>
            <li class="my-5">
              <router-link @click="simulerBug" to="/" class="text-xs my-3">
                Aliens 
              </router-link>
            </li>
            <li class="my-5">
              <router-link @click="simulerBug" to="/" class="text-xs my-3">
                Articles 
              </router-link>
            </li>
            <li class="my-5">
              <router-link @click="simulerBug" to="/" class="text-xs my-3">
                Contact
              </router-link>
            </li>
          </ul>
        </nav>
      </header>
      <section class="Hero text-white items-center my-auto md:flex  px-7    ">
        <div class="max-w-md   pb-2  ">
          <h1 class="py-4">
            Welcome to our website dedicated to the exploration of extraterrestrials and cosmic phenomena. Immerse yourself in a fascinating adventure as we take you on a journey to discover unknown worlds, interstellar encounters and the wonders of space.
          </h1>
          <p class="py-4">
            On this homepage, you'll find a wealth of information about extraterrestrials, their cultures, technologies and stories. Explore our articles, videos and captivating images to learn more about extraterrestrial civilizations and the mysteries of the universe.
          </p>
          <div>
            <button @click="simulerBug"  class="text-base font-bold text-center m-auto  my-4 bg-Marron-F p-4 rounded-full text-black">
              More about Alien
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2 class="text-center py-10 font-bold text-2xl">Who are the Aliens</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 mx-5">
            <div class="carousel-container">
              <div class="carousel">
                <transition name="fade" mode="out-in">
                  <img :src="currentImage.src" :key="currentImage.src" class="carousel-image" alt="Carousel Image" />
                </transition>
              </div>
              <div class="description text-center text-lg font-semibold">
                {{ currentImage.description }}
              </div>
            </div>
            <div>
              <p class="md:text-lg text-base py-4 ">Discover detailed profiles of the main extraterrestrial species, including their origins, physical characteristics, societies and technologies.</p>
              <p class="md:text-lg text-base py-4 "> Read testimonials from people who claim to have interacted with beings from elsewhere, offering a unique insight into their experiences and encounters.</p>
              <button @click="simulerBug" class="text-base font-bold text-center  flex my-4 bg-Marron-F p-4 rounded-full text-black">
              Read more
            </button>
            </div>
          </div>
    </section>
      <section>
        <h2 class="text-center py-10 font-bold text-2xl">Discover the Foreign Universe</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 mx-5">
            <div class="carousel-container">
              <div class="carousel">
                <transition name="fade" mode="out-in">
                  <img :src="currentImage2.src" :key="currentImage2.src" class="carousel-image" alt="Carousel Image" />
                </transition>
              </div>
              <div class="description text-center text-lg font-semibold">
                {{ currentImage2.description }}
              </div>
            </div>
            <div>
              <p class="md:text-lg text-base py-4 ">Explore a gallery of breathtaking images featuring distant planets, mysterious moons, colorful nebulae and other celestial phenomena.</p>
              <p class="md:text-lg text-base py-4 ">Watch captivating videos featuring space travel, alien encounters, contact experiences and UFO sightings.</p>
              <p class="md:text-lg text-base py-4 ">Read articles exploring scientific theories on the existence of extraterrestrial life, interstellar travel and the possibilities of space colonization.</p>
              <button @click="simulerBug" class="text-base font-bold text-center  flex my-4 bg-Marron-F p-4 rounded-full text-black">
              Read more
            </button>
            </div>
          </div>
    </section>
      <section class="px-6">
        <h2 class="text-center py-10 font-bold text-2xl">Share Your Comments</h2>
        <p class="md:text-lg text-base py-4 lg:mr-24 lg:ml-15 ">Do you have extraterrestrial information to share? We're here to listen and document your experiences.</p>
        <p class="md:text-lg text-base py-4 lg:mr-24 lg:ml-15 ">Use our interactive contact form to submit your testimonials, UFO sightings, abduction stories or other extraterrestrial-related events.</p>
        <p class="md:text-lg text-base py-4 lg:mr-24 lg:ml-15 ">Follow our instructions on how to provide accurate details and credible testimonials for in-depth analysis by our team of ufology experts.</p>
        <p class="md:text-lg text-base py-4 lg:mr-24 lg:ml-15 ">Be assured of anonymity and confidentiality when sharing your experiences with us, without fear of judgment or stigmatization.</p>
        <button @click="simulerBug" class="text-base font-bold text-center m-auto flex my-10 bg-Marron-F p-4 rounded-full text-black">
          Give your testimonial
      </button>
    </section>
    <footer>
      <!-- lien pour Mention legal -->
      <div class="flex justify-between items-center bg-Marron-F text-black p-4">
        <a @click="simulerBug"   class="font-semibold cursor-pointer">Legal notice</a>
        <p class="font-semibold">© 2024 Alien Explorer.
        </p>
      </div>
    </footer>
    <div :class="{ 'bug-message-show': bugMessage }" class="bug-message-container">
      <div class="bug-message-content">
        <p>{{ bugMessage }}</p>
      </div>
    </div>
    </div>  
</template>

<style scoped>
.Hero{
    background-image: url('/img/Alien_Hero.webp');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 86dvh;
}
/* Styles pour le message de bug */
  /* Styles pour le message de bug */
  .bug-message-container {
    display: none;
    position: fixed;
    top: 50%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    background-image: url('/img/bug.gif');
    color: white;
    /* padding: 20px; */
    width: 100%;
    height: 800px;
    border-radius: 8px;
    z-index: 999;
  }

  .bug-message-content {
    text-align: center;
  }

  /* Affichage du message de bug */
  .bug-message-show {
    display: block;
  }
.carousel-container {
  width: 100%;
  max-width: 500px; /* Adjust width as needed */
  overflow: hidden;
  margin: 0 auto;
}

.carousel {
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.description {
  margin-top: 10px;
}
</style>
