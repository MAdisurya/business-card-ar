class ARContainer extends React.Component
{
    constructor(props)
    {
        super(props);

        this.calculatePosFromAnchor = this.calculatePosFromAnchor.bind(this);

        // Default values
        this.defaultPos = new Position(1, 0.5, 0);
        this.defaultAnchor = new Position(0.5, 0.5, 0.5);
        this.defaultRot = new Rotation(-90, 0, 0);
        this.defaultSize = new Size(1, 1);

        // Props
        // (Position) this.initialPos = Position(x,y,z);
        // (Position) this.initialAnchor = Position(x,y,z);
        // (Rotation) this.initialRot = Rotation(p,y,r);
        // (Size) this.initialSize = Size(width,height);

        this.state = {
            position: (this.props.initialPos == undefined) ?
                this.defaultPos : this.props.initialPos,
            anchor: (this.props.initialAnchor == undefined) ?
                this.defaultAnchor : this.props.initialAnchor,
            rotation: (this.props.initialRot == undefined) ?
                this.defaultRot : this.props.initialRot,
            size: (this.props.initialSize == undefined) ?
                this.defaultSize : this.props.initialSize
        };
    }

    componentDidMount()
    {
        this.setState((state) => ({
            position: this.calculatePosFromAnchor(state.position, state.size)
        }));

        console.log("Container Anchor: " + 
            this.calculatePosFromAnchor(this.state.position, this.state.size));
    }
    
    render()
    {
        return (
            <a-plane
                position={this.state.position.toString()}
                rotation={this.state.rotation.toString()}
                width={this.state.size.width}
                height={this.state.size.height}>
                    {this.props.children}
            </a-plane>
        );
    }

    /**
     * Helper method that calculates the position based on
     * the containers anchor point and size. Returns a new Position.
     * Currently only supports x and z anchors.
     * @param {*} pos - (Position) the position of the container
     * @param {*} size - (Size) the size of the container
     */
    calculatePosFromAnchor(pos, size)
    {
        // Deduct Anchor so we get (-0.5, 0, 0.5) values respectively;
        const newAnchor = new Position(
            this.state.anchor.x - 0.5,
            this.state.anchor.y - 0.5,
            this.state.anchor.z - 0.5
        );

        // Return new position based on anchor point
        return new Position(
            pos.x - (size.width * newAnchor.x),
            pos.y,
            pos.z - (size.height * newAnchor.z)
        );
    }
}

class ARImageContainer extends ARContainer
{
    constructor(props)
    {
        super(props);

        // Inherited Props
        // (Position) this.initialPos = Position(x,y,z);
        // (Position) this.initialAnchor = Position(x,y,z);
        // (Rotation) this.initialRot = Rotation(p,y,r);
        // (Size) this.initialSize = Size(width,height);

        // Props
        // (String) this.imageSource;
    }

    componentDidMount()
    {
        super.componentDidMount();

        // Have to use setState to append any additional props
        // As state is already assigned from parent: ARContainer
        this.setState({
            imageSource: (this.props.imageSource == undefined) ?
                "../assets/images/placeholder.jpg" : this.props.imageSource
        });
    }

    render()
    {
        return (
            <a-image
                position={this.state.position.toString()}
                rotation={this.state.rotation.toString()}
                width={this.state.size.width}
                height={this.state.size.height}
                src={this.state.imageSource}>
            </a-image>
        );
    }
}