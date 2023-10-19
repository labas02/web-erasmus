const canvas = document.getElementById("game");
        const ctx = canvas.getContext("2d");

        let gameoveris = false;
         const snakeprefab = [{ x: 200, y: 200 }, { x: 190, y: 200 }, { x: 180, y: 200 }, { x: 170, y: 200 }, { x: 160, y: 200 }];
        let snake = [{ x: 200, y: 200 }, { x: 190, y: 200 },{ x: 180, y: 200 },];
        let dx = 10;
        let dy = 0;
        let snakeSize = 10;

        let score = 0;

        const apples = [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ];

        function isCollision(obj1, obj2) {
            return (
                obj1.x < obj2.x + snakeSize &&
                obj1.x + snakeSize > obj2.x &&
                obj1.y < obj2.y + snakeSize &&
                obj1.y + snakeSize > obj2.y
            );
        }

       function isCollisionWithSelf(head) {
    for (var i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false; // Return false if no collision is detected
}


function reset(){
   location.reload();
   snake.x = 10000;
}

        function randomApple(apple) {
            if (apple.x === 0) {
                apple.x = Math.floor(Math.random() * (canvas.width / 10)) * 10;
                apple.y = Math.floor(Math.random() * (canvas.height / 10)) * 10;
            }
        }

        function drawApple(apple) {
            ctx.beginPath();
            ctx.arc(apple.x + snakeSize / 2, apple.y + snakeSize / 2, snakeSize / 2, 0, Math.PI * 2);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();
        }

        function drawSnakePart(part) {
            ctx.beginPath();
            ctx.fillRect(part.x, part.y, snakeSize, snakeSize);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }

        function drawSnake() {
            snake.forEach(part => drawSnakePart(part));
        }

        function moveSnake() {
            const head = { x: snake[0].x + dx, y: snake[0].y + dy };
            snake.unshift(head);

            if (isCollisionWithSelf(head)) {
                    
              document.getElementById('endscreenContainer').style.visibility = 'visible';
            }

            if (isCollision(head, apples[0])) {
                score++;
                apples[0] = { x: 0, y: 0 }; // Reset the apple
            }
            else if (isCollision(head, apples[1])) {
                score++;
                apples[1] = { x: 0, y: 0 }; // Reset the apple
            }
            else if (isCollision(head, apples[2])) {
                score++;
                apples[2] = { x: 0, y: 0 }; // Reset the apple
            }else if(head.x > 900||head.x < 0||head.y > 700|| head.y <0){
                document.getElementById('endscreenContainer').style.visibility = 'visible';

            }else {
                snake.pop();
            }
        }

        function clearBoard() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function getScore(){
            document.getElementById('score').textContent = 'score:'+ score;
        }

        function update() {
            clearBoard();
            moveSnake();
            drawSnake();
            getScore();
            apples.forEach(apple => {
                randomApple(apple);
                drawApple(apple);
            });
        }

        document.addEventListener('keydown', (event) => {
            const name = event.key;
            if (name === 'w' && dy === 0) {
                dx = 0;
                dy = -snakeSize;
            }
            if (name === 'a' && dx === 0) {
                dx = -snakeSize;
                dy = 0;
            }
            if (name === 's' && dy === 0) {
                dx = 0;
                dy = snakeSize;
            }
            if (name === 'd' && dx === 0) {
                dx = snakeSize;
                dy = 0;
            }
        });

        setInterval(update, 100);
