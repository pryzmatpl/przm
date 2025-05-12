<script setup>
import {inject, ref} from 'vue';

// Add a component name definition
defineOptions({
  name: 'PublicationsList'
});

const $t = inject("$t");
const papers = ref([
  {
    title: "Vircator. Design and analysis",
    authors: "Piotr Słupski, Waldemar Wiejak, Wojciech Czarczyński, Artur Wymysłowski",
    journal: "MRW/MIKON 2016 Conference Poster",
    year: 2016,
    link: "https://www.proceedings.com/content/030/030663webtoc.pdf",
  },
  {
    title: "Electromagnetic field patterning or crystal light",
    authors: "Piotr Słupski, Wojciech Czarczyński, Artur Wymysłowski",
    journal: "Proceedings Volume 10175, Electron Technology Conference 2016",
    year: 2016,
    link: "https://journals.spiedigitallibrary.org/conference-proceedings-of-spie/10175/101750X/Electromagnetic-field-patterning-or-crystal-light/10.1117/12.2260445.short",
  },
  {
    title: "Fabrication of multilevel resist patterns by using a liquid crystal mask",
    authors: "Piotr Słupski, Katarzyna Komorowska, Liming Chai, Michał Nikodem",
    journal: "Optical Engineering",
    year: 2016,
    link: "http://opticalengineering.spiedigitallibrary.org/article.aspx?articleid=2471160",
  },
  {
    title: "A discharge approach to ferroelectret nanogenerators- research into novel methods for charging IoT, wearable devices and smart clothing",
    authors: "Piotr Słupski, Patryk Szymczak",
    journal: "International Conference and Exhibition on Pharmaceutics & Novel Drug Delivery Systems",
    year: 2018,
    link: "https://www.scitechnol.com/proceedings/a-discharge-approach-to-ferroelectret-nanogenerators-research-into-novel-methods-for-charging-iot-wearable-devices-and-s-6423.html",
  },
  {
    title: "Ex-aequo Haptic System, first place in Play Your Airport 2",
    authors: "Piotr Słupski, Patryk Szymczak",
    journal: "Play Your Airport 2 - Company",
    year: 2018,
    link: "https://www.agorize.com/zh/challenges/play-your-airport-2-company/pages/saison-1?lang=en",
  },
  {
    title: "Soft lithography processing of fresnel lens for on-chip applications",
    authors: "Jacek Marczak, Piotr Słupski, Piotr Kunicki, Katarzyna Komorowska",
    journal: "2015 IEEE 15th International Conference on Nanotechnology (IEEE-NANO)",
    year: 2015,
    link: "https://ieeexplore.ieee.org/abstract/document/7388781",
  },
  {
    title: "Incorporation of luminescent semiconductor nanoparticles into liquid crystal matrix",
    authors: "Maciej Czajkowski, Filip Granek, Katarzyna Komorowska, Michał Nikodem, Piotr Słupski, Magdalena Dusza",
    journal: "Journal of Luminescence",
    year: 2016,
    link: "https://www.doi.org/10.1016/j.jlumin.2015.08.011",
  },
  {
    title: "Light Intensity Fibre Optic Sensor for MEMS displacement and vibration metrology",
    authors: "Karolina Orłowska, Piotr Słupski, Michał Świątkowski, Piotr Kunicki, Anna Sankowska, Teodor Gotszalk",
    journal: "Optics and Laser Technology",
    year: 2015,
    link: "https://doi.org/10.1016/J.OPTLASTEC.2014.07.019",
  },
  {
    title: "Wide-Band Optical Fibre System for Investigation of MEMS and NEMS Deflection",
    authors: "Artur Wymysłowski, Waldemar Wiejak, Piotr Słupski ",
    journal: "Metrology and Measurement Systems",
    year: 2017,
    link: "https://www.granthaalayahpublication.org/journals/granthaalayah/article/view/IJRG17_A06_396",
  },
  {
    title: "" +
        "200 parts on Quantum",
    authors: "Piotr Słupski ",
    journal: "No journal",
    year: 2018,
    link: "https://www.quora.com/profile/Piotr-S%C5%82upski",
  },
]);
</script>

<template>
  <div class="max-w-4xl mx-auto p-6 text-white rounded-lg shadow-lg mt-5">
    <h2 class="text-3xl font-bold text-center mb-6">📜 {{$t("Papers")}}</h2>
    <ul class="space-y-6 mt-10">
      <li v-for="(paper, index) in papers" :key="index" class="p-8 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition">
        <h3 class="text-xl font-semibold">{{ paper.title }}</h3>
        <p class="text-gray-400"><strong>{{ $t("Authors:") }}</strong> {{ paper.authors }}</p>
        <p class="text-gray-400"><strong>{{ $t("Published in:") }}</strong> {{ paper.journal }} ({{ paper.year }})</p>
        <a :href="paper.link" target="_blank" class="mt-2 inline-block text-blue-400 hover:underline">
          🔗 {{$t("View Paper")}}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* You can add more styling if needed */
</style>
