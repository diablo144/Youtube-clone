let bodyHTML = '';
contents.forEach((item) =>{
  bodyHTML+= `
    <div class="video-preview">
      <div class="thumbnail-row">
        <img class="thumbnail" src="${item.thumb}">
        <div class="video-time">
          ${item.time}
        </div>
      </div>
     
      <div class="video-info-grid">
        <div class="channel-picture">
          <img  class="profile-picture"src="${item.channelpicture}">
        </div>
        <div class="video-info">
          <P class="video-title">${item.title}</P>
          <p class="video-author">${item.creator}</p>
          <P class="video-stats">${item.stats}</P>
        </div>
      </div>
    </div>`     
});
document.querySelector('.js-vid-grid').innerHTML=bodyHTML;
console.log(bodyHTML);