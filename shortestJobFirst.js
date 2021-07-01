function sjf (jobs,index) {
  const num = {
    index,
    number: jobs[index]
  }

  let total = 0;

  jobs.forEach((el, idx) => {
    if (el < num.number) {
      total = total + el
    } else if (el === num.number) {
      el
      if (idx <= num.index) {
        total = total + el
      }
    }
  })

  return total
}
