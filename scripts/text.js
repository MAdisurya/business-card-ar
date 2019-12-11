class ARText extends React.Component
{
    constructor(props)
    {
        super(props)

        // Default values
        this.defaultAlign = "center";

        // Props
        // (String) this.value;
        // (Size) this.size;
        // (String) this.align;

        this.state = {
            value: this.props.value,
            size: this.props.size,
            align: (this.props.align == "") ? 
                this.defaultAlign : this.props.align,
            wrapCount: (this.props.size.width * 5)
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