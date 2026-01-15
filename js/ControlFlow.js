//The area in which the plants are contained is circular, with a radius of 5 meters.
let radius = 5;

//The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;

//Each plant requires a minimum space of 0.8 square meters.
const spacePerPlant = 0.8;

//The area is starting with 20 plants.
let numberOfPlants = 20;

//The plants double in number every week.
const growthRate = 2;


/*
    Predict the plant growth after a specific number of weeks.
    Implement control flow to make decisions on whether the plants should be:
*/
/*
    Pruned, to stop them from exceeding the capacity of the garden: 
    This condition should be met if the plant count after the given number of weeks is greater 
    than 80% of the maximum capacity of the garden.
*/
/*
    Monitored, if they are growing at an acceptable rate.
    This condition should be met if the plant count is between 50% and 80% of the
    maximum capacity of the garden after the given number of weeks.
*/
/*
    Planted, if there is room to plant more plants.
    This condition should be met if the plant count after the given number of 
    weeks is less than 50% of the maximum capacity of the garden.
*/

const maxCapacity = area / spacePerPlant;
function predictPlantGrowth(weeks) {
    //Calculate future plant count, exponentially grows not linearly
    let futurePlantCount = numberOfPlants * Math.pow(growthRate, weeks);
    //if numberOfPlants > 0.8 * maxCapacity then Pruned
    if (futurePlantCount > 0.8 * maxCapacity) {
        return "Pruned";
        //if numberOfPlants > 0.8 * maxCapacity then Monitored
    } else if (futurePlantCount >= 0.5 * maxCapacity) {
        return "Monitored";
        //if numberOfPlants > 0.8 * maxCapacity then Planted
    } else {
        return "Planted";
    }
}

//Results after 1 week
console.log(predictPlantGrowth(1));
//Results after 2 weeks
console.log(predictPlantGrowth(2));
//Results after 3 weeks
console.log(predictPlantGrowth(3));

/*
    Using the logic you have already created, determine:
    The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
    If the space remained circular, what would be the radius of this expanded garden?
*/
numberOfPlants = 100;
let weeks = 10;
//Calculate future plant count, exponentially grows not linearly
let futurePlantCount = numberOfPlants * Math.pow(growthRate, weeks);
//Calculate required area
let requiredArea = futurePlantCount * spacePerPlant;
//Calculate additional space required and new radius
let additionalSpaceRequired = requiredArea - area;
//rearrange area formula to find new radius formula
let newRadius = Math.sqrt(requiredArea / PI);
console.log("Additional space required (sq meters): " + additionalSpaceRequired);
console.log("New radius of the garden (meters): " + newRadius);

/*
    The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
    Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds 
    the amount of space available, throw a new error and log an appropriate message.
*/
try {
    numberOfPlants = 100;
    weeks = 10;
    futurePlantCount = numberOfPlants * Math.pow(growthRate, weeks);
    requiredArea = futurePlantCount * spacePerPlant;
    //Check if required area exceeds available area
    if (requiredArea > area) {
        //throw our new error
        throw new Error("Insufficient space in the garden for the projected number of plants.");
    }
} catch (error) {
    console.log(error.message);
}