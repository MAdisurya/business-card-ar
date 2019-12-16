class App extends React.Component
{
    render()
    {
        return (
            <a-scene embedded>
                {/* // Assets */}
                <a-assets>
                    <img 
                        id="profile-img" 
                        src="../assets/images/empty-profile.png" />
                </a-assets>

                {/* <a-box position='0 0.5 0' material='opacity: 0.7;'></a-box> */}
                <ARContainer
                    initialPos={new Position(0, 0.5, -1)}
                    initialAnchor={new Position(0.5, 0.5, 0)}
                    initialSize={new Size(3, 2)}>
                    {/* Replace this Container with ARVideoContainer when created */}
                </ARContainer>
                <ARImageContainer
                    initialPos={new Position(3, 0.5, -1)}
                    initialAnchor={new Position(0.5, 0.5, 0)}
                    initialSize={new Size(2, 2)}
                    imageSource="#profile-img">
                </ARImageContainer>

                {/* Name Section */}
                <ARContainer 
                    initialPos={new Position(5.5, 0.5, -0.5)}
                    initialAnchor={new Position(0.5, 0.5, 0)}
                    initialSize={new Size(2, 0.5)}>
                        <ARHeaderText 
                            value="MARIO"
                            size={new Size(2, 1)}
                        />
                </ARContainer>
                <ARContainer
                    initialPos={new Position(5.5, 0.5, 0.15)}
                    initialAnchor={new Position(0.5, 0.5, 0)}
                    initialSize={new Size(2, 0.5)}>
                        <ARHeaderText
                            value="ADISURYA"
                            size={new Size(2, 1)}
                        />
                </ARContainer>

                {/* About Section */}
                <ARContainer
                    initialPos={new Position(0, 0.5, 1.25)}
                    initialAnchor={new Position(0.5, 0.5, 0)}
                    initialSize={new Size(2, 0.5)}>
                        <ARHeaderText
                            value="ABOUT"
                            size={new Size(2, 1)} 
                        />
                </ARContainer>
                <ARContainer
                    initialPos={new Position(0, 0.5, 2)}
                    initialAnchor={new Position(0.5, 0.5, 0)}
                    initialSize={new Size(3, 2)}>

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