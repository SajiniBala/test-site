// document.getElementById('my-button').addEventListener('click', function() {
//     window.parent.postMessage('buttonClicked', '*');
//   });
  

var button = document.getElementById('ga-button');
if (button) {
  button.addEventListener('click', function() {
    window.parent.postMessage('buttonClicked', '*');
   
  });
}

 
// const buttonElement = document.getElementById('ga-button');

// buttonElement.addEventListener('click', () => {
//   const data = {
//     type: 'buttonClick',
//     data: {
//       buttonLabel: 'ga btn-label',
//     },
//   };

//   // Send a message to the parent window (the React app)
//   window.parent.postMessage(data, '*');
//   console.log('iframe button clicked -inside'); // This line logs the message to the console
// });

      
  