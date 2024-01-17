document.addEventListener('DOMContentLoaded', () => {
  var saveButton = document.getElementById('saveButton');

  saveButton.addEventListener('click', () => {
    var controlInput = document.getElementById('controlInput');
    var customControl = controlInput.value;

    chrome.storage.sync.set({ 'customControl': customControl }, () => {
      console.log('Custom control saved: ' + customControl);
      window.close();
    });
  });
});
