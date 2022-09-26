const connected_components_count = (graph) => {
   
    const visited = new Set() ;
    let count = 0 ;

    console.group(graph) ;
    for(let node in graph) {
        console.log(visited) ;
        if (explore(graph,node,visited) === true) {
            count += 1 ;
        }
    } 
    return count ;
} ;

const  explore = (graph,current, visited) => {

    if(visited.has(String(current))) return false ;

    visited.add(String(current)) ;
    
    for(let neighbor of graph[current]) {
        explore(graph, neighbor,visited) ;
    }

    return true ;
};

console.log(connected_components_count({
    0: ['8,','1','5'],
    1: ['0'],
    5: ['0','8'],
    8: ['0','5'],
    2: ['3','4'],
    3: ['2','4'],
    4: ['3','2']
  }) ) ;