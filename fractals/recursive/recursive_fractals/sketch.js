var angle = 0;
var slider;
var decrease = 0.67;
var length = 500;

function setup() {
	createCanvas(windowWidth, windowHeight);
	slider = createSlider(0, TWO_PI, PI/4, 0.01);
	sec_slider = createSlider(0.1, 1, 0.67, 0.01);
	third_slider = createSlider(100, 800, height/3.5, 1);
}

function draw() {
	background(51);
	angle = slider.value();
	decrease = sec_slider.value();
	stroke(255);
	translate(width/2, height);
	branch(third_slider.value()); //initial length of first line -> decreases with each recursive step ()
}

function branch (len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	if (len > 4) {
		push();  //push and pop to receive the last point from where we should continue with drawing the tree
		rotate(angle);
		branch(len * decrease);
		pop();
		push();
		rotate(-angle);
		branch(len * decrease);
		pop();
	}

}