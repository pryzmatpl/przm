import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import DefaultView from '@/views/DefaultView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Pryzm.at - Advanced Technological Solutions',
      description: 'Pryzm.at delivers technological troubleshooting and tailored solutions for high-tech industries including defense, healthcare, and finance.',
      keywords: 'technological solutions, data analytics, defense innovation, budget intelligence, AI assistant'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: DefaultView,
    meta: {
      title: 'About Us - Pryzm.at',
      description: 'Learn about Pryzm.at\'s mission to provide cutting-edge technological solutions for high-tech industries.',
      keywords: 'about pryzm.at, tech company, high-tech solutions, innovation'
    }
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: DefaultView,
    meta: {
      title: 'Solutions - Pryzm.at',
      description: 'Explore our tailored technological solutions for defense, healthcare, finance, and government sectors.',
      keywords: 'tech solutions, industry solutions, defense tech, healthcare technology'
    }
  },
  {
    path: '/solutions/:industry',
    name: 'industry-solutions',
    component: DefaultView,
    meta: {
      title: 'Industry Solutions - Pryzm.at',
      description: 'Specialized technological solutions for your industry needs.'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: DefaultView,
    meta: {
      title: 'Services - Pryzm.at',
      description: 'Our comprehensive range of technological services including Budget Intelligence, Orion™ Network Graph, and AI assistance.',
      keywords: 'tech services, budget intelligence, network graph, AI assistant'
    }
  },
  {
    path: '/services/:service',
    name: 'service-detail',
    component: DefaultView,
    meta: {
      title: 'Service Details - Pryzm.at',
      description: 'Learn more about our specialized technological services.'
    }
  },
  {
    path: '/case-studies',
    name: 'case-studies',
    component: DefaultView,
    meta: {
      title: 'Case Studies - Pryzm.at',
      description: 'Real-world examples of how our technology solutions have helped clients achieve exceptional results.',
      keywords: 'tech case studies, success stories, client solutions, results'
    }
  },
  {
    path: '/case-studies/:id',
    name: 'case-study-detail',
    component: DefaultView,
    meta: {
      title: 'Case Study - Pryzm.at',
      description: 'Detailed case study of our client solution implementation.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: DefaultView,
    meta: {
      title: 'Contact Us - Pryzm.at',
      description: 'Get in touch with our team to discuss how Pryzm.at can address your technological challenges.',
      keywords: 'contact pryzm.at, tech support, consultation'
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: DefaultView,
    meta: {
      title: 'Our showcase',
      description: 'Delivered projects and engineering history',
      keywords: 'tech demo, service demonstration, product trial, portfolio'
    }
  },
  {
    path: '/demo',
    name: 'demo',
    component: DefaultView,
    meta: {
      title: 'Request a Demo - Pryzm.at',
      description: 'Schedule a personalized demonstration of our technological solutions and services.',
      keywords: 'tech demo, service demonstration, product trial'
    }
  },
  {
    path: '/demo-confirmation',
    name: 'demo-confirmation',
    component: DefaultView,
    meta: {
      title: 'Demo Request Confirmed - Pryzm.at',
      description: 'Your demo request has been received. Our team will contact you shortly.'
    }
  },
  {
    path: '/quote',
    name: 'quote',
    component: DefaultView,
    meta: {
      title: 'Request a Quote - Pryzm.at',
      description: 'Get a personalized quote for our technological solutions and services.',
      keywords: 'quote, pricing, consultation, tech services'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: DefaultView,
    meta: {
      title: 'Blog - Pryzm.at',
      description: 'Insights, news, and thought leadership on technological innovation and industry trends.',
      keywords: 'tech blog, industry insights, innovation, tech news'
    }
  },
  {
    path: '/careers',
    name: 'careers',
    component: DefaultView,
    meta: {
      title: 'Careers - Pryzm.at',
      description: 'Join our team of innovators working on cutting-edge technological solutions.',
      keywords: 'tech careers, jobs, employment, tech positions'
    }
  },
  {
    path: '/service/detailing',
    name: 'detailing',
    component: DefaultView,
    meta: {
      title: 'Code Detailing - Pryzm.at',
      description: 'Remove scratches, bruises and dents from your product\'s code with expert testing and rapid delivery. Transform your codebase from functional to excellent.',
      keywords: 'code refactoring, code testing, code quality, technical debt, containerization'
    }
  },
  {
    path: '/service/cloudexit',
    name: 'cloudexit',
    component: DefaultView,
    meta: {
      title: 'Cloud Exit - Pryzm.at',
      description: 'Move your data on-prem. Leave behind the sky-high costs and scale on your own terms. Break free from vendor lock-in.',
      keywords: 'cloud migration, on-premises, data sovereignty, vendor lock-in, infrastructure migration'
    }
  },
  {
    path: '/service/ai',
    name: 'ai',
    component: DefaultView,
    meta: {
      title: 'On-Premises AI - Pryzm.at',
      description: 'On-premises AI solutions. Harness the power of AI while ensuring full data privacy. Your data, your rules.',
      keywords: 'on-premises AI, private AI, AI infrastructure, data privacy, AI agents'
    }
  },
  {
    path: '/service/3d',
    name: 'three',
    component: DefaultView,
    meta: {
      title: '3D Services - Pryzm.at',
      description: 'Scan or print your reality. Bring concepts to life with precision scanning & 3D printing. From concept to creation.',
      keywords: '3D scanning, 3D printing, rapid prototyping, CAD modeling, reverse engineering'
    }
  },
  {
    path: '/service/backup',
    name: 'backup',
    component: DefaultView,
    meta: {
      title: 'Data Backup - Pryzm.at',
      description: 'Comprehensive data backup solutions for your infrastructure.',
      keywords: 'data backup, disaster recovery, data protection'
    }
  },
  {
    path: '/service/mission',
    name: 'mission',
    component: DefaultView,
    meta: {
      title: 'Mission Critical - Pryzm.at',
      description: 'Mission-critical solutions for high-stakes environments.',
      keywords: 'mission critical, high availability, reliability'
    }
  },
  {
    path: '/service/diligence',
    name: 'diligence',
    component: DefaultView,
    meta: {
      title: 'Due Diligence - Pryzm.at',
      description: 'Objective feedback on technical projects. Cut through inefficiencies and identify waste. No fluff, just facts.',
      keywords: 'technical due diligence, project evaluation, cost analysis, technical audit'
    }
  },
  {
    path: '/service/appraisal',
    name: 'appraisal',
    component: DefaultView,
    meta: {
      title: 'Tech Appraisal - Pryzm.at',
      description: 'Technical appraisal and evaluation services.',
      keywords: 'tech appraisal, technology evaluation'
    }
  },
  {
    path: '/service/cuo',
    name: 'cuo',
    component: DefaultView,
    meta: {
      title: 'Chief Upgrade Officer - Pryzm.at',
      description: 'The Sword that Cuts the Gordian Knot in tech. Transform your startup or company from a tangled mess into a streamlined, tuned, working machine. CUO cuts through technical debt and wasted resources.',
      keywords: 'company transformation, startup optimization, tech stack audit, complexity reduction, technical debt, company streamlining, Power Law Risk, investment strategy'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: DefaultView,
    meta: {
      title: 'Page Not Found - Pryzm.at',
      description: 'The page you are looking for could not be found.'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Pryzm.at - Advanced Technological Solutions';
  
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = to.meta.description || 'Pryzm.at delivers technological troubleshooting and tailored solutions for high-tech industries.';
  
  if (to.meta.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = to.meta.keywords;
  }
  
  next();
});

export default router;
