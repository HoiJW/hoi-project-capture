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
    userPics.innerHTML = `<img src="../styles/captured-final-assets/comment-2.jpg" alt="user:Julia">`;//plug in user-pic div
    //comment div
    const userCommetContanier = document.createElement('div');
    userCommetContanier.classList.add('user-comment');
    const userInfo =`<p class="comment-date">Wednesday October 10th, 2022 by ${userName}</p>
    <p>${userComment}</p>`;
    userCommetContanier.innerHTML = userInfo;//plug in comment div into user-comment div

    newCommentDiv.appendChild(userPics);
    newCommentDiv.appendChild(userCommetContanier);
    //plug in the user vale in a div - user-post

    //select the pararent div where we want to insert the user-post div
    const commentSection = document.querySelector('.user-value');
    commentSection.appendChild(newCommentDiv);



    formEl.reset()
});
