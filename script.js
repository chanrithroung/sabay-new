const sidebar = document.querySelector('.sidebar');

const btnToggle = document.querySelector('.btn-toggle');

let isShow = false;
btnToggle.addEventListener('click', function(){
    sidebar.style.width = !isShow ?  '200px' : '0px';
    isShow = !isShow;
} );