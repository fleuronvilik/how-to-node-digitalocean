const args = process.argv.slice(2);
//console.log(process.env[args[0]]);

args.forEach(arg => {
  let val = process.env[arg];
  if (val) console.log(process.env[arg]);
  else console.error(`Could not find "${arg}" in environment`);
});
