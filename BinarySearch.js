// 프로그래머스 입국심사 문제

function solution(n, times) {
    // 정렬
    times.sort((a, b) => {
        return a - b
    })

    // 이분탐색 요소 지정
    let left = 1;
    let right = times[times.length - 1] * n;
    let mid = Math.floor((left + right) / 2);
    let count; // 정해진 시간에 심사할 수 있는 인원 수 

    // 이분탐색
    while (left <= right) {
        count = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

        if (count >= n)
            right = mid - 1;
        else if (count < n)
            left = mid + 1;
        mid = Math.floor((left + right) / 2);
    }

    // 가장 적게 걸린 시간 도출
    return (left);
}