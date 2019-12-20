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
     * Helper method that calculates the position based on
     * the containers anchor point and size. Returns a new Position.
     * Currently only supports x and z anchors.
     * @param {*} anchor - (Position) the desired anchor point for the object
     * @param {*} size - (Size) the size of the object
     */
    calculatePosFromAnchor(anchor, size)
    {
        // Deduct Anchor so we get (-0.5, 0, 0.5) values respectively;
        const newAnchor = new Position(
            anchor.x - 0.5,
            anchor.y - 0.5,
            anchor.z - 0.5
        );

        // Return new position based on anchor point
        return new Position(
            this.x - (size.width * newAnchor.x),
            this.y,
            this.z - (size.height * newAnchor.z)
        );
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