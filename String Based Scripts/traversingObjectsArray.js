var users = [
    { username: 'asdfasdf', credits: 150 },
    { username: 'asasdfdf', credits: 510 },
    { username: 'asdasdffasdf', credits: 11 },
    { username: 'weewrwe', credits: 0 },
    { username: 'werwer', credits: 120 },
    { username: 'sdfsdf', credits: 130 },
    { username: 'dfgdfg', credits: 0 },
    { username: 'dfgdfg', credits: 510 },
    { username: '4564564', credits: 110 },
];

//Iterate through the array using a for loop and add 10 credits to all users.

for (let i = 0; i < users.length; i++) {
    users[i].credits += 10;
    console.log(users[i].credits);
}
