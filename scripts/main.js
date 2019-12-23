class App extends React.Component
{
    render()
    {
        return (
            <a-scene 
                embedded
                vr-mode-ui="enabled: false;"
                arjs="sourceType: webcam; debugUIEnabled: false;">
                {/* Assets */}
                <a-assets>
                    {/* Profile Image */}
                    <img 
                        id="profile-img" 
                        src="/business-card-ar/assets/images/profile.png" />
                    
                    {/* Contact Images */}
                    <img
                        id="phone-img"
                        src="/business-card-ar/assets/images/phone-icon.png" />
                    <img
                        id="email-img"
                        src="/business-card-ar/assets/images/mail-icon.png" />

                    {/* Social Icons */}
                    <img
                        id="www-icon"
                        src="/business-card-ar/assets/images/www-icon.png" />
                    <img
                        id="github-icon"
                        src="/business-card-ar/assets/images/github-icon.png" />
                    <img
                        id="bitbucket-icon"
                        src="/business-card-ar/assets/images/bitbucket-icon.png" />
                    <img
                        id="instagram-icon"
                        src="/business-card-ar/assets/images/instagram-icon.png" />
                </a-assets>

                <a-marker markerhandler 
                    // preset="hiro"
                    type="pattern"
                    url="/business-card-ar/assets/mad-pattern.patt"
                    id="marker" 
                    emitevents="true">
                <a-entity id="main-wrapper">

                    <ARContainer
                        initialPos={new Position(3, 0.5, -2.5)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(6, 1)}>
                        <ARHeaderText 
                            value="Hover the blue reticle over\nitems to interact."
                            size={new Size(5.5, 1)}
                            align="left"
                            anchor={new Position(1, 0.5, 0.5)}
                        />
                    </ARContainer>

                    {/* Video Section */}
                    {/* <ARContainer
                        initialPos={new Position(0, 0.5, -1)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(3, 2)}> */}
                        {/* Replace this Container with ARVideoContainer when created */}
                    {/* </ARContainer> */}

                    {/* Name Section */}
                    <ARImageContainer
                        initialPos={new Position(3, 0.5, -1)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(2, 2)}
                        imageSource="#profile-img">
                    </ARImageContainer>
                    <ARContainer 
                        initialPos={new Position(5.5, 0.5, -0.5)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(2, 0.5)}
                        initialColor="#3e50b4">
                            <ARHeaderText 
                                value="MARIO"
                                size={new Size(2, 0.5)}
                                color="#FFF"
                            />
                    </ARContainer>
                    <ARContainer
                        initialPos={new Position(5.5, 0.5, 0.15)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(2, 0.5)}
                        initialColor="#3e50b4">
                            <ARHeaderText
                                value="ADISURYA"
                                size={new Size(2, 0.5)}
                                color="#FFF"
                            />
                    </ARContainer>

                    {/* About Section */}
                    <ARContainer
                        initialPos={new Position(0, 0.5, 1.25)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(2, 0.5)}
                        initialColor="#3e50b4">
                            <ARHeaderText
                                value="ABOUT"
                                size={new Size(2, 0.5)} 
                                color="#FFF"
                            />
                    </ARContainer>
                    <ARContainer
                        initialPos={new Position(0, 0.5, 2)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(3, 2)}>
                            <ARParagraphText
                                value="Hi, I'm Mario, and I have a passion 
                                for creating functional digital solutions 
                                with great design, and great code."
                                size={new Size(2.5, 2)}
                                align="left"
                                anchor={new Position(1, 0.5, 0.5)}
                            />
                    </ARContainer>

                    {/* Contact Section */}
                    <ARIconContainer
                        id="phone-img"
                        initialPos={new Position(3.25, 0.5, 1.5)}
                        initialAnchor={new Position(1, 0.5, 0)}
                        imageSource="#phone-img">
                    </ARIconContainer>
                    <ARContainer 
                        initialPos={new Position(3.25, 0.5, 1.75)}
                        initialAnchor={new Position(0, 0.5, 0)}
                        initialSize={new Size(4, 0.5)}
                        initialColor="#3e50b4">
                            <ARHeaderText 
                                value="+64 21 024 54709"
                                size={new Size(4, 0.5)}
                                color="#FFF"
                            />
                    </ARContainer>
                    <ARIconContainer
                        id="email-img"
                        initialPos={new Position(3.25, 0.5, 2.5)}
                        initialAnchor={new Position(1, 0.5, 0)}
                        imageSource="#email-img">
                    </ARIconContainer>
                    <ARContainer 
                        initialPos={new Position(3.25, 0.5, 2.75)}
                        initialAnchor={new Position(0, 0.5, 0)}
                        initialSize={new Size(5, 0.5)}
                        initialColor="#3e50b4">
                            <ARHeaderText 
                                value="mario.adisurya@gmail.com"
                                size={new Size(5, 0.5)}
                                color="#FFF"
                            />
                    </ARContainer>

                    {/* Social Section */}
                    <ARIconContainer
                        id="www-icon"
                        classList="clickable"
                        initialPos={new Position(0.5, 0.5, 4.5)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(0.75, 0.75)}
                        imageSource="#www-icon"
                        onClick={() => {
                            window.open(
                                "https://marioadisurya.com", "_blank");
                        }}>
                    </ARIconContainer>
                    <ARIconContainer
                        id="github-icon"
                        classList="clickable"
                        initialPos={new Position(2.5, 0.5, 4.5)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(0.75, 0.75)}
                        imageSource="#github-icon"
                        onClick={() => {
                            window.open(
                                "https://github.com/MAdisurya", "_blank");
                        }}>
                    </ARIconContainer>
                    <ARIconContainer
                        id="bitbucket-icon"
                        classList="clickable"
                        initialPos={new Position(4, 0.5, 4.5)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(0.75, 0.75)}
                        imageSource="#bitbucket-icon"
                        onClick={() => {
                            window.open(
                                "https://bitbucket.org/madisurya/", "_blank");
                        }}>
                    </ARIconContainer>
                    <ARIconContainer
                        id="instagram-icon"
                        classList="clickable"
                        initialPos={new Position(5.75, 0.5, 4.5)}
                        initialAnchor={new Position(0.5, 0.5, 0)}
                        initialSize={new Size(0.75, 0.75)}
                        imageSource="#instagram-icon"
                        onClick={() => {
                            window.open(
                                "https://www.instagram.com/themaddev/", "_blank");
                        }}>
                    </ARIconContainer>

                </a-entity>
                </a-marker>

                <a-entity camera>
                    <a-entity
                        raycaster="objects: .clickable"
                        cursor="fuse: true; fuseTimeout: 1400;"
                        material="color: #3287a8; shader: flat"
                        position="0 0 -3"
                        geometry="primitive: ring; radiusInner: 0.04; radiusOuter: 0.06">
                            <a-animation 
                                begin="fusing"
                                easing="ease-in"
                                attribute="scale"
                                fill="backwards"
                                from="1 1 1"
                                to="0.2 0.2 0.2"
                                dur="1500">
                            </a-animation>
                            <a-animation 
                                begin="click"
                                easing="ease-in"
                                attribute="scale"
                                fill="forwards"
                                from="0.2 0.2 0.2"
                                to="1 1 1"
                                dur="400">
                            </a-animation>
                    </a-entity>
                </a-entity>
            </a-scene>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);