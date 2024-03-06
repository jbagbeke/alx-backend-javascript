import handleProfileSignup from './6-final-user.js';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

async function waiting() {
  const test = await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
  console.log(test);
}

console.log();
waiting();

