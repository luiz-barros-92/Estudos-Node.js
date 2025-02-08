import app from './config/server.js';

import rotaHome from './app/routes/home.js';
rotaHome(app);

import rotaTutoriais from './app/routes/tutoriais.js';
rotaTutoriais(app);

import rotaProjetos from './app/routes/projetos.js';
rotaProjetos(app);

import rotaLinux from './app/routes/linux.js';
rotaLinux(app);

app.listen(3000, function(){
    console.log('Servidor Online!');
});