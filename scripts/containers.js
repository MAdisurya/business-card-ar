class Container extends React.Component
{
    constructor(props)
    {
        super(props);

        // Props
        // (Position) this.initialPos = Position(x,y,z);
        // (Rotation) this.initialRot = Rotation(p,y,r);
        // (Size) this.initialSize = Size(width,height);

        this.state = {
            position: this.props.initialPos,
            rotation: this.props.initialRot,
            size: this.props.initialSize
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