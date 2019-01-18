import '@babel/polyfill';

async function test() {  
    const pchabGit = await fetch("https://api.github.com/users/pchab")

    console.log(pchabGit)
}

test()
