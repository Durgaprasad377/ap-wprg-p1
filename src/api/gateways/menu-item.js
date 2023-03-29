const menuItems=[ "Hi"];

exports.findAll = () => {
   return new Promise(resolve => resolve(menuItems));
 };
