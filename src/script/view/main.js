import "../component/club-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  //   const searchElement = document.querySelector("#searchElement");
  const searchElement = document.querySelector("search-bar");
  //   const buttonSearchElement = document.querySelector("#searchButtonElement");

  //   const clubListElement = document.querySelector("#clubList");
  const clubListElement = document.querySelector("club-list");

  //   const onButtonSearchClicked = () => {
  //     const dataSource = new DataSource(renderResult, fallbackResult);
  //     dataSource.searchClub(searchElement.value);
  //   };
  //   Dibuat menjadi seperti dibawah

  //   const onButtonSearchClicked = () => {
  //     DataSource.searchClub(searchElement.value).then(renderResult).catch(fallbackResult);
  //   };
  // Kalau pake async/await cide seperti dibawah
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  //   const renderResult = (results) => {
  //     clubListElement.innerHTML = "";
  //     results.forEach((club) => {
  //   const name = club.name;
  //   const fanArt = club.fanArt;
  //   const description = club.description;
  //   const { name, fanArt, description } = club;

  //   const clubElement = document.createElement("div");
  //   clubElement.setAttribute("class", "club");

  //   clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' + '<div class="club-info">\n' + "<h2>" + name + "</h2>\n" + "<p>" + description + "</p>" + "</div>";

  //       clubElement.innerHTML = `
  //         <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
  //         <div class="club-info">
  //         <h2>${name}</h2>
  //         <p>${description}</p>
  //         </div>`;

  //       clubListElement.appendChild(clubElement);
  //     });
  //   };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);

    // clubListElement.innerHTML = "";
    // clubListElement.innerHTML += '<h2 class="placeholder">' + message + "</h2>";

    // clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  //   buttonSearchElement.addEventListener("click", onButtonSearchClicked);
  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;
