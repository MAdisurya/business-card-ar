AFRAME.registerComponent('markerhandler', 
{
    init()
    {
        // References
        const markerRef = document.getElementById("marker");

        const mainWrapper = document.getElementById("main-wrapper");

        // Listeners
        markerRef.addEventListener("markerFound", () => {
            mainWrapper.object3D.visible = true;
        });

        markerRef.addEventListener("markerLost", () => {
            mainWrapper.object3D.visible = false;
        });
    }
});

AFRAME.registerComponent('cursor-listener', 
{
    init()
    {
        this.el.addEventListener("click", (evt) => {
            evt.target.onclick();
        });
    }
});

