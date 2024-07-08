export function selectedMenuOption(e) {
    e.preventDefault();
    const clickedId = e.target.id;
    
    switch (clickedId) {
        case 'artists':
            window.location.href = '/pulseboard/artists';
            break;
        case 'tracks':
            window.location.href = '/pulseboard/tracks';
            break;
        case 'albums':
            window.location.href = '/pulseboard/albums';
            break;
        default:
            console.log('Unknown option selected');
    }
}
