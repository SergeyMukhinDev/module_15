const PVALUE = '40+ проектов';

function addP_project() {
    let lengthP_project = document.getElementsByClassName('p_project').length;
    for (let i = 0; i <= lengthP_project; i++) {
        document.getElementsByClassName('p_project')[i].textContent = PVALUE;
    }
}

addP_project();
