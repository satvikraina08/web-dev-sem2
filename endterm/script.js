function checkArmstrong() {
        // 1. Get the input value as text to easily count digits
        const inputString = document.getElementById("numInput").value;
        
        // Validation for empty input
        if (inputString === "") {
            document.getElementById("result").innerText = "Please enter a valid number.";
            return;
        }

        const originalNumber = parseInt(inputString);
        const numberOfDigits = inputString.length;
        let sum = 0;
        let temp = originalNumber;

        // 2. Loop to calculate the sum of digits raised to the power
        while (temp > 0) {
            let remainder = temp % 10;
            sum += Math.pow(remainder, numberOfDigits);
            temp = Math.floor(temp / 10);
        }

        // 3. Compare the sum with the original number and display the result
        if (sum === originalNumber) {
            document.getElementById("result").innerText = originalNumber + " is an Armstrong number! 🎉";
            document.getElementById("result").style.color = "green";
        } else {
            document.getElementById("result").innerText = originalNumber + " is NOT an Armstrong number.";
            document.getElementById("result").style.color = "red";
        }

 }