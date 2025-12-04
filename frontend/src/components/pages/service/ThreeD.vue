<script setup>
import WelcomeBox from '@c/fragments/WelcomeBox.vue';

defineOptions({
  name: 'ThreeDServicePage'
});
</script>

<template>
  <div class="blog-post-page p-6 md:p-10">
    <WelcomeBox headingStr="3D Services" message="Enable Creation" />

    <!-- Main Content -->
    <article class="max-w-4xl mx-auto pt-8">
      <!-- Introduction -->
      <section class="bg-glass p-8 rounded-xl mb-8">
        <p class="text-xl text-gray-300 leading-relaxed mb-6">
          Turn imagination into reality with our precision 3D scanning and printing services. Whether you're capturing intricate details for digital preservation or bringing prototypes to life, we offer cutting-edge solutions for industry, art, and engineering.
        </p>
        <p class="text-lg text-gray-400 leading-relaxed">
          From concept to creation, make your ideas tangible. Rooted in research environments where precision matters, we understand what it takes to bridge the gap between digital design and physical reality.
        </p>
      </section>

      <!-- The Capability -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">Precision 3D: From Digital to Physical</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            3D Services bridge the gap between digital design and physical reality. We scan existing objects with precision, print prototypes with accuracy, and enable creation that wasn't possible before. Whether it's research prototypes, industrial parts, or artistic creations—we make it real.
          </p>
          <p class="text-gray-300 leading-relaxed">
            In research environments, we've used 3D services for everything from custom lab equipment to precision components. That same precision applies to your projects. From researchers towards tech businesses: we deliver 3D solutions that work.
          </p>
        </div>
      </section>

      <!-- Services -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">What We Offer</h2>
        <div class="bg-glass p-6 rounded-xl">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gray-800/50 p-5 rounded-lg border border-cyan-500/20">
              <h3 class="text-xl font-bold text-cyan-400 mb-3">3D Scanning</h3>
              <p class="text-gray-300 text-sm mb-3">
                Capture real-world objects with precision. High-resolution scanning that preserves intricate details, complex geometries, and fine textures. Perfect for reverse engineering, digital preservation, and quality control.
              </p>
              <ul class="text-gray-400 text-sm space-y-1">
                <li>• High-resolution capture</li>
                <li>• Complex geometry handling</li>
                <li>• Texture mapping</li>
                <li>• CAD-ready output</li>
              </ul>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-cyan-500/20">
              <h3 class="text-xl font-bold text-cyan-400 mb-3">3D Printing</h3>
              <p class="text-gray-300 text-sm mb-3">
                Bring digital designs to life. Precision printing in multiple materials, from prototypes to production parts. Rapid iteration, custom geometries, and materials that match your requirements.
              </p>
              <ul class="text-gray-400 text-sm space-y-1">
                <li>• Multiple materials</li>
                <li>• High precision</li>
                <li>• Rapid prototyping</li>
                <li>• Production parts</li>
              </ul>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-cyan-500/20">
              <h3 class="text-xl font-bold text-cyan-400 mb-3">Design & Modeling</h3>
              <p class="text-gray-300 text-sm mb-3">
                Create 3D models from scratch or optimize existing designs. CAD modeling, mesh optimization, and design for manufacturing. Models that are ready for both digital and physical use.
              </p>
              <ul class="text-gray-400 text-sm space-y-1">
                <li>• CAD modeling</li>
                <li>• Mesh optimization</li>
                <li>• Design for manufacturing</li>
                <li>• File format conversion</li>
              </ul>
            </div>
            
            <div class="bg-gray-800/50 p-5 rounded-lg border border-cyan-500/20">
              <h3 class="text-xl font-bold text-cyan-400 mb-3">Consultation</h3>
              <p class="text-gray-300 text-sm mb-3">
                Expert guidance on 3D workflows, material selection, and process optimization. From concept to creation, we help you choose the right approach for your project.
              </p>
              <ul class="text-gray-400 text-sm space-y-1">
                <li>• Workflow design</li>
                <li>• Material selection</li>
                <li>• Process optimization</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Research-Grade Approach -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">Rooted in Research, Built for Production</h2>
        <div class="bg-glass p-6 rounded-xl">
          <p class="text-gray-300 leading-relaxed mb-4">
            At PRZM, we've used 3D services for research applications—custom lab equipment, precision components, experimental prototypes. Where accuracy isn't optional, where materials matter, where precision separates success from failure.
          </p>
          <p class="text-gray-300 leading-relaxed">
            That same rigor applies to your projects. From researchers towards tech businesses: we deliver 3D solutions that bridge the gap between digital design and physical reality. 3D Services isn't just printing—it's enabling creation.
          </p>
        </div>
      </section>

      <!-- Applications -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">Applications</h2>
        <div class="bg-glass p-6 rounded-xl">
          <div class="grid md:grid-cols-3 gap-4">
            <div>
              <h3 class="text-lg font-bold text-cyan-400 mb-2">Research & Development</h3>
              <p class="text-gray-400 text-sm">Custom lab equipment, experimental prototypes, precision components for research applications.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-cyan-400 mb-2">Industrial Manufacturing</h3>
              <p class="text-gray-400 text-sm">Prototypes, jigs, fixtures, and production parts. Rapid iteration and custom geometries.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-cyan-400 mb-2">Art & Design</h3>
              <p class="text-gray-400 text-sm">Artistic creations, architectural models, design prototypes. Bring creative visions to life.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-cyan-400 mb-2">Medical & Dental</h3>
              <p class="text-gray-400 text-sm">Custom medical devices, dental models, prosthetics. Precision that matters for health applications.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-cyan-400 mb-2">Reverse Engineering</h3>
              <p class="text-gray-400 text-sm">Scan existing objects, create digital models, reproduce or improve designs. Capture what exists, create what's needed.</p>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-cyan-400 mb-2">Quality Control</h3>
              <p class="text-gray-400 text-sm">Compare physical parts to digital models, verify dimensions, ensure manufacturing accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section class="mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">How It Works</h2>
        <div class="space-y-4">
          <div class="bg-glass p-6 rounded-xl border-l-4 border-cyan-500">
            <h3 class="text-xl font-bold text-white mb-2">1. Consultation & Planning</h3>
            <p class="text-gray-300">We discuss your project, understand requirements, and recommend the best approach. Scanning, printing, or both—we design a workflow that works.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-cyan-500">
            <h3 class="text-xl font-bold text-white mb-2">2. Capture or Design</h3>
            <p class="text-gray-300">We scan existing objects with precision or create 3D models from your specifications. High-quality digital assets ready for processing.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-cyan-500">
            <h3 class="text-xl font-bold text-white mb-2">3. Processing & Optimization</h3>
            <p class="text-gray-300">We process scans, optimize models, and prepare files for printing. Mesh cleanup, support generation, material selection—all optimized for your project.</p>
          </div>
          
          <div class="bg-glass p-6 rounded-xl border-l-4 border-cyan-500">
            <h3 class="text-xl font-bold text-white mb-2">4. Production & Delivery</h3>
            <p class="text-gray-300">We print with precision, finish as needed, and deliver physical objects that match your digital designs. From concept to creation, complete.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-glass p-8 rounded-xl text-center">
        <h2 class="text-2xl font-bold text-white mb-4">Ready to Enable Creation?</h2>
        <p class="text-gray-300 mb-6">Let's discuss how 3D Services can bridge the gap between your digital designs and physical reality.</p>
        <router-link to="/contact" class="btn-cta inline-block">
          Get in Touch
        </router-link>
      </section>
    </article>
  </div>
</template>

<style scoped>
.blog-post-page {
  min-height: 100vh;
}

h2 {
  @apply text-3xl font-bold text-white mb-6;
}

h3 {
  @apply text-xl font-bold text-white mb-3;
}

p {
  @apply text-lg leading-relaxed;
}
</style>