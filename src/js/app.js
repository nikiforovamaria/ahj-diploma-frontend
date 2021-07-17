import API from './API';
import Controller from './Controller';
import Layout from './Layout';
import SVG from './svg';

const app = new Controller(new Layout(new SVG()), new API());

app.init();
