function sum(...args) {
  console.log(args)
  if (args.length > 1) {
    return args.reduce((a, b) => a + b)
  }

  return (v) => v + +args.concat();
}
console.log(sum(1)(4))