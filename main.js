let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];

// map 문제
// 1. 모든 이름을 대문자로 바꾸어서 출력하시오.
let upperCase = names.map((item) => item.toUpperCase())
console.log(upperCase)
// 2. 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
let onlyName = names.map((item) => item.split(' ')[0])
console.log(onlyName)
// // 3. 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
// let initial = names.map((item) => {
//     let initial2 = item.split(' ');
//     let initial3 = '';

// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
let includeA = names.filter((item) => {
    return item.includes("a")
})
console.log(includeA)

// // 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
// let double = names.filter((item)=> {
//     let doubleSplite = item.split("");
//     return
// })

// some 문제
// 1. 전체 이름의 길이가 20자 이상인 사람이 있는가?
let name = names.some((item) => item.length >= 20)
console.log(name)
// // 2. 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
// let fistName = names.some((item)=>{
//     let pSplite = item.split(" ")
//     pSplite.pop()
//     return
// })

// let firstName = names.some((item) => item.split(" ").pop)  {
//     return
// }

// every 문제
// 1.모두의 전체 이름의 길이가 20자 이상인가?
let includeName = names.every(item => item.length >= 20)
console.log(includeName)
// 2.모두의 이름에 a 가 포함되어 있는가?
let includeName2 = names.every(item => item.includes('a'))
console.log(includeName2)

// find 문제
// 1.전체 이름의 길이가 20자 이상인 사람을 찾으시오.
let findName = names.find(item => item.length >= 20)
console.log(findName)
// 2.미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
let middleName = names.find(item => item.split(" ").length >= 3)
console.log(middleName)
//
// findIndex 문제
// 1. 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
let indexName = names.findIndex(item => item.length >= 20)
console.log(indexName)
// 2. 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
let middleIndex = names.findIndex(item => item.split(" ").length >= 3)
console.log(middleIndex)