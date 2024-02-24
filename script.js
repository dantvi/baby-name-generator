

// Show new name
function newName() {
    const name = babyNames[Math.floor(Math.random() * babyNames.length)];
    console.log(name);
}

// On Load
newName();