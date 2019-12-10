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

    /**
     * Converts the position into a string and returns the string.
     * E.g. converts [x, y, z] to "x y z"
     */
    toString()
    {
        return this.x + " " + this.y + " " + this.z;
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

class Rotation
{
    /**
     * Constructor for the Rotation helper class
     * @param {*} p - (Number) the initial pitch (x) value
     * @param {*} y - (Number) the initial yaw (y) value
     * @param {*} r - (Number) the initial roll (z) value
     */
    constructor(p = 0, y = 0, r = 0)
    {
        this.p = p;
        this.y = y;
        this.r = r;
    }

    /**
     * Converts the rotation into a string and returns the string.
     * E.g. converts [p, y, r] to "p y r"
     */
    toString()
    {
        return this.p + " " + this.y + " " + this.r;
    }
}