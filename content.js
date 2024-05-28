

// Function to change profile pictures
function changeProfilePictures(newProfilePicURL) {

    // get all the required images into variables...

    const profilePictures1 = document.querySelectorAll(
      'img.avatar.member.EntityPhoto-circle-2.evi-image.ember-view'
    );
  
    const profilePictures2 = document.querySelectorAll(
      'img.ivm-view-attr__img--centered.EntityPhoto-circle-0.evi-image.lazy-image.ember-view'
    );
  
    const profilePictures3 = document.querySelectorAll(
      'img.ivm-view-attr__img--centered.EntityPhoto-square-3.update-components-actor__avatar-image.evi-image.lazy-image.ember-view'
    );
  
    const profilePictures4 = document.querySelectorAll(
      'img.ivm-view-attr__img--centered.EntityPhoto-circle-3.update-components-actor__avatar-image.evi-image.lazy-image.ember-view'
    );
  
    const profilePictures5 = document.querySelectorAll(
      'img.ivm-view-attr__img--centered.evi-image.lazy-image.ember-view.EntityPhoto-circle-2'
    );
  
    const profilePictures6 = document.querySelectorAll(
      'img.EntityPhoto-circle-3-ghost-person.ivm-view-attr__ghost-entity.update-components-actor__avatar-image'
    );
  
    const profilePictures7 = document.querySelectorAll(
      'img.ivm-view-attr__img--centered.EntityPhoto-circle-1.evi-image.lazy-image.ember-view'
    );
  
    // combine into array .......
    const profilePictures = [
      ...profilePictures1,
      ...profilePictures2,
      ...profilePictures3,
      ...profilePictures4,
      ...profilePictures5,
      ...profilePictures6,
      ...profilePictures7
    ];
  
    // set new picture................
    profilePictures.forEach(pic => {
      pic.src = newProfilePicURL;
      pic.srcset = newProfilePicURL;
    });
  }
  
  // Get the stored image URL and run the function
  chrome.storage.sync.get('newProfilePicURL', function(data) {
    if (data.newProfilePicURL) {
      changeProfilePictures(data.newProfilePicURL);
    }
  });
  
  setInterval(() => {
    chrome.storage.sync.get('newProfilePicURL', function(data) {
      if (data.newProfilePicURL) {
        changeProfilePictures(data.newProfilePicURL);
      }
    });
  }, 3000);
  