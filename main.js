let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #d49864;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d49864;">Estudiante de Ciencias de la Computación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
