const menuItems=[ "Hi world"];

exports.findAll = () => {
   return new Promise(resolve => resolve(menuItems));
 };
