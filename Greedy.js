// Greedy, 체육복 도난상황

function solution(n, lost, reserve) {
    let tmp = reserve.slice()

    for (let i in tmp) {
      let key = lost.indexOf(tmp[i])

      if (key != -1) {
        lost.splice(key, 1);
        reserve.splice(reserve.indexOf(tmp[i]), 1);
      }
    }

    for (let i of reserve) {
      let key = lost.includes(i-1) ? lost.indexOf(i-1) : lost.indexOf(i+1)

      if (key != -1) {
        lost.splice(key, 1)
      }
    }

    return n - lost.length
  }
