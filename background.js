chrome.commands.onCommand.addListener(function(command) {
  if (command === "playMusic") {
    chrome.tabs.executeScript({
      code: `document.getElementsByClassName("playbutton")[0]?.click();`,
    });
  }
});