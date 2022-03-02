function distanceFromHqInBlocks(value) {
if(value < 42){
    return 42-value;
}else{
    return value-42;
}
}


function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(a,b){
    if(a < b) {
        return (b-a) * 264;
    }else{
        return (a-b)*264
    }


function calculatesFarePrice(a,b){
    const distance = distanceTravelledInFeet(a,b);
    if (distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000)
        return (distance - 400) * 0.02;
    }
}