import {defineComponent} from 'vue';

import lang_en from '@/i8n/en.js';

export default {
  $t: function(str) {
    return lang_en.get(str) ?? str;
  },
};
