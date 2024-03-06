import handleProfileSignup from './6-final-user.js';

async function testFunc() {
  const test = await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
  console.log(test);
}

testFunc();
