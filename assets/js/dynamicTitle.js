window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Come back";

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      toggle();
    } else {
      document.title = pageTitle;
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "/assets/images/favicon.png";
    }
  });
  

  function toggle() {
    if (document.title === attentionMessage) {
        document.title = pageTitle;
        favicon.href = "/assets/images/favicon.png";
    } else {
        document.title = attentionMessage;
        favicon.href = "https://github.com/Mirko-r/mirko-r.github.io/blob/main/assets/images/folded.png?raw=true";
    }
  }   
};