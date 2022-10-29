class GameModel {
    frameSize: number;
    canvasize: null | number = null;
    tileWidth: null | number = null;
    emptyTileIndex: null | number = null;
    tiles: null | [] = null;

    constructor(frameSize: number) {
        this.frameSize = frameSize;
    }

    emptyTileNeighbors() {
        const neighbors = {};

        const emptyTileX = this.tiles[this.emptyTileIndex].x;
        const emptyTileY = this.tiles[this.emptyTileIndex].y;

        const topNX = emptyTileX;
        const topNY = emptyTileY - this.tileWidth;
        if (topNX >= 0 && topNY >= 0 && topNX <= this.canvasize && topNY <= this.canvasize) {
            neighbors.top = [topNX, topNY];
        }

        const bottomNX = emptyTileX;
        const bottomNY = emptyTileY + this.tileWidth;
        if (bottomNX >= 0 && bottomNY >= 0 && bottomNX <= this.canvasize && bottomNY <= this.canvasize) {
            neighbors.bottom = [bottomNX, bottomNY];
        }

        const leftNX = emptyTileX - this.tileWidth;
        const leftNY = emptyTileY;
        if (leftNX >= 0 && leftNY >= 0 && leftNX <= this.canvasize && leftNY <= this.canvasize) {
            neighbors.left = [leftNX, leftNY];
        }

        const rightNX = emptyTileX + this.tileWidth;
        const rightNY = emptyTileY;
        if (rightNX >= 0 && rightNY >= 0 && rightNX <= this.canvasize && rightNY <= this.canvasize) {
            neighbors.right = [rightNX, rightNY
            ];
        }

        return neighbors;
    }

    emptyTileNeighborsMouseover(e) {
        const posX = e.offsetX;
        const posY = e.offsetY;
        const neighbors = this.emptyTileNeighbors();
        //console.log(neighbors);
    }

    neighborsMouseMouseMove(e) {
        const canvas = e.target;
        const posX = e.offsetX;
        const posY = e.offsetY;
        const neighbors = this.emptyTileNeighbors();

        for (const key in neighbors) {
            const x = neighbors[key][0];
            const y = neighbors[key][1];

            if (posX > x && posX < (x + this.tileWidth) && posY > y && posY < (y + this.tileWidth)) {
                console.log(`neighbor ${key}`);
                canvas.setAttribute('title', 'click to move');
                canvas.style.cursor = 'pointer';
            } else {
                canvas.style.cursor = 'auto';

            }
        }
    }
}

export { GameModel }