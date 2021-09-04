// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

function solution(participant, completion) {
    var answer ='';
    participant.sort();
    completion.sort();
    
    for(let i =0;i<participant.length;i++){
        if(participant[i]!==completion[i]){
            answer = participant[i];
            break;
        }
    }
    return answer;
}
// 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

// 예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

// 종류	이름
// 얼굴	동그란 안경, 검정 선글라스
// 상의	파란색 티셔츠
// 하의	청바지
// 겉옷	긴 코트
// 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
// 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
// 같은 이름을 가진 의상은 존재하지 않습니다.
// clothes의 모든 원소는 문자열로 이루어져 있습니다.
// 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
// 스파이는 하루에 최소 한 개의 의상은 입습니다.

function solution(clothes) {  // 문제는 해결했지만 시간 ...
    let countArray=new Array();
    clothes.sort(function(a,b){
        const first=a[1];
        const second=b[1];
        
        if(first===second){
            return (a>b)-(a<b)
        }
        else 
            return (first>second)-(first<second)
    });
    
    clothes.push(["",""]);
    
    for(let i=0,len=clothes.length-1;i<len;i++){
        if(clothes[i][1]!==clothes[i+1][1])
            countArray.push(i+1);
    }
    let sum=countArray[0]+1;
    
    for(let i=1,len = countArray.length;i<len;i++){
        sum*=(countArray[i]-countArray[i-1]+1)
    }
    return sum-1
}


function solution(clothes) {  
    let countArray = new Object()
    
    for (let clothe of clothes) {
        const clotheType = clothe[1]
        
        if (!countArray[clotheType]) {
            countArray[clotheType] = 2
        } else {
            countArray[clotheType]++
        }
    }
    let sum=1;
    for(let index in countArray) {
        const count = countArray[index]
        sum *= count
    }
    return sum-1
}

// 베스트앨범
function solution(genres, plays) {
    var answer = [];
    let genreSum = new Object();
    // 장르 인덱스로 합 구하기
    for(let index in genres) {
        const genre = genres[index];
        const play = plays[index];
        if(genreSum[genre])
            genreSum[genre] += play;
        else
            genreSum[genre] = play;
    }
    
    // 합 많은 장르 순으로 정렬
    let tmpArr = [];
    for(let genreIndex in genreSum) {
        tmpArr.push([genreIndex, genreSum[genreIndex]])
    }
    tmpArr.sort(function(a,b) {
        return b[1] - a[1]
    })

    
    // 고유번호, play 정렬하기 위한 새 배열 생성
    for(let genre of tmpArr) {
        let preArr = [];
        for(let index in genres) {
            if(genres[index] == genre[0]){
                preArr.push({num:index, play:plays[index]});
            }
        }
        // play 높은 순, num 작은 순 정렬
        preArr.sort(function(a,b) {
            return (b.play-a.play || a.num-b.num);
        })
        // 2개 이하만 재생목록에 추가
        if(preArr.length == 1)
            answer.push(Number(preArr[0].num));
        else
            for(let i = 0 ; i <= 1 ; i++) {
                answer.push(Number(preArr[i].num));
            }
    }
    
    return answer;
}