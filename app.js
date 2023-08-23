const observer =new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('right');
        }else{
            entry.target.classList.remove('right');
        }
    });
});
const hiddenElements =document.querySelectorAll('.left');
hiddenElements.forEach((el)=>observer.observe(el));



const ub =new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('down');
        }else{
            entry.target.classList.remove('down');
        }
    });
});
const upDown =document.querySelectorAll('.up');
upDown.forEach((el)=>observer.observe(el));


