const lang = {};
lang['Home'] = 'Home';
lang['About'] = 'About';
lang['Learn More'] = 'Learn more';


lang.get = function(str) {
  return lang[str];
};

export default lang;
