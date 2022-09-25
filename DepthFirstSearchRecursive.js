const depthFirstPrint = (graph,source) => {
    
    console.log(source) ;
    for(let neighbor of graph[source]){
        depthFirstPrint(graph,neighbor) // it is same as terminating case if(graph[source].length==0 ) return 
    }

 
 };
 
 
 const graph = {
     a: ['b','c'],
     b: ['d'],
     c: ['e'],
     d: ['f'],
     e: [],
     f: []
 };
 
 depthFirstPrint(graph,'a')  