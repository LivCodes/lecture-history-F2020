class Graph {
    constructor(adjencyList = {}){
        this.adjencyList = adjencyList;
    }
    
    //add a vertex IF it doesn't exist
    addVertex(vertex){
        if(!(vertex in this.adjencyList)){
            this.adjencyList[vertex] = []
        } else {
            throw new Error("Vertex already exists")
        }
    }
             //B.     //C
    addEdge(vertex1, vertex2){
        if(vertex1 in this.adjencyList && vertex2 in this.adjencyList){
            if(!this.adjencyList[vertex1].includes(vertex2)){
                this.adjencyList[vertex1].push(vertex2)
            }
            if(!this.adjencyList[vertex2].includes(vertex1)){
                this.adjencyList[vertex2].push(vertex1)
            } 
        } else {
            throw new Error("One or more vertices does not exist")   
        }
    }
    
    removeEdge(vertex1, vertex2){
        this.adjencyList[vertex1] = this.adjencyList[vertex1].filter(vert => vert !== vertex2)
        this.adjencyList[vertex2] = this.adjencyList[vertex2].filter(vert => vert !== vertex1)
    }
    
    removeVertex(vertex){
        //Check to see if vertex exists 
        //If the vertex has neighbors!!! 
                //get list of neighbor for the soon-to-be deleted vertex 
                //remove the soon-to-be deleted vertex from it's nieghbors' lists 
        delete this.adjencyList[vertex]
    }
}

let empytGraph = new Graph()
let aList = {
    'A': ['B', 'C', 'D'],
    'B': ['A'],
    'C': ['A', 'D'],
    'D': ['A', 'C']
}
let letterGraph = new Graph(aList)