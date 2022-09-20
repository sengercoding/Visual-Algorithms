var tree = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	var a = createVector(width / 2, height);
	var b = createVector(width/2, height - 100);
	root = new Branch(a, b);

	tree[0] = root;
	tree[1] = root.branchA();
	tree[2] = root.branchB();
}

function mousePressed() {
	for (var i = tree.length - 1; i >= 0; i--) {
		if (!tree[i].finished) {
			tree.push(tree[i].branchA());
			tree.push(tree[i].branchB());
		}
		tree[i].finished = true;
	}
}

function draw() {
	background(50);
	
	for(var i=0; i<tree.length; i++) {
		tree[i].show();
	}
}
