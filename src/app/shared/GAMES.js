// import game thumbnails here
import sekiroThumbnail from '../assets/img/thumbnails/sekiroThumbnail.jpg';
import saboteurThumbnail from '../assets/img/thumbnails/saboteurThumbnail.jpg';
import aragamiThumbnail from '../assets/img/thumbnails/aragamiThumbnail.jpg';
import ghostThumbnail from '../assets/img/thumbnails/ghostThumbnail.jpg';
import chooChooCharlesThumbnail from '../assets/img/thumbnails/chooChooCharlesThumbnail.jpg';
import hadesThumbnail from '../assets/img/thumbnails/hadesThumbnail.jpg';

// create object array with all games here
const gamesArray = [
    {
        id: 0,
        name: 'Sekiro: Shadows Die Twice',
        image: sekiroThumbnail,
        developer: 'FromSoft',
        genre: ['action', 'adventure'],
        rating: 10 / 10,
        featured: true,
        goty: true,
        platform: ['PC', 'Xbox', 'PS'],
        description:
            'In Sekiro: Shadows Die Twice you are the “one-armed wolf”, a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan.',
    },
    {
        id: 1,
        name: 'The Saboteur',
        image: saboteurThumbnail,
        developer: 'Pandemic',
        genre: ['action', 'adventure'],
        rating: 10 / 10,
        featured: true,
        goty: false,
        platform: ['PC', 'Xbox', 'PS'],
        description:
            'The Saboteur is an action-adventure game set in an open world environment and played from a third-person perspective. The player can explore Nazi-occupied Paris, some of the French countryside and parts of Germany. Color is a key element in the gameplay.',
    },
    {
        id: 2,
        name: 'Aragami',
        image: aragamiThumbnail,
        developer: 'Lince Works',
        genre: ['stealth'],
        rating: 7 / 10,
        featured: false,
        goty: false,
        platform: ['PC', 'Xbox', 'PS'],
        description:
            'Aragami is a third person stealth game that casts you as an undead assassin with the power to control the shadows. Teleport to any shadow, become invisible, materialize weapons or even summon a shadow dragon to infiltrate the enemy ranks and dispose of your targets.',
    },
    {
        id: 3,
        name: 'Ghost of Tsushima',
        image: ghostThumbnail,
        developer: 'Sucker Punch',
        genre: ['rpg', 'stealth', 'adventure'],
        rating: 10 / 10,
        featured: true,
        goty: false,
        platform: 'PS',
        description:
            'Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. The player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.',
    },
    {
        id: 4,
        name: 'Choo-Choo Charles',
        image: chooChooCharlesThumbnail,
        developer: 'Two Star Games',
        genre: ['survival', 'horror', 'fps', 'open world'],
        rating: 7 / 10,
        featured: false,
        goty: false,
        platform: 'PC',
        description:
            'Navigate an open-world island in an old train, upgrade it over time, and use it to fight an evil spider train named Charles.',
    },
    {
        id: 5,
        name: 'Hades',
        image: hadesThumbnail,
        developer: 'Supergiant Games',
        genre: ['Roguelike', 'Hack and Slash'],
        rating: 8 / 10,
        featured: false,
        goty: false,
        platform: ['PC', 'Xbox', 'PS', 'Switch'],
        description:
            'Hades is a roguelike game from Supergiant Games, creators of Bastion, Transistor, and Pyre. You play as Zagreus, immortal son of Hades, on his quest to escape from the underworld, fighting through many angry lost souls along the way.',
    },
    {
        id: 6,
        name: '',
        image: {},
        developer: '',
        genre: [''],
        rating: 10 / 10,
        featured: true,
        goty: false,
        platform: ['PC', 'Xbox', 'PS'],
        description: '',
    },
];

export default gamesArray;
