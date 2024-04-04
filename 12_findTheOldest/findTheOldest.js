const findTheOldest = function (people) {
    people.sort((a, b) => {
        aYears = getYears(a);
        bYears = getYears(b);
        return bYears - aYears
    });
    return people[0]
};

function getYears(person) {
    return !person.yearOfDeath ? (new Date).getFullYear() - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
