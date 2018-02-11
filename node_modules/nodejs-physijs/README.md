THREE.js + physijs on node.js
=============================

Run the physijs physics engine server-side with node.js

Quick Start
-----------
To use physijs on the server side

```javascript
const NodePhysijs = require('nodejs-physijs');
const THREE = NodePhysijs.THREE;
const Ammo = NodePhysijs.Ammo;
const Physijs = NodePhysijs.Physijs(THREE, Ammo);
```


The libraries in "browser/libs" (in github) are the original
ones from three/physijs (except the log).
But the libraries in "nodejs/libs" are modified to work with node.js.
