const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];

function numbering(table, blockTable) {
    let number = 0;
    const blocks = [];
    
    function bfs(r, c, number) {
        const queue = [];
        let length = 0;
        table[r][c] = 0;
        queue.push([r, c, number]);
        
        while (queue.length > 0) {
            const [r, c, number] = queue.shift();
            blockTable[r][c] = number;
            length++;
            
            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];
                if (nr >= 0 && nr < table.length && nc >= 0 && nc < table.length && table[nr][nc] === 1) {
                    table[nr][nc] = 0;
                    queue.push([nr, nc, number]);
                }
            }
        }
        
        return length;
    }
    
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table.length; j++) {
            if (table[i][j] === 1) {
                number++;
                
                const length = bfs(i, j, number);
                blocks.push({
                    number,
                    length,
                    isUsed: false,
                    starts: new Array(4)
                });
            }
        }
    }
    
    return blocks;
}

function solution(gameBoard, table) {
    let answer = 0;
    
    const tables = Array.from({ length: 4 }, () => {
        return Array.from({ length: table.length }, () => {
            return Array.from({ length: table.length }, () => 0)
        })
    });
    
    const blocks = numbering(table, tables[0]);
    
    for (let i = 1; i < 4; i++) {
        for (let j = 0; j < table.length; j++) {
            for (let k = 0; k < table.length; k++) {
                tables[i][k][table.length - j - 1] = tables[i - 1][j][k];
            }
        }
    }
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < table.length; j++) {
            for (let k = 0; k < table.length; k++) {
                if (tables[i][j][k] !== 0) {
                    const number = tables[i][j][k];
                    if (!blocks[number - 1].starts[i]) blocks[number - 1].starts[i] = [j, k];
                }
            }
        }
    }
    
    function match(r, c) {
        let index = 0;
        const space = [];
        gameBoard[r][c] = 1;
        space.push([r, c]);
        
        while (space.length !== index) {
            const [r, c] = space[index];
            index++;
            
            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];
                
                if (nr >= 0 && nr < gameBoard.length && nc >= 0 && nc < gameBoard.length && gameBoard[nr][nc] === 0) {
                    gameBoard[nr][nc] = 1;
                    space.push([nr, nc])
                }
            }
        }
        
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].length === space.length && !blocks[i].isUsed) {
                const number = blocks[i].number;
                for (let j = 0; j < 4; j++) {
                    const [br, bc] = blocks[i].starts[j];
                    for (let k = 0; k < space.length; k++) {
                        const [sr, sc] = space[k];
                        const tr = br + sr - r;
                        const tc = bc + sc - c;
                        if (tr < 0 || tr >= table.length || tc < 0 || tc >= table.length || tables[j][tr][tc] !== number ) break;
                        if (k === space.length - 1) {
                            blocks[i].isUsed = true;
                            return space.length;
                        }
                    }
                }
            }
        }
        
        return 0;
    }
    
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard.length; j++) {
            if (gameBoard[i][j] === 0) {
                answer += match(i, j);
            }
        }
    }
    
    return answer;
}