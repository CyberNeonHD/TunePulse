export function selectedMenuOption(e) {
    e.preventDefault();
    const clickedId = e.target.id;
    
    switch (clickedId) {
        case 'artists':
            // initLoadArtists();
            console.log('Artists selected');
            window.location.href = '/pulseboard/artists';
            break;
        case 'tracks':
            // initLoadTracks();
            console.log('Tracks selected');
            window.location.href = '/pulseboard/tracks';
            break;
        case 'albums':
            // displayNotReady();
            console.log('Albums selected');
            break;
        default:
            console.log('Unknown option selected');
    }
}
