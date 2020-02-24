import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doc } from './doctor.js'


$(document).ready(function () {
  $("form#docSearch").submit(function(event) {
    event.preventDefault();
    const name = $("#inputDoc").val();
    const location = $("#inputCity").val();

    (async () => {
      let doc = new Doc();
      let response = await doc.findDoctor(name, location);
    })();
  });
});