

//Show data;
showData();
//Dark mode function

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function () {
  darkMode.classList.toggle('active');
  content.classList.toggle('dark');
});


//Button Function 
document.getElementById('btn').addEventListener('click', loadData);
function loadData(e) {

  var title = document.getElementById('title');
  if (title.value.includes("youtube")) {
    var change = title.value.replace("watch?v=", "embed/");
title.value = "";
    
  }
  
  document.querySelector("#myFrame").setAttribute('src' , change);
  
 
  let videos = localStorage.getItem("videos");
  if (videos == null) {
    videosObj = [];
  }
  else {
    videosObj = JSON.parse(videos)
  }
  // let myObj = {
  //  change
  // }
  videosObj.unshift(change);
  localStorage.setItem("videos", JSON.stringify(videosObj));
  showData();
  e.preventDefault();

  
  // let changesobj;
  // if (localStorage.getItem('changes') == null) {
    
  //    changesobj = [];
  //   console.log(typeof changesobj)
  // }
  // else {
  //   changesobj = JSON.parse(localStorage.getItem('changes'));
  //   console.log(typeof changesobj)
  //   console.log(changesobj)
  // }

  // changesobj.unshift(change);
  // localStorage.setItem('changes', JSON.stringify(changesobj));
  // change = "";
 
}




//Show data
function showData() {
  let videos = localStorage.getItem("videos");
  if (videos == null) {
    videosObj = [];
  }
  else {
    videosObj = JSON.parse(videos)
  }
  // document.getElementById('song-list').innerHTML = "";
  let htmlStr=''
videosObj.forEach(function (element, index) {
    htmlStr += ` <div class="vid ">  <iframe  src="${element}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
           gyroscope; picture-in-picture" allowfullscreen></iframe>
           <div class="tag_name">
             <h3>${index + 1 } title song</h3></div>
             <i   class="fa-solid fa-xmark" onClick="deleteData(${index})"></i></div>`;
    

  });
  document.getElementById('song-list').innerHTML = htmlStr;
}


function deleteData(index) {
  
  if (localStorage.getItem('videos') === null) {
    videosObj = [];
  }
  else {
    videosObj = JSON.parse(localStorage.getItem('videos'))
  }
  videosObj.splice(index, 1);
  localStorage.setItem('videos', JSON.stringify(videosObj));
  showData();
}





















        // Active color
//  let listVideo = document.querySelectorAll('#song-list .vid');
//  let  songBody = document.querySelector('.song-body iframe');
//  let tag_Name = document.querySelector('.song-body .tag_name');

//  listVideo.forEach(iframe => {
//      iframe.onclick = () =>{
//          listVideo.forEach(vid => vid.classList.remove('active'));
//          iframe.classList.add('active');
//          if(iframe.classList.contains('acive')){
//              let src = iframe.children[0].getAttribute('src');
//              songBody.src = src;
//          }
//      }
//  })