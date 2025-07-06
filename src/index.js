function displayPoem(response){
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    }



function generatePoem(event) {
  event.preventDefault();


  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "03a1760f00b35ee83btdd2da764o002b";
  let context = "You are a romantic poem expert and love to write short poem and separate each line with <br />. Your mission is to generate a 4 line poem. Make sure to follow user instructions. Do not include a title to a poem. Sign the poem with 'SheCodes AI' inside a <strong></strong> element";
  let promt = ` User instructions: Generate a Poem about ${instructionsInput.value}`;
  let apiURL =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
