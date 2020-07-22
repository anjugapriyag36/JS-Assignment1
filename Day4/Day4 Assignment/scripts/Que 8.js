function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask("Do You agree.", () => alert("You agreed."), () => alert("You canceled the execution."));
