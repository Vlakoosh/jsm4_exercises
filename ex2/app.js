const form = document.forms.calculator;

form.oninput =  () => {
    //get the initial amount of money
    let initial = form.initial.value;

    //get the amount of months
    let months = form.months.options[form.months.options.selectedIndex].value; //can't use valueAsNumber???
    //convert months to a number because storing it as a string feels wrong.
    months = parseInt(months);

    //get amount og years
    let years = months / 12;

    //get the interest (in %) and divide it by 100 to get the decimal
    let interest = form.interest.valueAsNumber / 100;

    //calculate the final amount of money
    let result = calculateResult(initial, interest, years);

    //update the green div element
    let totalHeight = 200;

    let resultBoxBeforeHeight = (result - initial);
    let resultBoxAfterHeight = resultBoxBeforeHeight * (result / initial);
    let percentAfter = resultBoxAfterHeight / (resultBoxAfterHeight + resultBoxBeforeHeight);
    let percentBefore = resultBoxBeforeHeight / (resultBoxAfterHeight + resultBoxBeforeHeight);
    [resultBoxBeforeHeight, resultBoxAfterHeight] = [percentBefore * totalHeight, percentAfter * totalHeight];
    let resultBox = document.getElementById("height-after");
    let beforeBox = document.getElementById("height-before");
    resultBox.style.height = resultBoxAfterHeight + "px";
    beforeBox.style.height = resultBoxBeforeHeight + "px";

    //update the money texts
    const moneyBefore = document.getElementById("money-before");
    moneyBefore.textContent = initial.toString();
    const moneyAfter = document.getElementById("money-after");
    moneyAfter.textContent = result.toString();
}

// initial: the initial money sum
// interest: e.g. 0.05 means 5% per year
// years: how many years to wait
function calculateResult(initial, interest, years){
    return Math.round(initial * (1 + interest) ** years);
}