const toggle = document.querySelectorAll('#toggle')
const basic = document.querySelector('.basic-title')
const pro = document.querySelector('.pro-title')
const master = document.querySelector('.master-title')



toggle.forEach(function(checkbox) {
    checkbox.addEventListener('change', function () {
        if (basic) basic.textContent = checkbox.checked ? "19.99" : "199.99";
        if (pro) pro.textContent = checkbox.checked ? "24.99" : "249.99";
        if (master) master.textContent = checkbox.checked ? "39.99" : "399.99";
    });
});


