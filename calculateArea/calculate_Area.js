// Defining variables and function to calculate area and track grocery expenses

function calculateArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (isNaN(length) || isNaN(width)) {
        document.getElementById('result').innerText = "Please enter valid numbers for length and width.";
        return;
    }

    const area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker() {
    const grocery1 = parseFloat(document.getElementById('grocery1').value) || 0;
    const grocery2 = parseFloat(document.getElementById('grocery2').value) || 0;
    const grocery3 = parseFloat(document.getElementById('grocery3').value) || 0;

    const total = grocery1 + grocery2 + grocery3;

    document.getElementById('groceryResult').innerText = 
        `Total Grocery Amount: ${total}`;
}

