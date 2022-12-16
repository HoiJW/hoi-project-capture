//select the form that i need 
const formEl = document.querySelector('form');
// add eventlisteer to the from (when user sumbit it )
formEl.addEventListener('submit', function(event){
    event.preventDefault();
    
    const userComment = document.querySelector('#yourComment').value;
    /* const userName = document.querySelector('#displayName').value; */
    
    //genrate a date for the comment 
    // collect the data (users comment)
    const postedComment = document.querySelector('.test');
    // post it(apen to the user commet section) on the user comment section on hmtl (result)
    postedComment.innerText = userComment;
    formEl.reset()
});
// 3 to do , user name into pics alt text , genarate the date , appen the comment 