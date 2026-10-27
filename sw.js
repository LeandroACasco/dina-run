// Dina Run se mudó a kiut-studio.github.io. Este archivo reemplaza a la copia sin conexión vieja:
// borra sus cachés y se da de baja, así el teléfono abre la página de mudanza (las frutillas no se tocan).
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k.indexOf('sofi-runner-')===0}).map(function(k){return caches.delete(k)}))}).then(function(){return self.registration.unregister()}).then(function(){return self.clients.matchAll({type:'window'})}).then(function(cs){cs.forEach(function(c){c.navigate(c.url)})}))});
