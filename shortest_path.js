const  shortest_path = (edges,nodeA,nodeB) => {
     const graph = build_graph (edges) ;
     const visited = new Set([nodeA]) ;
     console.log(graph) ;
     const queue = [[nodeA,0]] ;

     while(queue.length > 0 ) {
        const [node,distance ] = queue.shift() ;
        if (node === nodeB) return distance ;

        for (let neighbor of graph[node]) {
            if(!visited.has(neighbor)){
                visited.add(neighbor);
            }
            queue.push([neighbor,distance+1])  ;
 
        }
     }
    return -1;
} ; 

const build_graph= (edges) => {
     const graph = {} ;
     for(let edge of edges) {
      const [a,b] = edge ;
      if(!(a in graph)) graph[a] = [] ;
      if(!(b in graph)) graph[b] = [] ;
      graph[a].push(b) ;
      graph[b].push(a) ;
    
     }
     return graph ;

}

const edges = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
] ;

console.log(shortest_path(edges,'w','y')) ;
