class Position
{
    /**
     * Constructor for Position helper class
     * @param {*} x - (Number) the initial x value
     * @param {*} y - (Number) the initial y value
     * @param {*} z - (Number) the initial z value 
     */
    constructor(x = 0, y = 0, z = 0)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class Size
{
    /**
     * Constructor for the Size helper class
     * @param {*} width - (Number) the initial width value
     * @param {*} height - (Number) the initial height value 
     */
    constructor(width = 0, height = 0)
    {
        this.width = width;
        this.height = height;
    }
}