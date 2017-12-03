import tiendita from './img/sushi.jpg';
import trivia from './img/trivia.jpg';
import github from './img/github.jpg';
import maze from './img/maze.jpg';
import puzzle from './img/puzzle.jpg';
import nice from './img/nice.jpg';

const proyectos = [
    {
        name: 'SUSHI',
        img: tiendita,
        demo: 'https://melanieoc.github.io/tiendita',
        code: 'https://github.com/MelanieOC/tiendita',
        tool: ['devicon-react-original'],
        icons: ['desktop'],
        description: ['Un simulador de compra online de sushi.', 'Realizado con react-redux y react-rooter', ' Trabajo grupal']
    },
    {
        name: 'Github Battle',
        img: github,
        demo: 'https://melanieoc.github.io/GithubBattle/',
        code: 'https://github.com/MelanieOC/GithubBattle',
        tool: ['devicon-bootstrap-plain'],
        icons: ['desktop', 'mobile'],
        description: ['Batalla entre repositorios de GitHub. Top de repositorios mas populares. ', 'Uso de la API de Github, realizado con react y promesas.']
    },
    {
        name: 'Trivia',
        img: trivia,
        demo: 'https://melanieoc.github.io/Trivia-Redux/',
        code: 'https://github.com/MelanieOC/Trivia-Redux',
        tool: ['devicon-react-original'],
        icons: ['desktop', 'mobile'],
        description: ['Un simple juego de preguntas. Veamos cuanto sabes.', ' Realizado con react-redux.', 'Responsive.']
    },
    {
        name: 'Laberinto',
        img: maze,
        demo: 'https://melanieoc.github.io/laberinto/',
        code: 'https://github.com/MelanieOC/laberinto',
        tool: ['devicon-html5-plain'],
        icons: ['desktop'],
        description: ['Ayuda al niño a salir del laberinto. Aunque también él solo lo puede encontrar. ', 'Realizado solo con DOM. Uso de sprites.']
    },
    {
        name: 'Star Bootstrap',
        img: nice,
        demo: 'https://melanieoc.github.io/maquetado/',
        code: 'https://github.com/MelanieOC/maquetado',
        tool: ['devicon-bootstrap-plain'],
        icons: ['desktop', 'mobile'],
        description: ['Maquetado de un portafolio empleando solo bootstrap, con validacion en el formulario.']
    },
    {
        name: 'Puzzle Memory',
        img: puzzle,
        demo: 'https://melanieoc.github.io/puzzle-memory/',
        code: 'https://github.com/MelanieOC/puzzle-memory',
        tool: ['devicon-jquery-plain'],
        icons: ['desktop'],
        description: ['Juego de cartas, encontrar sus pares. ', 'Realizado con jquery y uso de animaciones css.']
    }
]
export default proyectos;