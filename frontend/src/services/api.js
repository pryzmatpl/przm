import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:9011';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default {
  // Demo requests
  submitDemoRequest(data) {
    return api.post('/demo-request', data);
  },
  
  // Contact form
  submitContactForm(data) {
    return api.post('/contact', data);
  },
  
  // Newsletter signup
  subscribeToNewsletter(email) {
    return api.post('/newsletter', { email });
  },
  
  // Get services
  getServices() {
    return api.get('/services');
  },
  
  // Health check
  healthCheck() {
    return api.get('/health');
  }
}; 