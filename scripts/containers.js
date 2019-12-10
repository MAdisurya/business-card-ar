class Container extends React.Component
{
    constructor(props)
    {
        super(props);

        // Props
        // (Position) this.initialPos = Position(x,y,z);
        // (Size) this.initialSize = Size(width,height);

        this.state = {
            position: this.props.initialPos,
            size: this.props.initialSize
        };
    }
    
    render()
    {
        return (
            <a-plane
                position={
                    this.state.position.x + " "
                    + this.state.position.y + " "
                    + this.state.position.z
                }
                width={this.state.size.width}
                height={this.state.size.height}>
            </a-plane>
        );
    }
}

class BoxContainer extends Container
{

}

class CircleContainer extends Container
{

}