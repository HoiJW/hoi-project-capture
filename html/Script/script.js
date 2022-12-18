//select the form that i need 
const formEl = document.querySelector('form');

// add eventlisteer to the from (when user sumbit it )
formEl.addEventListener('submit', function(event){
    event.preventDefault();

    //collect user data:
    const userComment = document.querySelector('#yourComment').value;
    const userName = document.querySelector('#displayName').value;
    
    //new div upon submit
    const newCommentDiv = document.createElement('div');
    newCommentDiv.classList.add('user-post');
    
    //hard code out the style and element of div of user pics ,p>date and save space for p>comment
    //image div
    const userPics = document.createElement('div');
    userPics.classList.add('user-pic');
    //add a varible for placeholder image numbers of last digit on url
    let a = Math.floor(Math.random() * 16)+75;
    userPics.innerHTML = `<img src="https://placedog.net/${a}/80" alt="user:${userName}">`;//plug in user-pic div
    
    //set locale posting time
    const date = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const currentDate = new Date().toLocaleDateString(undefined, date);




    //comment div
    const userCommetContanier = document.createElement('div');
    userCommetContanier.classList.add('user-comment');
    const userInfo =`<p class="comment-date">${currentDate} by ${userName}</p>
    <p>${userComment}</p>`;
    userCommetContanier.innerHTML = userInfo;//plug in comment div into user-comment div

    newCommentDiv.appendChild(userPics);
    newCommentDiv.appendChild(userCommetContanier);
    //plug in the user vale in a div - user-post

    //select the pararent div where we want to insert the user-post div
    const commentSection = document.querySelector('.user-value');
    commentSection.appendChild(newCommentDiv);

    //let user knows the commet has been sent out
    alert("You've replayed to this lovely blog 💖");

    formEl.reset()
});
