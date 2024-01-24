import inquirer from "inquirer";
async function main() {
    let { task } = await inquirer.prompt({
        type: "input",
        name: "task",
        message: "enter your task"
    });
    console.log(`added task ${task}`);
}
main();
