class ARContainer extends React.Component
{
    constructor(props)
    {
        super(props);

        // Default values
        this.defaultPos = new Position(1, 0.5, 0);
        this.defaultRot = new Rotation(-90, 0, 0);
        this.defaultSize = new Size(1, 1);

        // Props
        // (Position) this.initialPos = Position(x,y,z);
        // (Rotation) this.initialRot = Rotation(p,y,r);
        // (Size) this.initialSize = Size(width,height);

        this.state = {
            position: (this.props.initialPos == undefined) ?
                this.defaultPos : this.props.initialPos,
            rotation: (this.props.initialRot == undefined) ?
                this.defaultRot : this.props.initialRot,
            size: (this.props.initialSize == undefined) ?
                this.defaultSize : this.props.initialSize
        };
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
}

class ARImageContainer extends ARContainer
{
    constructor(props)
    {
        super(props);

        // Inherited Props
        // (Position) this.initialPos = Position(x,y,z);
        // (Rotation) this.initialRot = Rotation(p,y,r);
        // (Size) this.initialSize = Size(width,height);

        // Props
        // (String) this.imageSource;
    }

    componentDidMount()
    {
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