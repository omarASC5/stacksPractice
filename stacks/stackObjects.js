const stackObject = {
    items: [],
    pointerLocation: -1,
    //This function places an element furthest/topmost part of the stack:
    push: function(element) {

        //Move the pointer up by one each time we push something into the array
        this.pointerLocation  += 1;

        //Fill the array with element's data: at pointer location
        this.items[this.pointerLocation] = element;

    }, 
    //This function removes the topmost element from the stack:
    pop: function() {
        //Move the pointer down
        this.pointerLocation -= 1;
        //Reduce the length of the array to where the pointer is 
        //(the pointer counts from 0, so add 1 for the proper length)
        this.items.length = (this.pointerLocation + 1);

    }, 
    //This function returns the topmost element of the stack WITHOUT changing the stack:
    top: function() {
        //Return whatever the pointer is pointing to
        return this.items[this.pointerLocation]; //Returns the last element of the array
    }
}

