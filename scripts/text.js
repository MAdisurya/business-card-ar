class ARText extends React.Component
{
    constructor(props)
    {
        super(props)

        // Default values
        this.defaultSize = new Size(2, 1);
        this.defaultAlign = "center";
        this.defaultColor = "#000";
        
        this.wrapCountMultiplier = 5;

        // Props
        // (String) this.value;
        // (Size) this.size;
        // (String) this.align;
        // (String) this.color;

        this.state = {
            value: this.props.value,
            size: (this.props.size == undefined) ?
                this.defaultSize : this.props.size,
            align: (this.props.align == undefined) ? 
                this.defaultAlign : this.props.align,
            wrapCount: (this.props.size.width * this.wrapCountMultiplier),
            color: (this.props.color == undefined) ?
                this.defaultColor : this.props.color
        };
    }

    render()
    {
        return (
            <a-text
                width={this.state.size.width}
                value={this.state.value}
                align={this.state.align}
                wrap-count={this.state.wrapCount}
                color={this.state.color}
                z-offset={0.075}>
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