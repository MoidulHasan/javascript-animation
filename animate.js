class Animate {
    //Class Constructor
    constructor() {
        this.screen_Width = window.innerWidth;
        this.screen_Height = window.innerHeight;
        this.box = document.getElementById("#box");
        this.position_on_x_axis = 0;
        this.position_on_y_axis = 50;
        this.right = true;
        this.down = true;
        this.left = false;
        this.up = false;
        setInterval(this.show.bind(this), 100);
    }
    show() {
        if (this.right && this.down) {
            this.goDownRight();
        }
        else if (this.right && this.up) {
            this.goUpRight();
        }
        else if (this.left && this.down) {
            this.goLeftDown();
        }
        else if (this.left && this.up) {
            this.goLeftUp();
        }
    }
    //Function to go Down and Right
    goDownRight() {
        this.position_on_y_axis = Math.min(this.position_on_y_axis + 10, this.screen_Height - 100);
        this.position_on_x_axis = Math.min(this.position_on_x_axis + 10, this.screen_Width - 100);
        box.style.top = this.position_on_y_axis + "px";
        box.style.left = this.position_on_x_axis + "px";
        if (this.position_on_y_axis == this.screen_Height - 100) {
            this.down = false;
            this.up = true;
        }
        if (this.position_on_x_axis == this.screen_Width - 100) {
            this.right = false;
            this.left = true;
        }
    }
    //Function to go Up and Right
    goUpRight() {
        this.position_on_y_axis = Math.max(this.position_on_y_axis - 10, 0);
        this.position_on_x_axis = Math.min(this.position_on_x_axis + 10, this.screen_Width - 100);
        box.style.top = this.position_on_y_axis + "px";
        box.style.left = this.position_on_x_axis + "px";
        if (this.position_on_y_axis == 0) {
            this.down = true;
            this.up = false;
        }
        if (this.position_on_x_axis == this.screen_Width - 100) {
            this.right = false;
            this.left = true;
        }
    }
    //Function to go Left Down
    goLeftDown() {
        this.position_on_y_axis = Math.min(this.position_on_y_axis + 10, this.screen_Height - 100);
        this.position_on_x_axis = Math.max(this.position_on_x_axis - 10, 0);
        box.style.top = this.position_on_y_axis + "px";
        box.style.left = this.position_on_x_axis + "px";
        if (this.position_on_y_axis == this.screen_Height - 100) {
            this.down = false;
            this.up = true;
        }
        if (this.position_on_x_axis == 0) {
            this.right = true;
            this.left = false;
        }
    }
    //Function to go Left Up
    goLeftUp() {
        this.position_on_y_axis = Math.max(this.position_on_y_axis - 10, 0);
        this.position_on_x_axis = Math.max(this.position_on_x_axis - 10, 0);
        box.style.top = this.position_on_y_axis + "px";
        box.style.left = this.position_on_x_axis + "px";
        if (this.position_on_y_axis == 0) {
            this.down = true;
            this.up = false;
        }
        if (this.position_on_x_axis == 0) {
            this.right = true;
            this.left = false;
        }
    }
}
//Create Object of Animate Class
let obj = new Animate();
