/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [{
        title: "Notepy",
        authors: "Mirko Rovere",
        conferences: "Notepy is a full-featured Notepad Python app",
        researchYr: 2021,
        citebox: "https://github.com/Mirko-r/Notep",
        image: "https://github.com/Mirko-r/Notepy/raw/main/notepy2-5.jpg",
        abstract: "https://mirko-r.github.io/notepy/index.html",
    },

    {
        title: "Dotfiles",
        authors: "Mirko Rovere",
        conferences: "Backup, Restore, Learn, Share",
        researchYr: 2021,
        citebox: "https://github.com/Mirko-r/extractor",
        image: "https://camo.githubusercontent.com/d2a503d4c4b870701247e650d85aebf94a770482217428c8e15c1bd6a2b31c8a/68747470733a2f2f74682e62696e672e636f6d2f74682f69642f4f49502e6937656f5a346b4d4c7543654a4f78756c456d313367486144423f7069643d496d674465742672733d31",
        abstract: "https://mirko-r.github.io/404.html",
    },

    {
        title: "Extractor",
        authors: "Mirko Rovere",
        conferences: "Extractor is a cli Linux utility to extract one or more archives from the terminal",
        researchYr: 2020,
        citebox: "https://github.com/Mirko-r/extrattor",
        image: "https://github.com/Mirko-r/extrattor/raw/master/Extrattor1.0.png",
        abstract: "https://mirko-r.github.io/404.html",
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
            citebox,
            abstract
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
                        
                            <a href="${abstract}" style="color:white;">
                            <button class="button button-accent button-small text-right button-abstract " type="button" >
                            SITE
                            </button>
                            </a>
                            &nbsp;&nbsp;&nbsp;
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
