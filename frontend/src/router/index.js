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
    path: '/service/cloudexit',
    name: 'cloudexit',
    component: DefaultView,
    redirect: '/services/cloud-migration'
  },
  {
    path: '/service/ai',
    name: 'ai',
    component: DefaultView,
    redirect: '/services/ai-assistant'
  },
  {
    path: '/service/3d',
    name: 'three',
    component: DefaultView,
    redirect: '/services/3d-visualization'
  },
  {
    path: '/service/backup',
    name: 'backup',
    component: DefaultView,
    redirect: '/services/data-backup'
  },
  {
    path: '/service/mission',
    name: 'mission',
    component: DefaultView,
    redirect: '/services/mission-critical'
  },
  {
    path: '/service/diligence',
    name: 'diligence',
    component: DefaultView,
    redirect: '/services/due-diligence'
  },
  {
    path: '/service/appraisal',
    name: 'appraisal',
    component: DefaultView,
    redirect: '/services/tech-appraisal'
  },
  {
    path: '/service/cuo',
    name: 'cuo',
    component: DefaultView,
    meta: {
      title: 'Chief Upgrade Officer - Pryzm.at',
      description: 'Upgrade without the waste. Personal purchasing consultant for engineers and founders. Optimize your tech, car, and office setup for long-term value.',
      keywords: 'personal tech consultant, BMW upgrade advisor, durable PC build service, tech upgrade advisor, purchasing consultant, anti-waste purchasing'
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
