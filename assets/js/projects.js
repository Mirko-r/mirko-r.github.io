/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
   /* {
        title: "SeaShell",
        authors: "Mirko Rovere",
        conferences: "UNIX Shell in C",
        researchYr: 2022,
        citebox: "https://github.com/Mirko-r/SeaShell",
        image: "#",
      },*/
  {
    title: "MdEdit",
    authors: "Mirko Rovere",
    conferences: "Markdown editor in NodeJs and Typescript",
    researchYr: 2021,
    citebox: "https://github.com/Mirko-r/MdEdit",
    image: "https://github.com/Mirko-r/MdEdit/blob/master/img/2021-11-18_13-11-1637239720.jpg?raw=true",
  },
  {
    title: "baracle",
    authors: "Mirko Rovere",
    conferences: "Let's make a text editor like in the 70's",
    researchYr: 2021,
    citebox:"https://github.com/Mirko-r/baracle",
    image: "https://github.com/Mirko-r/baracle/raw/master/img/baracle.png",
  },
  {
        title: "Notepy",
        authors: "Mirko Rovere",
        conferences: "Notepy is a full-featured Notepad Python app",
        researchYr: 2021,
        citebox: "https://github.com/Mirko-r/Notepy",
        image: "https://github.com/Mirko-r/Notepy/raw/main/img/Notepy.jpg",
    },
    {
        title: "Extrattor",
        authors: "Mirko Rovere",
        conferences: "Manage multiple archives from terminal",
        researchYr: 2020,
        citebox: "https://github.com/Mirko-r/extrattor",
        image: "https://github.com/Mirko-r/extrattor/raw/master/Extrattor1.0.png",
    }

];
AOS.init();
const fillData = () => {
    let output = "";
    research.forEach(
        ({
            image,
            title,
            authors,
            conferences,
            researchYr,
            citebox
        }) =>
        (output += `
            <tr data-aos="zoom-in-left">
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a>
                    <div> ${authors} </div> <div class="rConferences"> ${conferences}
                        <div class="researchY">${researchYr}</div>
                    </div>

                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%">
                            <a href="${citebox}" style="color:white;">
                            <button class="button button-accent button-small text-right button-abstract " type="button" >
                            GITHUB
                            </button>
                            </a>

                    </div>
                </td>
            </tr>`)
    );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);
