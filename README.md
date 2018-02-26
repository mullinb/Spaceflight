# spaceflight

Spaceflight on Three.js  Basic browser implementation of first-person shooter
controls in 3D space, with physics-based projectiles and
animated firing motion. 

After initially experimenting with Three.js’ orbital controls in class, I immediately was motivated to program first-person controls. This I was able to do, but the movement was jittery (moving some number of in-game units instantly rather than smoothly) and a little bit inconsistent.   Fortunately Three.js has customizable flight controls as part of its native library, which are what you see in action here. 

Physi.js, a physics library for Three.js, governs the bullet motion and collision detection. A few rudimentary textures were added to the gun barrel and to the bullets, along with some sounds taken from freesound.org. 

SPICED featured an earlier version of this game in a brief video on their Instagram. I would love to complete this project as 2-player duelling game; my initial efforts to set-up server-side physics authority were frustrated by Three’s client-side focus. I am confident a p2p solution is very possible. 
