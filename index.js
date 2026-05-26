const express = require("express");
const app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
    const data = req.body.data;

    let even = [];
    let odd = [];
    let alphabets = [];
    let special = [];
    let sum = 0;

    data.forEach(item => {
        if (!isNaN(item)) {
            let num = parseInt(item);
            sum += num;

            if (num % 2 === 0) even.push(item);
            else odd.push(item);
        } 
        else if (/^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item.toUpperCase());
        } 
        else {
            special.push(item);
        }
    });

    // concat string
    let concat = alphabets.join("");
    let reversed = concat.split("").reverse();

    let finalString = "";
    for (let i = 0; i < reversed.length; i++) {
        if (i % 2 === 0) finalString += reversed[i].toUpperCase();
        else finalString += reversed[i].toLowerCase();
    }

    res.json({
        is_success: true,
        user_id: "aaditya_pal",
        email: "aadityaawsm@gmail.com",
        roll_number: "0827CS231003",
        odd_numbers: odd,
        even_numbers: even,
        alphabets: alphabets,
        special_characters: special,
        sum: sum.toString(),
        concat_string: finalString
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));