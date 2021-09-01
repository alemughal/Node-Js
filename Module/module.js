console.log("This is module");


function average (arr) {
    sum = 0;
    arr.forEach(element => {
        sum =+ element;

    });
    return sum/arr.length;
}

module.exports = {
    avg: average,
    name: "Ali",
    repo : "Github"

}