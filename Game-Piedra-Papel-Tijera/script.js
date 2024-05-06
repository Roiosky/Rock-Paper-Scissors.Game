function playGame(SelecUsuario) {
    // Restablecer las imágenes y ocultarlas
    document.getElementById('Ganador').src = '';
    document.getElementById('Perdedor').src = '';
    document.getElementById('Empate').src = '';
    document.getElementById('Ganador').style.display = 'none';
    document.getElementById('Perdedor').style.display = 'none';
    document.getElementById('Empate').style.display = 'none';
  
    const usuario = ["piedra", "papel", "tijeras"];
    const maquina = usuario[Math.floor(Math.random() * 3)];
  
    let resultado = '';
  
    switch (SelecUsuario) {
      case maquina:
        resultado = "¡Es un empate!";
        document.getElementById('Empate').src = '..//Game-Piedra-Papel-Tijera/imgs/empate.png';
        document.getElementById('Empate').style.display = 'block';
        break;
      case "piedra":
        resultado = (maquina === "tijeras") ? "¡Ganaste!" : "¡Perdiste!";
        document.getElementById((maquina === "tijeras") ? 'Ganador' : 'Perdedor').src = '..//Game-Piedra-Papel-Tijera/imgs/' + ((maquina === "tijeras") ? 'ganador' : 'perdedor') + '.png';
        document.getElementById((maquina === "tijeras") ? 'Ganador' : 'Perdedor').style.display = 'block';
        break;
      case "papel":
        resultado = (maquina === "piedra") ? "¡Ganaste!" : "¡Perdiste!";
        document.getElementById((maquina === "piedra") ? 'Ganador' : 'Perdedor').src = '..//Game-Piedra-Papel-Tijera/imgs/' + ((maquina === "piedra") ? 'ganador' : 'perdedor') + '.png';
        document.getElementById((maquina === "piedra") ? 'Ganador' : 'Perdedor').style.display = 'block';
        break;
      case "tijeras":
        resultado = (maquina === "papel") ? "¡Ganaste!" : "¡Perdiste!";
        document.getElementById((maquina === "papel") ? 'Ganador' : 'Perdedor').src = '..//Game-Piedra-Papel-Tijera/imgs/' + ((maquina === "papel") ? 'ganador' : 'perdedor') + '.png';
        document.getElementById((maquina === "papel") ? 'Ganador' : 'Perdedor').style.display = 'block';
        break;
    }
  
    document.getElementById("resultado").innerHTML = `Elegiste ${SelecUsuario}, la computadora eligió ${maquina}. ${resultado}`;
  }
  