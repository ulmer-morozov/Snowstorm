


    //
    // function createCanvasWithControls(objs) {
    //
    //     var addBall = function() {
    //         var newBall = new BallObject((Math.random() * 2), 2);
    //         newBall.p.x = 100;
    //         newBall.p.y = 100;
    //         objs.unshift(newBall);
    //     },
    //         d = document,
    //         c = d.createElement('canvas'),
    //         b = d.createElement('button'),
    //         els = d.createElement('input'),
    //         clr = d.createElement('input'),
    //         cnt = d.createElement('input'),
    //         clrl = d.createElement('label'),
    //         cntl = d.createElement('label');
    //
    //     b.innerHTML = 'add ball with elasticity: <span>0.70</span>';
    //     b.onclick = addBall;
    //
    //     clr.type = cnt.type = 'checkbox';
    //     clr.checked = true;
    //     cnt.checked = true;
    //     clrl.style.display = cntl.style.display = 'block';
    //
    //     clrl.appendChild(clr);
    //     clrl.appendChild(d.createTextNode('clear each frame'));
    //
    //     cntl.appendChild(cnt);
    //     cntl.appendChild(d.createTextNode('continuous shower!'));
    //
    //     c.style.border = 'solid 1px #3369ff';
    //     c.style.display = 'block';
    //     c.width = 700;
    //     c.height = 550;
    //
    //     d.body.appendChild(c);
    //     d.body.appendChild(els);
    //     d.body.appendChild(b);
    //     d.body.appendChild(clrl);
    //     d.body.appendChild(cntl);
    //
    //     setInterval(function() {
    //         if (cnt.checked) {
    //             addBall();
    //         }
    //         console.log("addball")
    //     }, 1000);
    //
    //     return c;
    // }

    // start:
    // var objs = [],
    //     c = createCanvasWithControls(objs),
    //     ctx = c.getContext('2d'),
    //     fps = 60, // target frames per second
    //     ppm = 20, // pixels per meter
    //     g = 9.8, // m/s^2 - acceleration due to gravity
    //     t = new Date().getTime();

    // add the floor:
    // let floor = new FloorObject();
    // floor.p.y += floor.r + c.height - 10;
    // objs.push(floor);

    // let roof = new FloorObject()
    // roof.p.y += 10 - roof.r;
    // objs.push(roof);

    // let lBorder = new FloorObject();
    // lBorder.p.y = 0;
    // lBorder.p.x = - 10000;
    // objs.push(lBorder);


    // ctx.fillStyle = 'rgb(100,200,255)';
    // ctx.strokeStyle = 'rgb(33,69,233)';
    //
    // setInterval(function() {
    //
    //     var i, j,
    //         nw = c.width,
    //         nh = c.height,
    //         nt = new Date().getTime(),
    //         dt = (nt - t) / 1000;
    //
    //     // if (true) {
    //     //     ctx.clearRect(0, 0, nw, nh);
    //     // }
    //
    //     for (i = 0; i < objs.length; i++) {
    //
    //         // if a ball > viewport width away from center remove it
    //         let obj = objs[i];
    //         while (obj.p.x < -nw || obj.p.x > nw) {
    //             objs.splice(i, 1);
    //         }
    //
    //         objs[i].update(g, dt, ppm, objs, i);
    //
    //         for (j = i + 1; j < objs.length; j++) {
    //             objs[j].collide(objs[i]);
    //         }
    //
    //         objs[i].draw(ctx);
    //     }
    //
    //     t = nt;
    //     console.log("enterframe")
    // }, 1000 / fps);
