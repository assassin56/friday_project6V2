import './../src/main.js';

export class Doc {
  async findDoctor() {
    try {
      let response = await fetch('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${process.env.API_KEY}');

      if (response.ok && response.status === 200) {
        let postJSON = await response.json();
        return postJSON;
      } else {
        postJSON = false;
      }
    } catch(error) {
      return false;
    }
  }


  async symptoms() {
    try {
      let response = await fetch ('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${process.env.API_KEY}');

      if (response.ok && response.status === 200) {
        let postJSON = await response.json();
        return postJSON;
      } else {
        postJSON = false;
      }
    } catch(error) {
      return false;
    }
  }
}