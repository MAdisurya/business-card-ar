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
                    initialPos={new Position(1.5, 0.5, 0)}
                    initialSize={new Size(3, 2)}>
                    {/* Replace this Container with ARVideoContainer when created */}
                </ARContainer>
                <ARImageContainer
                    initialPos={new Position(4.5, 0.5, 0)}
                    initialSize={new Size(2, 2)}
                    imageSource="#profile-img">
                </ARImageContainer>
                <ARContainer 
                    initialPos={new Position(7, 0.5, 0)}
                    initialSize={new Size(2, 0.5)}>
                        <ARHeaderText 
                            value="Mario"
                            size={new Size(2, 1)}
                        />
                </ARContainer>
                <ARContainer
                    initialPos={new Position(7, 0.5, 0.75)}
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