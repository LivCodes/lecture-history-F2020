# Graphs
- What are they?
- What can we used graphs to model in the real world?

## Terminology
- vertex (vertices)
- edge (edges)
- traversal

## What ways can we model a graph in code??
- vertices and edges property
- adjacency list

### Adding a vertex to a graph 

### Adding an edge to a graph 

### Removing an edge from a graph 

### Removing a vertex from a graph 

## Traversing a Tree 
- path 

### Depth-First Traversal 
- Recursion 
- Stack

### Breath-First Traversal 
- Queue








{
    'A': ['B'],
    'B': ['A'],
}


{
    'A': [ ],
    'B': [ ],
    'C': [ ]
}


{
    'A': ['B', 'C', 'D'],
    'B': ['A'],
    'C': ['A', 'D'],
    'D': ['A', 'C']
}


{
    'A': ['B', 'C', 'G'],
    'B': ['A', 'F', 'G'],
    'C': ['A', 'H'],
    'F': ['B', 'H', 'I', 'J'],
    'G': ['A', 'B'],
    'H': ['C', 'F'],
    'I': ['F'],
    'J': ['F'],
}