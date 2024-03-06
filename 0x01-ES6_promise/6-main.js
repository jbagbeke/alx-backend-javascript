import handleProfileSignup from './6-final-user.js';

async function waiting() {
  const test = await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
  console.log(typeof test);
}

console.log();
waiting();

