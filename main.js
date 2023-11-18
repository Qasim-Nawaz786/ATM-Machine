import inquirer from "inquirer";
const balance = Math.floor(Math.random() * 50000);
const main = async () => {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "userid",
            message: "What is your userid?",
        },
        {
            type: "password",
            name: "password",
            message: "What is your password?",
            when: (answers) => answers.userid === "admin",
        },
        {
            type: "list",
            name: "balanceCheck",
            choices: ["yes", "no"],
            message: "Can you check your balance?",
            when: (answers) => answers.password === "admin",
        },
    ]);
    if (answer.balanceCheck === "yes") {
        console.log("Login Successful");
        console.log(`Your balance is $${balance}`);
    }
};
const answer = await main();
answer;
async function again() {
    // Additional logic for handling balance
    const additionalAnswer = await inquirer.prompt([
        {
            type: "input",
            name: "newTransaction",
            message: "Do you want to perform another transaction? (yes/no)",
        },
    ]);
    if (additionalAnswer.newTransaction.toLowerCase() === "yes") {
        // Add logic for additional transactions
        console.log("Performing additional transaction...");
        main();
    }
}
const answer2 = await again();
answer2;
console.log("Thank you for using our ATM.");
console.log("Goodbye!");
