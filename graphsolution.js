load("graph.js");

g = new Graph(8);

g.addEdge(1,2);
//this is the edge between the chapel and the computer center

g.addEdge(1,4);
//this is the edge between chapel and the science building
g.addEdge(2,3);
//this is the edge between the computer center and my apartment

g.addEdge(3,5);
//this is the edge between my apartment and the core building
g.addEdge(3,6);
//this is the edge between my apartment and the hallec center
g.addEdge(4,5);
//this is the edge between the sceince building and the core building
g.addEdge(5,6);
//this is the edge between the core building and the hallec center 
g.addEdge(5,7);
//this is the edge between the core building and rec center

g.vertexList = ["Chapel", "Computer Center", "Apartments", "Science Building", "Core Building", "Hallec Center", "Rec Center"];
//listing the names in comparison to the numbers they are listed
//the shortest path is from 3 to 5 or my apsrtment straight to the core building
g.bfs(0);
var vertex = 5;
var source = 3;

var paths = g.pathTo(source,vertex);

g.showPath(paths);

print("\n");

shortestPath(3,5);
