document.getElementById('saveButton').addEventListener('click', function() {
    const imageUrl = document.getElementById('imageUrl').value;
    chrome.storage.sync.set({ newProfilePicURL: imageUrl }, function() {
      console.log('Image URL saved:', imageUrl);
    });
});
  