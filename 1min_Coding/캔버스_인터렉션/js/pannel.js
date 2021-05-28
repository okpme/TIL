
class Panel{
    constructor(){
        this.scale = 0;
        this.angle = 0;
    }

    draw() {
        ctx.fillStyle = 'rgba(255,255,0,0.7)';
        ctx.resetTransform();
        ctx.translate(oX,oY);
        ctx.scale(this.scale,this.scale);
        ctx.rotate(canUtil.toRadian(this.angle));
        ctx.translate(-oX,-oY);
        ctx.fillRect(oX-150,oY-150,300,300);
        ctx.fillStyle = '#fff';
        if(selectedBox){
            ctx.fillText(selectedBox, oX, oY);
        }
        ctx.resetTransform();
    }

    showContent(){
        ctx.fillStyle ='#fff';
        ctx.fillText(selectedBox, oX, oY);
    }
}