var easy = document.getElementsByClassName("far fa-star");
var medium = document.getElementsByClassName("fas fa-star-half-alt");
var hard = document.getElementsByClassName("fas fa-star");

Array.from(easy).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const easy = parseFloat(this.parentNode.childNodes[2].innerText)
        console.log('wut', this.parentNode.childNodes[2].innerText)
        fetch('fried', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'easy': easy
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(medium).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const med = parseFloat(this.parentNode.childNodes[2].innerText)
        console.log(name)
        fetch('fried/med', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'med':med
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(hard).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const hard = parseFloat(this.parentNode.childNodes[2].innerText)
        console.log("hey", hard)
        fetch('fried/hard', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'hard': hard
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
        //  window.location.reload(true)
        })
      });
});

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
