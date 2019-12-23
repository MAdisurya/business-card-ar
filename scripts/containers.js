class ARContainer extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        // Default values
        this.defaultID = "a-container";
        this.defaultClassList = "";
        this.defaultPos = new Position(1, 0.5, 0);
        this.defaultAnchor = new Position(0.5, 0.5, 0.5);
        this.defaultRot = new Rotation(-90, 0, 0);
        this.defaultSize = new Size(1, 1);
        this.defaultColor = "#FFF";

        // Props
        // (String) this.id = "";
        // (Position) this.initialPos = Position(x,y,z);
        // (Position) this.initialAnchor = Position(x,y,z);
        // (Rotation) this.initialRot = Rotation(p,y,r);
        // (Size) this.initialSize = Size(width,height);
        // (String) this.initialColor = "";

        // Methods
        // (Void) this.props.onClick();

        this.state = {
            id: (this.props.id == undefined) ?
                this.defaultID : this.props.id,
            classList: (this.props.classList == undefined) ?
                this.defaultClassList : this.props.classList,
            position: (this.props.initialPos == undefined) ?
                this.defaultPos : this.props.initialPos,
            anchor: (this.props.initialAnchor == undefined) ?
                this.defaultAnchor : this.props.initialAnchor,
            rotation: (this.props.initialRot == undefined) ?
                this.defaultRot : this.props.initialRot,
            size: (this.props.initialSize == undefined) ?
                this.defaultSize : this.props.initialSize,
            color: (this.props.initialColor == undefined) ?
                this.defaultColor : this.props.initialColor
        };
    }

    /**
     * A Helper method that handles this.props.onClick method.
     * Adds error boundaries, etc.
     */
    handleClick()
    {
        try
        {
            this.props.onClick();
        }
        catch (err)
        {
            console.error(`Failed to invoke props.onClick. \n ${err}`, 
                err.stack);
        }
    }

    componentDidMount()
    {
        this.setState((state, props) => ({
            position: state.position
                .calculatePosFromAnchor(state.anchor, state.size),
            rotation: (props.initialRot == undefined) ?
                this.defaultRot : state.rotation,
            size: (props.initialSize == undefined) ?
                this.defaultSize : state.size
        }));
    }
    
    render()
    {
        return (
            <a-plane
                id={this.state.id}
                class={this.state.classList}
                position={this.state.position.toString()}
                rotation={this.state.rotation.toString()}
                width={this.state.size.width}
                height={this.state.size.height}
                color={this.state.color}
                onClick={this.handleClick}>
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
        // (String) this.id = "";
        // (Position) this.initialPos = Position(x,y,z);
        // (Position) this.initialAnchor = Position(x,y,z);
        // (Rotation) this.initialRot = Rotation(p,y,r);
        // (Size) this.initialSize = Size(width,height);

        // Inherited Methods
        // (Void) this.props.onClick();

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
                cursor-listener
                id={this.state.id}
                class={this.state.classList}
                position={this.state.position.toString()}
                rotation={this.state.rotation.toString()}
                width={this.state.size.width}
                height={this.state.size.height}
                src={this.state.imageSource}
                onClick={this.handleClick}>
                    <a-animation
                        begin="fusing"
                        attribute="rotation"
                        to="-90 360 0"
                        easing="linear"
                        dur="1500">
                    </a-animation>
            </a-image>
        );
    }
}

class ARIconContainer extends ARImageContainer
{
    constructor(props)
    {
        super(props);

        // Default values
        this.defaultSize = new Size(0.5, 0.5);

        // Inherited Props
        // (String) this.id = "";
        // (Position) this.initialPos = Position(x,y,z);
        // (Position) this.initialAnchor = Position(x,y,z);
        // (Rotation) this.initialRot = Rotation(p,y,r);
        // (Size) this.initialSize = Size(width,height);

        // Inherited Methods
        // (Void) this.props.onClick();
    }
}