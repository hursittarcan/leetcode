




mergeTwoLists = function(list1, list2) {

    let concat = list1.concat(list2);
    let newArr = [];
    let number = concat[0];
    for (let i = concat.length - 1; i >= 0; i--) {
        if (concat)
        console.log(concat[i]);
    }

};

let list1 = [1,2,4];
let list2 = [1,3,4];

mergeTwoLists(list1, list2);


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]