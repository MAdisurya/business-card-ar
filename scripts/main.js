class App extends React.Component
{
    render()
    {
        return (
            <a-scene embedded>
                {/* <a-box position='0 0.5 0' material='opacity: 0.7;'></a-box> */}
                <ARContainer
                    initialPos={new Position(1.5, 0.5, 0)}
                    initialSize={new Size(3, 2)}>
                    {/* Replace this Container with ARVideoContainer when created */}
                </ARContainer>
                <ARContainer 
                    initialPos={new Position(5, 0.5, 0)}
                    initialSize={new Size(2, 0.5)}>
                        <ARHeaderText 
                            value="Mario"
                            size={new Size(2, 1)}
                        />
                </ARContainer>
                <ARContainer
                    initialPos={new Position(5, 0.5, 0.75)}
                    initialSize={new Size(2, 0.5)}>
                        <ARHeaderText
                            value="Adisurya"
                            size={new Size(2, 1)}
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