// load sprite
let trash = App.loadSpritesheet('trash.png', 48, 43, 0, 1);
let tr = 0;
let _stateTimer = 0;

function increase() {
    let x = Math.random() * 80; 
    let y = Math.random() * 40;

    Map.putObject(x, y, trash);
}

App.onUpdate.Add(function(dt) {

    _stateTimer += dt;

    for(let i = 0; i < 11; i++)
    {
        if(_stateTimer >= 2) {
            App.showCenterLabel("The game will start soon.");}
        if(_stateTimer >= 4) {
            App.showCenterLabel("Pick Up the Trash");}
        if(6 < _stateTimer < 10) {
            App.showCenterLabel("Pick Up the Trash");
            increase();
        }
    
        if(_stateTimer == 10) {
            judgement();
        }
    }

});

function judgement() {
    if(trash == null) {
        App.showCenterLabel("Success");
    }
    else {
        App.showCenterLabel("You Fail");
    }
}

// 플레이어가 오브젝트를 공격(Z키)했을 때 호출 되는 이벤트
App.onObjectAttacked.Add(function(sender, x, y) {
    Map.putObject(x, y, trash) == null;
});