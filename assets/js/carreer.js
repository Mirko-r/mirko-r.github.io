AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "StupidaMente podcast 171st on Apple Podcast Italy",
    cardImage: "assets/images/experience-page/aapple.png",
    place: "Apple podcast",
    time: "(August 2021)",
    desp: " On August 16, 2021 StupidaMente moved to 171st position on Apple podcast Italy, in the Society and Culture category",
  },
  {
    title: "Start stage",
    cardImage: "assets/images/experience-page/stage.png",
    place: "Takorabo",
    time: "(June 2021)",
    desp: "on June 28, 2021 I started the internship ",
  },
  {
    title: "StupidaMente podcast elected as one of the emerging podcasts of 2020",
    cardImage: "assets/images/experience-page/emerging.png",
    place: "Il festival del podcasting",
    time: "(June 2021)",
    desp: "On June 12, StupidaMente podcast is elected as one of the emerging podcasts of 2020 with more than ten thousand plays in 7 months!",
  },
  {
    title: "Stupidamente podcast foundation",
    cardImage: "assets/images/experience-page/podcast.png",
    place: "Spotify",
    time: "(November 2020)",
    desp: "When someone hears your voice, it is incredibly personal. They can hear your excitement, your emotion. It can be difficult to convey those things with written words. When someone listens to your voice while exercising at the gym, or driving their car for example, it is the closest thing to having you right there next to them and having a conversation. As your audience listens to more of your episodes, they begin to develop a connection to you. People will begin to like you not just for the content that you share, but for your specific communication style.",
  },
  {
    title: "Start high scool",
    cardImage: "assets/images/experience-page/school.png",
    place: "ITS C.Grassi",
    time: "(Sept, 2018 - Present)",
    desp:"An IT school is the first place where you really learn to code, so what are the best things I've learned?",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Linux LPI 101 - course",
    cardImage: "https://designlooter.com/images/linux-svg-14.png",
    description:
      "Learn Linux from the basics to the LPI certification - Exam 101",
  },
  {
    title: "Linux LPI 102 - course",
    cardImage: "https://designlooter.com/images/linux-svg-14.png",
    description:
      "Learn Linux from the basics to the LPI certification - Exam 102",
  },
  {
    title: "From 0 to ethical hacker -  course",
    cardImage: "assets/images/experience-page/—Pngtree—computer hacker_5418075.png",
    description:
      "",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


