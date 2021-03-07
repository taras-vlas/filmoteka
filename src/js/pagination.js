const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const firstPageRef = document.querySelector('.first-button');
const lastPageRef = document.querySelector('.last-button');
const paginationRef = document.querySelector('.pagination-container');
const rightArrowRef = document.querySelector('.arrow-right');
const leftArrowRef = document.querySelector('.arrow-left');
const prevDotsRef = document.querySelector('#previous');
const afterDotsRef = document.querySelector('#after');

console.dir(prevDotsRef);

// =========================

paginationRef.addEventListener('click', onPaginationClick);
let currentPage = 1;

let btns = document.querySelectorAll('.pagination-button');

prevDotsRef.hidden = true;
leftArrowRef.hidden = true;
firstPageRef.hidden = true;

function onPaginationClick(event) {

    if (Number(event.target.textContent)) {
        currentPage = event.target.textContent;
    }

    console.log(event.target);
   
    prevDotsRef.hidden = true;
    afterDotsRef.hidden = true;

    if (event.target.classList.contains('pagination-button')) {
        btns.forEach((el) => el.classList.remove('current'))
        event.target.classList.add('current');
    };

    if ((event.target.tagName === 'SVG' || event.target.classList.contains('arrow-right')) && currentPage < 999) {
        btns.forEach((el) => el.classList.remove("current"))
        btn1Ref.classList.add("current");
        btn1Ref.textContent = Number(btn1Ref.textContent) + 5;
        btn2Ref.textContent = Number(btn2Ref.textContent) + 5;
        btn3Ref.textContent = Number(btn3Ref.textContent) + 5;
        btn4Ref.textContent = Number(btn4Ref.textContent) + 5;
        btn5Ref.textContent = Number(btn5Ref.textContent) + 5;
        currentPage = btn1Ref.textContent;
    };

    if (event.target.classList.contains('arrow-left') && currentPage >= 5) {
        btns.forEach((el) => el.classList.remove('current'))            
        btn1Ref.textContent = Number(btn1Ref.textContent) - 5;
        btn2Ref.textContent = Number(btn2Ref.textContent) - 5;
        btn3Ref.textContent = Number(btn3Ref.textContent) - 5;
        btn4Ref.textContent = Number(btn4Ref.textContent) - 5;
        btn5Ref.textContent = Number(btn5Ref.textContent) - 5;
        btn5Ref.classList.add('current'); 
        currentPage = btn5Ref.textContent;
    };

     if (Number(currentPage) > 5) {
        leftArrowRef.hidden = false;
        prevDotsRef.hidden = false;
        firstPageRef.hidden = false;
     } else {
         leftArrowRef.hidden = true;
        prevDotsRef.hidden = true;
        firstPageRef.hidden = true; 
    };
    
//   if (Number(currentPage) > 995) {
//     rightArrowRef.hidden = false;
//         afterDotsRef.hidden = false;
//         lastPageRef.hidden = false;
//      } else {
//          rightArrowRef.hidden = true;
//         afterDotsRef.hidden = true;
//         lastPageRef.hidden = true; 
//     };

     console.log(currentPage)
}
