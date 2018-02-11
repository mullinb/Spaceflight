const NodePhysijs = require('nodejs-physijs');
const THREE = NodePhysijs.THREE;
const Ammo = NodePhysijs.Ammo;
require('three-fly-controls')(THREE);
const Physijs = NodePhysijs.Physijs(THREE, Ammo);


module.exports = function(id) {
    console.log(id)
}
