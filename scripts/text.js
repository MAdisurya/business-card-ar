class ARText extends React.Component
{
    constructor(props)
    {
        super(props)

        // Default values
        this.defaultAlign = "center";
        
        this.wrapCountMultiplier = 5;

        // Props
        // (String) this.value;
        // (Size) this.size;
        // (String) this.align;

        this.state = {
            value: this.props.value,
            size: this.props.size,
            align: (this.props.align == undefined) ? 
                this.defaultAlign : this.props.align,
            wrapCount: (this.props.size.width * this.wrapCountMultiplier)
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
                color="black"
                z-offset={0.05}>
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
    }
}