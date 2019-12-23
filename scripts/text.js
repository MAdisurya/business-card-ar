class ARText extends React.Component
{
    constructor(props)
    {
        super(props)

        // Default values
        this.defaultPos = new Position(0, 0, 0);
        this.defaultSize = new Size(2, 1);
        this.defaultAlign = "center";
        this.defaultAnchor = new Position(0.5, 0.5, 0.5);
        this.defaultColor = "#000";
        
        this.wrapCountMultiplier = 3;

        // Props
        // (Position) this.position;
        // (String) this.value;
        // (Size) this.size;
        // (String) this.align;
        // (Position) this.anchor;
        // (String) this.color;

        this.state = {
            position: (this.props.position == undefined) ?
                this.defaultPos : this.props.position,
            value: this.props.value,
            size: (this.props.size == undefined) ?
                this.defaultSize : this.props.size,
            align: (this.props.align == undefined) ? 
                this.defaultAlign : this.props.align,
            anchor: (this.props.anchor == undefined) ?
                this.defaultAnchor : this.props.anchor,
            wrapCount: (this.props.size.width * this.wrapCountMultiplier),
            color: (this.props.color == undefined) ?
                this.defaultColor : this.props.color
        };
    }

    componentDidMount()
    {
        this.setState((state, props) => ({
            position: state.position
                .calculatePosFromAnchor(state.anchor, state.size),
            wrapCount: (props.size.width * this.wrapCountMultiplier)
        }));
    }

    render()
    {
        return (
            <a-text
                position={this.state.position.toString()}
                width={this.state.size.width}
                value={this.state.value}
                align={this.state.align}
                wrap-count={this.state.wrapCount}
                color={this.state.color}
                z-offset={0.1}>
            </a-text>
        );
    }
}

class ARHeaderText extends ARText
{
    constructor(props)
    {
        super(props);

        // Inherited Props
        // (String) this.value;
        // (Size) this.size;
        // (String) this.align;
        // (String) this.color;
    }
}

class ARParagraphText extends ARText
{
    constructor(props)
    {
        super(props);

        // Inherited Props
        // (String) this.value;
        // (Size) this.size;
        // (String) this.align;
        // (String) this.color;

        this.wrapCountMultiplier = 5;
    }
}