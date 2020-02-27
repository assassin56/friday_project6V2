import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { Doc } from './doctor.js';


$(document).ready(function () {
  $("form#docSearch").submit(function(event) {
    event.preventDefault();
    const name = $("#inputDoc").val();

    (async () => {
      let doctor = new Doc;
      let response = await doctor.findDoctor(name, location);

      fetchElements(response);
    })(); 

    let fetchElements = function (response) {
      if (response === false) {
        $("#output").text('Sorry, there was an error in handling your request.');
      } else if ( response === 0) {
        $("ul#docResult").text('There are no results to display at this time.');
      } else if (response.data.length > 0) {
        for (let i = 0; i <= response.data.length; i++) {
          response.data.forEach(function(doctor) {
            $("ul#docResult").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} <br> ${doctor.practices[i].visit_address.city} <br> ${doctor.practices[i].visit_address.state} <br> ${doctor.practices[i].visit_address.street} <br> ${doctor.practices[i].visit_address.zip} <br>  Accepts new patients: ${doctor.practices[i].accepts_new_patients} <br> Phone: ${doctor.practices[i].phones[0].number}</li>`);
          });
        }
      }
    };
  });

  $("form#symptoms").submit(function(event) {
    event.preventDefault();
    const currentSymptom = $("#currentSymptom").val();

    (async () => {
      let doctor = new Doc;
      let response = await doctor.symptoms(currentSymptom);
      fetchElements(response);
    })();

    let fetchElements = function (response) {
      if (response === false) {
        $("#output").text('Sorry, there was an error in handling your request.');
      } else if (response.data === 0) {
        $("ul#docResult").append('There are no results to display at this time.');
      } else if (response.data.length > 0) {
        for (let i = 0; i <= response.data.length; i++) {
          response.data.forEach(function (doctor) {
            $("ul#docResult").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} <br> ${doctor.practices[i].visit_address.city} <br> ${doctor.practices[i].visit_address.state} <br> ${doctor.practices[i].visit_address.street} <br> ${doctor.practices[i].visit_address.zip} <br>  Accepts new patients: ${doctor.practices[i].accepts_new_patients} <br> Phone: ${doctor.practices[i].phones[0].number}</li>`);
          }); 
        }
      }
    };
  });
});