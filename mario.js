
printPyramid(5);

/*This is the comment I was asked to make*/
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *    ##
 *   ###
 *  ####
 * #####
 *######
 */
var height = Number(prompt("Enter a number for the height of the pyramid ", "1"));

function printPyramid(height) {    
var h = height;
/* loop through each layer of pyramid */    
for(height; height>0; height -=1){
    var space = "", brick = "";
    /* Fill Spaces */ 
    for(counter = 1; counter < height; counter += 1){
        space = space + " ";
    }
    
    for(count = 0; count <= h-space.length; count += 1 ){
        brick = brick + "*";
}
    //for(space="_"; space.length < height; space = space + "_");
    
    /* Fill Bricks */
    //for(brick="*"; brick.length <= (height-space.length); brick = brick + "*");
    
console.log(space + brick); 
}
}
printPyramid(height);