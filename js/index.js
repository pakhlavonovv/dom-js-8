// TASK 1

// const res = document.getElementById('save')
// res.addEventListener("click", function (event) {
//     event.preventDefault()
//     const width = document.getElementById('width').value
//     const height = document.getElementById('height').value
//     const border_radius = document.getElementById('border_radius').value
//     const bgcolor = document.getElementById('bgcolor').value
//     const result = document.getElementById('result')
//     result.style.width = width + "px"
//     result.style.height = height + "px"
//     result.style.borderRadius = border_radius + "px"
//     result.style.backgroundColor =  bgcolor
// })

// TASK 1 END







// TASK 2

// const checkWord = (event)=> {
//     const name = event.target
//     let result = name.value
//     let a = result.split(' ').forEach((el, index) => {
//         document.getElementById("result").innerText = index + 1
//         console.log(index + 1)
//     });
// }

// TASK 2 END







// Task 4

// const fileInput = document.getElementById('fileInput');
// const fileSizeDisplay = document.getElementById('fileSize');

// fileInput.addEventListener('change', function() {
//     const file = fileInput.files[0];

//     if (file) {
//         const fileSizeInKB = (file.size / 1024).toFixed(2);
//         fileSizeDisplay.textContent = `Fayl hajmi: ${fileSizeInKB} KB`;
//     } else {
//         fileSizeDisplay.textContent = 'Fayl hajmi: ';
//     }
// });

// Task 4 END







// Task 5

// const checkBracket = (event) => {
//     const inputText = event.target.value;
//     let openCount = 0;
//     let closeCount = 0;
//     for (let char of inputText) {
//         if (char === '(') {
//             openCount++;
//         } else if (char === ')') {
//             closeCount++;
//         }
//     }
//     document.getElementById('result1').textContent = `Ochiq qavslar soni: ${openCount}`;
//     document.getElementById('result2').textContent = `Yopiq qavslar soni: ${closeCount}`;
// };

// Task 5 END





// Task 3 


// const checkWord = () => {
//     const textAreaContent = document.getElementById('textarea').value.toLowerCase();
//     const searchInput = document.getElementById('search-input').value.toLowerCase();

//     const isWordPresent = textAreaContent.includes(searchInput);
//     const resultElement = document.getElementById('search-result');
//     if (isWordPresent && searchInput !== '') {
//         resultElement.textContent = "So'z matnda mavjud.";
//     } else {
//         resultElement.textContent = "So'z topilmadi.";
//     }
// };


// Task 3 END

