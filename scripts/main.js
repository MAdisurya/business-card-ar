class App extends React.Component
{
    render()
    {
        return (
            <a-scene embedded>
                {/* Assets */}
                <a-assets>
                    {/* Profile Image */}
                    <img 
                        id="profile-img" 
                        src="../assets/images/empty-profile.png" />
                    
                    {/* Contact Images */}
                    <img
                        id="phone-img"
                        src="../assets/images/phone-icon.png" />
                    <img
                        id="email-img"
                        src="../assets/images/mail-icon.png" />

                    {/* Social Icons */}
                    <img
                        id="github-icon"
                        src="../assets/images/github-icon.png" />
                    <img
                        id="bitbucket-icon"
                        src="../assets/images/bitbucket-icon.png" />
                    <img
                        id="instagram-icon"
                        src="../assets/images/instagram-icon.png" />
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

                {/* Contact Section */}
                <ARIconContainer
                    initialPos={new Position(3, 0.5, 1.5)}
                    initialAnchor={new Position(1, 0.5, 0)}
                    imageSource="#phone-img">
                </ARIconContainer>
                <ARContainer 
                    initialPos={new Position(3, 0.5, 1.75)}
                    initialAnchor={new Position(0, 0.5, 0)}
                    initialSize={new Size(4, 0.5)}>
                        <ARHeaderText 
                            value="+64 21 024 54709"
                            size={new Size(4, 1)}
                        />
                </ARContainer>
                <ARIconContainer
                    initialPos={new Position(3, 0.5, 2.5)}
                    initialAnchor={new Position(1, 0.5, 0)}
                    imageSource="#email-img">
                </ARIconContainer>
                <ARContainer 
                    initialPos={new Position(3, 0.5, 2.75)}
                    initialAnchor={new Position(0, 0.5, 0)}
                    initialSize={new Size(5, 0.5)}>
                        <ARHeaderText 
                            value="mario.adisurya@gmail.com"
                            size={new Size(5, 1)}
                        />
                </ARContainer>

                {/* Social Section */}
                <ARIconContainer
                    initialPos={new Position(1.25, 0.5, 4.5)}
                    initialAnchor={new Position(0.5, 0.5, 0)}
                    initialSize={new Size(0.75, 0.75)}
                    imageSource="#github-icon">
                </ARIconContainer>
                <ARIconContainer
                    initialPos={new Position(3.25, 0.5, 4.5)}
                    initialAnchor={new Position(0.5, 0.5, 0)}
                    initialSize={new Size(0.75, 0.75)}
                    imageSource="#bitbucket-icon">
                </ARIconContainer>
                <ARIconContainer
                    initialPos={new Position(5.25, 0.5, 4.5)}
                    initialAnchor={new Position(0.5, 0.5, 0)}
                    initialSize={new Size(0.75, 0.75)}
                    imageSource="#instagram-icon">
                </ARIconContainer>

                <a-marker-camera preset='hiro'></a-marker-camera>
            </a-scene>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);