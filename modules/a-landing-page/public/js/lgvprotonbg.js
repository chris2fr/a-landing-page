  function startProtonBackground () {

      var canvas;
      var context;
      var proton;
      var renderer;
      var emitter;
      var stats;
      var colors;

      protonBackground();

      function protonBackground() {
        colors = ["#74b9ff", "#e84393", "#6c5ce7", "#00b894", "#fdcb6e", "#006266", "#1B1464"];
        canvas = document.getElementById("protonCanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 2;
        context = canvas.getContext("2d");
        context.globalCompositeOperation = "darker";

        createProton();
        tick();

      }

      function createProton() {
        proton = new Proton();
        emitter = new Proton.Emitter();

        emitter.rate = new Proton.Rate(20);
        emitter.damping = 0.008;
   
        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.Radius(30, 600));
        emitter.addInitialize(new Proton.Velocity(new Proton.Span(0.5), new Proton.Span(0, 360), "polar"));
        emitter.addInitialize(new Proton.Position(new Proton.RectZone(0, 0, canvas.width, canvas.height)));
   
        var crossZoneBehaviour = new Proton.CrossZone(new Proton.RectZone(0, 0, canvas.width, canvas.height), "cross");
        emitter.addBehaviour(crossZoneBehaviour);
        emitter.addBehaviour(new Proton.Alpha(Proton.getSpan(0.35, 0.55)));
        emitter.addBehaviour(new Proton.Color(colors));
        emitter.addBehaviour(new Proton.RandomDrift(50, 50, 0.5));

      emitter.emit("once");
        proton.addEmitter(emitter);

        renderer = new Proton.CanvasRenderer(canvas);
        proton.addRenderer(renderer);

        emitter.preEmit(0.5);
      }


    function tick () {
      requestAnimationFrame(tick);
      proton.update();
    }

  }
  apos.util.onReadyAndRefresh(() => {
    startProtonBackground();  
  });
  startProtonBackground();  
