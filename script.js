const markAsDone = document.querySelector('.toggelMessageStatus');
const unreadMessageNumber = document.querySelector('.unreadMessageNumber');
const unreadMessage = document.querySelectorAll('.messageBg');

markAsDone.addEventListener('click' , function(){
    unreadMessageNumber.classList.add('hidden');
    unreadMessage.forEach((unreadMessage) =>{
        unreadMessage.classList.add('messageRead');
    });
})

markAsDone.classList.add('headerRightSection');