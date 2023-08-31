const calcy = () => {
    let eng = document.getElementById('eng').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = "";


    let totalnum = parseFloat(eng) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    // alert(totalnum);

    let perc = (totalnum / 400) * 100;
    // alert(perc);

    if (perc <= 100 && perc >= 80) {
        grades = 'A';
    }
    else if (perc <= 79 && perc >= 60) {
        grades = 'B';
    }
    else if (perc <= 59 && perc >= 40) {
        grades = 'C';
    }
    else {
        grades = 'D';
    }

    if (perc >= 39.5) {
        document.getElementById('showdata').innerHTML = ` Out of 400 your total is ${totalnum} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else {
        document.getElementById('showdata').innerHTML = ` Out of 400 your total is ${totalnum} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
}