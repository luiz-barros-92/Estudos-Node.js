import express from 'express';
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

export default app;