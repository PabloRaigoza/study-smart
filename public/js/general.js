let isLoggedIn = false;
let user = null;

function main() {
    if (isLoggedIn) {
        console.log('Logged in');
    }
    else console.log('Not logged in');

    setTimeout(main, 1000);
}

main();