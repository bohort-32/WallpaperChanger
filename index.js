import {setWallpaper} from 'wallpaper';


// Liens vers les wallpapers
let morning = 'Morning.jpg';
let day = 'Day.jpg';
let sunset = 'Sunset.jpg';
let night = 'Night.jpg';

// Lien du wallpaper choisi
let current_wallpaper = 'C:/Users/Bohort/Documents/Codes/WallpaperChanger/img/'


// Date du jour
let current_date = new Date();
let current_hour = current_date.getHours();


// Matin
if((current_hour >= 6) && (current_hour < 11)){
    current_wallpaper = current_wallpaper+morning;
}
// Journée
else if(current_hour >= 11 && current_hour < 18){
    current_wallpaper = current_wallpaper+day;
}
// Soirée
 else if(current_hour >= 18 && current_hour <= 20){
    current_wallpaper = current_wallpaper+sunset;
}
// Nuit
else if((current_hour < 6) || (current_hour > 20)){
    current_wallpaper = current_wallpaper+night;
}


// Changement du wallpaper
await setWallpaper(current_wallpaper);