export function selectedMenuOption(e) {
    e.preventDefault();
    const clickedId = e.target.id;
    
    switch (clickedId) {
        case 'artists':
            console.log('Artists selected');
            window.location.href = '/pulseboard/artists';
            break;
        case 'tracks':
            console.log('Tracks selected');
            window.location.href = '/pulseboard/tracks';
            break;
        case 'albums':
            console.log('Albums selected');
            break;
        default:
            console.log('Unknown option selected');
    }
}
