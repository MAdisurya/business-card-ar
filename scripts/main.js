class App extends React.Component
{
    render()
    {
        return (
            <a-scene embedded>
                {/* <a-box position='0 0.5 0' material='opacity: 0.7;'></a-box> */}
                <ARContainer 
                    initialPos={new Position(1, 0.5, 0)}
                    initialRot={new Rotation(-90, 0, 0)}
                    initialSize={new Size(1, 1)}>
                        <ARText 
                            value="Mario"
                            size={new Size(1, 1)}
                            align="center"
                        />
                </ARContainer>
                <a-marker-camera preset='hiro'></a-marker-camera>
            </a-scene>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);