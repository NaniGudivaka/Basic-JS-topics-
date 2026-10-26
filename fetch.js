async function userDetails() {

  try {

    const response =
      await fetch("http://localhost:3000/");

    const text =
      await response.text();

    console.log(text);

  } catch(error) {

    console.log(error);

  }

}

userDetails();