function sort_array(dataArray){
    sortedData = dataArray.map(val => {
        val.sort();
        return val[val.length-1]
    });

    console.log(sortedData);
    
    return sortedData;
}

const data = [
    ['a','c','b','e','d'], 
    ['g','e','f']
];

const datalain = [
    ['g','h','x','j'],
    ['a','c','b','e','d'],
    ['q','w','a']
    
];

sort_array(data);
sort_array(datalain);

