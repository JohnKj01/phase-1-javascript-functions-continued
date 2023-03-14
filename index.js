/*function saturdayFun(activity="This Saturday, I want to roller-skate!") {
    console.log(activity);
}
if*/
// code your solution here
//else { console.log(activity) };
function saturdayFun(someString = 'roller-skate'){
    return `This Saturday, I want to ${someString}!`;
}
function mondayWork(someString = 'go to the office'){
    return `This Monday, I will ${someString}.`;
}
function wrapAdjective(wrapper){
    return function (someString){
        return `You are ${wrapper}${someString}${wrapper}!`; 
    }
}