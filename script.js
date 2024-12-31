const object1 = {
    "imie": "nazwisko"
};

let object2 = {};

for (let key in object1) {
    const value = object1[key];
    object2[value] = key;
};

console.log(object2);