//Dark mode function

var content = document.getElementsByTagName('body')[0];
        var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            darkMode.classList.toggle('active');
            content.classList.toggle('dark');  
        })




        // const form = document.querySelector('.song-form');
// form.addEventListener('click', runEvent);
// // document.body.addEventListener('click', runEvent);
// function runEvent(e){
   
//         console.log('working');

    
// }
  
//  const fun = document.getElementById('title').addEventListener('keypress', gText);
// // //   document.getElementById('title').addEventListener('')
//   function gText(e){
// console.log(e.target.value);
//   }

// Add song





class Song{
    constructor(title){
      this.title = title;
    }
  }









  class UI{
    addSongToList(song){
      const list = document.getElementById('song-list');
      //Create tr element
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${song.title}</td>
      <td><a href = "#" class= "delete" > X </a></td>`;
      list.appendChild(row);
    }
}
//     showAlert(message , className){
//       const div = document.createElement('div');
//       div.className = `alert ${className}`;
//       div.appendChild(document.createTextNode(message));
//       //Get Parent
//       const container = document.querySelector('.container');
//       const form = document.querySelector('#form');
//       container.insertBefore(div , form);
  
//       setTimeout(function(){
//           document.querySelector('.alert').remove();
//         }, 3000);
      
  
//     }
//     deleteSong(target){
//       if(target.className === 'delete'){
//         target.parentElement.parentElement.remove();
//     }
      
//     }
  
//     clearFields(){
//       document.getElementById('title').value = '';
  
//     }
//   }
  
//   //Local Storage Book
//   class Store{
//     static geSongs(){
//       let songs;
//       if(localStorage.getItem('songs') === null){
//         songs = [];
//       }
//       else{
//         books = JSON.parse(localStorage.getItem('songs') ) ;
//       }
//     return songs;
//      }
   
//     static displaySong(){
//   const songs= Store.getSongs();
//   songs.forEach(function(song){
//     const ui = new UI;
  
//     ui.addBookToList(song);
//   })
   
//      }
   
//     static addSong(song){
//       const songs = Store.getBooks();
//      songs.push(song);
//       localStorage.setItem('songs',JSON.stringify(songs))
//      }
   
//     static removeBook(title){
//       const songs = Store.getBooks();
//       books.forEach(function(song,index){
//         if(song.title== title){
//           songs.splice(index,1);
//         }
//       });
//       localStorage.setItem('songs',JSON.stringify(songs))
//      }
//    }
//   //DOM Load Evene
//   document.addEventListener('DOMContentLoaded', Store.displaySong);
//   // document.addEventListener('DOMContentLoaded', Store.deleteBook)
  
  
  //Event Listner
  document.getElementById('song-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    
    //Instantiate Book
    const song = new Song(title);
  
    //Instantite UI
    const ui = new UI();
    // console.log(ui);
  
    //Validate
    // if(title == '' ){
    //    //Error alert
    //    ui.showAlert("Please field in the fields", 'error');
    // }
    // else{
  
    //Add Book to list
    ui.addSongToList(song);
    e.preventDefault();   
  });
  
//     // store in LC
//     Store.addSong(song);
  
//     //Show success
//     ui.showAlert('Book Added', 'success');
//     //Clear Fields
//     ui.clearFields();
  
        
//   }
  
//     // console.log(title,author,isbn);
//     e.preventDefault();   
//   });
  
  
  
//   //Event listner for delete book
//   document.getElementById('song-list').addEventListener('click', function(e){
  
//     const ui = new UI();
  
//     ui.deleteBook(e.target);
  
  
//     ui.showAlert('Book Removed' , 'success');
//   //Remove from Local Storage
//   Store.removeSong(e.target.parentElement.textContent);
//     e.preventDefault();
//   });