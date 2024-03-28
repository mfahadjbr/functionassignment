function make_album(artistName:string='ali',albumTitle:string='slow down',tracknumber=0){
    console.log(`${artistName},${albumTitle}`);
    return ({artistName,albumTitle});
}
make_album();
make_album('junaid','new party');
make_album('asad','happy song');
make_album('happy song','0');
(make_album('fahad','party song'));