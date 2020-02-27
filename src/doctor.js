import './../src/main.js';

export class Doc {
  async findDoctor (name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);

      if (response.ok && response.status === 200) {
        let postJSON = await response.json();
        return postJSON;
      } else {
        return false;
      }
    } catch(error) {
      return false;
    }
  }


  async symptoms(symptoms) {
    try {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?&query=${symptoms}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);

      if (response.ok && response.status === 200) {
        let postJSON = await response.json();
        return postJSON;
      } else {
        return false;
      }
    } catch(error) {
      return false;
    }
  }
}